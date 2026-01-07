# Drawer Design Requirements

This document defines the exact styling specifications for MUI Drawer components following the Minimals design system.

## Dimensions

### Width
- **Standard Drawer**: 280px
- **Wide Drawer**: 320px
- **Mini Variant (collapsed)**: 56px
- **Mini Variant (expanded)**: 280px

### Height
- Full viewport height: `100vh`
- Header height: 64px (desktop), 56px (mobile)

## Spacing & Padding

### Drawer Container
- Padding: 24px (top/bottom), 16px (left/right)
- Mobile padding: 16px (all sides)

### Header Section
- Padding: 24px 16px
- Bottom border: 1px solid divider color
- Height: 64px (including padding)

### List Items
- Padding: 8px 16px
- Gap between items: 4px
- Icon margin-right: 16px
- Nested items indent: 32px

### Content Sections
- Section spacing: 32px (between major sections)
- Group spacing: 16px (within sections)

## Typography

### Header Title
- Font size: 18px
- Font weight: 600
- Line height: 1.5
- Color: text.primary

### List Item Text
- Font size: 14px
- Font weight: 500 (default), 600 (active)
- Line height: 1.57
- Color: text.secondary (default), primary.main (active)

### Section Labels
- Font size: 12px
- Font weight: 700
- Line height: 1.5
- Color: text.disabled
- Text transform: uppercase
- Letter spacing: 0.5px

## Colors

### Background
- Light mode: #FFFFFF
- Dark mode: #161C24
- Paper elevation: Use theme.palette.background.paper

### Borders
- Color: rgba(145, 158, 171, 0.24)
- Width: 1px
- Style: solid

### Backdrop (Temporary Drawer)
- Background: rgba(22, 28, 36, 0.8)
- Backdrop filter: blur(6px)

### Active State
- Background: alpha(theme.palette.primary.main, 0.08)
- Color: theme.palette.primary.main
- Border-radius: 8px

### Hover State
- Background: alpha(theme.palette.grey[500], 0.08)
- Transition: background-color 200ms

## Elevation & Shadows

### Temporary Drawer
- Elevation: 16
- Box shadow: `0px 8px 16px 0px rgba(145, 158, 171, 0.24)`

### Persistent Drawer
- Elevation: 0
- Border-right: 1px solid divider color

### Permanent Drawer
- Elevation: 0
- Border-right: 1px solid divider color

## Z-Index

- **Drawer**: 1200
- **Backdrop**: 1200 (same as drawer, manages layering internally)
- **App Bar** (when used with drawer): 1201 (above drawer)
- **Modal**: 1300 (above all drawers)

## Transitions

### Slide Animation
- Duration: 225ms (enter), 195ms (exit)
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (enter)
- Easing: cubic-bezier(0.4, 0, 0.6, 1) (exit)

### Mini Variant Transition
- Property: width, margin
- Duration: 225ms
- Easing: theme.transitions.easing.sharp

### Hover Effects
- Duration: 200ms
- Easing: ease-in-out

## Responsive Behavior

### Breakpoints
- Mobile (< 900px): Temporary drawer, full overlay
- Tablet (900px - 1200px): Persistent drawer or temporary
- Desktop (>= 1200px): Permanent drawer or persistent

### Mobile Specific
- Width: 280px (max 80vw)
- Full height: 100vh
- Safe area padding for notched devices

### Desktop Specific
- Fixed width: 280px
- Fixed position in layout
- No backdrop for permanent variant

## Accessibility

### Focus States
- Outline: 2px solid primary.main
- Outline offset: 2px
- Border radius: 8px

### High Contrast Mode
- Ensure minimum contrast ratio 4.5:1
- Visible borders and separators
- Clear active/inactive states

## Icon Specifications

### Size
- Default: 24px × 24px
- Mini variant: 20px × 20px

### Color
- Default: text.secondary
- Active: primary.main
- Disabled: text.disabled

### Spacing
- Margin-right: 16px (standard)
- Margin-right: 0 (mini variant collapsed)

## Additional Styling

### Scrollbar (when content overflows)
- Width: 6px
- Track: transparent
- Thumb: rgba(145, 158, 171, 0.24)
- Thumb hover: rgba(145, 158, 171, 0.48)
- Border-radius: 3px

### Dividers
- Color: rgba(145, 158, 171, 0.24)
- Height: 1px
- Margin: 16px 0

### Badge/Notification Indicators
- Size: 20px (height), min 20px (width)
- Padding: 0 6px
- Font size: 12px
- Font weight: 600
- Border-radius: 10px
- Position: absolute right: 16px
