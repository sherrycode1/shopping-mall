<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <svg t="1647263808467" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2193" width="24" height="44"><path d="M624.788992 204.047974 585.205965 164.464026 219.560038 530.185011 585.205965 895.864013 624.788992 856.280986 298.663014 530.16105Z" p-id="2194"></path></svg>
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        :key="item"
        :class="{active:index === currentIndex}"
        class="title-item"
        @click="titleClick(index)"
        >{{item}}</div>
      </div>
      
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: '',
  components: {
    NavBar
  },
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0

    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  
}

.title-item{
  flex: 1;
  font-size: 13px;
}

.active{
  color: pink;
}


</style>