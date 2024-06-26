import React from "react";

const dials = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
    <g transform="translate(0 0)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M30,350 a165,165 0 0,1 330 0"
      />
      <circle
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        cx="195"
        cy="350"
        r="100"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        id="knob1"
        d="M195 350 v-100"
      />
    </g>

    <g transform="translate(610 0)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M30,350 a165,165 0 0,1 330 0"
      />
      <circle
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        cx="195"
        cy="350"
        r="100"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        id="knob2"
        d="M195 350 v-100"
      />
    </g>

    <g transform="translate(0 330)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M30,350 a165,165 0 0,1 330 0"
      />
      <circle
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        cx="195"
        cy="350"
        r="100"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        id="knob3"
        d="M195 350 v-100"
      />
    </g>

    <g transform="translate(610 330)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M30,350 a165,165 0 0,1 330 0"
      />
      <circle
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        cx="195"
        cy="350"
        r="100"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        id="knob4"
        d="M195 350 v-100"
      />
    </g>
  </svg>
);

const faders = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
    <g transform="translate(0 0)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        style={{ fill: "none" }}
        d="M100 250 q5 -100 10 0 l0 550 q-5 100 -10 0 z "
      />
      <rect
        vectorEffect="non-scaling-stroke"
        id="fader1"
        className="svg light-stroke fader"
        x="30"
        y="250"
        width="150"
        height="75"
      />
    </g>
    <g transform="translate(235 0)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        style={{ fill: "none" }}
        d="M100 250 q5 -100 10 0 l0 550 q-5 100 -10 0 z "
      />
      <rect
        vectorEffect="non-scaling-stroke"
        id="fader2"
        className="svg light-stroke fader"
        x="30"
        y="250"
        width="150"
        height="75"
      />
    </g>
    <g transform="translate(470 0)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        style={{ fill: "none" }}
        d="M100 250 q5 -100 10 0 l0 550 q-5 100 -10 0 z "
      />
      <rect
        vectorEffect="non-scaling-stroke"
        id="fader3"
        className="svg light-stroke fader"
        x="30"
        y="250"
        width="150"
        height="75"
      />
    </g>
    <g transform="translate(705 0)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        style={{ fill: "none" }}
        d="M100 250 q5 -100 10 0 l0 550 q-5 100 -10 0 z "
      />
      <rect
        vectorEffect="non-scaling-stroke"
        id="fader4"
        className="svg light-stroke fader"
        x="30"
        y="250"
        width="150"
        height="75"
      />
    </g>
  </svg>
);

