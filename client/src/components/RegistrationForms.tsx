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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AlertCircle, Users, Building2, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod validation schemas
const citizenFormSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht").min(2, "Voornaam moet minstens 2 karakters bevatten"),
  lastName: z.string().min(1, "Achternaam is verplicht").min(2, "Achternaam moet minstens 2 karakters bevatten"),
  email: z.string().min(1, "E-mailadres is verplicht").email("Vul een geldig e-mailadres in"),
  phone: z.string().optional().refine((val) => !val || /^[\+]?[0-9\-\s\(\)]{10,}$/.test(val), {
    message: "Vul een geldig telefoonnummer in (bijv. +31 6 12345678)"
  }),
  city: z.string().optional(),
  preferredLanguage: z.string().min(1, "Selecteer een gewenste taal"),
  acceptPrivacy: z.boolean().refine(val => val === true, {
    message: "U moet akkoord gaan met de privacyverklaring om door te gaan"
  })
});

const partnerFormSchema = z.object({
  companyName: z.string().min(1, "Bedrijfsnaam is verplicht").min(2, "Bedrijfsnaam moet minstens 2 karakters bevatten"),
  contactPerson: z.string().min(1, "Contactpersoon is verplicht").min(2, "Contactpersoon moet minstens 2 karakters bevatten"),
  email: z.string().min(1, "E-mailadres is verplicht").email("Vul een geldig e-mailadres in"),
  phone: z.string().optional().refine((val) => !val || /^[\+]?[0-9\-\s\(\)]{10,}$/.test(val), {
    message: "Vul een geldig telefoonnummer in (bijv. +31 20 1234567)"
  }),
  partnerType: z.string().min(1, "Selecteer het type partner"),
  city: z.string().optional(),
  description: z.string().optional(),
  acceptPrivacy: z.boolean().refine(val => val === true, {
    message: "U moet akkoord gaan met de privacyverklaring om door te gaan"
  })
});

type CitizenFormData = z.infer<typeof citizenFormSchema>;
type PartnerFormData = z.infer<typeof partnerFormSchema>;

