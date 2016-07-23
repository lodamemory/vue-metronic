import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './router';

// BEGIN GLOBAL MANDATORY STYLES
import './assets/global/plugins/font-awesome/css/font-awesome.min.css';
import './assets/global/plugins/simple-line-icons/simple-line-icons.min.css';
import './assets/global/plugins/bootstrap/css/bootstrap.min.css';
import './assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css';
// END GLOBAL MANDATORY STYLES

// BEGIN PAGE LEVEL PLUGINS
// alert
import './assets/global/plugins/bootstrap-toastr/toastr.min.css';
// select
import './assets/global/plugins/select2/css/select2.min.css';
import './assets/global/plugins/select2/css/select2-bootstrap.min.css';
// tree
import './assets/global/plugins/jstree/dist/themes/default/style.min.css';
// table
import './assets/global/plugins/datatables/datatables.min.css';
import './assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css';
// END PAGE LEVEL PLUGINS -->

// BEGIN THEME GLOBAL STYLES
import './assets/global/css/components-md.min.css';
import './assets/global/css/plugins-md.min.css';
// END THEME GLOBAL STYLES

// BEGIN THEME LAYOUT STYLES
import './assets/layouts/layout4/css/layout.min.css';
import './assets/layouts/layout4/css/themes/default.min.css';
import './assets/layouts/layout4/css/custom.min.css';
// END THEME LAYOUT STYLES

import './assets/animate.css';

Vue.use(VueRouter);

const router = new VueRouter();

routerMap(router);

let app = Vue.extend({});

router.start(app, '#app');
