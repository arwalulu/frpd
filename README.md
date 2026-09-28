# FrPD Corporate Website

A responsive corporate portal built with HTML5, CSS3 and vanilla JavaScript only.

## Files

- `index.html` — Homepage
- `organization.html` — Reusable organization page driven by `?org=` URL parameter
- `css/style.css` — Complete design system and responsive styling
- `js/script.js` — Navigation, animations, organization data, references, team search/filter and video modal
- `images/` — Local SVG placeholder logo, leader, team and news artwork
- `assets/` — Put local MP4 files or other static assets here

## Organization URLs

- `organization.html?org=wna`
- `organization.html?org=wsa`
- `organization.html?org=org3`
- `organization.html?org=org4`
- `organization.html?org=org5`
- `organization.html?org=org6`
- `organization.html?org=org7`
- `organization.html?org=org8`

## Where to edit content

Open `js/script.js` and edit:

1. `ORGANIZATIONS` — organization names, descriptions, leaders, coverage locations and team departments.
2. `REFERENCES` — portal names, icons and URLs.
3. `FEATURED_VIDEO` — switch between `youtube`, `mp4`, or `placeholder`.

Homepage copy such as Vision, Mission, Services and News can be edited directly in `index.html`.

## Featured video examples

### YouTube

```js
const FEATURED_VIDEO = {
  type: 'youtube',
  youtubeId: 'YOUR_VIDEO_ID',
  mp4Path: ''
};
```

### Local MP4

Put the file inside `assets/`, then:

```js
const FEATURED_VIDEO = {
  type: 'mp4',
  youtubeId: '',
  mp4Path: 'assets/frpd-feature.mp4'
};
```

## Run locally

You can open `index.html` directly, or use a simple local server for the best testing experience:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

- Lucide Icons and Google Fonts are loaded from CDNs. The website content/layout still works if those CDNs are unavailable, but icons/fonts may fall back.
- Replace the local SVG placeholder images with official FrPD photography while keeping the same filenames, or update the `src` paths in HTML/JavaScript.

## Homepage image replacements
- Header logo: replace `images/logo/frpd-logo.svg` with the official FrPD logo, or update the `<img>` path in `index.html` / `organization.html`.
- Main leadership photo: replace `images/leaders/leader-primary.jpg`.
- Our Leaders photos: replace `images/team/leader-1.jpg`, `leader-2.jpg`, and `leader-3.jpg`.
- Hero fire-station photo is currently loaded from Unsplash (Paul Yong, Unsplash License). Replace the `hero-fire-card` image `src` in `index.html` with your approved FrPD/fire-station image when available.


## Latest News
Homepage news items are maintained in `NEWS_ITEMS` inside `js/script.js`. Clicking an item in the right-side news list loads the complete article into the main reader panel.


## Team counts
Organization team sizes are controlled by `teamCount` in `js/script.js`. WNA=5, WSA=6, Organization 3=7, Organization 4=6, Organization 5=7, Organization 6=2, Organization 7=2. Organization 8 keeps the default count until specified.
