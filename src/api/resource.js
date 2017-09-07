import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const baseUrl = '/api/';

Vue.http.headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};
Vue.http.options.emulateJSON = true;

export default {
  
};
