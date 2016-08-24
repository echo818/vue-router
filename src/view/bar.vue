<template>
	<p>This is Bar!</p>
	<p>$route.path: {{$route.path}}</p>
	<a v-link="{path: '/bar/sub'}">Go to Sub</a>
	<a v-link="{path: '/bar/sup'}">Go to sup</a>
	<router-view></router-view>
</template>

<script>
module.exports = {
	
}
</script>