<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.name" class="recommand-item">
      <a href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommandView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
 .recommend{
   display: flex;
   /* width: 100%; */
   text-align: center;
   font-size: 13px;
   padding: 15px 0 20px;
   border-bottom: 8px solid #eee;
 }

.recommand-item{

  flex: 1;
}

.recommand-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>