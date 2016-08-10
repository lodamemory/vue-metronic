<template>
    <m-page-header :title="'Example Portlet Page'" :small-title="'Example Portlet Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Portlet'" :color-type="1">
                <h1>容器</h1>
            </m-portlet>
            <m-portlet :title="'Portlet'" :color-type="2">
                <h1>容器</h1>
            </m-portlet>
            <m-portlet :title="'Portlet'" :color-type="3">
                <h1>容器</h1>
            </m-portlet>
            <m-portlet :title="'Portlet'" :color-type="4">
                <h1>容器</h1>
            </m-portlet>
            <m-portlet :title="'Portlet'" :color-type="5">
                <h1>容器</h1>
            </m-portlet>
            <m-portlet :title="'Portlet'" :color-type="6">
                <h1>容器</h1>
            </m-portlet>
            <m-portlet :title="'Portlet'" :type="'light'">
                <h1>容器</h1>
            </m-portlet>
        </div>
    </div>
    <m-alert :position="position.code" :color-type="colorType.code" :title="'哈哈哈'" :show.sync="aShow" :effect="effect.code"></m-alert>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    export default {
        components: { mPageHeader, mPortlet }
    };
</script>