<template>
    <div class="portlet " :class="[{'box': type === 'box','light': type === 'light', 'portlet-fullscreen': fullscreen},colorClass]" v-show="pdelete">
        <div class="portlet-title">
            <div class="caption">
                <i :class="titleIcon"></i>{{title}}
            </div>
            <!-- <div class="actions">
                <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" @click="show = show? false: true">
                    <i class="fa fa-angle-down" v-if="show"></i>
                    <i class="fa fa-angle-up" v-if="!show"></i>
                </a>
                <a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;"></a>
                <a class="btn btn-circle btn-icon-only btn-default " href="javascript:;" @click="pdelete = false">
                    <i class="fa fa-close"></i>
                </a>
            </div> -->
            <div class="tools">
                <a href="javascript:;" :class="{'collapse': show, 'expand': !show}" @click="show = show? false: true">
                </a>
                <a href="javascript:;" class="fullscreen" :class="{'on': fullscreen}" @click="fullscreen = fullscreen? false: true">
                </a>
                <a href="javascript:;" class="remove" @click="pdelete = false">
                </a>
            </div>
        </div>
        <div class="portlet-body" :class="{'fullbody': fullscreen}" v-show="show" v-el:body>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            'title': {
                type: String,
                default: 'portlet'
            },
            'titleIcon': {
                type: String,
                default: 'icon-speech'
            },
            'colorType': {
                type: Number,
                default: 1
            },
            'type': {
                type: String,
                default: 'box'
            }
        },
        data () {
            return {
                colorClass: {
                    'blue': this.type !== 'light' && this.colorType === 1,
                    'green': this.type !== 'light' && this.colorType === 2,
                    'red': this.type !== 'light' && this.colorType === 3,
                    'yellow': this.type !== 'light' && this.colorType === 4,
                    'purple': this.type !== 'light' && this.colorType === 5,
                    'grey': this.type !== 'light' && this.colorType === 6
                },
                show: true,
                pdelete: true,
                fullscreen: false
            };
        }
    };
</script>
<style lang="css">
    .portlet .fullbody { height: 100% }
</style>