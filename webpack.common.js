const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  cache: false,
  module: {
    rules: [
      /* Styles / CSS and SCSS */
      {
        test: /\.(css|scss)$/i,
        use: [
          // optimize the CSS
          MiniCssExtractPlugin.loader,
          // Loads the CSS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              additionalData: '@use "vars_and_mixins" as *;',
            },
          },
        ],
      },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      vars_and_mixins: path.join(
        __dirname,
        "src/library/styles/vars_and_mixins"
      ),
      fonts: path.join(__dirname, "src/library/styles/fonts"),
    },
  },
};
