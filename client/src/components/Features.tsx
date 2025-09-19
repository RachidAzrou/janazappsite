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
    <section className="py-20 bg-muted/30" id="diensten">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-section-label">
            Onze Voordelen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-features-title">
            Waarom Kiezen voor JanazApp?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-subtitle">
            Digitale oplossing die respecteert en vereenvoudigt
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-200 border-l-4 border-l-primary/20" data-testid={`card-feature-${index}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20 text-primary">
                      <IconComponent className="h-5 w-5" data-testid={`icon-feature-${index}`} />
                    </div>
                    <Badge variant="outline" className="text-xs" data-testid={`badge-feature-${index}`}>
                      {feature.kicker}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-3 leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                  <p className="text-sm font-medium text-primary" data-testid={`text-feature-benefit-${index}`}>
                    ✓ {feature.benefit}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => console.log('Learn more about process clicked')}
            data-testid="button-learn-process"
          >
            <ExternalLink className="h-4 w-4" />
            Bekijk het Complete Proces
          </Button>
        </div>
      </div>
    </section>
  );
}