# GQP Security Systems QA

## Source / Fact Audit

- Business name: PASS, Facebook public metadata.
- Location: PASS, Huddersfield from Facebook metadata and MyBuilder profile snippets.
- Profession: PASS, security systems installer from Facebook/MyBuilder snippets.
- Services: PASS, CCTV, intruder alarms, fire, access control, AV installations, lighting systems and door bells from Facebook metadata; CCTV/intruder/fire/outdoor lighting from MyBuilder snippets.
- Reviews: PASS, written MyBuilder snippets used with names where shown.
- Phone: PASS, `07572 525408` verified from Nextdoor public listing.
- Email: PASS, `gav_quinton@hotmail.com` verified from Nextdoor public listing.
- Contact route: PASS, verified phone, email, Facebook and MyBuilder profile URLs.
- Map: PASS, Nabcroft Lane / coordinates from Nextdoor public listing.

## Copy Audit

- No invented phone, email, address, review count, award, accreditation or guarantee.
- No unsupported upload/photo/send photos copy.
- Hero image clearly treated as atmosphere, not proof.
- Gallery avoided because no verified project image pool was available.

## Form Audit

- One primary first-viewport form present.
- Form action uses verified `mailto:gav_quinton@hotmail.com`.
- No fake or guessed email.
- Helper copy states the selected service and verified phone fallback.

## Image / Layout Audit

- Hero image: generated atmospheric asset, high resolution, project-bound in `public/assets/`.
- Logo: verified Facebook profile image.
- Real project images: none verified, no fake portfolio section used.

## Local Build Checks

- `npm run build`: PASS.
- `npm run build:github`: PASS.
- `.nojekyll`: PASS, empty file present in `out/`.
- Forbidden phrase grep in exported HTML: PASS.
- One H1: PASS.
- One primary form: PASS.
- Hero form present: PASS.
- Verified email/`mailto:` present: PASS, `gav_quinton@hotmail.com`.
- Verified phone/`tel:` present: PASS, `+447572525408`.
- Map iframe present and visually loaded: PASS.
- Desktop screenshot: PASS, `qa-hero-desktop.png`, `qa-contact-desktop.png`.
- Mobile screenshot: PASS, `qa-hero-mobile.png`, `qa-footer-mobile.png`.

## Live QA

- Deployment: PASS, GitHub Pages built from `gh-pages`.
- Live URL: `https://deanooooooooo.github.io/gqp-security-systems/`.
- Live HTML contains latest business/content markers: PASS.
- Live CSS HTTP 200: PASS.
- Live hero image HTTP 200: PASS.
- Live one H1 / one form / hero form present: PASS.
- Live verified email and phone links present: PASS.
- Live map iframe coordinates present and screenshots loaded: PASS.
- Live bad phrase grep: PASS.
- Live screenshots: PASS, `qa-live-hero-desktop.png`, `qa-live-hero-mobile.png`, `qa-live-contact-mobile.png`.
