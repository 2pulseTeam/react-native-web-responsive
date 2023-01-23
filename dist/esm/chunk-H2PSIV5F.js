import {
  __commonJS,
  __toESM
} from "./chunk-R3PFIBHC.js";

// node_modules/fbjs/lib/ExecutionEnvironment.js
var require_ExecutionEnvironment = __commonJS({
  "node_modules/fbjs/lib/ExecutionEnvironment.js"(exports, module) {
    "use strict";
    var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM: canUseDOM2,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: canUseDOM2 && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM2 && !!window.screen,
      isInWorker: !canUseDOM2
    };
    module.exports = ExecutionEnvironment;
  }
});

// src/utils/Hoverable.tsx
var import_ExecutionEnvironment = __toESM(require_ExecutionEnvironment());
import React, { useCallback } from "react";
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
  const [isHovered, setHovered] = React.useState(false);
  const [showHover, setShowHover] = React.useState(true);
  const handleMouseEnter = useCallback(() => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn)
        onHoverIn();
      setHovered(true);
    }
  }, [isHovered, onHoverIn]);
  const handleMouseLeave = useCallback(() => {
    if (isHovered) {
      if (onHoverOut)
        onHoverOut();
      setHovered(false);
    }
  }, [isHovered, onHoverOut]);
  const handleGrant = useCallback(() => {
    setShowHover(false);
  }, []);
  const handleRelease = useCallback(() => {
    setShowHover(true);
  }, []);
  const child = typeof children === "function" ? children(showHover && isHovered) : children;
  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
    onPressIn: handleGrant,
    onPressOut: handleRelease
  });
}

export {
  Hoverable
};
