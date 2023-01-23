import { Platform } from "react-native";
import { MediaQuery, Ratio, Size } from "../types";
import { toDecimal, toPx } from "./units";
import { getOrientation } from "./getOrientation";

export const isMediaQueryActive = (mediaQuery: MediaQuery) => {
  const { platforms, ...queries } = mediaQuery;

  return (width: number, height: number) => {

    const isTargeted = (platforms || ['all']).some(target => target === Platform.OS || target === 'all')

    if(!isTargeted) {
      return false;
    }

    return Object.entries(queries)
      .every(([rule, value]) => {
        switch (rule as keyof MediaQuery) {
          case "maxWidth":
            return width <= toPx(value as Size);
          case "minWidth":
            return width >= toPx(value as Size);

          case "maxHeight":
            return height <= toPx(value as Size);
          case "minHeight":
            return height >= toPx(value as Size);

          case "maxRatio":
            return width / height <= toDecimal(value as Ratio);
          case "minRatio":
            return width / height >= toDecimal(value as Ratio);

          case "orientation":
            return value === getOrientation(width, height);

          default:
            return false;
        }
    });
  }
}