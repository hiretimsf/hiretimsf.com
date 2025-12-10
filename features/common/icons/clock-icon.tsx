import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockIcon({ title = "badge 13", ...props }: IconProps) {
  return (
    <svg
      height="48"
      width="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <g>
        <path
          d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
          fill="url(#nc-ui-2-0_linear_103_120)"
        />
        <path
          d="M32 25H24C23.7 25 23.4 24.8 23.2 24.6L15.2 12.6C14.9 12.1 15 11.5 15.5 11.2C16 10.9 16.6 11 16.9 11.5L24.5 23H32C32.6 23 33 23.4 33 24C33 24.6 32.6 25 32 25Z"
          fill="url(#nc-ui-2-1_linear_103_120)"
        />
        <path
          d="M23 5C23 4.4 23.4 4 24 4C24.6 4 25 4.4 25 5V9C25 9.6 24.6 10 24 10C23.4 10 23 9.6 23 9V5Z"
          fill="url(#nc-ui-2-2_linear_103_120)"
        />
        <path
          d="M9 25H5C4.4 25 4 24.6 4 24C4 23.4 4.4 23 5 23H9C9.6 23 10 23.4 10 24C10 24.6 9.6 25 9 25Z"
          fill="url(#nc-ui-2-3_linear_103_120)"
        />
        <path
          d="M25 43C25 43.6 24.6 44 24 44C23.4 44 23 43.6 23 43V39C23 38.4 23.4 38 24 38C24.6 38 25 38.4 25 39V43Z"
          fill="url(#nc-ui-2-4_linear_103_120)"
        />
        <path
          d="M43 25H39C38.4 25 38 24.6 38 24C38 23.4 38.4 23 39 23H43C43.6 23 44 23.4 44 24C44 24.6 43.6 25 43 25Z"
          fill="url(#nc-ui-2-5_linear_103_120)"
        />
        <defs>
          <linearGradient
            id="nc-ui-2-0_linear_103_120"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="1"
            y2="47"
          >
            <stop stopColor="#C5DCE7" />
            <stop offset="1" stopColor="#80B0CB" />
          </linearGradient>
          <linearGradient
            id="nc-ui-2-1_linear_103_120"
            gradientUnits="userSpaceOnUse"
            x1="24.0156"
            x2="24.0156"
            y1="11.0312"
            y2="25"
          >
            <stop stopColor="#4480A7" />
            <stop offset="1" stopColor="#32597C" />
          </linearGradient>
          <linearGradient
            id="nc-ui-2-2_linear_103_120"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="4"
            y2="44.5"
          >
            <stop stopColor="#80B0CB" />
            <stop offset="1" stopColor="#4480A7" />
          </linearGradient>
          <linearGradient
            id="nc-ui-2-3_linear_103_120"
            gradientUnits="userSpaceOnUse"
            x1="7"
            x2="7"
            y1="4"
            y2="43.5"
          >
            <stop stopColor="#80B0CB" />
            <stop offset="1" stopColor="#4480A7" />
          </linearGradient>
          <linearGradient
            id="nc-ui-2-4_linear_103_120"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="4.5"
            y2="44"
          >
            <stop stopColor="#80B0CB" />
            <stop offset="1" stopColor="#4480A7" />
          </linearGradient>
          <linearGradient
            id="nc-ui-2-5_linear_103_120"
            gradientUnits="userSpaceOnUse"
            x1="41"
            x2="41"
            y1="4.5"
            y2="44.5"
          >
            <stop stopColor="#80B0CB" />
            <stop offset="1" stopColor="#4480A7" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default ClockIcon;
