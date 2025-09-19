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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="animate-in slide-in-from-bottom-12 duration-700 hover:scale-105 transition-all"
                style={{ 
                  animationDelay: `${(index + 1) * 150}ms`,
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