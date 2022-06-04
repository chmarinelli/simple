import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify'
import * as rules from 'vee-validate/dist/rules'
import {
  ValidationProvider,
  configure,
  extend,
  setInteractionMode
} from 'vee-validate'

Vue.config.productionTip = false

configure({ bails: false });
setInteractionMode('eager');
for (const rule in rules) {
  extend(rule, {...rules[rule]});
}

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
