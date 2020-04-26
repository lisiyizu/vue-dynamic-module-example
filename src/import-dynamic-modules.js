export default (vue) => {
    //  获取webpack-virtual-modules模块数据
    let dynamicModules = require('vue-dynamic-modules');

    for (const curModule of dynamicModules) {
        curModule.keys().map(key => {
            // 解析module
            const { router, store } = curModule(key).default;
            Object.keys(store).map(key => {
                // 动态添加store
                vue.$store.registerModule(key, store[key]);
            });
            // 动态添加router
            vue.$router.addRoutes(router);
        });
    }
}