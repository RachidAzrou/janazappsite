import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logoUrl from "@assets/Logo H@2x_1758276388954.png";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
    // TODO: Remove mock functionality - replace with actual API call
  };

  const handleContactClick = (type: string) => {
    console.log(`Contact via ${type} clicked`);
    // TODO: Remove mock functionality - replace with actual contact functionality
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-accent/20 border-t border-border/50 backdrop-blur-sm" id="contact">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group">
              <img 
                src={logoUrl} 
                alt="JanazApp" 
                className="h-10 w-auto mb-6 transition-all duration-300 group-hover:scale-105" 
                data-testid="img-footer-logo" 
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed max-w-lg text-base" data-testid="text-company-description">
                JanazApp digitaliseert de overlijdenszorg voor de islamitische gemeenschap in West-Europa. 
                Ons platform verbindt families, uitvaartondernemers, moskeeën en overheidsinstellingen.
              </p>
              <div className="pt-2 space-y-3">
                <div className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span data-testid="text-address" className="font-medium">Brussels, Belgium & Amsterdam, Netherlands</span>
                </div>
                <div className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span data-testid="text-email" className="font-medium">info@janazapp.com</span>
                </div>
                <div className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span data-testid="text-phone" className="font-medium">+32 2 123 4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg tracking-tight" data-testid="text-links-title">
                Snelle Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#over-ons" 
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 py-1" 
                    data-testid="link-about-footer"
                  >
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">Over Ons</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#diensten" 
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 py-1" 
                    data-testid="link-services-footer"
                  >
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">Diensten</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#registratie" 
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 py-1" 
                    data-testid="link-registration-footer"
                  >
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">Registratie</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#privacy" 
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 py-1" 
                    data-testid="link-privacy"
                  >
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">Privacy</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#voorwaarden" 
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 py-1" 
                    data-testid="link-terms"
                  >
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">Voorwaarden</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="relative">
          <Separator className="mb-8 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
            <div className="text-sm text-muted-foreground font-medium" data-testid="text-copyright">
              © 2025 JanazApp. Alle rechten voorbehouden.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium hover:translate-y-[-1px]" 
                data-testid="link-privacy-bottom"
              >
                Privacy
              </a>
              <a 
                href="#cookies" 
                className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium hover:translate-y-[-1px]" 
                data-testid="link-cookies"
              >
                Cookies
              </a>
              <a 
                href="#toegankelijkheid" 
                className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium hover:translate-y-[-1px]" 
                data-testid="link-accessibility"
              >
                Toegankelijkheid
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}