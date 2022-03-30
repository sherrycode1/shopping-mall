<template>
  <div class="category-wrapper">  
      <category-left-nav :list="leftNav" @leftNavClick="leftNavClick" />
    <scroll>
      <category-list
        :itemMessage="itemMessage"
        class="category-list"
      ></category-list> 
    </scroll>
  </div>
</template>

<script>
import CategoryLeftNav from "./childcomps/CategoryLeftNav.vue";
import CategoryList from "./childcomps/CategoryList.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { getCategory, getSubCategory } from "network/category.js";
export default {
  data() {
    return {
      leftNav: [],
      currentType: "3627",
      itemMessage: [],
    };
  },
  components: {
    CategoryLeftNav,
    CategoryList,
    Scroll,
  },
  created() {
    this.getCategory();
    this.getSubCategory();
  },
  mounted() {},
  methods: {
    // http request
    getCategory() {
      getCategory().then((res) => {
        const leftNav = res.data.category.list;
        this.leftNav = leftNav;

        console.log(leftNav);
      });
    },
    getSubCategory() {
      getSubCategory(this.currentType).then((res) => {
        this.itemMessage = res.data.list;
        console.log(this.itemMessage);
      });
    },
    // control item
    leftNavClick(res) {
      this.currentType = res;
      console.log(this.currentType);
    },
  },
};
</script>

<style scoped>
.category-wrapper {
  display: flex;
  flex-direction: row;
}



.wrapper{
  width: 70%;
  padding-left: 29%;
  height: calc(100vh - 49px);
}
</style>