import React from "react";

export const Copyright = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <path  d='M15 9.354a4 4 0 100 5.292'/>
        </svg>
    );
  }
);