import React from "react";

export const Equal = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='5' y1='9' x2='19' y2='9'/>
          <line  x1='5' y1='15' x2='19' y2='15'/>
        </svg>
    );
  }
);