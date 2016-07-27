<template>
<span>
    <span class="select2 select2-container select2-container--bootstrap select2-container--below " :class="[selectClass, {'select2-container--focus': active, 'select2-container--open': open}]" v-el:container>
        <span class="selection">
            <span class="select2-selection select2-selection--single" @click.stop="openSelect">
                <span class="select2-selection__rendered" title="{{selectName}}">{{selectName}}</span>
                <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
            </span>
        </span>
        <span class="dropdown-wrapper"></span>
    </span>
    <span class="select2-container select2-container--bootstrap select2-container--open s-show" v-show="open" v-el:drop>
        <span class="select2-dropdown select2-dropdown--below">
            <span class="select2-search select2-search--dropdown">
                <input class="select2-search__field" type="search" v-model="filterStr">
            </span>
            <span class="select2-results">
            <ul class="select2-results__options" v-el:ul>
                <li class="select2-results__option" aria-selected="false" v-for="d in data" @mouseover="mouseover($event)" @mouseout="mouseout($event)" @click.stop="valueSelect(d)">
                    {{d.name}}
                </li>
            </ul>
            </span>
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
                type: Object,
                default: {}
            },
            'size': {
                type: String,
                default: 'medium'
            }
        },
        data () {
            return {
                open: false,
                active: false,
                selectName: '',
                close: false,
                currentLi: '',
                filterStr: '',
                sData: [],
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
            this.sData = this.data;
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
                    this.$els.ul.children[this.currentLi].attributes[1].value = false;
                } else {
                    this.open = true;
                    this.active = true;
                    this.filterStr = '';
                    this.$els.drop.style.width = this.$els.container.offsetWidth + 'px';
                    for (var index in this.data) {
                        if (this.data[index] === this.result) {
                            this.$els.ul.children[index].attributes[1].value = true;
                            this.currentLi = index;
                            break;
                        }
                    }
                }
            },
            valueSelect (data) {
                this.result = data;
                this.selectName = data.name;
                this.close = true;
                if (this.currentLi !== '') this.$els.ul.children[this.currentLi].attributes[1].value = false;
                this.open = false;
            },
            deleteValue () {
                this.close = false;
                this.result = {};
                this.selectName = '';
            },
            mouseover (event) {
                event.currentTarget.classList.add('select2-results__option--highlighted');
            },
            mouseout (event) {
                event.currentTarget.classList.remove('select2-results__option--highlighted');
            }
        },
        watch: {
            'filterStr': function (now, old) {
                let temp = [];
                for (var index in this.sData) {
                    var key = this.sData[index].name;
                    if (key.includes(now)) {
                        temp.push(this.sData[index]);
                    }
                }
                this.data = temp;
            }
        }
    };
</script>
<style lang="css">
    .select2-drop.s-show {display: block;}
</style>

