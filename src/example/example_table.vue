<template>
    <m-page-header :title="'Example Table Page'" :small-title="'Example Table Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'NomalTable'" :color-type="5">
                <m-table :colums="colums" :table-data="tableData" :check-colum="true" :check-result.sync="checkResult" ></m-table>
                <m-page :total-count="totalCount" :now-page.sync="nowPage"></m-page>
                {{checkResult}}
            </m-portlet>
        </div>
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mButton from '../components/button/mButton';
    import mTable from '../components/table/mTable';
    import mPage from '../components/table/mPage';
    export default {
        components: { mPageHeader, mPortlet, mTable, mButton, mPage },
        data () {
            return {
                colums: [
                    { data: 'a1', title: 'A1', color: {'11': 'red', '111': 'blue', '1111': 'green'}, icon: {'11': 'icon-diamond', '111': 'icon-speech', '1111': 'icon-home'} },
                    { data: 'a2', title: 'A2' },
                    { data: 'a3', title: 'A3' },
                    { data: 'a4', title: 'A4', template: [ { type: 'label', 'class': 'label-warning', 'label': 'label' }, { type: 'a', 'label': '链接', 'callback': this.edit } ] },
                    { data: 'a5', title: 'A5', template: [ { type: 'button', 'class': 'red btn-outline', 'label': '修改', 'callback': this.edit } ] }
                ],
                tableData: [
                    { a1: '11', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '111', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '1111', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '11111', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '111111', a2: '2', a3: '3', a4: '4', a5: '5' }
                ],
                nowPage: 1,
                totalCount: 20,
                checkResult: []
            };
        },
        methods: {
            edit (data) {
                window.console.log(data);
            }
        },
        watch: {
            'nowPage': function (now, old) {
                if (now === 1) {
                    this.tableData = [
                        { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' }
                    ];
                }
                if (now === 2) {
                    this.tableData = [
                        { a1: '2', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '2', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '2', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '2', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '2', a2: '2', a3: '3', a4: '4', a5: '5' }
                    ];
                }
                if (now === 3) {
                    this.tableData = [
                        { a1: '3', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '3', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '3', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '3', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '3', a2: '2', a3: '3', a4: '4', a5: '5' }
                    ];
                }
                if (now === 4) {
                    this.tableData = [
                        { a1: '4', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '4', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '4', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '4', a2: '2', a3: '3', a4: '4', a5: '5' },
                        { a1: '4', a2: '2', a3: '3', a4: '4', a5: '5' }
                    ];
                }
            }
        }
    };
</script>