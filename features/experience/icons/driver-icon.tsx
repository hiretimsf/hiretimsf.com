import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DriverIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M47,41l-.009-14.325a5,5,0,0,0-1.465-3.564l-2.652-2.653L39.86,11.419A5,5,0,0,0,35.117,8H12.882A5,5,0,0,0,8.14,11.418L5.127,20.455,2.479,23.081A5,5,0,0,0,1,26.631V41ZM41,30H37a1,1,0,0,1-1-1,3,3,0,0,1,3-3h4a1,1,0,0,1,1,1A3,3,0,0,1,41,30Z"
          fill="#444"
        />
        <path d="M30,8V5a3,3,0,0,0-3-3H21a3,3,0,0,0-3,3V8Z" fill="#ffe699" />
        <path
          d="M1,41H11a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V41A0,0,0,0,1,1,41Z"
          fill="#212121"
        />
        <path
          d="M37,41H47a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H38a1,1,0,0,1-1-1V41A0,0,0,0,1,37,41Z"
          fill="#212121"
        />
        <path
          d="M11,30H7a3,3,0,0,1-3-3,1,1,0,0,1,1-1H9a3,3,0,0,1,3,3A1,1,0,0,1,11,30Z"
          fill="#fff"
        />
        <path
          d="M37,30h4a3,3,0,0,0,3-3,1,1,0,0,0-1-1H39a3,3,0,0,0-3,3A1,1,0,0,0,37,30Z"
          fill="#fff"
        />
        <path
          d="M7.387,20l2.649-7.948A3,3,0,0,1,12.883,10H35.117a3,3,0,0,1,2.847,2.051L40.28,19l.333,1Z"
          fill="#949494"
        />
        <rect height="3" width="12" fill="#f7bf26" x="18" y="5" />
        <rect height="2" width="6" fill="#ee7c2f" rx="1" x="4" y="35" />
        <rect height="2" width="6" fill="#ee7c2f" rx="1" x="38" y="35" />
        <rect height="11" width="16" fill="#c8c8c8" rx="3" x="16" y="28" />
        <rect
          height="12"
          width="7"
          fill="#363636"
          rx="1"
          transform="translate(57.5 9.5) rotate(90)"
          x="20.5"
          y="27.5"
        />
      </g>
    </svg>
  );
}

export default DriverIcon;
