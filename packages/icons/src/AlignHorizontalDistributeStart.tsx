import React from "react";

export const AlignHorizontalDistributeStart = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='5' width='6' height='14' rx='2'/>
          <rect  x='14' y='7' width='6' height='10' rx='2'/>
          <path  d='M4 2v20'/>
          <path  d='M14 2v20'/>
        </svg>
    );
  }
);