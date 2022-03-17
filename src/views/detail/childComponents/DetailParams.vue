<template>
  <div class="item-params" v-if="Object.keys(itemParams).length !== 0">
    <table
      v-for="(tr, index) in itemParams.rule.tables[0]"
      :key="index"
      class="info-size"
    >
      <tr v-for="(item, key) in tr" :key="key">
        <td>{{ item }}</td>
      </tr>
    </table>
    <table class="item-info"  v-for="info in itemParams.info.set" :key="info.key">
      <tr>
        <td class="item-key"> {{ info.key }}</td >
        <td class="item-value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {

        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style scoped>
.info-size {
  display: flex;
  justify-content: space-around;
  color: #222;
  font-size: 17px;
  padding: 10px 0px 10px 10px;
  border-bottom: 1px solid gainsboro;
}

.item-info{
  padding: 20px 15px 0 15px;
  font-size: 17px;
  width: 100%;
  border-bottom: 1px solid gainsboro;
}
.item-key{
  padding: 0 20px 20px 20px;

}

.item-value{
  padding: 0 0 20px 20px;
  color:rgb(248, 124, 147) ;

}
</style>