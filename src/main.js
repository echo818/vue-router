import Vue from 'vue'
import App from './view/app'

Vue.config.devtools = true

new Vue({
	el: 'body',
	components: { App }
})