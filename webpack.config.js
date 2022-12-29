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
      template: path.join(__dirname, "src", "index.html"),
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
        use: ["style-loader", "css-loader", "sass-loader"],
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
      reso_layout_styles: path.join(__dirname, "src/styles/reso_layout_styles"),
      reso_theme_styles: path.join(__dirname, "src/styles/reso_theme_styles"),
      fonts: path.join(__dirname, "src/styles/fonts"),
    },
  },
};
