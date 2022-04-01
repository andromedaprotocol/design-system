import React from "react";

export const Cloudy = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17.5 21a4.5 4.5 0 100-9h-1.8A7 7 0 109 21h8.5z'/>
          <path  d='M22 10c0-1.5-1.5-3-3.5-3H17c-.7-2.3-2.9-4-5.4-4-2.7 0-5 2-5.5 4.5'/>
        </svg>
    );
  }
);