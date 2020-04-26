export default [
    { name: 'foo-4-a', path: '/foo-4/a', component: () => import(/* webpackChunkName: "foo-4-a" */'./views/a.vue'), meta: { title: 'foo-4-a测试' } },
    { name: 'foo-4-b', path: '/foo-4/b', component: () => import(/* webpackChunkName: "foo-4-b" */'./views/b.vue'), meta: { title: 'foo-4-b测试' } },
    { name: 'foo-4-c', path: '/foo-4/c', component: () => import(/* webpackChunkName: "foo-4-c" */'./views/c.vue'), meta: { title: 'foo-4-c测试' } },
    { name: 'foo-4-d', path: '/foo-4/d', component: () => import(/* webpackChunkName: "foo-4-d" */'./views/d.vue'), meta: { title: 'foo-4-d测试' } },
    { name: 'foo-4-list', path: '/foo-4/list', component: () => import(/* webpackChunkName: "foo-4-list" */'./views/list.vue'), meta: { title: 'foo-4-list测试' } }
]