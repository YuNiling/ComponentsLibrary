import { defineConfig } from 'vite';
import * as path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import Markdown from 'vite-plugin-md';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@packages': path.resolve(__dirname, '../packages'),
      '@src': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    eslintPlugin({
      cache: false, // 禁用eslint缓存
    }),
    Markdown(),
  ],
});
