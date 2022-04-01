import React from "react";

export const CornerRightDown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='10 15 15 20 20 15'/>
          <path  d='M4 4h7a4 4 0 014 4v12'/>
        </svg>
    );
  }
);