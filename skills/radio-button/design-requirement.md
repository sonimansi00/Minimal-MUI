# Radio Button Design Requirements

## Visual Specifications

### Sizes

#### Small Radio Button
- **Icon Size:** 18px × 18px
- **Touch Target:** 40px × 40px (minimum for accessibility)
- **Font Size:** 13px (label text)
- **Use Case:** Dense layouts, compact forms, tables

#### Medium Radio Button (Default)
- **Icon Size:** 20px × 20px
- **Touch Target:** 42px × 42px
- **Font Size:** 14px (label text)
- **Use Case:** Standard forms, general UI

#### Large Radio Button
- **Icon Size:** 24px × 24px
- **Touch Target:** 48px × 48px
- **Font Size:** 16px (label text)
- **Use Case:** Emphasis, accessibility, mobile-first designs

### Colors

#### Primary Color (Default)
- **Color:** #00A76F (Minimals primary green)
- **Checked State:** Filled circle with primary color
- **Hover:** rgba(0, 167, 111, 0.08) background
- **Focus:** rgba(0, 167, 111, 0.24) ring

#### Secondary Color
- **Color:** #8E33FF (Minimals secondary purple)
- **Checked State:** Filled circle with secondary color
- **Hover:** rgba(142, 51, 255, 0.08) background
- **Focus:** rgba(142, 51, 255, 0.24) ring

#### Error Color
- **Color:** #FF5630
- **Usage:** Validation errors, required field indicators
- **Checked State:** Filled circle with error color

#### Warning Color
- **Color:** #FFAB00
- **Usage:** Warning states, caution selections
- **Checked State:** Filled circle with warning color

#### Info Color
- **Color:** #00B8D9
- **Usage:** Informational selections
- **Checked State:** Filled circle with info color

#### Success Color
- **Color:** #22C55E
- **Usage:** Success states, confirmed selections
- **Checked State:** Filled circle with success color

### Border and Shape

#### Unchecked State
- **Border Width:** 2px
- **Border Color:** rgba(145, 158, 171, 0.32)
- **Border Radius:** 50% (perfect circle)
- **Background:** transparent

#### Checked State
- **Outer Circle:** 2px border in theme color
- **Inner Circle:** Filled with theme color
- **Inner Circle Size:** 50% of outer circle
- **Border Radius:** 50% (perfect circle)

#### Hover State (Unchecked)
- **Border Color:** rgba(145, 158, 171, 0.48)
- **Background:** rgba(145, 158, 171, 0.08)
- **Ripple Effect:** Circular ripple emanating from center

#### Hover State (Checked)
- **Background:** Theme color with 0.08 opacity
- **Ripple Effect:** Circular ripple in theme color

### Spacing

#### Label Spacing
- **Gap:** 8px between radio button and label
- **Padding:** 9px vertical padding for touch target

#### Group Spacing
- **Row Layout:** 24px gap between radio items
- **Column Layout:** 12px gap between radio items
- **Group Margin:** 16px bottom margin for form groups

#### Form Integration
- **FormLabel Top Margin:** 0px
- **FormLabel Bottom Margin:** 8px
- **FormHelperText Top Margin:** 4px
- **Error Text Color:** #FF5630

### States

#### Default State
- **Opacity:** 1
- **Cursor:** pointer
- **Transition:** all 150ms cubic-bezier(0.4, 0, 0.2, 1)

#### Disabled State
- **Opacity:** 0.48
- **Cursor:** not-allowed
- **Border Color:** rgba(145, 158, 171, 0.24)
- **Label Color:** rgba(145, 158, 171, 0.8)
- **No Interaction:** Hover and focus effects disabled

#### Focus State
- **Outline:** 2px solid theme color with 0.24 opacity
- **Outline Offset:** 2px
- **Keyboard Navigation:** Clear focus indicator

#### Error State
- **Border Color:** #FF5630
- **Label Color:** #FF5630 (if error active)
- **Helper Text:** Red error message below

### Animation and Effects

#### Ripple Effect
- **Duration:** 550ms
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Color:** Theme color with 0.32 opacity
- **Origin:** Center of radio button

#### Check Animation
- **Duration:** 150ms
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Effect:** Scale inner circle from 0 to 1
- **Transform Origin:** Center

#### Hover Transition
- **Duration:** 150ms
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Properties:** background-color, border-color

### Typography

#### Label Text
- **Font Family:** "Public Sans", sans-serif (Minimals default)
- **Font Weight:** 400 (regular)
- **Line Height:** 1.57143
- **Color:** #212B36 (text primary)
- **Disabled Color:** rgba(145, 158, 171, 0.8)

#### Form Label (Group Title)
- **Font Size:** 14px
- **Font Weight:** 600 (semibold)
- **Color:** #212B36
- **Margin Bottom:** 8px

#### Helper Text
- **Font Size:** 12px
- **Font Weight:** 400
- **Color:** #637381 (text secondary)
- **Error Color:** #FF5630
- **Line Height:** 1.5

### Responsive Behavior

#### Mobile (< 600px)
- **Minimum Touch Target:** 48px × 48px
- **Recommended Size:** Medium or Large
- **Layout:** Prefer column layout for better touch
- **Spacing:** Increase gap to 16px in column layout

#### Tablet (600px - 960px)
- **Touch Target:** 44px × 44px minimum
- **Size:** Medium recommended
- **Layout:** Row or column based on content

#### Desktop (> 960px)
- **Size:** All sizes appropriate
- **Layout:** Row layout for space efficiency
- **Hover States:** Fully enabled

### Accessibility Requirements

- **WCAG 2.1 Level AA Compliant**
- **Minimum Touch Target:** 44px × 44px (WCAG 2.5.5)
- **Color Contrast:** Minimum 3:1 for UI components (WCAG 1.4.11)
- **Focus Indicator:** Visible and meets 3:1 contrast ratio
- **Keyboard Navigation:** Full support (Tab, Arrow keys, Space)
- **Screen Reader:** Proper ARIA labels and roles
- **Disabled State:** Clearly distinguishable (opacity + cursor)
