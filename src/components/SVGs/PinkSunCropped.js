import * as React from "react";

const SvgPinkSunCropped = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 526 526"
    {...props}
  >
    <circle cx={263} cy={263} r={263} fill="url(#pink-sun-cropped_svg__a)" />
    <circle cx={263} cy={263} r={215} fill="url(#pink-sun-cropped_svg__b)" />
    <defs>
      <linearGradient
        id="pink-sun-cropped_svg__a"
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
        id="pink-sun-cropped_svg__b"
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

export default SvgPinkSunCropped;
