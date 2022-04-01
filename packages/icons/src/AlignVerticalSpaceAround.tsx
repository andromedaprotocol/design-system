import React from "react";

export const AlignVerticalSpaceAround = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='7' y='9' width='10' height='6' rx='2'/>
          <path  d='M22 20H2'/>
          <path  d='M22 4H2'/>
        </svg>
    );
  }
);