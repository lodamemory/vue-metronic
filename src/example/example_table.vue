<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Table Page <small>example Table page</small>
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
                <a href="#">Example Table Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'NomalTable'" :color-type="5">
                <m-table></m-table>
                <m-page></m-page>
            </m-portlet>
        </div>
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/portlet/mPortlet';
    import mButton from '../components/button/mButton';
    import mTable from '../components/table/mTable';
    import mPage from '../components/table/mPage';
    export default {
        components: { mPortlet, mTable, mButton, mPage },
        data () {
            return {
                TableData: []
            };
        }
    };
</script>