const badSpeaker = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="speaker_svg_element"
    viewBox="0 0 1000 1000"
  >
    <rect
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      x="25"
      y="375"
      width="200"
      height="250"
    />
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M225 375 l250 -200 l0 650 l-250 -200"
    />
    <g transform="scale(0.78) translate(630 275)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        id="confusion1"
        d="M626.9 298.74L610.8 292.99C515.79 280.73 426.9 299.89 344.14 350.46C261.38 401.03 284.75 446.63 414.25 487.24C467.89 425.17 494.33 383.79 493.56 363.1C492.41 332.07 328.05 533.22 187.82 572.3C94.33 598.35 110.04 550.46 234.94 428.62L470.57 350.46C508.89 286.86 490.11 231.69 414.25 184.94C338.39 138.2 308.89 162.34 325.75 257.36C376.32 383.03 419.62 455.06 455.63 473.45C491.65 491.84 488.97 456.59 447.59 367.7C414.64 341.65 397.78 319.43 397.01 301.03C395.86 273.45 215.4 299.89 97.01 312.53C-21.38 325.17 182.07 480.34 234.94 524.02C287.82 567.7 444.14 265.4 495.86 179.2C547.59 92.99 357.93 157.36 320 159.66C282.07 161.95 265.98 240.11 325.75 360.8C385.52 481.49 240.69 294.14 223.45 270C206.21 245.86 300.46 227.47 365.98 173.45C409.66 137.43 373.26 118.28 256.78 115.98C154.87 113.68 88.97 160.8 59.08 257.36C29.2 353.91 63.68 448.93 162.53 542.41C324.98 556.97 430.34 543.18 478.62 501.03C551.03 437.82 338.39 427.47 165.98 342.41C51.03 285.71 120.38 214.83 374.02 129.77C485.13 76.13 547.2 126.7 560.23 281.49C573.26 436.28 490.11 441.26 310.8 296.44C215.79 229 181.3 164.25 207.36 102.18C233.41 40.11 305.06 40.11 422.3 102.18C461.38 168.85 471.34 241.46 452.18 320C433.03 398.54 293.56 406.02 33.79 342.41"
      />
    </g>
    <g transform="rotate(90 320 320) scale(0.78) translate(275 -500)">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        id="confusion2"
        d="M626.9 298.74L610.8 292.99C515.79 280.73 426.9 299.89 344.14 350.46C261.38 401.03 284.75 446.63 414.25 487.24C467.89 425.17 494.33 383.79 493.56 363.1C492.41 332.07 328.05 533.22 187.82 572.3C94.33 598.35 110.04 550.46 234.94 428.62L470.57 350.46C508.89 286.86 490.11 231.69 414.25 184.94C338.39 138.2 308.89 162.34 325.75 257.36C376.32 383.03 419.62 455.06 455.63 473.45C491.65 491.84 488.97 456.59 447.59 367.7C414.64 341.65 397.78 319.43 397.01 301.03C395.86 273.45 215.4 299.89 97.01 312.53C-21.38 325.17 182.07 480.34 234.94 524.02C287.82 567.7 444.14 265.4 495.86 179.2C547.59 92.99 357.93 157.36 320 159.66C282.07 161.95 265.98 240.11 325.75 360.8C385.52 481.49 240.69 294.14 223.45 270C206.21 245.86 300.46 227.47 365.98 173.45C409.66 137.43 373.26 118.28 256.78 115.98C154.87 113.68 88.97 160.8 59.08 257.36C29.2 353.91 63.68 448.93 162.53 542.41C324.98 556.97 430.34 543.18 478.62 501.03C551.03 437.82 338.39 427.47 165.98 342.41C51.03 285.71 120.38 214.83 374.02 129.77C485.13 76.13 547.2 126.7 560.23 281.49C573.26 436.28 490.11 441.26 310.8 296.44C215.79 229 181.3 164.25 207.36 102.18C233.41 40.11 305.06 40.11 422.3 102.18C461.38 168.85 471.34 241.46 452.18 320C433.03 398.54 293.56 406.02 33.79 342.41"
      />
    </g>
  </svg>
);

