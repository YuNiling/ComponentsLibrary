<template>
  <h1>Home</h1>
  <h3 @click="increment">{{ count }}</h3>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const count = computed(() => store.state.count)
const increment = () => {
  store.commit('increment')
}
</script>
