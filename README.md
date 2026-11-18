# Vector Check Financial Planning website

Plain static site: HTML, CSS and a little JavaScript. No build step, so the folder can be uploaded to any static host as-is (Porkbun static hosting, GitHub Pages, Cloudflare Pages, Netlify).

## Pages
- `index.html`: Home
- `services.html`: Services, pricing, process and FAQ
- `resources.html`: Example videos and products (placeholders for now)
- `about.html`: About Ryan and contact details

## Files
- `assets/css/styles.css`: all styling. Colors are set at the top under `:root`.
- `assets/js/main.js`: mobile menu, click-to-play videos, topic filters
- `assets/img/`: jet photo, logo, favicon
- `docs/`: Form ADV Part 2 PDF

## Adding a video (resources.html)
1. Upload the video to YouTube (Public or Unlisted).
2. Copy the ID from the link: `https://www.youtube.com/watch?v=VIDEO_ID`.
3. Put it in a card's `data-youtube="VIDEO_ID"` and delete that card's `<div class="video-placeholder">…</div>`.

## Before launch
- Replace the placeholder videos and products and delete the yellow "Draft" notice on `resources.html`.
- When the ADV is updated, replace the PDF in `docs/` and update the link in every page's footer.
- The header and footer are repeated in each page; edit all four when changing them.
