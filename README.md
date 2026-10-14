# Gloss King website

Static site (no build step). Branch per change; preview deploys per PR; `main` is production and requires Alex's approval.

## Layout
- `index.html` landing page, `about.html` story + products, `safety.html` safety, value and contact
- `styles.css` all styling; `fonts/` self-hosted Cinzel + Montserrat (SIL OFL)
- `js/products.js` **the one place products live**. Shown on the landing and About pages.

## Adding Stripe product links
Open `js/products.js`. For each product, paste its Stripe Payment Link into `stripeUrl` (must start with `https://buy.stripe.com/`), add `price` and optionally `image`. Until a link is set the button shows a disabled "Coming soon".

## Dev
After cloning, enable the secret-blocking hook:

```
git config core.hooksPath .githooks
```

Stripe: use publishable keys / Payment Links only in the site. Never commit secret keys (`sk_live_`, `sk_test_`, `whsec_`).
