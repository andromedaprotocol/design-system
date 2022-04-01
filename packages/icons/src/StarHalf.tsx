import React from "react";

export const StarHalf = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2'/>
        </svg>
    );
  }
);