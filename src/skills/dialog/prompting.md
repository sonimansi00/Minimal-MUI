# Dialog Component Prompting Guide

Instructions for interpreting user requests and generating appropriate Dialog components.

## Request Interpretation

### Identifying Dialog Type

**Basic Dialog Indicators:**
- "simple dialog"
- "show a message"
- "basic popup"
- "modal window"

**Alert Dialog Indicators:**
- "confirm", "confirmation"
- "delete", "remove", "warning"
- "are you sure"
- "alert", "critical"

**Form Dialog Indicators:**
- "input", "form", "enter"
- "create", "add", "edit"
- "submit", "save"
- "fields", "validation"

**Full Screen Dialog Indicators:**
- "full screen", "fullscreen"
- "mobile view"
- "maximize"
- "entire screen"

**Scrollable Dialog Indicators:**
- "long content"
- "scrollable", "scroll"
- "lots of text"
- "terms and conditions"

**Draggable Dialog Indicators:**
- "drag", "draggable"
- "move around"
- "reposition"

**Size Indicators:**
- "small", "tiny" → xs or sm
- "medium", "default" → md
- "large", "big" → lg
- "extra large", "wide" → xl

## Response Strategy

### 1. Clarify Requirements
If the request is ambiguous, ask:
- What content will the dialog display?
- What actions should be available?
- What size is appropriate?
- Should it be dismissible?

### 2. Select Appropriate Variant
Based on the analysis, choose:
- Basic: General purpose dialogs
- Alert: Destructive or critical actions
- Form: User input required
- Full Screen: Complex content or mobile-first
- Scrollable: Long content
- Draggable: User-controlled positioning

### 3. Determine Component Structure
Include:
- State management (useState for open/close)
- Button handler (onClick to open)
- Dialog with proper props
- DialogTitle with descriptive text
- DialogContent with actual content
- DialogActions with appropriate buttons

### 4. Apply Design Requirements
Ensure:
- 16px border-radius via sx prop
- Proper maxWidth prop
- Correct padding structure
- Title typography (18px, bold)
- Action button spacing
- Backdrop styling

### 5. Add Functionality
Implement:
- onClose handler for backdrop/ESC key
- Button onClick handlers
- Form submission if applicable
- Validation if form dialog
- Drag handlers if draggable

## Common Patterns

### Pattern: Confirmation Dialog
User says: "Create a delete confirmation dialog"

Generate:
- Alert dialog variant
- Title: "Confirm Delete" or specific item name
- Content: Warning message about consequences
- Actions: Cancel (text) + Delete (contained, error color)

### Pattern: Create/Edit Dialog
User says: "Dialog to add a new user"

Generate:
- Form dialog variant
- Title: "Add New User"
- Content: TextField components for inputs
- Actions: Cancel + Save/Create
- Include basic form state management

### Pattern: Information Display
User says: "Show product details in a dialog"

Generate:
- Basic dialog variant
- Appropriate size (md or lg)
- Title: Product name or "Product Details"
- Content: Structured information display
- Actions: Close or OK button

### Pattern: Terms/Privacy
User says: "Terms and conditions dialog"

Generate:
- Scrollable dialog variant
- lg or xl size
- Title: "Terms and Conditions"
- Content with dividers prop
- Actions: Decline + Accept

## Code Generation Guidelines

### Always Include:
1. Import statements for all MUI components
2. React useState for dialog state
3. Trigger button to open dialog
4. Properly structured Dialog component
5. Close handler function
6. Semantic HTML structure
7. Comments explaining key parts

### Never Omit:
- onClose prop on Dialog
- open prop on Dialog
- Action buttons (unless explicitly requested)
- DialogTitle (for accessibility)
- Proper maxWidth for non-fullscreen dialogs

### Customize Based On:
- User's specific content requirements
- Action button labels and handlers
- Size requirements
- Additional features (draggable, scrollable)
- Form fields and validation
- Styling variations

## Example Interpretations

| User Request | Variant | Size | Key Features |
|--------------|---------|------|--------------|
| "Create a welcome dialog" | Basic | sm | Simple message, OK button |
| "Confirm account deletion" | Alert | xs | Warning, Cancel + Delete |
| "Add product form" | Form | md | TextFields, Cancel + Save |
| "View full article" | Scrollable | lg | Long content, dividers |
| "Mobile settings panel" | Full Screen | - | Complete view, close icon |
| "Movable note dialog" | Draggable | sm | Drag handle, reposition |

## Validation Checklist

Before returning the code, verify:
- [ ] Correct variant selected
- [ ] All imports present
- [ ] State management included
- [ ] Trigger mechanism provided
- [ ] Close handler implemented
- [ ] Proper Dialog structure
- [ ] Design specs applied (16px radius, etc.)
- [ ] Appropriate size set
- [ ] Action buttons present
- [ ] Accessibility attributes included
- [ ] Code is complete and runnable
- [ ] Comments explain usage
