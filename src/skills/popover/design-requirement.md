# Popover Design Requirements

## Visual Specifications

### Container Styling
```css
border-radius: 8px
background: #FFFFFF
box-shadow:
  0px 0px 2px 0px rgba(145, 158, 171, 0.24),
  -20px 20px 40px -4px rgba(145, 158, 171, 0.24)
padding: 16px
min-width: 200px
```

### Elevation & Shadows
- Use MUI elevation level 20 for prominent popovers
- Use elevation level 8 for subtle popovers
- Custom shadow for Minimals design system
- Maintain consistent shadow across all variants

### Border & Radius
- Border-radius: 8px (all corners)
- No visible border (shadow provides definition)
- Clean, modern appearance
- Consistent with design system

### Spacing & Layout
- Content padding: 16px
- Item spacing: 8px vertical gap
- Menu item padding: 8px 16px
- Arrow size: 12px × 12px
- Arrow offset: 16px from edges

### Typography
- Menu item text: 14px, font-weight 400
- Title text: 16px, font-weight 600
- Helper text: 12px, font-weight 400
- Line-height: 1.5

## Arrow Styling

### Arrow Shape
```css
width: 12px
height: 12px
transform: rotate(45deg)
background: #FFFFFF
box-shadow: -3px -3px 6px rgba(145, 158, 171, 0.12)
```

### Arrow Positioning
- Top arrow: bottom edge, centered or offset
- Bottom arrow: top edge, centered or offset
- Left arrow: right edge, vertically centered
- Right arrow: left edge, vertically centered
- Default offset from edges: 16px

### Arrow Z-Index Management
- Arrow must render below content
- Arrow shadow must not overlap content
- Use clip-path or overflow to hide shadow bleeding

## Anchor Positioning

### Anchor Origin Variants
```javascript
// Top-Left
anchorOrigin={{ vertical: 'top', horizontal: 'left' }}

// Top-Center
anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

// Top-Right
anchorOrigin={{ vertical: 'top', horizontal: 'right' }}

// Bottom-Left
anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}

// Bottom-Center
anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}

// Bottom-Right
anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}

// Center-Center
anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
```

### Transform Origin Coordination
- Should complement anchor origin
- Creates natural opening animation
- Typically opposite to anchor position
- Example: anchor top-left → transform bottom-right

## Backdrop Styling

### Backdrop Properties
```css
background: transparent (for hover/menu popovers)
background: rgba(22, 28, 36, 0.48) (for modal popovers)
backdrop-filter: none
```

### Interaction Behavior
- Click backdrop to close (unless disabled)
- Hover popovers: transparent backdrop
- Modal popovers: semi-transparent backdrop
- Proper z-index stacking

## Animation & Transitions

### Entrance Animation
```css
transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 225ms cubic-bezier(0.4, 0, 0.2, 1)
transform-origin: [based on transformOrigin prop]
```

### Exit Animation
```css
transition: opacity 195ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 195ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover Delays
- Mouse enter delay: 300ms
- Mouse leave delay: 200ms
- Prevents flickering on quick movements

## Responsive Behavior

### Mobile Considerations
- Reduce padding to 12px on small screens
- Adjust max-width to fit viewport
- Ensure touch targets are min 44px
- Handle safe areas on iOS

### Viewport Constraints
- Auto-flip when near edges
- Maintain minimum margins (16px from viewport edges)
- Scroll content if exceeds max-height
- Max-height: calc(100vh - 32px)

## Accessibility Requirements

### ARIA Labels
```javascript
aria-describedby="popover-content"
aria-labelledby="popover-title"
role="dialog" or role="menu" (context-dependent)
```

### Keyboard Navigation
- ESC key closes popover
- Tab trap within popover (for modal variants)
- Focus management on open/close
- Arrow keys for menu navigation

### Screen Reader Support
- Announce popover state changes
- Describe popover content
- Associate with trigger element
- Proper focus restoration on close

## Color Specifications

### Light Theme
- Background: #FFFFFF
- Text primary: #212B36
- Text secondary: #637381
- Divider: rgba(145, 158, 171, 0.24)
- Hover background: rgba(145, 158, 171, 0.08)

### Dark Theme
- Background: #212B36
- Text primary: #FFFFFF
- Text secondary: #919EAB
- Divider: rgba(145, 158, 171, 0.24)
- Hover background: rgba(145, 158, 171, 0.16)
