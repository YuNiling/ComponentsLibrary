import baseConfig from './base.config';
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  plugins: [...(baseConfig as any).plugins],
  define: {
    'process.env': {},
  },
  build: {
    outDir: path.resolve(__dirname, '../lib'),
    lib: {
      entry: path.resolve(__dirname, '../packages/index.ts'),
      formats: ['es', 'umd'],
      name: 'YlService',
      fileName: (format) => `yl-service.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vuex'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          vuex: 'Vuex',
        },
      },
    },
  },
});
