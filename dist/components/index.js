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

// src/components/index.tsx
var components_exports = {};
__export(components_exports, {
  default: () => components_default
});
module.exports = __toCommonJS(components_exports);
var import_react_native3 = require("react-native");

// src/utils/Hoverable.tsx
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

// src/utils/units.ts
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

// src/utils/isMediaQueryActive.ts
var import_react_native = require("react-native");

// src/utils/getOrientation.ts
var getOrientation = (width, height) => {
  return width > height ? "landscape" : "portrait";
};

// src/utils/isMediaQueryActive.ts
var isMediaQueryActive = (mediaQuery) => {
  const { platforms, ...queries } = mediaQuery;
  return (width, height) => {
    const isTargeted = (platforms || ["all"]).some((target) => target === import_react_native.Platform.OS || target === "all");
    if (!isTargeted) {
      return false;
    }
    return Object.entries(queries).every(([rule, value]) => {
      switch (rule) {
        case "maxWidth":
          return width <= toPx(value);
        case "minWidth":
          return width >= toPx(value);
        case "maxHeight":
          return height <= toPx(value);
        case "minHeight":
          return height >= toPx(value);
        case "maxRatio":
          return width / height <= toDecimal(value);
        case "minRatio":
          return width / height >= toDecimal(value);
        case "orientation":
          return value === getOrientation(width, height);
        default:
          return false;
      }
    });
  };
};

// src/utils/transformDeclarativeToNativeStyle.ts
var transformDeclarativeToNativeStyle = (style) => {
  return (width, height, theme) => {
    return (style?.mediaQueries || []).reduce((acc, { target, declarations }) => {
      const mediaQuery = typeof target === "string" ? theme.mediaQueries?.[target] : target;
      if (!mediaQuery)
        return acc;
      if (isMediaQueryActive(mediaQuery)(width, height)) {
        acc = {
          ...acc,
          ...declarations,
          ...transformDeclarativeToNativeStyle(declarations)(width, height, theme)
        };
      }
      return acc;
    }, style);
  };
};

// src/utils/isDeclarativeStyle.ts
var isDeclarativeStyle = (style) => {
  return typeof style.mediaQueries !== "undefined";
};

// src/providers/ResponsiveProvider.tsx
var import_react2 = __toESM(require("react"));
var RNsponsiveContext = import_react2.default.createContext({});
RNsponsiveContext.displayName = "RNsponsiveContext";
function useRNsponsiveContext() {
  return import_react2.default.useContext(RNsponsiveContext);
}

// src/hoc/withResponsive.tsx
var import_react_native2 = require("react-native");
var import_react3 = __toESM(require("react"));
var withResponsive = (Component) => {
  return (styleAsObjectOrFunc) => {
    return import_react3.default.forwardRef(({ children, ...props }, ref) => {
      const { theme } = useRNsponsiveContext();
      const { width, height } = (0, import_react_native2.useWindowDimensions)();
      const [pseudoState, setPseudoState] = (0, import_react3.useState)({
        isHovered: false
      });
      let responsiveDeclarativeStyle = typeof styleAsObjectOrFunc === "function" ? styleAsObjectOrFunc({
        props,
        theme,
        utils: pseudoState
      }) : styleAsObjectOrFunc;
      if (isDeclarativeStyle(responsiveDeclarativeStyle)) {
        responsiveDeclarativeStyle = transformDeclarativeToNativeStyle(responsiveDeclarativeStyle)(width, height, theme);
      }
      const handlePseudoState = (key, value) => {
        return () => {
          setPseudoState((prevState) => ({
            ...prevState,
            [key]: value
          }));
        };
      };
      const { mediaQueries, ...responsiveStyle } = responsiveDeclarativeStyle;
      const styleSheet = import_react_native2.StyleSheet.create({
        mergedStyle: {
          ...responsiveStyle,
          ...props.extraStyle ?? {}
        }
      });
      return <Hoverable onHoverIn={handlePseudoState("isHovered", true)} onHoverOut={handlePseudoState("isHovered", false)}><Component style={styleSheet.mergedStyle} ref={ref} {...props}>{children}</Component></Hoverable>;
    });
  };
};

// src/components/index.tsx
var components_default = {
  View: withResponsive(import_react_native3.View),
  Text: withResponsive(import_react_native3.Text),
  Modal: withResponsive(import_react_native3.Modal),
  Image: withResponsive(import_react_native3.Image),
  Switch: withResponsive(import_react_native3.Switch),
  TextInput: withResponsive(import_react_native3.TextInput),
  SafeAreaView: withResponsive(import_react_native3.SafeAreaView),
  ScrollView: withResponsive(import_react_native3.ScrollView),
  ImageBackground: withResponsive(import_react_native3.ImageBackground),
  TouchableOpacity: withResponsive(import_react_native3.TouchableOpacity),
  ActivityIndicator: withResponsive(import_react_native3.ActivityIndicator),
  KeyboardAvoidingView: withResponsive(import_react_native3.KeyboardAvoidingView),
  TouchableHighlight: withResponsive(import_react_native3.TouchableHighlight),
  Pressable: withResponsive(import_react_native3.Pressable),
  FlatList: withResponsive(import_react_native3.FlatList)
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
