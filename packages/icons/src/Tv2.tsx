import React from "react";

export const Tv2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 21h10'/>
          <rect  x='2' y='3' width='20' height='14' rx='2'/>
        </svg>
    );
  }
);