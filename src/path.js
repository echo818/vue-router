module.exports = function(router){
	router.map({
		'/': {
			component: require('./view/app.vue')
		},
		'/foo': {
			component: require('./view/foo.vue')
		},
		'/bar': {
			component: require('./view/bar.vue'),
			subRoutes: {
				'/': {
					component: require('./view/app.vue')
				},
				'/sub': {
					component: require('./view/sub.vue')
				},
				'/sup': {
					component: require('./view/sup.vue')
				}
			}
		},
		'/main': {
			component: require('./view/main.vue')
		}
	})
}