<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },

  },
  computed:{
   showImage(){
     return this.goodsItem.image || this.goodsItem.showLarge.img
   }
  },
  methods:{
    imageLoad(){
      
      this.$bus.$emit('itemImageLoad')

      // if(this.$route.path.indexOf('/home')){
      //   this.$bus.$emit('homeItemImgLoad')
      // }else if(this.$route.path.indexOf('/detail')){
      //   this.$bus.$emit('detailItemImgLoad')
      // }
    },
    itemClick(){
      this.$router.push('/detail/'+ this.goodsItem.iid)
    }
  },

};
</script>

<style>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width:170px;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price{
  margin-right: 20px;

}

.goods-info .collect{
  position: relative;
  flex-wrap: wrap;
}
</style>