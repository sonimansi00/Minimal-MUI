# Checkbox Design Requirements

## Sizes

### Small
- Dimensions: 18px × 18px
- Icon size: 14px
- Use case: Compact UIs, data tables, dense lists

### Medium (Default)
- Dimensions: 20px × 20px
- Icon size: 16px
- Use case: Standard forms, general usage

### Large
- Dimensions: 24px × 24px
- Icon size: 18px
- Use case: Touch interfaces, prominent selections

## Colors

### Primary (Default)
- Color: #00A76F (Minimals green)
- Hover: #007B55
- Active: #005249

### Secondary
- Color: #8E33FF
- Hover: #7625D3
- Active: #5119A7

### Error
- Color: #FF5630
- Hover: #D32F2F
- Active: #B71C1C

### Warning
- Color: #FFAB00
- Hover: #F57C00
- Active: #E65100

### Info
- Color: #00B8D9
- Hover: #0097A7
- Active: #006064

### Success
- Color: #22C55E
- Hover: #16A34A
- Active: #15803D

### Default
- Color: rgba(145, 158, 171, 0.24)
- Checked: #212B36

## Spacing

- Gap between checkbox and label: 8px
- Vertical spacing in FormGroup: 8px
- Padding for touch target: 9px (total interactive area: 42px)

## Border & Shape

- Border-radius: 4px
- Border-width: 2px
- Border-color (unchecked): rgba(145, 158, 171, 0.32)
- Border-color (hover): rgba(145, 158, 171, 0.48)

## States

### Default (Unchecked)
- Background: transparent
- Border: rgba(145, 158, 171, 0.32)

### Hover
- Background: rgba(145, 158, 171, 0.08)
- Border: rgba(145, 158, 171, 0.48)
- Ripple effect visible

### Checked
- Background: theme color (e.g., #00A76F)
- Border: none
- Checkmark: white

### Indeterminate
- Background: theme color
- Border: none
- Icon: minus/dash (white)

### Disabled
- Opacity: 0.48
- Cursor: not-allowed
- No hover effects
- Background (checked): rgba(145, 158, 171, 0.24)

### Focus
- Outline: 2px solid rgba(0, 167, 111, 0.24)
- Outline-offset: 2px

## Ripple Effect

- Enabled by default
- Color: theme color with 0.08 opacity
- Duration: 550ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

## Accessibility

- Minimum touch target: 42px × 42px
- Keyboard navigation support (Tab, Space)
- ARIA labels when using icon-only checkboxes
- Clear visual focus indicators
- Proper label associations

## Typography (Labels)

- Font-family: Public Sans, sans-serif
- Font-size: 14px
- Font-weight: 400
- Line-height: 1.57143
- Color: #212B36
- Color (disabled): rgba(145, 158, 171, 0.8)

## Animation

- Transition property: all
- Transition duration: 200ms
- Transition timing: cubic-bezier(0.4, 0, 0.2, 1)
