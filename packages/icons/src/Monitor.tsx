import React from "react";

export const Monitor = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='3' width='20' height='14' rx='2' ry='2'/>
          <line  x1='8' y1='21' x2='16' y2='21'/>
          <line  x1='12' y1='17' x2='12' y2='21'/>
        </svg>
    );
  }
);