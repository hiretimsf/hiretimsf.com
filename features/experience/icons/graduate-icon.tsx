import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GraduateIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M24,43c-7.29,0-13-3.075-13-7V23c0-0.553,0.448-1,1-1h24c0.552,0,1,0.447,1,1v13C37,39.925,31.29,43,24,43z"
          fill="#444444"
        />
        <path
          d="M44,35c-0.552,0-1-0.447-1-1V19c0-0.553,0.448-1,1-1s1,0.447,1,1v15C45,34.553,44.552,35,44,35z"
          fill="#444444"
        />
        <path
          d="M24,31c-0.165,0-0.33-0.041-0.479-0.122l-22-12C1.2,18.703,1,18.366,1,18s0.2-0.703,0.521-0.878l22-12 c0.299-0.162,0.659-0.162,0.958,0l22,12C46.8,17.297,47,17.634,47,18s-0.2,0.703-0.521,0.878l-22,12C24.33,30.959,24.165,31,24,31z"
          fill="#5B5B5B"
        />
      </g>
    </svg>
  );
}

export default GraduateIcon;
