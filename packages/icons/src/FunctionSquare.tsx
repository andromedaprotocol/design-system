import React from "react";

export const FunctionSquare = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <path  d='M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3'/>
          <path  d='M9 11.2h5.7'/>
        </svg>
    );
  }
);