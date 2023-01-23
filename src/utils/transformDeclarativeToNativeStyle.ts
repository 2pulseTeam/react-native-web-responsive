import type { DeclarativeStyle, NativeStyle, BaseTheme } from '../types';
import { isMediaQueryActive } from './isMediaQueryActive';

export const transformDeclarativeToNativeStyle = <S extends NativeStyle>(style: DeclarativeStyle<S>) => {
  return (width: number, height: number, theme: BaseTheme): S => {
    return (style?.mediaQueries || []).reduce((acc, { target, declarations }) => {
      const mediaQuery = typeof target === 'string' ? theme.mediaQueries?.[target] : target;

      if (!mediaQuery) return acc;

      if (isMediaQueryActive(mediaQuery)(width, height)) {
        acc = {
          ...acc,
          ...declarations,
          ...transformDeclarativeToNativeStyle(declarations)(width, height, theme)
        }
      }

      return acc;
    }, style);
  }
}
