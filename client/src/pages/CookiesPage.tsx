import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
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
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                    <Cookie className="h-6 w-6" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-cookies-title">
                    Cookiebeleid
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-cookies-intro">
                  JanazApp gebruikt cookies om uw ervaring te verbeteren en onze diensten te optimaliseren. Hieronder vindt u informatie over hoe en waarom wij cookies gebruiken.
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Wat zijn cookies?</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. 
                      Ze helpen ons uw voorkeuren te onthouden en uw ervaring te personaliseren.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Welke cookies gebruiken wij?</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Noodzakelijke cookies</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          Deze cookies zijn essentieel voor het functioneren van onze website en kunnen niet worden uitgeschakeld. 
                          Ze worden gebruikt voor veiligheid, sessiemanagement en toegankelijkheid.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Functionele cookies</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          Deze cookies onthouden uw voorkeuren en instellingen om uw ervaring te verbeteren, 
                          zoals taalvoorkeuren en gebruikersinterface-instellingen.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Analytische cookies</h3>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          We gebruiken deze cookies om te begrijpen hoe bezoekers onze website gebruiken, 
                          zodat we onze diensten kunnen verbeteren.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Waarom gebruiken wij cookies?</h2>
                    <ul className="space-y-2 text-lg leading-relaxed text-muted-foreground">
                      <li>• Om uw inloggegevens veilig te bewaren</li>
                      <li>• Om uw voorkeuren en instellingen te onthouden</li>
                      <li>• Om de prestaties van onze website te verbeteren</li>
                      <li>• Om technische problemen op te sporen en op te lossen</li>
                      <li>• Om frauduleuze activiteiten te voorkomen</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookiebeheer</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      U kunt cookies beheren via de instellingen van uw browser. Let op dat het uitschakelen van bepaalde cookies 
                      de functionaliteit van onze website kan beperken. Noodzakelijke cookies kunnen niet worden uitgeschakeld 
                      omdat ze essentieel zijn voor de werking van de website.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Bewaartermijn</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Sessiecookies worden automatisch verwijderd wanneer u uw browser sluit. 
                      Permanente cookies blijven opgeslagen totdat ze verlopen of door u worden verwijderd. 
                      De bewaartermijn varieert van enkele uren tot maximaal één jaar.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Wijzigingen in dit cookiebeleid</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      We kunnen dit cookiebeleid van tijd tot tijd bijwerken. 
                      Wijzigingen worden op deze pagina gepubliceerd en zijn onmiddellijk van kracht.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Voor vragen over ons cookiebeleid kunt u contact opnemen via:
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