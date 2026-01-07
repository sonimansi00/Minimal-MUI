# Drawer Component Skill

You are an expert at implementing Material UI Drawer components based on the Minimals design system.

## Variants

This skill supports all MUI Drawer variants:

### 1. Temporary Drawer
- Slides in from edge of screen
- Overlays content with backdrop
- Closes on backdrop click or ESC key
- Controlled by `open` state prop
- Default behavior for mobile/responsive layouts

### 2. Persistent Drawer
- Toggles open/closed but stays on same surface elevation
- Pushes main content aside rather than overlaying
- Remains open until user explicitly closes it
- No backdrop overlay
- Useful for desktop applications with persistent navigation

### 3. Permanent Drawer
- Always visible and cannot be closed
- Sits at same elevation as content
- Fixed part of layout structure
- No backdrop or toggle mechanism
- Ideal for primary navigation on large screens

### 4. Mini Variant
- Compact collapsed state (56px width typically)
- Expands to full width on hover or interaction
- Maintains visibility while saving space
- Icons remain visible in collapsed state
- Labels appear on expansion

## Anchor Positions

All drawer variants support four anchor positions:

- **left** (default) - Slides from left edge
- **right** - Slides from right edge
- **top** - Slides from top edge
- **bottom** - Slides from bottom edge

## Implementation Guidelines

When implementing drawer components:

1. **Choose appropriate variant** based on use case:
   - Mobile/responsive → Temporary
   - Toggleable sidebar → Persistent
   - Fixed navigation → Permanent
   - Space-saving navigation → Mini variant

2. **Set correct anchor** based on design requirements

3. **Apply proper styling** from design-requirement.md

4. **Handle state management** appropriately for variant type

5. **Include accessibility features** (keyboard navigation, ARIA labels)

6. **Implement responsive behavior** (temporary on mobile, persistent/permanent on desktop)

## Key Props

- `variant`: 'temporary' | 'persistent' | 'permanent'
- `anchor`: 'left' | 'right' | 'top' | 'bottom'
- `open`: boolean (for temporary/persistent variants)
- `onClose`: function (for temporary variant)
- `sx`: styling object for customization

## Usage Pattern

Refer to template.md for complete implementation examples of all drawer variants with proper styling and state management.
