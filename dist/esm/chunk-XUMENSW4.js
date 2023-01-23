// src/providers/ResponsiveProvider.tsx
import React, { useMemo } from "react";
var RNsponsiveContext = React.createContext({});
RNsponsiveContext.displayName = "RNsponsiveContext";
function useRNsponsiveContext() {
  return React.useContext(RNsponsiveContext);
}
function RNsponsiveProvider(props) {
  const { theme, children } = props;
  const context = useMemo(() => ({ theme }), [theme]);
  return <RNsponsiveContext.Provider value={context}>{children}</RNsponsiveContext.Provider>;
}

export {
  RNsponsiveContext,
  useRNsponsiveContext,
  RNsponsiveProvider
};
