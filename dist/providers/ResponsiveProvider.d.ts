import react__default from 'react';
import { RNsponsiveFinalTheme, BaseTheme } from '../types.js';
import 'react-native';

declare const RNsponsiveContext: react__default.Context<{
    theme: (RNsponsiveFinalTheme & BaseTheme);
}>;
declare function useRNsponsiveContext(): {
    theme: (RNsponsiveFinalTheme & BaseTheme);
};
type Props = {
    theme: RNsponsiveFinalTheme;
    children: react__default.ReactNode;
};
declare function RNsponsiveProvider(props: Props): JSX.Element;

export { RNsponsiveContext, RNsponsiveProvider, useRNsponsiveContext };
