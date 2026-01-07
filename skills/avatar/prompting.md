# Avatar Skill - Prompting Instructions

## Interpretation Rules

### 1. Variant Detection

| User Keywords | Variant | Description |
|--------------|---------|-------------|
| "basic", "simple", "single" | `basic` | Single avatar |
| "sizes", "different sizes", "xs xl" | `sizes` | All size variants |
| "shapes", "square", "rounded" | `shapes` | Different shape variants |
| "group", "multiple", "stacked" | `group` | AvatarGroup component |
| "badge", "status", "online" | `badge` | Avatar with status badge |
| "social", "ring", "border" | `social` | Avatar with colored border ring |
| "styled", "custom", "minimal" | `styled` | Minimal UI premium styling |
| "all", "every variant" | `all` | All variants demo |

### 2. Size Detection

| User Keywords | Size |
|--------------|------|
| "extra small", "xs", "tiny" | `xs` (24px) |
| "small" | `small` (32px) |
| "medium", "default" | `medium` (40px) |
| "large" | `large` (56px) |
| "extra large", "xl" | `xl` (64px) |

### 3. Shape Detection

| User Keywords | Shape |
|--------------|-------|
| "circular", "circle", "round" | `circular` |
| "rounded", "soft corners" | `rounded` |
| "square", "no radius" | `square` |

### 4. Content Detection

| User Keywords | Content Type |
|--------------|--------------|
| "image", "photo", "picture" | `image` |
| "letters", "initials", "text" | `letter` |
| "icon", "symbol" | `icon` |

### 5. Status Detection

| User Keywords | Badge Status |
|--------------|--------------|
| "online", "available", "active" | Online (green) |
| "offline", "unavailable" | Offline (grey) |
| "busy", "dnd", "do not disturb" | Busy (red) |
| "away", "idle" | Away (orange) |

## Response Structure

1. **Confirmation** - Acknowledge request
2. **Component Code** - Complete React component
3. **Usage Example** - How to use
4. **Customization Notes** - How to modify

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create an avatar"

**Interpretation:**
- Variant: `basic`
- Size: `medium`
- Shape: `circular`
- Content: `image`

**Response:** Generate basic circular avatar with image.

### Example 2: Size Variants
**User:** "Show me avatars in all sizes"

**Interpretation:**
- Variant: `sizes`
- Include: xs, small, medium, large, xl

**Response:** Generate all size variants in a row.

### Example 3: Avatar Group
**User:** "Multiple avatars stacked together"

**Interpretation:**
- Variant: `group`
- Display: Overlapping
- Max: 5 visible

**Response:** Generate AvatarGroup component.

### Example 4: With Status Badge
**User:** "User avatar with online status indicator"

**Interpretation:**
- Variant: `badge`
- Status: Online (green)
- Position: Top-right

**Response:** Generate avatar with Badge showing online status.

### Example 5: Social Style
**User:** "Avatar with colored border ring"

**Interpretation:**
- Variant: `social`
- Border: Colored ring
- Color: Primary or custom

**Response:** Generate avatar with social-style border.

### Example 6: All Variants
**User:** "Show me all avatar types"

**Interpretation:**
- Variant: `all`
- Include all variants

**Response:** Generate comprehensive demo.

## Code Generation Rules

### Always Include:

1. **Complete Imports**
```tsx
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
```

2. **Proper Sizing**
```tsx
sx={{
  width: 40,
  height: 40,
}}
```

3. **Shape Styling**
```tsx
sx={{
  borderRadius: '8px', // for rounded
}}
```

4. **Accessibility**
```tsx
alt="User name"
aria-label="User profile"
```

## Quality Checklist

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] Proper sizing
- [ ] Accessibility attributes
- [ ] Clean code

## Output Format

```
## [Variant Name] Avatar

**Features:**
- [Features]

**Component Code:**
[Code]

**Usage:**
[Example]

**Customization:**
[Tips]
```
