import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://marvelous-cocada-04d587.netlify.app',
  integrations: [preact()]
});