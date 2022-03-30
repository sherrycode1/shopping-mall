<template>
  <div v-if="this.itemMessage!==0" class="category-list">
    <cartgory-list-item :itemMessage="itemMessage"></cartgory-list-item>
  </div>
</template>

<script>
import CartgoryListItem from './CartgoryListItem.vue'
export default {
  name: '',
  components:{
    CartgoryListItem,
  },
  props:{
    itemMessage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped>
.category-list{
  /* display: flex;
  flex-wrap: wrap; */
}

</style>