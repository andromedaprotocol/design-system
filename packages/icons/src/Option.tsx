import React from "react";

export const Option = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 3h6l6 18h6'/>
          <path  d='M14 3h7'/>
        </svg>
    );
  }
);