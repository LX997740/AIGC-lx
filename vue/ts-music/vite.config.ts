import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
	// plugins: [
	// 	vue(),
	// 	AutoImport({
	// 		reslovers: [ElementPlusResolver()]
	// 	}),
	// 	Components({
	// 		reslovers: [ElementPlusResolver()]
	// 	})
	// ],
	// resolve: {
	// 	alias: {
	// 		'@': fileURLToPath(new URL('./src'))
	// 	}
	// },
	server: {
		proxy: {
			'/api': {
				target: 'http://u.ronki.moe:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
