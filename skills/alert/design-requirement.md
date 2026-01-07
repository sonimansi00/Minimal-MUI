# Alert Design Requirements - Minimal UI Style

## Design Philosophy

Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on clarity, visual hierarchy, and user-friendly feedback messaging.

---

## Color System

### Success Colors
Based on minimals.cc/components/foundation/colors:

- **Main:** `#22C55E`
- **Light:** `#77ED8B`
- **Dark:** `#118D57`
- **Lighter:** `#D3FCD2` (for soft variant background)
- **Darker:** `#0A5554` (for soft variant text)
- **Contrast Text:** `#FFFFFF`

### Info Colors

- **Main:** `#00B8D9`
- **Light:** `#61F3F3`
- **Dark:** `#006C9C`
- **Lighter:** `#CAFDF5` (for soft variant background)
- **Darker:** `#003768` (for soft variant text)
- **Contrast Text:** `#FFFFFF`

### Warning Colors

- **Main:** `#FFAB00`
- **Light:** `#FFD666`
- **Dark:** `#B76E00`
- **Lighter:** `#FFF5CC` (for soft variant background)
- **Darker:** `#7A4100` (for soft variant text)
- **Contrast Text:** `#212B36`

### Error Colors

- **Main:** `#FF5630`
- **Light:** `#FFAC82`
- **Dark:** `#B71D18`
- **Lighter:** `#FFE9D5` (for soft variant background)
- **Darker:** `#7A0916` (for soft variant text)
- **Contrast Text:** `#FFFFFF`

### Primary Colors

- **Main:** `#00A76F`
- **Light:** `#5BE49B`
- **Dark:** `#007867`
- **Lighter:** `#C8FAD6`
- **Darker:** `#004B50`
- **Contrast Text:** `#FFFFFF`

### Secondary Colors

- **Main:** `#8E33FF`
- **Light:** `#C684FF`
- **Dark:** `#5119B7`
- **Lighter:** `#EBD6FD`
- **Darker:** `#27097A`
- **Contrast Text:** `#FFFFFF`

### Grey Palette

- **100:** `#F9FAFB` (lightest)
- **200:** `#F4F6F8`
- **300:** `#DFE3E8`
- **400:** `#C4CDD5`
- **500:** `#919EAB`
- **600:** `#637381`
- **700:** `#454F5B`
- **800:** `#212B36` (darkest)
- **900:** `#161C24`

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Alert Text
- **Font Size:** `14px`
- **Font Weight:** `400` (Regular)
- **Line Height:** `1.75`
- **Color:** Depends on variant (see variant-specific rules)

### Alert Title (AlertTitle)
- **Font Size:** `14px`
- **Font Weight:** `600` (Semi-bold)
- **Line Height:** `1.5`
- **Margin Bottom:** `4px`
- **Color:** Inherits from alert severity

### Action Button Text
- **Font Size:** `13px`
- **Font Weight:** `600` (Semi-bold)
- **Text Transform:** `uppercase` or `none` (prefer none for Minimal UI)

---

## Spacing & Layout

### Alert Padding
- **Default:** `16px` all sides
- **With Icon:** `12px 16px` (slightly less vertical due to icon alignment)

### Icon Spacing
- **Icon Size:** `22px`
- **Icon Margin Right:** `12px` from text
- **Icon Vertical Align:** `top` (aligned with first line of text)

### Title Spacing
- **Margin Bottom:** `4px` (between title and message)

### Action Button Spacing
- **Margin Left:** `auto` (pushed to right)
- **Gap between buttons:** `8px`

### Stack Spacing (Multiple Alerts)
- **Vertical Spacing:** `16px` between alerts

---

## Border & Shape

### Border Width
- **Standard:** No border
- **Outlined:** `1px solid`
- **Filled:** No border

### Border Radius

#### Default
```css
border-radius: 8px;
```

#### Rounded (Soft)
```css
border-radius: 16px;
```

#### Square
```css
border-radius: 0;
```

### Border Colors (Outlined Variant)
- **Success:** Uses `theme.palette.success.main`
- **Info:** Uses `theme.palette.info.main`
- **Warning:** Uses `theme.palette.warning.main`
- **Error:** Uses `theme.palette.error.main`

---

## Shadows & Elevation

### Standard & Outlined Variants
- **Box Shadow:** `none`

### Filled Variant
- **Box Shadow:** `none` or very subtle

