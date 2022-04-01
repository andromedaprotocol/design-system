import React from "react";

export const AlarmPlus = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 21a8 8 0 100-16 8 8 0 000 16z'/>
          <path  d='M5 3L2 6'/>
          <path  d='M22 6l-3-3'/>
          <path  d='M6 19l-2 2'/>
          <path  d='M18 19l2 2'/>
          <path  d='M12 10v6'/>
          <path  d='M9 13h6'/>
        </svg>
    );
  }
);