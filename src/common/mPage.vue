<template>
<div class="page-header-fixed page-quick-sidebar-over-content page-header-fixed-mobile page-footer-fixed">
    <div class="page-header navbar navbar-fixed-top" v-el:header>
        <!-- BEGIN HEADER INNER -->
        <div class="page-header-inner">
            <!-- BEGIN LOGO -->
            <div class="page-logo">
                <a href="index.html">
                <img src="../assets/logo.png" alt="logo" class="logo-default header-img-width">
                </a>
                <div class="menu-toggler sidebar-toggler hide">
                    <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
                </div>
            </div>
            <!-- END LOGO -->
            <!-- BEGIN RESPONSIVE MENU TOGGLER -->
            <a href="javascript:;" class="menu-toggler responsive-toggler" @click="toggler1 = toggler1 === true ? false : true;">
            </a>
            <!-- END RESPONSIVE MENU TOGGLER -->
        </div>
        <!-- END HEADER INNER -->
    </div>
    <!-- BEGIN CONTAINER -->
    <div class="page-container" :class="{'page-sidebar-closed': toggler}">
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar-wrapper">
            <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
            <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
            <div class="page-sidebar navbar-collapse collapse" :class="{'in': toggler1}">
                <!-- BEGIN SIDEBAR MENU -->
                <ul class="page-sidebar-menu" :class="{'page-sidebar-menu-closed': toggler}" >
                    <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
                    <li class="sidebar-toggler-wrapper">
                        <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                        <div class="sidebar-toggler" @click="toggler = toggler === true ? false : true;">
                        </div>
                        <!-- END SIDEBAR TOGGLER BUTTON -->
                    </li>
                    <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
                    <li class="sidebar-search-wrapper">
                        <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                        <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                        <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                        <form class="sidebar-search" action="extra_search.html" method="POST">
                            <a href="javascript:;" class="remove">
                            <i class="icon-close"></i>
                            </a>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <a href="javascript:;" class="btn submit"><i class="icon-magnifier"></i></a>
                                </span>
                            </div>
                        </form>
                        <!-- END RESPONSIVE QUICK SEARCH FORM -->
                    </li>
                    <li class="start" v-for="(i, m) in menus" :class="{'active': i == subMenu}">
                        <a href="javascript:;" @click="menuClick(i, m)">
                        <i class="{{m.icon}}"></i>
                        <span class="title">{{m.name}}</span>
                        <span class="arrow" v-if="m.subMenu.length > 0" :class="{'open': i == subMenu}"></span>
                        </a>
                        <ul class="sub-menu animated" v-if="m.subMenu.length > 0" v-show="i == subMenu" transition="fade">
                            <li v-for="(si, ms) in m.subMenu">
                                <a href="javascript:;" @click="menuClick(i, m, ms)">
                                <i class="{{ms.icon}}"></i>
                                {{ms.name}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- END SIDEBAR MENU -->
            </div>
        </div>
        <!-- END SIDEBAR -->
        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
            <div class="page-content" v-el:content >
                <router-view></router-view>
            </div>
        </div>
        <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER --> 
    <!-- BEGIN FOOTER -->
    <div class="page-footer" v-el:footer>
        <div class="page-footer-inner">
             2014 &copy; Metronic by keenthemes.
        </div>
        <div class="page-footer-tools">
            <span class="go-top">
            <i class="fa fa-angle-up"></i>
            </span>
        </div>
    </div>
    <!-- END FOOTER --> 
</div>  
</template>
<script>
    export default{
        props: ['menus'],
        data () {
            return {
                toggler: 0,
                toggler1: 0,
                subMenu: -1,
                transitionName: 'fade'
            };
        },
        methods: {
            menuClick (i, m, sm) {
                if (sm) {
                    this.$route.router.go({name: sm.url});
                } else {
                    if (this.subMenu === i) {
                        this.subMenu = -1;
                    } else {
                        this.subMenu = i;
                    }
                    if (m.subMenu.length === 0) {
                        this.$route.router.go({name: m.url});
                    }
                }
            }
        },
        transitions: {
            'fade': {
                enterClass: 'fadeIn',
                leaveClass: 'fadeOut'
            }
        },
        ready () {
            let contentHeight = this.$els.footer.offsetTop - this.$els.header.offsetHeight;
            this.$els.content.style.minHeight = contentHeight + 'px';
            window.console.log(this.$els.content, this.$els.footer.offsetTop, this.$els.header.offsetHeight, contentHeight, this.$els.content.style.minHeight);
        }
    };
</script>
<style lang="css">
    .header-img-width{
        width: 25px
    }
</style>
