import React from "react";

export const Framer = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7'/>
        </svg>
    );
  }
);