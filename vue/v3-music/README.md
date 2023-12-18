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
- 企业级vue开发框架 element-plus pc版
  vue 是渐进式的MVVM开发框架
  element-plus是一套基于vue3.0的组件库 ,可以找到我们想要的组件

- vite 写了一段让element-plus自动引入的代码

- 通用组件
	/components/common/
	不属于特定的组件,极高的复用性 在多个项目中可以复用

- 引入图标字体库
	- 要用到哪些图标
		import { } from '@icon-park/vue-next'


- 断点调试法
	当我们开始想写项目的时刻,在github上排名前的 看不懂的地方打个断点,一路跟下去
	优秀的代码学习方法
	- 组件和数据分离 /components
		让组件更干净 template script
	- 数据统一管理 /utils  /apis
		- api.js 封装业务接口 函数名字自带解释功能
		- http.js  复用axios底层封装

- 开发文档
	- 前端要去做响应式的数据
	- 数据请求要分离到utils/api.js
	- 后端是个黑盒子
		1. 基于http
			axios 提供 
		2. 看后端给的开发文档
			/url get/post params{}
			response 什么？

	- 自己的项目
    	- laf 做后端
        	- 数据库
        	- 云函数
        	- 开发文档  亮点

- 有哪些组件
  - 父子组件
  - 页面组件
    - vue-router 放在views
  - 通用组件
    - /components/common/
  - 框架UI组件
  - 业务组件 /components

- 路由的组件流程
  - router 配置文件夹
  - views/ 页面级别组件
  - 路由接管了应用
      - 会有好多页面 , views比components级别高
  - APP.vue router-view Root.vue
  - 其他各个页面,多级路由