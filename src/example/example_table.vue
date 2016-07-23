<template>
    <m-page-header :title="'Example Table Page'" :small-title="'Example Table Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'NomalTable'" :color-type="5">
                <m-table></m-table>
                <m-page></m-page>
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
                TableData: []
            };
        }
    };
</script>