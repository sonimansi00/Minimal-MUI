# Menu Component Prompting Guidelines

## How to Interpret User Requests

This guide helps you understand what users mean when they request menu components and map their requests to the correct variant.

---

## Common Request Patterns

### Basic Menu Requests

**User says:**
- "Create a menu"
- "I need a dropdown menu"
- "Make a simple menu with options"
- "Add a menu component"
- "Menu with [X] items"

**You should:**
- Generate a Basic Menu variant
- Use Button as trigger
- Include standard menu items
- Apply default positioning

---

### Icon Menu Requests

**User says:**
- "Menu with icon button"
- "Create a menu triggered by an icon"
- "IconButton menu"
- "More options menu" (⋮ icon)
- "Settings menu icon"

**You should:**
- Generate an Icon Menu variant
- Use IconButton (MoreVert icon typically)
- Compact design
- Include icons in menu items if appropriate

---

### Max Height Menu Requests

**User says:**
- "Menu with scrolling"
- "Long menu with many items"
- "Scrollable menu"
- "Menu with max height"
- "Menu that doesn't overflow the screen"

**You should:**
- Generate a Max Height Menu variant
- Set maxHeight to 300px
- Make overflow scrollable
- Include 10+ items to demonstrate scrolling

---

### Selected Menu Requests

**User says:**
- "Menu with selected item"
- "Show current selection in menu"
- "Menu that tracks selection"
- "Highlight selected option"
- "Menu with active state"

**You should:**
- Generate a Selected Menu variant
- Add state to track selected value
- Show checkmark on selected item
- Apply selected styling

---

### Positioned Menu Requests

**User says:**
- "Menu positioned at [location]"
- "Custom menu position"
- "Menu on the left/right/top/bottom"
- "Align menu to [edge]"

**You should:**
- Generate a Positioned Menu variant
- Set appropriate anchorOrigin
- Set appropriate transformOrigin
- Show multiple positioning examples

---

### Context Menu Requests

**User says:**
- "Right-click menu"
- "Context menu"
- "Menu on right click"
- "Show menu at mouse position"
- "Custom context menu"

**You should:**
- Generate a Context Menu variant
- Use onContextMenu event handler
- Position at mouse coordinates
- Prevent default browser context menu

---

### Nested Menu Requests

**User says:**
- "Menu with submenus"
- "Nested menu"
- "Multi-level menu"
- "Menu with child items"
- "Hierarchical menu"

**You should:**
- Generate a Nested Menu variant
- Include parent items with arrows
- Show sub-menu on hover
- Proper positioning for sub-menus

---

## Context Clues

### User Actions Context

**User mentions:**
- "User profile menu"
- "Account settings"
- "User options"

**Include items like:**
- Profile
- Settings
- Account
- Logout

---

### Navigation Context

**User mentions:**
- "Navigation menu"
- "Page links"
- "Site menu"

**Include items like:**
- Home
- About
- Services
- Contact

---

### Settings Context

**User mentions:**
- "Settings menu"
- "Preferences"
- "Configuration"

**Include items like:**
- General Settings
- Privacy
- Notifications
- Appearance

---

### Actions Context

**User mentions:**
- "Actions menu"
- "Operations"
- "Commands"

**Include items like:**
- Edit
- Delete
- Share
- Download

---

## Customization Keywords

### Color Customization

**User says:**
- "Make it [color]"
- "Use primary color"
- "Custom color"

**You should:**
- Apply color to selected state
- Adjust hover states
- Update icon colors
- Maintain readability

---

### Size Customization

**User says:**
- "Smaller menu"
- "Compact menu"
- "Large menu items"

**You should:**
- Adjust item height (default: 48px)
- Modify padding
- Scale icons
- Adjust font size

---

### Icon Requests

**User says:**
- "Add icons to items"
- "Menu with icons"
- "Icon for each option"

**You should:**
- Include ListItemIcon
- Use appropriate Material icons
- Align icons properly
- Color icons grey 600 by default

---

## Number of Items

### Default Counts
- **Not specified:** 5 items
- **"Few items":** 3-4 items
- **"Several items":** 5-7 items
- **"Many items":** 10-15 items (use max height)
- **"Long list":** 15-20 items (use max height + scroll)

---

## State Management Clues

### Controlled State

**User says:**
- "Track selected value"
- "Remember selection"
- "Store menu choice"

