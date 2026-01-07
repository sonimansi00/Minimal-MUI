# Button Component Prompting Guide

## How to Interpret User Requests

### Common Request Patterns

#### "Create a button"
- Default to: Contained, Medium, Primary
- Include basic onClick handler
- Use clear label text

#### "Add a submit button"
- Use: Contained, Primary
- Add type="submit"
- Consider adding loading state
- Usually Large or Medium size

#### "Create a cancel/back button"
- Use: Outlined or Text variant
- Color: Secondary or default
- Medium size
- Lower visual emphasis

#### "Delete button"
- Use: Contained, Error color
- Consider confirmation dialog pattern
- Add warning icon if appropriate

#### "Action buttons" / "CTA buttons"
- Use: Contained variant
- Large size for primary CTA
- Medium for secondary actions
- Primary color for main action

#### "Icon button for [action]"
- Use: IconButton component
- Choose appropriate icon from MUI icons
- Add aria-label for accessibility
- Default to Medium size

#### "Soft button"
- Use: Soft variant (light background)
- Good for secondary actions
- Less emphasis than Contained

#### "Button with loading"
- Add loading state prop
- Include CircularProgress
- Disable button when loading
- Keep button width stable

#### "Button group for [options]"
- Use: ButtonGroup component
- Connected buttons
- Usually Outlined variant
- Consider toggle behavior

### Size Selection Rules

Choose **Small** when:
- Space is limited (tables, cards, chips)
- Secondary or tertiary actions
- Dense UI layouts
- Mobile-optimized interfaces

Choose **Medium** when:
- Default/standard use case
- Forms and dialogs
- General page actions
- No specific size mentioned

Choose **Large** when:
- Primary call-to-action
- Landing pages
- Hero sections
- User explicitly requests prominent button
- Marketing/conversion-focused UI

### Variant Selection Rules

Choose **Contained** when:
- Primary actions
- High emphasis needed
- Submit, Save, Create, Confirm actions
- Main call-to-action

Choose **Outlined** when:
- Secondary actions
- Cancel, Back, Close actions
- Medium emphasis needed
- Alternative to primary action

Choose **Text** when:
- Tertiary actions
- Low emphasis needed
- Navigation within content
- "Learn more", "See details" type actions

Choose **Soft** when:
- Subtle primary actions
- Modern, soft UI aesthetic
- Between Text and Contained emphasis
- Info cards, notifications

### Color Selection Rules

**Primary**: Default choice, main brand actions
**Secondary**: Alternative actions, less critical paths
**Info**: Informational actions, view/read operations
**Success**: Positive actions, confirm, approve, save successfully
**Warning**: Caution actions, actions needing attention
**Error**: Destructive actions, delete, remove, cancel subscriptions

### Icon Guidelines

**When to add icons:**
- Action is universal (save, delete, download, upload)
- Improves scannability
- User mentions icon explicitly
- Common patterns (search with magnifying glass)

**Icon position:**
- Start (left): Most common, action-oriented
- End (right): Navigation, "next" type actions

**Icon-only buttons:**
- When space is very limited
- Action is universally recognized
- Always add aria-label
- Examples: close, menu, more options

### Grouping Logic

Use **ButtonGroup** when:
- User mentions "toggle", "tabs", "segmented control"
- Multiple related options (view modes, filters)
- Exclusive selection needed
- Actions are contextually related

### Special Considerations

**Loading State**: Add when:
- Async operations (API calls)
- User mentions "loading", "saving", "processing"
- Submit buttons for forms
- Any action taking >1 second

**Disabled State**: Add when:
- Form validation incomplete
- Permissions lacking
- Dependent on other actions
- User explicitly mentions conditions

**Full Width**: Use when:
- Mobile layouts
- Dialog actions
- Form submit buttons
- User mentions "full width" or "block"

## Response Structure

When creating buttons, always:

1. Confirm the variant, size, and color chosen
2. Explain why these choices fit the use case
3. Provide complete, working code
4. Include imports
5. Add comments for complex patterns
6. Suggest complementary patterns if relevant (e.g., "Consider adding a confirmation dialog for this delete button")

## Example Interpretations

**Request**: "Add a save button to my form"
**Interpretation**:
- Variant: Contained (high emphasis)
- Size: Large (form primary action)
- Color: Primary
- Type: submit
- Include: loading state, disabled state based on form validation

**Request**: "Create navigation buttons"
**Interpretation**:
- Variant: Outlined or Text (lower emphasis)
- Size: Medium
- Color: Secondary
- Consider: ButtonGroup if multiple nav options
- Icons: arrow-back, arrow-forward if applicable

**Request**: "Delete icon"
**Interpretation**:
- Component: IconButton
- Color: Error
- Icon: DeleteOutline
- Size: Small or Medium
- Must include: aria-label, confirmation pattern suggestion

**Request**: "Filter buttons"
**Interpretation**:
- Component: ButtonGroup
- Variant: Outlined
- Size: Small or Medium
- Color: Primary or Secondary
- Pattern: Toggle/selection behavior

## Edge Cases

- If request is ambiguous, choose sensible defaults and explain
- If multiple interpretations possible, ask clarifying questions
- If user requests conflicting properties, flag the conflict
- Always prioritize accessibility and usability over aesthetics
