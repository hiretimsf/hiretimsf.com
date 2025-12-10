import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WorkerIcon({ title = "badge 13", ...props }: IconProps) {
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
        <rect height="9" width="12" fill="#f5c09a" x="18" y="26" />
        <rect height="3" width="30" fill="#ee7c2f" rx="1" x="9" y="13" />
        <path
          d="M42.665,36.215,30,31a9.973,9.973,0,0,1-11.982,0L5.337,36.216A7,7,0,0,0,1,42.69V46a1,1,0,0,0,1,1H46a1,1,0,0,0,1-1V42.688A7,7,0,0,0,42.665,36.215Z"
          fill="#444"
          fillRule="evenodd"
        />
        <path
          d="M24,30c5.559,0,11.524-5.33,11.958-14H12.042C12.476,24.67,18.441,30,24,30Z"
          fill="#f8d4b9"
        />
        <path
          d="M26,1.169V1a1,1,0,0,0-1-1H23a1,1,0,0,0-1,1v.169A12.992,12.992,0,0,0,11,14H37A12.992,12.992,0,0,0,26,1.169Z"
          fill="#fa9856"
        />
        <path
          d="M27,4a1,1,0,0,0,1-1V1.642a12.753,12.753,0,0,0-2-.477V3A1,1,0,0,0,27,4Z"
          fill="#ee7c2f"
        />
        <path
          d="M21,4a1,1,0,0,0,1-1V1.165a12.753,12.753,0,0,0-2,.477V3A1,1,0,0,0,21,4Z"
          fill="#ee7c2f"
        />
        <path
          d="M23,42H19a6.006,6.006,0,0,1-6-6V33.064L9,34.709V47H23Z"
          fill="#fa9856"
        />
        <path
          d="M35,33.059V36a6.006,6.006,0,0,1-6,6H25v5H39V34.706Z"
          fill="#fa9856"
        />
        <circle cx="24" cy="9" fill="#fff" r="3" />
      </g>
    </svg>
  );
}

export default WorkerIcon;
