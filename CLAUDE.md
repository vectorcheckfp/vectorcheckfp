# Vector Check Financial Planning website

Marketing site for Vector Check Financial Planning LLC, a fee-only, advice-only registered investment adviser (RIA) in Niceville, FL. Owner and planner: Ryan Suttlemyre (IRS Enrolled Agent, Air Force veteran). Clients: military members and veterans, airline pilots, and proactive DIYers.

Note: this repository is public and every file in it is served on the live site (including this one), so never put credentials, client information, or anything private here.

## Hosting and publishing

- Plain static HTML/CSS/JS. No build step, no framework, no package manager.
- Hosted on **GitHub Pages** from the `main` branch, root folder. `.nojekyll` makes Pages serve files as-is.
- **Pushing to `main` publishes to the live site** at https://www.vectorcheckfp.com in about a minute. Commit directly to `main` (the owner works this way; no PRs).
- `CNAME` holds `www.vectorcheckfp.com`. GitHub redirects `vectorcheckfp.com` and `vectorcheckfp.github.io/vectorcheckfp/` to it. HTTPS is enforced; GitHub renews the certificate automatically.
- GitHub serves pages with `Cache-Control: max-age=600`, so after a push the owner may need a hard refresh (Ctrl+F5 / Cmd+Shift+R) to see changes.
- To confirm a change is live, fetch the page with a cache-busting query (e.g. `?v=1`) and grep for the new text.

## DNS (domain registered at Porkbun)

- Website records: four A records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; CNAME `www` → `vectorcheckfp.github.io`.
- **Email and calling run on Microsoft 365. Never change** the MX, SPF/DMARC/DKIM/`MS=` TXT records, the `autodiscover` CNAME, or the two `_sip*` SRV records.
- The site previously ran on Articulation (Porkbun's site builder, old IP `208.66.192.100`). Do not use Articulation's "Fix DNS" button: it points the domain back to Articulation.

## Files

- `index.html` Home · `services.html` Services, pricing, process, FAQ · `resources.html` software demo videos · `about.html` bio, the name, contact
- `assets/css/styles.css` all styles; design tokens under `:root`
- `assets/js/main.js` mobile menu, click-to-load videos (YouTube via `data-youtube`, Loom via `data-loom`), footer year
- `assets/img/` jet photo (`jet.jpg`/`jet.webp`), logo card, `favicon.svg`
- `docs/` Form ADV Part 2 PDF (linked from every footer)
- **The header and footer are duplicated in all four pages.** Any change to navigation, the brand mark, contact details, the ADV link, or the disclosure must be made in all four files.

## Design

- Modern military/aviation look. Palette from the VC logo: navy (`--navy-900` #0d1b2e), silver (`--steel-200`), gold (`--gold` #c9a55c).
- Fonts (Google Fonts): Barlow Condensed (uppercase headings), Inter (body), IBM Plex Mono (small "eyebrow" labels).
- Motifs: chart-grid backgrounds, compass "heading tape" under page heroes, HUD corner brackets on photos, diamond waypoint numbers for process steps.
- Brand mark: a HUD flight-path marker ("velocity vector") in gold, inline SVG in header/footer; `favicon.svg` is a simplified version. The owner chose this over a "V" mark.
- Keep the jet photo (Ryan and family in front of an F-35).
- Dark sections use the `on-dark` class (light text); forgetting it makes text invisible on navy.

## Content rules (regulated adviser)

- No testimonials, client results, performance claims, or invented statistics.
- Only claim credentials the owner has: fee-only fiduciary, IRS Enrolled Agent, Air Force veteran. Not a CFP.
- Keep the regulatory disclosure in the footer word-for-word.
- Prices: one-time comprehensive plan $2,000–$10,000; project or hourly $250/hour; pay when complete. Intro call and discovery meeting are free; one hour of follow-up within 60 days is included.
- Booking link: https://slant.app/p/a99wmtnq. Contact: Ryan@VectorCheckFP.com, (850) 359-1776.
- Recommend that the owner run new or reworded content past their compliance review.

## Resources page videos

Four Loom software demos in a 2×2 grid (Income Lab, RightCapital, Holistiplan, Holistiplan Roth conversion). To add one, copy a `video-card` article and set `data-loom` to the ID at the end of the `loom.com/share/` link. The owner removed the topic filter buttons; don't re-add them unless asked.

## Checking changes

Before pushing, render the changed pages with Playwright at desktop (1366px) and phone (390px) widths: no JavaScript errors, no horizontal scrolling, text readable on dark sections. Show the owner a screenshot of visual changes.

## Open items (as of 2026-11-20)

- Owner to cancel the Articulation plan before 2026-12-13 (after saving any form submissions and asking about RIA website archives), then delete the two `_acme-challenge` TXT records.
- Optional: verify the domain in GitHub account settings (Pages → Add a domain) to prevent takeover.
