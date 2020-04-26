export default [
    { name: 'bar-3-a', path: '/bar-3/a', component: () => import(/* webpackChunkName: "bar-3-a" */'./views/a.vue'), meta: { title: 'bar-3-a测试' } },
    { name: 'bar-3-b', path: '/bar-3/b', component: () => import(/* webpackChunkName: "bar-3-b" */'./views/b.vue'), meta: { title: 'bar-3-b测试' } },
    { name: 'bar-3-c', path: '/bar-3/c', component: () => import(/* webpackChunkName: "bar-3-c" */'./views/c.vue'), meta: { title: 'bar-3-c测试' } },
    { name: 'bar-3-d', path: '/bar-3/d', component: () => import(/* webpackChunkName: "bar-3-d" */'./views/d.vue'), meta: { title: 'bar-3-d测试' } },
    { name: 'bar-3-list', path: '/bar-3/list', component: () => import(/* webpackChunkName: "bar-3-list" */'./views/list.vue'), meta: { title: 'bar-3-list测试' } }
]