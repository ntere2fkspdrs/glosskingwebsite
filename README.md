# Website

Family car-detailing products site. Branch per change; preview deploys per PR; `main` is production and requires Alex's approval.

After cloning, enable the secret-blocking hook:

```
git config core.hooksPath .githooks
```

Stripe: use publishable keys / Payment Links only in the site. Never commit secret keys (`sk_live_`, `sk_test_`, `whsec_`).
