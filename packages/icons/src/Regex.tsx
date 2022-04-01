import React from "react";

export const Regex = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 3v10'/>
          <path  d='M12.67 5.5l8.66 5'/>
          <path  d='M12.67 10.5l8.66-5'/>
          <path  d='M9 17a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z'/>
        </svg>
    );
  }
);