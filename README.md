# Reso UI

Home to reusable react components to Reso Applications

# Run

```bash
# storybook
npm run dev

# or

# run a single component imported in src/index.js
npm start

```

# Changes from Original

1. ImageContainer and Image are now combined to form 1 component: Image

2. BannerImageContainer were removed, replaced with Banner

3. Flex Container now have Margins and Padding props

4. All components now have an optional prop _theme_

# Development Setup

[Reference for Typescript and Webpack](https://dev.to/shivampawar/setup-react-application-using-typescript-and-webpack-2kn6)

[Jest](https://jestjs.io/docs/getting-started)

[React Webpack Typscript Jest](https://maxpolski.medium.com/react-typescript-webpack-jest-93a58c8458e5)

## 1. Typescript

1. Install

   ```bash
   npm install -D typescript ts-loader @types/node @types/react @types/react-dom
   ```

2. Create _tsconfig.json_

## 2. Webpack

1. Install

```bash
# webpack
npm install webpack webpack-cli webpack-dev-server --save-dev

# webpack plugins to be used
npm install html-webpack-plugin sass sass-loader css-loader style-loader --save-dev url-loader
```

NOTE: We dont need babel since we are using ts-loader

2. Create `webpack.config.js`

## 3. ts-lint

1. Install

```bash
npm install tslint tslint-react --save-dev
```

2. Create `tslint.json`

3. Add lint command to `Package.json` script

## 4. jest

1. Install Globally

```bash
npm intall jest --global
```

2. Install jest as devDependency

```bash
# install jest
npm install jest jest-environment-jsdom --save-dev
# use ts-jest
npm install ts-jest @types/jest --save-dev
```

3. Generate `jestConfig.json` file

```bash
jest --init
```

## 5. testing-library

1. Install

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```
