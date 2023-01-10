<template>
  <div
<<<<<<< HEAD
    class="yl-input"
=======
    class="cl-input"
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
    :class="{
      'is-disabled': inputDisabled,
    }"
  >
    <div
<<<<<<< HEAD
      class="yl-input__wrapper"
=======
      class="cl-input__wrapper"
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
      :class="{
        'is-focus': focused,
      }"
    >
      <input
<<<<<<< HEAD
        class="yl-input__inner"
=======
        class="cl-input__inner"
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
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
<<<<<<< HEAD
  name: 'YlInput',
=======
  name: 'ClInput',
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
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
