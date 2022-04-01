import React from "react";

export const Lasso = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 22a5 5 0 01-2-4'/>
          <path  d='M3.3 14A6.8 6.8 0 012 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 01-5-1'/>
          <path  d='M5 18a2 2 0 100-4 2 2 0 000 4z'/>
        </svg>
    );
  }
);