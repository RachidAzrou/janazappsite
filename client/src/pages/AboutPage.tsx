import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
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
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-about-title">
                  {t('about.title')}
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-about-intro">
                  {t('about.intro')}
                </p>
              </div>
            </div>

            {/* Content Cards */}
            <div ref={contentRef} className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mission Card */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden hover-elevate group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-md bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-105 transition-all duration-300">
                        <Target className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-foreground" data-testid="text-mission-title">
                        {t('about.mission.title')}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-mission-1">
                        {t('about.mission.content1')}
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-mission-2">
                        {t('about.mission.content2')}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Promise Card */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden hover-elevate group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-md bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-105 transition-all duration-300">
                        <Heart className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-foreground" data-testid="text-promise-title">
                        {t('about.promise.title')}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-promise-1">
                        {t('about.promise.content1')}
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-promise-2">
                        {t('about.promise.content2')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}