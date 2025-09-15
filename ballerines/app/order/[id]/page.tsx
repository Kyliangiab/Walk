import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function OrderSuccess({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Merci pour votre commande</h1>
        <p className="text-muted-foreground">Référence: {params.id}</p>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border p-6 text-left">
          <h2 className="mb-2 font-semibold">Email de confirmation (simulation)</h2>
          <p className="text-sm text-muted-foreground">
            Bonjour, votre commande a bien été confirmée. Vous recevrez une notification lors de l'expédition.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}


