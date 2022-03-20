<template>
  <div class="cart">
    <!-- nav -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- list -->
    <cart-list />
    <!-- getAll -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from './childComps/CartBottomBar.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,

  },
  computed: {
    ...mapGetters(["cartLength"]),
  },

};
</script>

<style scoped>
.nav-bar {
  background-color: pink;
  color: #fff;
}

.cart{
  height: 100vh;
}
</style>> 
