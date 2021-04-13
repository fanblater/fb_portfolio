import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomCss from './../css/app.css';
import Home from './components/Homecomponent.vue';
import Contact from './components/ContactComponent.vue';
import Quizz from './components/QuizzComponent.vue';
import Timeline from './components/TimelineComponent.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import EditTimeline from './components/EditTimeline.vue';

import CreateTimeline from './components/CreateTimeline.vue';
import CreateQuizz from './components/CreateQuizzComponent.vue'
require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
    name: 'Home'
}, {
    path: '/contact',
    component: Contact,
    name: 'contact'
}, {
    path: '/timeline',
    component: Timeline
}, {
    path: '/quizz',
    component: Quizz
}, {
    path: '/login',
    component: Login,
    name: 'Login'
}, {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    beforeEnter: (to, form, next) => {
        axios.get('/api/authenticated').then(() => {
            next();
        }).catch(() => {
            return next({
                name: 'Login'
            })
        })
    }
}, {
    path: '/register',
    component: Register,
}, {
    path: '/update/:id',
    component: EditTimeline,
    name: 'update',
    meta: {
        requiresAuth: true
    },
}, {
    path: '/create',
    component: CreateTimeline,
    name: 'create',
    meta: {
        requiresAuth: true
        }
    }, {
    path: '/editquizz/:Pid',
    component: CreateQuizz,
    name: 'editquizz',
    meta: {
            requiresAuth: true
        }
}]


const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    CustomCss,
    router: router,

});
