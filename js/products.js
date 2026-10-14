/* Gloss King product list: edit this file to change products on every page.
 *
 * To turn on buying for a product:
 *   1. Create a Payment Link in Stripe (Payment Links, no code needed).
 *   2. Paste the link into stripeUrl below (must start with https://buy.stripe.com/).
 *   3. Set price (e.g. "$29.95") and optionally image (e.g. "images/ceramic-spray.jpg").
 * Until stripeUrl is filled in, the button shows "Coming soon" and is disabled.
 * Only publishable Payment Links go here. Never put Stripe secret keys in this repo.
 */
var PRODUCTS = [
  {
    name: "Fast Finish Ceramic Spray",
    blurb: "Spray-on ceramic shine and protection after every wash. Easy to use as often as you like.",
    price: "",       // e.g. "$29.95"
    stripeUrl: "",   // e.g. "https://buy.stripe.com/xxxxxxxx"
    image: ""        // e.g. "images/ceramic-spray.jpg"
  },
  {
    name: "Advanced Wheel Cleaner",
    blurb: "Lifts brake dust off alloy and steel wheels without the heavy scrubbing.",
    price: "",
    stripeUrl: "",
    image: ""
  },
  {
    name: "Detailing Towels",
    blurb: "Ultra-thick, non-scratch microfibre in 3 sizes for drying and polishing.",
    price: "",
    stripeUrl: "",
    image: ""
  }
];

(function () {
  var holders = document.querySelectorAll("[data-products]");
  if (!holders.length) return;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function card(p) {
    var c = el("article", "product");
    var imgBox = el("div", "product-img");
    var img = document.createElement("img");
    if (p.image) { img.className = "photo"; img.src = p.image; img.alt = p.name; }
    else { img.className = "ph"; img.src = "images/gloss-king-logo.png"; img.alt = ""; }
    img.loading = "lazy";
    imgBox.appendChild(img);
    c.appendChild(imgBox);
    c.appendChild(el("h3", "", p.name));
    c.appendChild(el("p", "", p.blurb));
    c.appendChild(p.price ? el("div", "price", p.price) : el("div", "price tbc", "Price coming soon"));
    var live = typeof p.stripeUrl === "string" && p.stripeUrl.indexOf("https://buy.stripe.com/") === 0;
    var btn = el("a", "btn sm", live ? "Buy now" : "Coming soon");
    if (live) { btn.href = p.stripeUrl; btn.rel = "noopener"; }
    else { btn.setAttribute("aria-disabled", "true"); btn.setAttribute("role", "link"); }
    c.appendChild(btn);
    return c;
  }

  holders.forEach(function (h) { PRODUCTS.forEach(function (p) { h.appendChild(card(p)); }); });
})();
