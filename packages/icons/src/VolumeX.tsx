import React from "react";

export const VolumeX = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='11 5 6 9 2 9 2 15 6 15 11 19 11 5'/>
          <line  x1='23' y1='9' x2='17' y2='15'/>
          <line  x1='17' y1='9' x2='23' y2='15'/>
        </svg>
    );
  }
);