Here are the animation drivers in app/marketing/page.js:

- Animated gradient on .jumbotron
  - background: multi-stop jade gradient (brighter colors: #00FFA6 → #00E4B1)
  - background-size: 420% 420% (larger canvas for motion)
  - animation: jadeShift 6s linear infinite
  - @keyframes jadeShift animates background-position from 0%→100%→0%

- Shine sweep overlay (.jumbotron::before)
  - overlay gradient band
  - animation: jadeShine 4s ease-in-out infinite
  - @keyframes jadeShine animates transform: translateX(...) and opacity

- Glow/pulse layer (.jumbotron::after)
  - two radial-gradients with mix-blend-mode: screen and filter: saturate(140%)
  - animation: jadePulse 7s ease-in-out infinite
  - @keyframes jadePulse animates transform: translate(...) + scale(...) and opacity

- Structural helpers
  - position: relative and overflow: hidden on .jumbotron to contain overlays

- Accessibility
  - @media (prefers-reduced-motion: reduce) disables all animations

Animated properties: background-position, transform (translateX, translate, scale), and opacity.