import * as React from "react";
import { SVGProps } from "react";

const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.055 9H3a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M6 1.935V3.5A2.5 2.5 0 0 0 8.5 6H9a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.064M13 18.488V16a2 2 0 0 1 2-2h3.064M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#111827"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGlobe;

