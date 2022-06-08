import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="logo_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 500 500"
    style={{
      enableBackground: "new 0 0 500 500",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <style>{".logo_svg__st2{fill:#fff}.logo_svg__st3{fill:#e06970}"}</style>
    <path
      className="logo_svg__st2"
      d="M377.23 335.99H122.77c-46.56 0-84.3-37.74-84.3-84.3v-3.37c0-46.56 37.74-84.3 84.3-84.3h254.46c46.56 0 84.3 37.74 84.3 84.3v3.37c0 46.55-37.74 84.3-84.3 84.3z"
    />
    <path
      className="logo_svg__st3"
      d="M250 335.99h127.23c46.56 0 84.3-37.74 84.3-84.3v-3.37c0-46.56-37.74-84.3-84.3-84.3H250c32.52-.01 32.52 171.97 0 171.97z"
    />
    <circle className="logo_svg__st3" cx={160.16} cy={250} r={27.04} />
    <circle className="logo_svg__st2" cx={363.82} cy={250} r={27.04} />
  </svg>
);

export default SvgLogo;
