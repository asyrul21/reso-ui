const path = require("path");

module.exports = {
  cache: false,
  module: {
    rules: [
      /* Styles / CSS and SCSS */
      {
        test: /\.(css|scss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
            },
          },
          // Translates CSS into CommonJS
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
  resolve: {
    plugins: [],
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