export default function RegistrationForms() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  const [successType, setSuccessType] = useState<'citizen' | 'partner'>('citizen');

  // Form hook instances
  const citizenForm = useForm<CitizenFormData>({
    resolver: zodResolver(citizenFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      preferredLanguage: 'nederlands',
      acceptPrivacy: false
    }
  });

  const partnerForm = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      partnerType: '',
      city: '',
      description: '',
      acceptPrivacy: false
    }
  });

  // Update RTL state when language changes
  const handleCitizenLanguageChange = (value: string) => {
    citizenForm.setValue('preferredLanguage', value);
    setIsRTL(value === 'arabisch');
  };

  const handleCitizenSubmit = async (data: CitizenFormData) => {
    try {
      // TODO: Remove mock functionality - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessType('citizen');
      setShowSuccess(true);
      citizenForm.reset();
    } catch (error) {
      // Handle submission error
      console.error('Submission error:', error);
    }
  };

  const handlePartnerSubmit = async (data: PartnerFormData) => {
    try {
      // TODO: Remove mock functionality - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessType('partner');
      setShowSuccess(true);
      partnerForm.reset();
    } catch (error) {
      // Handle submission error
      console.error('Submission error:', error);
    }
  };

  const handleEmergencyContact = () => {
    console.log('Emergency contact clicked');
    // TODO: Remove mock functionality - replace with actual emergency contact
  };

  if (showSuccess) {
    const successContent = successType === 'citizen' ? {
      title: "Registratie Voltooid",
      subtitle: "Bedankt voor uw registratie bij JanazApp",
      message: "Uw aanvraag is in goede orde ontvangen. Wij begrijpen dat dit een moeilijke tijd voor u kan zijn en waarderen uw vertrouwen in onze dienstverlening.",
      nextSteps: [
        "Binnen 24 uur neemt één van onze medewerkers persoonlijk contact met u op",
        "Wij begeleiden u door het activatieproces en leggen het platform uit",
        "Onze ondersteuning is beschikbaar wanneer u ons nodig heeft"
      ]
    } : {
      title: "Partnerschap Aanvraag Ontvangen",
      subtitle: "Dank voor uw interesse in samenwerking",
      message: "Uw aanvraag voor een partnerschap met JanazApp is ontvangen. Wij waarderen uw toewijding aan het ondersteunen van families in moeilijke tijden.",
      nextSteps: [
        "Binnen 48 uur beoordelen wij uw aanvraag zorgvuldig",
        "Een van onze partnership managers neemt contact met u op",
        "Wij bespreken samen de mogelijkheden voor samenwerking"
      ]
    };

    return (
      <section className="relative py-12 lg:py-16 bg-background overflow-hidden islamic-pattern" id="registratie">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border border-border shadow-sm bg-background overflow-hidden">
              <CardContent className="p-8">
                {/* Success Icon */}
                <div className="mb-8">
                  <div className="p-4 w-fit mx-auto">
                    <CheckCircle2 className="h-12 w-12 text-primary" data-testid="icon-success" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-success-title">
                      {successContent.title}
                    </h3>
                    <p className="text-lg text-muted-foreground" data-testid="text-success-subtitle">
                      {successContent.subtitle}
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <p className="text-base text-foreground leading-relaxed mb-4" data-testid="text-success-message">
                      {successContent.message}
                    </p>
                    
                    <div className="text-left space-y-3">
                      <h4 className="font-medium text-foreground mb-3">Volgende stappen:</h4>
                      <ul className="space-y-2" role="list" aria-label="Volgende stappen">
                        {successContent.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-sm font-medium mt-0.5 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Heeft u vragen of heeft u directe ondersteuning nodig?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button 
                        variant="outline"
                        size="default"
                        onClick={() => setShowSuccess(false)} 
                        data-testid="button-success-back"
                      >
                        Terug naar Registratie
                      </Button>
                      <Button 
                        variant="default"
                        size="default"
                        onClick={handleEmergencyContact}
                        data-testid="button-contact-support"
                      >
                        Contact Opnemen
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 bg-background overflow-hidden islamic-pattern" id="registratie">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`transition-all duration-1000 ease-out ${
            sectionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-registration-subtitle">
              Een digitale oplossing die religieuze waarden respecteert en
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
              <Card className="border border-border shadow-md bg-background/95 backdrop-blur-sm overflow-hidden" data-testid="card-citizen-form">
                <CardHeader className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                      <IoPeopleOutline className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Registratie voor Burgers</h3>
                      <p className="text-sm text-muted-foreground mt-1">Voor particulieren en families</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className={`p-8 ${isRTL ? 'rtl-support' : ''}`}>
                  <Form {...citizenForm}>
                    <form onSubmit={citizenForm.handleSubmit(handleCitizenSubmit)} className="space-y-6">
                      <div className="space-y-8">
                        <div className={`pb-6 ${isRTL ? 'text-right' : 'text-center'} bg-muted/30 -mx-6 px-6 py-4 mb-6`}>
                          <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                              <IoPeopleOutline className="h-4 w-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground">Persoonlijke Gegevens</h4>
                          </div>
                          <p className="text-base text-muted-foreground">Vul uw gegevens in voor een persoonlijke service</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={citizenForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Voornaam *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="bijv. Fatima"
                                    data-testid="input-firstname"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={citizenForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Achternaam *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="bijv. Benali"
                                    data-testid="input-lastname"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={citizenForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mailadres *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="naam@example.be"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                              <p className="text-xs text-muted-foreground">We gebruiken dit voor belangrijke updates</p>
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={citizenForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Telefoonnummer</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+32 472 12 34 56"
                                    data-testid="input-phone"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={citizenForm.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Woonplaats</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="bijv. Antwerpen"
                                    data-testid="input-city"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={citizenForm.control}
                          name="preferredLanguage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gewenste Taal voor Communicatie</FormLabel>
                              <Select value={field.value} onValueChange={(value) => {
                                field.onChange(value);
                                setIsRTL(value === 'arabisch');
                              }}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-language" className={isRTL ? 'select-trigger' : ''}>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="nederlands">Nederlands</SelectItem>
                                  <SelectItem value="engels">English</SelectItem>
                                  <SelectItem value="duits">Deutsch (Duits)</SelectItem>
                                  <SelectItem value="arabisch">العربية (Arabisch)</SelectItem>
                                  <SelectItem value="turks">Türkçe (Turks)</SelectItem>
                                  <SelectItem value="frans">Français (Frans)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Separator />
                        
                        <FormField
                          control={citizenForm.control}
                          name="acceptPrivacy"
                          render={({ field }) => (
                            <FormItem className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3 checkbox-wrapper' : 'space-x-3'}`}>
                              <FormControl>
                                <Checkbox 
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-privacy"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-relaxed">
                                <FormLabel className={`text-sm ${isRTL ? 'checkbox-label' : ''}`}>
                                  Ik ga akkoord met de{" "}
                                  <a href="/privacy" className="text-primary hover:underline">
                                    privacyverklaring
                                  </a>{" "}
                                  en{" "}
                                  <a href="/algemene-voorwaarden" className="text-primary hover:underline">
                                    algemene voorwaarden
                                  </a>
                                </FormLabel>
                                <p className="text-xs text-muted-foreground">
                                  Uw gegevens worden veilig opgeslagen volgens GDPR-richtlijnen
                                </p>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full h-12 text-base font-semibold" 
                            disabled={citizenForm.formState.isSubmitting}
                            data-testid="button-submit-citizen"
                          >
                            {citizenForm.formState.isSubmitting ? "Bezig met Registreren..." : "Registreer als Burger"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Premium Partner Registration */}
            {/* Partner Registration */}
            <TabsContent value="partner">
              <Card className="border border-border shadow-md bg-background/95 backdrop-blur-sm overflow-hidden" data-testid="card-partner-form">
                <CardHeader className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                      <IoBusinessOutline className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Registratie voor Partners</h3>
                      <p className="text-sm text-muted-foreground mt-1">Voor professionals en organisaties</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className={`p-8 ${isRTL ? 'rtl-support' : ''}`}>
                  <Form {...partnerForm}>
                    <form onSubmit={partnerForm.handleSubmit(handlePartnerSubmit)} className="space-y-6">
                      <div className="space-y-8">
                        <div className={`pb-6 ${isRTL ? 'text-right' : 'text-center'} bg-muted/30 -mx-6 px-6 py-4 mb-6`}>
                          <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                              <IoBusinessOutline className="h-4 w-4" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground">Bedrijfsinformatie</h4>
                          </div>
                          <p className="text-base text-muted-foreground">Vul uw bedrijfsgegevens in voor registratie</p>
                        </div>
                        
                        <FormField
                          control={partnerForm.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bedrijfsnaam *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="bijv. Moskee Al-Nour Antwerpen"
                                  data-testid="input-company-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={partnerForm.control}
                            name="contactPerson"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contactpersoon *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Omar El Moussaoui"
                                    data-testid="input-contact-person"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={partnerForm.control}
                            name="partnerType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Type Partner *</FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-partner-type" className={isRTL ? 'select-trigger' : ''}>
                                      <SelectValue placeholder="Selecteer type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="uitvaartondernemer">Uitvaartondernemer - Volledige uitvaartdiensten</SelectItem>
                                    <SelectItem value="moskee">Moskee - Religieuze begeleiding</SelectItem>
                                    <SelectItem value="verzekeraar">Verzekeraar - Uitvaartverzekeringen</SelectItem>
                                    <SelectItem value="wasplaats">Wasplaats - Rituele wassing</SelectItem>
                                    <SelectItem value="andere">Andere - Gerelateerde diensten</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={partnerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mailadres *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="info@moskee-alnour.be"
                                  data-testid="input-partner-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={partnerForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Telefoonnummer</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+32 3 234 56 78"
                                    data-testid="input-partner-phone"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={partnerForm.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Vestigingsplaats</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="bijv. Brussel"
                                    data-testid="input-partner-city"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={partnerForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Beschrijving van Diensten</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Beschrijf welke diensten u aanbiedt en hoe u families kunt ondersteunen..."
                                  data-testid="textarea-description"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Separator />
                        
                        <FormField
                          control={partnerForm.control}
                          name="acceptPrivacy"
                          render={({ field }) => (
                            <FormItem className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3 checkbox-wrapper' : 'space-x-3'}`}>
                              <FormControl>
                                <Checkbox 
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-partner-privacy"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-relaxed">
                                <FormLabel className={`text-sm ${isRTL ? 'checkbox-label' : ''}`}>
                                  Ik ga akkoord met de{" "}
                                  <a href="/privacy" className="text-primary hover:underline">
                                    privacyverklaring
                                  </a>{" "}
                                  en{" "}
                                  <a href="/algemene-voorwaarden" className="text-primary hover:underline">
                                    algemene voorwaarden
                                  </a>
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full h-12 text-base font-semibold" 
                            disabled={partnerForm.formState.isSubmitting}
                            data-testid="button-submit-partner"
                          >
                            {partnerForm.formState.isSubmitting ? "Bezig met Registreren..." : "Registreer als Partner"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}