<template>
  <div
    class="cl-input"
    :class="{
      'is-disabled': inputDisabled,
    }"
  >
    <div
      class="cl-input__wrapper"
      :class="{
        'is-focus': focused,
      }"
    >
      <input
        class="cl-input__inner"
        type="text"
        autocomplete="off"
        tabindex="0"
        placeholder="placeholder"
        :disabled="inputDisabled"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ClInput',
};
</script>
<script lang="ts" setup>
import { ref, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    placeholder: '',
    disabled: false,
  }
);

const focused = ref(false);
const handleFocus = (event: FocusEvent) => {
  focused.value = true;
};
const handleBlur = (event: FocusEvent) => {
  focused.value = false;
};

const { disabled: inputDisabled } = toRefs(props);
</script>
