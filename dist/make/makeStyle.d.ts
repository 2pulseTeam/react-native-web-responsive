import { NativeStyle, DeclarativeStyle, RNsponsiveFinalTheme } from '../types.js';
import 'react-native';

declare const makeStyle: <S extends NativeStyle>(style: DeclarativeStyle<S, RNsponsiveFinalTheme>) => S;

export { makeStyle };
