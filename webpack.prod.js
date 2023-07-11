const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: {
    components: path.resolve(__dirname, "src/library/components/index.ts"),
    formContainers: path.resolve(
      __dirname,
      "src/library/components/Form/Containers/index.ts"
    ),
    formInputs: path.resolve(
      __dirname,
      "src/library/components/Form/Inputs/index.ts"
    ),
    //TODO: formModular: path.resolve(
    //   __dirname,
    //   "src/library/components/Form/Modular/index.ts"
    // ),
    icons: path.resolve(__dirname, "src/library/icons/index.ts"),
    interfaces: path.resolve(__dirname, "src/library/types/index.ts"),
    hooks: path.resolve(__dirname, "src/library/hooks/index.ts"),
  },
  output: {
    // asyncChunks: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
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
