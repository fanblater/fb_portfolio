

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from './components/Homecomponent.vue';
import Contact from './components/ContactComponent.vue';
import Quizz from './components/ContactComponent.vue';
import Timeline from './components/TimelineComponent.vue';
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/contact',
        component: Contact
    }, {
        path: '/timeline',
        component: Timeline
    }, {
        path: '/quizz',
        component: Quizz
    }
]

const router = new VueRouter({ routes });


const app = new Vue({
    el: '#app',
    router: router
});
