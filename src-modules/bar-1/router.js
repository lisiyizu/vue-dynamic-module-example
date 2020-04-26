export default [
    { name: 'bar-1-a', path: '/bar-1/a', component: () => import(/* webpackChunkName: "bar-1-a" */'./views/a.vue'), meta: { title: 'bar-1-a测试' } },
    { name: 'bar-1-b', path: '/bar-1/b', component: () => import(/* webpackChunkName: "bar-1-b" */'./views/b.vue'), meta: { title: 'bar-1-b测试' } },
    { name: 'bar-1-c', path: '/bar-1/c', component: () => import(/* webpackChunkName: "bar-1-c" */'./views/c.vue'), meta: { title: 'bar-1-c测试' } },
    { name: 'bar-1-d', path: '/bar-1/d', component: () => import(/* webpackChunkName: "bar-1-d" */'./views/d.vue'), meta: { title: 'bar-1-d测试' } },
    { name: 'bar-1-list', path: '/bar-1/list', component: () => import(/* webpackChunkName: "bar-1-list" */'./views/list.vue'), meta: { title: 'bar-1-list测试' } }
]