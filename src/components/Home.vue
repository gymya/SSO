<script setup lang="ts">
import { ref,computed } from 'vue'
import { useRoute } from "vue-router";

const count = ref(0)

const route = useRoute()

const pageName = computed(()=>{
  return route.name
})
</script>

<template>
  <h1>{{ pageName }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>

</style>