**You should:**
- Use useState for selected value
- Update on item click
- Show visual indication of selection

---

### Multiple Selection

**User says:**
- "Select multiple items"
- "Multi-select menu"
- "Checkboxes in menu"

**You should:**
- Use checkboxes instead of radio
- Track array of selected items
- Allow multiple selections

---

## Positioning Clues

### Anchor Origin

**User says:**
- "Open below button" → `{ vertical: 'bottom', horizontal: 'left' }`
- "Open above button" → `{ vertical: 'top', horizontal: 'left' }`
- "Open to the right" → `{ vertical: 'top', horizontal: 'right' }`
- "Open to the left" → `{ vertical: 'top', horizontal: 'left' }`

### Transform Origin

**User says:**
- "Align to top-right" → `{ vertical: 'top', horizontal: 'right' }`
- "Align to bottom-left" → `{ vertical: 'bottom', horizontal: 'left' }`

---

## Divider Clues

**User says:**
- "Group items"
- "Separate sections"
- "Add dividers"
- "Section headers"

**You should:**
- Add Divider components between groups
- Use ListSubheader for section titles
- Apply proper spacing

---

## Special Features

### With Badges

**User says:**
- "Show notification count"
- "Badge on menu item"
- "Unread indicator"

**You should:**
- Use Badge component
- Position on right side
- Show count or dot

---

### With Avatars

**User says:**
- "User menu with avatar"
- "Profile picture in menu"

**You should:**
- Use Avatar in ListItemIcon
- Proper sizing (32px)
- Show user initials if no image

---

### With Switch/Checkbox

**User says:**
- "Toggle in menu"
- "Settings with switches"

**You should:**
- Use Switch or Checkbox
- Place on secondaryAction
- Prevent menu close on toggle

---

## Responsive Considerations

**User says:**
- "Mobile friendly"
- "Responsive menu"
- "Works on small screens"

**You should:**
- Test on mobile viewport
- Consider fullScreen on mobile
- Adjust padding for touch targets

---

## Accessibility Clues

**User mentions:**
- "Accessible"
- "Keyboard navigation"
- "Screen reader support"

**You should:**
- Include aria-label on trigger
- Ensure focus management
- Add keyboard shortcuts documentation
- Test with Tab/Arrow keys

---

## Performance Clues

**User says:**
- "Many items" (100+)
- "Large menu"
- "Performance optimized"

**You should:**
- Consider virtualization
- Use React.memo
- Lazy load if very long
- Add search/filter for 50+ items

---

## Common Mistakes to Avoid

1. **Don't** use Popover when user asks for Menu
2. **Don't** forget anchorEl state management
3. **Don't** hard-code item text without context
4. **Don't** skip hover states
5. **Don't** forget to close menu on item click
6. **Don't** use wrong positioning props
7. **Don't** forget dividers between logical groups

---

## Best Practices

1. **Always** include proper state management
2. **Always** add handleClick and handleClose
3. **Always** apply Minimal UI styling
4. **Always** show working examples
5. **Always** include imports
6. **Always** document customization options
7. **Always** test keyboard navigation

---

## Examples of Complete Interpretations

### Example 1
**User:** "Create a user profile menu with 4 options"

**Interpretation:**
- Variant: Basic Menu (or Icon Menu)
- Items: Profile, Settings, Help, Logout
- Trigger: Button or IconButton
- Icons: Include appropriate icons
- State: Simple open/close state

---

### Example 2
**User:** "I need a right-click context menu for table rows"

**Interpretation:**
- Variant: Context Menu
- Items: Edit, Delete, Duplicate, View Details
- Trigger: onContextMenu event
- Positioning: Mouse coordinates
- State: Store mouse position

---

### Example 3
**User:** "Make a dropdown menu with 20 items that scrolls"

**Interpretation:**
- Variant: Max Height Menu
- Items: Generate 20 sample items
- Max height: 300px
- Scrollable: Yes
- Styling: Custom scrollbar

---

### Example 4
**User:** "Menu with sub-items for categories"

**Interpretation:**
- Variant: Nested Menu
- Structure: Parent → Children
- Items: Categories with sub-categories
- Hover behavior: Show sub-menu
- Icons: Arrow indicators

---

## When in Doubt

If the user's request is ambiguous:
1. Ask clarifying questions
2. Default to Basic Menu variant
3. Provide multiple variants as options
4. Show how to customize
5. Reference design-requirement.md
