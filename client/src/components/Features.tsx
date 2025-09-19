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

        {/* Immersive Platform Experience */}
        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Central Mockup with Floating Features */}
            <div className="lg:col-span-7 relative">
              {/* Main Mockup Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                <Card className="relative overflow-hidden shadow-2xl bg-gradient-to-br from-background via-muted/30 to-background transform transition-all duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={mockupImage} 
                    alt="JanazApp Platform Preview - Desktop en Mobiel Interface" 
                    className="w-full h-auto"
                  />
                </Card>
              </div>
              
              {/* Floating Feature Highlights */}
              <div className="absolute -right-4 top-16 lg:block hidden animate-in slide-in-from-right-8 duration-1000 delay-1000 opacity-0" style={{ animationFillMode: 'both' }}>
                <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-xl border border-primary/20 p-4 max-w-56">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                      <MdOutlineSpeed className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">24-48 uur sneller</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Gestroomlijnde digitale processen</p>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-20 lg:block hidden animate-in slide-in-from-left-8 duration-1000 delay-1200 opacity-0" style={{ animationFillMode: 'both' }}>
                <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-xl border border-primary/20 p-4 max-w-52">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                      <AiOutlineSafetyCertificate className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">GDPR Compliant</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Uw gegevens zijn veilig</p>
                </div>
              </div>
            </div>
            
            {/* Interactive Features Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="mb-8 animate-in slide-in-from-bottom-8 duration-800 delay-300 opacity-0" style={{ animationFillMode: 'both' }}>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Waarom JanazApp?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ontdek hoe onze moderne oplossing islamitische begrafenisprocessen revolutioneert.
                </p>
              </div>
              
              <div className="space-y-3">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group cursor-pointer animate-in slide-in-from-right-8 duration-600 opacity-0"
                      style={{ 
                        animationDelay: `${index * 100 + 600}ms`,
                        animationFillMode: 'both'
                      }}
                      data-testid={`feature-item-${index}`}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-background/80 via-muted/30 to-background/80 backdrop-blur-sm border border-muted/40 p-5 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-xl group-hover:-translate-y-1">
                        {/* Animated background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <IconComponent className="h-5 w-5" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                              {feature.description}
                            </p>
                            <div className="text-xs font-medium text-primary opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                              ✓ {feature.benefit}
                            </div>
                          </div>
                          
                          {/* Subtle arrow indicator */}
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-60 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <div className="w-2 h-2 border-r-2 border-t-2 border-primary rotate-45"></div>
                            </div>
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
      </div>
    </section>
  );
}