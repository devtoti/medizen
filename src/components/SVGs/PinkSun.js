import * as React from "react";

const SvgPinkSun = (props) => (
  <svg
    width={526}
    height={526}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={263} cy={263} r={263} fill="url(#pink-sun_svg__a)" />
    <circle cx={263} cy={263} r={215} fill="url(#pink-sun_svg__b)" />
    <defs>
      <linearGradient
        id="pink-sun_svg__a"
        x1={263}
        y1={0}
        x2={263}
        y2={526}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1EDCD" />
        <stop offset={1} stopColor="#EE8288" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="pink-sun_svg__b"
        x1={263}
        y1={48}
        x2={263}
        y2={478}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EE8288" />
        <stop offset={1} stopColor="#EE8288" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgPinkSun;
