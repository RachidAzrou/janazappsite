import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/Logo H@2x_1758276388954.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoUrl} alt="JanazApp" className="h-8 w-auto" data-testid="img-logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#over-ons" className="text-foreground hover:text-primary transition-colors" data-testid="link-about">
              Over Ons
            </a>
            <a href="#diensten" className="text-foreground hover:text-primary transition-colors" data-testid="link-services">
              Diensten
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors" data-testid="link-contact">
              Contact
            </a>
            <Button variant="outline" size="sm" data-testid="button-login">
              Inloggen
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log('Mobile menu toggled');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="nav-mobile">
            <div className="space-y-4">
              <a href="#over-ons" className="block text-foreground hover:text-primary transition-colors" data-testid="link-about-mobile">
                Over Ons
              </a>
              <a href="#diensten" className="block text-foreground hover:text-primary transition-colors" data-testid="link-services-mobile">
                Diensten
              </a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors" data-testid="link-contact-mobile">
                Contact
              </a>
              <Button variant="outline" size="sm" className="w-full" data-testid="button-login-mobile">
                Inloggen
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}