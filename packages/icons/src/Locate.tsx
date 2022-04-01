import React from "react";

export const Locate = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='2' x2='5' y1='12' y2='12'/>
          <line  x1='19' x2='22' y1='12' y2='12'/>
          <line  x1='12' x2='12' y1='2' y2='5'/>
          <line  x1='12' x2='12' y1='19' y2='22'/>
          <circle  cx='12' cy='12' r='7'/>
        </svg>
    );
  }
);