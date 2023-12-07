<template>
    <div class="login">
        <div class="login-warp">
            <h3>登录</h3>
            <div class="item">
                <span>账号:</span>
                <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="item">
                <span>密码:</span>
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: 'admin',
            password: '123'
        }
    },
    methods: {
        login() {
            //获取用户输入的账号密码 再发起请求传给后端
            if (this.username === '' || this.password === '') {
                console.log('请输入账号密码')
                return
            }
            else {
                console.log('登录成功');
                //用JS控制路由的跳转
                // this.$router.push(`/home/${this.username}`)
                // this.$router.push({path:'/home',query:{username:this.username}})
                // this.$router.push({name:'home',params:{username:this.username}})
                this.$router.push({path:'home',hash:`#${this.username}`})

            }
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background: #aaa;

    display: flex;
    justify-content: center;
    align-items: center;

    .login-warp {
        width: 400px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 100px #fff;
        padding: 20px;
        // box-sizing: border-box;
        font-size: 30px;

        h3 {
            text-align: center;
            margin-bottom: 20px;
        }

        .item {
            display: flex;
            margin-top: 20px;

            input {
                flex: 1;
                padding: 0 5px;
                margin-left: 10px;
                font-size: 20px;
            }

            button {
                flex: 1;
                font-size: 24px;

                cursor: pointer;

                background: #000;
                color: #fff;
                border: none;
                border-radius: 500px;
                padding: 10px 0;
                margin-top: 10px;
            }
        }
    }
}
</style>