const instruments = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1920"
    id="drum_svg_element"
  >
    <g id="drums">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1096.3 1318.1c33.3 0 60.3 27 60.3 60.3s-27 60.3-60.3 60.3-60.3-27-60.3-60.3 27-60.3 60.3-60.3z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1198.6 1000.7c75.1 60.5 123.1 153.2 123.1 257.1 0 182.3-147.8 330.2-330.2 330.2-142.8 0-264.5-90.7-310.5-217.7-12.7-35.1-19.7-73-19.7-112.5 0-10.7.5-21.3 1.5-31.7 9.3-97.6 61.1-182.8 136.7-236.9 54.1-38.7 120.3-61.5 191.9-61.5 60.1 0 116.5 16.1 165.1 44.2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1156.6 971.8c14.8 8.5 28.8 18.2 42 28.8"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1656.6 641.9h-249.2l115.9-90.8 1.5-1.2z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M469 275.9C592.8 292 689.6 333 685.1 367.3c-4.4 33.8-105.5 48.6-227 33.6-1.8-.2-3.6-.4-5.4-.7-123.9-16.2-220.6-57.1-216.2-91.5 4.6-34.3 108.6-49 232.5-32.8z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M662.9 1226.1H283.6V892.7h514.3v94"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M458.2 337.8v1107.3"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M272.5 1564.2v-147.7l93.7-190.4 92-186.8.7-1.5 125.4 188.3 96.1 144.4"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M582 1650.7l61.9-195.2 58.7-33.4"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M907.8 661v141.3H547.5V584.8h360.3z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M907.8 661l79.2 79.2v184.3"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1409 1650.7l-61.9-195.2-58.8-33.4"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1335.1 781.6V584.8h-251.9v239.7h251.9z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1523.3 643.5v649.2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1683.6 1462.6l-85.7-330.2-74.6-83.9-1.6-1.8-93.7 84.1-109.5 206.4"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M987 740.2l93.4-93.5"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1335.1 781.6h121.5v219.1h-258"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1156.6 971.8V824.5"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1523.3 394.3v157.2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1096.3 1438.8c-33.3 0-60.3-27-60.3-60.3s27-60.3 60.3-60.3 60.3 27 60.3 60.3-27 60.3-60.3 60.3z"
      />
    </g>

    <g id="cello">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1254 1079.1c-1.3 0-91.5.8-91.5 107.9 0 107.8 91.5 98.4 91.5 98.4s101.1 357.2-269.3 372.3c-8 .3-16.2.5-24.7.5s-16.7-.2-24.7-.5c-370.4-15-269.3-372.2-269.3-372.2s98.5 9.4 98.5-98.4c0-107.8-98.5-107.9-98.5-107.9s47.5-20.1 73.2-114.5c5.9-21.8 10.7-47.5 13.4-77.8C763 772.5 862.4 740.1 919.8 731c23.7-3.8 40.2-3.6 40.2-3.6s16.5-.2 40.2 3.6c46.8 7.4 121.8 30.4 153.3 101 7 15.8 11.9 33.9 13.8 54.8 14.5 160.6 85.5 191.9 86.7 192.3"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M919.5 729.5V216.9h81v512.6"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M849.7 306.7h69.8"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1000.5 306.7h69.8"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M849.7 369.4h69.8"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1000.5 369.4h69.8"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M890.9 1128.5s-34.9 2.9-34.9 66.5c0 63.7-27.5 62.2-27.5 62.2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M1029.1 1128.5s34.9 2.9 34.9 66.5c0 63.7 27.5 62.2 27.5 62.2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M935.4 1658.2l-.1-.4-49.1-232.4H960"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M984.6 1658.2l.1-.4 49.1-232.4H960v-698"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M960 1658.3v44.8"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M381.4 1079.3l71.3-22.9 286.5-91.7L960 894l193.5-61.9 385.1-123.3"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M436.7 1010.6l16 45.8 15.2 43.3"
      />
    </g>
  </svg>
);

const equal = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    id="equal_element"
  >
    <g id="equal">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M200 250 h220 v50 h-220 z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M200 340 h220 v50 h-220 z"
      />
    </g>
  </svg>
);

const soundShapes = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    id="drum_svg_element"
  >
    <g id="takete">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M610 143.89L105.19 341.35L298.52 581.35L556.3 58.65L610 531.35L30 81.35L610 143.89Z"
      />
    </g>

    <g id="maluma">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg dark-stroke"
        d="M197.26 144.71C178.66 178.15 227.33 224.43 162.45 345.68C28.68 595.68 220.21 413.37 350 573.5C479.79 733.63 474.54 451.94 512.41 329.07C550.28 206.2 340.75 90.14 310 165.53C279.25 240.92 294.08 312.09 260 320C225.92 327.91 138.7 176.4 52.42 265.67C-42.67 364.03 55.42 405.47 346.68 390C472.36 378.84 543.29 317.79 559.46 206.86C583.72 40.47 499.5 47.06 403.09 66.61C306.68 86.15 217.01 109.2 197.26 144.71Z"
      />
    </g>
  </svg>
);

