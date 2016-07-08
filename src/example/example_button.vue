<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Button Page <small>example Button page</small>
    </h3>
    <div class="page-bar">
        <ul class="page-breadcrumb">
            <li>
                <i class="fa fa-home"></i>
                <a href="index.html">Home</a>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <a href="#">UI</a>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <a href="#">Example Button Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Button'" :color-type="5">
                <div class="clearfix">
                    <h4>btn color</h4>
                    <m-button :color-type="'primary'" @click="test">primary</m-button>
                    <m-button :color-type="'success'" @click="test">success</m-button>
                    <m-button :color-type="'info'" @click="test">info</m-button>
                    <m-button :color-type="'warning'" @click="test">warning</m-button>
                    <m-button :color-type="'danger'" @click="test">danger</m-button>
                    <m-button :color-type="'link'" @click="test">link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn color circle</h4>
                    <m-button :is-circle="true" :color-type="'primary'" @click="test">primary</m-button>
                    <m-button :is-circle="true" :color-type="'success'" @click="test">success</m-button>
                    <m-button :is-circle="true" :color-type="'info'" @click="test">info</m-button>
                    <m-button :is-circle="true" :color-type="'warning'" @click="test">warning</m-button>
                    <m-button :is-circle="true" :color-type="'danger'" @click="test">danger</m-button>
                    <m-button :is-circle="true" :color-type="'link'" @click="test">link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn size</h4>
                    <m-button :color-type="'primary'" :size="'lg'" @click="test">primary</m-button>
                    <m-button :color-type="'success'" :size="'sm'" @click="test">success</m-button>
                    <m-button :color-type="'info'" :size="'xs'" @click="test">info</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn size circle</h4>
                    <m-button :is-circle="true" :color-type="'primary'" :size="'lg'" @click="test">primary</m-button>
                    <m-button :is-circle="true" :color-type="'success'" :size="'sm'" @click="test">success</m-button>
                    <m-button :is-circle="true" :color-type="'info'" :size="'xs'" @click="test">info</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn disabled</h4>
                    <m-button :color-type="'primary'" @click="test" disabled>primary</m-button>
                    <m-button :color-type="'success'" @click="test" disabled>success</m-button>
                    <m-button :color-type="'info'" @click="test" disabled>info</m-button>
                    <m-button :color-type="'warning'" @click="test" disabled>warning</m-button>
                    <m-button :color-type="'danger'" @click="test" disabled>danger</m-button>
                    <m-button :color-type="'link'" @click="test" disabled>link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn disabled circle</h4>
                    <m-button :is-circle="true" :color-type="'primary'" @click="test" disabled>primary</m-button>
                    <m-button :is-circle="true" :color-type="'success'" @click="test" disabled>success</m-button>
                    <m-button :is-circle="true" :color-type="'info'" @click="test" disabled>info</m-button>
                    <m-button :is-circle="true" :color-type="'warning'" @click="test" disabled>warning</m-button>
                    <m-button :is-circle="true" :color-type="'danger'" @click="test" disabled>danger</m-button>
                    <m-button :is-circle="true" :color-type="'link'" @click="test" disabled>link</m-button>
                </div>
            </m-portlet>
        </div>
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mButton from '../components/mButton';
    import mPortlet from '../components/mPortlet';
    export default {
        components: { mButton, mPortlet },
        methods: {
            test () {
                window.console.log('success');
            }
        }
    };
</script>