import React from "react";

export const CheckCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M22 11.08V12a10 10 0 11-5.93-9.14'/>
          <polyline  points='22 4 12 14.01 9 11.01'/>
        </svg>
    );
  }
);