<template>
	<div>
		<button v-on:click="onTap">Tap me!</button>
		<header-component></header-component>
		<div class="message">{{ msg }}</div>
		<footer-component></footer-component>
	</div>
</template>

<script>
	import HeaderComponent from './header'
	import FooterComponent from './footer'
	export default {
		components: {
			HeaderComponent,
			FooterComponent
		},
		data () {
			return {
				msg: 'Hello from vue-loader!'
			}
		},
		methods: {
			onTap: function(){
				alert(11);
			}
		}
	}
</script>

<style>
	.message {
		color: blue;
	}
</style>