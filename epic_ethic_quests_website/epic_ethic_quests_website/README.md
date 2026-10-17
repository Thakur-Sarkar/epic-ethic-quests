# Epic Ethic Quests — AI Story Library

A responsive static website built with HTML, CSS, and JavaScript. It provides a searchable/filterable library of Hindi and English story videos and opens YouTube videos in an embedded modal.

## Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.
4. Search, change filters, and test the video modal.

## Important: use your own videos
The library includes demo entries and sample YouTube IDs. Some sample videos may be unavailable, unrelated, or have embedding disabled. Replace the `videoId` values in `script.js` with IDs from videos you own or have permission to display.

For a URL like:
`https://www.youtube.com/watch?v=ABC123xyz89`
the video ID is:
`ABC123xyz89`

For a Shorts URL like:
`https://www.youtube.com/shorts/ABC123xyz89`
the video ID is also:
`ABC123xyz89`

Replace `imageUrl` with a direct image URL for your thumbnail, or leave it empty to show the emoji artwork. Keep image URLs accessible publicly.

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a new public repository, e.g. `storyverse`.
3. Upload `index.html`, `style.css`, and `script.js` to the repository root.
4. Open repository **Settings → Pages**.
5. Under build and deployment, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.
7. Wait for GitHub Pages to publish your website. The address will look like `https://YOUR-USERNAME.github.io/storyverse/`.

GitHub may change its interface. A public repository is typically sufficient for free GitHub Pages hosting; review the current GitHub Pages terms for your account.

## Notes
- The Google Fonts import is optional. The site uses fallback fonts if unavailable.
- YouTube embeds require an internet connection and may be restricted by the video's owner.
- This is a front-end video library, not an AI video generator. AI video generation would require additional services, API credentials, and possibly paid usage.
- Add your actual channel link and branding before publishing.


## Epic Ethic Quests branding
- Brand palette: midnight navy `#07172A`, story orange `#FF980B`, teal `#00C2A8`, pale text `#F8F9FA`.
- Logo file: `logo.svg` (scalable, lightweight, no paid design tool required).
- Fonts: Manrope / DM Sans via Google Fonts, with local sans-serif fallbacks.
- Suggested tagline: **Imagine • Explore • Learn.**


## Brand identity: Epic Ethic Quests
- Tagline: **Imagine • Explore • Learn.**
- Primary background: `#07172A` (midnight navy)
- Accent: `#FF980B` (quest gold/orange)
- Secondary: `#00C2A8` (adventure teal)
- Logo: `logo.svg`
