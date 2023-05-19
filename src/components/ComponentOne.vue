
<template>
  <section >
    
    <h1>Component 1 (mouseStore)</h1>

    <p>X position: {{ useMouse.x }}</p>
    <p>Y position: {{ useMouse.y }}</p>

  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import useMouse from '../composables/mouse'

export default defineComponent({
  data: () => ({ 
    useMouse
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