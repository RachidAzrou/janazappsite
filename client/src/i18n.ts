import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  nl: {
    translation: {
      // Navigation
      nav: {
        about: "Over Ons",
        services: "Diensten",
        register: "Registreren",
        login: "Inloggen"
      },
      // Hero section
      hero: {
        title: "Digitaal Platform voor Janazah Diensten",
        subtitle: "Streamlijn alle bureaucratische processen rond overlijden met respect voor islamitische tradities.",
        ctaButton: "Begin Nu",
        learnMore: "Meer Informatie"
      },
      // Features
      features: {
        title: "Onze Diensten",
        subtitle: "Alles wat u nodig heeft voor een waardige janazah",
        digital: {
          title: "Digitale Administratie",
          description: "Vereenvoudig alle bureaucratische procedures met onze digitale oplossingen."
        },
        community: {
          title: "Gemeenschap Netwerk",
          description: "Verbind met moskeeën, uitvaartondernemers en andere dienstverleners."
        },
        support: {
          title: "24/7 Ondersteuning",
          description: "Altijd beschikbaar wanneer u ons nodig heeft, met cultureel bewuste begeleiding."
        },
        cultural: {
          title: "Cultureel Respectvol",
          description: "Ontworpen met diep begrip van islamitische waarden en tradities."
        },
        international: {
          title: "Internationale Repatriëring",
          description: "Ondersteuning bij het overbrengen van overledenen naar het thuisland."
        },
        legal: {
          title: "Juridische Begeleiding",
          description: "Hulp bij alle wettelijke vereisten en documentatie."
        }
      },
      // Registration forms
      registration: {
        title: "Wordt Onderdeel van Onze Gemeenschap",
        subtitle: "Registreer u als burger of partner om toegang te krijgen tot onze diensten",
        citizen: {
          title: "Registratie voor Burgers",
          subtitle: "Voor individuele gebruikers en families",
          personalInfo: "Persoonlijke Gegevens",
          personalInfoDesc: "Vul uw gegevens in voor een persoonlijke service",
          firstName: "Voornaam",
          lastName: "Achternaam",
          email: "E-mailadres",
          phone: "Telefoonnummer",
          city: "Stad",
          submit: "Registreer als Burger",
          submitting: "Bezig met Registreren..."
        },
        partner: {
          title: "Registratie voor Partners",
          subtitle: "Voor professionals en organisaties",
          businessInfo: "Bedrijfsinformatie",
          businessInfoDesc: "Vul uw bedrijfsgegevens in voor registratie",
          companyName: "Bedrijfsnaam",
          contactPerson: "Contactpersoon",
          partnerType: "Type Partner",
          email: "E-mailadres",
          phone: "Telefoonnummer",
          city: "Vestigingsplaats",
          description: "Beschrijving van Diensten",
          submit: "Registreer als Partner",
          submitting: "Bezig met Registreren..."
        },
        partnerTypes: {
          funeral: "Uitvaartondernemer - Volledige uitvaartdiensten",
          mosque: "Moskee - Religieuze begeleiding",
          insurance: "Verzekeraar - Uitvaartverzekeringen",
          washplace: "Wasplaats - Rituele wassing",
          other: "Andere - Gerelateerde diensten"
        },
        privacy: {
          accept: "Ik ga akkoord met de",
          privacyPolicy: "privacyverklaring",
          and: "en",
          terms: "algemene voorwaarden",
          gdpr: "Uw gegevens worden veilig opgeslagen volgens GDPR-richtlijnen"
        },
        placeholders: {
          firstName: "bijv. Fatima",
          lastName: "bijv. Benali",
          email: "bijv. fatima@voorbeeld.be",
          phone: "bijv. +32 3 234 56 78",
          city: "bijv. Antwerpen",
          companyName: "bijv. Moskee Al-Nour Antwerpen",
          contactPerson: "Omar El Moussaoui",
          partnerEmail: "info@moskee-alnour.be",
          partnerPhone: "+32 3 234 56 78",
          partnerCity: "bijv. Brussel",
          description: "Beschrijf welke diensten u aanbiedt en hoe u families kunt ondersteunen..."
        }
      },
      // Footer
      footer: {
        description: "Digitaal platform voor janazah diensten met respect voor islamitische tradities.",
        quickLinks: "Snelle Links",
        contact: "Contact",
        location: "Antwerpen, België",
        allRights: "Alle rechten voorbehouden."
      },
      // Common
      common: {
        selectType: "Selecteer type",
        required: "Verplicht veld"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: "À Propos",
        services: "Services", 
        register: "S'inscrire",
        login: "Connexion"
      },
      hero: {
        title: "Plateforme Numérique pour les Services Janazah",
        subtitle: "Simplifiez tous les processus bureaucratiques liés au décès avec respect pour les traditions islamiques.",
        ctaButton: "Commencer",
        learnMore: "En Savoir Plus"
      },
      features: {
        title: "Nos Services",
        subtitle: "Tout ce dont vous avez besoin pour une janazah digne",
        digital: {
          title: "Administration Numérique",
          description: "Simplifiez toutes les procédures bureaucratiques avec nos solutions numériques."
        },
        community: {
          title: "Réseau Communautaire",
          description: "Connectez-vous avec les mosquées, pompes funèbres et autres prestataires."
        },
        support: {
          title: "Support 24/7",
          description: "Toujours disponible quand vous en avez besoin, avec un accompagnement culturellement conscient."
        },
        cultural: {
          title: "Respectueux Culturellement",
          description: "Conçu avec une compréhension profonde des valeurs et traditions islamiques."
        },
        international: {
          title: "Rapatriement International",
          description: "Assistance pour le transfert des défunts vers le pays d'origine."
        },
        legal: {
          title: "Accompagnement Juridique",
          description: "Aide pour toutes les exigences légales et la documentation."
        }
      },
      registration: {
        title: "Rejoignez Notre Communauté",
        subtitle: "Inscrivez-vous en tant que citoyen ou partenaire pour accéder à nos services",
        citizen: {
          title: "Inscription pour Citoyens",
          subtitle: "Pour les utilisateurs individuels et les familles",
          personalInfo: "Informations Personnelles",
          personalInfoDesc: "Remplissez vos informations pour un service personnalisé",
          firstName: "Prénom",
          lastName: "Nom",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          city: "Ville",
          submit: "S'inscrire comme Citoyen",
          submitting: "Inscription en cours..."
        },
        partner: {
          title: "Inscription pour Partenaires",
          subtitle: "Pour les professionnels et organisations",
          businessInfo: "Informations d'Entreprise",
          businessInfoDesc: "Remplissez vos informations d'entreprise pour l'inscription",
          companyName: "Nom de l'entreprise",
          contactPerson: "Personne de contact",
          partnerType: "Type de Partenaire",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          city: "Lieu d'établissement",
          description: "Description des Services",
          submit: "S'inscrire comme Partenaire",
          submitting: "Inscription en cours..."
        },
        partnerTypes: {
          funeral: "Entrepreneur de pompes funèbres - Services funéraires complets",
          mosque: "Mosquée - Accompagnement religieux",
          insurance: "Assureur - Assurances funéraires",
          washplace: "Lieu de lavage - Lavage rituel",
          other: "Autre - Services connexes"
        },
        privacy: {
          accept: "J'accepte la",
          privacyPolicy: "politique de confidentialité",
          and: "et les",
          terms: "conditions générales",
          gdpr: "Vos données sont stockées en toute sécurité selon les directives RGPD"
        },
        placeholders: {
          firstName: "ex. Fatima",
          lastName: "ex. Benali",
          email: "ex. fatima@exemple.be",
          phone: "ex. +32 3 234 56 78",
          city: "ex. Anvers",
          companyName: "ex. Mosquée Al-Nour Anvers",
          contactPerson: "Omar El Moussaoui",
          partnerEmail: "info@mosquee-alnour.be",
          partnerPhone: "+32 3 234 56 78",
          partnerCity: "ex. Bruxelles",
          description: "Décrivez les services que vous offrez et comment vous pouvez aider les familles..."
        }
      },
      footer: {
        description: "Plateforme numérique pour les services janazah avec respect pour les traditions islamiques.",
        quickLinks: "Liens Rapides",
        contact: "Contact",
        location: "Anvers, Belgique",
        allRights: "Tous droits réservés."
      },
      common: {
        selectType: "Sélectionner le type",
        required: "Champ obligatoire"
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About Us",
        services: "Services",
        register: "Register",
        login: "Login"
      },
      hero: {
        title: "Digital Platform for Janazah Services",
        subtitle: "Streamline all death-related bureaucratic processes with respect for Islamic traditions.",
        ctaButton: "Get Started",
        learnMore: "Learn More"
      },
      features: {
        title: "Our Services",
        subtitle: "Everything you need for a dignified janazah",
        digital: {
          title: "Digital Administration",
          description: "Simplify all bureaucratic procedures with our digital solutions."
        },
        community: {
          title: "Community Network",
          description: "Connect with mosques, funeral directors and other service providers."
        },
        support: {
          title: "24/7 Support",
          description: "Always available when you need us, with culturally aware guidance."
        },
        cultural: {
          title: "Culturally Respectful",
          description: "Designed with deep understanding of Islamic values and traditions."
        },
        international: {
          title: "International Repatriation",
          description: "Support for transferring deceased to homeland."
        },
        legal: {
          title: "Legal Guidance",
          description: "Help with all legal requirements and documentation."
        }
      },
      registration: {
        title: "Join Our Community",
        subtitle: "Register as a citizen or partner to access our services",
        citizen: {
          title: "Registration for Citizens",
          subtitle: "For individual users and families",
          personalInfo: "Personal Information",
          personalInfoDesc: "Fill in your details for personalized service",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email Address",
          phone: "Phone Number",
          city: "City",
          submit: "Register as Citizen",
          submitting: "Registering..."
        },
        partner: {
          title: "Registration for Partners",
          subtitle: "For professionals and organizations",
          businessInfo: "Business Information",
          businessInfoDesc: "Fill in your business details for registration",
          companyName: "Company Name",
          contactPerson: "Contact Person",
          partnerType: "Partner Type",
          email: "Email Address",
          phone: "Phone Number",
          city: "Location",
          description: "Service Description",
          submit: "Register as Partner",
          submitting: "Registering..."
        },
        partnerTypes: {
          funeral: "Funeral Director - Complete funeral services",
          mosque: "Mosque - Religious guidance",
          insurance: "Insurer - Funeral insurance",
          washplace: "Washing Place - Ritual washing",
          other: "Other - Related services"
        },
        privacy: {
          accept: "I agree to the",
          privacyPolicy: "privacy policy",
          and: "and",
          terms: "terms and conditions",
          gdpr: "Your data is securely stored according to GDPR guidelines"
        },
        placeholders: {
          firstName: "e.g. Fatima",
          lastName: "e.g. Benali",
          email: "e.g. fatima@example.be",
          phone: "e.g. +32 3 234 56 78",
          city: "e.g. Antwerp",
          companyName: "e.g. Al-Nour Mosque Antwerp",
          contactPerson: "Omar El Moussaoui",
          partnerEmail: "info@mosque-alnour.be",
          partnerPhone: "+32 3 234 56 78",
          partnerCity: "e.g. Brussels",
          description: "Describe the services you offer and how you can support families..."
        }
      },
      footer: {
        description: "Digital platform for janazah services with respect for Islamic traditions.",
        quickLinks: "Quick Links",
        contact: "Contact",
        location: "Antwerp, Belgium",
        allRights: "All rights reserved."
      },
      common: {
        selectType: "Select type",
        required: "Required field"
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: "Über Uns",
        services: "Dienstleistungen",
        register: "Registrieren",
        login: "Anmelden"
      },
      hero: {
        title: "Digitale Plattform für Janazah-Dienste",
        subtitle: "Vereinfachen Sie alle bürokratischen Prozesse im Todesfall mit Respekt für islamische Traditionen.",
        ctaButton: "Jetzt Starten",
        learnMore: "Mehr Erfahren"
      },
      features: {
        title: "Unsere Dienstleistungen",
        subtitle: "Alles was Sie für eine würdige Janazah benötigen",
        digital: {
          title: "Digitale Verwaltung",
          description: "Vereinfachen Sie alle bürokratischen Verfahren mit unseren digitalen Lösungen."
        },
        community: {
          title: "Gemeinschaftsnetzwerk",
          description: "Verbinden Sie sich mit Moscheen, Bestattern und anderen Dienstleistern."
        },
        support: {
          title: "24/7 Unterstützung",
          description: "Immer verfügbar wenn Sie uns brauchen, mit kulturell bewusster Begleitung."
        },
        cultural: {
          title: "Kulturell Respektvoll",
          description: "Entwickelt mit tiefem Verständnis für islamische Werte und Traditionen."
        },
        international: {
          title: "Internationale Rückführung",
          description: "Unterstützung bei der Überführung Verstorbener in die Heimat."
        },
        legal: {
          title: "Rechtliche Begleitung",
          description: "Hilfe bei allen rechtlichen Anforderungen und Dokumentation."
        }
      },
      registration: {
        title: "Werden Sie Teil Unserer Gemeinschaft",
        subtitle: "Registrieren Sie sich als Bürger oder Partner um Zugang zu unseren Diensten zu erhalten",
        citizen: {
          title: "Registrierung für Bürger",
          subtitle: "Für Einzelnutzer und Familien",
          personalInfo: "Persönliche Daten",
          personalInfoDesc: "Geben Sie Ihre Daten für einen personalisierten Service ein",
          firstName: "Vorname",
          lastName: "Nachname",
          email: "E-Mail-Adresse",
          phone: "Telefonnummer",
          city: "Stadt",
          submit: "Als Bürger Registrieren",
          submitting: "Registrierung läuft..."
        },
        partner: {
          title: "Registrierung für Partner",
          subtitle: "Für Fachkräfte und Organisationen",
          businessInfo: "Geschäftsinformationen",
          businessInfoDesc: "Geben Sie Ihre Geschäftsdaten für die Registrierung ein",
          companyName: "Firmenname",
          contactPerson: "Ansprechpartner",
          partnerType: "Partner-Typ",
          email: "E-Mail-Adresse",
          phone: "Telefonnummer",
          city: "Standort",
          description: "Dienstleistungsbeschreibung",
          submit: "Als Partner Registrieren",
          submitting: "Registrierung läuft..."
        },
        partnerTypes: {
          funeral: "Bestatter - Vollständige Bestattungsdienste",
          mosque: "Moschee - Religiöse Begleitung",
          insurance: "Versicherer - Bestattungsversicherungen",
          washplace: "Waschplatz - Rituelle Waschung",
          other: "Andere - Verwandte Dienste"
        },
        privacy: {
          accept: "Ich stimme der",
          privacyPolicy: "Datenschutzerklärung",
          and: "und den",
          terms: "Allgemeinen Geschäftsbedingungen",
          gdpr: "Ihre Daten werden sicher nach DSGVO-Richtlinien gespeichert"
        },
        placeholders: {
          firstName: "z.B. Fatima",
          lastName: "z.B. Benali",
          email: "z.B. fatima@beispiel.be",
          phone: "z.B. +32 3 234 56 78",
          city: "z.B. Antwerpen",
          companyName: "z.B. Al-Nour Moschee Antwerpen",
          contactPerson: "Omar El Moussaoui",
          partnerEmail: "info@moschee-alnour.be",
          partnerPhone: "+32 3 234 56 78",
          partnerCity: "z.B. Brüssel",
          description: "Beschreiben Sie die Dienste, die Sie anbieten und wie Sie Familien unterstützen können..."
        }
      },
      footer: {
        description: "Digitale Plattform für Janazah-Dienste mit Respekt für islamische Traditionen.",
        quickLinks: "Schnelle Links",
        contact: "Kontakt",
        location: "Antwerpen, Belgien",
        allRights: "Alle Rechte vorbehalten."
      },
      common: {
        selectType: "Typ auswählen",
        required: "Pflichtfeld"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "عنا",
        services: "الخدمات",
        register: "التسجيل",
        login: "تسجيل الدخول"
      },
      hero: {
        title: "منصة رقمية لخدمات الجنازة",
        subtitle: "تبسيط جميع الإجراءات البيروقراطية المتعلقة بالوفاة مع احترام التقاليد الإسلامية.",
        ctaButton: "ابدأ الآن",
        learnMore: "اعرف المزيد"
      },
      features: {
        title: "خدماتنا",
        subtitle: "كل ما تحتاجه لجنازة كريمة",
        digital: {
          title: "الإدارة الرقمية",
          description: "تبسيط جميع الإجراءات البيروقراطية من خلال حلولنا الرقمية."
        },
        community: {
          title: "شبكة المجتمع",
          description: "التواصل مع المساجد ومدراء الجنائز ومقدمي الخدمات الآخرين."
        },
        support: {
          title: "دعم 24/7",
          description: "متاح دائماً عندما تحتاجنا، مع توجيه يراعي الثقافة."
        },
        cultural: {
          title: "محترم ثقافياً",
          description: "مصمم بفهم عميق للقيم والتقاليد الإسلامية."
        },
        international: {
          title: "الإعادة الدولية",
          description: "الدعم في نقل المتوفين إلى الوطن."
        },
        legal: {
          title: "التوجيه القانوني",
          description: "المساعدة في جميع المتطلبات القانونية والوثائق."
        }
      },
      registration: {
        title: "انضم إلى مجتمعنا",
        subtitle: "سجل كمواطن أو شريك للوصول إلى خدماتنا",
        citizen: {
          title: "التسجيل للمواطنين",
          subtitle: "للمستخدمين الأفراد والعائلات",
          personalInfo: "المعلومات الشخصية",
          personalInfoDesc: "املأ بياناتك للحصول على خدمة شخصية",
          firstName: "الاسم الأول",
          lastName: "الاسم الأخير",
          email: "عنوان البريد الإلكتروني",
          phone: "رقم الهاتف",
          city: "المدينة",
          submit: "التسجيل كمواطن",
          submitting: "جاري التسجيل..."
        },
        partner: {
          title: "التسجيل للشركاء",
          subtitle: "للمهنيين والمنظمات",
          businessInfo: "معلومات الأعمال",
          businessInfoDesc: "املأ تفاصيل عملك للتسجيل",
          companyName: "اسم الشركة",
          contactPerson: "شخص الاتصال",
          partnerType: "نوع الشريك",
          email: "عنوان البريد الإلكتروني",
          phone: "رقم الهاتف",
          city: "الموقع",
          description: "وصف الخدمة",
          submit: "التسجيل كشريك",
          submitting: "جاري التسجيل..."
        },
        partnerTypes: {
          funeral: "مدير الجنائز - خدمات جنائز كاملة",
          mosque: "مسجد - التوجيه الديني",
          insurance: "شركة تأمين - تأمين الجنائز",
          washplace: "مكان الغسل - الغسل الطقسي",
          other: "أخرى - خدمات ذات صلة"
        },
        privacy: {
          accept: "أوافق على",
          privacyPolicy: "سياسة الخصوصية",
          and: "و",
          terms: "الشروط والأحكام",
          gdpr: "يتم تخزين بياناتك بأمان وفقاً لإرشادات GDPR"
        },
        placeholders: {
          firstName: "مثال: فاطمة",
          lastName: "مثال: بن علي",
          email: "مثال: fatima@example.be",
          phone: "مثال: +32 3 234 56 78",
          city: "مثال: أنتويرب",
          companyName: "مثال: مسجد النور أنتويرب",
          contactPerson: "عمر الموسوي",
          partnerEmail: "info@mosque-alnour.be",
          partnerPhone: "+32 3 234 56 78",
          partnerCity: "مثال: بروكسل",
          description: "صف الخدمات التي تقدمها وكيف يمكنك دعم العائلات..."
        }
      },
      footer: {
        description: "منصة رقمية لخدمات الجنازة مع احترام التقاليد الإسلامية.",
        quickLinks: "روابط سريعة",
        contact: "اتصل",
        location: "أنتويرب، بلجيكا",
        allRights: "جميع الحقوق محفوظة."
      },
      common: {
        selectType: "اختر النوع",
        required: "حقل مطلوب"
      }
    }
  },
  tr: {
    translation: {
      nav: {
        about: "Hakkımızda",
        services: "Hizmetler",
        register: "Kayıt Ol",
        login: "Giriş Yap"
      },
      hero: {
        title: "Cenaze Hizmetleri İçin Dijital Platform",
        subtitle: "İslami geleneklere saygı göstererek ölümle ilgili tüm bürokratik süreçleri kolaylaştırın.",
        ctaButton: "Başlayın",
        learnMore: "Daha Fazla Bilgi"
      },
      features: {
        title: "Hizmetlerimiz",
        subtitle: "Saygın bir cenaze için ihtiyacınız olan her şey",
        digital: {
          title: "Dijital Yönetim",
          description: "Dijital çözümlerimizle tüm bürokratik prosedürleri basitleştirin."
        },
        community: {
          title: "Topluluk Ağı",
          description: "Camiler, cenaze müdürleri ve diğer hizmet sağlayıcılarla bağlantı kurun."
        },
        support: {
          title: "7/24 Destek",
          description: "Bize ihtiyacınız olduğunda her zaman mevcut, kültürel bilinçle rehberlik."
        },
        cultural: {
          title: "Kültürel Saygılı",
          description: "İslami değerler ve geleneklerin derin anlayışıyla tasarlandı."
        },
        international: {
          title: "Uluslararası Nakil",
          description: "Vefat edenlerin anavatana naklinde destek."
        },
        legal: {
          title: "Hukuki Rehberlik",
          description: "Tüm yasal gereksinimler ve belgelendirmede yardım."
        }
      },
      registration: {
        title: "Topluluğumuza Katılın",
        subtitle: "Hizmetlerimize erişim için vatandaş veya ortak olarak kayıt olun",
        citizen: {
          title: "Vatandaş Kaydı",
          subtitle: "Bireysel kullanıcılar ve aileler için",
          personalInfo: "Kişisel Bilgiler",
          personalInfoDesc: "Kişiselleştirilmiş hizmet için bilgilerinizi doldurun",
          firstName: "Ad",
          lastName: "Soyad",
          email: "E-posta Adresi",
          phone: "Telefon Numarası",
          city: "Şehir",
          submit: "Vatandaş Olarak Kayıt Ol",
          submitting: "Kayıt oluyor..."
        },
        partner: {
          title: "Ortak Kaydı",
          subtitle: "Profesyoneller ve kuruluşlar için",
          businessInfo: "İş Bilgileri",
          businessInfoDesc: "Kayıt için iş detaylarınızı doldurun",
          companyName: "Şirket Adı",
          contactPerson: "İletişim Kişisi",
          partnerType: "Ortak Türü",
          email: "E-posta Adresi",
          phone: "Telefon Numarası",
          city: "Konum",
          description: "Hizmet Açıklaması",
          submit: "Ortak Olarak Kayıt Ol",
          submitting: "Kayıt oluyor..."
        },
        partnerTypes: {
          funeral: "Cenaze Müdürü - Tam cenaze hizmetleri",
          mosque: "Cami - Dini rehberlik",
          insurance: "Sigorta - Cenaze sigortası",
          washplace: "Yıkama Yeri - Ritüel yıkama",
          other: "Diğer - İlgili hizmetler"
        },
        privacy: {
          accept: "Kabul ediyorum",
          privacyPolicy: "gizlilik politikası",
          and: "ve",
          terms: "şartlar ve koşullar",
          gdpr: "Verileriniz GDPR yönergelerine göre güvenli bir şekilde saklanır"
        },
        placeholders: {
          firstName: "örn. Fatma",
          lastName: "örn. Öz",
          email: "örn. fatma@ornek.be",
          phone: "örn. +32 3 234 56 78",
          city: "örn. Antwerp",
          companyName: "örn. Al-Nour Camii Antwerp",
          contactPerson: "Ömer Yılmaz",
          partnerEmail: "info@cami-alnour.be",
          partnerPhone: "+32 3 234 56 78",
          partnerCity: "örn. Brüksel",
          description: "Sunduğunuz hizmetleri ve aileleri nasıl destekleyebileceğinizi açıklayın..."
        }
      },
      footer: {
        description: "İslami geleneklere saygıyla cenaze hizmetleri için dijital platform.",
        quickLinks: "Hızlı Bağlantılar",
        contact: "İletişim",
        location: "Antwerp, Belçika",
        allRights: "Tüm hakları saklıdır."
      },
      common: {
        selectType: "Tür seçin",
        required: "Gerekli alan"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'nl',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;