### Soft Variant (Minimal UI Signature)
- **Box Shadow:** `0px 2px 8px rgba(0, 0, 0, 0.08)`
- **Or use:** `theme.customShadows.z8`

---

## Variant-Specific Styling

### 1. Standard Alert

**Background:**
- Success: `rgba(34, 197, 94, 0.12)` or `#E7F7ED`
- Info: `rgba(0, 184, 217, 0.12)` or `#E0F7FA`
- Warning: `rgba(255, 171, 0, 0.12)` or `#FFF4E5`
- Error: `rgba(255, 86, 48, 0.12)` or `#FFE9E5`

**Text Color:**
- Success: `#118D57` (dark)
- Info: `#006C9C` (dark)
- Warning: `#B76E00` (dark)
- Error: `#B71D18` (dark)

**Icon Color:**
- Success: `#22C55E` (main)
- Info: `#00B8D9` (main)
- Warning: `#FFAB00` (main)
- Error: `#FF5630` (main)

### 2. Outlined Alert

**Background:** `transparent` or `#FFFFFF`

**Border:** `1px solid`
- Success: `#22C55E`
- Info: `#00B8D9`
- Warning: `#FFAB00`
- Error: `#FF5630`

**Text Color:**
- Success: `#118D57`
- Info: `#006C9C`
- Warning: `#B76E00`
- Error: `#B71D18`

**Icon Color:** Same as border color

### 3. Filled Alert

**Background:**
- Success: `#22C55E` (main)
- Info: `#00B8D9` (main)
- Warning: `#FFAB00` (main)
- Error: `#FF5630` (main)

**Text Color:** `#FFFFFF` (white)

**Icon Color:** `#FFFFFF` (white)

### 4. Soft Alert (Minimal UI Signature Style)

**Background:**
- Success: `#D3FCD2` (lighter)
- Info: `#CAFDF5` (lighter)
- Warning: `#FFF5CC` (lighter)
- Error: `#FFE9D5` (lighter)

**Text Color:**
- Success: `#0A5554` (darker)
- Info: `#003768` (darker)
- Warning: `#7A4100` (darker)
- Error: `#7A0916` (darker)

**Icon Color:** Same as text color

**Box Shadow:** `0px 2px 8px rgba(0, 0, 0, 0.08)`

**Border:** `none`

---

## Icon Requirements

### Default Icons by Severity

- **Success:** `CheckCircleIcon` from @mui/icons-material
- **Info:** `InfoIcon` from @mui/icons-material
- **Warning:** `WarningIcon` from @mui/icons-material
- **Error:** `ErrorIcon` from @mui/icons-material

### Icon Styling
```css
font-size: 22px;
margin-right: 12px;
opacity: 1;
```

### Custom Icons
When user provides custom icon, use the same sizing and spacing rules.

### No Icon
When `icon={false}`, remove icon but maintain proper text padding.

---

## Action Elements

### Close Button (IconButton)

**Styling:**
```css
padding: 4px;
margin-left: 8px;
opacity: 0.7;
transition: opacity 200ms;

&:hover {
  opacity: 1;
}
```

**Icon:** `CloseIcon` from @mui/icons-material

**Size:** `small`

**Color:** Inherits from alert text color

### Action Buttons

**Styling:**
```css
text-transform: none;
font-weight: 600;
font-size: 13px;
padding: 6px 12px;
```

**Variants:**
- Text button for secondary actions
- Contained button for primary actions

**Common Actions:**
- "Undo"
- "Retry"
- "View Details"
- "Dismiss"
- "Learn More"

---

## Interactive States

### Default State
- Standard appearance as defined per variant

### Hover State (Action Buttons)
```css
background-color: rgba(0, 0, 0, 0.04);
transition: background-color 200ms;
```

### Focus State
```css
outline: 2px solid [severity-main-color];
outline-offset: 2px;
```

### Collapsed State (Collapsible Alerts)
```css
height: 0;
opacity: 0;
overflow: hidden;
transition: all 300ms ease-in-out;
```

---

## Behavioral Requirements

### Collapsible Alerts

1. **State Management:**
   - Use `useState` to track visibility
   - Initial state: `true` (visible)

2. **Collapse Animation:**
   - Use MUI `Collapse` component
   - Duration: `300ms`
   - Easing: `ease-in-out`

3. **Close Button:**
   - IconButton with CloseIcon
   - onClick handler sets visibility to false

### With Actions

