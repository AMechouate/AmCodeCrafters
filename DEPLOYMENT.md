# Cloudflare Pages Deployment Anleitung

## ⚠️ Wichtig: Projekt muss zuerst im Dashboard erstellt werden

Bevor Sie `wrangler pages deploy` verwenden können, muss das Projekt zuerst im Cloudflare Dashboard erstellt werden.

## Schritt-für-Schritt Anleitung

### Option A: Mit Git-Integration (Empfohlen - Automatisches Deployment)

1. **Gehen Sie zum Cloudflare Dashboard:**
   - Öffnen Sie: https://dash.cloudflare.com/
   - Navigieren Sie zu "Workers & Pages" → "Pages"

2. **Projekt erstellen:**
   - Klicken Sie auf "Create a project"
   - Wählen Sie "Connect to Git"
   - **Wichtig:** Falls GitHub nicht erscheint:
     - Klicken Sie auf "Manage GitHub access" oder "Manage Git providers"
     - Melden Sie sich bei GitHub an und erlauben Sie Cloudflare den Zugriff
     - Gehen Sie zurück und versuchen Sie es erneut

3. **Repository auswählen:**
   - Wählen Sie: `AMechouate/AmCodeCrafters`
   - Klicken Sie auf "Begin setup"

4. **Build-Einstellungen konfigurieren:**
   - **Project name:** `am-codecrafters` (oder ein anderer Name)
   - **Production branch:** `main`
   - **Framework preset:** `Vite` (wird automatisch erkannt)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leer lassen)
   - **Node version:** `18` oder höher

5. **Deploy:**
   - Klicken Sie auf "Save and Deploy"
   - Warten Sie auf das erste Deployment

### Option B: Mit Wrangler CLI (Nach Projekt-Erstellung)

**Schritt 1: Projekt im Dashboard erstellen (nur einmal nötig)**

Folgen Sie Option A oben, um das Projekt im Dashboard zu erstellen. ODER:

1. Gehen Sie zu Cloudflare Dashboard → Workers & Pages → Pages
2. Klicken Sie auf "Create a project" → "Upload assets" (temporär)
3. Geben Sie einen Projektnamen ein: `am-codecrafters`
4. Erstellen Sie ein leeres Projekt (es muss nur existieren)

**Schritt 2: Mit Wrangler deployen**

Nachdem das Projekt erstellt wurde, können Sie mit Wrangler deployen:

```bash
# Login (falls noch nicht geschehen)
npx wrangler login

# Build und Deploy
npm run build
npx wrangler pages deploy dist --project-name=am-codecrafters
```

## Troubleshooting

### Git-Integration funktioniert nicht:

1. **GitHub-Zugriff überprüfen:**
   - Gehen Sie zu: https://github.com/settings/applications
   - Prüfen Sie, ob "Cloudflare Pages" in der Liste ist
   - Falls nicht: Verbinden Sie es im Cloudflare Dashboard neu

2. **Repository-Status prüfen:**
   - Stellen Sie sicher, dass das Repository existiert: https://github.com/AMechouate/AmCodeCrafters
   - Prüfen Sie, ob das Repository öffentlich ist oder Sie Zugriff haben

3. **Cloudflare-Zugriff erneuern:**
   - Im Cloudflare Dashboard: Pages → Settings → Git
   - Klicken Sie auf "Manage Git providers"
   - Entfernen und neu verbinden Sie GitHub

### Build-Fehler:

- Stellen Sie sicher, dass Node.js Version 18+ in Cloudflare Pages konfiguriert ist
- Prüfen Sie die Build-Logs im Cloudflare Dashboard
- Lokal testen: `npm install && npm run build`

## Nach dem ersten Deployment

Nachdem das Projekt erstellt und deployed wurde:
- Jeder Push auf `main` löst automatisch ein neues Deployment aus (bei Git-Integration)
- Oder verwenden Sie `npm run deploy` für manuelle Deployments
