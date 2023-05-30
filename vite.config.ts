import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { join } from 'path';
import reactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactJsx()],
  base: '/',
  server: {
    https: true,
    cors: true, // 默认启用并允许任何源
    proxy: {},
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  define: {
    'process.env': {},
  },
});
