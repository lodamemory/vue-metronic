<template>
    <div class="table-scrollable">
        <table class="table table-striped table-bordered table-hover table-checkable order-column">
            <thead>
                <tr>
                    <th class="strong" style="width: 66px;" v-if="checkColum">
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                            <input type="checkbox" class="group-checkable" :checked="allCheck" @click="checkAll"/>
                            <span></span>
                        </label>
                    </th>
                    <th v-for="c in colums">{{c.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd gradeX" v-for="td in tableData">
                    <td v-if="checkColum">
                        <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                            <input type="checkbox" class="checkboxes" :checked="td.checked" />
                            <span></span>
                        </label>
                    </td>
                    <td v-for="c in colums">
                        {{td[c.data]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
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
                default: true
            }
        },
        data () {
            return {
                'allCheck': false
            };
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
                }
            }
        }
    };
</script>