# Accordion Skill - Prompting Instructions

## Overview
This document provides instructions for how Claude should interpret user prompts when generating accordion components using the Minimal UI design system.

---

## Interpretation Rules

### 1. Variant Detection

When a user requests an accordion, analyze their prompt for these keywords:

| User Keywords | Map to Variant | Example Prompts |
|--------------|----------------|-----------------|
| "simple", "basic", "default" | `simple` | "Create a simple accordion" |
| "controlled", "programmatic", "state management" | `controlled` | "Accordion with controlled state" |
| "multiple", "multi", "independent" | `multi` | "Multiple panels can be open" |
| "disabled", "inactive", "locked" | `disabled` | "Show disabled accordion" |
| "plus icon", "plus/minus", "custom icon" | `plus-icon` | "Use plus icon instead of chevron" |
| "styled", "custom", "themed", "beautiful" | `styled` | "Styled accordion with shadows" |
| "actions", "buttons", "save/cancel" | `actions` | "Accordion with action buttons" |
| "all", "every variant", "show everything" | `all` | "Show me all accordion types" |

### 2. Count Detection

Look for numbers or quantity indicators:
- "three accordions" → `count: 3`
- "5 panels" → `count: 5`
- "multiple items" → `count: 4` (default for multi)
- No mention → `count: 3` (default)

### 3. Styling Preferences

Detect styling keywords:
- "rounded corners", "card style", "shadow" → Use styled variant
- "minimal", "clean", "professional" → Apply Minimal UI theme
- "border only", "simple style" → Use simple variant with basic borders

### 4. Content Type Detection

Understand what content should go in the accordion:
- "FAQ", "questions" → Generate question/answer content
- "settings", "configuration" → Generate settings-related content
- "steps", "wizard" → Generate step-by-step content
- "features", "specifications" → Generate feature descriptions
- Generic/no context → Use "Panel" with lorem ipsum

---

## Response Structure

### When generating accordion components, follow this structure:

1. **Confirmation**
   - Acknowledge the request
   - State which variant(s) will be generated
   - Mention any assumptions made

2. **Component Code**
   - Provide complete, ready-to-use React code
   - Include all necessary imports
   - Add state management if needed
   - Include proper TypeScript types (if TypeScript project)

3. **Usage Example**
   - Show how to use the component
   - Provide sample props
   - Demonstrate state management (if applicable)

4. **Customization Notes**
   - Explain how to modify colors
   - Show how to adjust spacing
   - Mention theme customization options

---

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create an accordion component"

**Interpretation:**
- Variant: `simple` (default)
- Count: `3` (default)
- Theme: Minimal UI

**Response:** Generate simple accordion with 3 panels, Minimal UI styling.

---

### Example 2: Specific Variant
**User:** "I need an accordion where multiple sections can be open at the same time"

**Interpretation:**
- Variant: `multi` (keyword: "multiple sections")
- Count: `4` (default for multi)
- Behavior: Independent expansion

**Response:** Generate multi-panel accordion with 4 sections, each independently expandable.

---

### Example 3: Custom Styling
**User:** "Create a beautiful accordion with rounded corners and shadows like on minimals.cc"

**Interpretation:**
- Variant: `styled` (keywords: "beautiful", "rounded corners", "shadows", "minimals.cc")
- Count: `3`
- Theme: Full Minimal UI styling

**Response:** Generate styled accordion with card appearance, 12px border radius, elevation shadows.

---

### Example 4: With Actions
**User:** "Make an accordion with save and cancel buttons in each panel"

**Interpretation:**
- Variant: `actions` (keyword: "buttons")
- Actions: Save, Cancel buttons
- Count: `3`

**Response:** Generate accordion with AccordionActions component containing Save and Cancel buttons.

---

### Example 5: Icon Customization
**User:** "Create an accordion that uses plus and minus icons"

**Interpretation:**
- Variant: `plus-icon` (keywords: "plus and minus icons")
- Count: `3`
- Icon: Plus when collapsed, minus when expanded

**Response:** Generate accordion with AddIcon/RemoveIcon instead of ExpandMoreIcon.

---

### Example 6: Controlled State
**User:** "I need programmatic control over which accordion panel is open"

**Interpretation:**
- Variant: `controlled` (keyword: "programmatic control")
- State: External state management
- Count: `3`

**Response:** Generate controlled accordion with useState and onChange handlers.

---

### Example 7: Content-Specific
**User:** "Create an FAQ accordion with 5 questions"

**Interpretation:**
- Variant: `simple` or `multi` (FAQ typically allows one or multiple open)
- Count: `5` (specified)
- Content: Question/Answer format

**Response:** Generate accordion with FAQ-style content, questions as titles, answers as details.

---

### Example 8: All Variants
**User:** "Show me all the accordion variants you can create"

**Interpretation:**
- Variant: `all`
- Include: Simple, Controlled, Multi, Disabled, Plus-icon, Styled, Actions

