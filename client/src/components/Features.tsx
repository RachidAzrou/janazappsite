import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, CheckCircle, Monitor, Smartphone, Clock } from "lucide-react";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineSpeed, MdDevices, MdOutlineCircleNotifications } from "react-icons/md";
import { PiMosqueBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import mockupImage from "@assets/2_1758294099667.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";



export default function Features() {
  const { t } = useTranslation();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  const features = [
    {
      icon: MdOutlineSpeed,
      title: t('features.digital.title'),
      description: t('features.digital.description')
    },
    {
      icon: MdDevices,
      title: t('features.community.title'),
      description: t('features.community.description')
    },
    {
      icon: AiOutlineSafetyCertificate,
      title: t('features.support.title'),
      description: t('features.support.description')
    },
    {
      icon: PiMosqueBold,
      title: t('features.cultural.title'),
      description: t('features.cultural.description')
    },
    {
      icon: Plane,
      title: t('features.international.title'),
      description: t('features.international.description')
    },
    {
      icon: MdOutlineCircleNotifications,
      title: t('features.legal.title'),
      description: t('features.legal.description')
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden islamic-pattern" id="diensten">
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
        {/* Premium Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`transition-all duration-1000 ease-out ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-features-subtitle">
              {t('features.subtitle')}
            </p>
          </div>
        </div>

        {/* Platform Preview with Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup Links */}
          <div className={`transition-all duration-1000 ease-out ${
            sectionVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <img 
              src={mockupImage} 
              alt="JanazApp Platform Preview - Desktop en Mobiel Interface" 
              className="w-full h-auto"
            />
          </div>

          {/* Features Rechts */}
          <div ref={featuresRef}>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 group hover-elevate transition-all duration-700 ease-out ${
                      featuresVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{ 
                      transitionDelay: featuresVisible ? `${index * 150}ms` : '0ms'
                    }}
                    data-testid={`feature-item-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-md bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-105 transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}