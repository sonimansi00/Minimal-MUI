# Chip Skill - Prompting Instructions

## Interpretation Rules

### 1. Variant Detection

| User Keywords | Variant | Description |
|--------------|---------|-------------|
| "basic", "simple", "default" | `basic` | Basic chip with label |
| "colors", "color variants", "themed" | `colors` | All color variants demo |
| "variants", "styles", "filled outlined soft" | `variants` | All style variants demo |
| "sizes", "small medium" | `sizes` | All size variants demo |
| "avatar", "with avatar", "profile picture" | `avatar` | Chip with avatar image |
| "icon", "with icon" | `icon` | Chip with icon |
| "clickable", "interactive", "button" | `clickable` | Clickable chip with onClick |
| "deletable", "removable", "delete" | `deletable` | Chip with delete functionality |
| "all", "every variant", "complete demo" | `all` | All variants comprehensive demo |

### 2. Color Detection

| User Keywords | Color |
|--------------|-------|
| "primary", "green" | `primary` |
| "secondary", "purple" | `secondary` |
| "info", "blue" | `info` |
| "success" | `success` |
| "warning", "orange" | `warning` |
| "error", "red", "danger" | `error` |
| "default", "grey", "neutral" | `default` |

### 3. Size Detection

| User Keywords | Size |
|--------------|------|
| "small", "compact", "dense" | `small` |
| "medium", "default", "normal" | `medium` |

### 4. Style Variant Detection

| User Keywords | Style |
|--------------|-------|
| "filled", "solid" | `filled` |
| "outlined", "border" | `outlined` |
| "soft", "subtle", "light" | `soft` |

### 5. Feature Detection

| User Keywords | Feature |
|--------------|---------|
| "click", "onclick", "interactive" | Clickable |
| "delete", "remove", "close", "dismiss" | Deletable |
| "avatar", "image", "profile" | With Avatar |
| "icon", "symbol" | With Icon |

## Response Structure

1. **Confirmation** - Acknowledge request
2. **Component Code** - Complete React component
3. **Usage Example** - How to use
4. **Customization Notes** - How to modify

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create a chip component"

**Interpretation:**
- Variant: `basic`
- Color: `default`
- Size: `medium`
- Style: `filled`

**Response:** Generate basic filled chip with default styling.

### Example 2: Color Variants
**User:** "Show me chips in all colors"

**Interpretation:**
- Variant: `colors`
- Show all: primary, secondary, info, success, warning, error, default
- Size: `medium`
- Style: `filled`

**Response:** Generate demo showing all color variants.

### Example 3: Soft Variant
**User:** "Chip with soft variant in primary color"

**Interpretation:**
- Variant: `basic`
- Color: `primary`
- Style: `soft`
- Size: `medium`

**Response:** Generate soft variant chip with 16% opacity background and primary color.

### Example 4: Deletable Chips
**User:** "Create deletable chips for tags"

**Interpretation:**
- Variant: `deletable`
- Feature: onDelete handler
- Use case: Tags
- Style: `soft` (recommended for tags)

**Response:** Generate chip with delete icon and handler.

### Example 5: With Avatar
**User:** "User chip with profile picture"

**Interpretation:**
- Variant: `avatar`
- Feature: Avatar image
- Use case: User display
- Size: `medium`

**Response:** Generate chip with avatar prop.

### Example 6: Clickable Status Chip
**User:** "Clickable success chip"

**Interpretation:**
- Variant: `clickable`
- Color: `success`
- Feature: onClick handler
- Interactive: true

**Response:** Generate clickable chip with hover effects.

### Example 7: Complete Demo
**User:** "Show me all chip types"

**Interpretation:**
- Variant: `all`
- Include: basic, colors, variants, sizes, avatar, icon, clickable, deletable

**Response:** Generate comprehensive demo with all variants.

### Example 8: Small Outlined Chips
**User:** "Small outlined chips for filters"

**Interpretation:**
- Size: `small`
- Style: `outlined`
- Use case: Filters
- Possibly: deletable

**Response:** Generate small outlined chips, suggest deletable variant for filters.

## Code Generation Rules

### Always Include:

1. **Complete Imports**
```tsx
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// Additional imports based on variant:
import Avatar from '@mui/material/Avatar'; // For avatar variant
import DeleteIcon from '@mui/icons-material/Delete'; // For icons
```

2. **State Management (if needed)**
```tsx
const [chips, setChips] = useState(['Tag 1', 'Tag 2']);
const handleDelete = (chipToDelete) => () => {
  setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
};
```

3. **Proper Styling (Match theme)**
```tsx
<Chip
  label="Label"
  color="primary"
  variant="soft" // or "filled", "outlined"
  size="medium"
  sx={{
    // Custom styling if needed
  }}
/>
```

4. **Event Handlers**
```tsx
onClick={() => console.log('Clicked')}
onDelete={() => console.log('Deleted')}
```

5. **Accessibility**
```tsx
aria-label="Chip label"
role="button" // if clickable
```

## Soft Variant Implementation

The soft variant is a custom variant (not default MUI). Ensure it's properly styled:

```tsx
<Chip
  variant="soft"
  color="primary"
  sx={{
    bgcolor: 'rgba(0, 167, 111, 0.16)',
    color: 'primary.dark',
    '&:hover': {
      bgcolor: 'rgba(0, 167, 111, 0.32)',
    },
  }}
/>
```

Or reference the theme chip configuration if available.

## Quality Checklist

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] State management (if interactive)
- [ ] Event handlers (if clickable/deletable)
- [ ] Accessibility attributes
- [ ] Responsive design considerations
- [ ] Proper color contrast
- [ ] Clean, readable code

## Output Format

```
## [Variant Name] Chip

**Features:**
- [List of features]

**Component Code:**
[Complete code with imports]

**Usage:**
[Example usage]

**Customization:**
[Tips for customization]
```

## Common Use Cases

### Tags System
```tsx
// Deletable soft variant chips
<Chip
  label="React"
  variant="soft"
  color="primary"
  size="small"
  onDelete={handleDelete}
/>
```

### Status Indicators
```tsx
// Filled color chips
<Chip label="Active" color="success" variant="filled" size="small" />
<Chip label="Pending" color="warning" variant="filled" size="small" />
<Chip label="Error" color="error" variant="filled" size="small" />
```

### User Selection
```tsx
// Avatar chips
<Chip
  avatar={<Avatar src="/avatar.jpg" />}
  label="John Doe"
  variant="outlined"
  onDelete={handleDelete}
/>
```

### Filters
```tsx
// Small outlined deletable chips
<Chip
  label="Category: Tech"
  size="small"
  variant="outlined"
  onDelete={handleDelete}
/>
```

### Interactive Categories
```tsx
// Clickable soft variant
<Chip
  label="Technology"
  variant="soft"
  color="primary"
  clickable
  onClick={handleClick}
/>
```

## Edge Cases to Handle

1. **Long labels** - Add text overflow handling
2. **Empty label** - Validate input
3. **Missing avatar src** - Show fallback icon/initial
4. **Disabled state** - Apply disabled styling
5. **Custom colors** - Support via sx prop
6. **RTL support** - Consider text direction

## Best Practices

1. Use **soft variant** as default for modern look
2. Keep labels **concise** (1-3 words)
3. Use colors **semantically**
4. Ensure **touch-friendly** sizes on mobile (min 24px)
5. Provide **keyboard navigation** for interactive chips
6. Show **visual feedback** on hover/focus
7. Use **consistent sizing** within same context
8. Group related chips with **Stack/Box** with proper spacing
