export default [
    { name: 'foo-3-a', path: '/foo-3/a', component: () => import(/* webpackChunkName: "foo-3-a" */'./views/a.vue'), meta: { title: 'foo-3-a测试' } },
    { name: 'foo-3-b', path: '/foo-3/b', component: () => import(/* webpackChunkName: "foo-3-b" */'./views/b.vue'), meta: { title: 'foo-3-b测试' } },
    { name: 'foo-3-c', path: '/foo-3/c', component: () => import(/* webpackChunkName: "foo-3-c" */'./views/c.vue'), meta: { title: 'foo-3-c测试' } },
    { name: 'foo-3-d', path: '/foo-3/d', component: () => import(/* webpackChunkName: "foo-3-d" */'./views/d.vue'), meta: { title: 'foo-3-d测试' } },
    { name: 'foo-3-list', path: '/foo-3/list', component: () => import(/* webpackChunkName: "foo-3-list" */'./views/list.vue'), meta: { title: 'foo-3-list测试' } }
]