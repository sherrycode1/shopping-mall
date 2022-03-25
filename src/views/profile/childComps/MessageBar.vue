<template>
  <div>
    <div class="message-bar" v-for="item in message" :key="item">
      <div class="round"></div>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      message:[
        "我的消息","积分商城",'会员卡','我的购物车','下载购物APP'
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.message-bar{
  height: 50px;
  margin: 6px 15px;
  display: flex;
  align-items: center;
  /* flex-direction: row-reverse; */
  border-bottom:1px solid gainsboro ;
  font-size: 18px;
}
.message-bar .round{
  width: 15px;
  height: 15px;
  background-color: pink;
  margin-right: 20px;
  border-radius: 50%;
}
</style>