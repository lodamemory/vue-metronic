import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './router';
import './assets/global/plugins/bootstrap/css/bootstrap.min.css';
import './assets/global/plugins/bootstrap-toastr/toastr.min.css';
import './assets/global/plugins/font-awesome/css/font-awesome.min.css';
import './assets/global/plugins/simple-line-icons/simple-line-icons.min.css';
import './assets/global/plugins/jstree/dist/themes/default/style.min.css';
import './assets/global/plugins/select2/select2.css';
import './assets/global/css/components.css';
import './assets/global/css/plugins.css';
import './assets/admin/layout/css/layout.css';
import './assets/admin/layout/css/themes/default.css';
import './assets/admin/layout/css/custom.css';
import './assets/animate.css';

Vue.use(VueRouter);

const router = new VueRouter();

routerMap(router);

let app = Vue.extend({});

router.start(app, '#app');
