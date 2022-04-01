import React from "react";

export const Shield = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/>
        </svg>
    );
  }
);