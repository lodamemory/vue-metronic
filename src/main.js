import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './router';
import './components/componentsCss';

Vue.use(VueRouter);

const router = new VueRouter();

routerMap(router);

let app = Vue.extend({});

router.start(app, '#app');
