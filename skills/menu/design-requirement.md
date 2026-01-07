# Menu Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on simplicity, clarity, and usability.

---

## Color System

### Primary Colors
Based on minimals.cc/components/foundation/colors:

- **Primary:**
  - Main: `#00A76F` (green)
  - Light: `#5BE49B`
  - Dark: `#007867`
  - Contrast Text: `#FFFFFF`

- **Secondary:**
  - Main: `#8E33FF`
  - Light: `#C684FF`
  - Dark: `#5119B7`

- **Info:**
  - Main: `#00B8D9`
  - Light: `#61F3F3`
  - Dark: `#006C9C`

- **Success:**
  - Main: `#22C55E`
  - Light: `#77ED8B`
  - Dark: `#118D57`

- **Warning:**
  - Main: `#FFAB00`
  - Light: `#FFD666`
  - Dark: `#B76E00`

- **Error:**
  - Main: `#FF5630`
  - Light: `#FFAC82`
  - Dark: `#B71D18`

### Grey Palette
- **Grey 100:** `#F9FAFB`
- **Grey 200:** `#F4F6F8`
- **Grey 300:** `#DFE3E8`
- **Grey 400:** `#C4CDD5`
- **Grey 500:** `#919EAB`
- **Grey 600:** `#637381`
- **Grey 700:** `#454F5B`
- **Grey 800:** `#212B36`
- **Grey 900:** `#161C24`

### Text Colors
- **Primary Text:** `#212B36` (Grey 800)
- **Secondary Text:** `#637381` (Grey 600)
- **Disabled Text:** `#919EAB` (Grey 500)

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Menu Item Text
- **Font Size:** `14px` (0.875rem)
- **Font Weight:** `400` (Regular)
- **Line Height:** `1.57143`
- **Letter Spacing:** `normal`
- **Color:** `#212B36` (Primary text)

### Menu Item Secondary Text
- **Font Size:** `12px` (0.75rem)
- **Font Weight:** `400` (Regular)
- **Line Height:** `1.5`
- **Color:** `#637381` (Secondary text)

### Menu Section Headers
- **Font Size:** `11px` (0.6875rem)
- **Font Weight:** `700` (Bold)
- **Text Transform:** `uppercase`
- **Letter Spacing:** `0.5px`
- **Color:** `#919EAB` (Grey 500)

---

## Spacing & Layout

### Menu Container
- **Min Width:** `180px`
- **Max Width:** `280px`
- **Padding:** `8px 0`
- **Border Radius:** `8px`
- **Margin from anchor:** `8px`

### Menu Item Spacing
- **Height:** `48px`
- **Padding:** `6px 16px`
- **Gap (icon to text):** `16px`
- **Gap between items:** `0` (no spacing)

### Divider Spacing
- **Margin:** `8px 0`
- **Height:** `1px`
- **Color:** `#DFE3E8` (Grey 300)

### Icon Spacing
- **Icon Size:** `20px`
- **Icon Margin Right:** `16px`
- **Icon Color:** `#637381` (Grey 600)

---

## Shadows & Elevation

Based on minimals.cc/components/foundation/shadows:

### Menu Paper Shadow
- **Box Shadow:** `0px 0px 2px 0px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)`
- **Border:** `none`

### Nested Menu Shadow (Additional elevation)
- **Box Shadow:** `0px 0px 2px 0px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.16)`

---

## Interactive States

### Default State
- **Background:** `transparent`
- **Text Color:** `#212B36` (Grey 800)
- **Icon Color:** `#637381` (Grey 600)

### Hover State
- **Background:** `#F4F6F8` (Grey 200)
- **Cursor:** `pointer`
- **Transition:** `background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)`

### Selected/Active State
- **Background:** `rgba(0, 167, 111, 0.08)` (Primary with 8% opacity)
- **Text Color:** `#00A76F` (Primary)
- **Icon Color:** `#00A76F` (Primary)
- **Font Weight:** `600` (Semi-bold)

### Disabled State
- **Background:** `transparent`
- **Text Color:** `#919EAB` (Grey 500)
- **Icon Color:** `#C4CDD5` (Grey 400)
- **Cursor:** `not-allowed`
- **Opacity:** `0.48`

### Focus State (Accessibility)
- **Outline:** `2px solid #00A76F` (Primary)
- **Outline Offset:** `2px`

---

## Menu Variants

### 1. Basic Menu
- Standard dropdown menu
- Opens on button click
- Closes on item click or outside click
- Default positioning (below anchor)

### 2. Icon Menu
- Triggered by IconButton
- Compact design
- Icon indicators on items

### 3. Max Height Menu
- **Max Height:** `300px` (approx 6.25 items visible)
- **Overflow:** `auto` (scrollable)
- **Scroll Behavior:** `smooth`

