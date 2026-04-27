import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://fitlabreviews.com',
  integrations: [react()],
  build: {
    format: 'file',
  },
  compressHTML: true,
  trailingSlash: 'never',
});
