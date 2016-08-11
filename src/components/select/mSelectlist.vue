<template>
<div class="ms-container">
    <div class="ms-selectable">
        <ul class="ms-list" tabindex="-1">
            <li class="ms-elem-selectable " @mouseover="mouseover($event)" @mouseout="mouseout($event)" v-for="d in sData" @click="selectClick(d, true)">
                <span>{{d.name}}</span>
            <li>
        </ul>
    </div>
    <div class="ms-selection">
        <ul class="ms-list" tabindex="-1">
            <li class="ms-elem-selection" @mouseover="mouseover($event)" @mouseout="mouseout($event)" v-for="r in result" @click="selectClick(r, false)">
                <span>{{r.name}}</span>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
    export default {
        props: {
            'data': {
                type: Array,
                default: []
            },
            'result': {
                type: Array,
                default: []
            }
        },
        created () {
            this.copyData(this.data);
        },
        watch: {
            'data': function (now, old) {
                this.copyData(now);
            }
        },
        methods: {
            selectClick (data, type) {
                if (type) {
                    this.result.push(data);
                    this.sData.splice(this.sData.indexOf(data), 1);
                } else {
                    this.sData.push(data);
                    this.result.splice(this.result.indexOf(data), 1);
                }
            },
            mouseover (event) {
                event.currentTarget.classList.add('ms-hover');
            },
            mouseout (event) {
                event.currentTarget.classList.remove('ms-hover');
            },
            copyData (data) {
                for (var i in data) {
                    this.sData.push(data[i]);
                }
            }
        },
        data () {
            return {
                sData: []
            };
        }
    };
</script>
