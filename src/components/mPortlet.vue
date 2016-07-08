<template>
    <div class="portlet box" :class="colorClass" v-show="pdelete">
        <div class="portlet-title">
            <div class="caption">
                <i class="fa fa-gift"></i>{{title}}
            </div>
            <div class="tools">
                <a href="javascript:;" class="collapse" @click="show = show? false: true">
                </a>
                <a href="javascript:;" class="remove" @click="pdelete = false">
                </a>
            </div>
        </div>
        <div class="portlet-body animated" v-show="show" transition="fade">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'title', 'colorType'
        ],
        data () {
            return {
                colorClass: {
                    'blue': this.colorType === 1,
                    'green': this.colorType === 2,
                    'red': this.colorType === 3,
                    'yellow': this.colorType === 4,
                    'purple': this.colorType === 5,
                    'grey': this.colorType === 6
                },
                show: true,
                pdelete: true
            };
        },
        transitions: {
            'fade': {
                enterClass: 'fadeIn',
                leaveClass: 'fadeOut'
            }
        }
    };
</script>