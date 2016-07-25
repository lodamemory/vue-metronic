<template>
    <m-page-header :title="'Example Table Page'" :small-title="'Example Table Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'NomalTable'" :color-type="5">
                <m-table :colums="colums" :table-data="tableData" :check-colum="true"></m-table>
                <m-page :total-count="totalCount" :now-page.sync="nowPage"></m-page>
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
                    { data: 'a1', title: 'A1', template: '<button class="btn btn-primary" v-text="td.a1"></button>' },
                    { data: 'a2', title: 'A2' },
                    { data: 'a3', title: 'A3' },
                    { data: 'a4', title: 'A4' },
                    { data: 'a5', title: 'A5' }
                ],
                tableData: [
                    { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' },
                    { a1: '1', a2: '2', a3: '3', a4: '4', a5: '5' }
                ],
                nowPage: 1,
                totalCount: 20
            };
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