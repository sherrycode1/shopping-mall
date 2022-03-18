<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
         <div>{{$store.state.cartList.length}}</div>
      <detail-swipper :top-images="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-params :itemParams="itemParams" ref="params"></detail-params>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart= "addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwipper from "./childComponents/DetailSwipper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
import DetailParams from "./childComponents/DetailParams.vue";
import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue";
import DetailBottomBar from "./childComponents/DetailBottomBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { getDetail, Goods, Shop, getRecommend } from "network/detail.js";
import { debounce } from "common/utils.js";
import { itemListenerMixin,backTopMixin } from "common/mixin.js";

export default {
  name: "",
  components: {
    DetailNavBar,
    DetailSwipper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: null,
      
    };
  },
  created() {
    // 1.keep iid
    this.iid = this.$route.params.iid;
    // 2.request detail data recording to iid
    getDetail(this.iid).then((res) => {
      //  1. top banner data
      console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      //  2.get goods data
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 2.get shop data
      this.shop = new Shop(data.shopInfo);
      // 3.get detail info
      this.detailInfo = data.detailInfo;
      // 4.get itemParams
      this.itemParams = data.itemParams;
      // 5.get comment
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];

        //
      }
    });
    //3. request recommend data
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    // 4.getThemeTopY
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    });
  },
  mounted() {},
  mixins: [itemListenerMixin,backTopMixin],
  methods: {
    imgLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(pos) {
      // ?probetype
      const posY = -pos.y;
      // console.log(posY);
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        // 前三种情况 + 最后一种
        // if (
        //   this.currentIndex !== i &&
        //   ((i < length - 1 &&
        //     posY > this.themeTopYs[i] &&
        //     posY <= this.themeTopYs[i + 1]) ||
        //     (i === length - 1 && posY > this.themeTopYs[i]))
        // ) {
        //   this.currentIndex = i;
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        if (
          this.currentIndex !== i &&
          posY >= this.themeTopYs[i] &&
          posY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 3.backTop
      this.isShowBackTop = -pos.y > 1000;
      // 2,tabControl fixed or not
      this.isTabFixed = -pos.y > this.tabOffsetTop;
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.realPrice =this.goods.realPrice
      product.iid = this.iid

      // add goods to state
      this.$store.dispatch('addCart',product)
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 93px);
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>