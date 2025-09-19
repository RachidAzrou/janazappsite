import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2 } from "lucide-react";
import heroImage from "@assets/generated_images/Islamic_architecture_hero_background_5d13e65a.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Peaceful Islamic architecture" 
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Digitale Overlijdenszorg
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8" data-testid="text-hero-subtitle">
            Afgestemd op mens, ritueel en realiteit
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto" data-testid="text-hero-description">
            Van familie tot overheid, alles verbonden in één platform. 
            Vereenvoudig de complexe overlijdensadministratie voor de islamitische gemeenschap.
          </p>

          {/* Registration Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Burgers Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-elevate" data-testid="card-citizens">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Users className="h-12 w-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-citizens-title">
                  Voor Burgers
                </h3>
                <p className="text-white/80 mb-4" data-testid="text-citizens-description">
                  Registreer je als familie of individu voor toegang tot onze diensten
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => console.log('Burger registration clicked')}
                  data-testid="button-register-citizen"
                >
                  Registreer als Burger
                </Button>
              </CardContent>
            </Card>

            {/* Partners Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-elevate" data-testid="card-partners">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Building2 className="h-12 w-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-partners-title">
                  Voor Partners
                </h3>
                <p className="text-white/80 mb-4" data-testid="text-partners-description">
                  Uitvaartondernemers, moskeeën en andere partners
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => console.log('Partner registration clicked')}
                  data-testid="button-register-partner"
                >
                  Registreer als Partner
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}