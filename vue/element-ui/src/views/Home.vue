<template>
    <div class="common-layout">
        <el-container class="common-layout-container">
            <el-header class="common-layout-header">
                <HNav />
                <el-dropdown :hide-on-click="false">
                    <span class="el-dropdown-link">
                        欢迎{{ $route.hash.slice(1) }}
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>个人详情</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </el-header>
            <el-container class="common-layout-content">

                <el-container>
                    <el-aside class="common-layout-aside">
                        <HSlider />
                    </el-aside>
                    <el-main class="common-layout-main">
                        <HMain />
                    </el-main>

                </el-container>
                <el-footer class="common-layout-footer">
                    <HFooter />
                </el-footer>

            </el-container>
        </el-container>
    </div>
</template>

<script>
import HSlider from '@/components/HSlider.vue';
import HNav from '@/components/HNav.vue';
import HFooter from '@/components/HFooter.vue';
import HMain from '@/components/HMain.vue';

export default {
    components: { HSlider, HNav, HFooter, HMain },
}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100vh;

    .common-layout-container {
        height: 100%;

        .common-layout-header {
            height: 60px;
            background-color: #333;
            color: #fff;
            line-height: 60px;
            font-size: 25px;
            display: flex;
            justify-content: space-between;

            .el-dropdown-link {
                cursor: pointer;
                font-size: 20px;
                color: var(--el-color-primary);
                display: flex;
                align-items: center;
            }

        }

        .common-layout-content {
            height: 100%;

            .common-layout-aside {
                background-color: skyblue;
                width: 200px;
            }

            .common-layout-main {
                background-color: #fff;
                height: 100%;
            }

            .common-layout-footer {
                height: 60px;
                background-color: #333;
                color: #fff;

            }
        }
    }
}
</style>