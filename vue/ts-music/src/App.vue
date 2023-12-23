<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useBannerStore } from './store/banner'
import { usePersonalizedStore } from './store/personalized';

const { banners } = toRefs(useBannerStore())
const { getBanners } = useBannerStore()

const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized } = usePersonalizedStore()

onMounted(async () => {
	await getBanners()
	await getPersonalized()
})

</script>

<template>
	<div>
		<ul>
			<li v-for="banner in banners" :key="banner.targetId">
				<img :src="banner.pic">
			</li>
		</ul>

		<ul>
			<li v-for="Mv in personalizedMv" :key="Mv.id">
				{{ Mv.name }}
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
