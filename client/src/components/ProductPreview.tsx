import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Monitor, Smartphone, Sparkles } from "lucide-react";
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
          <div className="animate-in slide-in-from-bottom-4 duration-1000 ease-out">
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-gradient-to-r from-primary/12 to-primary/8 text-primary border-primary/30 text-sm font-semibold tracking-wide shadow-lg" data-testid="badge-preview-label">
              <Sparkles className="h-4 w-4 mr-2" />
              Live Platform Experience
            </Badge>
          </div>
          <div className="animate-in slide-in-from-bottom-6 duration-1000 delay-200 ease-out">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight tracking-tight" data-testid="text-preview-title">
              Ontdek de 
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mt-2">JanazApp Interface</span>
            </h2>
          </div>
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-400 ease-out">
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8" data-testid="text-preview-subtitle">
              Een intuïtieve digitale omgeving waar
              <span className="text-foreground font-medium"> complexe overlijdensprocedures</span> 
              <br className="hidden md:block" />
              worden getransformeerd tot 
              <span className="text-primary font-semibold"> overzichtelijke, begeleide stappen</span>
            </p>
            
            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
              <Button 
                size="lg"
                className="gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold text-lg shadow-xl transition-all duration-500 border-0"
                onClick={handleDemoClick}
                data-testid="button-request-demo"
              >
                <Monitor className="h-5 w-5" />
                Vraag Live Demo Aan
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="gap-3 px-8 py-4 rounded-full bg-background/80 backdrop-blur border-primary/30 text-primary font-semibold text-lg shadow-lg transition-all duration-500"
                onClick={handleVideoClick}
                data-testid="button-watch-video"
              >
                <PlayCircle className="h-5 w-5" />
                Bekijk Video Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Premium Mockup Display */}
        <div className="relative max-w-7xl mx-auto mb-20 animate-in slide-in-from-bottom-8 duration-1000 delay-600 ease-out">
          {/* Sophisticated Background Frame */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-2xl opacity-60"></div>
          
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm" data-testid="card-mockup">
            <CardContent className="p-8 lg:p-16">
              <div className="relative">
                {/* Premium Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted/20 to-muted/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-10"></div>
                  <img 
                    src={mockupImage} 
                    alt="JanazApp Dashboard Preview - Desktop en Mobiel Interface" 
                    className="relative w-full h-auto rounded-2xl"
                    data-testid="img-dashboard-mockup"
                  />
                </div>
                
                {/* Interactive Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 md:hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-sm rounded-2xl group">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="gap-3 px-8 py-4 rounded-full bg-background/90 backdrop-blur border-primary/30 text-primary shadow-2xl transition-all duration-500"
                    onClick={handleVideoClick}
                    data-testid="button-video-overlay"
                  >
                    <PlayCircle className="h-6 w-6" />
                    Bekijk Live Demo
                  </Button>
                </div>
                
                {/* Mobile Play Button */}
                <div className="md:hidden absolute bottom-4 right-4 z-20">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="gap-2 rounded-full bg-background/90 backdrop-blur border-primary/30 text-primary shadow-lg"
                    onClick={handleVideoClick}
                    data-testid="button-mobile-video"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Premium Floating Feature Cards */}
          <div className="absolute -bottom-8 left-6 right-6 lg:left-12 lg:right-12 z-30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <Card className="bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-md border-0 shadow-xl hover-elevate" data-testid="card-feature-dashboard">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 text-primary mx-auto w-fit shadow-lg">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-60"></div>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">Compleet Dashboard</p>
                  <p className="text-xs text-muted-foreground">Alle procedures overzichtelijk</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-md border-0 shadow-xl hover-elevate" data-testid="card-feature-mobile">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 text-primary mx-auto w-fit shadow-lg">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-60"></div>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">Mobiel Optimaal</p>
                  <p className="text-xs text-muted-foreground">24/7 toegankelijk platform</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-md border-0 shadow-xl hover-elevate" data-testid="card-feature-progress">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 text-primary mx-auto w-fit shadow-lg">
                      <div className="relative h-6 w-6">
                        <div className="absolute inset-0 rounded-full border-2 border-primary/40"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary border-r-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-60"></div>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">Live Tracking</p>
                  <p className="text-xs text-muted-foreground">Real-time status updates</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}