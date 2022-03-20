<template>
  <div v-show="showToast" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    // message: {
    //   type: String,
    //   default: "",
    // },
    // showToast: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      message :"",
      show:false
    };
  },
  methods: {
    showToast (message, duration){
      this.show = true
      this.message = message
      setTimeout(() => {
        this.show = message 
        this.message = ""
      }, duration);
    }
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px;

  font-size: 16px;
  color: #fff;
  background-color: rgba(240, 90, 148, 0.6);
}
</style>