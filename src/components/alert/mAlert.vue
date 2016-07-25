<template>
    <div id="toast-container" class="animated" :class="{
                    'toast-top-right': position === 'topRight',
                    'toast-top-left': position === 'topLeft',
                    'toast-top-center': position === 'topCenter',
                    'toast-top-full-width': position === 'topFullWidth',
                    'toast-bottom-right': position === 'bottomRight',
                    'toast-bottom-left': position === 'bottomLeft',
                    'toast-bottom-center': position === 'bottomCenter',
                    'toast-bottom-full-width': position === 'bottomFullWidth'
                }" v-show="show" :transition="effect">
    	<div class="toast" :class="{
                    'toast-success': colorType === 'success',
                    'toast-info': colorType === 'info',
                    'toast-warning': colorType === 'warning',
                    'toast-error': colorType === 'error'
                }">
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
                window.console.log(this.toastClass);
                if (v) {
                    setTimeout(function () {
                        self.show = false;
                    }, 2000);
                }
            }
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