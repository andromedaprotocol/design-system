import React from "react";

export const FlaskRound = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M10 2v7.31'/>
          <path  d='M14 9.3V1.99'/>
          <path  d='M8.5 2h7'/>
          <path  d='M14 9.3a6.5 6.5 0 11-4 0'/>
          <path  d='M5.58 16.5h12.85'/>
        </svg>
    );
  }
);