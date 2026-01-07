# Chip Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on clarity, accessibility, and visual hierarchy.

---

## Color System

### Primary Colors
- **Primary:** `#00A76F`
- **Primary Light:** `#5BE49B`
- **Primary Dark:** `#007867`

### Secondary Colors
- **Secondary:** `#8E33FF`
- **Secondary Light:** `#C684FF`
- **Secondary Dark:** `#5119B7`

### Status Colors
- **Info:** `#00B8D9`
- **Info Light:** `#61F3F3`
- **Info Dark:** `#006C9C`

- **Success:** `#22C55E`
- **Success Light:** `#77ED8B`
- **Success Dark:** `#118D57`

- **Warning:** `#FFAB00`
- **Warning Light:** `#FFD666`
- **Warning Dark:** `#B76E00`

- **Error:** `#FF5630`
- **Error Light:** `#FF9B8A`
- **Error Dark:** `#B71D18`

### Grey Palette
- **Grey 100:** `#F9FAFB`
- **Grey 200:** `#F4F6F8`
- **Grey 300:** `#DFE3E8`
- **Grey 400:** `#C4CDD5`
- **Grey 500:** `#919EAB`
- **Grey 600:** `#637381`
- **Grey 700:** `#454F5B`
- **Grey 800:** `#212B36`

### Text Colors
- **Primary Text:** `#212B36`
- **Secondary Text:** `#637381`
- **Disabled Text:** `#919EAB`
- **White:** `#FFFFFF`

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Chip Label
- **Font Size:** `13px`
- **Font Weight:** `500` (Medium)
- **Line Height:** `1.5`
- **Letter Spacing:** `0px`

---

## Spacing & Layout

### Small Size (height: 24px)
- **Padding:** `4px 8px`
- **Icon Size:** `18px`
- **Avatar Size:** `20px`
- **Delete Icon Size:** `18px`
- **Gap (Icon to Label):** `4px`
- **Border Radius:** `6px`

### Medium Size (height: 32px)
- **Padding:** `6px 12px`
- **Icon Size:** `20px`
- **Avatar Size:** `24px`
- **Delete Icon Size:** `20px`
- **Gap (Icon to Label):** `6px`
- **Border Radius:** `8px`

---

## Border & Shape

### Border
- **Width:** `1px`
- **Outlined Default Color:** `rgba(145, 158, 171, 0.32)` (Grey 500 @ 32% opacity)
- **Outlined Color Variants:** Use respective color with full opacity

### Border Radius
- **Small:** `6px`
- **Medium:** `8px`

---

## Variant Styles

### 1. Filled Variant

#### Default Color
```css
background: #212B36;
color: #FFFFFF;
border: none;

&:hover {
  background: #454F5B; /* Grey 700 */
}
```

#### Color Variants (Primary, Secondary, Info, Success, Warning, Error)
```css
background: [color]; /* Full color */
color: #FFFFFF;
border: none;

&:hover {
  background: [color-dark]; /* Darker shade on hover */
}
```

**Avatar in Filled:**
- Background: Dark shade of chip color
- Color: Light shade of chip color

### 2. Outlined Variant

#### Default Color
```css
background: transparent;
color: #212B36;
border: 1px solid rgba(145, 158, 171, 0.32);

&:hover {
  background: rgba(145, 158, 171, 0.08);
}
```

#### Color Variants
```css
background: transparent;
color: [color];
border: 1px solid [color];

&:hover {
  background: rgba([color], 0.08);
}
```

### 3. Soft Variant

#### Default Color
```css
background: rgba(145, 158, 171, 0.16); /* Grey 500 @ 16% */
color: #212B36;
border: none;

&:hover {
  background: rgba(145, 158, 171, 0.32); /* Grey 500 @ 32% */
}
```

#### Color Variants
```css
background: rgba([color], 0.16); /* 16% opacity */
color: [color-dark]; /* Dark shade for light mode */
border: none;

&:hover {
  background: rgba([color], 0.32); /* 32% opacity on hover */
}

/* Dark Mode */
color: [color-light]; /* Light shade for dark mode */
```

