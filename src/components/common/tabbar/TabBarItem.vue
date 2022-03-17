<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div  v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 插槽是被组件替换掉的 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default:'#d4237a'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods:{
    itemClick(){
      if(!this.isActive){
        this.$router.push(this.path)
      }
     
    }
  },
  computed:{
    isActive(){     
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
};
</script>

<style>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item svg {
  margin-top: 3px;
  /* 去除图片本身的3px  */
  vertical-align: middle;
}

</style>