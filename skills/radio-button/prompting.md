# Radio Button Component - Prompting Guide

## Understanding User Requests

This guide helps interpret user requests and map them to the correct Radio button variant and configuration.

## Common Request Patterns

### Pattern 1: Basic Selection
**User Says:**
- "I need radio buttons for [options]"
- "Add a radio button to select [X or Y]"
- "Create a single-choice selector"
- "Let users pick one option from [list]"

**Interpretation:**
- Variant: Basic Radio Buttons
- Implementation: RadioGroup with Radio components
- Default: Medium size, Primary color, Column layout

### Pattern 2: Size Requirements
**User Says:**
- "Small radio buttons for the table"
- "Make the radios bigger/larger"
- "Compact radio selection"
- "I need tiny radio buttons"

**Interpretation:**
- Variant: Sizes
- Small: "compact", "tiny", "small", "dense"
- Medium: "normal", "standard", "regular" (default)
- Large: "big", "large", "bigger", "prominent"

### Pattern 3: Color Customization
**User Says:**
- "Green radio buttons" → Primary (#00A76F)
- "Red radios for errors" → Error color
- "Use the secondary color" → Secondary
- "Success colored radios" → Success color

**Interpretation:**
- Variant: Colors
- Map color keywords to MUI color prop
- Default to primary if color ambiguous

### Pattern 4: Layout Direction
**User Says:**
- "Horizontal radio buttons"
- "Put them in a row"
- "Side by side radios"
- "Stack them vertically"
- "Inline radio options"

**Interpretation:**
- Variant: Row/Column Layout
- Row: "horizontal", "row", "side by side", "inline"
- Column: "vertical", "column", "stack", "list" (default)

### Pattern 5: Label Placement
**User Says:**
- "Label on the left"
- "Put text before the radio"
- "Labels on top"
- "Radio button with label at the end"

**Interpretation:**
- Variant: Label Position
- Start: "left", "before", "start"
- End: "right", "after", "end" (default)
- Top: "top", "above"
- Bottom: "bottom", "below"

### Pattern 6: Form Integration
**User Says:**
- "Radio group with title and description"
- "Add validation to radios"
- "Show error message"
- "Radio buttons in a form"
- "Required radio selection"

**Interpretation:**
- Variant: Form Group
- Include: FormControl, FormLabel, FormHelperText
- Add error prop if validation mentioned
- Add required indicator if needed

### Pattern 7: State Management
**User Says:**
- "Controlled radio buttons"
- "Track the selected value"
- "Handle radio change"
- "Manage radio state with React"

**Interpretation:**
- Variant: Controlled Component
- Use useState hook
- Implement onChange handler
- Provide value prop to RadioGroup

### Pattern 8: Disabled State
**User Says:**
- "Disabled radio buttons"
- "Read-only radios"
- "Make some options unavailable"
- "Gray out certain choices"

**Interpretation:**
- Variant: Disabled State
- Add disabled prop to Radio or RadioGroup
- Individual or group level based on context

## Contextual Clues

### Form Context
If user mentions:
- "Form", "input", "submit" → Use Form Group variant
- "Validation", "required", "error" → Add error handling
- "Settings", "preferences" → Use Controlled component

### UI/UX Context
If user mentions:
- "Mobile", "touch" → Recommend Large or Medium size
- "Dense", "compact", "table" → Recommend Small size
- "Accessibility" → Ensure labels and focus states
- "Theme", "brand colors" → Use appropriate color prop

### Data Context
If user provides:
- Array of options → Map to Radio components
- Object with labels/values → Use value for logic, label for display
- Nested groups → Consider separate RadioGroups

## Question Decision Tree

### Step 1: Determine Variant
1. Is this a simple selection? → Basic Radio Buttons
2. Does size matter for the layout? → Sizes
3. Is color specified? → Colors
4. Is layout direction mentioned? → Row/Column Layout
5. Is label position specified? → Label Position
6. Need state management? → Controlled Component
7. Any disabled requirements? → Disabled State
8. Part of a larger form? → Form Group

### Step 2: Configuration Details
Ask clarifying questions if:
- **Options unclear:** "What are the radio button options?"
- **Size ambiguous:** "What size works best: small, medium, or large?"
- **Layout uncertain:** "Should they be horizontal or vertical?"
- **Color not specified:** "What color theme: primary (green), secondary, or other?"
- **State management unclear:** "Do you need to track and handle the selected value?"

### Step 3: Additional Features
Consider asking about:
- **Required field:** "Is this selection required?"
- **Default selection:** "Should any option be selected by default?"
- **Validation:** "Do you need validation or error messages?"
- **Helper text:** "Should there be a description or hint?"

## Example Interpretations

### Example 1
**User Request:** "Add radio buttons to let users choose their preferred theme: Light, Dark, or Auto"

**Interpretation:**
- Variant: Controlled Component (needs state)
- Options: ["Light", "Dark", "Auto"]
- Size: Medium (default)
- Color: Primary
- Layout: Column (3 options)
- Features: Basic controlled implementation

### Example 2
**User Request:** "Create a small horizontal radio group for selecting shipping method with labels on the left"

**Interpretation:**
- Variant: Sizes + Row/Column Layout + Label Position
- Size: Small
- Layout: Row (horizontal)
- Label Position: Start (left)
- Color: Primary (default)

### Example 3
**User Request:** "I need a form section with radio buttons for user role selection. It should have a title, be required, and show an error if nothing is selected"

**Interpretation:**
- Variant: Form Group + Controlled Component
- Features:
  - FormControl wrapper
  - FormLabel for title
  - Required indicator
  - Error state handling
  - FormHelperText for error message
- Size: Medium
- Color: Primary, Error (for validation)

### Example 4
**User Request:** "Add disabled radio buttons showing the current plan that can't be changed"

**Interpretation:**
- Variant: Disabled State
- Purpose: Read-only display
- Size: Medium
- One radio checked and all disabled
- Include helper text explaining it's read-only

## Default Assumptions

When details are missing, use these defaults:
- **Size:** Medium (20px)
- **Color:** Primary (#00A76F)
- **Layout:** Column (vertical)
- **Label Position:** End (right)
- **State:** Controlled (if form context)
- **Required:** False (unless specified)
- **Helper Text:** None (unless error/validation needed)

## Anti-Patterns to Avoid

### Don't Use Radio Buttons When:
1. **Multiple selections needed** → Use Checkboxes
2. **More than 7 options** → Use Select dropdown
3. **Binary choice only** → Use Switch or Checkbox
4. **Actions required** → Use Buttons
5. **Hierarchical data** → Use TreeView or nested Select

### Suggest Alternatives:
- "For multiple selections, consider using checkboxes instead"
- "With 10 options, a select dropdown might be better"
- "For on/off settings, a switch component is more appropriate"

## Pro Tips

1. **Always provide labels** - Radio buttons without labels are not accessible
2. **Group related options** - Use FormControl to group related radios
3. **Set default values** - When possible, suggest a recommended option
4. **Use clear language** - Labels should be concise and unambiguous
5. **Consider mobile** - Use adequate sizing for touch targets (44px minimum)
6. **Show validation immediately** - Don't wait for form submit to show errors
7. **Persist selections** - Radio buttons should stay selected until changed
8. **Use consistent ordering** - Natural order (yes/no, low/high) or alphabetical
