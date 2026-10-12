# Herramientas (Astro)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Estructura
- `src/layouts/Base.astro`: SEO, cabecera, pie y espacio de anuncio.
- `src/components/AdSlot.astro`: anuncio con altura reservada (se activa con `.env`).
- `src/pages/`: una página por herramienta (la URL = nombre del archivo).
- `public/ads.txt`: pega la línea que te dé AdSense.

## Publicar en Cloudflare Pages
Build command: `npm run build` · Output directory: `dist`
Variables de entorno: `PUBLIC_ADSENSE_CLIENT` y `PUBLIC_ADSENSE_SLOT` (cuando te aprueben).

## Pendiente
Crear `/privacidad`, `/acerca` y `/contacto` (AdSense las pide).
