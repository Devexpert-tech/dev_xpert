# Extracting assets from Figma for dev_xpert

This document explains how to export design assets from the provided Figma file and wire them into the `frontend` app.

1) Export assets manually from Figma (recommended for small projects)

- Open the Figma file in your browser.
- Select the layer or component you want to export (icons, logos, images, illustrations).
- In the right-hand sidebar, under **Export**, choose format (SVG for icons/logo, PNG/JPEG for photos) and click **Export**.
- Save exported files into `frontend/public/assets/` (keep names short, e.g. `logo.svg`, `hero-illustration.png`).

2) Export assets programmatically using the Figma API (requires a Personal Access Token)

- Create a personal access token: https://www.figma.com/developers/api
- Get the file key from the Figma URL (the long ID in the URL path).
- Example to list images or export a node as PNG (replace `FILE_KEY`, `NODE_ID`, and `YOUR_TOKEN`):

```bash
curl -H "X-Figma-Token: YOUR_TOKEN" "https://api.figma.com/v1/images/FILE_KEY?ids=NODE_ID&format=svg"
```

This returns a JSON with URLs to download the exported images. Download them and place into `frontend/public/assets/`.

3) After placing assets

- Update components to reference `/assets/<filename>` — already wired in `Header.jsx` and `Hero.jsx`.
- Commit and push: `git add frontend/public/assets/* && git commit -m "chore(assets): add exported assets"`.

If you want, provide a Figma Personal Access Token and the file key and I can fetch assets automatically and add them to the repo.
