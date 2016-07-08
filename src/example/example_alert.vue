<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Alert Page <small>example Alert page</small>
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
                <a href="#">Example Alert Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Alert'" :color-type="5">
            </m-portlet>
        </div>
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/mPortlet';
    export default {
        components: { mPortlet }
    };
</script>