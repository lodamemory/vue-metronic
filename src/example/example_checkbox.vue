<template>
    <m-page-header :title="'Example Checkbox Page'" :small-title="'Example Checkbox Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Modal'" :color-type="5">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-md-3 control-label">竖排多选：</label>
                        <div class="col-md-9">
                            <m-checkbox :data="checkData" :result="checkResult"></m-checkbox>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">横排多选：</label>
                        <div class="col-md-9">
                            <m-checkbox :data="checkData" :result="checkResult" :inline="true"></m-checkbox>
                        </div>
                    </div>
                </form>
                {{checkResult}}
            </m-portlet>
        </div>
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mButton from '../components/button/mButton';
    import mCheckbox from '../components/checkbox/mCheckbox';
    export default {
        components: { mPageHeader, mPortlet, mButton, mCheckbox },
        data () {
            return {
                checkData: [{code: 'a', name: 'checkA'}, {code: 'b', name: 'checkB'}, {code: 'c', name: 'checkC'}, {code: 'd', name: 'checkD'}],
                checkResult: []
            };
        }
    };
</script>