import { NativeStyle, DeclarativeStyle, RNsponsiveFinalTheme } from '../types.js';
import 'react-native';

declare const isDeclarativeStyle: <S extends NativeStyle>(style: DeclarativeStyle<S, RNsponsiveFinalTheme>) => boolean;

export { isDeclarativeStyle };
