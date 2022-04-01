import React from "react";

export const AlignEndVertical = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='4' width='16' height='6' rx='2'/>
          <rect  x='9' y='14' width='9' height='6' rx='2'/>
          <path  d='M22 22V2'/>
        </svg>
    );
  }
);