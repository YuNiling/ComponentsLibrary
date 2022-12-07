<template>
  <button
    type="button"
    class="yl-button"
    :class="{
      'yl-button--primary': type === 'primary',
      'yl-button--success': type === 'success',
      'yl-button--info': type === 'info',
      'yl-button--warning': type === 'warning',
      'yl-button--danger': type === 'danger',
      'is-plain': plain,
      'is-round': round,
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'YlButton',
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
