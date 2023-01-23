import { Size, Ratio } from '../types.js';
import 'react-native';

declare const toPx: (value: Size) => number;
declare const toDecimal: (value: Ratio | number) => number;

export { toDecimal, toPx };
