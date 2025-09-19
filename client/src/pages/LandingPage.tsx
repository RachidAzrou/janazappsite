import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import RegistrationForms from "@/components/RegistrationForms";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductPreview />
        <RegistrationForms />
      </main>
      <Footer />
    </div>
  );
}