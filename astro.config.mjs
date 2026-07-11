import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://arab-dev-note.vercel.app',
  integrations: [icon()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
  },
});
