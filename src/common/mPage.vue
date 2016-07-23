<template>
<div class="page-container-bg-solid page-header-fixed page-sidebar-closed-hide-logo page-md" :class="{'page-sidebar-closed': toggler}">
    <div class="page-header navbar navbar-fixed-top" v-el:header>
        <!-- BEGIN HEADER INNER -->
        <div class="page-header-inner">
            <!-- BEGIN LOGO -->
            <div class="page-logo">
                <a href="index.html">
                <img src="../assets/logo.png" alt="logo" class="logo-default header-img-width">
                </a>
                <div class="menu-toggler sidebar-toggler"  @click="toggler = toggler === true ? false : true;">
                    <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
                </div>
            </div>
            <!-- END LOGO -->
            <!-- BEGIN RESPONSIVE MENU TOGGLER -->
            <a href="javascript:;" class="menu-toggler responsive-toggler" @click="toggler1 = toggler1 === true ? false : true;">
            </a>
            <!-- END RESPONSIVE MENU TOGGLER -->
            <!-- BEGIN PAGE TOP -->
            <div class="page-top">
                <!-- BEGIN HEADER SEARCH BOX -->
                <!-- DOC: Apply "search-form-expanded" right after the "search-form" class to have half expanded search box -->
                <form class="search-form" action="page_general_search_2.html" method="GET">
                    <div class="input-group">
                        <input type="text" class="form-control input-sm" placeholder="Search..." name="query">
                        <span class="input-group-btn">
                            <a href="javascript:;" class="btn submit">
                                <i class="icon-magnifier"></i>
                            </a>
                        </span>
                    </div>
                </form>
                <!-- END HEADER SEARCH BOX -->
                <!-- BEGIN TOP NAVIGATION MENU -->
                <div class="top-menu">
                    <ul class="nav navbar-nav pull-right">
                        <li class="separator hide"> </li>
                        
                        <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                        <li class="dropdown dropdown-user dropdown-dark">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <span class="username username-hide-on-mobile"> Nick </span>
                                <!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->
                                <img alt="" class="img-circle" src="../assets/layouts/layout4/img/avatar9.jpg" /> </a>
                        </li>
                        <!-- END USER LOGIN DROPDOWN -->
                        <!-- BEGIN QUICK SIDEBAR TOGGLER -->
                        <li class="dropdown dropdown-extended quick-sidebar-toggler">
                            <span class="sr-only">Toggle Quick Sidebar</span>
                            <i class="icon-logout"></i>
                        </li>
                        <!-- END QUICK SIDEBAR TOGGLER -->
                    </ul>
                </div>
                <!-- END TOP NAVIGATION MENU -->
            </div>
            <!-- END PAGE TOP -->
        </div>
        <!-- END HEADER INNER -->
    </div>
    <!-- BEGIN HEADER & CONTENT DIVIDER -->
    <div class="clearfix"> </div>
    <!-- END HEADER & CONTENT DIVIDER -->
    <!-- BEGIN CONTAINER -->
    <div class="page-container" >
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar-wrapper">
            <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
            <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
            <div class="page-sidebar navbar-collapse collapse" :class="{'in': toggler1}">
                <!-- BEGIN SIDEBAR MENU -->
                <ul class="page-sidebar-menu" :class="{'page-sidebar-menu-closed': toggler}" >
                    <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
                    <li class="nav-item start active open">
                        <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                        <div class="sidebar-toggler" >
                        </div>
                        <!-- END SIDEBAR TOGGLER BUTTON -->
                    </li>
                    <li class="nav-item" v-for="(i, m) in menus" :class="{'active': i == subMenu}">
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
        <div class="page-footer-inner"> 2016 &copy; Metronic Theme By
            <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
            <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
        </div>
        <div class="scroll-to-top">
            <i class="icon-arrow-up"></i>
        </div>
    </div>
    <!-- END FOOTER --> 
</div>  
</template>
<script>
    import EventListener from '../components/util/eventListener.js';
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
                    this.menuGo(sm.url);
                } else {
                    if (this.subMenu === i) {
                        this.subMenu = -1;
                    } else {
                        this.subMenu = i;
                    }
                    if (m.subMenu.length === 0) {
                        this.menuGo(m.url);
                    }
                }
            },
            menuGo (url) {
                if (url.includes('http') || url.includes('https')) {
                    window.location.href = url;
                } else {
                    this.$route.router.go({name: url});
                }
            },
            autoHegiht () {
                let contentHeight = this.$els.footer.offsetTop - this.$els.header.offsetHeight;
                this.$els.content.style.minHeight = contentHeight + 'px';
            }
        },
        transitions: {
            'fade': {
                enterClass: 'fadeIn',
                leaveClass: 'fadeOut'
            }
        },
        ready () {
            this.autoHegiht();
            this._resizeEvent = EventListener.listen(window, 'resize', (e) => {
                this.autoHegiht();
            });
        }
    };
</script>
<style lang="css">
    .header-img-width{
        width: 25px
    }
</style>
