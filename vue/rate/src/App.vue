<script setup>

import jSide from './components/jSide.vue';
import jMain from './components/jMain.vue';
import jHead from './components/jHead.vue';
import jAdver from './components/jAdver.vue';

</script>

<template>
	<!-- <h1>Hello Vue</h1>
	<Rate /> -->
	<div class="header">
		<jHead />
	</div>
	<div class="content">
		<div class="Side">
			<jSide />
		</div>
		<div class="main">
			<jMain />
		</div>
		<div class="right">
			<jAdver />
		</div>
	</div>
</template>

<style scoped>
.header {
	width: 100%;
	height: 200px;
	background-color: red;
}
.content {
	width: 100%;
	height: 100vh;
	background-color: blue;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 20px;
}
.Side {
	width: 20%;
	height: 100%;
	background-color: gold;
}
.main {
	width: 60%;
	height: 100%;
	background-color: greenyellow;
	text-align: center;
}
.right{
	width: 20%;
	height: 100%;
	background-color: pink;
}
</style>