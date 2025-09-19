import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, CheckCircle, Monitor, Smartphone, Clock } from "lucide-react";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineSpeed, MdDevices, MdOutlineCircleNotifications } from "react-icons/md";
import { PiMosqueBold } from "react-icons/pi";
import mockupImage from "@assets/2_1758294099667.png";

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
    icon: MdOutlineCircleNotifications,
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
          <div className="animate-in slide-in-from-bottom-8 duration-900 delay-400 ease-out">
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-features-subtitle">
              Een digitale oplossing die religieuze waarden respecteert en
              <span className="text-foreground font-medium"> complexe processen vereenvoudigt</span>
            </p>
          </div>
        </div>

        {/* Interactive Platform Showcase */}
        <div className="mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mockup */}
            <div className="lg:sticky lg:top-8">
              <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-background via-muted/20 to-background">
                <img 
                  src={mockupImage} 
                  alt="JanazApp Platform Preview - Desktop en Mobiel Interface" 
                  className="w-full h-auto"
                />
              </Card>
            </div>
            
            {/* Animated Features */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Ontdek de voordelen
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  JanazApp transformeert complexe procedures tot eenvoudige, begeleide stappen.
                </p>
              </div>
              
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group animate-in slide-in-from-right-8 duration-700 opacity-0 hover-elevate"
                    style={{ 
                      animationDelay: `${index * 150 + 400}ms`,
                      animationFillMode: 'both'
                    }}
                    data-testid={`feature-item-${index}`}
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-background via-muted/10 to-background border border-muted/20 group-hover:border-primary/20 transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/15 to-primary/8 text-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {feature.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <CheckCircle className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-xs font-medium text-primary">
                            {feature.benefit}
                          </span>
                        </div>
                      </div>
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