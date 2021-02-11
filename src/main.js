import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from '@/plugins/vuetify';
import Loader from '@/components/Loader';
import ConfirmItemModal from '@/components/ConfirmItemModal';

Vue.config.productionTip = false;
Vue.component('Loader', Loader);
Vue.component('ConfirmItemModal', ConfirmItemModal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
