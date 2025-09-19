import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { TiDocumentText } from "react-icons/ti";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

export default function TermsPage() {
  const { t } = useTranslation('legal');
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
                    <TiDocumentText className="h-6 w-6" />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-terms-title">
                    {t('terms.title')}
                  </h1>
                </div>
                
                <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-terms-intro">
                  {t('terms.intro')}
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
                    <h2 className="text-xl font-bold text-foreground mb-4">1. Definities</h2>
                    <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                      <p><strong>JanazApp:</strong> de aanbieder van het digitale platform voor overlijdenszorg.</p>
                      <p><strong>Gebruiker:</strong> iedere natuurlijke persoon of rechtspersoon die gebruikmaakt van JanazApp.</p>
                      <p><strong>Partner:</strong> ondernemers, verzekeraars of andere partners die zich via JanazApp aansluiten.</p>
                      <p><strong>Diensten:</strong> alle (digitale) functionaliteiten die via het platform beschikbaar worden gesteld.</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">2. Toepasselijkheid</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Deze voorwaarden zijn van toepassing op elk gebruik van JanazApp, zowel door particulieren (families) als door partners (uitvaartondernemers, verzekeraars).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">3. Diensten van JanazApp</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• JanazApp biedt een digitaal platform voor overlijdenszorg, waarmee families, ondernemers en verzekeraars met elkaar worden verbonden.</li>
                      <li>• JanazApp levert geen uitvaartdiensten zelf, maar faciliteert de communicatie en samenwerking tussen betrokken partijen.</li>
                      <li>• JanazApp kan functionaliteiten toevoegen, wijzigen of verwijderen.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">4. Gebruik van het platform</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• De gebruiker is verplicht om juiste en actuele gegevens te verstrekken.</li>
                      <li>• Het is niet toegestaan het platform te gebruiken voor illegale, misleidende of schadelijke doeleinden.</li>
                      <li>• Accounts zijn persoonlijk en mogen niet worden gedeeld zonder toestemming van JanazApp.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">5. Vergoedingen en betalingen</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• Voor families is het gebruik van JanazApp kosteloos.</li>
                      <li>• Partners (ondernemers en verzekeraars) kunnen kosten verschuldigd zijn conform een aparte overeenkomst of abonnementsmodel.</li>
                      <li>• Alle bedragen zijn exclusief btw, tenzij anders vermeld.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">6. Privacy en gegevensbescherming</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• JanazApp verwerkt persoonsgegevens in overeenstemming met de Privacyverklaring en de AVG/GDPR.</li>
                      <li>• Gebruikers blijven verantwoordelijk voor de juistheid van de gegevens die zij aanleveren.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">7. Aansprakelijkheid</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• JanazApp is niet aansprakelijk voor directe of indirecte schade die voortvloeit uit het gebruik van het platform, tenzij sprake is van opzet of grove nalatigheid.</li>
                      <li>• JanazApp is niet verantwoordelijk voor de dienstverlening van uitvaartondernemers, verzekeraars of andere externe partijen die via het platform actief zijn.</li>
                      <li>• De totale aansprakelijkheid van JanazApp is in alle gevallen beperkt tot het bedrag dat de gebruiker in de laatste 12 maanden aan JanazApp heeft betaald (indien van toepassing).</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">8. Intellectuele eigendom</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• Alle rechten van intellectuele eigendom op het platform, de software, logo's en content berusten bij JanazApp.</li>
                      <li>• Het is niet toegestaan zonder toestemming materialen van JanazApp te kopiëren, verspreiden of openbaar te maken.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">9. Duur en beëindiging</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• Gebruikers kunnen hun account op elk moment beëindigen.</li>
                      <li>• JanazApp kan de toegang tot het platform beëindigen bij misbruik of overtreding van deze voorwaarden.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">10. Overmacht</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      JanazApp is niet verplicht om verplichtingen na te komen indien dit onmogelijk is door overmacht, zoals storingen in internetverbinding, stroomuitval, of overheidsmaatregelen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">11. Toepasselijk recht en geschillen</h2>
                    <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>• Op deze voorwaarden is uitsluitend Nederlands recht van toepassing.</li>
                      <li>• Geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar JanazApp gevestigd is.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">12. Wijzigingen</h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      JanazApp kan deze algemene voorwaarden wijzigen. De meest actuele versie staat altijd op de website.
                    </p>
                  </section>

                  <div className="mt-8 p-4 bg-muted/50 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.lastUpdated')}
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