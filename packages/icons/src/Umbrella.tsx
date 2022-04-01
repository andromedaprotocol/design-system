import React from "react";

export const Umbrella = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7'/>
        </svg>
    );
  }
);