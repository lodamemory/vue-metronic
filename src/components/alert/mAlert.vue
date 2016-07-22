<template>
    <div id="toast-container" class="animated" :class="toastClass" v-show="show" :transition="effect">
    	<div class="toast" :class="colorClass">
    		<button class="toast-close-button" @click="close">×</button>
    		<div class="toast-title">{{title}}</div>
    		<div class="toast-message">{{message}}</div>
    	</div>
    </div>
</template>
<script>
    export default {
        props: {
            'position': {
                type: String,
                default: 'topRight'
            },
            'colorType': {
                type: String,
                default: 'success'
            },
            'show': {
                type: Boolean,
                default: false,
                required: true
            },
            'effect': {
                type: String,
                default: 'fade'
            },
            'title': {
                type: String,
                default: '提示'
            },
            'message': {
                type: String,
                default: '成功！'
            }
        },
        methods: {
            close () {
                this.show = false;
            }
        },
        watch: {
            'show': function (v, o) {
                let self = this;
                window.console.log(this.colorType);
                if (v) {
                    setTimeout(function () {
                        self.show = false;
                    }, 2000);
                }
            }
        },
        data () {
            return {
                toastClass: {
                    'toast-top-right': this.position === 'topRight',
                    'toast-top-left': this.position === 'topLeft',
                    'toast-top-center': this.position === 'topCenter',
                    'toast-top-full-width': this.position === 'topFullWidth',
                    'toast-bottom-right': this.position === 'bottomRight',
                    'toast-bottom-left': this.position === 'bottomLeft',
                    'toast-bottom-center': this.position === 'bottomCenter',
                    'toast-bottom-full-width': this.position === 'bottomFullWidth'
                },
                colorClass: {
                    'toast-success': this.colorType === 'success',
                    'toast-info': this.colorType === 'info',
                    'toast-warning': this.colorType === 'warning',
                    'toast-error': this.colorType === 'error'
                }
            };
        },
        transitions: {
            'fade': {
                enterClass: 'fadeIn',
                leaveClass: 'fadeOut'
            },
            'zoom': {
                enterClass: 'zoomIn',
                leaveClass: 'zoomOut'
            },
            'slide': {
                enterClass: 'slideInRight',
                leaveClass: 'slideOutRight'
            }
        }
    };
</script>