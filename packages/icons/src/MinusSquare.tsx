import React from "react";

export const MinusSquare = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <line  x1='8' y1='12' x2='16' y2='12'/>
        </svg>
    );
  }
);