# Radio Button Component Skill

This skill helps you implement Radio button components using Material-UI (MUI) v5, following the Minimals UI design system standards.

## Variants Supported

### 1. Basic Radio Buttons
Simple radio button implementation with default styling.

**Use Case:** Single selection from a list of options
**Features:**
- Default radio button
- Basic label integration
- Standard MUI styling

### 2. Sizes
Radio buttons in different sizes to match your UI hierarchy.

**Available Sizes:**
- **Small (18px)** - Compact forms, dense layouts
- **Medium (20px)** - Default size, general use
- **Large (24px)** - Emphasis, accessibility

**Implementation:** Use `size` prop with values: `small`, `medium`, `large`

### 3. Colors
Radio buttons with different color schemes following the design system.

**Available Colors:**
- **Primary (#00A76F)** - Main actions, default selection
- **Secondary** - Alternative emphasis
- **Error** - Error states, validation
- **Warning** - Warning states
- **Info** - Informational selections
- **Success** - Success states

**Implementation:** Use `color` prop with theme color names

### 4. Row/Column Layout
Flexible layout options for radio button groups.

**Row Layout:**
- Horizontal arrangement
- Space-efficient for few options
- Uses `row` direction in RadioGroup

**Column Layout:**
- Vertical arrangement (default)
- Better for many options
- Uses `column` direction in RadioGroup

### 5. Label Position
Control where labels appear relative to radio buttons.

**Options:**
- **End (default)** - Label after radio button
- **Start** - Label before radio button
- **Top** - Label above radio button
- **Bottom** - Label below radio button

**Implementation:** Use `labelPlacement` prop in FormControlLabel

### 6. Controlled Component
Radio buttons with React state management for controlled behavior.

**Features:**
- Value management with useState
- onChange event handling
- Programmatic control
- Form integration ready

### 7. Disabled State
Radio buttons in disabled state for read-only scenarios.

**Features:**
- Disabled individual radios
- Disabled entire radio group
- Visual feedback (opacity, no interaction)
- Accessibility compliant

### 8. Form Group
Complete form integration with labels, helper text, and error handling.

**Features:**
- FormControl wrapper
- FormLabel for group title
- FormHelperText for descriptions
- Error state handling
- Validation feedback

## When to Use This Skill

Use this skill when you need to:
- Add radio button selections to forms
- Implement single-choice selections
- Create settings panels with options
- Build survey or questionnaire interfaces
- Add configuration controls

## Design Guidelines

- Use radio buttons when users must choose exactly ONE option from 2-7 choices
- For more than 7 options, consider a Select dropdown
- For multiple selections, use Checkboxes instead
- Always provide clear, concise labels
- Group related options together
- Indicate required fields clearly
- Provide immediate validation feedback

## Accessibility

- All radio buttons include proper ARIA labels
- Keyboard navigation supported (arrow keys, tab)
- Focus indicators visible
- Screen reader compatible
- Disabled states announced properly
