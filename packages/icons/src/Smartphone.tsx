import React from "react";

export const Smartphone = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='2' width='14' height='20' rx='2' ry='2'/>
          <path  d='M12 18h.01'/>
        </svg>
    );
  }
);