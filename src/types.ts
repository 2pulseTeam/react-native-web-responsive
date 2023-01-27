import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type Size = number | `${number}${Unit}`;

export type Ratio = number | `${number}/${number}`;

export type Orientation = 'landscape' | 'portrait';

export type Platform = 'all' | 'web' | 'android' | 'ios' | 'windows' | 'macos';

export type Unit = 'em' | 'rem' | 'cm' | 'mm' | 'in' | 'pt' | 'pc' | 'px';

export type PseudoState = {
  isHovered: boolean;
};

export type Children = React.ReactNode | React.ReactNode[];

export type NativeStyle = ViewStyle | ImageStyle | TextStyle;

export type DeclarativeStyle<S extends NativeStyle, T extends BaseTheme = RNsponsiveFinalTheme> = {
  mediaQueries?: {
    target: MediaQuery | keyof T['mediaQueries'];
    declarations: DeclarativeStyle<S>;
  }[];
} & S;

export type ResponsiveComponent<P, C> = {
  children?: Children;
  extraStyle?: NativeStyle;
} & P &
  C;

export type MediaQuery = {
  platforms?: Platform[];
  minWidth?: Size;
  maxWidth?: Size;
  minHeight?: Size;
  maxHeight?: Size;
  minRatio?: Ratio;
  maxRatio?: Ratio;
  orientation?: Orientation;
};

export type FunctionStyleProps<P> = {
  props: P;
  theme: RNsponsiveFinalTheme;
  utils: PseudoState;
};

export type FunctionStyle<P, S extends DeclarativeStyle<NativeStyle>> = (props: FunctionStyleProps<P>) => S;

export type BaseTheme = {
  colors?: Record<string, string | Record<string, string>>;
  fonts?: Record<string, string | Record<string, string>>;
  elevations?: Record<string, string | number | Record<string, string>>;
  sizes?: Record<string, string | number | Record<string, string>>;
  gradients?: Record<string, string | Record<string, string>>;
  breaks?: Record<string, string | number | Record<string, string | number>>;
  mediaQueries?: Record<string, MediaQuery>;
};

export interface RNsponsiveCustomTheme {}

export interface RNsponsiveFinalTheme extends RNsponsiveCustomTheme {}
