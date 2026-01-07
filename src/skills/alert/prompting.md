# Alert Skill - Prompting Instructions

## Overview

This document provides instructions for how Claude should interpret user prompts when generating Alert components using the Minimal UI design system.

---

## Interpretation Rules

### 1. Severity Detection

Map user keywords to alert severities:

| User Keywords | Severity | Color |
|--------------|----------|-------|
| "success", "complete", "done", "approved" | `success` | Green |
| "info", "information", "notice", "tip" | `info` | Blue |
| "warning", "caution", "attention", "careful" | `warning` | Orange |
| "error", "failure", "problem", "issue", "danger" | `error` | Red |
| "primary" | `primary` | Theme primary color |
| "secondary" | `secondary` | Theme secondary color |
| "grey", "gray", "neutral" | `grey` | Grey palette |

### 2. Variant Detection

Map user keywords to alert variants:

| User Keywords | Variant | Style |
|--------------|---------|-------|
| "standard", "default", "basic", "light background" | `standard` | Light bg, colored icon |
| "outlined", "border", "bordered" | `outlined` | Border only, transparent bg |
| "filled", "solid", "full color" | `filled` | Solid color bg, white text |
| "soft", "minimal", "subtle", "minimals" | `soft` | Lighter bg, darker text (signature) |

**Default if not specified:** `standard`

### 3. Title Detection

Look for title-related keywords:

| User Keywords | Action |
|--------------|--------|
| "with title", "titled", "header", "title:", "heading" | Add AlertTitle |
| "no title", "without title" | No AlertTitle |

**Default:** No title unless specified

### 4. Action Detection

Look for action-related keywords:

| User Keywords | Action Type |
|--------------|-------------|
| "close button", "dismissible", "closable", "with close" | Add close IconButton |
| "undo", "with undo" | Add "Undo" button |
| "retry", "try again" | Add "Retry" button |
| "action button", "with actions" | Add generic action button |
| "collapsible", "dismissible", "can close" | Add Collapse + state |

### 5. Icon Detection

Look for icon-related keywords:

| User Keywords | Action |
|--------------|--------|
| "no icon", "without icon", "icon={false}" | Remove icon |
| "custom icon", "different icon" | Use custom icon |
| Default (nothing mentioned) | Use default severity icon |

### 6. Shape Detection

Look for shape-related keywords:

| User Keywords | Border Radius |
|--------------|---------------|
| "rounded", "soft rounded", "round corners" | `16px` |
| "square", "no rounded", "sharp corners" | `0` |
| Default | `8px` (theme default) |

---

## Response Structure

When generating alert components, follow this structure:

### 1. Confirmation
Acknowledge what you're generating:
```
I'll generate a [variant] [severity] alert with [features].
```

### 2. Component Code
Provide complete, ready-to-use React code with:
- All imports
- State management (if needed)
- Event handlers (if needed)
- Full JSX
- Proper styling with sx prop

### 3. Usage Example
Show how to use the component:
```tsx
import SuccessAlert from './components/SuccessAlert';

function App() {
  return <SuccessAlert />;
}
```

### 4. Customization Notes
Explain:
- How to change colors
- How to modify text
- How to add custom actions
- Theme integration tips

---

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create a success alert"

**Interpretation:**
- Severity: `success`
- Variant: `standard` (default)
- Title: No
- Actions: No
- Icon: Default (CheckCircleIcon)
- Shape: Default (8px)

**Response:** Generate standard success alert with default green styling and check icon.

---

### Example 2: Specific Variant
**User:** "Soft info alert with title"

**Interpretation:**
- Severity: `info`
- Variant: `soft` (Minimal UI signature)
- Title: Yes
- Actions: No
- Icon: Default (InfoIcon)
- Shape: Default (8px)

**Response:** Generate soft info alert with lighter blue background, darker blue text, and AlertTitle component.

---

### Example 3: With Actions
**User:** "Error alert with close button"

**Interpretation:**
- Severity: `error`
- Variant: `standard` (default)
- Title: No
- Actions: Close button (IconButton)
- Icon: Default (ErrorIcon)
- Shape: Default

**Response:** Generate error alert with IconButton containing CloseIcon, but NOT collapsible (just a clickable button, no state).

---

