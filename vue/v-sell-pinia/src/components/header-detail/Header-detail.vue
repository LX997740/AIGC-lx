<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <h1 class="name">{{ Detailseller.name }}</h1>
          <div class="star-warpper">
            <div class="star-on" v-for="i in score" :key="i"></div>
            <div class="star-off" v-for="i in 5 - score" :key="i"></div>
          </div>
        </div>

        <div class="detail-content">
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <div class="supports">
            <div
              class="support"
              v-for="support in Detailseller.supports"
              :key="support.type"
            >
              <SupportIcon :size="1" :type="support.type" />
              <span class="text">{{ support.description }}</span>
            </div>
          </div>
        </div>
        <div class="detail-bulletin">
          <div class="title">
            <div class="line"></div>
            <div class="text">公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">{{ Detailseller.bulletin }}</div>
        </div>
      </div>

      <div class="detail-close" @click.stop="closeDetail">x</div>
    </div>
  </transition>
</template>

<script>
import SupportIcon from "@/components/support-icon/Support-Icon.vue";

export default {
  data() {
    let score = Math.round(this.Detailseller.score);

    return {
      score,
    };
  },
  methods: {
    closeDetail() {
      //子父组件通讯
      this.$emit("closeDetail", false); //创建一个closeDetail事件
    },
  },
  props: {
    Detailseller: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {
    SupportIcon,
  },
  computed: {},
};
</script>

<style lang="less" scoped>
@import "@/common/style/variable.less";
@import "@/common/style/mixin.less";

.header-detail {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: @color-background-s;
  color: @color-white;
  backdrop-filter: blur(10px);
  z-index: 999;

  &.fade-enter-from,
  &fade-leave-to {
    opacity: 0;
    background: @color-background;
  }

  &.fade-enter-active,
  &fade-leave-active {
    transition: all 0.5s ease;
  }

  .detail-close {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    margin-left: -15px;
    text-align: center;
    line-height: 30px;
  }

  .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;

    .name {
      font-size: @fontsize-large;
      font-weight: bold;
      margin-bottom: 10px;
      text-align: center;
    }

    .star-warpper {
      display: flex;
      justify-content: center;
      align-items: center;

      .star-on {
        width: 40px;
        height: 38px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTY5NUIxMDc2QjdFMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTY5NUIxMDg2QjdFMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjk1QjEwNTZCN0UxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjk1QjEwNjZCN0UxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pob91EYAAAJZSURBVHjazJg7SyNRGIYn8QpaiZcINm61LgveGjeJ2Ii47IIWCv4AdxRBK7VUUHALsREstFKw1EJFccuAbKdtGkFXLbykEBaN7oLH9wyvECTOJX5J5oOHmZzbPMmcOfOdBNSyIRkdPMZc9zCVbXWhIRujQHkSdAhJwTrQm3J+ITFoUFBwBBSQEalBpQRLwI+Uz4Ms843gAKhM+VzFMt8Ijrksy4vgF9CSplyXtflBcNTjL5tTwVrQZ1PfxzZ5ExwCRTb1us7Ml2AxBZ1imG1zLqhvX8hFu5DDNLCNwBvJQinXtRDXNE0Nj9Wk2aWgjitwBK7JDctuyCVIIHF4SCc4gWOUF32RKjfyE38pnuAXOdCCWmoLhA1/xW/QE6RtJ9j0kdym5WSqxMtDkgT9YMEHcguWi6mSr/NBnWiOgxOwKJyKuYkn681jqiWnZWaJiWcyh3JJ65qv5OzWwR3Qzicq23FlXctUO14X6kNmI/EsysWta5jqMNM3ySmXn1gW5GLW2KY6fe+r7hZ0gXVBuXWOeSv1Lv4H1gQFVzmmaLIQERSMZiObiQoKRqQFC7j3kIowxxQTbAJlgoJ6rEZJwYghH1FJQbfzL+5hYY/kUvAOTPK2NfL83qFPu5TgB4et4wZoAPPgP9HnH1lnt2WtlxB861Ycg27mkedp6s9Z95VtM5o6wQxur97YTIHP4JeL/vtsO82+nuahV8Fd8AnMgkcPT6xuO8O+e17moZNgBQf9ozcw4Dsz7kxD9/3Gsc6subsSqHiPoP6Hao6S24Jr4DYfrJ+g1a7hswADAP0Eerk/kTZKAAAAAElFTkSuQmCC);
      }

      .star-off {
        width: 40px;
        height: 38px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNjg2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNjk2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDVDQkIwRDZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDVDQkIwRTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMPbBkAAAJCSURBVHjazJhLS8NAEMeTtmJVLIiPxoMi9aJUEfEievSLePLkt9GLXvTuRYSCot5UPPhAxYMWFV/UQw/F+kLr4z8wQghpdmOmJgN/NtlsZn+7m8xOYs7MLRiC1sllQfeG6alJz+sJQ9YGoG8/gCqTBGyCemzHzxJOY4KAWchkZaWcSgHGoT7beR/XRQawF0razpNcFxnAAc26UADTUJtLPdV1RAEw63Nm/xWwEcp4XM9wm9AA+xU+YtwmFEDdzvuD9BMEUHf5VI+Bp5lVkoU4x7JGLhtY9uNWH8/XK1TkkvTmOH6hEonDpxvgEErLAVBnhGMfjgE80BKfMRjFrFSIcAb3nWIWYjqLMW0OujKiY8SSw5K//b4kFWgdOo4AHDGsA67ilg/uQmVojNOm/zRKdHcAdqpKWKnBEzRRg4y7mtFsbQLuWjcOUsMVfpNqbdTHihucKlBT3FqGSjWEI9/LgCv+dScpM2ShBnAFhisH3ereOQzlBeHy7PNdai/+gs4FAc/Zp2iyYAkCavsKCzAtDWj6cao5WFMSsFU4aCfYpxigZcibFQZgyUdgt3SnWsIZ7aX70AmfD0IjCv9igClFan/JWdCTre4IuoBGPb5HyGcz71aBAKu9vY/QFnRX5ToBb0Bd0DgP1G0WA291zqWgD5s9aMkDzm633HaP7/W1zAmfgDfQtmrULkZgB7wH02x26wKqZrAeauHlWoNW/wDnzI5W2Rf5bJmdX6wPMoP0h+qQVRGMgZSc3kPDULvXo/IjwADcHoKDst/q9gAAAABJRU5ErkJggg==);
      }
    }
  }

  .detail-content {
    .title {
      display: flex;
      margin: 18px 20px 24px;
      align-items: center;
      justify-content: center;

      .line {
        flex: 1;
        height: 1px;
        background-color: @color-white;
      }

      .text {
        font-size: @fontsize-medium;
        padding: 0 12px;
      }
    }

    .supports {
      margin: 0 auto;
      width: 80%;

      .support {
        margin-bottom: 10px;

        .text {
          margin-left: 10px;
        }
      }
    }
  }

  .detail-bulletin {
    .title {
      display: flex;
      margin: 18px 20px 24px;
      align-items: center;
      justify-content: center;

      .line {
        flex: 1;
        height: 1px;
        background-color: @color-white;
      }

      .text {
        font-size: @fontsize-medium;
        padding: 0 12px;
      }
    }

    .bulletin {
      margin: 0 auto;
      width: 80%;
      font-size: @fontsize-medium;
      line-height: 24px;
    }
  }
}
</style>
