<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, computed } from 'vue'

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
