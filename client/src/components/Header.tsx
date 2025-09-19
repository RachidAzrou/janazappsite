import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { goToSection } from "@/lib/sectionNav";
import logoUrl from "@assets/Logo H@2x_1758276388954.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    goToSection(sectionId, setLocation);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src={logoUrl} alt="JanazApp" className="h-8 w-auto cursor-pointer" data-testid="img-logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/over-ons" className="text-foreground hover:text-primary transition-colors" data-testid="link-about">
              Over Ons
            </Link>
            <a 
              href="/#diensten" 
              className="text-foreground hover:text-primary transition-colors" 
              data-testid="link-services"
              onClick={(e) => handleSectionClick(e, 'diensten')}
            >
              Diensten
            </a>
            <a 
              href="/#registratie" 
              className="text-foreground hover:text-primary transition-colors" 
              data-testid="link-register"
              onClick={(e) => handleSectionClick(e, 'registratie')}
            >
              Registreren
            </a>
            <Button variant="ghost" size="default" className="font-semibold rounded-md bg-primary/15 text-primary hover:bg-primary/25 hover:scale-105 transition-all duration-300 px-4 py-2" data-testid="button-login">
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
              <Link href="/over-ons" className="block text-foreground hover:text-primary transition-colors" data-testid="link-about-mobile">
                Over Ons
              </Link>
              <a 
                href="/#diensten" 
                className="block text-foreground hover:text-primary transition-colors" 
                data-testid="link-services-mobile"
                onClick={(e) => handleSectionClick(e, 'diensten')}
              >
                Diensten
              </a>
              <a 
                href="/#registratie" 
                className="block text-foreground hover:text-primary transition-colors" 
                data-testid="link-register-mobile"
                onClick={(e) => handleSectionClick(e, 'registratie')}
              >
                Registreren
              </a>
              <Button variant="ghost" size="default" className="w-full font-semibold rounded-md bg-primary/15 text-primary hover:bg-primary/25 hover:scale-105 transition-all duration-300 px-4 py-2" data-testid="button-login-mobile">
                Inloggen
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}