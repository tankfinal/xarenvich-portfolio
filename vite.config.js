import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 指定端口為 3000
    strictPort: true, // 如果端口被占用，不會自動嘗試下一個可用端口
    open: true // 自動打開瀏覽器
  }
})
