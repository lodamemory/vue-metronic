<template>
    <!-- BEGIN PAGE HEAD-->
    <div class="page-head">
        <!-- BEGIN PAGE TITLE -->
        <div class="page-title">
            <h1>{{title}}
                <small>{{smallTitle}}</small>
            </h1>
        </div>
        <!-- END PAGE TITLE -->
    </div>
    <!-- END PAGE HEAD-->

    <!-- BEGIN PAGE BREADCRUMB -->
    <ul class="page-breadcrumb breadcrumb">
        <li>
            <a href="index.html">Home</a>
            <i class="fa fa-circle"></i>
        </li>
        <li>
            <span class="active">UI Features</span>
        </li>
    </ul>
    <!-- BEGIN PAGE CONTENT-->
</template>
<script>
    export default {
        props: {
            'title': {
                type: String,
                default: 'default title'
            },
            'smallTitle': {
                type: String,
                default: 'default small title'
            }
        }
    };
</script>