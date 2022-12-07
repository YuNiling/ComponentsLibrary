<template>
  <div class="doc-box">
    <header>
      <div class="logo">Yl.Service</div>
      <!-- <div class="theme-radio">
        <span :class="{ active: theme === 'default' }" @click="themeChange('default')">默认</span>
        <span :class="{ active: theme === 'brain' }" @click="themeChange('brain')">大脑</span>
      </div> -->
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

const theme = ref<'default' | 'brain'>('default');

// 主题切换
const themeChange = (label: 'default' | 'brain') => {
  theme.value = label;
  window.document.documentElement.setAttribute('class', label);
};

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: `${item.compName} ${item.compZhName}`,
  })),
});
</script>

<style lang="scss" scoped>
$btn-radius: 3px;
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
    border-right: 1px solid #ccc;
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
.theme-radio {
  padding: 15px;
  cursor: pointer;
  z-index: 999;

  span {
    display: inline-block;
    padding: 0px 10px;
    border: 1px solid #409eff;
    color: #111;
    font-size: 15px;
    cursor: pointer;

    &.active {
      border-color: #409eff;
      background-color: #409eff;
      color: #fff;
    }
    &:first-child {
      border-top-left-radius: $btn-radius;
      border-bottom-left-radius: $btn-radius;
    }
    &:last-child {
      border-top-right-radius: $btn-radius;
      border-bottom-right-radius: $btn-radius;
    }
  }
}
</style>
