<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Alert Page <small>example Alert page</small>
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
                <a href="#">Example Alert Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Alert'" :color-type="5">
                <m-alert :position="'topRight'" :color-type="'error'" :title="'哈哈哈'" :show.sync="aShow" :effect="'slide'"></m-alert>
                <m-button :color-type="'primary'" @click="aShow = true">basic alert</m-button>
                <div class="well" style="margin-top:10px">
                    <h4>用法：</h4>
                    <p>&lt;m-alert :position="'topRight'" :color-type="'error'" :title="'哈哈哈'" :show.sync="aShow" :effect="'slide'"&gt;&lt;/m-alert&gt;</p>
                    <h4>参数：</h4>
                    <p>position(出现方位)：
                    1.topRight
                    2.topLeft
                    3.topCenter
                    4.topFullWidth
                    5.bottomRight
                    6.bottomLeft
                    7.bottomCenter
                    8.bottomFullWidth</p>
                    <p>color-type(颜色类型)：
                    1.success
                    2.info
                    3.warning
                    4.error</p>
                    <p>show(显示)(必要)：false</p>
                    <p>effect(动画)：1.fade 2.zoom 3.slide</p>
                    <p>title(主题)：文字</p>
                    <p>message(信息)：文字</p>
                </div>
            </m-portlet>
        </div>
        
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/portlet/mPortlet';
    import mAlert from '../components/alert/mAlert';
    import mButton from '../components/button/mButton';
    export default {
        components: { mPortlet, mAlert, mButton },
        data () {
            return {
                aShow: false
            };
        }
    };
</script>