import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Users, Building2, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";

export default function RegistrationForms() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [acceptPrivacyCitizen, setAcceptPrivacyCitizen] = useState(false);
  const [acceptPrivacyPartner, setAcceptPrivacyPartner] = useState(false);

  const [citizenForm, setCitizenForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    preferredLanguage: 'nederlands'
  });

  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnerType: '',
    city: '',
    description: ''
  });

  const handleCitizenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!citizenForm.firstName.trim() || !citizenForm.lastName.trim() || !citizenForm.email.trim()) {
      alert('Vul alle verplichte velden in.');
      return;
    }
    
    // Check privacy consent
    if (!acceptPrivacyCitizen) {
      alert('Accepteer de privacyverklaring om door te gaan.');
      return;
    }
    
    setIsSubmitting(true);
    // TODO: Remove mock functionality - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!partnerForm.companyName.trim() || !partnerForm.contactPerson.trim() || !partnerForm.email.trim() || !partnerForm.partnerType) {
      alert('Vul alle verplichte velden in inclusief het type partner.');
      return;
    }
    
    // Check privacy consent
    if (!acceptPrivacyPartner) {
      alert('Accepteer de privacyverklaring om door te gaan.');
      return;
    }
    
    setIsSubmitting(true);
    // TODO: Remove mock functionality - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleEmergencyContact = () => {
    console.log('Emergency contact clicked');
    // TODO: Remove mock functionality - replace with actual emergency contact
  };

  if (showSuccess) {
    return (
      <section className="relative py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden islamic-pattern" id="registratie">
        {/* Premium Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-12 w-64 h-64 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl animate-pulse opacity-70"></div>
          <div className="absolute bottom-16 right-12 w-48 h-48 bg-gradient-to-tl from-primary/6 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-12">
                {/* Success Animation */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                  <div className="relative p-6 rounded-full bg-gradient-to-br from-primary/15 to-primary/10 w-fit mx-auto">
                    <CheckCircle2 className="h-16 w-16 text-primary animate-pulse" data-testid="icon-success" />
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent" data-testid="text-success-title">
                  Registratie Succesvol!
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-success-message">
                  Welkom bij JanazApp! We nemen binnen 24 uur contact met u op om uw account te activeren en u te begeleiden door het platform.
                </p>
                
                <Button 
                  size="lg"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold text-lg shadow-xl transition-all duration-500 border-0"
                  onClick={() => setShowSuccess(false)} 
                  data-testid="button-success-ok"
                >
                  Terug naar Registratie
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden islamic-pattern" id="registratie">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Refined Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0.5px,_transparent_0.5px)] bg-[length:24px_24px] opacity-[0.15] animate-pulse"></div>
        
        {/* Elegant Geometric Shapes */}
        <div className="absolute top-16 left-8 w-64 h-64 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-32 right-12 w-48 h-48 bg-gradient-to-tl from-primary/6 to-primary/2 rounded-full blur-2xl animate-pulse delay-1000 opacity-80"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/4 to-primary/8 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`transition-all duration-1000 ease-out ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="text-registration-subtitle">
              Ervaar zelf hoe digitalisering de overlijdenszorg kan verbeteren en
              <span className="text-foreground font-medium"> complexe processen vereenvoudigt</span>
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div ref={formRef} className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          formVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <Tabs defaultValue="burger" className="w-full">
            {/* Simple Tab Navigation */}
            <div className="mb-8">
              <TabsList className="grid w-full grid-cols-2 bg-muted rounded-lg p-1">
                <TabsTrigger 
                  value="burger" 
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground"
                  data-testid="tab-citizen"
                >
                  Particulieren
                </TabsTrigger>
                <TabsTrigger 
                  value="partner" 
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground"
                  data-testid="tab-partner"
                >
                  Professionals
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Citizen Registration */}
            <TabsContent value="burger">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden" data-testid="card-citizen-form">
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                      <IoPeopleOutline className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Registratie voor Burgers</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleCitizenSubmit} className="space-y-8">
                    <div className="space-y-8">
                      <div className="text-center pb-4">
                        <h4 className="text-xl font-bold text-foreground mb-2">Persoonlijke Gegevens</h4>
                        <p className="text-muted-foreground">Vul uw gegevens in voor een persoonlijke service</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Voornaam *</Label>
                          <Input
                            id="firstName"
                            placeholder="bijv. Ahmed"
                            value={citizenForm.firstName}
                            onChange={(e) => setCitizenForm(prev => ({...prev, firstName: e.target.value}))}
                            required
                            data-testid="input-firstname"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Achternaam *</Label>
                          <Input
                            id="lastName"
                            placeholder="bijv. Van der Berg"
                            value={citizenForm.lastName}
                            onChange={(e) => setCitizenForm(prev => ({...prev, lastName: e.target.value}))}
                            required
                            data-testid="input-lastname"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mailadres *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="naam@voorbeeld.nl"
                          value={citizenForm.email}
                          onChange={(e) => setCitizenForm(prev => ({...prev, email: e.target.value}))}
                          required
                          data-testid="input-email"
                        />
                        <p className="text-xs text-muted-foreground">We gebruiken dit voor belangrijke updates</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefoonnummer</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+31 6 12345678"
                            value={citizenForm.phone}
                            onChange={(e) => setCitizenForm(prev => ({...prev, phone: e.target.value}))}
                            data-testid="input-phone"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">Woonplaats</Label>
                          <Input
                            id="city"
                            placeholder="bijv. Amsterdam"
                            value={citizenForm.city}
                            onChange={(e) => setCitizenForm(prev => ({...prev, city: e.target.value}))}
                            data-testid="input-city"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="language">Gewenste Taal voor Communicatie</Label>
                        <Select value={citizenForm.preferredLanguage} onValueChange={(value) => setCitizenForm(prev => ({...prev, preferredLanguage: value}))}>
                          <SelectTrigger data-testid="select-language">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nederlands">Nederlands</SelectItem>
                            <SelectItem value="engels">English</SelectItem>
                            <SelectItem value="duits">Deutsch (Duits)</SelectItem>
                            <SelectItem value="arabisch">العربية (Arabisch)</SelectItem>
                            <SelectItem value="turks">Türkçe (Turks)</SelectItem>
                            <SelectItem value="frans">Français (Frans)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="privacy" 
                          checked={acceptPrivacyCitizen}
                          onCheckedChange={(checked) => setAcceptPrivacyCitizen(checked === true)}
                          data-testid="checkbox-privacy"
                        />
                        <div className="space-y-1 leading-none">
                          <Label htmlFor="privacy" className="text-sm">
                            Ik ga akkoord met de{" "}
                            <a href="/privacy" className="text-primary hover:underline">
                              privacyverklaring
                            </a>{" "}
                            en{" "}
                            <a href="/algemene-voorwaarden" className="text-primary hover:underline">
                              algemene voorwaarden
                            </a>
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Uw gegevens worden veilig opgeslagen volgens GDPR-richtlijnen
                          </p>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={!acceptPrivacyCitizen || isSubmitting}
                        data-testid="button-submit-citizen"
                      >
                        {isSubmitting ? "Bezig met Registreren..." : "Registreer als Burger"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Premium Partner Registration */}
            {/* Partner Registration */}
            <TabsContent value="partner">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden" data-testid="card-partner-form">
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                      <IoBusinessOutline className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Registratie voor Partners</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handlePartnerSubmit} className="space-y-8">
                    <div className="space-y-8">
                      <div className="text-center pb-4">
                        <h4 className="text-xl font-bold text-foreground mb-2">Bedrijfsinformatie</h4>
                        <p className="text-muted-foreground">Vul uw bedrijfsgegevens in voor registratie</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Bedrijfsnaam *</Label>
                        <Input
                          id="companyName"
                          placeholder="bijv. Uitvaart Van der Berg B.V."
                          value={partnerForm.companyName}
                          onChange={(e) => setPartnerForm(prev => ({...prev, companyName: e.target.value}))}
                          required
                          data-testid="input-company-name"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactPerson">Contactpersoon *</Label>
                          <Input
                            id="contactPerson"
                            placeholder="Voor- en achternaam"
                            value={partnerForm.contactPerson}
                            onChange={(e) => setPartnerForm(prev => ({...prev, contactPerson: e.target.value}))}
                            required
                            data-testid="input-contact-person"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerType">Type Partner *</Label>
                          <Select value={partnerForm.partnerType} onValueChange={(value) => setPartnerForm(prev => ({...prev, partnerType: value}))} required>
                            <SelectTrigger data-testid="select-partner-type">
                              <SelectValue placeholder="Selecteer type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="uitvaartondernemer">Uitvaartondernemer - Volledige uitvaartdiensten</SelectItem>
                              <SelectItem value="moskee">Moskee - Religieuze begeleiding</SelectItem>
                              <SelectItem value="verzekeraar">Verzekeraar - Uitvaartverzekeringen</SelectItem>
                              <SelectItem value="gemeente">Gemeente - Burgerlijke stand</SelectItem>
                              <SelectItem value="wasplaats">Wasplaats - Rituele wassing</SelectItem>
                              <SelectItem value="andere">Andere - Gerelateerde diensten</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="partnerEmail">E-mailadres *</Label>
                        <Input
                          id="partnerEmail"
                          type="email"
                          placeholder="contact@uwbedrijf.nl"
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm(prev => ({...prev, email: e.target.value}))}
                          required
                          data-testid="input-partner-email"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="partnerPhone">Telefoonnummer</Label>
                          <Input
                            id="partnerPhone"
                            type="tel"
                            placeholder="+31 20 1234567"
                            value={partnerForm.phone}
                            onChange={(e) => setPartnerForm(prev => ({...prev, phone: e.target.value}))}
                            data-testid="input-partner-phone"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerCity">Vestigingsplaats</Label>
                          <Input
                            id="partnerCity"
                            placeholder="bijv. Rotterdam"
                            value={partnerForm.city}
                            onChange={(e) => setPartnerForm(prev => ({...prev, city: e.target.value}))}
                            data-testid="input-partner-city"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Beschrijving van Diensten</Label>
                        <Textarea
                          id="description"
                          value={partnerForm.description}
                          onChange={(e) => setPartnerForm(prev => ({...prev, description: e.target.value}))}
                          placeholder="Beschrijf welke diensten u aanbiedt en hoe u families kunt ondersteunen..."
                          data-testid="textarea-description"
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="partnerPrivacy" 
                          checked={acceptPrivacyPartner}
                          onCheckedChange={(checked) => setAcceptPrivacyPartner(checked === true)}
                          data-testid="checkbox-partner-privacy"
                        />
                        <div className="space-y-1 leading-none">
                          <Label htmlFor="partnerPrivacy" className="text-sm">
                            Ik ga akkoord met de{" "}
                            <a href="/privacy" className="text-primary hover:underline">
                              privacyverklaring
                            </a>,{" "}
                            <a href="/algemene-voorwaarden" className="text-primary hover:underline">
                              algemene voorwaarden
                            </a>{" "}
                            en{" "}
                            <a href="#partner-terms" className="text-primary hover:underline">
                              partnerovereenkomst
                            </a>
                          </Label>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={!acceptPrivacyPartner || isSubmitting}
                        data-testid="button-submit-partner"
                      >
                        {isSubmitting ? "Bezig met Registreren..." : "Registreer als Partner"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}