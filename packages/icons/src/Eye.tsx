import React from "react";

export const Eye = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/>
          <circle  cx='12' cy='12' r='3'/>
        </svg>
    );
  }
);