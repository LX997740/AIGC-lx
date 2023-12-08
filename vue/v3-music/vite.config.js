import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath , URL} from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //配置短路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
