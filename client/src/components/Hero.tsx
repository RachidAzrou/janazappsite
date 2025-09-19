import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import heroImage from "@assets/generated_images/Islamic_architecture_hero_background_5d13e65a.png";

export default function Hero() {
  const { t } = useTranslation();
  
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
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8" data-testid="text-hero-subtitle">
            {t('hero.subtitle')}
          </p>

          {/* Registration Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Burgers Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-elevate" data-testid="card-citizens">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <IoPeopleOutline className="h-12 w-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-citizens-title">
                  {t('registration.citizen.title')}
                </h3>
                <p className="text-white/80 mb-4" data-testid="text-citizens-description">
                  {t('registration.citizen.subtitle')}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => console.log('Burger registration clicked')}
                  data-testid="button-register-citizen"
                >
                  {t('registration.citizen.submit')}
                </Button>
              </CardContent>
            </Card>

            {/* Partners Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-elevate" data-testid="card-partners">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <IoBusinessOutline className="h-12 w-12 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-partners-title">
                  {t('registration.partner.title')}
                </h3>
                <p className="text-white/80 mb-4" data-testid="text-partners-description">
                  {t('registration.partner.subtitle')}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => console.log('Partner registration clicked')}
                  data-testid="button-register-partner"
                >
                  {t('registration.partner.submit')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}