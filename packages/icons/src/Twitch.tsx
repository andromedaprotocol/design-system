import React from "react";

export const Twitch = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'/>
        </svg>
    );
  }
);