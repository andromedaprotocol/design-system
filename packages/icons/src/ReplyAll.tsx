import React from "react";

export const ReplyAll = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='7 17 2 12 7 7'/>
          <polyline  points='12 17 7 12 12 7'/>
          <path  d='M22 18v-2a4 4 0 00-4-4H7'/>
        </svg>
    );
  }
);