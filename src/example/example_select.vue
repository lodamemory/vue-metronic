<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Select Page <small>example Select page</small>
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
                <a href="#">Example Select Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Select'" :color-type="5">
                <m-select :data="sData" :result.sync="sResult1" :size="'large'" :label="'医疗机构：'"></m-select>
                <m-select :data="sData" :result.sync="sResult2"></m-select>
                <m-select :data="sData" :result.sync="sResult1" :size="'small'" :label="'医疗机构：'"></m-select>
                <m-select :data="sData" :result.sync="sResult2" :size="'xsmall'"></m-select>
                <m-datepicker :format="'yyyy-MM-dd'" :value.sync="dateValue"></m-datepicker>
                <div>{{sResult1.code}} {{sResult1.name}}</div>
                <div>{{sResult2.code}} {{sResult2.name}}</div>
                <div>{{dateValue}}</div>
            </m-portlet>
        </div>
        
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/mPortlet';
    import mButton from '../components/mButton';
    import mSelect from '../components/mSelect';
    import mDatepicker from '../components/mDatepicker';
    export default {
        components: { mPortlet, mSelect, mButton, mDatepicker },
        data () {
            return {
                aShow: false,
                sData: [
                    {'code': 1, 'name': '我是哈哈哈'},
                    {'code': 2, 'name': '我是呵呵呵'},
                    {'code': 3, 'name': '我是嘻嘻嘻'},
                    {'code': 4, 'name': '我是哦哦哦'}
                ],
                sResult1: {},
                sResult2: {},
                dateValue: ''
            };
        }
    };
</script>