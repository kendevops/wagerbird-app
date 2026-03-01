export default function USADotMap() {
  return (
    <svg
      viewBox="0 0 860 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="usa-dot-map"
      aria-label="Map of the continental United States"
      role="img"
    >
      <defs>
        {/* Dot grid pattern */}
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="6" cy="6" r="3.8" fill="#3C4B1C" />
        </pattern>

        {/* Lighter dot variant for density variation */}
        <pattern
          id="dot-grid-light"
          x="0"
          y="0"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="6" cy="6" r="2.8" fill="#8A9E6A" />
        </pattern>

        {/* Clip path — continental US outline (simplified) */}
        <clipPath id="usa-clip">
          <path d="
            M 148,62
            L 162,50
            L 200,46
            L 248,44
            L 298,42
            L 348,40
            L 400,40
            L 445,40
            L 480,42
            L 510,46
            L 538,50
            L 565,48
            L 595,46
            L 628,46
            L 658,48
            L 685,52
            L 706,60
            L 718,72
            L 722,90
            L 718,115
            L 715,140
            L 718,165
            L 720,192
            L 726,218
            L 733,245
            L 738,272
            L 742,298
            L 746,325
            L 746,355
            L 740,385
            L 732,412
            L 720,440
            L 705,464
            L 688,480
            L 672,465
            L 658,448
            L 648,435
            L 625,435
            L 598,438
            L 572,442
            L 545,448
            L 518,455
            L 492,462
            L 468,470
            L 445,478
            L 425,484
            L 406,480
            L 385,472
            L 362,462
            L 340,455
            L 316,450
            L 292,452
            L 268,455
            L 242,458
            L 218,452
            L 195,440
            L 172,422
            L 148,400
            L 128,372
            L 112,342
            L 100,308
            L 94,275
            L 92,245
            L 95,215
            L 100,188
            L 108,162
            L 118,138
            L 128,116
            L 136,96
            L 142,78
            Z
          " />
        </clipPath>

        {/* Gradient overlay for density variation (lighter toward edges) */}
        <radialGradient id="density-gradient" cx="55%" cy="48%" r="52%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#2E3D14" stopOpacity="1" />
          <stop offset="40%" stopColor="#3C4B1C" stopOpacity="0.95" />
          <stop offset="75%" stopColor="#6B7E45" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#8A9E6A" stopOpacity="0.30" />
        </radialGradient>

        <mask id="density-mask">
          <rect width="860" height="540" fill="url(#density-gradient)" />
        </mask>
      </defs>

      {/* Base dot grid clipped to US shape */}
      <rect
        width="860"
        height="540"
        fill="url(#dot-grid)"
        clipPath="url(#usa-clip)"
        mask="url(#density-mask)"
      />

      {/* Slightly larger dots in the denser center (midwest) using a second layer */}
      <g clipPath="url(#usa-clip)" opacity="0.25">
        <rect width="860" height="540" fill="url(#dot-grid)" />
      </g>
    </svg>
  );
}
