const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "林强叔叔的小屋 ✨",
    },
  },
});