### 4. Selected Menu
- Shows currently selected item
- Check icon on selected item
- Selected state styling applied

### 5. Positioned Menu
- Custom positioning (top-start, top-end, bottom-start, bottom-end, etc.)
- Anchor origin customization
- Transform origin customization

### 6. Context Menu
- Right-click triggered
- Position at mouse cursor
- Prevents default context menu

### 7. Nested Menu
- Sub-menus support
- Arrow icon indicator
- Hover to expand (300ms delay)
- Proper positioning to avoid overflow

---

## Popover Specifications

### Paper Component
```jsx
PaperProps: {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
    mt: 1.5,
    borderRadius: '8px',
    minWidth: 180,
  }
}
```

### Transform Origin
```jsx
transformOrigin: { horizontal: 'right', vertical: 'top' }
anchorOrigin: { horizontal: 'right', vertical: 'bottom' }
```

---

## MenuItem Specifications

### Standard Item
```jsx
sx={{
  fontSize: '14px',
  color: '#212B36',
  height: '48px',
  px: 2,
  '&:hover': {
    backgroundColor: '#F4F6F8',
  },
}}
```

### Item with Icon
```jsx
<ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
  <Icon fontSize="small" />
</ListItemIcon>
<ListItemText
  primary="Item Text"
  primaryTypographyProps={{
    fontSize: '14px',
    color: '#212B36',
  }}
/>
```

### Selected Item
```jsx
sx={{
  backgroundColor: 'rgba(0, 167, 111, 0.08)',
  color: '#00A76F',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: 'rgba(0, 167, 111, 0.16)',
  },
}}
```

---

## Behavioral Requirements

### Opening Behavior
- **Animation:** `scale` from 0.9 to 1.0
- **Duration:** `225ms`
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### Closing Behavior
- Click outside menu
- Click on menu item (unless disabled)
- ESC key press
- Tab out (focus loss)

### Keyboard Navigation
- **Tab/Shift+Tab:** Navigate items
- **Enter/Space:** Select item
- **Arrow Up/Down:** Navigate items
- **ESC:** Close menu
- **Home/End:** First/last item

### Accessibility
- **Role:** `menu` (implicit from MUI)
- **ARIA Labels:** Proper `aria-label` on trigger
- **Focus Management:** Auto-focus first item on open
- **Screen Reader:** Announce menu state

---

## Max Height & Scrolling

### Max Height Menu
```jsx
MenuProps={{
  PaperProps: {
    style: {
      maxHeight: 300,
      width: '20ch',
    },
  },
}}
```

### Scroll Styling
```jsx
'&::-webkit-scrollbar': {
  width: '8px',
},
'&::-webkit-scrollbar-track': {
  backgroundColor: '#F4F6F8',
},
'&::-webkit-scrollbar-thumb': {
  backgroundColor: '#C4CDD5',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#919EAB',
  },
},
```

---

## Context Menu Specifications

### Positioning
```jsx
const [contextMenu, setContextMenu] = useState(null);

const handleContextMenu = (event) => {
  event.preventDefault();
  setContextMenu(
    contextMenu === null
      ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6 }
      : null
  );
};

<Menu
  open={contextMenu !== null}
  onClose={handleClose}
  anchorReference="anchorPosition"
  anchorPosition={
    contextMenu !== null
      ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
      : undefined
  }
/>
```

---

## Nested Menu Specifications

### Parent Item with Arrow
```jsx
<MenuItem>
  <ListItemText>Parent Item</ListItemText>
  <ArrowRightIcon fontSize="small" sx={{ ml: 2, color: '#637381' }} />
</MenuItem>
```

### Sub-Menu Positioning
```jsx
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
/>
```

---

## Animation & Transitions

### Menu Entrance
```jsx
transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1),
            opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
transform-origin: top right;
```

### Menu Exit
```jsx
transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1),
            opacity 195ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Item Hover
```jsx
transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Code Quality Requirements

1. **Use MUI v5 Components:** `Menu`, `MenuItem`, `MenuList`, `Divider`, `ListItemIcon`, `ListItemText`
2. **TypeScript Support:** Include proper type definitions
3. **Prop Types:** Define all component props
4. **Default Props:** Provide sensible defaults
5. **Error Handling:** Handle edge cases
6. **Performance:** Use React.memo for menu items if many items
7. **Clean Code:** Follow React best practices
8. **Comments:** Document complex logic

---

## Examples from Minimal UI

Reference these specific patterns from minimals.cc:
- Clean, spacious menu layouts
- Subtle shadows for elevation
- Smooth, professional transitions
- Accessible, keyboard-friendly navigation
- Proper icon alignment and sizing
- Consistent color palette usage
