<template>
  <router-view></router-view>
</template>

<script>
import { getUserInfo, getList } from "@/api";
export default {
  mounted() {
    getUserInfo().then((res) => console.log(res));
    getList().then((res) => console.log(res));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
