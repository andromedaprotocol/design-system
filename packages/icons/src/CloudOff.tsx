import React from "react";

export const CloudOff = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 2l20 20'/>
          <path  d='M10 5a7 7 0 015.7 5h1.8a4.5 4.5 0 014 6.5'/>
          <path  d='M18.8 18.8c-.4.2-.8.2-1.3.2H9A7 7 0 015.8 5.8'/>
        </svg>
    );
  }
);