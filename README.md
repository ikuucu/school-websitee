# Ikuu Boys High School: website and app

This folder is the school website packaged as a **Progressive Web App (PWA)**. Once it is on GitHub Pages
it can be installed on a phone like an app, and it works offline after the first visit.
It can also be wrapped as a real Android or iOS app with Capacitor.

## What is inside

| File | What it does |
|------|--------------|
| `index.html` | The whole website (all pages, photos, Admin area, portals) |
| `manifest.webmanifest` | App name, icons, colours, shortcuts |
| `sw.js` | Service worker: offline support and faster loading |
| `videos/form-four-2026.mp4` | The Titans' Form Four 2026 tribute video (shown on the About page) |
| `icons/` | App icons (192, 512, maskable, Apple, favicon) made from the school crest |
| `.github/workflows/pages.yml` | Publishes the site to GitHub Pages every time you push |
| `package.json`, `capacitor.config.json`, `scripts/` | Optional: build Android / iOS apps |

## 1. Put it on GitHub and publish it (free)

1. Create a GitHub account, then click **New repository**. Name it `ikuu-boys-app` and keep it **Public**.
2. Upload everything in this folder (keep the folder structure, including `.github` and `icons`).
   On the repo page: **Add file, Upload files**, drag the files in, then **Commit changes**.
3. Open **Settings, Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab. Wait for "Deploy to GitHub Pages" to finish (about a minute).
5. Your site is live at `https://YOUR-USERNAME.github.io/ikuu-boys-app/`.

## 2. Install it as an app (no app store needed)

* **Android (Chrome):** open the site, tap the menu, then **Install app** (or use the **Install app** button in the site header).
* **iPhone (Safari):** open the site, tap **Share**, then **Add to Home Screen**.
* **Windows / Mac (Chrome or Edge):** click the install icon in the address bar.

## 3. Make a real Android app (APK / Play Store)

Easiest: go to **pwabuilder.com**, paste your GitHub Pages address, and download the Android package.

Or with Capacitor (needs Node.js and Android Studio):

```bash
npm install
npx cap add android        # once
npm run android            # copies the site, syncs, opens Android Studio
```

In Android Studio use **Build, Build Bundle(s) / APK(s)**. For iPhone, run `npx cap add ios` and `npm run ios` on a Mac with Xcode.
Publishing on Google Play needs a Google Play developer account (one-time fee). Apple needs an Apple Developer account (yearly fee).
The Capacitor steps have not been tested by the person who prepared this folder.

## 4. Updating the website content

The Admin area still works here, but there is **no server**, so changes are not saved online automatically:

1. Open the site, go to **Admin**, enter the admin password, and make your changes (assignments, notices, events, students, and so on).
2. When you press the button, the browser **downloads a new `index.html`**.
3. In your GitHub repository, **Add file, Upload files**, drop in the new `index.html`, and commit.
   GitHub Pages republishes in about a minute. Visitors get the update the next time they open the app.

Tip: keep a copy of each `index.html` you upload, so you can go back if something goes wrong.

## Important limits (please read)

* **Passwords are not truly secret.** The admin password and student logins are checked inside the page. They keep casual
  visitors out, but a technical person can read the page. Do not put private information (marks, personal records) on the site.
  Real logins need a server and database, for example Firebase or a school management system.
* **Only one person should edit at a time.** Each edit downloads a full copy of the site. If two people edit, the later upload wins.
* **File size.** Uploaded photos and documents are stored inside `index.html`. Keep it under about 20 MB; GitHub allows files up to 100 MB.
* **YouTube videos** open on YouTube. They are not embedded.
* The icon is made from the small school crest image, so it looks slightly soft. A larger crest image gives a sharper icon.
