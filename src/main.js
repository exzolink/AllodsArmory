import "vuetify/styles"
import "./assets/styles/main.scss"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"
import { ru } from "vuetify/locale"

const vuetify = createVuetify({
  locale: {
    locale: "ru",
    messages: { ru },
  },
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          surface: "rgb(27, 25, 32)",
          "on-surface": "#d0d0d0",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App)

app.use(vuetify)

app.use(router)

app.mount("#app")
