export default [
    { name: 'bar-4-a', path: '/bar-4/a', component: () => import(/* webpackChunkName: "bar-4-a" */'./views/a.vue'), meta: { title: 'bar-4-a测试' } },
    { name: 'bar-4-b', path: '/bar-4/b', component: () => import(/* webpackChunkName: "bar-4-b" */'./views/b.vue'), meta: { title: 'bar-4-b测试' } },
    { name: 'bar-4-c', path: '/bar-4/c', component: () => import(/* webpackChunkName: "bar-4-c" */'./views/c.vue'), meta: { title: 'bar-4-c测试' } },
    { name: 'bar-4-d', path: '/bar-4/d', component: () => import(/* webpackChunkName: "bar-4-d" */'./views/d.vue'), meta: { title: 'bar-4-d测试' } },
    { name: 'bar-4-list', path: '/bar-4/list', component: () => import(/* webpackChunkName: "bar-4-list" */'./views/list.vue'), meta: { title: 'bar-4-list测试' } }
]