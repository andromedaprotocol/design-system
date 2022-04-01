import React from "react";

export const GripHorizontal = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='9' r='1'/>
          <circle  cx='19' cy='9' r='1'/>
          <circle  cx='5' cy='9' r='1'/>
          <circle  cx='12' cy='15' r='1'/>
          <circle  cx='19' cy='15' r='1'/>
          <circle  cx='5' cy='15' r='1'/>
        </svg>
    );
  }
);