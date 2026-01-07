# Button Design Requirements - Minimals UI

## Size Specifications

### Small Button
- Height: 32px
- Padding: 4px 10px
- Font size: 13px
- Line height: 22px
- Icon size: 18px

### Medium Button (Default)
- Height: 36px
- Padding: 6px 12px
- Font size: 14px
- Line height: 24px
- Icon size: 20px

### Large Button
- Height: 48px
- Padding: 8px 22px
- Font size: 15px
- Line height: 26px
- Icon size: 22px

## Border Radius
- All buttons: 8px
- Icon buttons: 50% (circular)

## Typography
- Font family: 'Public Sans', sans-serif (or system default)
- Font weight: 600 (semi-bold)
- Text transform: none (preserve case)
- Letter spacing: 0

## Color System

### Primary
- Main: #00A76F
- Light: rgba(0, 167, 111, 0.08)
- Dark: #007867
- Contrast: #FFFFFF

### Secondary
- Main: #8E33FF
- Light: rgba(142, 51, 255, 0.08)
- Dark: #5119B7
- Contrast: #FFFFFF

### Info
- Main: #00B8D9
- Light: rgba(0, 184, 217, 0.08)
- Dark: #006C9C
- Contrast: #FFFFFF

### Success
- Main: #22C55E
- Light: rgba(34, 197, 94, 0.08)
- Dark: #118D57
- Contrast: #FFFFFF

### Warning
- Main: #FFAB00
- Light: rgba(255, 171, 0, 0.08)
- Dark: #B76E00
- Contrast: #212B36

### Error
- Main: #FF5630
- Light: rgba(255, 86, 48, 0.08)
- Dark: #B71D18
- Contrast: #FFFFFF

## Variant Specifications

### Contained Buttons
- Background: Color main value
- Text color: Color contrast value
- Shadow: 0px 8px 16px 0px rgba(color, 0.24)
- Hover background: Color dark value
- Hover shadow: none
- Active: scale(0.98)
- Disabled background: rgba(145, 158, 171, 0.24)
- Disabled text: rgba(145, 158, 171, 0.8)

### Outlined Buttons
- Background: transparent
- Border: 1px solid rgba(145, 158, 171, 0.32)
- Text color: Color main value
- Hover background: Color light value
- Hover border: Color main value
- Active: scale(0.98)
- Disabled border: rgba(145, 158, 171, 0.2)
- Disabled text: rgba(145, 158, 171, 0.8)

### Text Buttons
- Background: transparent
- Text color: Color main value
- Hover background: Color light value
- Active: scale(0.98)
- Disabled text: rgba(145, 158, 171, 0.8)

### Soft Buttons
- Background: Color light value
- Text color: Color dark value
- Hover background: darken light value by 8%
- Active: scale(0.98)
- Disabled background: rgba(145, 158, 171, 0.08)
- Disabled text: rgba(145, 158, 171, 0.8)

## Icon Buttons

### Size Specifications
- Small: 32px × 32px, icon 18px
- Medium: 40px × 40px, icon 20px
- Large: 48px × 48px, icon 22px

### Styling
- Border radius: 50% (circular)
- Same color system as regular buttons
- Same states (hover, active, disabled)

## Button Group
- No gap between buttons
- First button: border-radius 8px 0 0 8px
- Middle buttons: border-radius 0
- Last button: border-radius 0 8px 8px 0
- Shared borders collapse (1px instead of 2px)

## Loading State
- Show CircularProgress spinner
- Spinner size: same as icon size for button size
- Spinner color: inherits button text color
- Button remains clickable: false (disabled)
- Original content: hidden or replaced

## Spacing
- Gap between icon and text: 8px
- Button group gap: 0px (connected)
- Standalone button margin: 8px (when multiple)

## Transitions
- All properties: 200ms cubic-bezier(0.4, 0, 0.2, 1)
- Transform on active: 100ms ease-in-out

## Accessibility
- Min touch target: 44px × 44px (ensure with padding/margin)
- Focus visible outline: 2px solid currentColor, offset 2px
- Disabled state: cursor not-allowed, pointer-events none
- Icon buttons: always include aria-label
- Loading state: include aria-busy="true"
