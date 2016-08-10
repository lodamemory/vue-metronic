import App from './App';
import ExampleButton from './example/example_button';
import ExampleAlert from './example/example_alert';
import ExamplePortlet from './example/example_portlet';
import ExampleModal from './example/example_modal';
import ExampleSelect from './example/example_select';
import ExamplePicker from './example/example_picker';
import ExampleTree from './example/example_tree';
import ExampleTable from './example/example_table';
import ExampleChart from './example/example_chart';
import ExampleCheckbox from './example/example_checkbox';
import Doc from './example/doc.vue';
export default function (router) {
    router.map({
        '/': {
            name: 'app',
            component: App,
            subRoutes: {
                '/buttons': {
                    name: 'buttons',
                    component: ExampleButton
                }
            }
        },
        '/doc': {
            name: 'doc',
            component: Doc,
            subRoutes: {
                '/buttons': {
                    name: 'buttons',
                    component: ExampleButton
                },
                '/portlet': {
                    name: 'portlet',
                    component: ExamplePortlet
                },
                '/alert': {
                    name: 'alert',
                    component: ExampleAlert
                },
                '/modal': {
                    name: 'modal',
                    component: ExampleModal
                },
                '/select': {
                    name: 'select',
                    component: ExampleSelect
                },
                '/picker': {
                    name: 'picker',
                    component: ExamplePicker
                },
                '/tree': {
                    name: 'tree',
                    component: ExampleTree
                },
                '/table': {
                    name: 'table',
                    component: ExampleTable
                },
                '/chart': {
                    name: 'chart',
                    component: ExampleChart
                },
                '/checkbox': {
                    name: 'checkbox',
                    component: ExampleCheckbox
                }
            }
        }

    });
}