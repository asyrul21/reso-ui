const path = require("path");
const WebpackBaseConfig = require("./webpack.config");

module.exports = {
  ...WebpackBaseConfig,
  mode: "production",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    ...WebpackBaseConfig.output,
  },
  plugins: [],
  devtool: undefined,
  devServer: undefined,
  module: {
    rules: [...WebpackBaseConfig.module.rules],
  },
  resolve: {
    plugins: [...WebpackBaseConfig.resolve.plugins],
    extensions: [...WebpackBaseConfig.resolve.extensions],
    alias: {
      ...WebpackBaseConfig.resolve.alias,
    },
  },
};
