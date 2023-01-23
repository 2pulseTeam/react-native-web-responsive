"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/transformDeclarativeToNativeStyle.ts
var transformDeclarativeToNativeStyle_exports = {};
__export(transformDeclarativeToNativeStyle_exports, {
  transformDeclarativeToNativeStyle: () => transformDeclarativeToNativeStyle
});
module.exports = __toCommonJS(transformDeclarativeToNativeStyle_exports);

// src/utils/isMediaQueryActive.ts
var import_react_native = require("react-native");

// src/utils/units.ts
var toPx = (value) => {
  if (typeof value === "number")
    return value;
  const [_, val, unit] = value.split(/([0-9]+)/);
  const valueAsFloat = parseFloat(val);
  switch (unit) {
    case "em":
      return valueAsFloat * 16;
    case "rem":
      return valueAsFloat * 16;
    case "cm":
      return valueAsFloat * 96 / 2.54;
    case "mm":
      return valueAsFloat * 96 / 2.54 / 10;
    case "in":
      return valueAsFloat * 96;
    case "pt":
      return valueAsFloat * 72;
    case "pc":
      return valueAsFloat * 72 / 12;
    default:
      return valueAsFloat;
  }
};
var toDecimal = (value) => {
  if (typeof value === "number")
    return value;
  const [width, height] = value.split("/");
  return +width / +height;
};

// src/utils/getOrientation.ts
var getOrientation = (width, height) => {
  return width > height ? "landscape" : "portrait";
};

// src/utils/isMediaQueryActive.ts
var isMediaQueryActive = (mediaQuery) => {
  const { platforms, ...queries } = mediaQuery;
  return (width, height) => {
    const isTargeted = (platforms || ["all"]).some((target) => target === import_react_native.Platform.OS || target === "all");
    if (!isTargeted) {
      return false;
    }
    return Object.entries(queries).every(([rule, value]) => {
      switch (rule) {
        case "maxWidth":
          return width <= toPx(value);
        case "minWidth":
          return width >= toPx(value);
        case "maxHeight":
          return height <= toPx(value);
        case "minHeight":
          return height >= toPx(value);
        case "maxRatio":
          return width / height <= toDecimal(value);
        case "minRatio":
          return width / height >= toDecimal(value);
        case "orientation":
          return value === getOrientation(width, height);
        default:
          return false;
      }
    });
  };
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  transformDeclarativeToNativeStyle
});
