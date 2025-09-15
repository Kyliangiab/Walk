import pandas as pd
import re
from unidecode import unidecode
from collections import Counter

# -----------------------------
# 1. Charger le fichier brut
# -----------------------------
input_file = "chaussuresonline_full.csv"
output_file = "chaussuresonline_clean.csv"
temp_file = "temp_clean.csv"

with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
    raw_data = f.read()

# -----------------------------
# 2. Détection des anomalies (caractères de contrôle)
# -----------------------------
# Liste des caractères de contrôle (0x00–0x1F sauf tab/lf/cr)
control_chars = re.findall(r"[\x00-\x08\x0B-\x0C\x0E-\x1F]", raw_data)

if control_chars:
    count = Counter(control_chars)
    print("⚠️ Anomalies détectées dans le fichier brut :")
    for char, nb in count.items():
        code = ord(char)
        print(f"   - Caractère '{repr(char)}' (code ASCII {code}) trouvé {nb} fois")
else:
    print("✅ Aucune anomalie détectée dans le fichier brut.")

# -----------------------------
# 3. Nettoyage des caractères de contrôle
# -----------------------------
raw_data = re.sub(r"[\x00-\x08\x0B-\x0C\x0E-\x1F]", "", raw_data)

with open(temp_file, "w", encoding="utf-8") as f:
    f.write(raw_data)

# -----------------------------
# 4. Charger dans pandas
# -----------------------------
df = pd.read_csv(temp_file)

# -----------------------------
# 5. Normalisation texte
# -----------------------------
def normalize_text(text):
    if pd.isna(text):
        return None
    text = unidecode(str(text))
    text = text.strip()
    text = " ".join(text.split())
    text = text.title()
    return text

cols_to_clean = [
    "Categorie", "Sous-categorie", "Famille", "Talon", "Info pointure",
    "Semelle", "Doublure", "Matiere exterieure", "Matière", "Couleur principale"
]

for col in cols_to_clean:
    if col in df.columns:
        df[col] = df[col].map(normalize_text)

# -----------------------------
# 6. Sauvegarde finale
# -----------------------------
df.to_csv(output_file, index=False, encoding="utf-8")
print(f"\n✅ Nettoyage terminé ! Fichier exporté : {output_file}")
