import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import axios from 'axios';

axios.defaults.baseURL =
  'https://fi1efvvxmh.execute-api.us-east-1.amazonaws.com/dev';

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
