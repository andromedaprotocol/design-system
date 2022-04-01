import React from "react";

export const ChevronsDownUp = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 20l5-5 5 5'/>
          <path  d='M7 4l5 5 5-5'/>
        </svg>
    );
  }
);