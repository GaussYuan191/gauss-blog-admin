import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0',
    port: 9090,
    // 是否开启 https
    https: false,
  },
  base:'./',  
});
