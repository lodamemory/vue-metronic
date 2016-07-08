import App from './App';
import ExampleButton from './example/example_button';
import ExampleAlert from './example/example_alert';
import ExampleModal from './example/example_modal';
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
                '/alert': {
                    name: 'alert',
                    component: ExampleAlert
                },
                '/modal': {
                    name: 'modal',
                    component: ExampleModal
                }
            }
        }

    });
}