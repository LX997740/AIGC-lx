# 路由传参
```js
1. this.$route.push(`/home/${this.id}`)
   需要在路由配置中声明该路径可以携带参数  '/home/:user'
2. this.$router.push({ path: '/home', query: { user: this.id }})
   它会将参数以?的形式拼接在url中
3. this.$router.push({ name: 'home', params: { user: this.id }})
    需要在路由配置中声明该路径可以携带参数  '/home/:user'
4. this.$router.push({ name: 'home', hash:`#${this.id}`})
    参数前面会多一个#
```