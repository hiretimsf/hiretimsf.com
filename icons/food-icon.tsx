import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M37.409,33.343a39.541,39.541,0,0,0-26.818,0A6.985,6.985,0,0,0,6,39.916V46a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V39.916A6.985,6.985,0,0,0,37.409,33.343Z"
          fill="#e6e6e6"
        />
        <path
          d="M19,47H17V36a1,1,0,0,1,.47-.848l8.848-5.53,1.06,1.7L19,36.555Z"
          fill="#b3b3b3"
        />
        <path
          d="M32,18H16a1,1,0,0,0-1,1v5a9,9,0,0,0,18,0V19A1,1,0,0,0,32,18Z"
          fill="#eebc99"
        />
        <path
          d="M32,20H16a1,1,0,0,1-1-1V14.917A6,6,0,0,1,16,3a5.788,5.788,0,0,1,2.244.452,7.982,7.982,0,0,1,11.512,0A5.788,5.788,0,0,1,32,3a6,6,0,0,1,1,11.917V19A1,1,0,0,1,32,20Z"
          fill="#e6e6e6"
        />
        <path
          d="M21,18a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0v4A1,1,0,0,1,21,18Z"
          fill="#b3b3b3"
        />
        <path
          d="M27,18a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0v4A1,1,0,0,1,27,18Z"
          fill="#b3b3b3"
        />
        <circle cx="23.5" cy="39.5" fill="#444" r="1.5" />
      </g>
    </svg>
  );
}

export default FoodIcon;
