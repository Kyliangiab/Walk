import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

# -----------------------------
# Config catégories
# -----------------------------
categories = {
    "Femme": {
        "Charentaises": ("https://www.chaussuresonline.com/fr/chaussure/femme/chaussons-et-pantoufles/charentaise.awp", 40)
    },
    "Homme": {
        "Charentaises": ("https://www.chaussuresonline.com/fr/chaussure/homme/chaussons-et-pantoufles/charentaise.awp", 40)
    },
    "Enfant": {
        "Bébé Fille": ("https://www.chaussuresonline.com/fr/chaussure/bebe-fille/chaussons-et-pantoufles.awp", 20),
        "Bébé Garçon": ("https://www.chaussuresonline.com/fr/chaussure/bebe-garcon/chaussons-et-pantoufles.awp", 20),
    }
}

base_url = "https://www.chaussuresonline.com"

# -----------------------------
# Fonction scraping détails produit
# -----------------------------
def scrape_product_details(url):
    try:
        r = requests.g
        et(url, timeout=15)
        r.raise_for_status()
    except Exception as e:
        print(f"⚠️ Erreur accès fiche produit {url} : {e}")
        return {}

    soup = BeautifulSoup(r.text, "html.parser")
    details = {}

    block = soup.find("div", class_="col details-block")
    if block:
        for li in block.find_all("li"):
            label = li.find("span")
            if label:
                key = label.get_text(strip=True).replace(" :", "")
                value = li.get_text(strip=True).replace(label.get_text(strip=True), "").strip()
                details[key] = value

    return details

# -----------------------------
# Fonction scraping d'une catégorie
# -----------------------------
def scrape_category(cat, souscat, url, max_produits=20):
    produits = []
    produits_scrapes = 0
    page = 1

    while produits_scrapes < max_produits:
        paged_url = url.replace(".awp", f"-{page}.awp") if page > 1 else url
        print(f"Scraping {cat} - {souscat} (Page {page})")

        try:
            r = requests.get(paged_url, timeout=15)
            if r.status_code != 200:
                print(f"⚠️ Status {r.status_code} sur {paged_url}")
                break
        except Exception as e:
            print(f"⚠️ Erreur sur {paged_url} : {e}")
            break

        soup = BeautifulSoup(r.text, "html.parser")
        items = soup.find_all("a", class_="item article-block")

        if not items:
            break

        for item in items:
            if produits_scrapes >= max_produits:
                break

            # Infos de base
            nom_tag = item.find("h2", class_="label")
            nom = nom_tag.get_text(strip=True) if nom_tag else "N/A"

            prix_tag = item.find("p", class_="price")
            prix = prix_tag.get_text(strip=True) if prix_tag else "N/A"

            img_tag = item.find("img")
            image = img_tag["src"] if img_tag else ""

            lien = item["href"] if item.has_attr("href") else ""
            if not lien.startswith("http"):
                lien = base_url + lien

            # Scraping fiche produit
            details = scrape_product_details(lien)

            produit = {
                "Categorie": cat,
                "Sous-categorie": souscat,
                "Nom": nom,
                "Prix": prix,
                "Image": image,
                "Lien": lien
            }
            # Ajout des détails
            produit.update(details)

            produits.append(produit)
            produits_scrapes += 1
            print(f"  → Produit {produits_scrapes}/{max_produits} ajouté")

            time.sleep(0.5)  # éviter surcharge serveur

        page += 1

    return produits

# -----------------------------
# Exécution globale
# -----------------------------
all_data = []

for cat, souscats in categories.items():
    for souscat, (url, limit) in souscats.items():
        data = scrape_category(cat, souscat, url, max_produits=limit)
        all_data.extend(data)

# -----------------------------
# Sauvegarde CSV
# -----------------------------
df = pd.DataFrame(all_data)
df.to_csv("chaussuresonline_full.csv", index=False, encoding="utf-8-sig")

print(f"\n✅ Sauvegarde terminée : {len(df)} produits dans chaussuresonline_full.csv")
