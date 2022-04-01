import React from "react";

export const Bold = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z'/>
          <path  d='M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z'/>
        </svg>
    );
  }
);