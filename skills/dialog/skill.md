# Dialog Component Skill

Create Dialog components following the Minimals UI design system specifications.

## Available Variants

1. **Basic Dialog** - Simple dialog with title, content, and actions
2. **Alert Dialog** - Warning/confirmation dialogs with critical actions
3. **Form Dialog** - Dialogs containing form inputs and validation
4. **Full Screen Dialog** - Mobile-optimized full-screen experience
5. **Scrollable Dialog** - Long content with scrollable body
6. **Draggable Dialog** - Interactive draggable dialogs
7. **Sizes** - xs, sm, md, lg, xl predefined sizes
8. **Custom Actions** - Flexible action button configurations

## Component Features

- MUI v5 Dialog, DialogTitle, DialogContent, DialogActions
- Consistent 16px border-radius
- Proper spacing and padding hierarchy
- Typography: 18px bold titles
- Backdrop with blur effect
- Responsive behavior
- Accessible ARIA attributes
- Smooth animations

## Usage Instructions

When a user requests a dialog component:

1. Identify the variant needed (basic, alert, form, etc.)
2. Apply Minimals design specifications
3. Include proper state management (open/close)
4. Add appropriate button actions
5. Ensure responsive behavior
6. Apply accessibility features

## Design Specifications

- Border radius: 16px
- Title typography: 18px, font-weight 700
- Content padding: 24px
- Action button spacing: 8px gap
- Backdrop: rgba(0, 0, 0, 0.5) with blur
- Animation: Fade with scale transform

## Implementation Guidelines

- Always include open state management
- Provide onClose handler for backdrop clicks
- Use DialogTitle for semantic heading
- Separate content and actions clearly
- Apply maxWidth prop for size variants
- Use fullScreen prop for mobile optimization
