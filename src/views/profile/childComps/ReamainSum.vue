<template>
  <div class="remain-sum">
   <div v-for="item in list" :key="item.name">
      <div class="sums">
        <span class="key-points">{{item.remainSum}}</span>
        <span>{{item.piece}}</span>
      </div>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      list: [
        {remainSum: 0.0,name:'我的余额',piece:"元"},
        {remainSum: 0,name:"我的优惠",piece:"个"},
        {remainSum: 0,name:"我的积分",piece:"分"},
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.remain-sum {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #333;
}
.remain-sum .sums{
  text-align: center;
}
.key-points{
  font-size: 25px;
  color: orange;
  font-weight: 400;
}
.remain-sum  .name{
 padding: 5px;
}
</style>