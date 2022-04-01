import React from "react";

export const Languages = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M5 8l6 6'/>
          <path  d='M4 14l6-6 2-3'/>
          <path  d='M2 5h12'/>
          <path  d='M7 2h1'/>
          <path  d='M22 22l-5-10-5 10'/>
          <path  d='M14 18h6'/>
        </svg>
    );
  }
);