const sketches = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750">
    <polyline
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      id="sharpsketch"
      points="61,263 182,207 234,143 207,247 337,239 377,236 429,255 462,234 381,170 406,179 526,197 567,171 539,160 525,151 485,135 450,141 430,184 425,261 397,297 359,340 334,347 271,330 263,289 363,256 383,327 492,388 560,337 567,299 538,380 487,424 426,437 367,402 390,313 531,263 557,299 501,382 471,405 396,540 395,580 305,521 306,505 427,504 451,512 554,507 529,564 550,484 583,399 498,521 449,554 429,526 326,450 296,439 236,517 218,544 197,496 180,465 219,436 327,388 240,534 200,587 191,553 155,376 152,369 291,356 293,395 328,476 261,455 139,374 174,308 198,305 256,305 316,315 354,149 357,101 406,247 434,218 521,188 571,202 608,251 620,228 610,305 611,387 612,358 624,343 671,354 661,374 640,415 664,452 675,456 558,523 537,531 524,537 "
    />
    <polyline
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      id="roundsketch"
      points="524,114 492,111 453,110 411,116 363,133 310,158 257,190 210,231 195,257 186,283 178,304 171,327 168,353 164,390 164,418 169,444 186,464 209,484 225,497 251,509 285,516 305,521 325,526 349,528 370,530 397,530 446,519 486,506 522,486 543,465 563,437 571,418 587,381 593,354 594,331 594,307 593,275 588,256 581,241 573,221 568,204 553,183 532,166 498,163 463,164 443,165 419,170 384,185 347,204 305,229 272,258 246,287 241,308 240,336 240,362 243,382 254,404 271,424 290,440 310,453 346,462 377,469 406,465 445,441 490,401 514,375 524,353 528,330 529,302 524,278 513,256 503,241 485,228 463,224 443,223 432,222 405,231 373,248 353,271 337,294 326,311 322,334 326,361 340,381 357,394 375,399 397,400 422,392 442,381 463,360 477,342 480,329 481,312 477,297 468,285 456,277 444,274 426,281 408,299 401,311 "
    />
  </svg>
);

const computer = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1920"
    id="laptop_svg_element"
  >
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M1483.9 302v774H436.1V302h1047.8zM1391 983.1V394.9H529v588.2h862z"
    />
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M1703.1 1525.1v92.9H216.9v-92.9h1486.2zM436.1 1076l-219.2 449H1703l-219.2-449H436.1zm933.8 361.3H367.7l129-268.4h926.6l129 268.4h-182.4z"
    />
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M1334.1 1347.8l-35.8-89.5-35.8-89.5h160.8l129 268.4h-182.4l-35.8-89.4zm-185.3 0l26.5 89.5h194.5l-35.8-89.5h-185.2zm-26.5-89.4l26.5 89.5H1334l-35.8-89.5h-175.9zm-26.5-89.5l26.5 89.5h175.9l-35.8-89.5h-166.6zM960 1347.8v89.5h215.3l-26.5-89.5H960zm0-89.4v89.5h188.8l-26.5-89.5H960zm135.8-89.5H960v89.5h162.3l-26.5-89.5zm-324.6 178.9l-26.5 89.5H960v-89.5H771.2zm26.5-89.4l-26.5 89.5H960v-89.5H797.7zm26.5-89.5l-26.5 89.5H960v-89.5H824.2zm-166.6 0l-35.8 89.5h175.9l26.5-89.5H657.6zm-35.8 89.5l-35.8 89.5h185.2l26.5-89.5H621.8zm-35.8 89.4l-35.8 89.5h194.5l26.5-89.5H586zm71.6-178.9H496.7l-129 268.4h182.4l35.8-89.5 35.8-89.5 35.9-89.4z"
    />
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M529 394.9h861.9v588.2H529z"
    />

    <g>
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M1483.9 1076l219.2 449.1H216.9L436.1 1076"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M216.9 1525.1v92.9h1486.2v-92.9"
      />

      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M436.1 302 h1047.7 v774 H436.1z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M529 394.9 h861.9 v588.2 H529 z"
      />

      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M960 1437.3h592.3l-129-268.4H496.7l-129 268.4h377z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M960 1168.9v268.4"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M657.6 1168.9l-35.8 89.5-35.8 89.4-35.9 89.5"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M824.2 1168.9l-26.5 89.5-26.5 89.4-26.5 89.5"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M1262.4 1168.9l35.8 89.5 35.9 89.4 35.8 89.5"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M1095.8 1168.9l26.5 89.5 26.5 89.4 26.5 89.5"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M457.3 1258.4h1005.4"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M414.2 1347.8h1091.6"
      />
    </g>
    <g id="gear">
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M1618.6 840.3l-86.4-30.7c-60.2-21.4-88.6-90.1-61.2-147.8l39.4-82.8c51.3-108-61.3-220.6-169.3-169.3l-82.8 39.4c-57.7 27.4-126.4-1-147.8-61.2l-30.7-86.4c-40.1-112.6-199.4-112.6-239.4 0l-30.7 86.4c-21.4 60.2-90.1 88.6-147.8 61.2L579 409.7C471 358.3 358.4 471 409.7 579l39.4 82.8c27.4 57.7-1 126.4-61.2 147.8l-86.4 30.7c-112.6 40.1-112.6 199.4 0 239.4l86.4 30.7c60.2 21.4 88.6 90.1 61.2 147.8l-39.4 82.8c-51.3 108 61.3 220.6 169.3 169.3l82.8-39.4c57.7-27.4 126.4 1.1 147.8 61.2l30.7 86.4c40.1 112.6 199.4 112.6 239.4 0l30.7-86.4c21.4-60.2 90.1-88.6 147.8-61.2l82.8 39.4c108 51.3 220.6-61.3 169.3-169.3l-39.4-82.8c-27.4-57.7 1-126.4 61.2-147.8l86.4-30.7c112.7-40.1 112.7-199.4.1-239.4zM960 1330.9c-204.9 0-370.9-166.1-370.9-370.9s166-370.9 370.9-370.9 370.9 166.1 370.9 370.9-166 370.9-370.9 370.9z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        d="M1079.7 301.4l30.7 86.4c21.4 60.2 90.1 88.6 147.8 61.2l82.8-39.4c108-51.3 220.6 61.3 169.3 169.3l-39.4 82.8c-27.4 57.7 1.1 126.4 61.2 147.8l86.4 30.7c112.6 40.1 112.6 199.4 0 239.4l-86.4 30.7c-60.2 21.4-88.6 90.1-61.2 147.8l39.4 82.8c51.3 108-61.3 220.6-169.3 169.3l-82.8-39.4c-57.7-27.4-126.4 1.1-147.8 61.2l-30.7 86.4c-40.1 112.6-199.4 112.6-239.4 0l-30.7-86.4c-21.4-60.2-90.1-88.6-147.8-61.2l-82.8 39.4c-108 51.3-220.6-61.3-169.3-169.3l39.4-82.8c27.4-57.7-1.1-126.4-61.2-147.8l-86.4-30.7c-112.6-40.1-112.6-199.4 0-239.4l86.4-30.7c60.2-21.4 88.6-90.1 61.2-147.8L409.7 579C358.3 471 471 358.3 579 409.7l82.8 39.4c57.7 27.4 126.4-1.1 147.8-61.2l30.7-86.4c40-112.7 199.4-112.7 239.4-.1z"
      />
      <circle
        vectorEffect="non-scaling-stroke"
        className="svg light-stroke"
        cx="960"
        cy="960"
        r="370.9"
      />
    </g>
  </svg>
);

