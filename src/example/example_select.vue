<template>
    <m-page-header :title="'Example Select Page'" :small-title="'Example Select Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Select'" :color-type="5">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-md-3 control-label">单选框</label>
                        <div class="col-md-9">
                            <m-select :data="sData" :result.sync="sResult1" :size="'large'" :label="'超大下拉选择：'"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">单选框</label>
                        <div class="col-md-9">
                            <m-select :data="sData" :result.sync="sResult2" :label="'正常下拉选择：'"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">单选框</label>
                        <div class="col-md-9">
                            <m-select :data="sData" :result.sync="sResult3" :size="'small'" :label="'小型下拉选择：'"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">单选框</label>
                        <div class="col-md-9">
                            <m-select :data="sData" :result.sync="sResult4" :size="'xsmall'" :label="'超小下拉选择：'"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">多选框</label>
                        <div class="col-md-9">
                            <m-multi-select :data="sData" :result.sync="sResult5"></m-multi-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">多选列表框</label>
                        <div class="col-md-9">
                            <m-selectlist :data="sData" :result.sync="sResult6"></m-selectlist>
                        </div>
                    </div>
                </form>
                <div>{{sResult1.code}} {{sResult1.name}}</div>
                <div>{{sResult2.code}} {{sResult2.name}}</div>
                <div>{{sResult3.code}} {{sResult3.name}}</div>
                <div>{{sResult4.code}} {{sResult4.name}}</div>
                <div>{{sResult5}}</div>
                <div>{{sResult6}}</div>
            </m-portlet>
        </div>
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mButton from '../components/button/mButton';
    import mSelect from '../components/select/mSelect';
    import mMultiSelect from '../components/select/mMultiSelect';
    import mSelectlist from '../components/select/mSelectlist';
    export default {
        components: { mPageHeader, mPortlet, mSelect, mButton, mMultiSelect, mSelectlist },
        data () {
            return {
                sData: [
                    {'code': 1, 'name': '我是哈哈哈'},
                    {'code': 2, 'name': '我是呵呵呵'},
                    {'code': 3, 'name': '我是嘻嘻嘻'},
                    {'code': 4, 'name': '我是哦哦哦'}
                ],
                sResult1: {},
                sResult2: {},
                sResult3: {},
                sResult4: {},
                sResult5: [],
                sResult6: []
            };
        }
    };
</script>