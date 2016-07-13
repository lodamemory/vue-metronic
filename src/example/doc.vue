<template>
<m-page :menus="menus"></m-page>
</template>
<script>
    import mPage from '../common/mPage.vue';
    export default{
        components: {mPage},
        data () {
            return {
                menus: [
                    { name: 'UI',
                      url: '',
                      icon: 'icon-diamond',
                      subMenu: [
                          {name: 'Buttons', url: 'buttons', icon: 'icon-bar-chart'},
                          {name: 'Alert', url: 'alert', icon: 'icon-bulb'},
                          {name: 'Modal', url: 'modal', icon: 'icon-graph'},
                          {name: 'Select', url: 'select', icon: 'icon-graph'},
                          {name: 'Picker', url: 'picker', icon: 'icon-graph'}
                      ]
                    },
                    { name: 'Dashboard',
                      url: '',
                      icon: 'icon-home',
                      subMenu: []
                    }
                ]
            };
        }
    };
</script>