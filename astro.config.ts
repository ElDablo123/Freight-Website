import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, envField, sharpImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: "compile"
  }),


  integrations: [tailwind({
    applyBaseStyles: false,
  }), sitemap(), mdx(), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': [
        'template',
        'gallery',
        'approval',
        'document',
        'advertising',
        'currency-exchange',
        'voice-presentation',
        'business-contact',
        'database',
      ],
    },
  }), ...whenExternalScripts(() =>
    partytown({
      config: { forward: ['dataLayer.push'] },
    })
  ), compress({
    CSS: true,
    HTML: {
      'html-minifier-terser': {
        removeAttributeQuotes: false,
      },
    },
    Image: false,
    JavaScript: true,
    SVG: false,
    Logger: 1,
  }), astrowind({
    config: './src/config.yaml',
  }), react()],

  image: {
    service:sharpImageService(),
  },
  env: {
    schema: {
      VITE_SITE_KEY: envField.string({
        context: 'client',
        access: 'public',
      }),
      VITE_SECRET_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      VITE_FORM: envField.string({
        context: 'client',
        access: 'public',
      }),
      VITE_API: envField.string({
        context: 'server',
        access: 'secret'
      })
    },
  },
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },


});