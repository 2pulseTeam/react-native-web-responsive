import {
  getOrientation
} from "./chunk-ZVXVA5V6.js";
import {
  toDecimal,
  toPx
} from "./chunk-6FAXX25M.js";

// src/utils/isMediaQueryActive.ts
import { Platform } from "react-native";
var isMediaQueryActive = (mediaQuery) => {
  const { platforms, ...queries } = mediaQuery;
  return (width, height) => {
    const isTargeted = (platforms || ["all"]).some((target) => target === Platform.OS || target === "all");
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

export {
  isMediaQueryActive
};
