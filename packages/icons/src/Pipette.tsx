import React from "react";

export const Pipette = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 22l2-2h3l7-7'/>
          <path  d='M4 20v-3l7-7'/>
          <path  d='M14.29 13.3a1 1 0 001.41 0l.8-.8c.27-.27.27-.72 0-1s-.28-.72 0-1l4.08-4.08a2 2 0 000-2.83l-.17-.17a2 2 0 00-2.83 0L13.5 7.51c-.28.27-.73.27-1 0s-.73-.28-1 0l-.8.79a1 1 0 000 1.41l3.59 3.59z'/>
        </svg>
    );
  }
);