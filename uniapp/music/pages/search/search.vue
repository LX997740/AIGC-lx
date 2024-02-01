<template>
	<view>
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar placeholder="歌曲" @input="searchInput"></uni-search-bar>
				</view>
			</template>
		</wyheader>
		<view>
			<view v-if="state.HotDetail">
				<view class="title">热门搜索</view>
				<view>
					<view
						v-for="(item, index) of state.HotDetail"
						:key="item.searchWord"
						class="hotsong"
					>
						<view>
							<text class="ids">{{ index + 1 }}</text>
							<text>{{ item.searchWord }}</text>
						</view>
						<view class="text-red-300 text-xs">
							{{ item.score.numberFormat()}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { apiSearchHotDetail, apiSearchSuggest } from '@/api/search.js';
import { useNumberFormat } from '@/utils/useNumberFormat.js'
import { reactive } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const searchInput = debounce(() => suggest(), 500);

const state = reactive({
	HotDetail: [],
	Suggest: []
});

onLoad(() => {
	getHotDetail();
});

const getHotDetail = async () => {
	const { data } = await apiSearchHotDetail();
	state.HotDetail = data.data;
	console.log(state.HotDetail);
};
</script>

<style lang="scss" scoped>
	.title{
		padding-top: 2rpx;
		padding-bottom: 1.5rpx;
		padding-left:2.5rpx ;
		padding-right: 2.5rpx;
	}
	.hotsong{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.ids{
			margin-right: 20rpx;
		}
	}
</style>
