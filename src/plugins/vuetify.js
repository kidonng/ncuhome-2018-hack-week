import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import zhHans from 'vuetify/es5/locale/zh-Hans'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  theme: {
    primary: '#fe9133',
    done: '#4caf50'
  }
})