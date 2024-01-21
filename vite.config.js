import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"

import postCssPxToRem from "postcss-pxtorem"

export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/variables.scss";
          @import "./src/assets/styles/mixins.scss";
        `,
      },
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16,
          propList: ["*", "!border"],
        }),
      ],
    },
  },
})
