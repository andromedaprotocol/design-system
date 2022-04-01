import React from "react";

export const Rss = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 11a9 9 0 019 9'/>
          <path  d='M4 4a16 16 0 0116 16'/>
          <circle  cx='5' cy='19' r='1'/>
        </svg>
    );
  }
);