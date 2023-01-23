import { MediaQuery } from '../types.js';
import 'react-native';

declare const isMediaQueryActive: (mediaQuery: MediaQuery) => (width: number, height: number) => boolean;

export { isMediaQueryActive };
