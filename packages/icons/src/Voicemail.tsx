import React from "react";

export const Voicemail = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='5.5' cy='11.5' r='4.5'/>
          <circle  cx='18.5' cy='11.5' r='4.5'/>
          <line  x1='5.5' y1='16' x2='18.5' y2='16'/>
        </svg>
    );
  }
);