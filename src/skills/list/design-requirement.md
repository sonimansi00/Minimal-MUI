# List Component Design Requirements

## Dimensions

### Item Heights
- **Standard List Item**: 56px
- **Dense List Item**: 40px
- **Two-line Item**: 72px
- **Three-line Item**: 88px

### Spacing & Padding
- **Horizontal Padding**: 16px (left and right)
- **Vertical Padding**: 8px (top and bottom)
- **Dense Horizontal Padding**: 16px
- **Dense Vertical Padding**: 4px
- **Nested Item Indent**: 16px per level

## Typography

### Primary Text
- **Font Size**: 14px
- **Font Weight**: 400
- **Line Height**: 1.57143
- **Color**: rgb(33, 43, 54)

### Secondary Text
- **Font Size**: 12px
- **Font Weight**: 400
- **Line Height**: 1.5
- **Color**: rgb(99, 115, 129)

## Icons & Avatars

### Icons
- **Size**: 24px
- **Min Width**: 40px
- **Color**: rgb(99, 115, 129)
- **Margin Right**: 16px

### Avatars
- **Size**: 40px (standard), 32px (dense)
- **Shape**: Circular
- **Margin Right**: 16px

## Colors & States

### Default State
- **Background**: transparent
- **Text Color**: rgb(33, 43, 54)

### Hover State
- **Background**: rgba(145, 158, 171, 0.08)
- **Transition**: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)

### Selected State
- **Background**: rgba(0, 184, 217, 0.08)
- **Border Left**: 2px solid rgb(0, 184, 217)
- **Text Color**: rgb(0, 184, 217)

### Active State
- **Background**: rgba(0, 184, 217, 0.16)

### Disabled State
- **Opacity**: 0.48
- **Cursor**: not-allowed

## Dividers

### Standard Divider
- **Height**: 1px
- **Color**: rgba(145, 158, 171, 0.2)
- **Margin**: 0px

### Inset Divider
- **Margin Left**: 72px (with icon/avatar)

## Interactive Elements

### Checkbox
- **Size**: 20px
- **Color**: rgb(99, 115, 129)
- **Checked Color**: rgb(0, 184, 217)
- **Position**: Left or Right

### Switch
- **Width**: 34px
- **Height**: 14px
- **Track Color**: rgba(145, 158, 171, 0.48)
- **Checked Track Color**: rgba(0, 184, 217, 0.48)
- **Thumb Size**: 20px
- **Thumb Color**: rgb(255, 255, 255)
- **Checked Thumb Color**: rgb(0, 184, 217)

## Accessibility

- **Focus Visible**: 2px solid rgb(0, 184, 217) outline
- **Keyboard Navigation**: Arrow keys for navigation
- **ARIA Labels**: Required for icon-only buttons
- **Role**: list, listitem

## Responsive Behavior

- **Mobile (<600px)**: Maintain 56px height, reduce horizontal padding to 12px
- **Tablet (600-960px)**: Standard spacing
- **Desktop (>960px)**: Standard spacing

## Animation

### Hover Transition
- **Duration**: 150ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

### Ripple Effect
- **Duration**: 550ms
- **Color**: rgba(0, 184, 217, 0.3)

### Collapse/Expand
- **Duration**: 300ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
