import React from "react";

export const AlignVerticalJustifyStart = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='16' width='14' height='6' rx='2'/>
          <rect  x='7' y='6' width='10' height='6' rx='2'/>
          <path  d='M2 2h20'/>
        </svg>
    );
  }
);