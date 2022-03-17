<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swipper/index.js";

export default {
  props:{
    banner:{
      type: Array,
      default(){
        return []
      }
    }
  },
  name: "",
  data() {
    return {
      isLoad:false
    };
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
      this.$emit('swiperImageLoad')
      this.isLoad = true
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped lang=scss>
</style>