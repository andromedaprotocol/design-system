import React from "react";

export const Skull = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='9' cy='12' r='1'/>
          <circle  cx='15' cy='12' r='1'/>
          <path  d='M8 20v2h8v-2'/>
          <path  d='M12.5 17l-.5-1-.5 1h1z'/>
          <path  d='M16 20a2 2 0 001.56-3.25 8 8 0 10-11.12 0A2 2 0 008 20'/>
        </svg>
    );
  }
);