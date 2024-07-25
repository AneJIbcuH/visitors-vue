<script setup lang="ts">
import Head from "./components/Head.vue";
import Nav from "./components/Nav.vue";
import Popup from "./components/Popup.vue";
import MyVisitor from "./components/MyVisitor.vue";
import Filter from "./components/Filter.vue";

</script>

<template>
  <Nav />
  <Popup />
  <div class="table">
    <Head />
    <div class="body">
      <MyVisitor />
    </div>
  </div>
  <Filter/>
</template>

<style scoped></style>
