<template>
    <m-page-header :title="'Example Alert Page'" :small-title="'Example Alert Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Alert'" :color-type="5">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-md-3 control-label">方位：</label>
                        <div class="col-md-9">
                            <m-select :data="positionData" :result.sync="position"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">颜色：</label>
                        <div class="col-md-9">
                            <m-select :data="colorTypeData" :result.sync="colorType"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">动画：</label>
                        <div class="col-md-9">
                            <m-select :data="effectData" :result.sync="effect"></m-select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label"></label>
                        <div class="col-md-9">
                            <m-button :btn-class="'blue-hoki btn-outline'" @click="aShow = true">basic alert</m-button>
                        </div>
                    </div>
                </form>
            </m-portlet>
            <m-portlet :title="'Alert API'">
                <div >
                    <h4>用法：</h4>
                    <p>&lt;m-alert :position="'topRight'" :color-type="'error'" :title="'哈哈哈'" :show.sync="aShow" :effect="'slide'"&gt;&lt;/m-alert&gt;</p>
                    <m-table :colums="colums" :table-data="tableData"></m-table>
                </div>
            </m-portlet>
        </div>
    </div>
    <m-alert :position="position.code" :color-type="colorType.code" :title="'哈哈哈'" :show.sync="aShow" :effect="effect.code"></m-alert>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mAlert from '../components/alert/mAlert';
    import mButton from '../components/button/mButton';
    import mTable from '../components/table/mTable';
    import mSelect from '../components/select/mSelect';
    export default {
        components: { mPageHeader, mPortlet, mAlert, mButton, mTable, mSelect },
        data () {
            return {
                aShow: false,
                position: {},
                colorType: {},
                effect: {},
                positionData: [
                    {'code': 'topRight', 'name': 'topRight'},
                    {'code': 'topLeft', 'name': 'topLeft'},
                    {'code': 'topCenter', 'name': 'topCenter'},
                    {'code': 'topFullWidth', 'name': 'topFullWidth'},
                    {'code': 'bottomRight', 'name': 'bottomRight'},
                    {'code': 'bottomLeft', 'name': 'bottomLeft'},
                    {'code': 'bottomCenter', 'name': 'bottomCenter'},
                    {'code': 'bottomFullWidth', 'name': 'bottomFullWidth'}
                ],
                colorTypeData: [
                    {'code': 'success', 'name': 'success'},
                    {'code': 'info', 'name': 'info'},
                    {'code': 'warning', 'name': 'warning'},
                    {'code': 'error', 'name': 'error'}
                ],
                effectData: [
                    {'code': 'fade', 'name': 'fade'},
                    {'code': 'zoom', 'name': 'zoom'},
                    {'code': 'slide', 'name': 'slide'}
                ],
                colums: [
                    { data: 'name', title: '参数' },
                    { data: 'type', title: '类型' },
                    { data: 'choosen', title: '可选值', width: '300' },
                    { data: 'default', title: '默认值' },
                    { data: 'require', title: '是否必须' },
                    { data: 'remark', title: '备注' }
                ],
                tableData: [
                    { name: 'position', type: 'String', choosen: '1.topRight 2.topLeft 3.topCenter 4.topFullWidth 5.bottomRight 6.bottomLeft 7.bottomCenter 8.bottomFullWidth', default: 'topRight', require: 'false', remark: '' },
                    { name: 'color-type', type: 'String', choosen: '1.success 2.info 3.warning 4.error', default: 'success', require: 'false', remark: '' },
                    { name: 'show', type: 'Boolean', choosen: 'true false', default: 'false', require: 'true', remark: '' },
                    { name: 'effect', type: 'String', choosen: '1.fade 2.zoom 3.slide', default: 'fade', require: 'false', remark: '滑动动画' },
                    { name: 'title', type: 'String', choosen: '无', default: '提示', require: 'false', remark: '' },
                    { name: 'message', type: 'String', choosen: '无', default: '成功！', require: 'false', remark: '' }
                ]
            };
        }
    };
</script>