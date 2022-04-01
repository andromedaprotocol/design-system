import React from "react";

export const ChevronsUpDown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 15l5 5 5-5'/>
          <path  d='M7 9l5-5 5 5'/>
        </svg>
    );
  }
);