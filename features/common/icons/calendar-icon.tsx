import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M7 5H41C43.76 5 46 7.24 46 10V18H2V10C2 7.24 4.24 5 7 5Z"
          fill="url(#nc-ui-7-0_linear_219_158)"
        />
        <path
          d="M2 18H46V41C46 43.76 43.76 46 41 46H7C4.24 46 2 43.76 2 41V18Z"
          fill="url(#nc-ui-7-1_linear_219_158)"
        />
        <path
          d="M13 10C12.448 10 12 9.552 12 9V2C12 1.448 12.448 1 13 1C13.552 1 14 1.448 14 2V9C14 9.552 13.552 10 13 10Z"
          fill="url(#nc-ui-7-2_linear_219_158)"
        />
        <path
          d="M35 10C34.448 10 34 9.552 34 9V2C34 1.448 34.448 1 35 1C35.552 1 36 1.448 36 2V9C36 9.552 35.552 10 35 10Z"
          fill="url(#nc-ui-7-3_linear_219_158)"
        />
        <path
          d="M17 32H11C10.4477 32 10 32.4477 10 33V39C10 39.5523 10.4477 40 11 40H17C17.5523 40 18 39.5523 18 39V33C18 32.4477 17.5523 32 17 32Z"
          fill="url(#nc-ui-7-4_linear_219_158)"
        />
        <path
          d="M17 22H11C10.4477 22 10 22.4477 10 23V29C10 29.5523 10.4477 30 11 30H17C17.5523 30 18 29.5523 18 29V23C18 22.4477 17.5523 22 17 22Z"
          fill="url(#nc-ui-7-5_linear_219_158)"
        />
        <path
          d="M27 32H21C20.4477 32 20 32.4477 20 33V39C20 39.5523 20.4477 40 21 40H27C27.5523 40 28 39.5523 28 39V33C28 32.4477 27.5523 32 27 32Z"
          fill="url(#nc-ui-7-6_linear_219_158)"
        />
        <path
          d="M27 22H21C20.4477 22 20 22.4477 20 23V29C20 29.5523 20.4477 30 21 30H27C27.5523 30 28 29.5523 28 29V23C28 22.4477 27.5523 22 27 22Z"
          fill="url(#nc-ui-7-7_linear_219_158)"
        />
        <path
          d="M37 22H31C30.4477 22 30 22.4477 30 23V29C30 29.5523 30.4477 30 31 30H37C37.5523 30 38 29.5523 38 29V23C38 22.4477 37.5523 22 37 22Z"
          fill="url(#nc-ui-7-8_linear_219_158)"
        />
        <defs>
          <linearGradient
            id="nc-ui-7-0_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="5"
            y2="18"
          >
            <stop stopColor="#5B5E71" />
            <stop offset="1" stopColor="#393A46" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-1_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="18"
            y2="46"
          >
            <stop stopColor="#E0E0E6" />
            <stop offset="1" stopColor="#C2C3CD" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-2_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="13"
            x2="13"
            y1="1"
            y2="10"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-3_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="35"
            x2="35"
            y1="1"
            y2="10"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-4_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="14"
            x2="14"
            y1="32"
            y2="40"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-5_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="14"
            x2="14"
            y1="22"
            y2="30"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-6_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="32"
            y2="40"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-7_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="22"
            y2="30"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
          <linearGradient
            id="nc-ui-7-8_linear_219_158"
            gradientUnits="userSpaceOnUse"
            x1="34"
            x2="34"
            y1="22"
            y2="30"
          >
            <stop stopColor="#A2A3B4" />
            <stop offset="1" stopColor="#83849B" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default CalendarIcon;
