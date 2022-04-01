import React from "react";

export const Minus = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='5' y1='12' x2='19' y2='12'/>
        </svg>
    );
  }
);