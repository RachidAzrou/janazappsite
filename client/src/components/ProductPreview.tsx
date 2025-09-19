import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Monitor, Smartphone } from "lucide-react";
import mockupImage from "@assets/image_1758276905826.png";

export default function ProductPreview() {
  const handleDemoClick = () => {
    console.log('Request demo clicked');
    // TODO: Remove mock functionality - replace with actual demo request
  };

  const handleVideoClick = () => {
    console.log('Watch video clicked');
    // TODO: Remove mock functionality - replace with actual video modal
  };

  return (
    <section className="py-20 bg-background" id="preview">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-preview-label">
            Platform Preview
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-preview-title">
            Zo Ziet JanazApp Eruit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-preview-subtitle">
            Een intuïtief dashboard dat alle aspecten van de overlijdenszorg overzichtelijk maakt
          </p>
        </div>

        {/* Mockup Display */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10" data-testid="card-mockup">
            <CardContent className="p-8 md:p-12">
              <img 
                src={mockupImage} 
                alt="JanazApp Dashboard Preview - Desktop en Mobiel" 
                className="w-full h-auto rounded-lg"
                data-testid="img-dashboard-mockup"
              />
            </CardContent>
          </Card>
          
          {/* Floating Features */}
          <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-background/95 backdrop-blur border-primary/20 hover-elevate" data-testid="card-feature-dashboard">
                <CardContent className="p-4 text-center">
                  <Monitor className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Dashboard Overzicht</p>
                  <p className="text-xs text-muted-foreground">Alle taken in één oogopslag</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/95 backdrop-blur border-primary/20 hover-elevate" data-testid="card-feature-mobile">
                <CardContent className="p-4 text-center">
                  <Smartphone className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Mobiel Toegankelijk</p>
                  <p className="text-xs text-muted-foreground">Altijd en overal bereikbaar</p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/95 backdrop-blur border-primary/20 hover-elevate" data-testid="card-feature-progress">
                <CardContent className="p-4 text-center">
                  <div className="relative h-6 w-6 mx-auto mb-2">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-primary border-r-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
                  </div>
                  <p className="text-sm font-medium text-foreground">Real-time Updates</p>
                  <p className="text-xs text-muted-foreground">Live status tracking</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}