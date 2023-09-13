const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set("vue$", "vue/dist/vue.esm-bundler.js");
  },
  transpileDependencies: true,
  publicPath: "/kavinkumar.hotel.github.io/",
  base: "/hotel-app-vue/",
});
