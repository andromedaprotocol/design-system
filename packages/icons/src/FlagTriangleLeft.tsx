import React from "react";

export const FlagTriangleLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 22V2L7 7l10 5'/>
        </svg>
    );
  }
);