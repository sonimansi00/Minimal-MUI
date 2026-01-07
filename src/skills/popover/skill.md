# Popover Component Skill

## Overview
Create modern, accessible Popover components following Minimals UI design patterns with MUI v5.

## Variants

### 1. Basic Popover
Simple popover with click trigger and smooth transitions.
- Click to open/close
- Smooth fade animation
- Clean borders and shadows
- Proper z-index handling

### 2. Anchor Origin Popover
Demonstrates different anchor origin positions.
- Top/Bottom alignment options
- Left/Right/Center positioning
- Visual indicators for anchor points
- Dynamic positioning based on trigger

### 3. Transform Origin Popover
Shows transform origin customization for animation effects.
- Customizable transform origins
- Smooth scale/fade animations
- Multiple origin combinations
- Coordinated with anchor origin

### 4. Hover Popover
Opens on mouse hover with delay handling.
- MouseEnter/MouseLeave triggers
- Configurable hover delays
- Smooth enter/exit transitions
- Prevents flickering on quick movements

### 5. Menu Popover
Enhanced popover with menu-like interactions.
- Clickable menu items
- Hover states for items
- Dividers and sections
- Icon support
- Close on item selection

### 6. Arrow Popover
Popover with directional arrow pointing to trigger.
- Dynamic arrow positioning
- Arrow follows anchor position
- Proper shadow and border handling
- Top/Bottom/Left/Right arrow variants

## Implementation Requirements

### Core Features
- Full MUI v5 Popover integration
- TypeScript support
- Accessible (ARIA labels)
- Responsive behavior
- Smooth animations
- Proper cleanup on unmount

### Design System Alignment
- Border-radius: 8px
- Shadow: elevation levels
- Padding: 16px (content area)
- Arrow size: 12px
- Transition duration: 225ms
- Backdrop: semi-transparent

### Props Interface
```typescript
interface PopoverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  anchorOrigin?: {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'right' | 'center';
  };
  transformOrigin?: {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'right' | 'center';
  };
  arrow?: boolean;
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}
```

## Usage Context
Use this skill when the user requests:
- Popover components
- Tooltips with rich content
- Context menus
- Dropdown panels
- Action menus
- Information panels
- Hover cards
- Settings popovers
