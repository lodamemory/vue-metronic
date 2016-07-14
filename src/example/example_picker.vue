<template>
    <!-- BEGIN PAGE HEADER-->
    <h3 class="page-title">
    Example Picker Page <small>example Picker page</small>
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
                <a href="#">Example Picker Page</a>
            </li>
        </ul>
    </div>
    <!-- END PAGE HEADER-->
    <!-- BEGIN PAGE CONTENT-->
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Picker'" :color-type="5">
                <m-datepicker :format="'yyyy-MM-dd'" :value.sync="dateValue" :clean-Button="true"></m-datepicker>
                <div>{{dateValue}}</div>
            </m-portlet>
        </div>
        
    </div>
    <!-- END PAGE CONTENT-->
</template>
<script>
    import mPortlet from '../components/mPortlet';
    import mDatepicker from '../components/mDatepicker';
    export default {
        components: { mPortlet, mDatepicker },
        data () {
            return {
                dateValue: ''
            };
        }
    };
</script>