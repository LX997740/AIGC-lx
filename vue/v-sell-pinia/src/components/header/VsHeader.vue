<template>
  <div class="header" v-if="Seller.Sellers.avatar" @click="showDetail">
    <div class="content-wrapper">
      <div class="logo">
        <img :src="Seller.Sellers.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ Seller.Sellers.name }}</span>
        </div>
        <div class="description">
          {{ Seller.Sellers.description }}/{{
            Seller.Sellers.deliveryTime
          }}分钟送达
        </div>
        <div class="support" v-if="Seller.Sellers.supports">
          <SupportIcon :size="1" :type="Seller.Sellers.supports[0].type" />
          <span class="text">{{ Seller.Sellers.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count" v-if="Seller.Sellers.supports">
        <span class="count">{{ Seller.Sellers.supports.length }}个</span>
        <i class="iconfont icon-youjiantou"> </i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ Seller.Sellers.bulletin }}</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>

    <div
      class="bg"
      :style="`background-image: url(${Seller.Sellers.avatar})`"
    ></div>

    <HeaderDetail v-show="detailShow" />
  </div>
</template>

<script setup>
import SupportIcon from "@/components/support-icon/Support-Icon.vue";
import HeaderDetail from "@/components/header-detail/Header-detail.vue";

import { onMounted, toRefs } from "vue";
import { useSellersStore } from "../../store/Seller";
import { useHeaderStore } from "../../store/HeaderDetail";

const Seller = useSellersStore();
const { showDetail } = useHeaderStore();
const { detailShow } = toRefs(useHeaderStore());

onMounted(async () => {
  await Seller.getSellers();
});
</script>

<style lang="less" scoped>
@import "../../common/style/variable.less";
@import "../../common/style/mixin.less";

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
