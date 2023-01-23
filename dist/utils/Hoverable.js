"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/fbjs/lib/ExecutionEnvironment.js
var require_ExecutionEnvironment = __commonJS({
  "node_modules/fbjs/lib/ExecutionEnvironment.js"(exports, module2) {
    "use strict";
    var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM: canUseDOM2,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: canUseDOM2 && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM2 && !!window.screen,
      isInWorker: !canUseDOM2
    };
    module2.exports = ExecutionEnvironment;
  }
});

// src/utils/Hoverable.tsx
var Hoverable_exports = {};
__export(Hoverable_exports, {
  Hoverable: () => Hoverable
});
module.exports = __toCommonJS(Hoverable_exports);
var import_react = __toESM(require("react"));
var import_ExecutionEnvironment = __toESM(require_ExecutionEnvironment());
var isEnabled = false;
if (import_ExecutionEnvironment.canUseDOM) {
  let enableHover = function() {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }
    isEnabled = true;
  }, disableHover = function() {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
      isEnabled = false;
    }
  };
  enableHover2 = enableHover, disableHover2 = disableHover;
  const HOVER_THRESHOLD_MS = 1e3;
  let lastTouchTimestamp = 0;
  document.addEventListener("touchstart", disableHover, true);
  document.addEventListener("touchmove", disableHover, true);
  document.addEventListener("mousemove", enableHover, true);
}
var enableHover2;
var disableHover2;
function isHoverEnabled() {
  return isEnabled;
}
function Hoverable({ onHoverIn, onHoverOut, children }) {
  const [isHovered, setHovered] = import_react.default.useState(false);
  const [showHover, setShowHover] = import_react.default.useState(true);
  const handleMouseEnter = (0, import_react.useCallback)(() => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn)
        onHoverIn();
      setHovered(true);
    }
  }, [isHovered, onHoverIn]);
  const handleMouseLeave = (0, import_react.useCallback)(() => {
    if (isHovered) {
      if (onHoverOut)
        onHoverOut();
      setHovered(false);
    }
  }, [isHovered, onHoverOut]);
  const handleGrant = (0, import_react.useCallback)(() => {
    setShowHover(false);
  }, []);
  const handleRelease = (0, import_react.useCallback)(() => {
    setShowHover(true);
  }, []);
  const child = typeof children === "function" ? children(showHover && isHovered) : children;
  return import_react.default.cloneElement(import_react.default.Children.only(child), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
    onPressIn: handleGrant,
    onPressOut: handleRelease
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Hoverable
});
