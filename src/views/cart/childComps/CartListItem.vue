<template>
  <div class="cart-list-item">
    <check-button
      :isChecked="itemInfo.checked"
      @click.native="checkClick"
    ></check-button>

    <img :src="itemInfo.image" alt="" />
    <div class="right-desc">
      <div class="title">{{ itemInfo.title }}</div>
      <div class="desc">{{ itemInfo.desc }}</div>
      <div class="price-count">
        <span class="price"> {{ "￥" + itemInfo.realPrice }}</span>

        <span class="count">{{ "X" + itemInfo.count }}</span>
      </div>
    </div>
    <!-- {{itemInfo}} -->
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  name: "",
  components: {
    CheckButton,
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 3px;
}
.cart-list-item img {
  width: 70px;
  margin-right: 10px;
  border-radius: 14%;
}

.right-desc div {
  width: 260px;
  /* line-height: 50px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.right-desc .title {
  line-height: 50px;
  font-size: 18px;
}
.right-desc .desc {
  font-size: 15px;
  color: #777;
}
.right-desc .price {
  line-height: 40px;
  color: rgb(255, 115, 0);
}
.right-desc .count{
  line-height: 40px;
  position: absolute;
  right: 30px;
}
</style>