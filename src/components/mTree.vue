<template>
  <!-- <div id="tree_1" class="tree-demo jstree jstree-1 jstree-default">
    <ul class="jstree-container-ul">
      <li class="jstree-node  jstree-open">
        <i class="jstree-icon jstree-ocl"></i>
        <a class="jstree-anchor" href="#">
            <i class="jstree-icon jstree-themeicon fa fa-folder icon-state-warning icon-lg jstree-themeicon-custom"></i>
            Root node 1
        </a>
        <ul class="jstree-children" style="">
          <li class="jstree-node  jstree-leaf">
            <i class="jstree-icon jstree-ocl"></i>
            <a class="jstree-anchor  jstree-clicked" href="#">
                <i class="jstree-icon jstree-themeicon fa fa-folder icon-state-warning icon-lg jstree-themeicon-custom"></i>
                Initially selected 
            </a>
          </li>
          <li class="jstree-node  jstree-leaf" ><i class="jstree-icon jstree-ocl"></i><a
            class="jstree-anchor" href="#"><i
            class="jstree-icon jstree-themeicon fa fa-briefcase icon-state-success  jstree-themeicon-custom"></i>
            custom icon URL
          </a></li>
          <li class="jstree-node  jstree-open" ><i class="jstree-icon jstree-ocl"></i><a
            class="jstree-anchor" href="#"><i
            class="jstree-icon jstree-themeicon fa fa-folder icon-state-warning icon-lg jstree-themeicon-custom"></i>
            initially open
          </a>
            <ul class="jstree-children" style="">
              <li class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a
                class="jstree-anchor  jstree-disabled" href="#"><i
                class="jstree-icon jstree-themeicon fa fa-folder icon-state-warning icon-lg jstree-themeicon-custom"></i>
                Disabled Node
              </a></li>
              <li class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl"></i><a
                class="jstree-anchor" href="#"><i
                class="jstree-icon jstree-themeicon fa fa-file icon-state-warning icon-lg jstree-themeicon-custom"></i>
                Another node
              </a></li>
            </ul>
          </li>
          <li class="jstree-node  jstree-leaf jstree-last" ><i
            class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i
            class="jstree-icon jstree-themeicon fa fa-warning icon-state-danger jstree-themeicon-custom"></i>
            Custom icon class (bootstrap)
          </a></li>
        </ul>
      </li>
      <li class="jstree-node  jstree-leaf jstree-last" ><i class="jstree-icon jstree-ocl"></i><a
        class="jstree-anchor" href="http://www.jstree.com"><i
        class="jstree-icon jstree-themeicon fa fa-file icon-state-warning icon-lg jstree-themeicon-custom"></i>
        Clickanle link node </a></li>
    </ul>
  </div> -->
<div v-for="td in treeData">
    {{td.code}}
    <div v-if="td.nodes">
        <item :tree-data="td.nodes"></item>
    </div>
</div>
    
</template>
<script>
    export default {
        components: { item: function (resolve) {
            window.console.log(resolve);
            require(['./mTree.vue'], resolve);
        } },
        props: {
            'treeData': {
                type: Array,
                default: []
            }
        }
    };
</script>
