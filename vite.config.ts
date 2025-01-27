import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL,
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Dashboard",
        short_name: "Dashboard",
        description: "static dashboard page with personal links and shortcuts",
        theme_color: "#181818",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
