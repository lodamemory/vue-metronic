<template>
    <div id="tree_1" class="tree-demo jstree jstree-1 jstree-default" :class="{'jstree-checkbox-selection':checkbox}">
        <tree-content :tree-data="treeData" :callback="callback" :checkbox="checkbox" :result.sync="result"></tree-content>
    </div>
</template>
<script>
    import treeContent from './treeContent';
    import Vue from 'vue';
    export default {
        components: { treeContent },
        props: {
            'treeData': {
                type: Array,
                default: []
            },
            'callback': {
                type: Function,
                default () {}
            },
            'checkbox': {
                type: Boolean,
                default: false
            },
            'result': {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        created () {
            this.treeAppend(this.treeData);
        },
        watch: {
            'treeData': function (v, o) {
                this.treeAppend(v);
            }
        },
        methods: {
            treeAppend (data) {
                for (var d of data) {
                    if (typeof d.checked === 'undefined') {
                        Vue.set(d, 'checked', false);
                    } else if (d.checked) {
                        if (this.result.indexOf(d) === -1) this.result.push(d);
                    }
                    if (d.nodes) {
                        this.treeAppend(d.nodes);
                    }
                }
            }
        }
    };
</script>
