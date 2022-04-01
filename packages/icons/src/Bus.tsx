import React from "react";

export const Bus = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19 17h2l.64-2.54a6 6 0 000-2.92l-1.07-4.27A3 3 0 0017.66 5H4a2 2 0 00-2 2v10h2m10 0h-4'/>
          <circle  cx='6.5' cy='17.5' r='2.5'/>
          <circle  cx='16.5' cy='17.5' r='2.5'/>
        </svg>
    );
  }
);