import { Ratio, Size } from "../types";

export const toPx = (value: Size): number => {
  if (typeof value === 'number') return value;

  const [_, val, unit] = value.split(/([0-9]+)/);

  const valueAsFloat = parseFloat(val);

  switch (unit) {
    case 'em':
      return valueAsFloat * 16;
    case 'rem':
      return valueAsFloat * 16;
    case 'cm':
      return (valueAsFloat * 96) / 2.54;
    case 'mm':
      return (valueAsFloat * 96) / 2.54 / 10;
    case 'in':
      return valueAsFloat * 96;
    case 'pt':
      return valueAsFloat * 72;
    case 'pc':
      return (valueAsFloat * 72) / 12;
    default:
      return valueAsFloat;
  }
};

export const toDecimal = (value: Ratio | number): number => {
  if (typeof value === 'number') return value;

  const [width, height] = value.split('/');

  return +width / +height;
};
