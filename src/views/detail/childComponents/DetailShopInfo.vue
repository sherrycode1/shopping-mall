<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="item in shop.score" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{'better-more' : item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}} </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  filters: {
    sellCountFilter(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    },
  },
};
</script>

<style scoped>
.shop-top {
  display: flex;
  padding: 30px 0 20px 10px;
}
.shop-top img {
  width: 50px;
  border-radius: 50%;
  padding-right: 15px;
}
.shop-top span {
  line-height: 50px;
}
.shop-middle {
  display: flex;
}
.shop-middle-item {
  width: 50%;
  display: flex;
  border-right: 1px solid rgb(180, 174, 174);
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
}
.shop-middle-right tr {
  display: block;
  padding: 3px;
}
.sells-count,
.goods-count {
  padding-bottom: 10px;
}
.sells-text,
.goods-text {
  font-size: 14px;
}
.score{
  color:#fff;
  background-color: green;
  border-radius: 14%;
}

.better{
  color: green;
}

.score-better {
  background-color: red;
  
}

.better-more{
  color: red;
}
</style>