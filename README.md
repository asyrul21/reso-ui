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

2. BannerImageContainer were removed, replaced with Hero

3. Flex Container now have Margins and Padding props

4. Loading-Component and Loading-Container has been combined to form 1 component: Loading-Container, with a _type_ prop. For Layer type (previously Component Loader), with width has been made `fit-content`. May need to change widths of table containers accordingly.

5. Popup-container renamed to Modal

6. multi-image-container renamed to Multi-Image-Viewer. [setViewedIndex] renamed to [setIndexOverride]. [getMiniImagePath] hook only passes the imageObj as argument. Any processing related to image types etc. is done by client.

7. Admin-Product-Panel - sales count logic is taken out from component, removed dependency on Product all together. rename onToggleArchive to onArchive. Admin-Product-Panel has been decomposed into several Panel primitive components. Clients _need to rewrite Admin-Product-Panel and Admin-User-Panel in reso-client using the library_.

8. Add to Cart to be rewritted using library components.

9. Generic-Button renamed to Button. [fullWidth] prop renamed to [inheritWidth]

10. Link-Button added as a variant of Button.

11. Multiselect Button to utilize library's Button component with custom width and height.

12. All components now have an optional prop _theme_

# To Be Reconstructed using library in Client

1. Admin-Product-Panel

2. Admin-User-Panel

3. Add-To-Cart

4. Update Order Status Buttons

5. Analysis Title

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
