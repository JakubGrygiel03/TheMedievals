export function HeraldicVeil() {
  return (
    <div className="heraldic-veil" aria-hidden="true">
      <svg
        className="heraldic-layer heraldic-layer--field"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M80 80h1040M80 820h1040M80 80v740M1120 80v740" />
          <path d="M200 40 L600 280 L1000 40" />
          <path d="M200 860 L600 620 L1000 860" />
          <path d="M40 220 L280 450 L40 680" />
          <path d="M1160 220 L920 450 L1160 680" />
          <path d="M180 180h840v540H180z" />
          <polygon points="600,120 760,280 600,440 440,280" />
        </g>
      </svg>

      <svg
        className="heraldic-layer heraldic-layer--astrolabe"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.1" transform="translate(600 450)">
          <g className="astrolabe-spin astrolabe-spin--slow">
            <circle r="210" />
            <circle r="150" />
            <circle r="88" />
            <path d="M0 -210v42M0 168v42M-210 0h42M168 0h42" />
            <path d="M-148 -148l30 30M148 148l-30 -30M148 -148l-30 30M-148 148l30 -30" />
          </g>
          <g className="astrolabe-spin astrolabe-spin--rete">
            <polygon points="0,-188 18,-40 0,0 -18,-40" />
            <polygon points="0,188 -18,40 0,0 18,40" />
            <polygon points="-188,0 -40,18 0,0 -40,-18" />
            <polygon points="188,0 40,-18 0,0 40,18" />
            <circle r="22" />
          </g>
        </g>
      </svg>

      <svg
        className="heraldic-layer heraldic-layer--pennons"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.1">
          <path d="M160 120v430" />
          <path className="pennon-cloth pennon-cloth--left" d="M160 150h150l-28 34 28 34H160" />
          <path d="M1040 160v430" />
          <path className="pennon-cloth pennon-cloth--right" d="M1040 190h-150l28 34 -28 34H1040" />
        </g>
      </svg>

      <svg
        className="heraldic-layer heraldic-layer--parade"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="currentColor" stroke="none">
          <g className="heraldic-charge heraldic-charge--one">
            <path d="M0-16c5 0 8 4 8 8 4 0 8 3 8 8s-4 8-8 8c0 4-3 8-8 8s-8-4-8-8c-4 0-8-3-8-8s4-8 8-8c0-4 3-8 8-8z" />
          </g>
          <g className="heraldic-charge heraldic-charge--two">
            <polygon
              className="charge-glyph charge-glyph--star"
              points="0,-16 3.3,-5.6 13.9,-8 6.5,0 13.9,8 3.3,5.6 0,16 -3.3,5.6 -13.9,8 -6.5,0 -13.9,-8 -3.3,-5.6"
            />
          </g>
          <g className="heraldic-charge heraldic-charge--three">
            <path d="M6-13.5A14.5 14.5 0 1 0 6 13.5 10.2 10.2 0 1 1 6-13.5z" />
          </g>
        </g>
      </svg>
    </div>
  );
}
