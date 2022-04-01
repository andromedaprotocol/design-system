import React from "react";

export const Tv = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='7' width='20' height='15' rx='2' ry='2'/>
          <polyline  points='17 2 12 7 7 2'/>
        </svg>
    );
  }
);