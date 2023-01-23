import {
  Hoverable
} from "./chunk-H2PSIV5F.js";
import {
  isDeclarativeStyle
} from "./chunk-7IVKRKXM.js";
import {
  transformDeclarativeToNativeStyle
} from "./chunk-PYX6SA5F.js";
import {
  useRNsponsiveContext
} from "./chunk-XUMENSW4.js";

// src/hoc/withResponsive.tsx
import { useWindowDimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
var withResponsive = (Component) => {
  return (styleAsObjectOrFunc) => {
    return React.forwardRef(({ children, ...props }, ref) => {
      const { theme } = useRNsponsiveContext();
      const { width, height } = useWindowDimensions();
      const [pseudoState, setPseudoState] = useState({
        isHovered: false
      });
      let responsiveStyle = typeof styleAsObjectOrFunc === "function" ? styleAsObjectOrFunc({
        props,
        theme,
        utils: pseudoState
      }) : styleAsObjectOrFunc;
      if (isDeclarativeStyle(responsiveStyle)) {
        responsiveStyle = transformDeclarativeToNativeStyle(responsiveStyle)(width, height, theme);
      }
      const handlePseudoState = (key, value) => {
        return () => {
          setPseudoState((prevState) => ({
            ...prevState,
            [key]: value
          }));
        };
      };
      const styleSheet = StyleSheet.create({
        mergedStyle: {
          ...responsiveStyle,
          ...props._style ?? {}
        }
      });
      return <Hoverable onHoverIn={handlePseudoState("isHovered", true)} onHoverOut={handlePseudoState("isHovered", false)}><Component style={styleSheet.mergedStyle} ref={ref} {...props}>{children}</Component></Hoverable>;
    });
  };
};

export {
  withResponsive
};
