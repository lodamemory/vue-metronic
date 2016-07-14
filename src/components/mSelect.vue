<template>
<div class="form-group">
    <label class="control-label">{{label}}</label>
    <div class="select2-container form-control select2me select2-allowclear"
    :class="[selectClass, {'select2-container-active': active, 'select2-dropdown-open': open}]" v-el:container>
        <a href="javascript:void(0)" class="select2-choice" @click="openSelect">
            <span class="select2-chosen">{{selectName}}</span>
            <abbr class="select2-search-choice-close" v-show="close" @click.stop="deleteValue"></abbr>
            <span class="select2-arrow">
                <b role="presentation"></b>
            </span>
        </a>
    </div>
    <div id="select2-drop-mask" class="select2-drop-mask" style="display:none" @click="openSelect" v-el:mask></div>
    <div class="select2-drop select2-display-none select2-with-searchbox select2-drop-active s-show" v-show="open" v-el:drop>
        <div class="select2-search"><label class="select2-offscreen"></label>
            <input type="text" class="select2-input" placeholder="" v-model="filterStr">
        </div>
        <ul class="select2-results" role="listbox" v-el:ul>
            <li class="select2-results-dept-0 select2-result select2-result-selectable" v-for="d in data" @mouseover="mouseover($event)" @mouseout="mouseout($event)" >
            <div class="select2-result-label" @click="valueSelect(d)">
                <span class="select2-match"></span>{{d.name}}
            </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
    import EventListener from './util/eventListener';
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
            },
            'label': {
                type: String,
                default: ''
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
                if (!this.$el.contains(e.target)) this.active = false;
            });
        },
        beforeDestroy () {
            this._closeEvent.remove();
        },
        methods: {
            openSelect () {
                if (this.open) {
                    this.open = false;
                    this.$els.mask.style.display = 'none';
                } else {
                    this.open = true;
                    this.active = true;
                    this.filterStr = '';
                    this.$els.drop.style.width = this.$els.container.offsetWidth + 'px';
                    this.$els.drop.style.top = this.$els.container.offsetTop + this.$els.container.offsetHeight + 'px';
                    this.$els.drop.style.left = this.$els.container.offsetLeft + 'px';
                    this.$els.mask.style.display = 'block';
                    for (var index in this.data) {
                        if (this.data[index] === this.result) {
                            this.$els.ul.children[index].classList.add('select2-highlighted');
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
                this.open = false;
                this.$els.mask.style.display = 'none';
            },
            deleteValue () {
                this.close = false;
                this.result = {};
                this.selectName = '';
            },
            mouseover (event) {
                if (this.currentLi !== '') this.$els.ul.children[this.currentLi].classList.remove('select2-highlighted');
                event.currentTarget.classList.add('select2-highlighted');
            },
            mouseout (event) {
                event.currentTarget.classList.remove('select2-highlighted');
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

