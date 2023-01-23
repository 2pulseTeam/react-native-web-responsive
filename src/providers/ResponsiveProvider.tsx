import React, { useMemo } from 'react';
import type { BaseTheme, RNsponsiveFinalTheme } from '../types';

export const RNsponsiveContext = React.createContext<{ theme: (RNsponsiveFinalTheme & BaseTheme) }>({} as any);

RNsponsiveContext.displayName = 'RNsponsiveContext';

export function useRNsponsiveContext() {
  return React.useContext<{ theme: (RNsponsiveFinalTheme & BaseTheme) }>(RNsponsiveContext);
}

type Props = {
  theme: RNsponsiveFinalTheme;
  children: React.ReactNode;
}

export function RNsponsiveProvider(props: Props) {
  const { theme, children } = props;

  const context = useMemo(() => ({ theme }), [theme])

  return (
    <RNsponsiveContext.Provider value={context}>
      {children}
    </RNsponsiveContext.Provider>
  )
}