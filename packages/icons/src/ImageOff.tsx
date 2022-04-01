import React from "react";

export const ImageOff = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 2l20 20'/>
          <path  d='M9 3h10a2 2 0 012 2v10M3.59 3.59A2 2 0 003 5v14c0 1.1.9 2 2 2h14a2 2 0 001.41-.59'/>
          <path  d='M9.56 9.56a1.5 1.5 0 01-2.12-2.12'/>
          <path  d='M21 15l-5-5M5 21l8-8'/>
        </svg>
    );
  }
);