<template>

  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.columns[2] }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="(item, index) in goods.services"
        :key="index"
      >
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goods: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
 .base-info {
   margin-top: 15px;
   padding: 0 8px;
   color: #999;
   border-bottom: 5px solid #f2f5f8;
 }

 .info-title {
   color: #222;
 }
  .info-price{
    margin-top: 17px;
  }
   .info-price .n-price{
     font-size: 24px;
     color: rgb(248, 124, 147);
   }
  .info-price .o-price{
    font-size: 13px;
    margin-left: 9px;
    text-decoration: line-through;
  }
  .info-other{
    padding-top: 20px;
    padding-bottom: 5px;
   border-bottom: 1px solid #f2f5f8;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }

  .info-service{
    padding: 25px 0 25px 0;
    display: flex;
    font-size: 12px;
    color: #222;
    justify-content: space-between;
  }

  .info-service img{
    width: 12px;

  }
  .discount{
    margin-left: 10px;
    padding: 2px;
    font-size: 13px;
    color: #fff;
    background-color:rgb(248, 124, 147) ;
    border-radius: 15% ;
  }
</style>