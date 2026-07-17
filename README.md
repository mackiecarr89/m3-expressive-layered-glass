# M3 Expressive × Layered Glass — Web Design System

A reference implementation for the web that maps **Google Material 3 Expressive** patterns to the aesthetic of the selected reference icon (overlapping rounded squares, purple / peach / cyan gradients, glass depth on a dark surface).

## Quick start

Open `index.html` in a browser (local file or static host). No build step required.

```
m3-expressive-layered-glass/
├── index.html       # Living style guide + component gallery
├── tokens.css       # Color, type, shape, motion tokens
├── components.css   # App bars, cards, FAB, inputs, layouts
├── motion.js        # Spring-leaning press + section nav sync
└── README.md
```

## Token mapping

| Reference aesthetic | M3 Expressive role |
|---------------------|-------------------|
| Purple glow square | `primary` / FAB / filled buttons |
| Peach-orange layer | `secondary` / filled cards / chips |
| Cyan-teal base | `tertiary` / vibrant menus / accents |
| Black + soft borders | `surface` + glass `outline-variant` |
| 24–28px rounded squares | `corner-extra-large` + shape morph on press |
| Roboto Flex | Variable typography (display emphasis) |

## Components included

- **Navigation**: navigation rail (desktop), bottom bar (mobile frame)
- **App bars**: vibrant hero, center-aligned, search + chips, compact
- **Cards**: elevated media, filled horizontal, outlined stat + linear progress
- **Buttons**: filled, tonal, outlined, text; split button; icon button group
- **FAB**: standard, extended, small secondary, FAB menu demo
- **Inputs**: filled & outlined text fields, slider, vibrant vertical menu with gap
- **Layouts**: social feed phone mock, dashboard + rail companion

## Motion

CSS uses spring-like curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) aligned with M3 Expressive motion-physics.

## Sources

- Material 3 Expressive: m3.material.io/blog/building-with-m3-expressive
- Reference image: layered glass icon aesthetic (user-selected asset)
