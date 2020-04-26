export default [
    { name: 'foo-1-a', path: '/foo-1/a', component: () => import(/* webpackChunkName: "foo-1-a" */'./views/a.vue'), meta: { title: 'foo-1-a测试' } },
    { name: 'foo-1-b', path: '/foo-1/b', component: () => import(/* webpackChunkName: "foo-1-b" */'./views/b.vue'), meta: { title: 'foo-1-b测试' } },
    { name: 'foo-1-c', path: '/foo-1/c', component: () => import(/* webpackChunkName: "foo-1-c" */'./views/c.vue'), meta: { title: 'foo-1-c测试' } },
    { name: 'foo-1-d', path: '/foo-1/d', component: () => import(/* webpackChunkName: "foo-1-d" */'./views/d.vue'), meta: { title: 'foo-1-d测试' } },
    { name: 'foo-1-list', path: '/foo-1/list', component: () => import(/* webpackChunkName: "foo-1-list" */'./views/list.vue'), meta: { title: 'foo-1-list测试' } }
]