"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/units.ts
var units_exports = {};
__export(units_exports, {
  toDecimal: () => toDecimal,
  toPx: () => toPx
});
module.exports = __toCommonJS(units_exports);
var toPx = (value) => {
  if (typeof value === "number")
    return value;
  const [_, val, unit] = value.split(/([0-9]+)/);
  const valueAsFloat = parseFloat(val);
  switch (unit) {
    case "em":
      return valueAsFloat * 16;
    case "rem":
      return valueAsFloat * 16;
    case "cm":
      return valueAsFloat * 96 / 2.54;
    case "mm":
      return valueAsFloat * 96 / 2.54 / 10;
    case "in":
      return valueAsFloat * 96;
    case "pt":
      return valueAsFloat * 72;
    case "pc":
      return valueAsFloat * 72 / 12;
    default:
      return valueAsFloat;
  }
};
var toDecimal = (value) => {
  if (typeof value === "number")
    return value;
  const [width, height] = value.split("/");
  return +width / +height;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  toDecimal,
  toPx
});
