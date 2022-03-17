<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tabControl"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swipper
        :banner="banner"
        @swiperImageLoad="swiperImageLoad"
      ></home-swipper>
      <recommand-view :recommends="recommend"></recommand-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//components
import RecommandView from "./childComps/RecommandView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import HomeSwipper from "./childComps/HomeSwipper.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { itemListenerMixin } from "common/mixin.js";
import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    RecommandView,
    FeatureView,
    HomeSwipper,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      savaY: 0,
    };
  },
  // do not forget this
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // without this, getHomeMultidata is from import
    this.getHomeMultidata();
    // request goods data
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.savaY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1.keep y data
    this.savaY = this.$refs.scroll.getScrollY();
    // 2.cancel
    this.$bus.$off("itemImageLoad", this.ItemImgListener);
  },
  destroyed() {
    console.log("i am destoryed");
  },

  mounted() {},
  mixins: [itemListenerMixin],
  methods: {
    // Monitor events
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(pos) {
      // 1.pos.y > 1000 ? backTop show or not
      this.isShowBackTop = -pos.y > 1000;
      // 2,tabControl fixed or not
      this.isTabFixed = -pos.y > this.tabOffsetTop;
    },
    loadMore() {
      // 更新的时候依然会有卡顿
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // http request
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      // 在原来的基础上加1，这里拿的是原来的page
      // 第二次调用这个方法，page就会自动+1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* 视口高度 */
  height: 100vh;
}
.home-nav {
  background-color: pink;
  color: white;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}

.tabControl {
  position: relative;
  z-index: 9;
}
</style>