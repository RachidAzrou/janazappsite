import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Monitor, Smartphone, Sparkles } from "lucide-react";
import mockupImage from "@assets/2_1758293870009.png";

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
    <section className="relative py-28 lg:py-36 bg-gradient-to-b from-muted/20 via-background to-muted/30 overflow-hidden" id="preview">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-12 w-72 h-72 bg-gradient-to-br from-primary/6 to-primary/2 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-gradient-to-tl from-primary/4 to-primary/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-r from-primary/3 to-primary/6 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impactful Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-400 ease-out">
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8" data-testid="text-preview-subtitle">
              Een intuïtieve digitale omgeving waar
              <span className="text-foreground font-medium"> complexe overlijdensprocedures</span> 
              <br className="hidden md:block" />
              worden getransformeerd tot 
              <span className="text-primary font-semibold"> overzichtelijke, begeleide stappen</span>
            </p>
          </div>
        </div>

        {/* Premium Mockup Display */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-background via-muted/20 to-background" data-testid="card-mockup">
            <img 
              src={mockupImage} 
              alt="JanazApp Dashboard Preview - Desktop en Mobiel Interface" 
              className="w-full h-auto"
              data-testid="img-dashboard-mockup"
            />
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center" data-testid="card-feature-dashboard">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-3 flex items-center justify-center">
                <Monitor className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Compleet Dashboard</h4>
              <p className="text-sm text-muted-foreground">Alle procedures overzichtelijk</p>
            </div>
            
            <div className="text-center" data-testid="card-feature-mobile">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-3 flex items-center justify-center">
                <Smartphone className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Mobiel Optimaal</h4>
              <p className="text-sm text-muted-foreground">24/7 toegankelijk platform</p>
            </div>
            
            <div className="text-center" data-testid="card-feature-progress">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-3 flex items-center justify-center">
                <div className="relative h-6 w-6">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/40"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary border-r-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
                </div>
              </div>
              <h4 className="font-semibold text-foreground mb-1">Live Tracking</h4>
              <p className="text-sm text-muted-foreground">Real-time status updates</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}