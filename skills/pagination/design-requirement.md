# Pagination Design Requirements

## Dimensions

### Button Sizes
- **Small**: 32px height × 32px width (minimum)
- **Medium**: 40px height × 40px width (default)
- **Large**: 48px height × 48px width

### Spacing
- Gap between buttons: 8px
- Internal padding: 6px horizontal, 0px vertical (calculated by MUI)
- Minimum touch target: 32px × 32px

## Border Radius

### Standard Variant
- Border radius: 8px
- Consistent across all sizes

### Rounded Variant
- Border radius: 50% (fully circular/pill-shaped)
- Smooth, modern appearance

### Outlined Variant
- Border radius: 8px
- Border width: 1px
- Border color: rgba(145, 158, 171, 0.24)

## Colors

### Primary Color
- Background: Primary main color
- Text: White
- Hover: Primary dark
- Active: Primary darker

### Secondary Color
- Background: Secondary main color
- Text: White
- Hover: Secondary dark
- Active: Secondary darker

### Standard (Default)
- Background: Transparent
- Text: Grey 800
- Hover: rgba(145, 158, 171, 0.08)
- Active: rgba(145, 158, 171, 0.16)

### Success Color
- Background: Success main (#22C55E)
- Text: White
- Hover: Success dark
- Active: Success darker

### Error Color
- Background: Error main (#FF5630)
- Text: White
- Hover: Error dark
- Active: Error darker

### Info Color
- Background: Info main (#00B8D9)
- Text: White
- Hover: Info dark
- Active: Info darker

### Warning Color
- Background: Warning main (#FFAB00)
- Text: Grey 800
- Hover: Warning dark
- Active: Warning darker

## States

### Default State
- Normal appearance
- Full opacity
- Interactive cursor

### Hover State
- Background opacity: 0.08 (standard variant)
- Background darkens (colored variants)
- Smooth transition: 200ms
- Cursor: pointer

### Active/Pressed State
- Background opacity: 0.16 (standard variant)
- Background darker (colored variants)
- Scale: 0.98 (subtle press effect)

### Selected/Current Page State
- Background: Solid color (colored variants)
- Background: rgba(145, 158, 171, 0.16) (standard variant)
- Font weight: 600 (bold)
- Not interactive (no hover effect)

### Disabled State
- Opacity: 0.48
- Cursor: not-allowed
- No hover effects
- Non-interactive

### Focus State
- Outline: 2px solid primary color
- Outline offset: 2px
- Keyboard navigation support

## Typography

### Font
- Font family: Public Sans, sans-serif (Minimals default)
- Font size: 14px (small), 15px (medium), 16px (large)
- Font weight: 400 (default), 600 (selected page)
- Line height: 1.5

## Table Pagination Specific

### Container
- Height: 64px
- Padding: 0px 16px
- Background: Transparent
- Border top: 1px solid rgba(145, 158, 171, 0.24)

### Rows Per Page Selector
- Min width: 80px
- Height: 40px
- Border radius: 8px
- Padding: 8px 12px

### Page Info Text
- Font size: 14px
- Color: Grey 600
- Font weight: 400

### Navigation Buttons
- Size: 40px × 40px
- Border radius: 8px
- Spacing: 4px between buttons

## Accessibility

- ARIA labels on all buttons
- Keyboard navigation (Tab, Enter, Arrow keys)
- Screen reader support
- Focus indicators
- Minimum contrast ratio: 4.5:1

## Responsive Behavior

- Mobile (<600px): Hide page numbers, show only prev/next
- Tablet (600px-900px): Show limited page numbers
- Desktop (>900px): Show full page range

## Animation

- Transition duration: 200ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Properties: background-color, transform, opacity
