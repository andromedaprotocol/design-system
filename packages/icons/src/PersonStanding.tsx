import React from "react";

export const PersonStanding = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='5' r='1'/>
          <path  d='M9 20l3-6 3 6'/>
          <path  d='M6 8l6 2 6-2'/>
          <path  d='M12 10v4'/>
        </svg>
    );
  }
);