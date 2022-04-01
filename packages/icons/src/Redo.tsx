import React from "react";

export const Redo = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 7v6h-6'/>
          <path  d='M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7'/>
        </svg>
    );
  }
);