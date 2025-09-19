import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Clock, Shield, Users, Globe, CheckCircle, Star, ExternalLink } from "lucide-react";

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

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Familie",
    text: "JanazApp heeft ons enorm geholpen tijdens een moeilijke tijd."
  },
  {
    name: "Fatima S.", 
    role: "Uitvaartondernemer",
    text: "De digitalisering heeft onze processen veel efficiënter gemaakt."
  }
];

const partners = [
  "Moskee Al-Nour", "Uitvaart Van der Berg", "Gemeente Amsterdam", "Verzekeraar Delta"
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
        <div className="text-center mb-16">
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

        <Separator className="mb-16" />

        {/* Statistics Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8" data-testid="text-stats-title">
            JanazApp in Cijfers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6" data-testid="stat-muslims">
              <div className="text-3xl font-bold text-primary mb-2">7.6%</div>
              <div className="text-sm text-muted-foreground">Moslims in België</div>
            </Card>
            <Card className="text-center p-6" data-testid="stat-documents">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Documenten per geval</div>
            </Card>
            <Card className="text-center p-6" data-testid="stat-countries">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Landen ondersteund</div>
            </Card>
            <Card className="text-center p-6" data-testid="stat-time">
              <div className="text-3xl font-bold text-primary mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Sneller proces</div>
            </Card>
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Trust Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-testimonials-title">
              Wat Mensen Zeggen
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-4" data-testid={`card-testimonial-${index}`}>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2" data-testid={`text-testimonial-${index}`}>
                        "{testimonial.text}"
                      </p>
                      <p className="text-xs font-medium" data-testid={`text-testimonial-author-${index}`}>
                        {testimonial.name} - {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-partners-title">
              Vertrouwde Partners
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((partner, index) => (
                <Card key={index} className="p-4 text-center hover-elevate" data-testid={`card-partner-${index}`}>
                  <p className="text-sm font-medium text-muted-foreground" data-testid={`text-partner-${index}`}>
                    {partner}
                  </p>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4" data-testid="text-partners-note">
              // TODO: Remove mock data - vervang met echte partner logo's
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}