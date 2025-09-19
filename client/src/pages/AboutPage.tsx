import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section ref={sectionRef} className="relative py-12 lg:py-16 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden islamic-pattern">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ease-out ${
              sectionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center" data-testid="text-about-title">
                  Over Ons
                </h1>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                  <p className="text-xl leading-relaxed" data-testid="text-about-intro">
                    Bij JanazApp hebben we bewezen dat technologie en empathie perfect samengaan.
                    We hebben een digitaal platform ontwikkeld dat families, uitvaartondernemers en verzekeringsmaatschappijen met elkaar verbond, zodat alle administratieve en praktische stappen rondom een overlijden snel en correct geregeld werden.
                  </p>

                  <div className="mt-12">
                    <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-mission-title">
                      Onze missie
                    </h2>
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed" data-testid="text-mission-1">
                        We zorgden ervoor dat nabestaanden minder drempels ervaarden.
                        Met JanazApp kregen families een duidelijk overzicht van documenten, stappen en statussen — zonder rompslomp, zonder onduidelijkheden.
                      </p>
                      <p className="text-lg leading-relaxed" data-testid="text-mission-2">
                        Professionals beheerden hun dossiers efficiënter, verifieerden documenten en werkten samen in één omgeving.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-promise-title">
                      Onze belofte
                    </h2>
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed" data-testid="text-promise-1">
                        We hebben technologie gekoppeld aan empathie.
                      </p>
                      <p className="text-lg leading-relaxed" data-testid="text-promise-2">
                        JanazApp stond niet enkel voor software, maar voor een betrouwbare partner op een van de meest kwetsbare momenten in het leven.
                      </p>
                    </div>
                  </div>
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