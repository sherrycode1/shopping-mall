import { debounce } from "common/utils.js";

import BackTop from "components/content/backTop/BackTop.vue";

export let itemListenerMixin = {
  data() {
    return {
      ItemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.ItemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImageLoad", this.ItemImgListener);
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components:{
    BackTop,
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
}