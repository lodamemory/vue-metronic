<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Modal Page <small>example Modal page</small>
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
                <a href="#">Example Modal Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Modal'" :color-type="5">
                <m-modal :show.sync="basic" :callback="modalTest">basic modal</m-modal>
                <m-button :color-type="'primary'" @click="basicOpen">basic modal open</m-button>
                <m-modal :show.sync="basicZoom" :effect="'zoom'" :callback="modalTest">basic modal</m-modal>
                <m-button :color-type="'primary'" @click="basicZoomOpen">basic modal zoom open</m-button>
                <m-modal :show.sync="full" :effect="'zoom'" :modal-size="'full'" :callback="modalTest">full modal</m-modal>
                <m-button :color-type="'primary'" @click="fullOpen">full modal open</m-button>
                <m-modal :show.sync="lg" :effect="'zoom'" :modal-size="'lg'" :callback="modalTest">large modal</m-modal>
                <m-button :color-type="'primary'" @click="lgOpen">large modal open</m-button>
                <m-modal :show.sync="sm" :effect="'zoom'" :modal-size="'sm'" :callback="modalTest">small modal</m-modal>
                <m-button :color-type="'primary'" @click="smOpen">small modal open</m-button>
            </m-portlet>
        </div>
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/portlet/mPortlet';
    import mModal from '../components/modal/mModal';
    import mButton from '../components/button/mButton';
    export default {
        components: { mPortlet, mModal, mButton },
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