1. **Action Placement:**
   - Align to the right of the alert
   - Use flexbox with `justify-content: space-between`

2. **Multiple Actions:**
   - Display in horizontal row
   - Gap: 8px between buttons

3. **Action Handlers:**
   - Provide empty handler functions
   - Include comments for user to implement logic

---

## Accessibility Requirements

### ARIA Attributes

**Alert Role:**
```tsx
role="alert"
aria-live="polite"
```

**Close Button:**
```tsx
aria-label="Close alert"
```

**Alert with Title:**
```tsx
aria-labelledby="alert-title"
```

### Keyboard Navigation

- **Tab:** Navigate to action buttons and close button
- **Enter/Space:** Activate buttons
- **Escape:** Close alert (if collapsible)

### Screen Reader Support

- Alert severity announced automatically
- Title read before message
- Action buttons have descriptive labels

---

## Responsive Design

### Mobile (< 600px)

**Padding:** Reduce to `12px`

**Font Size:** Keep at 14px (maintain readability)

**Icon Size:** Keep at 22px

**Action Buttons:** Stack vertically if multiple actions

```css
@media (max-width: 599px) {
  .alert-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
}
```

### Tablet (600px - 899px)

**Standard spacing:** Use default values

### Desktop (≥ 900px)

**Standard spacing:** Use default values

**Max Width:** Optional, can constrain to `800px` for better readability

---

## Theme Integration

### Using MUI Theme

```tsx
import { useTheme } from '@mui/material/styles';

const theme = useTheme();

// Access theme values
sx={{
  bgcolor: theme.palette.success.lighter,
  color: theme.palette.success.darker,
  boxShadow: theme.customShadows?.z8,
  borderRadius: theme.shape.borderRadius,
}}
```

### Custom Theme Extension

For full Minimal UI support, extend the MUI theme:

```tsx
declare module '@mui/material/styles' {
  interface Palette {
    success: Palette['primary'] & {
      lighter: string;
      darker: string;
    };
    // ... same for info, warning, error
  }

  interface Theme {
    customShadows: {
      z8: string;
      // ... other shadows
    };
  }
}
```

### Fallback Values

If theme extensions aren't available, use inline values:

```tsx
sx={{
  bgcolor: '#D3FCD2', // success.lighter fallback
  color: '#0A5554', // success.darker fallback
}}
```

---

## Animation Specifications

### Collapse Animation (Dismissible Alerts)

```css
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Fade In (On Mount)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: fadeIn 300ms ease-out;
```

### Button Hover

```css
transition: all 200ms ease-in-out;
```

---

## Code Quality Requirements

1. **Use MUI v5 Components:** Alert, AlertTitle, IconButton, Button, Collapse, Stack
2. **TypeScript Support:** Provide proper type definitions
3. **Prop Types:** Define all component props
4. **Default Props:** Provide sensible defaults
5. **Clean Code:** Follow React best practices
6. **Comments:** Document complex logic
7. **Accessibility:** Include ARIA attributes
8. **Responsive:** Use MUI breakpoints

---

## Examples from Minimal UI

Reference the exact styling from minimals.cc:

1. **Soft Alerts** - Use lighter/darker palette colors
2. **Rounded Corners** - 8px default, 16px for soft rounded
3. **Subtle Shadows** - Use customShadows.z8
4. **Clean Icons** - MUI icons with proper sizing
5. **Action Alignment** - Right-aligned with proper spacing
6. **Professional Typography** - Public Sans font, proper weights

---

## Testing Requirements

1. **Functionality:**
   - Alert displays correctly
   - Close button dismisses alert
   - Action buttons are clickable
   - Collapse animation smooth

2. **Accessibility:**
   - Screen reader announces alert
   - Keyboard navigation works
   - Focus indicators visible
   - ARIA labels present

3. **Responsive:**
   - Looks good on mobile
   - Looks good on tablet
   - Looks good on desktop

4. **Browser Compatibility:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

---

## Minimal UI Signature Touches

To truly match minimals.cc, ensure:

1. **Soft variant is prominent** - This is Minimal UI's signature alert style
2. **Use lighter/darker colors** - Not just light/dark
3. **Subtle shadows** - Not heavy drop shadows
4. **Clean spacing** - Generous padding, proper alignment
5. **Professional icons** - Proper size and color
6. **Smooth animations** - 300ms transitions
7. **Accessibility first** - Proper ARIA, keyboard support