---

## Interactive States

### Default State
Apply base styling per variant.

### Hover State (Clickable)
```css
cursor: pointer;
/* Background changes per variant (see above) */
transition: all 150ms ease-in-out;
```

### Focus State (Clickable)
```css
outline: 2px solid [color];
outline-offset: 2px;
```

### Disabled State
```css
opacity: 1;
cursor: not-allowed;
pointer-events: none;

/* Filled/Soft */
background: #F4F6F8; /* Grey 200 */
color: #919EAB; /* Grey 500 */

/* Outlined */
border-color: #F4F6F8;
color: #919EAB;

/* Avatar */
.MuiChip-avatar {
  background: #F4F6F8;
  color: #919EAB;
}
```

---

## Icon Styling

### Icon (Left Side)
- **Color:** `currentColor` (inherits chip color)
- **Margin Right:** `4px` (small), `6px` (medium)

### Delete Icon (Right Side)
- **Color:** `currentColor` with `opacity: 0.48`
- **Size:** `18px` (small), `20px` (medium)
- **Margin Left:** `4px`
- **Hover:** `opacity: 1`

```css
.MuiChip-deleteIcon {
  opacity: 0.48;
  color: currentColor;

  &:hover {
    opacity: 1;
    color: currentColor;
  }
}
```

---

## Avatar Styling

### Avatar in Chip
- **Size Small:** `20px`
- **Size Medium:** `24px`
- **Margin Right:** `0` (auto-handled by MUI)
- **Border Radius:** `50%` (circle)

### Avatar Colors (Filled Variant)
Per color variant:
```css
.MuiChip-avatar {
  color: [color-lighter];
  background: [color-dark];
}
```

### Avatar in Soft/Outlined
```css
.MuiChip-avatar {
  /* Uses standard avatar colors */
}
```

---

## Shadows & Elevation

### Default
```css
box-shadow: none;
```

### On Hover (Clickable)
```css
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
```

---

## Animation

### Hover Transition
```css
transition: all 150ms ease-in-out;
```

### Delete Click
```css
transition: opacity 150ms ease-in-out;
```

---

## Accessibility

### ARIA Attributes
```tsx
role="button" // If clickable
tabIndex={0}  // If clickable
aria-label="Chip label"
aria-disabled={disabled}
```

### Keyboard Navigation
- **Enter/Space:** Trigger onClick (if clickable)
- **Backspace/Delete:** Trigger onDelete (if deletable and focused)

---

## Responsive Design

### Mobile (< 600px)
- Maintain minimum touch target: 24px height minimum
- Reduce padding slightly if needed
- Keep font size readable (13px minimum)

### Desktop
- Standard sizing
- Hover effects enabled
- Full interaction support

---

## Usage Guidelines

### When to Use
- Tags and categories
- Filter selections
- User selections (multiple choice)
- Status indicators
- Removable items

### Best Practices
1. Use **filled** for primary emphasis
2. Use **soft** for subtle, modern look (recommended)
3. Use **outlined** for minimal, clean interface
4. Use **small** for dense layouts, tables
5. Use **medium** for standard UI elements
6. Keep labels concise (1-3 words)
7. Use colors semantically (success = positive, error = negative)

---

## Color Contrast Requirements (WCAG)

### Text on Background
- **Filled Variant:** Ensure 4.5:1 contrast ratio
- **Soft Variant:** Text should have sufficient contrast against background
- **Outlined Variant:** Text should be readable against page background

### Color Mapping for Soft Variant
```css
/* Light Mode */
Primary Soft: rgba(0, 167, 111, 0.16) + text: #007867 (Primary Dark)
Success Soft: rgba(34, 197, 94, 0.16) + text: #118D57 (Success Dark)
Warning Soft: rgba(255, 171, 0, 0.16) + text: #B76E00 (Warning Dark)
Error Soft: rgba(255, 86, 48, 0.16) + text: #B71D18 (Error Dark)

/* Dark Mode */
Use lighter text variants for contrast
```

---

## Code Reference

See `template.md` for complete implementation examples of all variants.
