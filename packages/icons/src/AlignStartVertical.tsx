import React from "react";

export const AlignStartVertical = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='6' y='14' width='9' height='6' rx='2'/>
          <rect  x='6' y='4' width='16' height='6' rx='2'/>
          <path  d='M2 2v20'/>
        </svg>
    );
  }
);