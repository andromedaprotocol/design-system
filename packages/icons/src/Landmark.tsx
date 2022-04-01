import React from "react";

export const Landmark = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='3' y1='22' x2='21' y2='22'/>
          <line  x1='6' y1='18' x2='6' y2='11'/>
          <line  x1='10' y1='18' x2='10' y2='11'/>
          <line  x1='14' y1='18' x2='14' y2='11'/>
          <line  x1='18' y1='18' x2='18' y2='11'/>
          <polygon  points='12 2 20 7 4 7'/>
        </svg>
    );
  }
);