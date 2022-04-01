import React from "react";

export const CloudHail = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'/>
          <path  d='M16 14v2'/>
          <path  d='M8 14v2'/>
          <path  d='M16 20h0'/>
          <path  d='M8 20h0'/>
          <path  d='M12 16v2'/>
          <path  d='M12 22h0'/>
        </svg>
    );
  }
);