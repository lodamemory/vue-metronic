<template>
    <span class="select2 select2-container select2-container--bootstrap select2-container--below" :class="[selectClass, {'select2-container--focus': active, 'select2-container--open': open}]" v-el:container>
        <span class="selection">
        <span class="select2-selection select2-selection--multiple" @click.stop="openSelect">
            <ul class="select2-selection__rendered">
                <li class="select2-selection__choice" v-for="r in result" title="{{r.name}}">
                    <span class="select2-selection__choice__remove" @click.stop="deleteValue(r)">×</span>{{r.name}}
                </li>
                <!-- <li class="select2-search select2-search--inline">
                    <input class="select2-search__field" type="search" tabindex="0">
                </li> -->
            </ul>
        </span>
    </span>
    <span class="select2-container select2-container--bootstrap select2-container--open s-show" v-show="open" v-el:drop>
        <span class="select2-dropdown select2-dropdown--below">
            <span class="select2-results">
            <ul class="select2-results__options" v-el:ul>
                <li class="select2-results__option" aria-selected="false" v-for="d in data" @mouseover="mouseover($event)" @mouseout="mouseout($event)" @click.stop="valueSelect(d)">
                    {{d.name}}
                </li>
            </ul>
            </span>
        </span>
    </span>
</template>
<script>
    import EventListener from '../util/eventListener';
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
            'size': {
                type: String,
                default: 'large'
            }
        },
        data () {
            return {
                open: false,
                active: false,
                close: false,
                selectClass: {
                    'input-xlarge': this.size === 'xlarge',
                    'input-large': this.size === 'large',
                    'input-medium': this.size === 'medium',
                    'input-small': this.size === 'small',
                    'input-xsmall': this.size === 'xsmall'
                }
            };
        },
        ready () {
            this._closeEvent = EventListener.listen(window, 'click', (e) => {
                if (!this.$el.contains(e.target)) {
                    this.open = false;
                    this.active = false;
                }
            });
        },
        beforeDestroy () {
            this._closeEvent.remove();
        },
        methods: {
            openSelect () {
                if (this.open) {
                    this.open = false;
                } else {
                    this.open = true;
                    this.active = true;
                    this.filterStr = '';
                    this.$els.drop.style.width = this.$els.container.offsetWidth + 'px';
                    for (var index in this.data) {
                        this.$els.ul.children[index].attributes[1].value = false;
                        for (var r in this.result) {
                            if (this.data[index].code === this.result[r].code) {
                                this.$els.ul.children[index].attributes[1].value = true;
                                break;
                            }
                        }
                    }
                }
            },
            valueSelect (data) {
                let flag = true;
                for (var index in this.result) {
                    if (data.code === this.result[index].code) {
                        flag = false;
                        break;
                    }
                }
                if (flag) this.result.push(data);
                this.close = true;
                this.open = false;
            },
            deleteValue (data) {
                this.result.splice(this.result.indexOf(data), 1);
            },
            mouseover (event) {
                event.currentTarget.classList.add('select2-results__option--highlighted');
            },
            mouseout (event) {
                event.currentTarget.classList.remove('select2-results__option--highlighted');
            }
        }
    };
</script>
<style lang="css">
    .select2-container.s-show {display: block;}
</style>