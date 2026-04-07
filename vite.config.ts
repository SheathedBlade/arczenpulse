import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import svgr from 'vite-plugin-svgr';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
      routeFileIgnorePrefix: '-',
      quoteStyle: 'single'
    }),
    react(),
    imagetools({
      defaultDirectives: url => {
        return new URLSearchParams({
          format: 'webp',
          as: 'image'
        });
      }
    }),
    svgr({ svgrOptions: { icon: true } }),
    Sitemap({ hostname: 'https://terystal.dev' })
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   injectRegister: 'auto',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,webp,svg,woff,woff2}'],
    //     runtimeCaching: [
    //       {
    //         urlPattern: ({ url }) => url.origin === 'https://terystal.dev',
    //         handler: 'NetworkFirst',
    //         options: {
    //           cacheName: 'html-cache',
    //           expiration: {
    //             maxEntries: 32,
    //             maxAgeSeconds: 86400
    //           },
    //           networkTimeoutSeconds: 3
    //         }
    //       },
    //       {
    //         urlPattern: ({ url }) =>
    //           url.origin === 'https://terystal.dev' &&
    //           /\.(ico|png|webp|svg|jpg|jpeg|gif)$/.test(url.pathname),
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'image-cache',
    //           expiration: {
    //             maxEntries: 64,
    //             maxAgeSeconds: 604800
    //           }
    //         }
    //       }
    //     ]
    //   }
    // })
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
          }
          if (id.includes('node_modules')) {
            if (id.includes('d3-geo') || id.includes('d3-contour')) {
              return 'd3-vendor';
            }
          }
        }
      }
    }
  }
});