### Example 4: Collapsible
**User:** "Warning alert that can be dismissed"

**Interpretation:**
- Severity: `warning`
- Variant: `standard` (default)
- Title: No
- Actions: Collapsible (Collapse + useState + close button)
- Icon: Default (WarningIcon)
- Shape: Default

**Response:** Generate warning alert wrapped in Collapse component with state management and close button that triggers collapse.

---

### Example 5: Multiple Features
**User:** "Soft rounded success alert with title and close button"

**Interpretation:**
- Severity: `success`
- Variant: `soft`
- Title: Yes (AlertTitle)
- Actions: Close button
- Icon: Default (CheckCircleIcon)
- Shape: Rounded (16px)

**Response:** Generate soft success alert with all requested features.

---

### Example 6: No Icon
**User:** "Info alert without icon"

**Interpretation:**
- Severity: `info`
- Variant: `standard` (default)
- Title: No
- Actions: No
- Icon: `false` (no icon)
- Shape: Default

**Response:** Generate standard info alert with `icon={false}` prop.

---

### Example 7: Custom Icon
**User:** "Error alert with custom icon"

**Interpretation:**
- Severity: `error`
- Variant: `standard` (default)
- Title: No
- Actions: No
- Icon: Custom (user to replace)
- Shape: Default

**Response:** Generate error alert with custom icon placeholder and instructions on how to replace it.

---

### Example 8: All Variants
**User:** "Show me all alert types"

**Interpretation:**
- Generate comprehensive demo
- Include: Standard, Outlined, Filled, Soft
- All severities: success, info, warning, error
- Show in organized Stack layout

**Response:** Generate complete demo component with all variants.

---

### Example 9: With Action Buttons
**User:** "Warning alert with undo button"

**Interpretation:**
- Severity: `warning`
- Variant: `standard` (default)
- Title: No
- Actions: "Undo" Button
- Icon: Default (WarningIcon)
- Shape: Default

**Response:** Generate warning alert with Button component containing "UNDO" text and onClick handler.

---

### Example 10: Multiple Alerts
**User:** "Create success, warning, and error alerts"

**Interpretation:**
- Generate 3 separate alerts
- Severities: success, warning, error
- Variant: standard (default)
- Wrapped in Stack for spacing

**Response:** Generate Stack component containing all three alerts with proper spacing.

---

## Ambiguity Handling

### When Unclear:

1. **Ask clarifying questions:**
   ```
   I can create an alert for you. To ensure it meets your needs:
   - Which severity? (success, info, warning, error)
   - Which style? (standard, outlined, filled, soft)
   - Do you want a title?
   - Do you need action buttons?
   ```

2. **Make reasonable assumptions and state them:**
   ```
   I'll create a standard info alert with default styling.
   Let me know if you need a different variant.
   ```

3. **Offer alternatives:**
   ```
   I can create either:
   - A standard alert (light background)
   - A soft alert (Minimal UI signature style)
   Which would you prefer?
   ```

---

## Context Awareness

### Consider Project Context:

1. **Check existing code:**
   - Look for existing alert usage
   - Match existing patterns
   - Maintain consistency

2. **Check dependencies:**
   - Verify MUI v5 is installed
   - Check if custom theme exists
   - Look for theme extensions

3. **Check TypeScript:**
   - If `.tsx` files exist, provide TypeScript
   - If `.jsx` files exist, provide JavaScript
   - Match project typing conventions

---

## Error Prevention

### Common Mistakes to Avoid:

1. **Don't mix variants incorrectly:**
   - ❌ Standard + Filled styling
   - ✅ Choose one primary variant

2. **Don't over-complicate:**
   - If user asks for "simple alert", keep it simple
   - Don't add unnecessary features

3. **Don't forget imports:**
   - Always include all necessary imports
   - Check for icon imports
   - Include theme imports if using theme

4. **Don't skip accessibility:**
   - Always include role="alert"
   - Add aria-labels to buttons
   - Ensure keyboard navigation

5. **Don't use wrong colors:**
   - Use Minimal UI color palette
   - Reference design-requirement.md
   - Use lighter/darker for soft variant

---

## Code Generation Rules

### Always Include:

1. **Complete Imports:**
```tsx
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
```

