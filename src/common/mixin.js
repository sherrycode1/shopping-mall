import { debounce } from "common/utils.js";

export let itemListenerMixin = {
  data(){
    return{
      ItemImgListener: null,
      newRefresh:null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh,100);
    this.ItemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImageLoad", this.ItemImgListener);
  }
}

