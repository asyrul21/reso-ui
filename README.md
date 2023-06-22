# Reso UI (Beta/Pre-release)

PLEASE NOTE THAT THIS LIBRARY IS STILL UNDER DEVELOPMENT AND MAY STILL HAVE MISSING CRUCIAL INFORMATION

Home to reusable react components to Reso Applications.

For more information, please see our [Storybook instance](http://reso-ui-storybook.s3-website-ap-southeast-1.amazonaws.com/).

## Install

```bash
npm install reso-ui
```

## Import Components

You can import our ExampleComponent as below:

```javascript
import { Example } from "reso-ui";
```

For other components, please see our [Storybook instance](http://reso-ui-storybook.s3-website-ap-southeast-1.amazonaws.com/) for information on import statements and component properties.

## Using the Component

You can then use our ExampleComponent as below:

```jsx
import { Example } from "reso-ui";

export const SampleApp = () => {
  return (
    <Example theme="light" name="john" rootClassName="example_app_styles" />
  );
};
```

For other components, please see our [Storybook instance](http://reso-ui-storybook.s3-website-ap-southeast-1.amazonaws.com/) for information on components' usage.

# Authors' Notes

If you are not insterested in contributing, please ignore this section.

## Run

```bash
# storybook
npm run dev

# or

# run a single component imported in src/index.tsx
npm start

```

## Changes from Original

1. ImageContainer and Image are now combined to form 1 component: Image

2. BannerImageContainer were removed, replaced with Hero

3. Flex Container now have Margins and Padding props

4. Loading-Component and Loading-Container has been combined to form 1 component: Loading-Container, with a _type_ prop. For Layer type (previously Component Loader), with width has been made `fit-content`. May need to change widths of table containers accordingly.

5. Popup-container renamed to Modal

6. Banner-Image-Container renamed to Hero

7. multi-image-container renamed to Multi-Image-Viewer. [setViewedIndex] renamed to [setIndexOverride]. [getMiniImagePath] hook only passes the imageObj as argument. Any processing related to image types etc. is done by client.

8. Admin-Product-Panel - sales count logic is taken out from component, removed dependency on Product all together. rename onToggleArchive to onArchive. Admin-Product-Panel has been decomposed into several Panel primitive components. Clients _need to rewrite Admin-Product-Panel and Admin-User-Panel in reso-client using the library_.

9. Add to Cart to be rewritted using library components.

10. Generic-Button renamed to Button. [fullWidth] prop renamed to [inheritWidth]

11. Link-Button added as a variant of Button.

12. Multiselect Button to utilize library's Button component with custom width and height.

13. Collapse-Banner and Info-Banner combined to form 1 Component: Banner.

14. Dashboard/Card and Product-Card to be combined into 1 component: Card. Both of these components will need to be rewritten using library components.

15. Modal has been decomposed to 3 parts - Container, Header, Body

16. All components now have an optional prop _theme_

17. Confirmation Dialog now has `type` prop to either ask yes/no questions or just an 'OK' button. Prop `question` replaced with `header`

18. Footer is now made more generic, in which you can pass children to render whatever you want.

19. FormGroup component is now replaced with SubForm. The `heading` prop is replaced with `title`

20. InputLabel [value] prop is replaced with [descriptionSelectedKey]

## To Be Reconstructed using library in Client

1. Generic Modal for Popups that utilise libary components

2. Admin-Product-Panel

3. Admin-User-Panel

4. Add-To-Cart

5. Update Order Status Buttons

6. Analysis Title

7. Dashboard/Overview

8. Dashboard/Card

9. Product-Card

10. Reso Footer

## Development Setup

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

# Notes

1. Light theme should be default. If no dark theme style is provided, it fallbacks to Light theme

   -> Done. Hence every component MUST have a light theme.

2. provided rootClassName should override theme classNames

   -> Works, but Component imports must happen BEFORE style imports
