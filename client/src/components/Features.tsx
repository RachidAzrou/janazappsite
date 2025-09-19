import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, CheckCircle } from "lucide-react";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineSpeed, MdDevices } from "react-icons/md";
import { PiMosqueBold } from "react-icons/pi";

const features = [
  {
    icon: MdOutlineSpeed,
    title: "Snelle Procedures",
    kicker: "24-48 uur sneller",
    description: "Verminder wachttijden door gestroomlijnde digitale processen.",
    benefit: "Geen gemiste termijnen meer"
  },
  {
    icon: MdDevices,
    title: "Digitale Documentatie",
    kicker: "Alles op één plek",
    description: "Van overlijdensakte tot laissez-passer, volledig georganiseerd.",
    benefit: "Geen verdwaalde documenten"
  },
  {
    icon: AiOutlineSafetyCertificate,
    title: "Veilig & Betrouwbaar",
    kicker: "GDPR compliant",
    description: "Moderne encryptie en volledige privacy-bescherming.",
    benefit: "Uw gegevens zijn veilig"
  },
  {
    icon: PiMosqueBold,
    title: "Cultureel Bewust",
    kicker: "Islamitisch gericht",
    description: "Rekening houdend met religieuze vereisten en tradities.",
    benefit: "Respectvolle behandeling"
  },
  {
    icon: Globe,
    title: "Internationale Support",
    kicker: "Repatriëring mogelijk",
    description: "Ondersteuning voor consulaire procedures wereldwijd.",
    benefit: "Naar land van herkomst"
  },
  {
    icon: CheckCircle,
    title: "Transparante Voortgang",
    kicker: "Real-time updates",
    description: "Altijd op de hoogte van de status van procedures.",
    benefit: "Geen onzekerheid meer"
  }
];


export default function Features() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden" id="diensten">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0.5px,_transparent_0.5px)] bg-[length:24px_24px] opacity-[0.15] animate-pulse"></div>
        
        {/* Elegant Geometric Shapes */}
        <div className="absolute top-16 left-8 w-64 h-64 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-32 right-12 w-48 h-48 bg-gradient-to-tl from-primary/6 to-primary/2 rounded-full blur-2xl animate-pulse delay-1000 opacity-80"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/4 to-primary/8 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Subtle Line Accents */}
        <div className="absolute top-24 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-24 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div className="text-center mb-24 lg:mb-32">
          <div className="animate-in slide-in-from-bottom-6 duration-900 delay-200 ease-out">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight tracking-tight" data-testid="text-features-title">
              Waarom Kiezen voor
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">JanazApp?</span>
            </h2>
          </div>
          <div className="animate-in slide-in-from-bottom-8 duration-900 delay-400 ease-out">
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-features-subtitle">
              Een digitale oplossing die religieuze waarden respecteert en
              <span className="text-foreground font-medium"> complexe processen vereenvoudigt</span>
            </p>
          </div>
        </div>

        {/* Premium Features Grid */}
        <div className="mb-28">
          {/* Premium Features Cards */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="animate-in slide-in-from-bottom-8 duration-1000 opacity-0 hover-elevate"
                    style={{ 
                      animationDelay: `${(index + 1) * 100 + 800}ms`,
                      animationFillMode: 'both'
                    }}
                    data-testid={`card-feature-${index}`}
                  >
                    <Card className="relative group h-full border-0 bg-gradient-to-br from-background via-background to-muted/20 shadow-lg backdrop-blur-sm transition-all duration-500">
                      {/* Sophisticated Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-[1px] bg-gradient-to-br from-background to-muted/10 rounded-xl"></div>
                      
                      <div className="relative p-8">
                        <CardHeader className="p-0 pb-6">
                          {/* Icon and Badge Layout */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="relative">
                              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/8 text-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                                <IconComponent className="h-7 w-7" data-testid={`icon-feature-${index}`} />
                              </div>
                              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </div>
                            <Badge 
                              variant="outline" 
                              className="text-xs bg-gradient-to-r from-primary/10 to-primary/5 border-primary/25 text-primary px-4 py-1.5 font-medium tracking-wide" 
                              data-testid={`badge-feature-${index}`}
                            >
                              {feature.kicker}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-500 leading-tight" data-testid={`text-feature-title-${index}`}>
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-muted-foreground mb-6 leading-relaxed text-base" data-testid={`text-feature-description-${index}`}>
                            {feature.description}
                          </p>
                          
                          {/* Benefit Highlight */}
                          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/15">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary/20 to-primary/30 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-primary" data-testid={`text-feature-benefit-${index}`}>
                              {feature.benefit}
                            </p>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
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