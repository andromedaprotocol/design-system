import React from "react";

export const Dice3 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <path  d='M16 8h.01'/>
          <path  d='M12 12h.01'/>
          <path  d='M8 16h.01'/>
        </svg>
    );
  }
);