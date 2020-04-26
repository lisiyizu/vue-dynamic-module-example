export default [
    { name: 'foo-a', path: '/foo/a', component: () => import(/* webpackChunkName: "foo-a" */'./views/a.vue'), meta: { title: 'foo-a测试' } },
    { name: 'foo-b', path: '/foo/b', component: () => import(/* webpackChunkName: "foo-b" */'./views/b.vue'), meta: { title: 'foo-b测试' } },
    { name: 'foo-c', path: '/foo/c', component: () => import(/* webpackChunkName: "foo-c" */'./views/c.vue'), meta: { title: 'foo-c测试' } },
    { name: 'foo-d', path: '/foo/d', component: () => import(/* webpackChunkName: "foo-d" */'./views/d.vue'), meta: { title: 'foo-d测试' } },
    { name: 'foo-list', path: '/foo/list', component: () => import(/* webpackChunkName: "foo-list" */'./views/list.vue'), meta: { title: 'foo-list测试' } }
]