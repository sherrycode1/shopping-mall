<template>
  <div class="left-nav" v-if="list.length !== 0">
    <div @click="leftNavClick(item.maitKey)" v-for="item in list" :key="item.maitKey" class="category-name">
      {{item.title}}
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

    };
  },
  methods: {
    leftNavClick(res){
      this.$emit('leftNavClick',res)
    }
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

.category-name{
  height: 39px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: pink;
  
}

</style>