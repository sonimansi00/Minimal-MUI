# Accordion Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on simplicity, clarity, and usability.

---

## Color System

### Primary Colors
Based on minimals.cc/components/foundation/colors:

- **Primary:**
  - Main: `#00A76F` (green)
  - Light: `#5BE49B`
  - Dark: `#007867`
  - Contrast Text: `#FFFFFF`

- **Secondary:**
  - Main: `#8E33FF`
  - Light: `#C684FF`
  - Dark: `#5119B7`

- **Info:**
  - Main: `#00B8D9`
  - Light: `#61F3F3`
  - Dark: `#006C9C`

- **Success:**
  - Main: `#22C55E`
  - Light: `#77ED8B`
  - Dark: `#118D57`

- **Warning:**
  - Main: `#FFAB00`
  - Light: `#FFD666`
  - Dark: `#B76E00`

- **Error:**
  - Main: `#FF5630`
  - Light: `#FFAC82`
  - Dark: `#B71D18`

### Grey Palette
- **Grey 100:** `#F9FAFB`
- **Grey 200:** `#F4F6F8`
- **Grey 300:** `#DFE3E8`
- **Grey 400:** `#C4CDD5`
- **Grey 500:** `#919EAB`
- **Grey 600:** `#637381`
- **Grey 700:** `#454F5B`
- **Grey 800:** `#212B36`
- **Grey 900:** `#161C24`

### Text Colors
- **Primary Text:** `#212B36` (Grey 800)
- **Secondary Text:** `#637381` (Grey 600)
- **Disabled Text:** `#919EAB` (Grey 500)

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Accordion Title (AccordionSummary)
- **Font Size:** `15px`
- **Font Weight:** `600` (Semi-bold)
- **Line Height:** `1.5`
- **Letter Spacing:** `normal`
- **Color:** `#212B36` (Primary text)

### Accordion Content (AccordionDetails)
- **Font Size:** `14px`
- **Font Weight:** `400` (Regular)
- **Line Height:** `1.75`
- **Color:** `#637381` (Secondary text)

### Action Buttons
- **Font Size:** `13px`
- **Font Weight:** `600`
- **Text Transform:** `none` (Sentence case)

---

## Spacing & Layout

### Accordion Panel Spacing
- **Padding (Summary):** `16px 20px`
- **Padding (Details):** `0 20px 20px 20px`
- **Padding (Actions):** `16px 20px`
- **Gap between panels:** `16px`

### Icon Spacing
- **Icon Size:** `20px`
- **Icon Margin:** `8px` from text

### Border & Divider
- **Border Width:** `1px`
- **Border Color:** `#DFE3E8` (Grey 300)
- **Border Radius:** `8px` (for styled variant)

---

## Shadows & Elevation

Based on minimals.cc/components/foundation/shadows:

### Default State
- **Box Shadow:** `none` or very subtle
- Use border instead: `1px solid #DFE3E8`

### Styled/Card Variant
- **Box Shadow:** `0px 0px 2px 0px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)`
- **Border Radius:** `12px`
- **Background:** `#FFFFFF`

### Hover State
- **Box Shadow (subtle):** `0px 0px 2px 0px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.16)`
- **Transition:** `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)`

---

## Interactive States

### Default State
- **Background:** `transparent` or `#FFFFFF`
- **Border:** `1px solid #DFE3E8`
- **Icon Color:** `#637381`

### Hover State
- **Background:** `#F9FAFB` (Grey 100)
- **Cursor:** `pointer`
- **Transition:** `all 200ms ease-in-out`

### Expanded State
- **Background:** `#FFFFFF`
- **Icon Rotation:** `180deg` (for chevron) or icon swap (for plus/minus)
- **Border Bottom:** Remove for seamless connection to content

### Disabled State
- **Background:** `#F4F6F8` (Grey 200)
- **Text Color:** `#919EAB` (Grey 500)
- **Cursor:** `not-allowed`
- **Opacity:** `0.6`

### Focus State (Accessibility)
- **Outline:** `2px solid #00A76F` (Primary color)
- **Outline Offset:** `2px`

---

## Icon Requirements

