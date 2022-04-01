import React from "react";

export const LayoutGrid = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='7' height='7'/>
          <rect  x='14' y='3' width='7' height='7'/>
          <rect  x='14' y='14' width='7' height='7'/>
          <rect  x='3' y='14' width='7' height='7'/>
        </svg>
    );
  }
);