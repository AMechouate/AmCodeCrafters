# AM Code Crafters Website

Eine moderne, responsive Website für AM Code Crafters - IT Consulting und IT Solutions.

## Technologien

- **React 18** mit TypeScript
- **Vite** als Build-Tool
- **Tailwind CSS** für Styling
- **React Router** für Navigation

## Installation

1. Dependencies installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Production Build erstellen:
```bash
npm run build
```

4. Production Build preview:
```bash
npm run preview
```

## Projektstruktur

```
AMCodeCrafters/
├── public/              # Statische Assets (Bilder, etc.)
├── src/
│   ├── components/     # React Komponenten
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Haupt-App Komponente
│   ├── main.tsx        # Entry Point
│   └── index.css      # Globale Styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Features

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Moderne UI/UX im Stil der DEED Consulting Website
- ✅ Smooth Scrolling Navigation
- ✅ Kontaktformular
- ✅ Optimierte Performance
- ✅ TypeScript für Type Safety

## Anpassungen

### Kontaktdaten ändern

Kontaktdaten können in folgenden Dateien angepasst werden:
- `src/components/Contact.tsx` - E-Mail und Telefonnummer
- `src/components/Footer.tsx` - Footer Kontaktdaten

### Bilder austauschen

Bilder befinden sich im `public/` Ordner und können dort ausgetauscht werden. Die Referenzen in den Komponenten müssen entsprechend angepasst werden.

### Farben anpassen

Farben können in `tailwind.config.js` im `theme.extend.colors.primary` Bereich angepasst werden.

## Deployment auf Cloudflare Pages

Die Website kann auf **Cloudflare Pages** deployed werden. Cloudflare Pages unterstützt sowohl **GitHub** als auch **Bitbucket** (und GitLab).

### Voraussetzungen

1. **Git Repository erstellen** (GitHub oder Bitbucket)
   - GitHub: [github.com](https://github.com)
   - Bitbucket: [bitbucket.org](https://bitbucket.org)

2. **Code auf Repository pushen**:
   ```bash
   git remote add origin <IHR-REPOSITORY-URL>
   git branch -M main
   git push -u origin main
   ```

### Cloudflare Pages Deployment

#### Option 1: Automatisches Deployment via Git-Integration

1. Gehen Sie zu [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Wählen Sie "Pages" im Menü
3. Klicken Sie auf "Create a project"
4. Verbinden Sie Ihr Git Repository (GitHub oder Bitbucket)
5. Wählen Sie das Repository aus

#### Build-Einstellungen für Cloudflare Pages:

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leer lassen)

#### Option 2: Manuelles Deployment via Wrangler CLI

```bash
# Wrangler CLI installieren (falls noch nicht installiert)
npm install -g wrangler

# Build erstellen
npm run build

# Deployen
wrangler pages deploy dist
```

### Wichtige Hinweise

- Die `_redirects` Datei im `public/` Ordner sorgt dafür, dass alle Routen zu `index.html` weitergeleitet werden (wichtig für SPA)
- Die Website wird automatisch bei jedem Push auf den main-Branch neu deployed
- Cloudflare Pages bietet kostenloses SSL/HTTPS
- Custom Domain kann einfach konfiguriert werden

### Environment Variables (Optional)

Falls Sie Environment Variables benötigen:
1. Gehen Sie zu Ihrem Cloudflare Pages Projekt
2. Settings → Environment Variables
3. Variablen hinzufügen

## Browser Support

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

