@use './var' as *;
@use '../mixins/mixins' as *;

:root {
  // 基础属性
  @each $type in (primary, success, info, warning, danger) {
    @include set-css-color-type($colors, $type);
  }
  @include set-component-css-var('text-color', $text-color);
  @include set-component-css-var('bg-color', $bg-color);
  @include set-component-css-var('border-color', $border-color);

  // 组件
  @include set-component-css-var('button', $button);
}
