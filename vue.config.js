const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set("vue$", "vue/dist/vue.esm-bundler.js");
  },
  transpileDependencies: true,
  publicPath: "/hotel-app-vue/",
  base: "/hotel-app-vue/",
});
