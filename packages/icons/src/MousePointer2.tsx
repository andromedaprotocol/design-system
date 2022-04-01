import React from "react";

export const MousePointer2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 4l7.07 17 2.51-7.39L21 11.07z'/>
        </svg>
    );
  }
);