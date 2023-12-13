<template>
	<div class="goods">
		<div class="goods-content">
			<div class="menu-warpper" ref="menuWarpper">
				<ul>
					<li class="menu" v-for="(menu, index) in goodsData" :key="menu.index" @click="selectMenu(index)"
						:class="{ 'current': index === current }">

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
					<li class="food-list" v-for="(foods, index) in goodsData" :key="index" ref="foodList">
						<h1 class="title">{{ foods.name }}</h1>
						<!-- 一道道菜 -->
						<ul>
							<li class="food-item" v-for="(food, index) in foods.foods" :key="index">
								<div class="pic">
									<img :src="food.image">
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
										<span class="old" v-if="food.oldPrice !== ''">￥{{ food.oldPrice }}</span>
									</div>

								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="cart-warpper">
			购物车
		</div>
	</div>
</template>

<script>
import SupportIcon from '@/components/support-icon/Support-Icon.vue'
import { getGoods } from '@/api'
import BScroll from '@better-scroll/core'

export default {
	data() {
		return {
			goodsData: {},
			// current: 0,
			foodsScroll: {},//被BSscroll修饰过的容器
			scrollY: 0,
			foodList: [],//所有菜系的DOM
			listHeight: [],//所有菜系的高度
		}
	},

	created() {
		//获取商品数据
		getGoods().then(res => {
			// console.log(res)
			this.goodsData = res

			this.$nextTick(() => { //写在$nextTick里面的回调会在页面加载完毕后才执行
				this.betterScroll()
				this._calculateHeight()
			})
		})

	},

	components: {
		SupportIcon,
	},
	computed: {
		current() {
			//随着右侧滚动this.scrollY ,返回不同的下标
			for (let i = 0; i < this.listHeight.length; i++) {
				const h1 = this.listHeight[i]
				const h2 = this.listHeight[i + 1]
				if (!h2 || this.scrollY >= h1 && this.scrollY < h2) {
					return i
				}
			}
			return 0
		}
	},
	methods: {
		betterScroll() {
			new BScroll(this.$refs.menuWarpper, {
				click: true,
			})
			this.foodsScroll = new BScroll(this.$refs.foodsWarpper, {
				click: true,
				scrollY: true,
				probeType: 3,
			})
			this.foodList = this.$refs.foodList
			//给右侧容器监听滚动事件
			this.foodsScroll.on('scroll', pos => {
				Math.round(Math.abs(pos.y))
				// console.log(pos);
				this.scrollY = Math.round(Math.abs(pos.y))
			})
		},

		selectMenu(i) {
			this.current = i
			this.foodsScroll.scrollToElement(this.$refs.foodList[i], 300)
		},
		_calculateHeight() {
			let height = 0
			this.listHeight.push(height)
			Array.from(this.foodList).forEach(li => {
				height += li.offsetHeight
				this.listHeight.push(height)
			})
			console.log(this.listHeight)
		}
	},

}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

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