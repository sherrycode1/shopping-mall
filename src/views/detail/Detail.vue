<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" />
    <scroll class="content" ref="scroll">
      <detail-swipper :top-images="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-params :itemParams="itemParams" ref="params"></detail-params>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
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

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { getDetail, Goods, Shop, getRecommend } from "network/detail.js";
import { itemListenerMixin } from "common/mixin.js";

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

        // request recommend data
        getRecommend().then((res) => {
          this.recommends = res.data.list;
        });
      }
    });
  },
  mounted() {},
  mixins: [itemListenerMixin],
  methods: {
    imageLoad() {
      this.newRefresh();
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
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
  height: calc(100% - 44px);
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>