# List Component Prompting Guide

## User Request Interpretation

### Identifying List Requirements

When a user requests a list component, analyze their message for these key indicators:

#### 1. Basic List Indicators
- "simple list"
- "list of items"
- "text list"
- "show a list"
- No additional features mentioned

**Action**: Generate Basic List variant

#### 2. Dense List Indicators
- "compact list"
- "dense list"
- "small list"
- "space-efficient"
- "tight spacing"

**Action**: Generate Dense List variant

#### 3. Avatar List Indicators
- "user list"
- "profile list"
- "with avatar"
- "with image"
- "contact list"

**Action**: Generate List with Avatar variant

#### 4. Icon List Indicators
- "with icons"
- "icon list"
- "menu list"
- "navigation list"

**Action**: Generate List with Icon variant

#### 5. Nested List Indicators
- "nested list"
- "expandable list"
- "collapsible list"
- "hierarchical list"
- "tree structure"
- "sub-items"

**Action**: Generate Nested List variant

#### 6. Interactive List Indicators
- "clickable list"
- "selectable list"
- "interactive list"
- "click handler"
- "navigation list"

**Action**: Generate Interactive List variant

#### 7. Switch List Indicators
- "toggle list"
- "switch list"
- "settings list"
- "enable/disable options"

**Action**: Generate Switch List variant

#### 8. Checkbox List Indicators
- "multi-select list"
- "checkbox list"
- "select multiple"
- "check items"

**Action**: Generate Checkbox List variant

#### 9. Selected Item Indicators
- "single select"
- "highlight selected"
- "active item"
- "current selection"

**Action**: Generate Selected Item List variant

## Context Questions to Ask

If the user's request is ambiguous, ask clarifying questions:

### Interaction Type
- "Do you need the list items to be clickable?"
- "Should users be able to select multiple items or just one?"
- "Do you need any interactive controls like checkboxes or switches?"

### Visual Elements
- "Should the list include icons, avatars, or just text?"
- "Do you need a dense (compact) or standard layout?"
- "Should list items have dividers between them?"

### Structure
- "Do you need nested/expandable items?"
- "How many lines of text per item (single, two-line, three-line)?"
- "Should there be secondary descriptive text?"

### Data Source
- "Will this be a static list or dynamically populated from data?"
- "How many items do you expect in the list?"

## Example User Requests

### Example 1
**User**: "Create a list of users with their avatars"

**Analysis**:
- Needs avatars → Avatar List
- User-related content → Primary and secondary text likely needed

**Response**: Generate List with Avatar variant including user name as primary text and optional email/role as secondary text.

### Example 2
**User**: "I need a settings menu with toggle switches"

**Analysis**:
- Settings context → Configuration options
- Toggle switches → Switch List
- Menu context → Interactive elements

**Response**: Generate Switch List variant with setting labels and switch controls.

### Example 3
**User**: "Create a navigation menu with expandable sections"

**Analysis**:
- Navigation → Icons likely needed
- Expandable sections → Nested List
- Menu → Clickable items

**Response**: Generate Nested List variant with icons and ListItemButton for interaction.

### Example 4
**User**: "I need to let users select multiple items from a list"

**Analysis**:
- Multiple selection → Checkbox List
- Selection functionality → State management needed

**Response**: Generate Checkbox List variant with check/uncheck handlers.

### Example 5
**User**: "Show a compact list of files"

**Analysis**:
- Compact → Dense variant
- Files → Likely needs icons
- Simple display → Basic interaction

**Response**: Generate Dense List with Icon variant showing file names.

## Default Assumptions

When details are missing, use these defaults:

- **Height**: Standard (56px) unless "compact" or "dense" mentioned
- **Dividers**: Include by default for readability
- **Icons**: Left-aligned at 24px
- **Avatars**: 40px circular
- **Text**: Single line primary text, optional secondary text
- **Interaction**: Non-interactive unless specified
- **Selection**: None unless explicitly requested
- **Nesting**: Single level unless hierarchy mentioned

## Anti-patterns to Avoid

- Don't add checkboxes for single-select scenarios
- Don't make items clickable if user only needs display
- Don't use dense variant for lists with avatars (readability)
- Don't nest more than 3 levels deep (UX complexity)
- Don't omit secondary text when context is important
- Don't use switches for yes/no questions (use buttons instead)
