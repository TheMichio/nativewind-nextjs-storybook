# NextJS / Nativewind Storybook transpile reporuduction repo

# Installation

please run:

`yarn install`

to install the pacakges.

# Dev

To run the nextjs dev server please run:

`yarn dev`

# Storybook Dev

To run the storybook dev please run:

`yarn storybook`

# Storybook Build

To build the storybook please run:
`yarn build-storybook`

# Storybook Preview

To preview the storybook build please run:
`npx http-server storybook-static`

# Fixed Issue

In `src/components/heading` the `Heading` component was not being transpiled correctly by Storybook. And now it's transpiled correctly.

For the react-native-web setup usually these configs are needed:

- aliasing react-native to react-native-web
- forcing the use of the web version of react-native components buy usiing `.web` extensions.
- transpiling the react-native components to be compatible with web.
