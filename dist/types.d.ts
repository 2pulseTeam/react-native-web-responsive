import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

type Size = number | `${number}${Unit}`;
type Ratio = number | `${number}/${number}`;
type Orientation = 'landscape' | 'portrait';
type Platform = 'all' | 'web' | 'android' | 'ios' | 'windows' | 'macos';
type Unit = 'em' | 'rem' | 'cm' | 'mm' | 'in' | 'pt' | 'pc' | 'px';
type PseudoState = {
    isHovered: boolean;
};
type Children = React.ReactNode | React.ReactNode[];
type NativeStyle = ViewStyle | ImageStyle | TextStyle;
type DeclarativeStyle<S extends NativeStyle, T extends BaseTheme = RNsponsiveFinalTheme> = {
    mediaQueries?: {
        target: MediaQuery | keyof T['mediaQueries'];
        declarations: DeclarativeStyle<S>;
    }[];
} & S;
type ResponsiveComponent<P, C> = {
    children?: Children;
    _style?: NativeStyle;
} & P & C;
type MediaQuery = {
    platforms?: Platform[];
    minWidth?: Size;
    maxWidth?: Size;
    minHeight?: Size;
    maxHeight?: Size;
    minRatio?: Ratio;
    maxRatio?: Ratio;
    orientation?: Orientation;
};
type FunctionStyleProps<P> = {
    props: P;
    theme: RNsponsiveFinalTheme;
    utils: PseudoState;
};
type FunctionStyle<P, S extends DeclarativeStyle<NativeStyle>> = (props: FunctionStyleProps<P>) => S;
type BaseTheme = {
    colors?: Record<string, string | Record<string, string>>;
    fonts?: Record<string, string | Record<string, string>>;
    elevations?: Record<string, string | number | Record<string, string>>;
    sizes?: Record<string, string | number | Record<string, string>>;
    gradients?: Record<string, string | Record<string, string>>;
    breaks?: Record<string, string | number | Record<string, string | number>>;
    mediaQueries?: Record<string, MediaQuery>;
};
interface RNsponsiveCustomTheme {
}
interface RNsponsiveFinalTheme extends RNsponsiveCustomTheme {
}

export { BaseTheme, Children, DeclarativeStyle, FunctionStyle, FunctionStyleProps, MediaQuery, NativeStyle, Orientation, Platform, PseudoState, RNsponsiveCustomTheme, RNsponsiveFinalTheme, Ratio, ResponsiveComponent, Size, Unit };
