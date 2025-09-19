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
    <footer className="bg-card border-t" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logoUrl} alt="JanazApp" className="h-8 w-auto mb-4" data-testid="img-footer-logo" />
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="text-company-description">
              JanazApp digitaliseert de overlijdenszorg voor de islamitische gemeenschap in West-Europa. 
              Ons platform verbindt families, uitvaartondernemers, moskeeën en overheidsinstellingen.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-address">Brussels, Belgium & Amsterdam, Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span data-testid="text-email">info@janazapp.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span data-testid="text-phone">+32 2 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-links-title">Snelle Links</h4>
            <ul className="space-y-2">
              <li><a href="#over-ons" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-about-footer">Over Ons</a></li>
              <li><a href="#diensten" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-services-footer">Diensten</a></li>
              <li><a href="#registratie" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-registration-footer">Registratie</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">Privacy</a></li>
              <li><a href="#voorwaarden" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-terms">Voorwaarden</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-support-title">Contact & Support</h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => handleContactClick('chat')}
                data-testid="button-live-chat"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Live Chat Support
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => handleContactClick('emergency')}
                data-testid="button-emergency"
              >
                <Phone className="h-4 w-4 mr-2" />
                24/7 Noodlijn
              </Button>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="E-mail voor updates" 
                  className="text-sm"
                  data-testid="input-newsletter"
                />
                <Button type="submit" size="sm" className="w-full" data-testid="button-newsletter">
                  Nieuwsbrief
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 JanazApp. Alle rechten voorbehouden.
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy-bottom">Privacy</a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-cookies">Cookies</a>
            <a href="#toegankelijkheid" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-accessibility">Toegankelijkheid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}