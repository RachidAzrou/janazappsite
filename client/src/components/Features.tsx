import { Card, CardContent } from "@/components/ui/card";
import { FileText, Clock, Shield, Users, Globe, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Snelle Procedures",
    description: "Verminder wachttijden door gestroomlijnde digitale processen en real-time communicatie tussen alle betrokken partijen."
  },
  {
    icon: FileText,
    title: "Digitale Documentatie",
    description: "Alle benodigde documenten op één plek. Van overlijdensakte tot laissez-passer, alles digitaal georganiseerd."
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description: "Uw gevoelige gegevens zijn veilig opgeslagen met moderne encryptie en voldoen aan alle privacy-wetgeving."
  },
  {
    icon: Users,
    title: "Cultureel Bewust",
    description: "Ontwikkeld specifiek voor de islamitische gemeenschap, rekening houdend met religieuze vereisten en tradities."
  },
  {
    icon: Globe,
    title: "Internationale Support",
    description: "Ondersteuning voor repatriëring naar landen van herkomst met consulaire procedures en luchtvaartvereisten."
  },
  {
    icon: CheckCircle,
    title: "Transparante Voortgang",
    description: "Real-time inzicht in de status van alle procedures, zodat families altijd weten waar ze staan."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-muted/30" id="diensten">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Waarom Kiezen voor JanazApp?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-subtitle">
            Onze digitale oplossing vereenvoudigt de complexe overlijdensadministratie en 
            respecteert de culturele en religieuze behoeften van de islamitische gemeenschap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className="h-12 w-12 text-primary mx-auto" data-testid={`icon-feature-${index}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8" data-testid="text-stats-title">
            JanazApp in Cijfers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div data-testid="stat-muslims">
              <div className="text-3xl font-bold text-primary mb-2">7.6%</div>
              <div className="text-muted-foreground">Moslims in België</div>
            </div>
            <div data-testid="stat-documents">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Documenten per geval</div>
            </div>
            <div data-testid="stat-countries">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Landen ondersteund</div>
            </div>
            <div data-testid="stat-time">
              <div className="text-3xl font-bold text-primary mb-2">50%</div>
              <div className="text-muted-foreground">Sneller proces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}