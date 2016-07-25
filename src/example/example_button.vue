<template>
    <m-page-header :title="'Example Button Page'" :small-title="'Example Button Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Button'" :color-type="4">
                <div class="clearfix">
                    <h4>btn color</h4>
                    <m-button :btn-class="'btn-primary'" @click="test">primary</m-button>
                    <m-button :btn-class="'btn-success'" @click="test">success</m-button>
                    <m-button :btn-class="'btn-info'" @click="test">info</m-button>
                    <m-button :btn-class="'btn-warning'" @click="test">warning</m-button>
                    <m-button :btn-class="'btn-danger'" @click="test">danger</m-button>
                    <m-button :btn-class="'btn-link'" @click="test">link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn color circle</h4>
                    <m-button :is-circle="true" :btn-class="'btn-primary'" @click="test">primary</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-success'" @click="test">success</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-info'" @click="test">info</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-warning'" @click="test">warning</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-danger'" @click="test">danger</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-link'" @click="test">link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn size</h4>
                    <m-button :btn-class="'btn-primary'" :size="'lg'" @click="test">primary</m-button>
                    <m-button :btn-class="'btn-success'" :size="'sm'" @click="test">success</m-button>
                    <m-button :btn-class="'btn-info'" :size="'xs'" @click="test">info</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn size circle</h4>
                    <m-button :is-circle="true" :btn-class="'btn-primary'" :size="'lg'" @click="test">primary</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-success'" :size="'sm'" @click="test">success</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-info'" :size="'xs'" @click="test">info</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn disabled</h4>
                    <m-button :btn-class="'btn-primary'" @click="test" disabled>primary</m-button>
                    <m-button :btn-class="'btn-success'" @click="test" disabled>success</m-button>
                    <m-button :btn-class="'btn-info'" @click="test" disabled>info</m-button>
                    <m-button :btn-class="'btn-warning'" @click="test" disabled>warning</m-button>
                    <m-button :btn-class="'btn-danger'" @click="test" disabled>danger</m-button>
                    <m-button :btn-class="'btn-link'" @click="test" disabled>link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn disabled circle</h4>
                    <m-button :is-circle="true" :btn-class="'btn-primary'" @click="test" disabled>primary</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-success'" @click="test" disabled>success</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-info'" @click="test" disabled>info</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-warning'" @click="test" disabled>warning</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-danger'" @click="test" disabled>danger</m-button>
                    <m-button :is-circle="true" :btn-class="'btn-link'" @click="test" disabled>link</m-button>
                </div>
                <div class="clearfix">
                    <h4>btn icon</h4>
                    <m-button :btn-class="'btn-primary'" :icon="'icon-user'" @click="test">用户</m-button>
                    <m-button :btn-class="'btn-success'" :icon="'glyphicon glyphicon-remove'" @click="test">删除</m-button>
                    <m-button :btn-class="'btn-info'" :icon="'glyphicon glyphicon-plus'" @click="test">增加</m-button>
                </div>
            </m-portlet>
            <m-portlet :title="'Button API'" :color-type="4">
                <h4>用法：</h4>
                <p>&lt;m-button :btn-class="'btn-primary'" :icon="'icon-user'" :is-circle="true" &gt;用户&lt;/m-button&gt;</p>
                <m-table :colums="colums" :table-data="tableData"></m-table>
            </m-portlet>
        </div>
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mButton from '../components/button/mButton';
    import mPortlet from '../components/portlet/mPortlet';
    import mTable from '../components/table/mTable';
    export default {
        components: { mPageHeader, mButton, mPortlet, mTable },
        methods: {
            test () {
                window.console.log('btn-success');
            }
        },
        data () {
            return {
                colums: [
                    { data: 'name', title: '参数' },
                    { data: 'type', title: '类型' },
                    { data: 'choosen', title: '可选值' },
                    { data: 'default', title: '默认值' },
                    { data: 'require', title: '是否必须' },
                    { data: 'remark', title: '备注' }
                ],
                tableData: [
                    { name: 'btn-class', type: 'String', choosen: '无', default: 'btn-primary', require: 'false', remark: '' },
                    { name: 'is-circle', type: 'Boolean', choosen: 'true-圆 false-方', default: 'false', require: 'false', remark: '' },
                    { name: 'size', type: 'String', choosen: 'lg-大 sm-小 xs-超小', default: '无', require: 'false', remark: '' },
                    { name: 'icon', type: 'String', choosen: '无', default: '无', require: 'false', remark: '参考Font icon下样式' }
                ]
            };
        }
    };
</script>
