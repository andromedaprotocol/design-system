import React from "react";

export const RotateCw = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 2v6h-6'/>
          <path  d='M21 13a9 9 0 11-3-7.7L21 8'/>
        </svg>
    );
  }
);