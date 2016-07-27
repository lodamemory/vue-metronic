<template>
    <m-page-header :title="'Example Tree Page'" :small-title="'Example Tree Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'NomalTree'" :color-type="5">
                <m-Tree :tree-data="treeData" :callback="treeTest" :checkbox="false"></m-Tree>
                {{nomalResult.code}}
            </m-portlet>
            <m-portlet :title="'CheckBoxTree'" :color-type="4">
                <m-Tree :tree-data="treeData2" :callback="treeTest" :checkbox="true" :result.sync="result"></m-Tree>
                <div v-for="r in result">
                    {{r.code}}
                </div>
            </m-portlet>
        </div>
        
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mButton from '../components/button/mButton';
    import mTree from '../components/tree/mTree';
    export default {
        components: { mPageHeader, mPortlet, mTree, mButton },
        data () {
            return {
                treeData: [{
                    icon: '',
                    code: 'A',
                    name: 'A',
                    nodes: [
                        {icon: '', code: 'A1', name: 'A1',
                            nodes: [
                                {icon: '', code: 'AA1', name: 'AA1'},
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
                nomalResult: {},
                result: []
            };
        },
        methods: {
            treeTest (data) {
                this.nomalResult = data;
            }
        }
    };
</script>