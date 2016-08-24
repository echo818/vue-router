<template>
	<div class="header">{{ header }}</div>
</template>

<script>
	export default {
		data () {
			return {
				header: 'Hello,header.vue'
			}
		}
	}
</script>

<style>
	.header{
		font-size: 32px;
		color: #f00;
	}
</style>