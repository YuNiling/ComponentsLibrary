<template>
  <cl-input v-model="input" disabled placeholder="Please input2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const input = ref('');
</script>
