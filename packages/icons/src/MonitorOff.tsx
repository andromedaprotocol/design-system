import React from "react";

export const MonitorOff = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 17H4a2 2 0 01-2-2V5c0-1.5 1-2 1-2'/>
          <path  d='M22 15V5a2 2 0 00-2-2H9'/>
          <path  d='M8 21h8'/>
          <path  d='M12 17v4'/>
          <path  d='M2 2l20 20'/>
        </svg>
    );
  }
);