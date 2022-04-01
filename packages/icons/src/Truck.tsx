import React from "react";

export const Truck = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M10 17h4V5H2v12h3m15 0h2v-3.34a4 4 0 00-1.17-2.83L19 9h-5v8h1'/>
          <circle  cx='7.5' cy='17.5' r='2.5'/>
          <circle  cx='17.5' cy='17.5' r='2.5'/>
        </svg>
    );
  }
);