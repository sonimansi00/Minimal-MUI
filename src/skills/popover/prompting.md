# Popover Component Prompting Guide

## User Request Interpretation

### Trigger Keywords
Activate this skill when user mentions:
- "popover"
- "popup menu"
- "context menu"
- "hover menu"
- "dropdown panel"
- "action menu"
- "tooltip with actions"
- "info popover"
- "settings popover"
- "menu popover"

### Variant Detection

#### Basic Popover
User says:
- "simple popover"
- "basic popup"
- "click to open menu"
- "show popover on click"
- "popover with content"

#### Anchor Origin
User says:
- "position popover at [position]"
- "anchor to [top/bottom/left/right]"
- "popover from [direction]"
- "align popover [position]"

#### Transform Origin
User says:
- "animate from [direction]"
- "scale from [position]"
- "grow from corner"
- "transform origin"

#### Hover Popover
User says:
- "show on hover"
- "hover to open"
- "mouse over menu"
- "tooltip menu"
- "hover card"

#### Menu Popover
User says:
- "menu with options"
- "action menu"
- "dropdown menu"
- "clickable items"
- "list of actions"
- "settings menu"

#### Arrow Popover
User says:
- "popover with arrow"
- "pointing arrow"
- "arrow pointing to button"
- "directional indicator"
- "tooltip arrow"

## Context Analysis

### Determine Variant Based On Use Case

**Dashboard Actions**
- Use Menu Popover
- Include relevant action items
- Add icons for clarity
- Handle selection callbacks

**Information Display**
- Use Basic or Arrow Popover
- Read-only content
- Clear dismiss behavior
- Position for readability

**User Profiles**
- Use Menu Popover or Hover Popover
- Profile information
- Quick actions
- Logout option

**Settings/Options**
- Use Menu Popover
- Organized sections
- Dividers between groups
- Clear action labels

**Help/Tooltips**
- Use Arrow Popover
- Concise information
- Good contrast
- Clear positioning

## Customization Interpretation

### Position Requests
"Open above button" → anchorOrigin: { vertical: 'top', horizontal: 'center' }
"Open below button" → anchorOrigin: { vertical: 'bottom', horizontal: 'center' }
"Open to the right" → anchorOrigin: { vertical: 'center', horizontal: 'right' }
"Open to the left" → anchorOrigin: { vertical: 'center', horizontal: 'left' }
"Open at top-right" → anchorOrigin: { vertical: 'top', horizontal: 'right' }

### Animation Requests
"Slide from top" → transformOrigin: { vertical: 'top', horizontal: 'center' }
"Grow from corner" → transformOrigin: { vertical: 'bottom', horizontal: 'right' }
"Scale from center" → transformOrigin: { vertical: 'center', horizontal: 'center' }

### Content Requests
"Show user info" → Profile card content
"List actions" → Menu items with onClick handlers
"Display message" → Text content with formatting
"Show settings" → Form controls or toggles

## Props Generation Logic

### Determine Required Props
```javascript
// Always required
- open: boolean
- anchorEl: HTMLElement | null
- onClose: () => void

// Context-dependent
- anchorOrigin: based on position request
- transformOrigin: based on animation request
- arrow: if arrow variant requested
- children: based on content needs
```

### Infer Missing Props
If user doesn't specify:
- Default anchor: bottom-center
- Default transform: top-center (opposite of anchor)
- Default arrow: false
- Default content: placeholder text

### Handle Special Cases
**Hover variant requires:**
- onMouseEnter and onMouseLeave handlers
- Delay timers for smooth UX
- disableRestoreFocus prop

**Menu variant requires:**
- MenuItem components
- onClick handlers for each item
- onClose on item selection
- Optional ListItemIcon for icons

**Arrow variant requires:**
- Custom styled arrow element
- Dynamic positioning based on anchor
- Proper z-index management
- Shadow and border coordination

## Implementation Strategy

### Step 1: Understand Requirements
- Identify variant type
- Determine positioning needs
- Assess content requirements
- Check for special interactions

### Step 2: Generate Component Structure
- Import necessary MUI components
- Set up state management (open, anchorEl)
- Create event handlers
- Structure content hierarchy

### Step 3: Apply Styling
- Use design-requirement.md specifications
- Apply border-radius, shadows, padding
- Handle arrow styling if needed
- Ensure responsive behavior

### Step 4: Add Interactions
- Implement trigger logic (click/hover)
- Handle close behavior
- Add keyboard support
- Ensure accessibility

### Step 5: Test Scenarios
- Mention edge cases to consider
- Viewport boundaries
- Mobile responsiveness
- Keyboard navigation
- Screen reader support

## Common Patterns

### Pattern 1: Button Trigger
```javascript
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => setAnchorEl(event.currentTarget);
const handleClose = () => setAnchorEl(null);
```

### Pattern 2: Hover Trigger
```javascript
const [anchorEl, setAnchorEl] = useState(null);
const [hoverTimer, setHoverTimer] = useState(null);

const handleMouseEnter = (event) => {
  const timer = setTimeout(() => {
    setAnchorEl(event.currentTarget);
  }, 300);
  setHoverTimer(timer);
};

const handleMouseLeave = () => {
  if (hoverTimer) clearTimeout(hoverTimer);
  setAnchorEl(null);
};
```

### Pattern 3: Menu Actions
```javascript
const handleMenuItemClick = (action) => {
  action(); // Execute the action
  setAnchorEl(null); // Close popover
};
```

## Error Prevention

### Common Mistakes to Avoid
- Forgetting to clean up timers (hover variant)
- Not preventing scroll on mobile
- Missing accessibility attributes
- Incorrect z-index causing overlap issues
- Arrow positioning not updating with anchor
- Missing focus management

### Validation Checklist
- [ ] anchorEl properly typed
- [ ] Event handlers correctly bound
- [ ] Cleanup functions included
- [ ] Accessibility props present
- [ ] Responsive styles applied
- [ ] Arrow positioning dynamic
- [ ] Close behavior intuitive

## Response Format

When generating popover component:
1. Brief explanation of chosen variant
2. Complete working code
3. Usage example
4. Customization notes
5. Accessibility considerations
6. Testing recommendations

Keep code clean, well-commented, and following project conventions.
