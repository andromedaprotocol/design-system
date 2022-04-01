import React from "react";

export const AlignHorizontalSpaceAround = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='9' y='7' width='6' height='10' rx='2'/>
          <path  d='M4 22V2'/>
          <path  d='M20 22V2'/>
        </svg>
    );
  }
);