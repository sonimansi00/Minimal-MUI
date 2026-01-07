# Progress Component Design Requirements

## Circular Progress Specifications

### Sizes
- **Extra Small**: 20px diameter, 2px stroke width
- **Small**: 30px diameter, 3px stroke width
- **Medium**: 40px diameter, 3.6px stroke width (default)
- **Large**: 60px diameter, 4px stroke width
- **Extra Large**: 80px diameter, 5px stroke width

### Animation
- **Indeterminate**: Continuous 1.4s rotation with easing
- **Determinate**: Smooth transition when value changes (300ms)
- **Rotation**: clockwise from top (12 o'clock position)

## Linear Progress Specifications

### Height
- **Thin**: 4px height
- **Regular**: 6px height (default)
- **Thick**: 8px height

### Width
- **Full width**: 100% of container by default
- **Minimum**: 200px recommended
- **Border Radius**: 4px (rounded ends)

### Animation
- **Indeterminate**: Continuous sliding animation (2s duration)
- **Buffer**: Secondary progress bar with reduced opacity (0.3)

## Color System

### Primary Colors
- **Primary**: #00A76F (Minimals brand green)
  - Hover: #007B55
  - Lighter: #5BE49B
- **Secondary**: #8E33FF
- **Error**: #FF5630
- **Warning**: #FFAB00
- **Info**: #00B8D9
- **Success**: #22C55E

### Background Colors
- **Default background**: rgba(145, 158, 171, 0.16)
- **Dark mode background**: rgba(145, 158, 171, 0.24)

## Typography (Labels)

### Circular Progress Labels
- **Font Family**: Public Sans, sans-serif
- **Font Size**:
  - Small (20-30px): 10px
  - Medium (40px): 12px
  - Large (60-80px): 14px
- **Font Weight**: 600 (semibold)
- **Color**: text.secondary (#637381)
- **Alignment**: center

### Linear Progress Labels
- **Font Size**: 12px
- **Font Weight**: 500
- **Color**: text.secondary
- **Position**: Above or below bar with 8px spacing

## Spacing

### Circular Progress
- **Margin**: 16px between multiple progress indicators
- **Label padding**: 4px internal spacing

### Linear Progress
- **Margin**: 24px between stacked progress bars
- **Container padding**: 0 (full width)

## Accessibility

### ARIA Attributes
- `role="progressbar"`
- `aria-valuenow`: Current value (0-100)
- `aria-valuemin`: 0
- `aria-valuemax`: 100
- `aria-label`: Descriptive label for screen readers

### Visual Requirements
- Minimum contrast ratio: 3:1 against background
- Clear visual distinction between background and foreground
- Smooth animations (respects prefers-reduced-motion)

## States

### Loading State
- Indeterminate animation active
- Optional loading text/icon

### Progress State
- Determinate with clear percentage
- Optional label showing completion

### Complete State
- 100% value
- Optional success indicator (checkmark icon)
- Color can change to success color (#22C55E)

## Responsive Behavior
- Progress maintains proportions across screen sizes
- Labels remain readable at all sizes
- Minimum touch target: 24px for interactive elements
