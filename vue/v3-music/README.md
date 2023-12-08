# vue 网易云音乐

- 界面
    npm init vite 搭建了开发脚手架
    5173端口 运行的vue项目
- 后台
    netsea
    :3001

- 前后端分离的全栈开发
- npm 换源
  - npm config set registry https://registry.npmmirror.com
  
- npm i -D 只在开发阶段用到的包 devDependencies

  
- tailwindcss 提升60%的css开发 原子化css开发
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p   初始化 
      - npx 执行安装或未安装的包
    - 声明开发目录下的所有层级中 .vue等格式文件支持 tailwindcss
        "./src/**/*.{vue,js,ts,jsx,tsx}"
	- tialwind.css 
	可以使用tailwindcss 类名

- 切页面
- 组件化思维
	- 根组件 App.vue
	- layout 组件
		- Menu
		- Header


- vite.config.js 是vite工程化的配置文件
  - alias 短路径
```js
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
```