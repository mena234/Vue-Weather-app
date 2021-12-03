import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUR_APP_GOOGLE_API,
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
 
})

Vue.filter('celsius', function (value) {
  return `${value}°C`
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
