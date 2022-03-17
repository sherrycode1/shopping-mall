<template>
  <!-- ref this.$refs.refname 组件/对象 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    probeType: {
      type: Number,
      dafault: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.create BScroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    // 2.Monitor scroll position
    if(this.probeType ===2 || this.probeType === 3){
      this.scroll.on("scroll", (pos) => {
      this.$emit("scroll", pos);
    });
    }
    
    // 3.Monitor scroll to bottom 
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>