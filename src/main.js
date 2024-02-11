import { createApp } from "vue";
import App from "./App.vue";
import { loadFonts } from "./plugins/webfontloader";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.indigo.darken1, // #E53935
          secondary: colors.indigo.lighten4, // #FFCDD2
        },
      },
    },
  },
});
loadFonts();

createApp(App).use(vuetify).mount("#app");
