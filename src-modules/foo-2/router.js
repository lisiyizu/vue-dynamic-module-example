export default [
    { name: 'foo-2-a', path: '/foo-2/a', component: () => import(/* webpackChunkName: "foo-2-a" */'./views/a.vue'), meta: { title: 'foo-2-a测试' } },
    { name: 'foo-2-b', path: '/foo-2/b', component: () => import(/* webpackChunkName: "foo-2-b" */'./views/b.vue'), meta: { title: 'foo-2-b测试' } },
    { name: 'foo-2-c', path: '/foo-2/c', component: () => import(/* webpackChunkName: "foo-2-c" */'./views/c.vue'), meta: { title: 'foo-2-c测试' } },
    { name: 'foo-2-d', path: '/foo-2/d', component: () => import(/* webpackChunkName: "foo-2-d" */'./views/d.vue'), meta: { title: 'foo-2-d测试' } },
    { name: 'foo-2-list', path: '/foo-2/list', component: () => import(/* webpackChunkName: "foo-2-list" */'./views/list.vue'), meta: { title: 'foo-2-list测试' } }
]