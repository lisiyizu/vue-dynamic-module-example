const VirtualModulesPlugin = require('webpack-virtual-modules');
const fs = require('fs');
const path = require('path');

// 获取所有模块
const getModulesCount = () => fs.readdirSync('./src-modules/').length;
// 获取编译模块
const modules = process.env.npm_config_module || '';
// 返回模块虚拟
let buildDynamicModules = [];
if (modules && process.env.NODE_ENV === 'development') {  // 开发环境
    buildDynamicModules = modules.split(',').map((module, index) => {
        console.log(`编译模块(${index + 1})：${module}\n`);
        fs.access(path.join(`./src-modules/${module}/index.js`), function (err) {
            if (err) {
                console.log(`\n\n注意：${module} 模块不存在!\n`);
                process.exit(0);
            }
        });
        return `require.context("@modules/${module}", false, /index\.js$/)`
    });
} else {  // 正式环境 或 未指定编译模块
    console.log(`全部模块，总共：${getModulesCount()} 个，开发环境建议采用模块化按需编译方式！\n`);
    buildDynamicModules.push(`require.context("../src-modules/", true, /index\.js$/)`);
}
// 创建虚拟模块文件（hack）
const virtualModules = new VirtualModulesPlugin({
    'node_modules/vue-dynamic-modules.js': `module.exports = [${buildDynamicModules.join(',')}];`
});

module.exports = {
    configureWebpack: config => {
        config.plugins.push(virtualModules);
        if (process.env.NODE_ENV === 'production') {
            // 生产环境配置...
        } else {
            // 开发环境配置...
            config.resolve = {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                    'vue$': 'vue/dist/vue.esm.js',
                    '@': path.join(__dirname, './src'),
                    '@modules': path.join(__dirname, './src-modules'),
                    'assets': path.join(__dirname, './src/assets')
                }
            };
            config.optimization = {
                removeAvailableModules: false
            };
        }
    }
}