import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ForkliftIcon({ title = "Forklift", ...props }: IconProps) {
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
          d="M29.189 7.757C29.078 7.312 28.678 7 28.219 7H15C14.448 7 14 7.448 14 8V21H8C5.239 21 3 23.239 3 26V38C3 39.105 3.895 40 5 40H31C32.105 40 33 39.105 33 38V23.123C33 23.041 32.99 22.96 32.97 22.88L29.189 7.757Z"
          fill="url(#nc-forklift-0_linear_307_37)"
        />
        <path
          d="M28.5 32C25.427 32 22.859 34.135 22.181 37H11.819C11.141 34.135 8.573 32 5.5 32C4.614 32 3.77 32.179 3 32.5V40H31C32.105 40 33 39.105 33 38V33.816C31.832 32.693 30.248 32 28.5 32Z"
          fill="url(#nc-forklift-1_linear_307_37)"
        />
        <path
          d="M46 43H36C35.447 43 35 42.553 35 42V6C35 5.447 35.447 5 36 5C36.553 5 37 5.447 37 6V41H46C46.553 41 47 41.447 47 42C47 42.553 46.553 43 46 43Z"
          fill="url(#nc-forklift-2_linear_307_37)"
        />
        <path
          d="M5.5 43C3.019 43 1 40.981 1 38.5C1 36.019 3.019 34 5.5 34C7.981 34 10 36.019 10 38.5C10 40.981 7.981 43 5.5 43Z"
          fill="url(#nc-forklift-3_linear_307_37)"
        />
        <path
          d="M28.5 43C26.019 43 24 40.981 24 38.5C24 36.019 26.019 34 28.5 34C30.981 34 33 36.019 33 38.5C33 40.981 30.981 43 28.5 43Z"
          fill="url(#nc-forklift-4_linear_307_37)"
        />
        <path
          d="M21 23C19.343 23 18 21.657 18 20V9H27.438L30.938 23H21Z"
          fill="url(#nc-forklift-5_linear_307_37)"
        />
        <defs>
          <linearGradient
            id="nc-forklift-0_linear_307_37"
            gradientUnits="userSpaceOnUse"
            x1="18"
            x2="18"
            y1="7"
            y2="40"
          >
            <stop stopColor="#F98E5E" />
            <stop offset="1" stopColor="#EA6524" />
          </linearGradient>
          <linearGradient
            id="nc-forklift-1_linear_307_37"
            gradientUnits="userSpaceOnUse"
            x1="18"
            x2="18"
            y1="32"
            y2="40"
          >
            <stop stopColor="#EA6524" />
            <stop offset="1" stopColor="#B44F18" />
          </linearGradient>
          <linearGradient
            id="nc-forklift-2_linear_307_37"
            gradientUnits="userSpaceOnUse"
            x1="41"
            x2="41"
            y1="5"
            y2="43"
          >
            <stop stopColor="#5B5E71" />
            <stop offset="1" stopColor="#393A46" />
          </linearGradient>
          <linearGradient
            id="nc-forklift-3_linear_307_37"
            gradientUnits="userSpaceOnUse"
            x1="5.5"
            x2="5.5"
            y1="34"
            y2="43"
          >
            <stop stopColor="#393A46" />
            <stop offset="1" stopColor="#17181C" />
          </linearGradient>
          <linearGradient
            id="nc-forklift-4_linear_307_37"
            gradientUnits="userSpaceOnUse"
            x1="28.5"
            x2="28.5"
            y1="34"
            y2="43"
          >
            <stop stopColor="#393A46" />
            <stop offset="1" stopColor="#17181C" />
          </linearGradient>
          <linearGradient
            id="nc-forklift-5_linear_307_37"
            gradientUnits="userSpaceOnUse"
            x1="24.469"
            x2="24.469"
            y1="9"
            y2="23"
          >
            <stop stopColor="#FDDACE" />
            <stop offset="1" stopColor="#FBAE93" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default ForkliftIcon;
