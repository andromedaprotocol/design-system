import React from "react";

export const Edit2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z'/>
        </svg>
    );
  }
);