# Breadcrumbs Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on clear navigation hierarchy and usability.

---

## Color System

### Primary Colors
- **Primary:** `#00A76F`
- **Primary Light:** `#5BE49B`
- **Primary Dark:** `#007867`

### Grey Palette
- **Grey 100:** `#F9FAFB`
- **Grey 200:** `#F4F6F8`
- **Grey 300:** `#DFE3E8`
- **Grey 400:** `#C4CDD5`
- **Grey 500:** `#919EAB`
- **Grey 600:** `#637381`
- **Grey 800:** `#212B36`

### Text Colors
- **Link (default):** `#637381`
- **Link (hover):** `#212B36`
- **Active/Current:** `#212B36`
- **Separator:** `#919EAB`

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Breadcrumb Text
- **Font Size:** `14px`
- **Font Weight:** `400` (links), `600` (active/current)
- **Line Height:** `1.5`
- **Color:** `#637381` (links), `#212B36` (active)

### Separator
- **Font Size:** `14px`
- **Font Weight:** `400`
- **Color:** `#919EAB`

---

## Spacing & Layout

### Container
- **Padding:** `16px` (optional container padding)
- **Margin:** `0`

### Gap Between Items
- **Horizontal Gap:** `8px`
- **Separator Margin:** `0 8px`

### Icon Spacing
- **Margin Right:** `4px`
- **Icon Size:** `20px`

### Item Padding
- **Padding:** `4px 8px` (on hover/clickable items)
- **Border Radius:** `4px` (hover background)

---

## Separator Options

### Default Separator
- **Character:** `/`
- **Color:** `#919EAB`
- **Size:** `14px`

### Custom Separators
- **Greater Than:** `>`
- **Bullet:** `•`
- **Dash:** `-`
- **Arrow:** `→`

---

## Interactive States

### Link (Default)
```css
color: #637381;
text-decoration: none;
cursor: pointer;
```

### Link (Hover)
```css
color: #212B36;
background: rgba(145, 158, 171, 0.08);
border-radius: 4px;
```

### Link (Active/Focus)
```css
color: #00A76F;
outline: 2px solid rgba(0, 167, 111, 0.24);
border-radius: 4px;
```

### Current/Active Item
```css
color: #212B36;
font-weight: 600;
pointer-events: none;
```

---

## Icon Styling

### Icon Size
- **Width/Height:** `20px`
- **Margin Right:** `4px`

### Icon Color
- **Default:** Inherit from text color
- **Active:** `#212B36`

### Common Icons
- **Home:** `HomeIcon`
- **Folder:** `FolderIcon`
- **Document:** `ArticleIcon`
- **Chevron:** `ChevronRightIcon` (as separator)

---

## Collapsed/Ellipsis Styling

### Ellipsis Button
```css
color: #637381;
padding: 4px 8px;
min-width: 32px;
&:hover {
  background: rgba(145, 158, 171, 0.08);
  border-radius: 4px;
}
```

### Max Items Behavior
- Show first item
- Show ellipsis (...)
- Show last 2 items
- Expand on ellipsis click

---

## Accessibility

### ARIA Attributes
```tsx
<nav aria-label="breadcrumb">
  <ol>
    <li>
      <a href="#" aria-current="page">Current Page</a>
    </li>
  </ol>
</nav>
```

### Semantic HTML
- Use `<nav>` wrapper
- Use `<ol>` for breadcrumb list
- Use `<li>` for each item
- Use `aria-current="page"` for current page

### Keyboard Navigation
- **Tab:** Navigate between links
- **Enter/Space:** Activate link
- **Shift+Tab:** Navigate backwards

---

## Animation

### Hover Transition
```css
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Background Fade
```css
transition: background-color 200ms ease-in-out;
```

---

## Responsive Design

### Mobile (< 600px)
- Reduce max items automatically
- Consider collapsing to first and last only
- Maintain touch-friendly sizes (min 44px tap target)

### Tablet (600px - 960px)
- Standard spacing
- Show more items if space allows

### Desktop (> 960px)
- Full breadcrumb path
- All hover effects enabled

---

## Special Variants

### With Background
```css
background: #F9FAFB;
padding: 12px 16px;
border-radius: 8px;
```

### With Divider
```css
border-bottom: 1px solid #DFE3E8;
padding-bottom: 16px;
```

### Compact Mode
- Reduce font size to `13px`
- Reduce gap to `6px`
- Reduce padding to `2px 6px`

---

## Shadow & Elevation

### No shadow by default
Breadcrumbs are typically flat navigation elements.

### Optional Container Shadow
```css
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.04);
```

---

## Link Integration

### React Router Link
```tsx
import { Link } from 'react-router-dom';
<Link to="/path" component={RouterLink} />
```

### Next.js Link
```tsx
import Link from 'next/link';
<Link href="/path">Item</Link>
```

### External Link
```tsx
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  External
</Link>
```

---

## Best Practices

1. Keep breadcrumb trail short (3-5 levels ideal)
2. Use clear, concise labels
3. Always make links clickable except current page
4. Use icons sparingly (only when they add clarity)
5. Ensure proper semantic HTML structure
6. Test keyboard navigation thoroughly
7. Provide clear visual distinction for current page
