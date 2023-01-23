import react__default, { ReactNode } from 'react';

interface HoverableProps {
    onHoverIn?: () => void;
    onHoverOut?: () => void;
    children: ((isHovered: boolean) => ReactNode) | ReactNode;
}
declare function Hoverable({ onHoverIn, onHoverOut, children }: HoverableProps): react__default.DetailedReactHTMLElement<{
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onResponderGrant: () => void;
    onResponderRelease: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
}, HTMLElement>;

export { Hoverable, HoverableProps };
