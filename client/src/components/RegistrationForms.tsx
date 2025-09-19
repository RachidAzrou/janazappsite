import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building2 } from "lucide-react";

export default function RegistrationForms() {
  const [citizenForm, setCitizenForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: ''
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

  const handleCitizenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Citizen registration submitted:', citizenForm);
    // TODO: Remove mock functionality - replace with actual API call
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner registration submitted:', partnerForm);
    // TODO: Remove mock functionality - replace with actual API call
  };

  return (
    <section className="py-16 bg-background" id="registratie">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-registration-title">
            Registreer Je Vandaag
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-registration-subtitle">
            Word onderdeel van ons netwerk en ervaar hoe digitalisering de overlijdenszorg kan verbeteren.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="burger" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="burger" className="flex items-center gap-2" data-testid="tab-citizen">
                <Users className="h-4 w-4" />
                Burger
              </TabsTrigger>
              <TabsTrigger value="partner" className="flex items-center gap-2" data-testid="tab-partner">
                <Building2 className="h-4 w-4" />
                Partner
              </TabsTrigger>
            </TabsList>

            {/* Citizen Registration */}
            <TabsContent value="burger">
              <Card data-testid="card-citizen-form">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Registratie voor Burgers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCitizenSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Voornaam *</Label>
                        <Input
                          id="firstName"
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
                        value={citizenForm.email}
                        onChange={(e) => setCitizenForm(prev => ({...prev, email: e.target.value}))}
                        required
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoonnummer</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={citizenForm.phone}
                          onChange={(e) => setCitizenForm(prev => ({...prev, phone: e.target.value}))}
                          data-testid="input-phone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Woonplaats</Label>
                        <Input
                          id="city"
                          value={citizenForm.city}
                          onChange={(e) => setCitizenForm(prev => ({...prev, city: e.target.value}))}
                          data-testid="input-city"
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full" data-testid="button-submit-citizen">
                      Registreer als Burger
                    </Button>
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
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePartnerSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Bedrijfsnaam *</Label>
                      <Input
                        id="companyName"
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
                            <SelectItem value="uitvaartondernemer">Uitvaartondernemer</SelectItem>
                            <SelectItem value="moskee">Moskee</SelectItem>
                            <SelectItem value="verzekeraar">Verzekeraar</SelectItem>
                            <SelectItem value="gemeente">Gemeente</SelectItem>
                            <SelectItem value="andere">Andere</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partnerEmail">E-mailadres *</Label>
                        <Input
                          id="partnerEmail"
                          type="email"
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm(prev => ({...prev, email: e.target.value}))}
                          required
                          data-testid="input-partner-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnerPhone">Telefoonnummer</Label>
                        <Input
                          id="partnerPhone"
                          type="tel"
                          value={partnerForm.phone}
                          onChange={(e) => setPartnerForm(prev => ({...prev, phone: e.target.value}))}
                          data-testid="input-partner-phone"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="partnerCity">Vestigingsplaats</Label>
                      <Input
                        id="partnerCity"
                        value={partnerForm.city}
                        onChange={(e) => setPartnerForm(prev => ({...prev, city: e.target.value}))}
                        data-testid="input-partner-city"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Beschrijving van diensten</Label>
                      <Textarea
                        id="description"
                        value={partnerForm.description}
                        onChange={(e) => setPartnerForm(prev => ({...prev, description: e.target.value}))}
                        placeholder="Beschrijf kort welke diensten u aanbiedt..."
                        data-testid="textarea-description"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" data-testid="button-submit-partner">
                      Registreer als Partner
                    </Button>
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