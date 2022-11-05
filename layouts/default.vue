<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>