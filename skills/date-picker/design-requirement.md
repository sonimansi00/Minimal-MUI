# Date Picker Design Requirements

## Visual Design Specifications

### Input Field Styling

**Match TextField Component**
- Height: 56px (standard) / 40px (small)
- Border radius: 8px
- Border color: rgba(145, 158, 171, 0.24)
- Hover border: rgba(145, 158, 171, 0.32)
- Focus border: Primary color (2px)
- Background: #FFFFFF
- Font family: 'Public Sans', sans-serif
- Font size: 14px
- Label color: #637381

**States**
- Default: Light gray border
- Hover: Darker gray border
- Focus: Primary color border with shadow
- Error: #FF5630 border
- Disabled: #F4F6F8 background, #919EAB text
- Filled: Retains focus styling

### Calendar Popover

**Container**
- Background: #FFFFFF
- Border radius: 12px
- Box shadow: 0px 20px 40px rgba(0, 0, 0, 0.12)
- Padding: 16px
- Min width: 320px
- Max width: 400px

**Header**
- Month/Year selector
- Navigation arrows
- Font weight: 600
- Font size: 16px
- Color: #212B36

**Day Cells**

**Regular Days**
- Size: 36px x 36px
- Border radius: 8px
- Font size: 14px
- Color: #212B36
- Hover background: #F4F6F8

**Selected Day**
- Background: Primary gradient or solid
- Color: #FFFFFF
- Font weight: 600
- Border radius: 8px

**Today**
- Border: 1px solid Primary color
- Background: transparent
- Color: Primary color
- Font weight: 600

**Disabled Days**
- Color: #C4CDD5
- Background: transparent
- Cursor: not-allowed
- No hover effect

**Outside Month**
- Color: #919EAB
- Opacity: 0.5

### Date Range Picker Specific

**Range Selection**
- Start/End: Full primary background
- In-between days: Light primary background (rgba)
- Border radius: 8px (start/end), 0px (middle)
- Visual connection between dates

**Range Hover Preview**
- Light gray background: #F4F6F8
- Shows potential selection
- Smooth transition

### Colors

**Primary Colors**
- Main: #00A76F (success green) or #078DEE (info blue)
- Light: rgba(0, 167, 111, 0.08)
- Dark: #007867

**Status Colors**
- Error: #FF5630
- Warning: #FFAB00
- Info: #078DEE
- Success: #00A76F

**Neutral Colors**
- Text primary: #212B36
- Text secondary: #637381
- Text disabled: #919EAB
- Background: #FFFFFF
- Background neutral: #F4F6F8
- Border: rgba(145, 158, 171, 0.24)

### Typography

**Input Text**
- Font family: 'Public Sans', sans-serif
- Font size: 14px
- Line height: 1.5
- Font weight: 400

**Labels**
- Font size: 12px
- Font weight: 500
- Letter spacing: 0.5px
- Text transform: none

**Calendar Days**
- Font size: 14px
- Font weight: 400
- Line height: 36px

**Helper/Error Text**
- Font size: 12px
- Font weight: 400
- Line height: 1.66
- Margin top: 4px

### Spacing

**Input Field**
- Padding: 14px 14px 14px 14px
- Label padding: 0px 8px
- Icon margin: 0px 8px

**Calendar**
- Container padding: 16px
- Day cell gap: 4px
- Header margin bottom: 12px
- Footer margin top: 12px

### Icons

**Calendar Icon**
- Size: 20px x 20px
- Color: #637381
- Position: Right side (end adornment)
- Margin: 0px 8px

**Navigation Arrows**
- Size: 24px x 24px
- Color: #637381
- Hover color: #212B36
- Border radius: 50%
- Hover background: #F4F6F8

### Animations

**Popover**
- Transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1)
- Transform origin: top center
- Fade in: opacity 150ms

**Day Cell Hover**
- Transition: background-color 150ms ease
- No delay

**Range Selection**
- Transition: background-color 200ms ease
- Smooth fill animation

### Responsive Behavior

**Desktop (> 900px)**
- Standard popover
- Full calendar view
- Mouse hover states

**Tablet (600px - 900px)**
- Slightly smaller popover
- Maintain calendar view
- Touch-friendly targets

**Mobile (< 600px)**
- Full-screen modal
- Larger touch targets (44px min)
- Bottom action buttons
- Native-like experience

### Accessibility

- Keyboard navigation support
- ARIA labels for screen readers
- Focus indicators (2px outline)
- Min touch target: 44px x 44px
- Color contrast ratio: 4.5:1 minimum
- Error messages associated with inputs
