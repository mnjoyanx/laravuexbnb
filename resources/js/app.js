require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
