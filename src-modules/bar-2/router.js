export default [
    { name: 'bar-2-a', path: '/bar-2/a', component: () => import(/* webpackChunkName: "bar-2-a" */'./views/a.vue'), meta: { title: 'bar-2-a测试' } },
    { name: 'bar-2-b', path: '/bar-2/b', component: () => import(/* webpackChunkName: "bar-2-b" */'./views/b.vue'), meta: { title: 'bar-2-b测试' } },
    { name: 'bar-2-c', path: '/bar-2/c', component: () => import(/* webpackChunkName: "bar-2-c" */'./views/c.vue'), meta: { title: 'bar-2-c测试' } },
    { name: 'bar-2-d', path: '/bar-2/d', component: () => import(/* webpackChunkName: "bar-2-d" */'./views/d.vue'), meta: { title: 'bar-2-d测试' } },
    { name: 'bar-2-list', path: '/bar-2/list', component: () => import(/* webpackChunkName: "bar-2-list" */'./views/list.vue'), meta: { title: 'bar-2-list测试' } }
]