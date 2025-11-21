# Cloudflare Pages Deployment Anleitung

## Option 1: Mit Wrangler CLI (Empfohlen)

### Schritt 1: Wrangler Login
```bash
npx wrangler login
```

### Schritt 2: Projekt deployen
```bash
npm run build
npx wrangler pages deploy dist
```

## Option 2: Git-Integration (Automatisches Deployment)

Falls die Git-Integration in Cloudflare Pages nicht funktioniert, versuchen Sie:

1. **Im Cloudflare Dashboard:**
   - Gehen Sie zu Pages → Create a project
   - Wählen Sie "Connect to Git"
   - **Wichtig:** Stellen Sie sicher, dass Ihr GitHub-Account korrekt verbunden ist
   - Falls nicht: Klicken Sie auf "Manage GitHub access" und verbinden Sie Ihr Account neu

2. **Build-Einstellungen:**
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `18` oder höher

3. **Falls es immer noch nicht funktioniert:**
   - Versuchen Sie, das Repository zu löschen und neu zu erstellen
   - Oder verwenden Sie die Wrangler CLI (Option 1)

## Option 3: Manueller Upload (nur für statische Seiten, funktioniert hier nicht)

⚠️ **Wichtig:** Drag & Drop funktioniert NICHT für dieses Projekt, da es einen Build-Prozess benötigt.

## Troubleshooting

### Git-Integration funktioniert nicht:
- Stellen Sie sicher, dass das Repository öffentlich ist oder dass Sie die Berechtigung haben
- Versuchen Sie, den GitHub-Zugriff in Cloudflare zu aktualisieren
- Prüfen Sie, ob das Repository korrekt auf GitHub existiert: https://github.com/AMechouate/AmCodeCrafters

### Build-Fehler:
- Stellen Sie sicher, dass Node.js Version 18+ installiert ist
- Führen Sie `npm install` lokal aus, um zu testen, ob alles funktioniert
- Prüfen Sie die Build-Logs in Cloudflare Pages

