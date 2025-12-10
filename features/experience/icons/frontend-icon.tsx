import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FrontendIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M14.562 14.7501C13.872 13.8871 12.614 13.7471 11.751 14.4381L1.75 22.4381C1.276 22.8171 1 23.3921 1 24.0001C1 24.6081 1.276 25.1821 1.75 25.5621L11.75 33.5621C12.119 33.8571 12.56 34.0001 12.998 34.0001C13.585 34.0001 14.166 33.7431 14.561 33.2501C15.251 32.3871 15.111 31.1291 14.249 30.4391L6.201 24.0011L14.249 17.5631C15.111 16.8731 15.251 15.6151 14.561 14.7521V14.7501H14.562Z"
          fill="url(#nc-code-0_linear_235_116)"
        />
        <path
          d="M36.25 14.4381C35.387 13.7471 34.129 13.8871 33.439 14.7501C32.749 15.6131 32.889 16.8711 33.751 17.5611L41.799 23.9991L33.751 30.4371C32.889 31.1271 32.749 32.3851 33.439 33.2481C33.834 33.7421 34.415 33.9981 35.002 33.9981C35.44 33.9981 35.881 33.8551 36.25 33.5601L46.25 25.5601C46.724 25.1811 47 24.6061 47 23.9981C47 23.3901 46.724 22.8161 46.25 22.4361L36.25 14.4361V14.4381Z"
          fill="url(#nc-code-1_linear_235_116)"
        />
        <path
          d="M29.535 4.073C28.473 3.78 27.368 4.401 27.073 5.465L17.073 41.465C16.778 42.529 17.401 43.632 18.465 43.927C18.644 43.976 18.824 44 19.001 44C19.877 44 20.681 43.42 20.927 42.535L30.927 6.535C31.222 5.471 30.599 4.368 29.535 4.073Z"
          fill="url(#nc-code-2_linear_235_116)"
        />
        <defs>
          <linearGradient
            id="nc-code-0_linear_235_116"
            gradientUnits="userSpaceOnUse"
            x1="7.99965"
            x2="7.99965"
            y1="13.999"
            y2="34.0001"
          >
            <stop stopColor="#5B5E71" />
            <stop offset="1" stopColor="#393A46" />
          </linearGradient>
          <linearGradient
            id="nc-code-1_linear_235_116"
            gradientUnits="userSpaceOnUse"
            x1="40.0004"
            x2="40.0004"
            y1="13.999"
            y2="33.9981"
          >
            <stop stopColor="#5B5E71" />
            <stop offset="1" stopColor="#393A46" />
          </linearGradient>
          <linearGradient
            id="nc-code-2_linear_235_116"
            gradientUnits="userSpaceOnUse"
            x1="24"
            x2="24"
            y1="4.00049"
            y2="44"
          >
            <stop stopColor="#E0E0E6" />
            <stop offset="1" stopColor="#C2C3CD" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default FrontendIcon;
