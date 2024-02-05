const path = require("path");

module.exports = {
  cache: false,
  module: {
    rules: [
      /* Images */
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: ["file-loader"],
      },
      /* SVG's */
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      /* Images and fonts */
      {
        test: /\.(png|woff|woff2|eot|ttf)$/, // to fonts
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [],
    alias: {
      vars_and_mixins: path.join(
        __dirname,
        "src/library/styles/vars_and_mixins"
      ),
      fonts: path.join(__dirname, "src/library/styles/fonts"),
    },
  },
};
