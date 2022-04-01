import React from "react";

export const AlignVerticalJustifyEnd = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='12' width='14' height='6' rx='2'/>
          <rect  x='7' y='2' width='10' height='6' rx='2'/>
          <path  d='M2 22h20'/>
        </svg>
    );
  }
);