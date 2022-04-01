import React from "react";

export const GripVertical = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='9' cy='12' r='1'/>
          <circle  cx='9' cy='5' r='1'/>
          <circle  cx='9' cy='19' r='1'/>
          <circle  cx='15' cy='12' r='1'/>
          <circle  cx='15' cy='5' r='1'/>
          <circle  cx='15' cy='19' r='1'/>
        </svg>
    );
  }
);