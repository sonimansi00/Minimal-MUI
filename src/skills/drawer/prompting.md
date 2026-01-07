# Drawer Component Prompting Guide

This document helps interpret user requests and map them to appropriate drawer implementations.

## Request Interpretation

### Variant Selection

When users request:

| User Says | Implement As | Reasoning |
|-----------|--------------|-----------|
| "navigation drawer" | Temporary on mobile, Persistent on desktop | Standard responsive pattern |
| "sidebar" | Persistent or Permanent | Context-dependent, ask if toggleable |
| "menu" | Temporary | Quick access, dismissible |
| "collapsible sidebar" | Persistent | User wants toggle functionality |
| "always visible sidebar" | Permanent | Fixed navigation |
| "compact navigation" | Mini variant | Space-saving requirement |
| "mobile menu" | Temporary with bottom anchor | Mobile-first pattern |
| "side panel" | Temporary with right anchor | Auxiliary content |
| "filter panel" | Temporary | Contextual, dismissible |
| "settings panel" | Temporary with right anchor | Secondary functionality |

### Anchor Position Selection

When users request:

| User Says | Anchor | Notes |
|-----------|--------|-------|
| "left sidebar" | left | Default position |
| "right panel" | right | Common for auxiliary content |
| "slide from side" | left or right | Ask which side if unclear |
| "bottom sheet" | bottom | Mobile pattern |
| "top notification" | top | Rare, confirm use case |
| "filters on right" | right | E-commerce pattern |
| "navigation on left" | left | Standard pattern |

### State Management Clues

When users mention:

| User Says | Implies | Implementation |
|-----------|---------|----------------|
| "toggle" | State-controlled | useState hook for open/close |
| "click to open/close" | Temporary or Persistent | Button triggers state change |
| "hamburger menu" | Temporary drawer | Mobile navigation pattern |
| "always show" | Permanent | No state management needed |
| "hide on mobile" | Responsive behavior | Conditional rendering by breakpoint |
| "open by default" | Initial state true | useState(true) |
| "remember state" | Persistent storage | localStorage integration |

### Styling Clues

When users mention:

| User Says | Apply | From design-requirement.md |
|-----------|-------|----------------------------|
| "wider" | 320px width | Wide drawer variant |
| "compact" | 56px collapsed | Mini variant |
| "no shadow" | Elevation 0 | Persistent/permanent style |
| "dark overlay" | Backdrop styling | Temporary drawer backdrop |
| "icons only" | Mini variant collapsed | Icon-only view |
| "with labels" | Standard or expanded | Full list items with text |
| "bordered" | Border-right | Persistent/permanent border |
| "floating" | Elevation 16 | Temporary drawer shadow |

## Common Request Patterns

### Pattern 1: Responsive Navigation
**User request**: "Add a navigation sidebar that works on mobile and desktop"

**Interpretation**:
- Variant: Temporary (mobile), Persistent or Permanent (desktop)
- Anchor: left
- Breakpoint: 900px
- State: Controlled with useState

### Pattern 2: Filter Panel
**User request**: "Create a filter drawer on the right side"

**Interpretation**:
- Variant: Temporary
- Anchor: right
- Width: 320px (wider for form content)
- State: Controlled, opens via button

### Pattern 3: Compact Navigation
**User request**: "Make a collapsible sidebar with icons"

**Interpretation**:
- Variant: Mini variant
- Anchor: left
- Collapsed width: 56px
- Expanded width: 280px
- State: Controlled hover or click

### Pattern 4: Mobile Bottom Sheet
**User request**: "Add a bottom menu for mobile"

**Interpretation**:
- Variant: Temporary
- Anchor: bottom
- Responsive: Mobile only (< 900px)
- Height: Auto or 50vh

### Pattern 5: Settings Panel
**User request**: "Add settings panel that slides from right"

**Interpretation**:
- Variant: Temporary
- Anchor: right
- Width: 320px
- Backdrop: Yes
- Close on action: Yes

## Ambiguity Resolution

### When variant is unclear:

Ask:
1. "Should this be always visible or toggleable?"
2. "Should it overlay content or push it aside?"
3. "Is this for mobile, desktop, or both?"

Default to: Temporary (mobile), Persistent (desktop)

### When anchor is unclear:

Ask:
1. "Should this appear from the left or right?"
2. "Is this primary navigation or auxiliary content?"

Default to: left (navigation), right (auxiliary)

### When width is unclear:

Ask:
1. "How much content needs to fit?"
2. "Should it be compact or spacious?"

Default to: 280px (standard navigation)

### When state management is unclear:

Ask:
1. "Should it be open by default?"
2. "Should it remember the last state?"
3. "Should it auto-close on certain actions?"

Default to: Closed by default, manual control

## Integration Questions

Before implementing, consider:

1. **Layout impact**: Does existing layout need adjustment?
2. **App bar**: Should drawer work with existing app bar?
3. **Content**: What navigation items or content goes inside?
4. **Actions**: What triggers drawer open/close?
5. **Responsive**: Different behavior at different screen sizes?
6. **Persistence**: Should state persist across sessions?

## Response Template

When implementing a drawer, confirm with user:

```
I'll create a [VARIANT] drawer with the following specs:
- Anchor: [POSITION]
- Width: [WIDTH]px
- Variant: [VARIANT]
- Responsive: [BEHAVIOR]
- Styling: [KEY STYLES]

The drawer will include:
- [CONTENT DESCRIPTION]
- [STATE MANAGEMENT]
- [SPECIAL FEATURES]

Does this match your requirements?
```

## Edge Cases

### Multiple Drawers
If user requests multiple drawers:
- Different anchors: OK (e.g., left navigation + right filters)
- Same anchor: Ask for clarification on use case
- Overlapping: Consider z-index and interaction patterns

### Nested Content
If drawer contains complex content:
- Forms: Use 320px width
- Data tables: Consider full-width temporary drawer
- Nested lists: Implement collapse/expand within drawer
- Scrollable: Ensure proper scroll behavior

### Custom Styling
If user requests non-standard styling:
- Validate against design system
- Propose alternative that matches design-requirement.md
- If essential, document deviation from standard

## Keywords Reference

**Temporary**: overlay, popup, modal-like, dismissible, backdrop, temporary
**Persistent**: toggleable, push content, sidebar, collapsible, stay open
**Permanent**: always visible, fixed, static, cannot close
**Mini**: compact, collapsed, icon-only, expandable, small
**Left**: navigation, menu, sidebar, main
**Right**: filters, settings, auxiliary, secondary, panel
**Top**: notifications, announcements (rare)
**Bottom**: mobile, sheet, modal (mobile pattern)