const goodSpeaker = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="speaker_svg_element"
    viewBox="-100 0 1000 1000"
  >
    <rect
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      x="25"
      y="375"
      width="200"
      height="250"
    />
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M225 375 l250 -200 l0 650 l-250 -200"
    />
    <g id="soundwaves">
      <path
        vectorEffect="non-scaling-stroke"
        id="soundwave1"
        className="svg light-stroke"
        d="M475 400 q50 100 0 200"
      />
      <path
        vectorEffect="non-scaling-stroke"
        id="soundwave2"
        className="svg light-stroke"
        d="M475 400 q50 100 0 200"
      />
      <path
        vectorEffect="non-scaling-stroke"
        id="soundwave3"
        className="svg light-stroke"
        d="M475 400 q50 100 0 200"
      />
    </g>
  </svg>
);

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="arrow"
    viewBox="0 0 1000 1000"
  >
    <path
      vectorEffect="non-scaling-stroke"
      className="svg light-stroke"
      d="M100 375 l600 0 l0 -125 l200 250 l-200 250 l0 -125 l-600 0 Z"
    />
  </svg>
);

const svgs = {
  dials: dials,
  faders: faders,
  badSpeaker: badSpeaker,
  arrow: arrow,
  equal: equal,
  instruments: instruments,
  soundShapes: soundShapes,
  sketches: sketches,
  computer: computer,
  goodSpeaker: goodSpeaker,
}

export default svgs;
