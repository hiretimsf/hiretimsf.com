import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MarketingIcon({ title = "badge 13", ...props }: IconProps) {
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
          d="M45,7H3C1.89543,7,1,7.89543,1,9v36c0,1.10457,0.89543,2,2,2h42c1.10457,0,2-0.89543,2-2V9 C47,7.89543,46.10457,7,45,7z"
          fill="#9ACCEF"
        />
        <path
          d="M36.42432,1.09424c-0.3501-0.16406-0.76562-0.11182-1.06445,0.1377L24,10.69849L12.64014,1.23193 c-0.29883-0.24951-0.71436-0.30176-1.06445-0.1377C11.22461,1.25879,11,1.61182,11,2v18c0,0.36865,0.20312,0.70752,0.52832,0.88184 C11.67578,20.96094,11.83838,21,12,21c0.19385,0,0.38721-0.05664,0.55469-0.16797L24,13.20184l11.44531,7.63019 C35.61279,20.94336,35.80615,21,36,21c0.16162,0,0.32422-0.03906,0.47168-0.11816C36.79688,20.70752,37,20.36865,37,20V2 C37,1.61182,36.77539,1.25879,36.42432,1.09424z"
          fill="#BADEFC"
        />
        <polygon fill="#5A7A84" points="17,16 22,23 26,23 31,16 24,12 " />
        <polygon fill="#335262" points="31,47 17,47 22,23 26,23 " />
        <rect height="11" width="24" fill="#75B4DB" x="12" y="1" />
      </g>
    </svg>
  );
}

export default MarketingIcon;
