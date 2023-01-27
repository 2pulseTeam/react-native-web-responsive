import {Hoverable} from '../utils/Hoverable';
import {transformDeclarativeToNativeStyle} from '../utils';
import {isDeclarativeStyle} from '../utils/isDeclarativeStyle';
import {useRNsponsiveContext} from '../providers/ResponsiveProvider';
import {StyleProp, ViewProps, useWindowDimensions, StyleSheet} from 'react-native';
import React, {ComponentType, LegacyRef, useState} from 'react';
import type {FunctionStyle, PseudoState, ResponsiveComponent, DeclarativeStyle, NativeStyle} from '../types';

export const withResponsive = <S extends NativeStyle, P extends ViewProps>(Component: ComponentType<{style?: StyleProp<S>}>) => {
  return <C,>(styleAsObjectOrFunc: FunctionStyle<C, DeclarativeStyle<S>> | DeclarativeStyle<S>) => {
    return React.forwardRef<LegacyRef<unknown>, ResponsiveComponent<P, C>>(({children, ...props}, ref) => {
      const {theme} = useRNsponsiveContext();

      const {width, height} = useWindowDimensions();

      const [pseudoState, setPseudoState] = useState<PseudoState>({
        isHovered: false,
      });

      let responsiveDeclarativeStyle =
        typeof styleAsObjectOrFunc === 'function'
          ? styleAsObjectOrFunc({
              props: props as C,
              theme,
              utils: pseudoState,
            })
          : styleAsObjectOrFunc;

      if (isDeclarativeStyle(responsiveDeclarativeStyle)) {
        responsiveDeclarativeStyle = transformDeclarativeToNativeStyle(responsiveDeclarativeStyle)(width, height, theme);
      }

      const handlePseudoState = (key: keyof PseudoState, value: boolean) => {
        return () => {
          setPseudoState(prevState => ({
            ...prevState,
            [key]: value,
          }));
        };
      };

      const {mediaQueries, ...responsiveStyle} = responsiveDeclarativeStyle;

      const styleSheet = StyleSheet.create({
        mergedStyle: {
          ...responsiveStyle,
          ...(props.extraStyle ?? {}),
        },
      });

      return (
        <Hoverable onHoverIn={handlePseudoState('isHovered', true)} onHoverOut={handlePseudoState('isHovered', false)}>
          <Component style={styleSheet.mergedStyle as StyleProp<S>} ref={ref} {...props}>
            {children}
          </Component>
        </Hoverable>
      );
    });
  };
};
