# Breadcrumbs Skill - Prompting Instructions

## Interpretation Rules

### 1. Variant Detection

| User Keywords | Variant | Description |
|--------------|---------|-------------|
| "basic", "simple", "default" | `basic` | Basic text breadcrumbs |
| "separator", "custom separator", "arrow" | `separator` | Custom separator character |
| "max items", "collapse", "ellipsis" | `max-items` | Limit visible items with collapse |
| "icons", "with icons", "home icon" | `icons` | Include icons in breadcrumbs |
| "links", "clickable", "navigation" | `links` | Interactive navigation links |
| "collapsed", "truncate", "..." | `collapsed` | Auto-collapse long paths |
| "styled", "custom", "minimal" | `styled` | Minimal UI premium styling |
| "all", "every variant", "complete" | `all` | All variants demo |

### 2. Separator Detection

| User Keywords | Separator |
|--------------|-----------|
| "slash", "/" | `/` |
| "greater than", "arrow", ">" | `>` |
| "bullet", "dot", "•" | `•` |
| "dash", "hyphen", "-" | `-` |
| "right arrow", "→" | `→` |
| "chevron icon" | `<ChevronRightIcon />` |

### 3. Path Structure Detection

| User Keywords | Path Type |
|--------------|-----------|
| "home", "dashboard", "root" | Start with home/root |
| "product", "item", "detail" | E-commerce path |
| "docs", "documentation", "help" | Documentation path |
| "settings", "account", "profile" | Settings path |
| "3 levels", "4 items" | Specific depth |

### 4. Feature Detection

| User Keywords | Feature |
|--------------|---------|
| "clickable", "links", "navigation" | Interactive links |
| "icons", "home icon", "folder icon" | Include icons |
| "collapse", "max items", "truncate" | Collapse functionality |
| "router", "react router", "next.js" | Router integration |

## Response Structure

1. **Confirmation** - Acknowledge request
2. **Component Code** - Complete React component
3. **Usage Example** - How to use
4. **Customization Notes** - How to modify

## Prompt Interpretation Examples

### Example 1: Simple Request
**User:** "Create breadcrumbs"

**Interpretation:**
- Variant: `basic`
- Separator: `/` (default)
- Items: 3-4 levels
- Links: Clickable

**Response:** Generate basic breadcrumbs with default separator.

### Example 2: Custom Separator
**User:** "Breadcrumbs with arrow separator"

**Interpretation:**
- Variant: `separator`
- Separator: `>` or `→`
- Style: Default

**Response:** Generate breadcrumbs with custom arrow separator.

### Example 3: With Icons
**User:** "Navigation breadcrumbs with home icon"

**Interpretation:**
- Variant: `icons`
- Icons: Home icon + optional folder icons
- Clickable: Yes

**Response:** Generate breadcrumbs with icons for each item.

### Example 4: Collapsed/Max Items
**User:** "Breadcrumbs that collapse when too long"

**Interpretation:**
- Variant: `max-items` or `collapsed`
- MaxItems: 3-4
- Ellipsis: Show in middle

**Response:** Generate breadcrumbs with collapse functionality.

### Example 5: React Router Integration
**User:** "Breadcrumbs with react-router links"

**Interpretation:**
- Variant: `links`
- Router: React Router
- Component: `<Link>` from react-router-dom

**Response:** Generate breadcrumbs integrated with React Router.

### Example 6: E-commerce Path
**User:** "Product detail page breadcrumbs"

**Interpretation:**
- Path: Home > Category > Subcategory > Product
- Style: With icons
- Links: All clickable except current

**Response:** Generate e-commerce breadcrumb structure.

### Example 7: All Variants
**User:** "Show me all breadcrumb types"

**Interpretation:**
- Variant: `all`
- Include all variants in demo

**Response:** Generate comprehensive demo with all variants.

## Code Generation Rules

### Always Include:

1. **Complete Imports**
```tsx
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
```

2. **Semantic Structure**
```tsx
<Breadcrumbs aria-label="breadcrumb">
  <Link href="/">Home</Link>
  <Typography color="text.primary">Current</Typography>
</Breadcrumbs>
```

3. **Proper Styling**
```tsx
sx={{
  '& .MuiBreadcrumbs-separator': {
    color: 'grey.500',
  },
  '& a': {
    color: 'grey.600',
    textDecoration: 'none',
    '&:hover': {
      color: 'grey.800',
    },
  },
}}
```

4. **Accessibility**
```tsx
<nav aria-label="breadcrumb">
  <Breadcrumbs>
    <Link href="/" underline="hover" color="inherit">
      Home
    </Link>
    <Typography color="text.primary" aria-current="page">
      Current Page
    </Typography>
  </Breadcrumbs>
</nav>
```

## Special Cases

### Router Integration

**React Router:**
```tsx
import { Link as RouterLink } from 'react-router-dom';

<Link component={RouterLink} to="/path" underline="hover">
  Link
</Link>
```

**Next.js:**
```tsx
import NextLink from 'next/link';

<Link component={NextLink} href="/path" underline="hover">
  Link
</Link>
```

### Dynamic Breadcrumbs

Generate breadcrumbs from current route:
```tsx
const pathnames = location.pathname.split('/').filter((x) => x);

<Breadcrumbs>
  <Link href="/">Home</Link>
  {pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;

    return isLast ? (
      <Typography key={to}>{value}</Typography>
    ) : (
      <Link key={to} href={to}>{value}</Link>
    );
  })}
</Breadcrumbs>
```

## Quality Checklist

- [ ] Correct MUI v5 syntax
- [ ] Minimal UI styling applied
- [ ] All imports included
- [ ] Proper semantic HTML (nav, aria-label)
- [ ] Accessibility attributes
- [ ] Current page not clickable
- [ ] Clean, readable code
- [ ] Responsive design

## Output Format

```
## [Variant Name] Breadcrumbs

**Features:**
- [Features]

**Component Code:**
[Code]

**Usage:**
[Example]

**Customization:**
[Tips]
```

## Common Patterns

### Home > Category > Product
```tsx
<Breadcrumbs>
  <Link href="/">
    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
    Home
  </Link>
  <Link href="/category">Category</Link>
  <Typography>Product Name</Typography>
</Breadcrumbs>
```

### Documentation Path
```tsx
<Breadcrumbs>
  <Link href="/">Docs</Link>
  <Link href="/components">Components</Link>
  <Link href="/components/breadcrumbs">Breadcrumbs</Link>
  <Typography>API</Typography>
</Breadcrumbs>
```

### Settings Path
```tsx
<Breadcrumbs>
  <Link href="/">Dashboard</Link>
  <Link href="/settings">Settings</Link>
  <Typography>Account</Typography>
</Breadcrumbs>
```
