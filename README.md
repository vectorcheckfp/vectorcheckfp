# Vector Check Financial Planning website

Plain static site: HTML, CSS and a little JavaScript. No build step, so the folder can be uploaded to any static host as-is (Porkbun static hosting, GitHub Pages, Cloudflare Pages, Netlify).

## Pages
- `index.html`: Home
- `services.html`: Services, pricing, process and FAQ
- `resources.html`: Software demo videos (Loom)
- `about.html`: About Ryan and contact details

## Files
- `assets/css/styles.css`: all styling. Colors are set at the top under `:root`.
- `assets/js/main.js`: mobile menu, click-to-play videos, topic filters
- `assets/img/`: jet photo, logo, favicon
- `docs/`: Form ADV Part 2 PDF

## Adding a video (resources.html)
Copy one `<article class="video-card">` and change the title, description and video ID:
- Loom: `data-loom="ID"`, where ID is the code at the end of `loom.com/share/ID`. Make sure the video is viewable by anyone with the link.
- YouTube: `data-youtube="ID"`, where ID is the part after `v=` in the link.

## Maintenance
- When the ADV is updated, replace the PDF in `docs/` and update the link in every page's footer.
- The header and footer are repeated in each page; edit all four when changing them.
