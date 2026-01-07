# Checkbox Prompting Guide

This guide helps interpret user requests and generate appropriate checkbox implementations.

## User Request Patterns

### Pattern 1: Basic Checkbox
**User says:**
- "Add a checkbox"
- "I need a simple checkbox"
- "Create a checkbox component"

**Action:** Generate Basic Checkbox variant

---

### Pattern 2: Size-Specific
**User says:**
- "Small checkbox for the table"
- "Large checkbox for mobile"
- "Compact checkbox"

**Action:** Generate checkbox with appropriate size prop (small/medium/large)

---

### Pattern 3: Color Customization
**User says:**
- "Green checkbox"
- "Error checkbox"
- "Warning-colored checkbox"
- "Primary checkbox"

**Action:** Generate checkbox with color prop matching the theme

---

### Pattern 4: Indeterminate State
**User says:**
- "Select all checkbox"
- "Parent checkbox for nested list"
- "Checkbox with indeterminate state"
- "Minus checkbox"

**Action:** Generate indeterminate checkbox with proper state handling

---

### Pattern 5: Form Integration
**User says:**
- "Checkbox with label"
- "Terms and conditions checkbox"
- "Agreement checkbox"
- "Checkbox in a form"

**Action:** Generate FormControlLabel with checkbox

---

### Pattern 6: Multiple Options
**User says:**
- "Multiple checkboxes"
- "Checkbox group"
- "List of checkboxes"
- "Filter checkboxes"

**Action:** Generate FormGroup with multiple checkboxes

---

### Pattern 7: Disabled State
**User says:**
- "Read-only checkbox"
- "Disabled checkbox"
- "Non-editable checkbox"

**Action:** Generate checkbox with disabled prop

---

### Pattern 8: Custom Styling
**User says:**
- "Custom checkbox icon"
- "Styled checkbox"
- "Checkbox with custom appearance"

**Action:** Generate checkbox with custom icons or sx props

---

### Pattern 9: Controlled State
**User says:**
- "Checkbox with state management"
- "Controlled checkbox"
- "Checkbox that updates state"

**Action:** Generate controlled checkbox with useState

---

## Context Analysis

### Determine Size:
- **Mobile/Touch UI** → Large (24px)
- **Data Table/List** → Small (18px)
- **Standard Form** → Medium (20px - default)

### Determine Color:
- **Error/Validation** → error
- **Success/Confirmation** → success
- **General Use** → primary (#00A76F)
- **Warning/Caution** → warning

### Determine Variant:
- **Single Option** → Basic with label
- **Multiple Options** → FormGroup
- **Hierarchical Selection** → Indeterminate
- **View-Only** → Disabled

## Question Prompts

If requirements are unclear, ask:

1. **Size:** "What size checkbox do you need? Small (18px) for tables, Medium (20px) for forms, or Large (24px) for touch interfaces?"

2. **Color:** "Which color scheme? Primary (green), Secondary (purple), Error (red), Warning (orange), Info (cyan), Success (green), or Default?"

3. **Label:** "Does the checkbox need a label? If yes, what should it say?"

4. **State Management:** "Should this be a controlled component with state, or uncontrolled?"

5. **Group:** "Is this a single checkbox or part of a group of options?"

6. **Behavior:** "Any special behavior needed? (e.g., indeterminate state, disabled, custom validation)"

## Code Generation Rules

1. Always import required MUI components
2. Use TypeScript if project uses it
3. Include proper state management for controlled checkboxes
4. Add helpful comments for complex logic
5. Follow Minimals theme configuration
6. Ensure accessibility (labels, ARIA attributes)
7. Include event handlers (onChange) when needed
8. Use sx prop for custom styling instead of inline styles
9. Export component properly
10. Include PropTypes or TypeScript types

## Example Interpretations

### Request: "Add a terms checkbox to the signup form"
**Generate:**
- FormControlLabel
- Medium size (form context)
- Primary color
- Required validation
- Label: "I agree to the Terms and Conditions"
- Controlled state

### Request: "Select all checkbox for the data table"
**Generate:**
- Indeterminate checkbox
- Small size (table context)
- Logic to handle parent/child selection
- No label or icon-only with ARIA label

### Request: "Filter checkboxes for categories"
**Generate:**
- FormGroup
- Multiple checkboxes with labels
- Medium size
- Primary color
- Controlled state with array management
