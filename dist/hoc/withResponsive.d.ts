import { NativeStyle, DeclarativeStyle, RNsponsiveFinalTheme, FunctionStyle, ResponsiveComponent } from '../types.js';
import { ViewProps, StyleProp } from 'react-native';
import react__default from 'react';

declare const withResponsive: <S extends NativeStyle, P extends ViewProps>(Component: react__default.ComponentType<{
    style?: StyleProp<S>;
}>) => <C>(styleAsObjectOrFunc: DeclarativeStyle<S, RNsponsiveFinalTheme> | FunctionStyle<C, DeclarativeStyle<S, RNsponsiveFinalTheme>>) => react__default.ForwardRefExoticComponent<react__default.PropsWithoutRef<ResponsiveComponent<P, C>> & react__default.RefAttributes<react__default.LegacyRef<unknown>>>;

export { withResponsive };
