import {
  isMediaQueryActive
} from "./chunk-LT3SIQIS.js";

// src/utils/transformDeclarativeToNativeStyle.ts
var transformDeclarativeToNativeStyle = (style) => {
  return (width, height, theme) => {
    return (style?.mediaQueries || []).reduce((acc, { target, declarations }) => {
      const mediaQuery = typeof target === "string" ? theme.mediaQueries?.[target] : target;
      if (!mediaQuery)
        return acc;
      if (isMediaQueryActive(mediaQuery)(width, height)) {
        acc = {
          ...acc,
          ...declarations,
          ...transformDeclarativeToNativeStyle(declarations)(width, height, theme)
        };
      }
      return acc;
    }, style);
  };
};

export {
  transformDeclarativeToNativeStyle
};
