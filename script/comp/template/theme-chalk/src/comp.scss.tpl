@use './common/var' as *;
@use './mixins/config' as *;
@use './mixins/function' as *;

$com: '{{ compClassName }}' !default;

.#{$namespace}-#{$com} {
  background: red;
}
