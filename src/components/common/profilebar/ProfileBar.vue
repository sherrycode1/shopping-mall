<template>
  <div class="profile-bar">
    <div class="profile-picture"><slot name="left"></slot></div>
    <div class="profile-name"><slot name="middle"></slot></div>
    <div class="more-info">
      <slot name="right"></slot>
      <svg
        t="1648214197117"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2211"
        width="26"
        height="26"
      >
        <path
          d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"
          p-id="2212"
          fill="#e6e6e6"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.profile-bar {
  height: 89px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff;
}
.profile-picture {
  padding: 0 18px;
  height: 100%;
}
.profile-name {
  flex: 1;
}

</style>