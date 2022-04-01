import React from "react";

export const X = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='18' y1='6' x2='6' y2='18'/>
          <line  x1='6' y1='6' x2='18' y2='18'/>
        </svg>
    );
  }
);