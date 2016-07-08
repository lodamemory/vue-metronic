<template>
    <button type="button" class="btn" :class="btnClass"><slot>button</slot></button>
</template>
<script>
    export default {
        props: {
            isCircle: {
                default: false,
                type: Boolean
            },
            colorType: {
                default: 'primary',
                type: String
            },
            size: {
                type: String
            }
        },
        data () {
            return {
                btnClass: {
                    'btn-circle': this.isCircle,
                    'btn-primary': this.colorType === 'primary',
                    'btn-success': this.colorType === 'success',
                    'btn-info': this.colorType === 'info',
                    'btn-warning': this.colorType === 'warning',
                    'btn-danger': this.colorType === 'danger',
                    'btn-link': this.colorType === 'link',
                    'btn-lg': this.size === 'lg',
                    'btn-sm': this.size === 'sm',
                    'btn-xs': this.size === 'xs'
                }
            };
        }
    };
</script>
