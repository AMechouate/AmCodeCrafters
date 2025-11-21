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

## Browser Support

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

