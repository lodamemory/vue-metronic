<template>
    <div :class="{'icheck-list': !inline, 'icheck-inline': inline}">
        <label v-for="d in data" @mouseover="mouseover($event)" @mouseout="mouseout($event)" @click="chooseCheck(d)">
            <div class="icheckbox_minimal-grey" :class="{'checked': d.checked}" style="position: relative;" >
                <!-- <input type="checkbox" class="icheck" style="position: absolute; opacity: 0;"> -->
                <ins class="iCheck-helper"></ins>
            </div> {{d.name}}
        </label>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        props: {
            'data': {
                type: Array,
                default: []
            },
            'result': {
                type: Array,
                default: []
            },
            'inline': {
                type: Boolean,
                default: false
            }
        },
        created () {
            this.checkAppend(this.data);
        },
        watch: {
            'data': function (now, old) {
                this.checkAppend(now);
            }
        },
        methods: {
            mouseover (event) {
                event.currentTarget.classList.add('hover');
                event.currentTarget.children[0].classList.add('hover');
            },
            mouseout (event) {
                event.currentTarget.classList.remove('hover');
                event.currentTarget.children[0].classList.remove('hover');
            },
            chooseCheck (data) {
                data.checked = !data.checked;
                if (data.checked) {
                    this.result.push(data.code);
                } else {
                    this.result.splice(this.result.indexOf(data.code), 1);
                }
            },
            checkAppend (data) {
                for (var d of data) {
                    if (typeof d.checked === 'undefined') {
                        Vue.set(d, 'checked', false);
                    } else if (d.checked) {
                        if (this.result.indexOf(d.code) === -1) this.result.push(d.code);
                    }
                }
            }
        },
        data () {
            return {
                hover: false,
                checked: false
            };
        }
    };
</script>