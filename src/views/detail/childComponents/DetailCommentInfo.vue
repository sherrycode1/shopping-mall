<template>
  <div class="commtent-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-detail">
      <div class="userinfo">
        <img :src="commentInfo.user.avatar" alt="" />
        <div class="username">{{ commentInfo.user.uname }}</div>
      </div>
      <div class="info-footer">
        <div class="comment">{{ commentInfo.content }}</div>
        <div class="shop-info">
          <div class="time">{{ commentInfo.created | showDate}}</div>
          <div>{{ commentInfo.style }}</div>
        </div>
        <div class="imgs">
          <img
            :src="item"
            alt=""
            v-for="item in commentInfo.images"
            :key="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
    showDate(val){
      const date = new Date(val * 1000)
      return date.toLocaleDateString().replaceAll('/','-')
    }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.info-header {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
}

.info-detail {
  padding: 10px;
}
.userinfo {
  display: flex;
  line-height: 60px;
  padding-bottom: 15px;
}

.userinfo img {
  border-radius: 50%;
  width: 60px;
  padding-right: 20px;
}
.info-footer .imgs {
  padding: 15px 0 25px 0px ;

}
.info-footer img {
  width: 80px;
  height: 80px;
  padding-right: 4px;
}

.shop-info{
  padding:10px 10px 0 0 ;
  display: flex;
  color: gray;
}

.time{
  padding-right: 10px;
}
</style>