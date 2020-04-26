export default [
    { name: 'bar-a', path: '/bar/a', component: () => import(/* webpackChunkName: "bar-a" */'./views/a.vue'), meta: { title: 'bar-a测试' } },
    { name: 'bar-b', path: '/bar/b', component: () => import(/* webpackChunkName: "bar-b" */'./views/b.vue'), meta: { title: 'bar-b测试' } },
    { name: 'bar-c', path: '/bar/c', component: () => import(/* webpackChunkName: "bar-c" */'./views/c.vue'), meta: { title: 'bar-c测试' } },
    { name: 'bar-d', path: '/bar/d', component: () => import(/* webpackChunkName: "bar-d" */'./views/d.vue'), meta: { title: 'bar-d测试' } },
    { name: 'bar-list', path: '/bar/list', component: () => import(/* webpackChunkName: "bar-list" */'./views/list.vue'), meta: { title: 'bar-list测试' } }
]