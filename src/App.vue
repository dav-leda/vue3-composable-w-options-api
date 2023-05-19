
<template>
  <div class="container" @mousemove="useMouse.update">

    <h1>Mouse composable w/Options API</h1>

    <ComponentOne/>
    <ComponentTwo/>
    <ComponentThree/>
    <ComponentFour/>

  </div>
</template>


<script lang="ts">

import ComponentOne from './components/ComponentOne.vue'
import ComponentTwo from './components/ComponentTwo.vue'
import ComponentThree from './components/ComponentThree.vue'
import ComponentFour from './components/ComponentFour.vue'

import { defineComponent } from 'vue'

import useMouse from './composables/mouse'

export default defineComponent({
  components: {
    ComponentOne, ComponentTwo, ComponentThree, ComponentFour
  },
  data: () => ({ 
    useMouse
  })
})
</script>

<style>

.container {
  text-align: center;
  height: 100vh;
  width: 50vw;
}

</style>