<template>
  <img
    class="m-auto bg-[#000]"
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <HelloWorld
    class=""
    msg="Hello Vue 3 + TypeScript + Vite"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style src="./tailwind-loader.css"></style>

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
