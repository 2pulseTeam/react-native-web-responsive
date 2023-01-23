import { DeclarativeStyle, NativeStyle } from "../types";

export const makeStyle = <S extends NativeStyle>(style: DeclarativeStyle<S>): S => {
  return style;
}
