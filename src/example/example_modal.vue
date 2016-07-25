<template>
    <m-page-header :title="'Example Modal Page'" :small-title="'Example Modal Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Modal'" :color-type="5">
                <m-modal :show.sync="basic" :callback="modalTest">basic modal</m-modal>
                <m-button :btn-class="'blue-hoki btn-outline'" @click="basicOpen">basic modal open</m-button>
                <m-modal :show.sync="basicZoom" :effect="'zoom'" :callback="modalTest">basic modal</m-modal>
                <m-button :btn-class="'blue-hoki btn-outline'" @click="basicZoomOpen">basic modal zoom open</m-button>
                <m-modal :show.sync="full" :effect="'zoom'" :modal-size="'full'" :callback="modalTest">full modal</m-modal>
                <m-button :btn-class="'blue-hoki btn-outline'" @click="fullOpen">full modal open</m-button>
                <m-modal :show.sync="lg" :effect="'zoom'" :modal-size="'lg'" :callback="modalTest">large modal</m-modal>
                <m-button :btn-class="'blue-hoki btn-outline'" @click="lgOpen">large modal open</m-button>
                <m-modal :show.sync="sm" :effect="'zoom'" :modal-size="'sm'" :callback="modalTest">small modal</m-modal>
                <m-button :btn-class="'blue-hoki btn-outline'" @click="smOpen">small modal open</m-button>
            </m-portlet>
        </div>
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mModal from '../components/modal/mModal';
    import mButton from '../components/button/mButton';
    export default {
        components: { mPageHeader, mPortlet, mModal, mButton },
        data () {
            return {
                basic: false,
                basicZoom: false,
                full: false,
                lg: false,
                sm: false
            };
        },
        methods: {
            basicOpen () {
                this.basic = true;
            },
            basicZoomOpen () {
                this.basicZoom = true;
            },
            fullOpen () {
                this.full = true;
            },
            lgOpen () {
                this.lg = true;
            },
            smOpen () {
                this.sm = true;
            },
            modalTest () {
                this.mShow = false;
            }
        }
    };
</script>