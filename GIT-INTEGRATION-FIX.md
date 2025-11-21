# Cloudflare Pages Git-Integration Problem beheben

Wenn das Repository nicht importiert wird, versuchen Sie folgendes:

## Schritt 1: GitHub-Zugriff in Cloudflare erneuern

1. Gehen Sie zu: https://dash.cloudflare.com/
2. Klicken Sie auf Ihr Profil (oben rechts)
3. Gehen Sie zu "My Profile" → "Connected Accounts" oder direkt zu:
   - Workers & Pages → Pages → Settings → Git
   - Oder: https://dash.cloudflare.com/?to=/:account/workers-and-pages/pages/git-integration

4. **GitHub entfernen und neu verbinden:**
   - Klicken Sie auf "Manage Git providers" oder "Manage GitHub access"
   - Klicken Sie auf "Disconnect" oder "Remove" für GitHub
   - Warten Sie einige Sekunden
   - Klicken Sie auf "Connect GitHub" oder "Add GitHub"
   - Melden Sie sich bei GitHub an
   - **Wichtig:** Erlauben Sie ALLE Berechtigungen (vor allem: Zugriff auf Repositories)
   - Wählen Sie "Authorize Cloudflare"

## Schritt 2: Repository-Status prüfen

Stellen Sie sicher, dass:
- Das Repository existiert: https://github.com/AMechouate/AmCodeCrafters
- Das Repository **öffentlich** ist ODER Sie haben die Berechtigung dafür
- Sie der Besitzer des Repositories sind oder Zugriff haben

## Schritt 3: Projekt im Dashboard erstellen

1. **Workers & Pages** → **Pages**
2. Klicken Sie auf **"Create a project"**
3. Wählen Sie **"Connect to Git"**
4. Falls GitHub jetzt erscheint:
   - Wählen Sie das Repository: `AMechouate/AmCodeCrafters`
   - Klicken Sie auf **"Begin setup"**

5. **Build-Einstellungen:**
   - Project name: `am-codecrafters`
   - Production branch: `main`
   - Framework preset: `Vite` (oder "None" und dann manuell konfigurieren)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (leer lassen)
   - Node version: `18` oder höher

6. Klicken Sie auf **"Save and Deploy"**

## Alternative: Manuelles Projekt erstellen

Falls die Git-Integration weiterhin nicht funktioniert:

1. **Erstellen Sie ein leeres Projekt:**
   - Pages → Create a project
   - "Upload assets"
   - Projektname: `am-codecrafters`
   - Laden Sie eine beliebige Datei hoch (z.B. eine index.html)

2. **Git später verbinden:**
   - Gehen Sie zu Projekt Settings
   - Git Integration
   - Verbinden Sie GitHub
   - Wählen Sie das Repository aus

## Alternative Lösung: Direktes Deployment mit Wrangler

Nachdem das Projekt erstellt wurde (egal wie), können Sie deployen:

```bash
npm run build
npx wrangler pages deploy dist --project-name=am-codecrafters
```

## Häufige Probleme

### Problem: "Repository not found" oder "Access denied"
- **Lösung:** Das Repository muss öffentlich sein ODER Sie müssen Cloudflare explizit Zugriff geben
- Prüfen Sie GitHub: Settings → Applications → Cloudflare Pages

### Problem: GitHub erscheint nicht in der Liste
- **Lösung:** GitHub-Zugriff in Cloudflare entfernen und neu verbinden
- Verwenden Sie einen anderen Browser oder Incognito-Modus

### Problem: Build schlägt fehl
- **Lösung:** Stellen Sie sicher, dass Node version 18+ eingestellt ist
- Prüfen Sie die Build-Logs für Details

