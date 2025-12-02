import type { SVGProps } from "react";

export function CheckmarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <style>
          {`
            .cls-1 {
              clip-path: url(#clippath);
            }

            .cls-2, .cls-3 {
              fill: none;
            }

            .cls-2, .cls-4 {
              stroke-width: 0px;
            }

            .cls-3 {
              stroke: #002932;
              stroke-width: 2px;
            }

            .cls-4 {
              fill: #07c4a9;
            }
          `}
        </style>
        <clipPath id="clippath">
          <rect className="cls-2" width="24" height="24" />
        </clipPath>
      </defs>
      <g className="cls-1">
        <g>
          <path
            className="cls-4"
            d="M11.9,0h.3c6.5,0,11.9,5.4,11.9,12s-5.3,12-11.9,12h-.3C5.3,24,0,18.6,0,12S5.3,0,11.9,0Z"
          />
          <path className="cls-3" d="M6,12l4,4,8-8" />
        </g>
      </g>
    </svg>
  );
}
