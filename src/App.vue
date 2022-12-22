<template>
  <div class="doc-box">
    <header>
      <div class="logo">Yl.Service</div>
      <div
        class="switch"
        :class="{
          light: theme === 'default',
          dark: theme === 'dark',
        }"
        @click="themeChange"
      >
        <i class="switch__icon"></i>
      </div>
    </header>
    <section>
      <aside>
        <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">
          {{ link.name }}
        </router-link>
      </aside>
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import ComponentList from '../packages/list.json';

const theme = ref<'default' | 'dark'>('default');

// 主题切换
const themeChange = () => {
  theme.value = theme.value === 'default' ? 'dark' : 'default';
  window.document.documentElement.setAttribute('class', theme.value);
};

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: `${item.compName} ${item.compZhName}`,
  })),
});
</script>

<style lang="scss" scoped>
.doc-box {
  min-height: 100vh;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .logo {
      padding: 15px;
      color: #409eff;
      font-family: 'Lucida Calligraphy', cursive, serif, sans-serif;
    }
  }
  section {
    display: flex;
    min-height: calc(100vh - 57px);
  }
  aside {
    width: 100px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    & > a {
      display: block;
      text-align: center;
      color: #606266;
      font-size: 13px;
      padding: 10px 0px;
      font-weight: 500;
      &.router-link-active {
        color: #409eff;
        background-color: rgba(64, 158, 255, 0.1);
      }
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
.switch {
  cursor: pointer;
  z-index: 999;
  display: inline-block;
  width: 40px;
  height: 18px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  background: #f2f2f2;
  position: relative;
  top: 15px;
  right: 15px;
  .switch__icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    overflow: hidden;
  }
  &.light {
    .switch__icon {
      background: url('./assets/images/light.png') no-repeat;
      background-size: 100% 100%;
      float: left;
      margin-top: 1px;
    }
  }
  &.dark {
    .switch__icon {
      background: url('./assets/images/dark.png') no-repeat;
      background-size: 100% 100%;
      float: right;
      border-radius: 50%;
      border: 1px solid black;
    }
  }
}
</style>
