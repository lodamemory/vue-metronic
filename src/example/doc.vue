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
                          {name: 'Buttons', url: 'buttons', icon: ''},
                          {name: 'Alert', url: 'alert', icon: ''},
                          {name: 'Modal', url: 'modal', icon: ''},
                          {name: 'Select', url: 'select', icon: ''},
                          {name: 'Picker', url: 'picker', icon: ''}
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