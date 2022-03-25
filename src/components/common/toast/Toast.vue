<template>
  <div v-show="show" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      message: "",
      show: false,
    };
  },
  methods: {
    showToast(message, duration = 1000) {
      this.show = true;
      this.message = message;
      setTimeout(() => {
        this.show = false;
        this.message = "";
      }, duration);
    },
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
  z-index: 999;
  font-size: 16px;
  color: #fff;
  background-color: rgba(240, 90, 148, 0.6);
}
</style>