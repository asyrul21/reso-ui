const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: path.resolve(__dirname, "src/library/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    globalObject: "this",
    library: {
      name: "reso-ui",
      type: "umd",
    },
  },
});
