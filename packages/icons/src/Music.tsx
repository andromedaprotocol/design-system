import React from "react";

export const Music = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M9 18V5l12-2v13'/>
          <circle  cx='6' cy='18' r='3'/>
          <circle  cx='18' cy='16' r='3'/>
        </svg>
    );
  }
);