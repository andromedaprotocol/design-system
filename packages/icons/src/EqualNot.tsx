import React from "react";

export const EqualNot = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='5' y1='9' x2='19' y2='9'/>
          <line  x1='5' y1='15' x2='19' y2='15'/>
          <line  x1='19' y1='5' x2='5' y2='19'/>
        </svg>
    );
  }
);