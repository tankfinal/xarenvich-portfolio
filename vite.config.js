import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // 指定端口為 3000
    strictPort: true, // 如果端口被占用，不會自動嘗試下一個可用端口
    open: true // 自動打開瀏覽器
  },
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'], // 添加支援的圖片格式
})
