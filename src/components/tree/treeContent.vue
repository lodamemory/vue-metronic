<template>
    <ul :class="{'jstree-container-ul':type === 'root', 'jstree-children':type === 'child'}">
        <li class="jstree-node" :class="{'jstree-leaf':td.nodes? false: true,'jstree-open':td.nodes? true: false, 'jstree-last':treeData.length === $index + 1}" v-for="td in treeData" >
            <i class="jstree-icon jstree-ocl" @click.stop="treeToggle($event)"></i>
              <a class="jstree-anchor" :class="{'jstree-clicked': (!checkbox  && currentActive + $index === currentclick) || (checkbox && td.checked)}" href="javascript:;" @click="treeClick(td, $index, $event)" @mouseout="mouseout($event)" @mouseover="mouseover($event)">
                    <i class="jstree-icon jstree-checkbox" v-if="checkbox"></i>
                    <i class="jstree-icon jstree-themeicon fa jstree-themeicon-custom" :class="{'fa-file icon-state-info':td.nodes? false: true,'fa-folder icon-state-warning':td.nodes? true: false, 'icon-lg': type === 'root'}"></i>
                {{td.name}}
            </a>
            <item v-if="td.nodes && !checkbox" :tree-data="td.nodes" :type="'child'" :callback="callback" :current-active="currentActive + $index" :currentclick.sync="currentclick"></item>
            <item v-if="td.nodes && checkbox" :tree-data="td.nodes" :type="'child'" :callback="callback" :current-active="currentActive + $index" :currentclick="currentclick" :checkbox="true" :result.sync="result"></item>
        </li>
    </ul>
</template>
<script>
    export default {
        components: {
            item: (resolve) => { require(['./treeContent.vue'], resolve); }
        },
        props: {
            'treeData': {
                type: Array,
                default: []
            },
            'checkbox': {
                type: Boolean,
                default: false
            },
            'type': {
                type: String,
                default: 'root'
            },
            'callback': {
                type: Function,
                default () {}
            },
            'currentActive': {
                type: String,
                default: ''
            },
            'currentclick': {
                type: String,
                default: ''
            },
            'result': {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        methods: {
            treeToggle (event) {
                let target = event.currentTarget.parentElement;
                if (target.className.includes('jstree-open')) {
                    target.classList.remove('jstree-open');
                    target.classList.add('jstree-closed');
                } else if (target.className.includes('jstree-closed')) {
                    target.classList.remove('jstree-closed');
                    target.classList.add('jstree-open');
                }
            },
            treeClick (data, index, event) {
                if (this.checkbox) {
                    window.console.log(this.result);
                    if (data.checked) {
                        this.treeNodes(data, false);
                    } else {
                        this.treeNodes(data, true);
                        this.callback(data);
                    }
                } else {
                    this.currentclick = this.currentActive + index;
                    this.callback(data);
                }
            },
            treeNodes (data, checked) {
                if (typeof data === 'object' && isNaN(data.length)) {
                    this.changeNodes(data, checked);
                    if (data.nodes) this.treeNodes(data.nodes, checked);
                } else {
                    for (var d of data) {
                        this.changeNodes(d, checked);
                        if (d.nodes) this.treeNodes(d.nodes, checked);
                    }
                }
            },
            changeNodes (data, checked) {
                if (data.checked === checked) return;
                data.checked = checked;
                if (checked) {
                    this.result.push(data);
                } else {
                    var temp = [];
                    for (var r of this.result) {
                        if (r !== data) {
                            temp.push(r);
                        }
                    }
                    this.result = temp;
                }
            },
            mouseout (event) {
                event.currentTarget.classList.remove('jstree-hovered');
            },
            mouseover (event) {
                event.currentTarget.classList.add('jstree-hovered');
            }
        }
    };
</script>
