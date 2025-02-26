import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'maskable_icon_x192.png'
      ],
      manifest: {
        name: 'Character Counter',
        short_name: 'CharCount',
        start_url: '/',
        theme_color: '#c27cf8',
        background_color: '#ffffff',
        scope: '/',
        display: 'standalone',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        description:
          'A powerful text analysis tool built with React and TypeScript. Paste your text to instantly see the total character count (excluding spaces), set a custom character limit, and get detailed stats including word count, sentence count, and letter density.',
        screenshots: [
          {
            src: '/light_mode.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: '/dark_mode.png',
            sizes: '2549x1704',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: '/mobile_dark.jpg',
            sizes: '320x640',
            type: 'image/jpg'
          }
        ]
      }
    })
  ],
  server: {
    host: true,
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
