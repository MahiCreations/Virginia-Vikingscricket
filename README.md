# Virginia Vikings — Official Team Website

A responsive, static website starter for Virginia Vikings / USCL T20. It uses HTML, CSS and vanilla JavaScript and can be hosted for free on GitHub Pages.

## Included
- Responsive navigation and cinematic cricket-inspired home page
- Tournament / organizer / ownership strip
- Five management cards with Instagram icon links
- Exactly 20 editable player placeholders
- Matches & results placeholder (no invented fixtures or scores)
- Media categories with working filters and YouTube link thumbnail support
- Newsroom cards
- Social profile links
- Content kept separate in `content.js`

## Important: supplied images
The reference images were not available as files in the current build session. The site therefore uses designed placeholders instead of pretending to display the supplied logos or photographs. To add them:
1. Put image files in the `assets/` folder.
2. Open `content.js`.
3. Set `image: "assets/filename.jpg"` for the matching management profile, player, media item or news item.
4. Replace the text-based `VV`, USCL, Wesley and ProCorp placeholder marks in `index.html` with your official transparent PNG/SVG logos when available. Keep original aspect ratios.

For Bandaru Ayyappa, `image: ""` leaves the portrait as a replaceable placeholder. Set it to an asset path when you want to add the coach photo.

## Edit player details
In `content.js`, `players` contains exactly 20 entries. Update a player's `name`, `jersey`, `role`, `bio`, `stats`, `image`, and `instagram`. Do not remove entries if you want to preserve the 20-card roster layout. Example:

```js
{
  name: "Player Name",
  jersey: "18",
  role: "All-Rounder",
  bio: "Short player bio.",
  stats: "",
  image: "assets/player-01.jpg",
  instagram: "https://www.instagram.com/example/"
}
```

Allowed role labels can be Batter, Bowler, All-Rounder, or Wicketkeeper. Only add verified details.

## Edit matches
The match placeholder is intentionally static in `index.html`. When fixtures are confirmed, replace the `.match-placeholder` block in the Matches section with actual fixture cards and update it only with verified details. This starter does not pretend to have a live score API.

## Add media
Add entries to `media` in `content.js`. Supported categories:
- `posters`
- `highlights`
- `photos`
- `announcements`

Use `image: "assets/poster.jpg"` for an image. For a YouTube video, use a `video` URL such as `https://www.youtube.com/watch?v=VIDEO_ID`. The media filter buttons work. Videos open on YouTube in a new tab and display a thumbnail where a recognized YouTube URL is supplied.

## Add newsroom posts
Add or edit objects in `news` in `content.js`. Supported fields: `title`, `category`, `date`, `description`, `image`, `video`.

## Free hosting with GitHub Pages
1. Create a free GitHub account at https://github.com/ if needed.
2. Create a new **public** repository, for example `virginia-vikings`.
3. Upload `index.html`, `styles.css`, `app.js`, `content.js`, `README.md`, and the `assets/` folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. Wait for the deployment URL shown in Pages settings. It will look like `https://YOUR-USERNAME.github.io/virginia-vikings/`.

No custom domain, paid hosting, backend, or API key is required. GitHub Pages hosts static files for free subject to GitHub's current terms and limits.

## Editing workflow / limitations
- Update `content.js` locally and upload the changed file to GitHub, or edit it directly in GitHub's web editor.
- This is a static site, so it does **not** include browser-based uploads, login, admin dashboard, or persistent form submissions. Those features require a backend or a separate authenticated CMS. No fake upload buttons are included.
- Do not put passwords, API secrets or admin credentials in public files.
- Google Fonts load from an external service; the site still uses fallback fonts if unavailable.
- All external Instagram links open in a new tab with safe `rel` attributes.

## Local preview
Open `index.html` in a browser. For the best preview, you can run a simple local server from this folder, e.g. `python -m http.server 8000`, then visit `http://localhost:8000`.
