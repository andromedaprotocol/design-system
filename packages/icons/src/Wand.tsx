import React from "react";

export const Wand = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 4V2'/>
          <path  d='M15 16v-2'/>
          <path  d='M8 9h2'/>
          <path  d='M20 9h2'/>
          <path  d='M17.8 11.8L19 13'/>
          <path  d='M15 9h0'/>
          <path  d='M17.8 6.2L19 5'/>
          <path  d='M3 21l9-9'/>
          <path  d='M12.2 6.2L11 5'/>
        </svg>
    );
  }
);