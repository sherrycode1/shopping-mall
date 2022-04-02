<template>
  <div v-if="itemMessage.length !== 0" class="category-list-item">
    <div
      v-for="item in itemMessage"
      :key="item.acm"
      class="category-list-item"    
    >
      <a :href="item.link">
        <img :src="item.image" class="category-image" />
        <div class="item-title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    itemMessage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
    
    }
  },
  methods: {
    
  },
  
};
</script>

<style scoped>
.category-list-item {
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 10px;
}

.category-list-item img {
  width: 70px;
  height: 70px;
}

.category-list-item a {
  color: #333;
  text-decoration: none;
}
</style>