# Installation 

```sh
yadd add https://[BITBUCKET_ACOUNT]@bitbucket.org/2pulse/react-native-web-responsive.git
```

# Usage

#### Basic usage:

```typescript
import styled from '@2pulse/responsive';

const Box = styled.View({
  alignItems: 'center',
  backgroundColor: 'gray'
});

export default () => {
  return (
    <Box>
      ....
    </Box>
  );
};

```

#### With media-queries and/or pseudos elements:

```typescript
const Text = styled.Text<Props>(({ theme }) => ({
  fontSize: 25,
  mediaQueries: [
    {
      target: { minWidth: 200, maxWidth: 500 },
      declarations: {
        color: theme.colors.secondary
      },
    }
  ],
}));
```

Supported media-queries:
- minWidth / maxWidth \
- minHeight / maxHeight \
- minRatio / maxRatio \
- orientation \

Supported pseudos elements (web only): \
- Hover

#### With props:

```typescript
type Props = {
  toggle: boolean;
};

const Text = styled.Text<Props>(({ props }) => ({
  color: props.toggle ? 'red' : 'blue',
}));

export default () => {
  return (
    <Text toggle={toggle}>
        Lorem ipsum dolor..
    </Text>
  );
};
```

#### With theme (read the "Theming" section before):

```typescript
const Text = styled.Text(({ theme }) => ({
  color: theme.colors.primary,
}));
```

#### Global style:

```typescript
import { makeStyle } from '@2pulse/responsive';

const globalStyle = makeStyle({
  textAlign: 'center'
});

const Scroll = styled.ScrollView({
    ...globalStyle,
    // Other styles
});
```

# Theming

#### Basic usage:

```typescript
// theme.ts
export const theme = makeTheme({
  colors: {
    primary: 'purple'
  },
  fonts: {},
  elevations: {},
  sizes: {},
  gradients:{},
  breaks: {},
  mediaQueries: {}
})

type MyTheme = typeof theme;

declare module '@2pulse/responsive' {
  interface RNsponsiveCustomTheme extends MyTheme { }
}
```

```typescript
// app.tsx
import {theme} from './theme';

const App = () => {
  return (
    <RNsponsiveProvider theme={theme}>
      ...
    </RNsponsiveProvider>
  );
};
```
You can also declare global custom media-queries:

```typescript
export const theme = makeTheme({
  mediaQueries: [
    smartphone: {
      minWidth: 320,
      maxWidth: 480
    }
  ]
});
```
And use it like so:

```typescript
const Text = styled.Text<Props>(({ props, theme, utils: { isHovered } }) => ({
  mediaQueries: [
    {
      target: 'smartphone',
      declarations: {
        color: isHovered ? 'blue' : 'pink',
      },
    }
  ],
}));
```

# Contributing

To use this library in development, you need to use NPM symlinks, run :

1 . In the library root folder
```sh
npm link
```

2 . In the root of the project that require the library
```sh
npm link @2pulse/responsive
```

##### Other commands


>List all linked packages
```sh
npm ls --global --depth 0 --link true
```

>Remove linked package
```sh
npm rm --global @2pulse/responsive
```
