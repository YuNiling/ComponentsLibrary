<template>
  <div class="service-preview">
    <section class="demo">
      <slot />
    </section>

    <div v-show="codeVisible" class="source-code">
      <pre class="language-html"><code class="language-html">{{ sourceCode }}</code></pre>
    </div>

    <div class="preview-bottom" :class="{ 'is-fold': codeVisible }">
      <span @click="showSourceCode">{{ codeVisible ? '隐藏源代码' : '查看源代码' }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Prism from 'prismjs';
import '../assets/prism.css';
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  /** 组件名称 */
  compName: {
    type: String,
    default: '',
    require: true,
  },
  /** 要显示代码的组件 */
  demoName: {
    type: String,
    default: '',
    require: true,
  },
});

const sourceCode = ref('');
const codeVisible = ref(false);

onMounted(async () => {
  if (props.compName && props.demoName) {
    console.log(`../../packages/components/${props.compName}/docs/${props.demoName}.vue?raw`);
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `../../packages/components/${props.compName}/docs/${props.demoName}.vue?raw`
      )
    ).default;
  }
  await nextTick();
  Prism.highlightAll();
});

const showSourceCode = () => {
  codeVisible.value = !codeVisible.value;
};
</script>

<style lang="scss" scoped>
.service-preview {
  border: 4px;
  border: 1px solid #dcd7e6;
  padding: 10px 10px 0px;
  .demo {
    padding-bottom: 20px;
    width: 100%;
    :deep(.fws-login) {
      height: 800px;
    }
  }
  .source-code {
    padding: 20px 0;
    border-top: 1px solid #dcd7e6;
    overflow-y: auto;
    pre.language-html {
      margin: 0;
      padding: 0 15px;
      line-height: 0;
    }
  }
  .preview-bottom {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #dcd7e6;
    cursor: pointer;
    background-color: #fff;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    font-size: 14px;
    color: #909399;
    span {
      display: inline-block;
      position: relative;
      padding-left: 15px;
      &::before {
        content: '';
        width: 0px;
        height: 0px;
        border: 5px solid transparent;
        border-top: 6px solid #909399;
        position: absolute;
        top: 9px;
        left: 0px;
      }
    }
    &:hover {
      color: #409eff;
      span::before {
        border-top-color: #409eff;
      }
    }
    &.is-fold {
      span::before {
        border-top: 0px solid transparent;
        border-bottom: 6px solid #909399;
      }
      &:hover {
        color: #409eff;
        span::before {
          border-bottom-color: #409eff;
        }
      }
    }
  }
}
</style>
