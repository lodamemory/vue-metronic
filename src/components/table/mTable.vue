<template>
    <div class="table-scrollable">
        <table class="table table-striped table-bordered table-hover table-checkable order-column dataTable">
            <thead>
                <tr>
                    <th class="strong" style="width: 66px;" v-if="checkColum">
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                            <input type="checkbox" class="group-checkable" :checked="allCheck" @click="checkAll"/>
                            <span></span>
                        </label>
                    </th>
                    <th v-for="c in colums" :style="{ width: c.width + 'px' }">{{c.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd gradeX" v-for="td in tableData">
                    <td v-if="checkColum">
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                            <input type="checkbox" class="checkboxes" :checked="td.checked" @click="checkOne(td)"/>
                            <span></span>
                        </label>
                    </td>
                    <td v-for="c in colums">
                        <span v-if="c.template" v-for="t in c.template">
                            <m-button v-if="t.type === 'button'" :btn-class="t.class" :size="'xs'" @click="t.callback(td)">{{t.label}}</m-button>
                            <a v-if="t.type === 'a'" :class="t.class" :size="'xs'" @click="t.callback(td)">{{td[c.data]}}</a>
                            <span v-if="t.type === 'label'" class="label label-sm label-success" :class="t.class">{{td[c.data]}}</span>
                        </span>
                        <span v-if="!c.template">{{td[c.data]}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Vue from 'vue';
    import mButton from '../button/mButton';
    export default {
        components: { mButton },
        props: {
            'colums': {
                type: Array,
                required: true
            },
            'tableData': {
                type: Array
            },
            'checkColum': {
                type: Boolean,
                default: false
            },
            'checkResult': {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data () {
            return {
                'allCheck': false
            };
        },
        watch: {
            'tableData': function (val, old) {
                for (var td of val) {
                    if (typeof td.checked === 'undefined') {
                        Vue.set(td, 'checked', false);
                    }
                }
                this.allCheck = false;
            }
        },
        created () {
            for (var td of this.tableData) {
                if (typeof td.checked === 'undefined') {
                    Vue.set(td, 'checked', false);
                }
            }
        },
        methods: {
            checkAll () {
                this.allCheck = !this.allCheck;
                for (var td of this.tableData) {
                    td.checked = this.allCheck;
                    if (this.allCheck) {
                        this.checkResult.push(td);
                    } else {
                        this.checkResult.splice(this.checkResult.indexOf(td), 1);
                    };
                }
            },
            checkOne (data) {
                window.console.log(data.checked);
                data.checked = !data.checked;
                if (data.checked) {
                    this.checkResult.push(data);
                } else {
                    this.checkResult.splice(this.checkResult.indexOf(data), 1);
                }
            }
        }
    };
</script>