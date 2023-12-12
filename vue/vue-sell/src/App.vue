<template>
	<Header :seller="sellerData" />
	<router-view />
</template>

<script>
import Header from '@/components/header/Header.vue'
import { getSeller } from '@/api'
export default {
	components: {
		Header,
	},
	data() {
		return {
			sellerData: {

			}
		}
	},
	created() {
		getSeller().then(res => {
			console.log(res)
			this.sellerData = res
		})
	}
}
</script>
<style lang="less"></style>
