const path = require("path");
const webpackConfig = require("../webpack.dev");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
  // https://storybook.js.org/docs/react/builders/webpack#using-your-existing-config
  webpackFinal: async (config) => {
    return {
      ...config,
      output: {
        ...config.output,
        path: path.resolve(__dirname, "../sb_dist"),
      },
      module: {
        ...config.module,
        rules: [
          ...webpackConfig.module.rules,
          {
            test: /\.mdx?$/,
            use: [
              {
                loader: "@mdx-js/loader",
                options: {},
              },
            ],
          },
          {
            test: /(.*\.)?stories\.tsx$/,
            loader: "@storybook/source-loader",
          },
        ],
      },
      resolve: {
        plugins: [...webpackConfig.resolve.plugins],
        extensions: [
          ...config.resolve.extensions,
          ...webpackConfig.resolve.extensions,
        ],
        alias: {
          ...config.resolve.alias,
          ...webpackConfig.resolve.alias,
        },
      },
    };
  },
};
