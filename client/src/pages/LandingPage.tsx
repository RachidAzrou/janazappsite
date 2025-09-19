import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RegistrationForms from "@/components/RegistrationForms";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <RegistrationForms />
      </main>
      <Footer />
    </div>
  );
}