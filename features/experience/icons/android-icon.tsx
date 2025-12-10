import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AndroidIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M34.586,28.446A1.916,1.916,0,1,1,36.5,26.53a1.916,1.916,0,0,1-1.915,1.916m-21.172,0a1.916,1.916,0,1,1,1.915-1.916,1.916,1.916,0,0,1-1.915,1.916M35.273,16.908,39.1,10.277a.8.8,0,1,0-1.379-.8h0l-3.877,6.714a24.067,24.067,0,0,0-19.691,0L10.278,9.48a.8.8,0,1,0-1.379.8h0l3.828,6.632A22.6,22.6,0,0,0,1,35H47A22.6,22.6,0,0,0,35.273,16.908"
          fill="#3ddc84"
        />
      </g>
    </svg>
  );
}

export default AndroidIcon;
