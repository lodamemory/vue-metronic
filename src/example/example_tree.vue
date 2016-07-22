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
                <m-Tree :tree-data="treeData" :callback="treeTest" :checkbox="false"></m-Tree>
                <m-Tree :tree-data="treeData2" :callback="treeTest" :checkbox="true" :result.sync="result"></m-Tree>
                <div v-for="r in result">
                    {{r.code}}
                </div>
            </m-portlet>
        </div>
        
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/mPortlet';
    import mButton from '../components/mButton';
    import mTree from '../components/tree/mTree';
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
                        {icon: '', code: 'A1', name: 'A1',
                            nodes: [
                                {icon: '', code: 'AA1', name: 'AA1', checked: true},
                                {icon: '', code: 'AA2', name: 'AA2'}
                            ]
                        },
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
                }],
                treeData2: [{
                    icon: '',
                    code: 'A',
                    name: 'A',
                    nodes: [
                        {icon: '', code: 'A1', name: 'A1',
                            nodes: [
                                {icon: '', code: 'AA1', name: 'AA1', checked: true},
                                {icon: '', code: 'AA2', name: 'AA2'}
                            ]
                        },
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
                }],
                result: []
            };
        },
        methods: {
            treeTest (data) {
                // window.console.log(data);
            }
        }
    };
</script>