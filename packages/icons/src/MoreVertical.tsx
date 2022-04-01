import React from "react";

export const MoreVertical = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='1'/>
          <circle  cx='12' cy='5' r='1'/>
          <circle  cx='12' cy='19' r='1'/>
        </svg>
    );
  }
);