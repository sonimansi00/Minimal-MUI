# DataGrid Design Requirements

## Row Specifications

### Default Row Height
- **Height**: 52px
- **Padding**: 16px horizontal, 12px vertical
- **Line height**: 1.5
- **Min height**: 52px

### Dense Row Height
- **Height**: 36px
- **Padding**: 12px horizontal, 6px vertical
- **Line height**: 1.43
- **Min height**: 36px
- **Density prop**: "compact"

## Header Styling

### Header Row
- **Background**: #F4F6F8 (light grey)
- **Height**: 56px
- **Font weight**: 600 (semi-bold)
- **Font size**: 14px
- **Text color**: #212B36 (dark grey)
- **Border bottom**: 1px solid #DFE3E8

### Header Cell
- **Padding**: 16px
- **Text align**: Left (default)
- **Text transform**: None
- **Letter spacing**: 0.5px

### Sort Icons
- **Color**: #637381 (medium grey)
- **Size**: 18px
- **Active color**: #1976D2 (primary blue)
- **Position**: Right of header text

## Borders

### Cell Borders
- **Color**: #DFE3E8 (light grey)
- **Width**: 1px
- **Style**: Solid
- **Right border**: All cells except last
- **Bottom border**: All rows

### Table Border
- **Border**: 1px solid #DFE3E8
- **Border radius**: 8px (top corners only)
- **Outer border**: Complete table outline

## Colors

### Background Colors
- **Default row**: #FFFFFF (white)
- **Striped even row**: #F9FAFB (very light grey)
- **Striped odd row**: #FFFFFF (white)
- **Header**: #F4F6F8 (light grey)

### Hover States
- **Row hover**: #F4F6F8 (light grey)
- **Cell hover**: rgba(0, 0, 0, 0.04)
- **Transition**: background-color 200ms ease

### Selection Colors
- **Selected row**: rgba(25, 118, 210, 0.08) (light blue)
- **Selected row hover**: rgba(25, 118, 210, 0.12) (medium light blue)
- **Checkbox color**: #1976D2 (primary blue)
- **Checkbox border**: #919EAB (medium grey)

### Focus States
- **Cell focus**: 2px solid #1976D2 (primary blue)
- **Outline offset**: -1px
- **Focus visible**: Ring around cell

## Typography

### Body Text
- **Font family**: "Public Sans", sans-serif
- **Font size**: 14px
- **Font weight**: 400 (regular)
- **Line height**: 1.57143
- **Color**: #212B36 (dark grey)

### Header Text
- **Font family**: "Public Sans", sans-serif
- **Font size**: 14px
- **Font weight**: 600 (semi-bold)
- **Line height**: 1.5
- **Color**: #212B36 (dark grey)

### Secondary Text
- **Font size**: 13px
- **Color**: #637381 (medium grey)
- **Font weight**: 400

## Interactive States

### Hover States
- **Row hover background**: #F4F6F8
- **Cursor**: pointer (for clickable rows)
- **Transition duration**: 200ms
- **Transition timing**: ease-in-out

### Selection States
- **Checkbox size**: 18px
- **Checkbox checked**: #1976D2 background
- **Checkbox unchecked**: White background with grey border
- **Selected row background**: rgba(25, 118, 210, 0.08)
- **Multi-select**: Maintain all selected rows highlighted

### Editing States
- **Edit cell background**: #FFFFFF
- **Edit cell border**: 2px solid #1976D2
- **Input padding**: 8px 12px
- **Input font**: Inherit from cell

## Pagination

### Pagination Bar
- **Height**: 52px
- **Background**: #FFFFFF
- **Border top**: 1px solid #DFE3E8
- **Padding**: 0 16px

### Pagination Controls
- **Font size**: 14px
- **Color**: #637381
- **Button color**: #919EAB
- **Button hover**: #637381
- **Button disabled**: #C4CDD5

### Page Size Selector
- **Dropdown background**: #FFFFFF
- **Dropdown border**: 1px solid #DFE3E8
- **Dropdown border radius**: 8px
- **Options**: 5, 10, 25, 50, 100

## Scrolling

### Scroll Behavior
- **Horizontal scroll**: Auto when columns exceed width
- **Vertical scroll**: Auto when rows exceed height
- **Scrollbar width**: 8px
- **Scrollbar color**: #919EAB
- **Scrollbar track**: #F4F6F8

## Loading States

### Loading Overlay
- **Background**: rgba(255, 255, 255, 0.8)
- **Spinner color**: #1976D2
- **Spinner size**: 40px
- **Z-index**: 1

## Responsive Behavior

### Mobile (< 600px)
- **Hide less important columns**: Auto-hide or manual selection
- **Horizontal scroll**: Enabled
- **Touch gestures**: Swipe support
- **Min column width**: 100px

### Tablet (600px - 960px)
- **Adjust column widths**: Proportional sizing
- **Show essential columns**: Priority-based visibility
- **Touch targets**: Minimum 44px

### Desktop (> 960px)
- **Full feature set**: All columns visible
- **Optimal column widths**: Auto-sized or custom
- **Hover interactions**: Fully enabled
