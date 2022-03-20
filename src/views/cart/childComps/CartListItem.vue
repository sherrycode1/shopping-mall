<template>
  <div>
     <check-button :isChecked="itemInfo.checked"
     @click.native="checkClick"
     ></check-button>
    {{product}}
   
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  name: '',
  components:{
    CheckButton
  },
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    },
    
  },
  data () {
    return {
    }
  },
  methods: {
    checkClick(){
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style scoped lang=scss>

</style>