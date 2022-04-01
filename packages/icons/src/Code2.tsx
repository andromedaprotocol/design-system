import React from "react";

export const Code2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18 16l4-4-4-4'/>
          <path  d='M6 8l-4 4 4 4'/>
          <path  d='M14.5 4l-5 16'/>
        </svg>
    );
  }
);