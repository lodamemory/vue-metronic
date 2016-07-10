<template>
    <div class="modal mshow animated" :class="modalClass" :transition="effect+'1'" v-show="show" >
        <div class="modal-dialog" :class="dialogClass">
            <div class="modal-content animated" :transition="effect+'2'" v-show="show">
                <div class="modal-header">
                    <button type="button" class="close" @click="close"></button>
                    <h4 class="modal-title">{{modalTitle}}</h4>
                </div>
                <div class="modal-body">
                     <slot>Modal body goes here</slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn default" @click="close">{{closeText}}</button>
                    <button type="button" class="btn blue" @click="callback">{{saveText}}</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>
<script>
    export default {
        props: {
            'show': {
                type: Boolean,
                default: false,
                required: true
            },
            'effect': {
                type: String,
                default: 'fade'
            },
            'modalSize': {
                type: String,
                default: ''
            },
            'modalTitle': {
                type: String,
                default: 'Modal Title'
            },
            'closeText': {
                type: String,
                default: 'close'
            },
            'saveText': {
                type: String,
                default: 'save'
            },
            'callback': {
                type: Function,
                default () {}
            }
        },
        data () {
            return {
                modalClass: {
                    'bs-modal-lg': this.modalSize === 'lg',
                    'bs-modal-sm': this.modalSize === 'sm'
                },
                dialogClass: {
                    'modal-full': this.modalSize === 'full',
                    'modal-lg': this.modalSize === 'lg',
                    'modal-sm': this.modalSize === 'sm'
                }
            };
        },
        methods: {
            close () {
                this.show = false;
            }
        },
        watch: {
            'show': function (v, o) {
                if (v) {
                    this.$el.classList.add('in');
                } else {
                    this.$el.classList.remove('in');
                }
            }
        },
        transitions: {
            'fade1': {
                leaveClass: 'fadeOut'
            },
            'fade2': {
                enterClass: 'fadeIn'
            },
            'zoom1': {
                leaveClass: 'zoomOut'
            },
            'zoom2': {
                enterClass: 'zoomIn'
            }
        }
    };
</script>
<style lang="css">
    .modal.in {
        background-color: rgba(0,0,0,0.5);
    }
    .modal.mshow {
        display: block;
    }
</style>