import * as React from "react";

const SvgTerrain = (props) => (
  <svg
    id="terrain_svg__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    {...props}
  >
    <defs>
      <style>{".terrain_svg__cls-1{fill:none}"}</style>
    </defs>
    <path
      className="terrain_svg__cls-1"
      d="m289.85 138.9-26.18 8.75c-5.28-15-9.87-30.25-2.32-46 2.87 7.38.73 17.31 8.3 23.19 6.64 5.21 13.83 9.68 20.2 14.06ZM186.81 136.13c11.4-5.77 26.57-7.43 27.53-25.29 3.44 10.77 2.73 15.16-5.46 35.18Z"
    />
    <path d="m0 351.93 19-33.41L34.49 314l28.26-14.59 12.76-25.52 14.58-10 11.85-4.56 11.84-12.76 9.12-11.85s2.73-6.38 11.85-10 8.2-.91 17.31-8.2 10-10.94 14.59-14.59 20.16-12.76 20.16-12.76l8.89-9.17 11.05-4.6h37.36l13.26-4.55 9.53.91s6.27-4.83 10.94 3.64 12 8.57 12 8.57h16.24s.91-2.19 6.38 6.93l5.47 9.11s-1.83 3.65 4.55 11.85 12.76 10 17.32 11.85a59.19 59.19 0 0 0 9.11 2.73s4.56 10 7.3 10.94 12.79-5.44 12.79-5.44l10-2.73 4.56-.92s3.64-4.55 6.38 4.56l2.73 9.12a91.81 91.81 0 0 1 .91 13.67c0 8.2-2.73 7.29 0 11.84s6.42 11.85 6.42 11.85l8.2 11.85 7.3 9.11 15.5 1.83 18.23 5.47s8.2 9.11 13.67 12.75 15.49 11.85 15.49 11.85L500 345.86v6.07ZM0 351.93h500V500H0z" />
  </svg>
);

export default SvgTerrain;