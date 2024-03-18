import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";
import webpackConfig from "../webpack.dev";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/actions",
    "@storybook/links",
  ],
  docs: {
    autodocs: true,
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {},
  } as any,
  webpackFinal: async (config: Configuration) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...webpackConfig.module.rules],
      },
      resolve: {
        plugins: [...webpackConfig.resolve.plugins],
        extensions: [
          ...(config?.resolve?.extensions || []),
          ...(webpackConfig.resolve.extensions || []),
        ],
        alias: {
          ...(config?.resolve?.alias || []),
          ...(webpackConfig.resolve.alias || []),
        },
      },
    };
  },
};

export default config;
