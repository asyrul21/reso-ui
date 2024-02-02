const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/library/index.ts",
  // entry: {
  //   components: path.resolve(__dirname, "src/library/components/index.ts"),
  //   forms: path.resolve(__dirname, "src/library/forms/index.ts"),
  //   hooks: path.resolve(__dirname, "src/library/hooks/index.ts"),
  //   icons: path.resolve(__dirname, "src/library/icons/index.ts"),
  //   interfaces: path.resolve(__dirname, "src/library/interfaces/index.ts"),
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "lib.js",
    globalObject: "this",
    library: {
      name: "reso-ui",
      type: "umd",
    },
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      umd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom",
    },
  },
});
