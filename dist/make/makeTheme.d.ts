import { BaseTheme } from '../types.js';
import 'react-native';

declare const makeTheme: <T extends BaseTheme>(theme: T) => T;

export { makeTheme };