2. **State Management (when needed):**
```tsx
const [open, setOpen] = useState(true);
```

3. **Proper Styling:**
```tsx
sx={{
  bgcolor: '#D3FCD2', // success.lighter
  color: '#0A5554', // success.darker
  borderRadius: '8px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
}}
```

4. **Accessibility:**
```tsx
role="alert"
aria-live="polite"
aria-label="Close alert"
```

---

## Theme Application

### Using Theme Values:

When generating code that uses theme:

```tsx
import { useTheme } from '@mui/material/styles';

const theme = useTheme();

sx={{
  bgcolor: theme.palette.success.lighter || '#D3FCD2',
  color: theme.palette.success.darker || '#0A5554',
}}
```

### Inline Values (Fallback):

When theme might not be extended:

```tsx
sx={{
  bgcolor: '#D3FCD2', // success.lighter
  color: '#0A5554', // success.darker
}}
```

---

## Output Format Standards

### Code Block Format:

Always use TypeScript with proper syntax highlighting:

````tsx
```tsx
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
// ... rest of code
```
````

### Component Naming:

Use descriptive names:
- `SuccessAlert` (not just `Alert`)
- `SoftInfoAlert` (be specific)
- `CollapsibleWarningAlert` (describe features)

### Comments:

Add helpful comments:
```tsx
// Close button handler
const handleClose = () => {
  setOpen(false);
};
```

---

## Special Cases

### Case 1: All Variants Request

Generate organized demo showing:
1. Standard alerts (all severities)
2. Outlined alerts (all severities)
3. Filled alerts (all severities)
4. Soft alerts (all severities)

Wrap in Container with sections and labels.

### Case 2: Custom Content

If user provides specific text:
```
User: "Create success alert with text 'Your changes have been saved!'"
```

Use their exact text in the alert.

### Case 3: Theme Integration

If user mentions they have Minimal UI theme:
```tsx
// Use theme values directly
sx={{
  bgcolor: theme.palette.success.lighter,
  color: theme.palette.success.darker,
}}
```

### Case 4: Multiple Languages

If user requests internationalization, suggest:
```tsx
// Use i18n for messages
<Alert severity="success">
  {t('alerts.success.saved')}
</Alert>
```

---

## Quality Checklist

Before providing code, verify:

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] State management (if collapsible)
- [ ] Accessibility attributes
- [ ] Responsive design
- [ ] Proper TypeScript types (if applicable)
- [ ] Clean, readable code
- [ ] Comments for complex logic
- [ ] Usage example provided
- [ ] Customization instructions included

---

## Follow-Up Questions

Be prepared to answer:

- "How do I change the text?"
- "Can I add more action buttons?"
- "How do I make it auto-dismiss after 5 seconds?"
- "Can I customize the icon?"
- "How do I position it at the top of the page?"
- "Can I show multiple alerts at once?"

Keep answers concise with code examples.

---

## Best Practices

1. **Soft variant is signature** - Recommend it for modern look
2. **Use Stack for multiple alerts** - Proper spacing
3. **Collapsible for dismissible** - Better UX than just button
4. **AlertTitle for important messages** - Better hierarchy
5. **Actions on right** - Standard placement
6. **Theme integration** - Recommend when available
7. **Accessibility first** - Always include ARIA

---

## Example Full Response

```
## Soft Success Alert with Title and Close Button

I've generated a soft-styled success alert with AlertTitle and a close button using Collapse for smooth dismissal animation.

**Features:**
- Soft variant (Minimal UI signature style)
- Success severity with green color scheme
- AlertTitle for message hierarchy
- Collapsible with close button
- Smooth collapse animation
- Accessibility attributes included

**Component Code:**

```tsx
[Full component code here]
```

**Usage:**
```tsx
[Usage example here]
```

**Customization:**
- Change title: Modify AlertTitle text
- Change message: Update Alert children
- Remove close button: Remove IconButton
- Adjust colors: Modify bgcolor and color in sx prop
- Change shape: Adjust borderRadius (8px, 16px, 0)

**Dependencies:**
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```
```

---

## Remember

- Always read template files before generating
- Match Minimal UI styling exactly
- Provide complete, copy-paste ready code
- Include accessibility
- Explain customization options
- Be helpful and friendly
