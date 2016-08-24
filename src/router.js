import Vue from 'vue'
import VueRouter from 'vue-router'
import Path from './path.js'


Vue.config.devtools = true


Vue.use(VueRouter)


var App = Vue.extend({})

var router = new VueRouter()

Path(router)

// router.on('/',{
// 	component: {
// 		template: '<div>router on</div>'
// 	}
// })

// router.go('/foo')

router.start(App,'#app')