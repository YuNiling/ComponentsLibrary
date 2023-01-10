<template>
  <button
    type="button"
    class="cl-button"
    :class="{
      'cl-button--primary': type === 'primary',
      'cl-button--success': type === 'success',
      'cl-button--info': type === 'info',
      'cl-button--warning': type === 'warning',
      'cl-button--danger': type === 'danger',
      'is-plain': plain,
      'is-round': round,
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ClButton',
};
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string;
    plain?: boolean;
    round?: boolean;
  }>(),
  {
    type: '',
    plain: false,
    round: false,
  }
);
</script>
