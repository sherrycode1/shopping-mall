<template>
    <cartgory-list-item :itemMessage="itemMessage"></cartgory-list-item>
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
</style>