### Default Expand Icon
- **Icon:** `ExpandMoreIcon` from `@mui/icons-material`
- **Size:** `20px`
- **Color:** `#637381` (Grey 600)
- **Rotation:** `0deg` (collapsed), `180deg` (expanded)

### Plus/Minus Variant
- **Collapsed Icon:** `AddIcon` or custom plus icon
- **Expanded Icon:** `RemoveIcon` or custom minus icon
- **Size:** `20px`
- **Color:** `#637381`

### Icon Transition
```css
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Behavioral Requirements

### Expansion Behavior
- **Single Expansion (Simple):** Only one panel open at a time
- **Multi Expansion:** Multiple panels can be open simultaneously
- **Smooth Transition:** `300ms` ease-in-out

### Keyboard Navigation
- **Tab:** Navigate between accordion headers
- **Enter/Space:** Toggle expansion
- **Arrow Up/Down:** Move focus between headers

### Accessibility
- **ARIA Labels:** Proper `aria-expanded`, `aria-controls`, `aria-labelledby`
- **Role:** Implicit accordion roles from MUI
- **Focus Management:** Visible focus indicators
- **Screen Reader:** Descriptive labels

---

## Variants Styling Guide

### 1. Simple Accordion
```css
border: 1px solid #DFE3E8;
border-radius: 0;
box-shadow: none;
margin-bottom: 0;
&:before { display: none; }
```

### 2. Controlled Accordion
Same as Simple, with programmatic state control.

### 3. Multi-Panel Accordion
```css
border: 1px solid #DFE3E8;
border-radius: 8px;
margin-bottom: 16px;
&:before { display: none; }
```

### 4. Styled Accordion (Minimal UI)
```css
border: none;
border-radius: 12px;
box-shadow: 0px 0px 2px 0px rgba(145, 158, 171, 0.2),
            0px 12px 24px -4px rgba(145, 158, 171, 0.12);
margin-bottom: 16px;
background: #FFFFFF;
&:before { display: none; }

&:hover {
  box-shadow: 0px 0px 2px 0px rgba(145, 158, 171, 0.24),
              0px 16px 32px -4px rgba(145, 158, 171, 0.16);
}
```

### 5. Accordion with Actions
- Place actions in `AccordionActions` component
- Align right with proper spacing
- Use text buttons for secondary actions
- Use contained buttons for primary actions

---

## Grid & Responsive Behavior

Based on minimals.cc/components/foundation/grid:

### Breakpoints
- **xs:** 0px
- **sm:** 600px
- **md:** 900px
- **lg:** 1200px
- **xl:** 1536px

### Responsive Padding
```css
@media (max-width: 600px) {
  padding: 12px 16px; /* Reduce on mobile */
}
```

### Max Width
- **Container:** `1200px` (for demo pages)
- **Accordion:** `100%` of container

---

## Animation & Transitions

### Expand/Collapse
```css
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Icon Rotation
```css
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover Effects
```css
transition: background-color 200ms ease-in-out,
            box-shadow 200ms ease-in-out;
```

---

## Code Quality Requirements

1. **Use MUI v5 Components:** `Accordion`, `AccordionSummary`, `AccordionDetails`, `AccordionActions`
2. **TypeScript Support:** Include proper type definitions
3. **Prop Types:** Define all component props
4. **Default Props:** Provide sensible defaults
5. **Error Boundaries:** Handle edge cases
6. **Performance:** Use React.memo where appropriate
7. **Clean Code:** Follow React best practices
8. **Comments:** Document complex logic

---

## Testing Requirements

1. **Unit Tests:** Test expansion/collapse logic
2. **Accessibility Tests:** ARIA attributes, keyboard navigation
3. **Visual Tests:** Snapshot testing for styling
4. **Responsive Tests:** Test on different screen sizes
5. **Browser Tests:** Cross-browser compatibility

---

## Examples from Minimal UI

Reference these specific patterns from minimals.cc:
- Clean, spacious layouts
- Subtle shadows and borders
- Smooth, professional transitions
- Accessible, keyboard-friendly
- Mobile-responsive design
- Consistent with design system
