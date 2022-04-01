import React from "react";

export const Sigma = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18 7V4H6l6 8-6 8h12v-3'/>
        </svg>
    );
  }
);