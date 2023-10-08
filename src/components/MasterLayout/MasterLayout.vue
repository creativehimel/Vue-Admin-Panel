<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>
<template>
  <section class="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
    <Sidebar />
    <div class="flex-1">
      <Header />
      <div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
