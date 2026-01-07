# Autocomplete Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on usability and clarity.

---

## Color System

### Primary Colors
- **Primary:** `#00A76F`
- **Primary Light:** `#5BE49B`
- **Primary Dark:** `#007867`

### Grey Palette
- **Grey 100:** `#F9FAFB`
- **Grey 200:** `#F4F6F8`
- **Grey 300:** `#DFE3E8`
- **Grey 400:** `#C4CDD5`
- **Grey 500:** `#919EAB`
- **Grey 600:** `#637381`
- **Grey 800:** `#212B36`

### Text Colors
- **Primary Text:** `#212B36`
- **Secondary Text:** `#637381`
- **Disabled Text:** `#919EAB`

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Input Text
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Line Height:** `1.5`
- **Color:** `#212B36`

### Label
- **Font Size:** `14px`
- **Font Weight:** `500`
- **Color:** `#637381`

### Helper Text
- **Font Size:** `12px`
- **Color:** `#637381`

---

## Spacing & Layout

### Input Field
- **Padding:** `8px 14px`
- **Height:** `40px` (small), `48px` (medium)

### Chip (Multiple Selection)
- **Padding:** `4px 8px`
- **Margin:** `2px`
- **Height:** `24px`

### Dropdown List
- **Padding:** `8px 0`
- **Option Padding:** `8px 16px`
- **Option Height:** `40px`

### Gap
- **Between Chips:** `4px`
- **Between Options:** `0`

---

## Border & Shape

### Border
- **Width:** `1px`
- **Color:** `#DFE3E8`
- **Focus Color:** `#00A76F`

### Border Radius
- **Input:** `8px`
- **Chip:** `6px`
- **Dropdown:** `8px`

---

## Shadows & Elevation

### Dropdown Paper
```css
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
```

### Chip
```css
box-shadow: none;
background: rgba(145, 158, 171, 0.16);
```

---

## Interactive States

### Default
- Border: `1px solid #DFE3E8`
- Background: `#FFFFFF`

### Hover
- Border: `1px solid #212B36`

### Focus
- Border: `2px solid #00A76F`
- Outline: `none`

### Disabled
- Background: `#F4F6F8`
- Color: `#919EAB`
- Cursor: `not-allowed`

### Option Hover
- Background: `#F9FAFB`

### Option Selected
- Background: `rgba(0, 167, 111, 0.08)`
- Font Weight: `600`

---

## Icon Styling

### Dropdown Icon
- **Size:** `20px`
- **Color:** `#637381`

### Clear Icon
- **Size:** `20px`
- **Color:** `#919EAB`
- **Hover Color:** `#637381`

### Avatar Icon
- **Size:** `32px`
- **Margin Right:** `12px`

---

## Chip Styling (Multiple Selection)

### Default Chip
```css
background: rgba(145, 158, 171, 0.16);
color: #212B36;
border-radius: 6px;
height: 24px;
font-size: 13px;
```

### Delete Icon
```css
color: #637381;
font-size: 18px;
&:hover {
  color: #212B36;
}
```

---

## Group Header Styling

### Group Label
- **Font Size:** `12px`
- **Font Weight:** `600`
- **Color:** `#919EAB`
- **Text Transform:** `uppercase`
- **Padding:** `8px 16px`
- **Letter Spacing:** `0.5px`

---

## Loading State

### Progress Indicator
- **Size:** `20px`
- **Color:** `#00A76F`
- **Position:** End of input

---

## Accessibility

### ARIA Attributes
```tsx
aria-label="Autocomplete"
role="combobox"
aria-expanded={open}
aria-controls="autocomplete-listbox"
```

### Keyboard Navigation
- **Arrow Down/Up:** Navigate options
- **Enter:** Select option
- **Escape:** Close dropdown
- **Backspace:** Remove last chip (multiple)

---

## Animation

### Dropdown Open/Close
```css
transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Chip Add/Remove
```css
transition: all 150ms ease-in-out;
```

---

## Responsive

### Mobile (< 600px)
- Reduce padding slightly
- Maintain touch-friendly sizes

### Desktop
- Standard spacing
- Hover effects enabled
