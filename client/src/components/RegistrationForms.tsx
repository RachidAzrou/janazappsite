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
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

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
    setIsSubmitting(true);
    // TODO: Remove mock functionality - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <section className="py-20 bg-background" id="registratie">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" data-testid="icon-success" />
              <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-success-title">
                Registratie Succesvol!
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-success-message">
                We nemen binnen 24 uur contact met u op om uw account te activeren.
              </p>
              <Button onClick={() => setShowSuccess(false)} data-testid="button-success-ok">
                Oké
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="registratie">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-registration-label">
            Wordt Onderdeel van Ons Netwerk
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-registration-title">
            Registreer Je Vandaag
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-registration-subtitle">
            Ervaar hoe digitalisering de overlijdenszorg kan verbeteren
          </p>
          
          {/* Emergency Contact */}
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleEmergencyContact}
              data-testid="button-emergency-contact"
            >
              <Phone className="h-4 w-4" />
              Dringend Hulp Nodig? Bel Direct
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="burger" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1">
              <TabsTrigger value="burger" className="flex flex-col items-center gap-2 p-4" data-testid="tab-citizen">
                <Users className="h-5 w-5" />
                <div>
                  <div className="font-medium">Burger</div>
                  <div className="text-xs text-muted-foreground">Familie & Individu</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="partner" className="flex flex-col items-center gap-2 p-4" data-testid="tab-partner">
                <Building2 className="h-5 w-5" />
                <div>
                  <div className="font-medium">Partner</div>
                  <div className="text-xs text-muted-foreground">Professioneel</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Citizen Registration */}
            <TabsContent value="burger">
              <Card data-testid="card-citizen-form">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Registratie voor Burgers
                    <Badge variant="outline" className="ml-auto">
                      Stap {citizenStep} van 2
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCitizenSubmit} className="space-y-6">
                    {citizenStep === 1 && (
                      <div className="space-y-6">
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Basisgegevens</h4>
                          <p className="text-sm text-muted-foreground">Vul uw persoonlijke gegevens in</p>
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
                          onClick={() => setCitizenStep(2)}
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
                            checked={acceptPrivacy}
                            onCheckedChange={(checked) => setAcceptPrivacy(checked === true)}
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
                            disabled={!acceptPrivacy || isSubmitting}
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

            {/* Partner Registration */}
            <TabsContent value="partner">
              <Card data-testid="card-partner-form">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Registratie voor Partners
                    <Badge variant="outline" className="ml-auto">
                      Stap {partnerStep} van 2
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePartnerSubmit} className="space-y-6">
                    {partnerStep === 1 && (
                      <div className="space-y-6">
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
                          onClick={() => setPartnerStep(2)}
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
                            checked={acceptPrivacy}
                            onCheckedChange={(checked) => setAcceptPrivacy(checked === true)}
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
                            disabled={!acceptPrivacy || isSubmitting}
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