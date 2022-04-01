import React from "react";

export const Keyboard = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='4' width='20' height='16' rx='2' ry='2'/>
          <path  d='M6 8h.001'/>
          <path  d='M10 8h.001'/>
          <path  d='M14 8h.001'/>
          <path  d='M18 8h.001'/>
          <path  d='M8 12h.001'/>
          <path  d='M12 12h.001'/>
          <path  d='M16 12h.001'/>
          <path  d='M7 16h10'/>
        </svg>
    );
  }
);