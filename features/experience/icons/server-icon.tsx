import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ServerIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M24,22a4,4,0,1,1,4-4A4,4,0,0,1,24,22Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,24,16Z"
          fill="#b3b3b3"
        />
        <path
          d="M24,19A21.024,21.024,0,0,0,3,40v1H45V40A21.024,21.024,0,0,0,24,19Z"
          fill="#e6e6e6"
        />
        <path
          d="M24,9a1,1,0,0,1-1-1V2a1,1,0,0,1,2,0V8A1,1,0,0,1,24,9Z"
          fill="#e86c60"
        />
        <path
          d="M14,13a1,1,0,0,1-1-1V6a1,1,0,0,1,2,0v6A1,1,0,0,1,14,13Z"
          fill="#e86c60"
        />
        <path
          d="M34,13a1,1,0,0,1-1-1V6a1,1,0,0,1,2,0v6A1,1,0,0,1,34,13Z"
          fill="#e86c60"
        />
        <path
          d="M11.369,36a1,1,0,0,1-.9-1.431,15.06,15.06,0,0,1,7.1-7.088,1,1,0,0,1,.858,1.807,13.045,13.045,0,0,0-6.157,6.143A1,1,0,0,1,11.369,36Z"
          fill="#fff"
        />
        <path
          d="M2,41H46a1,1,0,0,1,1,1v0a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4v0a1,1,0,0,1,1-1Z"
          fill="#5b5b5b"
        />
      </g>
    </svg>
  );
}

export default ServerIcon;
