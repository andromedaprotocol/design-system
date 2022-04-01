import React from "react";

export const Server = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='2' width='20' height='8' rx='2' ry='2'/>
          <rect  x='2' y='14' width='20' height='8' rx='2' ry='2'/>
          <line  x1='6' y1='6' x2='6.01' y2='6'/>
          <line  x1='6' y1='18' x2='6.01' y2='18'/>
        </svg>
    );
  }
);