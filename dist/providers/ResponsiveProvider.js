"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/providers/ResponsiveProvider.tsx
var ResponsiveProvider_exports = {};
__export(ResponsiveProvider_exports, {
  RNsponsiveContext: () => RNsponsiveContext,
  RNsponsiveProvider: () => RNsponsiveProvider,
  useRNsponsiveContext: () => useRNsponsiveContext
});
module.exports = __toCommonJS(ResponsiveProvider_exports);
var import_react = __toESM(require("react"));
var RNsponsiveContext = import_react.default.createContext({});
RNsponsiveContext.displayName = "RNsponsiveContext";
function useRNsponsiveContext() {
  return import_react.default.useContext(RNsponsiveContext);
}
function RNsponsiveProvider(props) {
  const { theme, children } = props;
  const context = (0, import_react.useMemo)(() => ({ theme }), [theme]);
  return <RNsponsiveContext.Provider value={context}>{children}</RNsponsiveContext.Provider>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RNsponsiveContext,
  RNsponsiveProvider,
  useRNsponsiveContext
});
