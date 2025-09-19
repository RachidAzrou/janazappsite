# JanazApp - Digitale Overlijdenszorg

JanazApp is een digitaal platform dat de complexe overlijdensadministratie vereenvoudigt voor de islamitische gemeenschap in West-Europa. Het verbindt families, uitvaartondernemers, moskeeën en overheidsinstellingen via één geïntegreerd platform.

## 🚀 Deployment op Vercel

Deze applicatie is geoptimaliseerd voor deployment op Vercel.

### Stappen voor deployment:

1. **Push je code naar GitHub/GitLab/Bitbucket**
2. **Verbind met Vercel:**
   - Ga naar [vercel.com](https://vercel.com)
   - Klik op "New Project"
   - Selecteer je repository
3. **Configureer de build settings:**
   - Framework Preset: `Vite`
   - Build Command: `vite build`
   - Output Directory: `dist/public`
4. **Deploy!**

### Environment Variables (indien nodig)
Als je database of externe API's gebruikt, voeg dan de volgende environment variables toe in Vercel:

```
NODE_ENV=production
DATABASE_URL=your_database_url
```

## 📱 Features

- **Volledig responsief**: Geoptimaliseerd voor desktop, tablet en mobiel
- **Meertalig**: Ondersteuning voor 6 talen (Nederlands, Frans, Engels, Duits, Arabisch, Turks)
- **Islamitische design elementen**: Respectvolle en cultureel bewuste interface
- **Modern tech stack**: React, TypeScript, Tailwind CSS, Vite

## 🛠 Lokale ontwikkeling

```bash
npm install
npm run dev
```

De applicatie draait op `http://localhost:5000`

## 📧 Contact

Voor vragen over de applicatie, neem contact op via de contactgegevens op de website.