**Response:** Generate a comprehensive demo showing all 7 variants in one file.

---

## Ambiguity Handling

### When the prompt is unclear:

1. **Ask clarifying questions** using this template:
   ```
   I can create an accordion for you. To ensure it meets your needs:
   - Which variant? (simple, styled, with actions, etc.)
   - How many panels?
   - What content should go inside?
   - Any specific styling requirements?
   ```

2. **Make reasonable assumptions** and state them:
   ```
   I'll create a simple accordion with 3 panels using Minimal UI styling.
   Let me know if you need a different variant.
   ```

3. **Offer alternatives:**
   ```
   I can create either:
   - A simple accordion (one panel open at a time)
   - A multi-panel accordion (multiple panels can be open)
   Which would you prefer?
   ```

---

## Context Awareness

### Consider the project context:

1. **Check existing code:**
   - Look for existing accordion usage
   - Match the existing patterns
   - Maintain consistency with codebase

2. **Check dependencies:**
   - Verify MUI v5 is installed
   - Check if custom theme exists
   - Look for existing styled components

3. **Check TypeScript:**
   - If `.tsx` files exist, provide TypeScript
   - If `.jsx` files exist, provide JavaScript
   - Match the project's typing convention

---

## Error Prevention

### Common mistakes to avoid:

1. **Don't mix variants incorrectly:**
   - ❌ Simple + Multi behavior
   - ✅ Choose one primary variant

2. **Don't over-complicate:**
   - If user asks for "simple accordion", don't add actions, custom styling, etc.
   - Keep it simple unless explicitly requested

3. **Don't forget imports:**
   - Always include all necessary imports
   - Check for icon imports
   - Include theme imports if needed

4. **Don't skip accessibility:**
   - Always include ARIA attributes
   - Ensure keyboard navigation works
   - Add proper focus management

---

## Code Generation Rules

### Always include:

1. **Complete imports**
   ```javascript
   import Accordion from '@mui/material/Accordion';
   import AccordionSummary from '@mui/material/AccordionSummary';
   import AccordionDetails from '@mui/material/AccordionDetails';
   import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
   import Typography from '@mui/material/Typography';
   ```

2. **State management (when needed)**
   ```javascript
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
   };
   ```

3. **Proper styling**
   - Apply Minimal UI colors
   - Use correct spacing
   - Add transitions
   - Include hover states

4. **Accessibility attributes**
   - ARIA labels
   - Keyboard navigation
   - Focus management
   - Semantic HTML

---

## Theme Application

### When applying Minimal UI theme:

1. **Use sx prop for inline styles:**
   ```javascript
   sx={{
     borderRadius: '12px',
     boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.2)',
     '&:before': { display: 'none' },
     mb: 2
   }}
   ```

2. **Reference theme values:**
   ```javascript
   sx={{
     bgcolor: 'background.paper',
     color: 'text.primary',
     borderColor: 'grey.300'
   }}
   ```

3. **Apply consistent patterns:**
   - Border radius: 8px or 12px
   - Spacing: multiples of 8px (8, 16, 24)
   - Shadows: Subtle elevation
   - Typography: Public Sans font

---

## Output Format

### Standard output structure:

```
## [Variant Name] Accordion

[Brief description of what's being generated]

```javascript
[Complete component code]
```

**Usage:**
```javascript
[Usage example]
```

**Features:**
- [Feature 1]
- [Feature 2]
- [Feature 3]

**Customization:**
[How to customize colors, spacing, etc.]
```

---

## Quality Checklist

Before providing the code, verify:

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] State management (if needed)
- [ ] Accessibility attributes
- [ ] Responsive design
- [ ] Proper TypeScript types (if applicable)
- [ ] Clean, readable code
- [ ] Comments for complex logic
- [ ] Usage example provided

---

## Special Cases

### Case 1: Integration with existing components
If user mentions "integrate with [component]", analyze their codebase and match existing patterns.

### Case 2: Custom content
If user provides specific content, use it verbatim in the accordion panels.

### Case 3: Theme customization
If user has a custom MUI theme, respect their theme values while applying Minimal UI patterns.

### Case 4: Performance optimization
If user mentions "many accordions" or "large list", suggest virtualization or lazy loading.

---

## Testing Recommendations

When generating accordions, remind users to test:

1. **Functionality:**
   - Expand/collapse works
   - State management correct
   - Event handlers fire

2. **Accessibility:**
   - Keyboard navigation
   - Screen reader compatibility
   - Focus management

3. **Responsive:**
   - Mobile display
   - Tablet display
   - Desktop display

4. **Browser compatibility:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

---

## Follow-up Questions

Be prepared to answer:
- "How do I change the colors?"
- "Can I add more panels?"
- "How do I control it from parent component?"
- "Can I nest accordions?"
- "How do I add animations?"
- "Can I make it open by default?"

Keep answers concise, provide code examples, and reference the design requirements document.
