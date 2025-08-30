# GreenLeaf Plant Store (Template)

A ready-to-deploy React template that satisfies most of the IBM/Coursera peer-graded assignment requirements:

- React + Vite
- Redux Toolkit (cart slice, selectors)
- React Router (Landing → Products → Cart)
- Landing page with background image, company name, intro paragraph, and "Get Started" button
- Product listing with **6 plants**, thumbnails, names, prices, **3 categories**
- **Add to Cart** button per product that:
  - Increments the cart count in header
  - Disables after being clicked (prevents duplicate adds)
  - Adds the plant to the cart
- Header persists across pages with cart icon + total item count
- Cart page shows totals, per-item controls (increase, decrease, delete), and buttons:
  - Checkout (**Coming Soon**) and **Continue Shopping**

## Quick Start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy

- **Netlify**: Drag `dist` or connect repo, set build command `npm run build` and publish directory `dist`.
- **Vercel**: Import the repo; framework: Vite; build `npm run build`; output `dist`.
- **GitHub Pages**: Use a GH action or `vite-plugin-gh-pages` (optional).

## Where things live

- `src/store/cartSlice.js` – Redux Toolkit slice for cart
- `src/store/store.js` – store setup
- `src/products.js` – product catalog + categories
- `src/components/*` – UI components
- `src/pages/*` – page components
- `src/assets/*` – SVG background + product thumbnails

## Notes

- Button disabling is derived from cart state; removing the item re-enables the button.
- Prices are simple numbers; adapt currency/formatting as needed.
- Feel free to replace SVG images and content with your own.
