# Autocomplete Skill - Prompting Instructions

## Interpretation Rules

### 1. Variant Detection

| User Keywords | Variant | Description |
|--------------|---------|-------------|
| "basic", "simple", "single" | `basic` | Single selection |
| "grouped", "categories", "group" | `grouped` | Options with group headers |
| "free solo", "custom input", "creatable" | `free-solo` | Allow custom values |
| "multiple", "multi", "chips" | `multiple` | Multiple selection with chips |
| "avatar", "with image", "with icon" | `avatar` | Options with avatar images |
| "async", "api", "remote", "fetch" | `async` | Asynchronous data loading |
| "styled", "custom", "minimal" | `styled` | Minimal UI premium styling |
| "all", "every variant" | `all` | All variants demo |

### 2. Size Detection

| User Keywords | Size |
|--------------|------|
| "small", "compact" | `small` |
| "medium", "default" | `medium` |

### 3. Data Type Detection

| User Keywords | Data Type |
|--------------|-----------|
| "countries", "locations" | Country list |
| "movies", "films" | Movie list |
| "users", "people" | User list with avatars |
| "tags", "categories" | Tag/category list |

## Response Structure

1. **Confirmation** - Acknowledge request
2. **Component Code** - Complete React component
3. **Usage Example** - How to use
4. **Customization Notes** - How to modify

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create an autocomplete"

**Interpretation:**
- Variant: `basic`
- Size: `medium`
- Options: Generic list

**Response:** Generate basic autocomplete with default options.

### Example 2: Multiple Selection
**User:** "Autocomplete with chips for multiple selection"

**Interpretation:**
- Variant: `multiple`
- Display: Chips
- Options: Generic list

**Response:** Generate multiple selection autocomplete with chip display.

### Example 3: Async Loading
**User:** "Autocomplete that loads data from API"

**Interpretation:**
- Variant: `async`
- Loading: Simulated API call
- Options: Dynamic

**Response:** Generate async autocomplete with loading state.

### Example 4: With Avatars
**User:** "User selection autocomplete with profile pictures"

**Interpretation:**
- Variant: `avatar`
- Data: User list
- Display: Avatar + name

**Response:** Generate autocomplete with avatar options.

### Example 5: All Variants
**User:** "Show me all autocomplete types"

**Interpretation:**
- Variant: `all`
- Include all variants

**Response:** Generate comprehensive demo.

## Code Generation Rules

### Always Include:

1. **Complete Imports**
```tsx
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
```

2. **State Management**
```tsx
const [value, setValue] = useState(null);
```

3. **Proper Styling**
```tsx
sx={{
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
}}
```

4. **Accessibility**
```tsx
aria-label="Select option"
```

## Quality Checklist

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] State management
- [ ] Accessibility attributes
- [ ] Responsive design
- [ ] Clean code

## Output Format

```
## [Variant Name] Autocomplete

**Features:**
- [Features]

**Component Code:**
[Code]

**Usage:**
[Example]

**Customization:**
[Tips]
```
