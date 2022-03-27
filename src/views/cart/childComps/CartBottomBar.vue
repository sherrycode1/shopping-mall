<template>
  <div class="bottom-bar">
    <div class="check-button">
      <check-button 
      :isChecked="isSelectAll"
      @click.native="checkClick"
      />
      <span class="check-all">全选</span>
    </div>
    <span class="count-all">合计：</span>
    <div class="total-price">{{ "￥" + totalPrice }}</div>

    <div class="to-buy" @click="calcClick">去结算({{checkLength}})</div>
  </div>
</template>

<script>
import checkButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    checkButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((pre, item) => {
          return pre + item.realPrice * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      // 性能不高，会持续找
      // return !(this.cartList.filter(item => !item.checked).length)
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    },
   
  },
  methods: {
     checkClick(){
       if(this.isSelectAll){
         this.cartList.forEach(item => item.checked = false);
       }else {
         this.cartList.forEach(item => item.checked = true)
       }
    },
    calcClick(){
      if(!this.cartList.find(item => item.checked)){
        this.$toast.showToast('请选择要购买的商品')
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 40px;
  background-color: #fff;
  position: fixed;
  bottom: 49px;
  display: flex;
  align-items: center;
}
.check-button {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}

.check-all {
  padding-left: 10px;
  font-size: 18px;
}

.total-price {
  color: rgb(255, 115, 0);
}
.count-all {
  padding-left: 15px;
}
.to-buy {
  width: 130px;
  line-height: 40px;
  background-color: rgb(255, 115, 0);
  border-radius: 1%;
  position: absolute;
  right: 0;
  font-size: 19px;
  text-align: center;
  color: #fff;
}
</style>