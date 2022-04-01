import React from "react";

export const Database = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <ellipse  cx='12' cy='5' rx='9' ry='3'/>
          <path  d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'/>
          <path  d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/>
        </svg>
    );
  }
);