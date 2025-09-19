import { useState } from "react";
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

export default function RegistrationForms() {
  const [citizenStep, setCitizenStep] = useState(1);
  const [partnerStep, setPartnerStep] = useState(1);
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
    description: '',
    experience: ''
  });

  const handleCitizenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate step 1 fields
    if (!citizenForm.firstName.trim() || !citizenForm.lastName.trim() || !citizenForm.email.trim()) {
      setCitizenStep(1);
      alert('Vul alle verplichte velden in.');
      return;
    }
    
    // Only allow submission on step 2 with consent
    if (citizenStep !== 2 || !acceptPrivacyCitizen) {
      alert('Voltooi alle stappen en accepteer de privacyverklaring.');
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
    
    // Validate step 1 fields
    if (!partnerForm.companyName.trim() || !partnerForm.contactPerson.trim() || !partnerForm.email.trim() || !partnerForm.partnerType) {
      setPartnerStep(1);
      alert('Vul alle verplichte velden in inclusief het type partner.');
      return;
    }
    
    // Only allow submission on step 2 with consent
    if (partnerStep !== 2 || !acceptPrivacyPartner) {
      alert('Voltooi alle stappen en accepteer de privacyverklaring.');
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
      <section className="relative py-28 lg:py-36 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden" id="registratie">
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
    <section className="relative py-28 lg:py-36 bg-gradient-to-b from-muted/20 via-background to-muted/30 overflow-hidden" id="registratie">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-8 w-72 h-72 bg-gradient-to-br from-primary/6 to-primary/2 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 right-12 w-56 h-56 bg-gradient-to-tl from-primary/4 to-primary/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-r from-primary/3 to-primary/6 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="animate-in slide-in-from-bottom-4 duration-1000 ease-out">
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-gradient-to-r from-primary/12 to-primary/8 text-primary border-primary/30 text-sm font-semibold tracking-wide shadow-lg" data-testid="badge-registration-label">
              Word Onderdeel van Ons Netwerk
            </Badge>
          </div>
          <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-400 ease-out">
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8" data-testid="text-registration-subtitle">
              Ervaar hoe digitalisering de overlijdenszorg kan verbeteren en
              <span className="text-foreground font-medium"> complexe processen vereenvoudigt</span>
            </p>
            
            {/* Premium Emergency Contact */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-destructive/30 rounded-full blur-lg animate-pulse opacity-60"></div>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="relative gap-3 px-6 py-3 rounded-full bg-background/80 backdrop-blur border-destructive/50 text-destructive font-semibold shadow-lg transition-all duration-500"
                  onClick={handleEmergencyContact}
                  data-testid="button-emergency-contact"
                >
                  <Phone className="h-5 w-5" />
                  Dringend Hulp Nodig? Bel Direct
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Form Container */}
        <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-600 ease-out">
          <Tabs defaultValue="burger" className="w-full">
            {/* Elegant Tab Navigation */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-lg"></div>
              <TabsList className="relative grid w-full grid-cols-2 h-auto p-2 bg-gradient-to-r from-background via-muted/20 to-background border-0 shadow-xl rounded-2xl backdrop-blur-sm">
                <TabsTrigger 
                  value="burger" 
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/15 data-[state=active]:to-primary/10 data-[state=active]:shadow-lg" 
                  data-testid="tab-citizen"
                >
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 text-primary shadow-md">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Burger</div>
                    <div className="text-sm text-muted-foreground">Familie & Individu</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="partner" 
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/15 data-[state=active]:to-primary/10 data-[state=active]:shadow-lg" 
                  data-testid="tab-partner"
                >
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/8 text-primary shadow-md">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Partner</div>
                    <div className="text-sm text-muted-foreground">Professioneel</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Premium Citizen Registration */}
            <TabsContent value="burger">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden" data-testid="card-citizen-form">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 p-8">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-lg">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Registratie voor Burgers</h3>
                        <p className="text-sm text-muted-foreground mt-1">Begin uw digitale reis met JanazApp</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 text-primary px-4 py-2 text-sm font-semibold">
                      Stap {citizenStep} van 2
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleCitizenSubmit} className="space-y-8">
                    {citizenStep === 1 && (
                      <div className="space-y-8">
                        <div className="text-center pb-4">
                          <h4 className="text-xl font-bold text-foreground mb-2">Basisgegevens</h4>
                          <p className="text-muted-foreground">Vul uw persoonlijke gegevens in voor een persoonlijke service</p>
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
                        
                        <Button 
                          type="button" 
                          onClick={() => {
                            // Basic validation before advancing
                            if (!citizenForm.firstName.trim() || !citizenForm.lastName.trim() || !citizenForm.email.trim()) {
                              alert('Vul alle verplichte velden in voordat u doorgaat.');
                              return;
                            }
                            setCitizenStep(2);
                          }}
                          className="w-full gap-2" 
                          data-testid="button-citizen-next"
                        >
                          Volgende Stap
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    
                    {citizenStep === 2 && (
                      <div className="space-y-6">
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Aanvullende Informatie</h4>
                          <p className="text-sm text-muted-foreground">Optionele gegevens voor betere service</p>
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
                              <a href="#privacy" className="text-primary hover:underline">
                                privacyverklaring
                              </a>{" "}
                              en{" "}
                              <a href="#terms" className="text-primary hover:underline">
                                algemene voorwaarden
                              </a>
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Uw gegevens worden veilig opgeslagen volgens GDPR-richtlijnen
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => setCitizenStep(1)}
                            className="flex-1" 
                            data-testid="button-citizen-back"
                          >
                            Vorige
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1" 
                            disabled={!acceptPrivacyCitizen || isSubmitting}
                            data-testid="button-submit-citizen"
                          >
                            {isSubmitting ? "Bezig met Registreren..." : "Registreer als Burger"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Premium Partner Registration */}
            <TabsContent value="partner">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm overflow-hidden" data-testid="card-partner-form">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 p-8">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-lg">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Registratie voor Partners</h3>
                        <p className="text-sm text-muted-foreground mt-1">Word onderdeel van ons professionele netwerk</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 text-primary px-4 py-2 text-sm font-semibold">
                      Stap {partnerStep} van 2
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handlePartnerSubmit} className="space-y-8">
                    {partnerStep === 1 && (
                      <div className="space-y-8">
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Bedrijfsgegevens</h4>
                          <p className="text-sm text-muted-foreground">Basisinformatie over uw organisatie</p>
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
                        
                        <Button 
                          type="button" 
                          onClick={() => {
                            // Basic validation before advancing
                            if (!partnerForm.companyName.trim() || !partnerForm.contactPerson.trim() || !partnerForm.email.trim() || !partnerForm.partnerType) {
                              alert('Vul alle verplichte velden in voordat u doorgaat.');
                              return;
                            }
                            setPartnerStep(2);
                          }}
                          className="w-full gap-2" 
                          data-testid="button-partner-next"
                        >
                          Volgende Stap
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    
                    {partnerStep === 2 && (
                      <div className="space-y-6">
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Aanvullende Informatie</h4>
                          <p className="text-sm text-muted-foreground">Details over uw dienstverlening</p>
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
                          <Label htmlFor="experience">Ervaring met Islamitische Uitvaarten</Label>
                          <Select value={partnerForm.experience} onValueChange={(value) => setPartnerForm(prev => ({...prev, experience: value}))}>
                            <SelectTrigger data-testid="select-experience">
                              <SelectValue placeholder="Selecteer ervaring" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nieuw">Nieuw - Geen ervaring</SelectItem>
                              <SelectItem value="beperkt">Beperkt - Enkele uitvaarten</SelectItem>
                              <SelectItem value="ervaren">Ervaren - Meerdere jaren</SelectItem>
                              <SelectItem value="specialist">Specialist - Islamitische focus</SelectItem>
                            </SelectContent>
                          </Select>
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
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                            <div className="text-sm">
                              <p className="font-medium text-foreground mb-1">Verificatie Vereist</p>
                              <p className="text-muted-foreground">
                                Na registratie verifiëren we uw bedrijfsgegevens voordat uw account wordt geactiveerd.
                              </p>
                            </div>
                          </div>
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
                              <a href="#privacy" className="text-primary hover:underline">
                                privacyverklaring
                              </a>,{" "}
                              <a href="#terms" className="text-primary hover:underline">
                                algemene voorwaarden
                              </a>{" "}
                              en{" "}
                              <a href="#partner-terms" className="text-primary hover:underline">
                                partnerovereenkomst
                              </a>
                            </Label>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={() => setPartnerStep(1)}
                            className="flex-1" 
                            data-testid="button-partner-back"
                          >
                            Vorige
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1" 
                            disabled={!acceptPrivacyPartner || isSubmitting}
                            data-testid="button-submit-partner"
                          >
                            {isSubmitting ? "Bezig met Registreren..." : "Registreer als Partner"}
                          </Button>
                        </div>
                      </div>
                    )}
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