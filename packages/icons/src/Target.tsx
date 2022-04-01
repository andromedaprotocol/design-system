import React from "react";

export const Target = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <circle  cx='12' cy='12' r='6'/>
          <circle  cx='12' cy='12' r='2'/>
        </svg>
    );
  }
);