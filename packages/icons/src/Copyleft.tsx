import React from "react";

export const Copyleft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <path  d='M9 9.35a4 4 0 110 5.3'/>
        </svg>
    );
  }
);