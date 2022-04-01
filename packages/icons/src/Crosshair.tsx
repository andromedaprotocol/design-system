import React from "react";

export const Crosshair = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='22' y1='12' x2='18' y2='12'/>
          <line  x1='6' y1='12' x2='2' y2='12'/>
          <line  x1='12' y1='6' x2='12' y2='2'/>
          <line  x1='12' y1='22' x2='12' y2='18'/>
        </svg>
    );
  }
);