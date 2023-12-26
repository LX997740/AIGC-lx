<template>
  <div class="header" v-if="Seller.avatar" @click="showDetail">
    <div class="content-wrapper">
      <div class="logo">
        <img :src="Seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ Seller.name }}</span>
        </div>
        <div class="description">
          {{ Seller.description }}/{{ Seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="Seller.supports">
          <SupportIcon :size="1" :type="Seller.supports[0].type" />
          <span class="text">{{ Seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count" v-if="Seller.supports">
        <span class="count">{{ Seller.supports.length }}个</span>
        <i class="iconfont icon-youjiantou"> </i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ Seller.bulletin }}</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>

    <div class="bg" :style="`background-image: url(${Seller.avatar})`"></div>

    <HeaderDetail
      v-show="detailShow"
      @closeDetail="handle"
      :Detailseller="seller"
    />
  </div>
</template>

<script setup>
import SupportIcon from "@/components/support-icon/Support-Icon.vue";
import HeaderDetail from "@/components/header-detail/Header-detail.vue";

import { toRefs, onMounted } from "vue";
import { useSellersStore } from "../../store/Seller";

const { Seller } = toRefs(useSellersStore());
const { getSellers } = useSellersStore();

// const detailShow = ref(false);

// function showDetail() {
//     this.detailShow = true;
//   };
//   function handle(val) {
//     // console.log('子组件向父组件传来一个值为',val);
//     this.detailShow = val;
//   };
console.log(Seller.value);
onMounted(() => {
  getSellers();
});
</script>

<style lang="less" scoped>
@import "@/common/style/variable.less";
@import "@/common/style/mixin.less";

.header {
  position: relative;
  background: @color-background-ss;

  .content-wrapper {
    padding: 24px 12px 18px 24px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .logo {
      width: 64px;
      height: 64px;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;
      margin-left: 16px;
      color: @color-white;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          // background-image: url('./brand@2x.png');
          .bg-image("brand");
          background-size: cover;
        }

        .name {
          margin-left: 6px;
          font-size: @fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        font-size: @fontsize-small;
        margin-bottom: 8px;
      }

      .support {
        display: flex;
        align-items: center;

        .text {
          margin-left: 4px;
          font-size: @fontsize-small-s;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      text-align: center;
      background: @color-background-sss;
      border-radius: 14px;
      color: @color-white;

      display: flex;
      align-items: center;

      .count {
        font-size: @fontsize-small-s;
      }

      .iconfont {
        font-size: @fontsize-small-s;
        margin-left: 2px;
      }
    }
  }

  .bulletin-wrapper {
    color: @color-white;
    display: flex;
    height: 28px;
    padding: 0 8px;
    background-color: @color-background-sss;
    align-items: center;

    .bulletin-title {
      // width: 22px;
      flex: 0 0 22px;
      height: 12px;
      .bg-image("bulletin");
      background-size: 100% 100%;
    }

    .bulletin-text {
      flex: 1;
      margin-left: 4px;
      font-size: @fontsize-small-s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .iconfont {
      flex: 0 0 10px;
      font-size: @fontsize-small-s;
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>
