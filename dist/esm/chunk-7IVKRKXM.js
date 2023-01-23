// src/utils/isDeclarativeStyle.ts
var isDeclarativeStyle = (style) => {
  return typeof style.mediaQueries !== "undefined";
};

export {
  isDeclarativeStyle
};
