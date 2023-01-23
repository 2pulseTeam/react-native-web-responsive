// Note : https://gist.github.com/necolas/1c494e44e23eb7f8c5864a2fac66299a

import React, { useCallback, ReactNode } from 'react';
/* eslint-disable no-inner-declarations */
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

let isEnabled = false;

if (canUseDOM) {
  /**
   * Web browsers emulate mouse events (and hover states) after touch events.
   * This code infers when the currently-in-use modality supports hover
   * (including for multi-modality devices) and considers "hover" to be enabled
   * if a mouse movement occurs more than 1 second after the last touch event.
   * This threshold is long enough to account for longer delays between the
   * browser firing touch and mouse events on low-powered devices.
   */
  const HOVER_THRESHOLD_MS = 1000;
  let lastTouchTimestamp = 0;

  function enableHover() {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }

    isEnabled = true;
  }

  function disableHover() {
    lastTouchTimestamp = Date.now();
    
    if (isEnabled) {
      isEnabled = false;
    }
  }

  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('touchmove', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);
}

function isHoverEnabled(): boolean {
  return isEnabled;
}

export interface HoverableProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children: ((isHovered: boolean) => ReactNode) | ReactNode;
}

export function Hoverable({ onHoverIn, onHoverOut, children }: HoverableProps) {
  const [isHovered, setHovered] = React.useState(false);
  const [showHover, setShowHover] = React.useState(true);

  const handleMouseEnter = useCallback(() => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setHovered(true);
    }
  }, [isHovered, onHoverIn]);

  const handleMouseLeave = useCallback(() => {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setHovered(false);
    }
  }, [isHovered, onHoverOut]);

  const handleGrant = useCallback(() => {
    setShowHover(false);
  }, []);

  const handleRelease = useCallback(() => {
    setShowHover(true);
  }, []);

  const child = typeof children === 'function' ? children(showHover && isHovered) : children;

  return React.cloneElement(React.Children.only(child) as any, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
    // if child is Touchable
    onPressIn: handleGrant,
    onPressOut: handleRelease,
  });
}