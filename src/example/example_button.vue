<template>
    <m-page-header :title="'Example Button Page'" :small-title="'Example Button Page'"></m-page-header>
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
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mButton from '../components/button/mButton';
    import mPortlet from '../components/portlet/mPortlet';
    export default {
        components: { mPageHeader, mButton, mPortlet },
        methods: {
            test () {
                window.console.log('success');
            }
        }
    };
</script>