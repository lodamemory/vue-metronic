<template>
  <div
    class="select2-container form-control input-xlarge select2me select2-allowclear"
    id="s2id_autogen1" :class="{'select2-container-active': active, 'select2-dropdown-open': open}" v-el:container>
    <a href="javascript:void(0)" class="select2-choice" tabindex="-1" @click="openSelect">
      <span class="select2-chosen" id="select2-chosen-2">Wyoming</span>
      <abbr class="select2-search-choice-close"></abbr>
        <span class="select2-arrow" role="presentation">
            <b role="presentation"></b>
        </span></a>
    <label for="s2id_autogen2" class="select2-offscreen"></label>
    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button"
           aria-labelledby="select2-chosen-2" id="s2id_autogen2">
  </div>
  <div class="select2-drop select2-display-none select2-with-searchbox select2-drop-active s-show" 
       v-show="open" id="select2-drop" v-el:drop>
    <div class="select2-search"><label class="select2-offscreen"></label>
      <input type="text" class="select2-input" id="s2id_autogen2_search" placeholder="" >
    </div>
    <ul class="select2-results" role="listbox" id="select2-results-2">
      <li class="select2-results-dept-0 select2-result select2-result-selectable"
          role="presentation">
        <div class="select2-result-label" id="select2-result-label-36" role="option"><span class="select2-match"></span>Alabama
        </div>
      </li>
      <li class="select2-results-dept-0 select2-result select2-result-selectable select2-highlighted"
          role="presentation">
        <div class="select2-result-label" id="select2-result-label-37" role="option"><span class="select2-match"></span>Wyoming
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        methods: {
            openSelect () {
                this.open = true;
                this.active = true;
                window.console.log(this.$els.container);
                this.$els.drop.style.width = this.$els.container.width + 'px';
                window.console.log(this.$els.drop.style.width);
            }
        },
        data () {
            return {
                open: false,
                active: false
            };
        }
    };
</script>
<style lang="css">
    .select2-drop.s-show {display: block;}
</style>

