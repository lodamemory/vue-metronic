<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Tree Page <small>example Tree page</small>
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
                <a href="#">Example Tree Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Tree'" :color-type="5">
                <m-Tree :tree-data="treeData"></m-Tree>
                <!-- <m-table></m-table>
                <m-page></m-page> -->
            </m-portlet>
        </div>
        
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/mPortlet';
    import mButton from '../components/mButton';
    import mTree from '../components/mTree';
    import mPage from '../components/mPagination';
    import mTable from '../components/mTable';
    export default {
        components: { mPortlet, mTree, mButton, mPage, mTable },
        data () {
            return {
                treeData: [{
                    icon: '',
                    code: 'A',
                    name: 'A',
                    nodes: [
                        {icon: '', code: 'A1', name: 'A1'},
                        {icon: '', code: 'A2', name: 'A2'}
                    ]
                }, {
                    icon: '',
                    code: 'B',
                    name: 'B',
                    nodes: [
                        {icon: '', code: 'B1', name: 'B1'},
                        {icon: '', code: 'B2', name: 'B2'}
                    ]
                }]
            };
        }
    };
</script>