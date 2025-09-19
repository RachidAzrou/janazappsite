import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Over ons – JanazApp";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-16 lg:py-24 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden islamic-pattern">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ease-out ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase" data-testid="text-about-kicker">
                  Wie we zijn
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight" data-testid="text-about-title">
                  Over Ons
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-about-subtitle">
                  Bij JanazApp hebben we bewezen dat technologie en empathie perfect samengaan.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </section>

        {/* Main Content */}
        <section ref={contentRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ease-out ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Mission Card */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-2xl tracking-tight">
                        <div className="w-10 h-10 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                          <Heart className="h-5 w-5" />
                        </div>
                        <span data-testid="text-mission-title">Onze missie</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-mission-1">
                        We zorgden ervoor dat nabestaanden minder drempels ervaarden.
                        Met JanazApp kregen families een duidelijk overzicht van documenten, stappen en statussen — zonder rompslomp, zonder onduidelijkheden.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-mission-2">
                        Professionals beheerden hun dossiers efficiënter, verifieerden documenten en werkten samen in één omgeving.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Promise Card */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-2xl tracking-tight">
                        <div className="w-10 h-10 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                          <Shield className="h-5 w-5" />
                        </div>
                        <span data-testid="text-promise-title">Onze belofte</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-promise-1">
                        We hebben technologie gekoppeld aan empathie.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-promise-2">
                        JanazApp stond niet enkel voor software, maar voor een betrouwbare partner op een van de meest kwetsbare momenten in het leven.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-background">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl tracking-tight" data-testid="text-values-title">
                        Waar we voor staan
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          Verbinding tussen families en professionals
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          Minder drempels en meer duidelijkheid
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          Technologie met empathie
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          Betrouwbare partner in moeilijke tijden
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ease-out ${
              ctaVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-cta-title">
                  Klaar om deel uit te maken van ons platform?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Word onderdeel van een betrouwbaar netwerk dat families ondersteunt in moeilijke tijden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group" data-testid="button-register-cta">
                    Registreer nu
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button variant="outline" size="lg" data-testid="button-contact-cta">
                    Neem contact op
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}