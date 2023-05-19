
<template>
  <section @mousemove="update">
    
    <h1>Component 4 (mouseFactory)</h1>

    <p>X position: {{ x }}</p>
    <p>Y position: {{ y }}</p>
    <p>rand: {{ rand }}</p>

  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import { UseMouse } from '../composables/mouseFactory'
const { x, y, rand, update } = UseMouse()

export default defineComponent({

  data: () => ({
    x, y, rand, update
  })
})
</script>

<style>

section {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid;
}

</style>