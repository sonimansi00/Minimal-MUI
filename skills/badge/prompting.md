# Badge Skill - Prompting Instructions

## Interpretation Rules

### 1. Variant Detection

| User Keywords | Variant | Description |
|--------------|---------|-------------|
| "basic", "simple", "count" | `basic` | Basic badge with count |
| "color", "colored", "status" | `color` | Different color variants |
| "max", "maximum", "99+", "limit" | `max` | Badge with max count |
| "dot", "indicator", "online", "status dot" | `dot` | Dot badge without content |
| "position", "corner", "placement" | `position` | Different positioning |
| "avatar", "profile", "user" | `avatar` | Badge on avatar |
| "icon", "button" | `icon` | Badge on icon |
| "toggle", "show hide", "visible" | `toggle` | Visibility control |
| "styled", "custom", "minimal" | `styled` | Minimal UI styling |
| "all", "every variant" | `all` | All variants demo |

### 2. Color Detection

| User Keywords | Color |
|--------------|-------|
| "primary", "green" | `primary` |
| "secondary", "purple" | `secondary` |
| "error", "red", "danger" | `error` |
| "warning", "yellow", "caution" | `warning` |
| "info", "blue", "information" | `info` |
| "success", "green", "check" | `success` |

### 3. Position Detection

| User Keywords | Position |
|--------------|----------|
| "top right", "upper right" | `top-right` |
| "top left", "upper left" | `top-left` |
| "bottom right", "lower right" | `bottom-right` |
| "bottom left", "lower left" | `bottom-left` |

### 4. Content Type Detection

| User Keywords | Content Type |
|--------------|--------------|
| "notification", "count", "number" | Numeric count |
| "online", "offline", "status" | Dot indicator |
| "99+", "max", "limit" | Max count badge |
| "new", "text" | Text content |

## Response Structure

1. **Confirmation** - Acknowledge request
2. **Component Code** - Complete React component
3. **Usage Example** - How to use
4. **Customization Notes** - How to modify

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create a badge"

**Interpretation:**
- Variant: `basic`
- Color: `primary`
- Content: `4`
- Position: `top-right`

**Response:** Generate basic badge with default settings.

### Example 2: Notification Badge
**User:** "Badge with notification count"

**Interpretation:**
- Variant: `basic`
- Color: `error` (common for notifications)
- Content: Dynamic count
- Position: `top-right`

**Response:** Generate notification badge with count.

### Example 3: Status Indicator
**User:** "Badge showing online status"

**Interpretation:**
- Variant: `dot`
- Color: `success` (online = green)
- Position: `bottom-right` (common for status)

**Response:** Generate dot badge for online status.

### Example 4: Max Count Badge
**User:** "Badge that shows 99+ when over 99"

**Interpretation:**
- Variant: `max`
- Max: `99`
- Color: `error`

**Response:** Generate badge with max count limit.

### Example 5: Custom Color Badge
**User:** "Create a badge with warning color"

**Interpretation:**
- Variant: `color`
- Color: `warning`
- Content: Default count

**Response:** Generate warning-colored badge.

### Example 6: Avatar with Badge
**User:** "Profile picture with notification badge"

**Interpretation:**
- Variant: `avatar`
- Color: `error`
- Content: Count
- Position: `top-right`

**Response:** Generate badge overlapping avatar.

### Example 7: Icon with Badge
**User:** "Shopping cart icon with item count"

**Interpretation:**
- Variant: `icon`
- Color: `primary`
- Content: Cart item count
- Position: `top-right`

**Response:** Generate badge on icon component.

### Example 8: All Variants
**User:** "Show me all badge types"

**Interpretation:**
- Variant: `all`
- Include all variants

**Response:** Generate comprehensive demo.

## Code Generation Rules

### Always Include:

1. **Complete Imports**
```tsx
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
```

2. **State Management** (for toggle variant)
```tsx
const [invisible, setInvisible] = useState(false);
```

3. **Proper Styling**
```tsx
sx={{
  '& .MuiBadge-badge': {
    backgroundColor: '#00A76F',
    color: '#FFFFFF',
  },
}}
```

4. **Accessibility**
```tsx
aria-label="4 notifications"
```

## Quality Checklist

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] State management (if needed)
- [ ] Accessibility attributes
- [ ] Proper positioning
- [ ] Color contrast
- [ ] Clean code

## Common Use Cases

### E-commerce
- Shopping cart item count
- Wishlist item count
- New arrivals indicator

### Social Media
- Unread messages count
- Friend requests count
- Notifications count
- Online/offline status

### Dashboard
- Alert count
- Task count
- New updates indicator

### Profile
- Profile completeness indicator
- Verification badge
- Status indicator

## Output Format

```
## [Variant Name] Badge

**Features:**
- [Features]

**Component Code:**
[Code]

**Usage:**
[Example]

**Customization:**
[Tips]
```

## Context-Aware Defaults

### Notification Context
- Default color: `error`
- Default position: `top-right`
- Show count: Yes

### Status Context
- Default variant: `dot`
- Default color: `success` (online) or `grey` (offline)
- Default position: `bottom-right`

### Shopping Context
- Default color: `primary`
- Default position: `top-right`
- Show count: Yes

### Message Context
- Default color: `info`
- Default position: `top-right`
- Show count: Yes
