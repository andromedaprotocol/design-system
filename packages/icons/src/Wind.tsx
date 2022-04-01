import React from "react";

export const Wind = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17.7 7.7a2.5 2.5 0 111.8 4.3H2'/>
          <path  d='M9.6 4.6A2 2 0 1111 8H2'/>
          <path  d='M12.6 19.4A2 2 0 1014 16H2'/>
        </svg>
    );
  }
);