import React from "react";

export const StretchVertical = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='2' width='6' height='20' rx='2'/>
          <rect  x='14' y='2' width='6' height='20' rx='2'/>
        </svg>
    );
  }
);