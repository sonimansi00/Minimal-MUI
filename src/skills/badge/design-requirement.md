# Badge Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on clarity and prominence for notification indicators.

---

## Color System

### Primary Colors
- **Primary:** `#00A76F`
- **Primary Light:** `#5BE49B`
- **Primary Dark:** `#007867`

### Status Colors
- **Error:** `#FF5630`
- **Warning:** `#FFAB00`
- **Info:** `#00B8D9`
- **Success:** `#22C55E`
- **Secondary:** `#8E33FF`

### Grey Palette
- **Grey 100:** `#F9FAFB`
- **Grey 200:** `#F4F6F8`
- **Grey 300:** `#DFE3E8`
- **Grey 400:** `#C4CDD5`
- **Grey 500:** `#919EAB`
- **Grey 600:** `#637381`
- **Grey 800:** `#212B36`

### Badge Background Colors
- **Primary:** `#00A76F`
- **Secondary:** `#8E33FF`
- **Error:** `#FF5630`
- **Warning:** `#FFAB00`
- **Info:** `#00B8D9`
- **Success:** `#22C55E`

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Badge Text
- **Font Size:** `10px`
- **Font Weight:** `600`
- **Line Height:** `1`
- **Color:** `#FFFFFF`
- **Text Align:** `center`

---

## Spacing & Layout

### Badge Size
- **Small:** `16px`
- **Medium:** `20px`

### Badge with Content (Number/Text)
- **Min Width:** `20px`
- **Height:** `20px`
- **Padding:** `0 6px`

### Dot Badge (No Content)
- **Width:** `8px`
- **Height:** `8px`

### Positioning Offset
- **Top:** `-4px` from container top
- **Right:** `-4px` from container right
- **Bottom:** `-4px` from container bottom
- **Left:** `-4px` from container left

---

## Border & Shape

### Border Radius
- **Badge with Content:** `10px`
- **Dot Badge:** `50%`

### Border (Outline)
- **Width:** `2px`
- **Color:** `#FFFFFF`
- **Style:** `solid`

---

## Shadows & Elevation

### Badge Shadow
```css
box-shadow: 0 0 0 2px #FFFFFF;
```

---

## Position Variants

### Top Right (Default)
```css
top: 0;
right: 0;
transform: scale(1) translate(50%, -50%);
transform-origin: 100% 0%;
```

### Top Left
```css
top: 0;
left: 0;
transform: scale(1) translate(-50%, -50%);
transform-origin: 0% 0%;
```

### Bottom Right
```css
bottom: 0;
right: 0;
transform: scale(1) translate(50%, 50%);
transform-origin: 100% 100%;
```

### Bottom Left
```css
bottom: 0;
left: 0;
transform: scale(1) translate(-50%, 50%);
transform-origin: 0% 100%;
```

---

## Interactive States

### Default
- Background: Color variant
- Border: 2px solid white
- Scale: 1

### Invisible
- Display: none
- OR
- Scale: 0
- Opacity: 0

---

## Component Overlap

### Avatar Overlap
- Position: Relative on avatar
- Badge: Absolute positioning
- Z-index: 1

### Icon Overlap
- Position: Relative on icon wrapper
- Badge: Absolute positioning
- Z-index: 1

---

## Max Count Display

### Standard Count
- Display: Actual number (1, 2, 3, etc.)

### Over Max Count
- Display: `{max}+` (e.g., 99+, 999+)
- Font size: Same (10px)
- Weight: 600

---

## Animation

### Badge Appear/Disappear
```css
transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Scale In
```css
@keyframes badge-enter {
  0% {
    transform: scale(0) translate(50%, -50%);
  }
  100% {
    transform: scale(1) translate(50%, -50%);
  }
}
```

---

## Accessibility

### ARIA Attributes
```tsx
aria-label="notification count: 4"
role="status"
```

### Screen Reader
- Include descriptive text for badge content
- Announce count changes

---

## Color Contrast

### All Badge Variants
- Background: Vibrant color
- Text: White (#FFFFFF)
- Contrast Ratio: Minimum 4.5:1

---

## Responsive

### Mobile (< 600px)
- Badge size: Slightly smaller (18px instead of 20px)
- Font size: Same (10px)
- Touch-friendly sizes maintained

### Desktop
- Standard sizing
- Hover effects on parent component

---

## Z-Index Hierarchy

### Badge Layer
- **Badge:** `z-index: 1`
- **Parent Component:** `z-index: 0`
- **Ensure badge always appears on top**

---

## Special Cases

### Zero Count
- `showZero={false}`: Badge hidden
- `showZero={true}`: Badge shows "0"

### Dot Badge
- No content
- Small circular indicator
- 8px diameter
- Solid color fill

### Custom Content
- Text content: Max 3-4 characters recommended
- Padding adjusts automatically
- Min-width maintained
