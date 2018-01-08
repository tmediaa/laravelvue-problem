/*
require('./bootstrap');
import VueResource from 'vue-resource';
window.Vue = require('vue');

Vue.use(VueResource);


Vue.component('app', require('./components/Customers.vue'));

const app = new Vue({
    el: '#app'
});

*/

require('./bootstrap');
import VueResource from 'vue-resource';
window.Vue = require('vue');

Vue.use(VueResource);

import App from './components/Customers.vue';

//Vue.component('app', require('./components/Customers.vue'));

// "h" is just a standard taken from JSX
new Vue({
    render: h => h(App)
}).$mount("#app");
