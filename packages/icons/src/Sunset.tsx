import React from "react";

export const Sunset = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 10V2'/>
          <path  d='M5.2 11.2l1.4 1.4'/>
          <path  d='M2 18h2'/>
          <path  d='M20 18h2'/>
          <path  d='M17.4 12.6l1.4-1.4'/>
          <path  d='M22 22H2'/>
          <path  d='M16 6l-4 4-4-4'/>
          <path  d='M16 18a4 4 0 00-8 0'/>
        </svg>
    );
  }
);