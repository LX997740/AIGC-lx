<template>
  <div class="goods">
    <div class="goods-content">
      <div class="menu-warpper" ref="menuWarpper">
        <ul>
          <li
            class="menu"
            v-for="(menu, index) in goodsData.Goods"
            :key="menu.index"
            @click="selectMenu(index)"
            :class="{ current: index === current }"
          >
            <span class="text">
              <support-icon :size="3" v-if="menu.type !== -1" :type="menu.type">
              </support-icon>
              {{ menu.name }}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-warpper" ref="foodsWarpper">
        <ul>
          <!-- 一个菜系 -->
          <li
            class="food-list"
            v-for="(foods, index) in goodsData.Goods"
            :key="index"
            ref="foodList"
          >
            <h1 class="title">{{ foods.name }}</h1>
            <!-- 一道道菜 -->
            <ul>
              <li
                class="food-item"
                v-for="(food, index) in foods.foods"
                :key="index"
              >
                <div class="pic">
                  <img :src="food.image" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldPrice !== ''"
                      >￥{{ food.oldPrice }}</span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-warpper">购物车</div>
  </div>
</template>

<script setup>
import SupportIcon from "@/components/support-icon/Support-Icon.vue";
import { useGoodsStore } from "../../store/Goods";
import { ref, onMounted, computed } from "vue";
import BScroll from "@better-scroll/core";

const goodsData = useGoodsStore();

const foodsScroll = ref({});
const scrollY = ref();
const foodList = ref([]);
const listHeight = ref([]);

function betterScroll() {
  new BScroll(this.$refs.menuWarpper, {
    click: true,
  });
  foodsScroll.value = new BScroll(this.$refs.foodsWarpper, {
    click: true,
    scrollY: true,
    probeType: 3,
  });
  foodList.value = this.$refs.foodList;
  //给右侧容器监听滚动事件
  foodsScroll.value.on("scroll", (pos) => {
    Math.round(Math.abs(pos.y));
    scrollY.value = Math.round(Math.abs(pos.y));
  });
}

function selectMenu(i) {
  current.value = i;
  foodsScroll.value.scrollToElement(this.$refs.foodList[i], 300);
}

function _calculateHeight() {
  let height = 0;
  listHeight.value.push(height);
  Array.from(foodList).forEach((li) => {
    height += li.offsetHeight;
    listHeight.value.push(height);
  });
  console.log(listHeight);
}

const current = computed(() => {
  //随着右侧滚动this.scrollY ,返回不同的下标
  for (let i = 0; i < listHeight.value.length; i++) {
    const h1 = listHeight[i];
    const h2 = listHeight[i + 1];
    if (!h2 || (scrollY.value >= h1 && scrollY.value < h2)) {
      return i;
    }
  }
  return 0;
});

onMounted(async () => {
  await goodsData.getGoods();
  betterScroll;
  _calculateHeight;
});
</script>

<style lang="less" scoped>
@import "../../common/style/variable.less";

.goods {
  position: absolute;
  width: 100%;
  bottom: 46px;
  top: 177px;
  overflow: hidden;

  &-content {
    display: flex;
    height: 100%;

    .menu-warpper {
      flex: 0 0 80px;
      background: @color-background-ssss;
      // overflow: scroll;

      .menu {
        padding: 0 14px;
        font-size: @fontsize-small;
        height: 54px;

        display: flex;
        align-items: center;
        justify-content: center;

        &.current {
          background: @color-white;
          font-weight: 700;
        }
      }
    }

    .foods-warpper {
      flex: 1;

      .title {
        height: 26px;
        line-height: 26px;
        font-size: @fontsize-small;
        color: rgb(147, 153, 159);
        background: @color-background-ssss;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      }

      .food-item {
        display: flex;
        padding: 18px;

        .pic {
          flex: 0 0 57px;
          margin-right: 10px;

          img {
            width: 100%;
          }
        }

        .content {
          flex: 1;

          .name {
            font-size: @fontsize-medium;
            color: rgb(7, 17, 27);
            margin: 2px 0 8px 0;
          }

          .desc,
          .extra {
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            margin-bottom: 8px;
            line-height: 10px;

            .count {
              margin-right: 12px;
            }
          }

          .price {
            font-weight: 700;
            line-height: 10px;

            .now {
              font-size: @fontsize-medium;
              color: @color-red;
              margin-right: 8px;
            }

            .old {
              font-size: @fontsize-small-s;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }

  .cart-warpper {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: #aaa;
  }
}
</style>
