import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, Shield, Users, Globe, CheckCircle, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Snelle Procedures",
    kicker: "24-48 uur sneller",
    description: "Verminder wachttijden door gestroomlijnde digitale processen.",
    benefit: "Geen gemiste termijnen meer"
  },
  {
    icon: FileText,
    title: "Digitale Documentatie",
    kicker: "Alles op één plek",
    description: "Van overlijdensakte tot laissez-passer, volledig georganiseerd.",
    benefit: "Geen verdwaalde documenten"
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    kicker: "GDPR compliant",
    description: "Moderne encryptie en volledige privacy-bescherming.",
    benefit: "Uw gegevens zijn veilig"
  },
  {
    icon: Users,
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
    <section className="relative py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-background overflow-hidden" id="diensten">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] animate-grid-breathe"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/7 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-2xl animate-float-slow delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-primary/8 rounded-full blur-md animate-float-reverse delay-500"></div>
        
        {/* Animated Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-right"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-slide-left delay-700"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-slide-right delay-1400"></div>
        
        {/* Pulsing Dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse-soft delay-300"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-primary/50 rounded-full animate-pulse-soft delay-600"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20" data-testid="badge-section-label">
              Onze Voordelen
            </Badge>
          </div>
          <div className="animate-in slide-in-from-bottom-6 duration-700 delay-150">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text" data-testid="text-features-title">
              Waarom Kiezen voor JanazApp?
            </h2>
          </div>
          <div className="animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-subtitle">
              Digitale oplossing die respecteert en vereenvoudigt
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-20">
          {/* Dashboard Preview */}
          <div className="xl:col-span-1 animate-in slide-in-from-left duration-700 delay-400">
            <div className="sticky top-8">
              <Card className="overflow-hidden border-0 shadow-xl bg-background/80 backdrop-blur">
                <CardContent className="p-4">
                  <img 
                    src="/attached_assets/image_1758288626690.png"
                    alt="JanazApp Platform Preview - Dashboard Interface"
                    className="w-full h-auto rounded-lg"
                    data-testid="img-platform-preview"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Features Cards */}
          <div className="xl:col-span-3">
            <div className="animate-in slide-in-from-bottom-8 duration-700 delay-500 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="animate-in slide-in-from-bottom-12 duration-700 hover:scale-105 transition-all opacity-0"
                style={{ 
                  animationDelay: `${(index + 1) * 150 + 800}ms`, // Start after grid container
                  animationFillMode: 'both'
                }}
                data-testid={`card-feature-${index}`}
              >
                <Card className="relative group h-full border-0 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-[1px] bg-background/95 rounded-lg"></div>
                  
                  <div className="relative p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-6 w-6" data-testid={`icon-feature-${index}`} />
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-accent/30 border-primary/30 text-primary px-3 py-1" 
                          data-testid={`badge-feature-${index}`}
                        >
                          {feature.kicker}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300" data-testid={`text-feature-title-${index}`}>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3" data-testid={`text-feature-description-${index}`}>
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <CheckCircle className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-primary" data-testid={`text-feature-benefit-${index}`}>
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

        {/* Call to Action */}
        <div className="text-center animate-in slide-in-from-bottom-8 duration-700 delay-1000">
          <div className="inline-flex items-center gap-2 p-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
            <Button 
              variant="ghost" 
              className="gap-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => console.log('Learn more about process clicked')}
              data-testid="button-learn-process"
            >
              <ExternalLink className="h-4 w-4" />
              Bekijk het Complete Proces
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}