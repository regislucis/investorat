import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#8d5536'
        // secondary: '#b0bec5',
        // anchor: '#8c9eff'
      }
    }
  }
})
