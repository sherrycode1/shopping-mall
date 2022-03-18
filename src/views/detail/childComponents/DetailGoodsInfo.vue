<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="desc">{{ detailInfo.desc }}</div>
    </div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
    <div
      class="info-list"
      v-for="item in item.list"
      :key="item"
    >
      <img :src="item" alt="" @load ="imgLoad"/>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter:0,
      imagesLength:0
    };
  },
  methods: {
    imgLoad(){
      // all imgs loaded
      if(++this.counter === this.imagesLength){
      this.$emit('imgLoad')
      }
     
    }
  },
  watch: {
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
.goods-info {
  padding-top: 20px;
  position: relative;
}

.info-list img{
  width: 100%;
}
</style>
