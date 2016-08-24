<template>
	<div class="footer">{{ footer }}</div>
</template>

<script>
	export default {
		data () {
			return {
				footer: 'Hello,footer.vue!'
			}
		}
	}
</script>

<style>
	.footer{
		font-size:28px;
	}
</style>