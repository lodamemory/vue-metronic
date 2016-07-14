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
                <m-select :data="sData" :result.sync="sResult1" :size="'large'" :label="'超大下拉选择：'"></m-select>
                <m-select :data="sData" :result.sync="sResult2" :label="'正常下拉选择：'"></m-select>
                <m-select :data="sData" :result.sync="sResult3" :size="'small'" :label="'小型下拉选择：'"></m-select>
                <m-select :data="sData" :result.sync="sResult4" :size="'xsmall'" :label="'超小下拉选择：'"></m-select>
                <div>{{sResult1.code}} {{sResult1.name}}</div>
                <div>{{sResult2.code}} {{sResult2.name}}</div>
                <div>{{sResult3.code}} {{sResult3.name}}</div>
                <div>{{sResult4.code}} {{sResult4.name}}</div>
            </m-portlet>
        </div>
        
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/mPortlet';
    import mButton from '../components/mButton';
    import mSelect from '../components/mSelect';
    export default {
        components: { mPortlet, mSelect, mButton },
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
                sResult4: {}
            };
        }
    };
</script>