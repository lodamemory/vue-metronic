<template>
  <div class="select2-container form-control input-xlarge select2me select2-allowclear"
    :class="{'select2-container-active': open, 'select2-dropdown-open': open}" v-el:container>
    <a href="javascript:void(0)" class="select2-choice" @click="openSelect">
      <span class="select2-chosen">{{selectName}}</span>
      <abbr class="select2-search-choice-close" v-show="close"></abbr>
        <span class="select2-arrow">
            <b role="presentation"></b>
        </span></a>
    <label for="s2id_autogen2" class="select2-offscreen"></label>
    <input class="select2-focusser select2-offscreen" type="text"  id="s2id_autogen2">
  </div>
  <!-- <div id="select2-drop-mask" class="select2-drop-mask" style="display:none" @click="openSelect" v-el:mask></div> -->
  <div class="select2-drop select2-display-none select2-with-searchbox select2-drop-active s-show" 
       v-show="open" id="select2-drop" v-el:drop>
    <div class="select2-search"><label class="select2-offscreen"></label>
      <input type="text" class="select2-input" id="s2id_autogen2_search" placeholder="" >
    </div>
    <ul class="select2-results" role="listbox" id="select2-results-2">
      <li class="select2-results-dept-0 select2-result select2-result-selectable" v-for="d in data" @mouseover="mouseover($event)" @mouseout="mouseout($event)">
        <div class="select2-result-label" @click="valueSelect(d)">
            <span class="select2-match"></span>{{d.name}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        props: {
            'data': {
                type: Array,
                default: []
            },
            'result': {
                type: Object,
                default: {}
            }
        },
        methods: {
            openSelect () {
                if (this.open) {
                    this.open = false;
                    this.$els.mask.style.display = 'none';
                } else {
                    this.open = true;
                    this.$els.drop.style.width = this.$els.container.offsetWidth + 'px';
                    this.$els.mask.style.display = 'block';
                }
            },
            valueSelect (data) {
                this.result = data;
                this.selectName = data.name;
                this.open = false;
            },
            mouseover (event) {
                event.currentTarget.classList.add('select2-highlighted');
            },
            mouseout (event) {
                event.currentTarget.classList.remove('select2-highlighted');
            }
        },
        data () {
            return {
                open: false,
                active: false,
                selectName: '',
                close: false
            };
        }
    };
</script>
<style lang="css">
    .select2-drop.s-show {display: block;}
</style>

