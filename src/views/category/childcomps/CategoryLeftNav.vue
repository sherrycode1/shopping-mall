<template>
  <div class="left-nav" v-if="list.length !== 0">
    <div
      @click="leftNavClick(item.maitKey, index)"
      v-for="(item, index) in list"
      :class="{ active: index === currentIndex }"
      :key="item.maitKey"
      class="category-name"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    leftNavClick(key, index) {
      this.$emit("leftNavClick", key);
      this.currentIndex = index;
    },
    // getClickIndex(index) {
    //   this.$emit("getClickIndex", index);
    // },
  },
};
</script>

<style scoped>
.left-nav {
  width: 29%;
  display: flex;
  flex-direction: column;
  background-color: gray;
  position: fixed;
}

.category-name {
  height: 39px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: pink;
}

.active {
  background-color: rgba(255, 255, 255, 0.685);
  color: white;
}
</style>