import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section ref={sectionRef} className="relative py-12 lg:py-16 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden islamic-pattern">
          {/* Premium Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Sophisticated Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0.5px,_transparent_0.5px)] bg-[length:24px_24px] opacity-[0.15] animate-pulse"></div>
            
            {/* Elegant Geometric Shapes */}
            <div className="absolute top-16 left-8 w-64 h-64 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl animate-pulse opacity-70"></div>
            <div className="absolute bottom-32 right-12 w-48 h-48 bg-gradient-to-tl from-primary/6 to-primary/2 rounded-full blur-2xl animate-pulse delay-1000 opacity-80"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/4 to-primary/8 rounded-full blur-xl animate-pulse delay-500"></div>
            
            {/* Subtle Line Accents */}
            <div className="absolute bottom-24 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <div className={`transition-all duration-1000 ease-out ${
                sectionVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-privacy-title">
                  Privacybeleid
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-privacy-intro">
                  Uw privacy is van het grootste belang voor JanazApp. Dit beleid beschrijft hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen.
                </p>
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 space-y-8">
                  
                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">1. Gegevensverzameling</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Wij verzamelen alleen de gegevens die noodzakelijk zijn voor het verlenen van onze diensten in de overlijdenszorg. 
                      Dit omvat persoonlijke informatie van nabestaanden, uitvaartondernemers en andere betrokken partijen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">2. Gebruik van gegevens</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Uw gegevens worden uitsluitend gebruikt voor het faciliteren van overlijdensprocedures, 
                      het coördineren tussen verschillende partijen en het naleven van wettelijke verplichtingen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">3. Beveiliging</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Wij implementeren moderne beveiligingsmaatregelen om uw persoonlijke gegevens te beschermen tegen 
                      ongeoorloofde toegang, wijziging of openbaarmaking. Alle gegevens worden geëncrypteerd opgeslagen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">4. Delen van gegevens</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Gegevens worden alleen gedeeld met partijen die direct betrokken zijn bij de overlijdensprocedure, 
                      zoals uitvaartondernemers, moskeeën en overheidsinstanties, en alleen met uw expliciete toestemming.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">5. Uw rechten</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      U heeft het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. 
                      Neem contact met ons op via info@janazapp.com voor vragen over uw privacy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">6. GDPR-compliance</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      JanazApp voldoet volledig aan de Algemene Verordening Gegevensbescherming (AVG/GDPR). 
                      Wij respecteren uw privacy en hanteren strenge procedures voor gegevensbescherming.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">7. Contact</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Voor vragen over dit privacybeleid kunt u contact opnemen via:
                      <br />
                      E-mail: info@janazapp.com
                      <br />
                      Telefoon: +32 2 123 4567
                    </p>
                  </section>

                  <div className="mt-8 p-4 bg-muted/50 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Laatst bijgewerkt: januari 2025
                    </p>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}