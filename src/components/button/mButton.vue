<template>
    <button type="button" class="btn" :class="[btnClass, sizeClass, {'btn-circle': isCircle}]"><i v-if="icon !== ''" :class="[icon]"></i><slot></slot></button>
</template>
<script>
    export default {
        props: {
            'isCircle': {
                default: false,
                type: Boolean
            },
            'btnClass': {
                default: 'btn-primary',
                type: String
            },
            'size': {
                type: String
            },
            'icon': {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                sizeClass: {
                    'btn-lg': this.size === 'lg',
                    'btn-sm': this.size === 'sm',
                    'btn-xs': this.size === 'xs'
                }
            };
        }
    };
</script>
