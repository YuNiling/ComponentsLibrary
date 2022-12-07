<template>
  <div class="service-preview">
    <section class="demo">
      <slot />
    </section>

    <div v-show="codeVisible" class="source-code">
      <pre class="language-html"><code class="language-html">{{ sourceCode }}</code></pre>
    </div>

    <div class="preview-bottom">
      <span @click="showSourceCode">{{ codeVisible ? '隐藏代码' : '查看代码' }}</span>
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
  padding: 10px;
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
    height: 40px;
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
    &:hover {
      color: #409eff;
    }
  }
}
</style>
