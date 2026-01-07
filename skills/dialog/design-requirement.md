# Dialog Design Requirements

Design specifications for Dialog components following Minimals UI standards.

## Layout Specifications

### Border Radius
- Dialog container: `16px`
- Maintains consistency across all variants

### Padding Structure
- Dialog container: `0` (padding applied to children)
- DialogTitle: `24px` (all sides)
- DialogContent: `24px` horizontal, `20px` vertical
- DialogActions: `24px` (all sides)

### Spacing
- Between action buttons: `8px` gap
- Title to content: `0` (handled by padding)
- Content to actions: `0` (handled by padding)

## Typography

### Dialog Title
- Font size: `18px` (1.125rem)
- Font weight: `700` (bold)
- Line height: `1.5`
- Color: `text.primary`
- Font family: Public Sans (Minimals default)

### Dialog Content
- Font size: `14px` (0.875rem)
- Font weight: `400` (regular)
- Line height: `1.57143`
- Color: `text.secondary`

## Colors

### Backdrop
- Background: `rgba(0, 0, 0, 0.5)`
- Blur effect: `backdrop-filter: blur(8px)`

### Paper (Dialog Surface)
- Background: `background.paper` (theme-aware)
- Box shadow: `24` (MUI elevation)

### Divider
- Color: `divider` (theme-aware)
- Height: `1px`

## Sizes

### Predefined MaxWidth Values
- `xs`: 444px
- `sm`: 600px
- `md`: 900px (default)
- `lg`: 1200px
- `xl`: 1536px

### Full Screen
- Width: `100vw`
- Height: `100vh`
- Border radius: `0`

## Buttons

### Action Buttons
- Height: `36px`
- Padding: `6px 16px`
- Border radius: `8px`
- Font size: `14px`
- Font weight: `600`
- Text transform: `none`

### Button Variants
- Primary action: `contained` variant with `primary` color
- Secondary action: `outlined` variant
- Tertiary action: `text` variant

## Animations

### Entrance
- Duration: `225ms`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Transform: `scale(0.9)` to `scale(1)`
- Opacity: `0` to `1`

### Exit
- Duration: `195ms`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Transform: `scale(1)` to `scale(0.9)`
- Opacity: `1` to `0`

## Responsive Behavior

### Mobile (< 600px)
- Consider using `fullScreen` prop
- Reduce padding to `16px`
- Stack buttons vertically if needed

### Tablet (600px - 960px)
- Use `sm` or `md` maxWidth
- Maintain standard padding

### Desktop (> 960px)
- Use `md`, `lg`, or `xl` maxWidth
- Full padding specifications apply

## Accessibility

### ARIA Attributes
- `role="dialog"`
- `aria-labelledby` pointing to title ID
- `aria-describedby` pointing to content ID
- `aria-modal="true"`

### Focus Management
- Auto-focus on first interactive element
- Trap focus within dialog
- Return focus to trigger element on close
- ESC key closes dialog

## Scrolling Behavior

### Scrollable Content
- `DialogContent` with `dividers` prop
- Top and bottom dividers appear when scrollable
- Smooth scrolling behavior
- Maintain header and footer visible

### Body Scroll Lock
- Prevent background scrolling when dialog open
- Restore scroll position on close
