const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devtool: "source-map",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
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
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      /* SVG's */
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      /* Images and fonts */
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      /* markdown for storybooks */
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "@mdx-js/loader",
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      }),
    ],
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      vars_and_mixins: path.join(__dirname, "src/styles/vars_and_mixins"),
      fonts: path.join(__dirname, "src/styles/fonts"),
    },
  },
};
