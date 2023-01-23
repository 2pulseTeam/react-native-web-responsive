import { NativeStyle, DeclarativeStyle, RNsponsiveFinalTheme, BaseTheme } from '../types.js';
import 'react-native';

declare const transformDeclarativeToNativeStyle: <S extends NativeStyle>(style: DeclarativeStyle<S, RNsponsiveFinalTheme>) => (width: number, height: number, theme: BaseTheme) => S;

export { transformDeclarativeToNativeStyle };
