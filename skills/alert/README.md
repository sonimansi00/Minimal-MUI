# MUI Alert Component Generator Skill

A comprehensive Claude skill for generating production-ready Material-UI v5 Alert components with Minimal UI design system styling.

## 🚀 Quick Start

### Using the Skill

To use this skill in Claude Code, invoke it with:

```
@alert
```

Or mention alert components in your conversation.

### What You Can Generate

This skill generates **10 different alert variants**:

1. **Standard Alerts** - Light background with colored icons
2. **Outlined Alerts** - Border-only with transparent background
3. **Filled Alerts** - Solid color background with white text
4. **Soft Alerts** - Minimal UI signature style (lighter bg, darker text)
5. **Alerts with Title** - Include AlertTitle for hierarchy
6. **Collapsible Alerts** - Dismissible with close button + animation
7. **Alerts with Actions** - Action buttons (Undo, Retry, etc.)
8. **Custom Icon Alerts** - Replace default icons
9. **No Icon Alerts** - Minimal appearance without icons
10. **All Variants Demo** - Complete showcase of all types

## 📁 Skill Structure

```
alert/
├── skill.md                    # Main skill entry point (executable prompt)
├── design-requirement.md       # Complete Minimal UI design specifications
├── prompting.md               # User prompt interpretation guidelines
├── alert-template.md          # Full React component templates
└── README.md                  # This file
```

## 🎨 Design System

This skill implements the Minimal UI design system from minimals.cc:

### Colors

#### Success
- Main: `#22C55E`
- Lighter: `#D3FCD2` (soft bg)
- Darker: `#0A5554` (soft text)

#### Info
- Main: `#00B8D9`
- Lighter: `#CAFDF5` (soft bg)
- Darker: `#003768` (soft text)

#### Warning
- Main: `#FFAB00`
- Lighter: `#FFF5CC` (soft bg)
- Darker: `#7A4100` (soft text)

#### Error
- Main: `#FF5630`
- Lighter: `#FFE9D5` (soft bg)
- Darker: `#7A0916` (soft text)

### Typography
- **Font:** Public Sans
- **Alert Text:** 14px, weight 400
- **Alert Title:** 14px, weight 600
- **Line Height:** 1.75

### Spacing
- **Padding:** 16px (standard), 12px (with icon)
- **Icon Margin:** 12px right
- **Title Margin:** 4px bottom

### Shadows (Soft Variant)
- `0px 2px 8px rgba(0, 0, 0, 0.08)`
- Or `theme.customShadows.z8`

### Border Radius
- **Default:** 8px
- **Rounded:** 16px
- **Square:** 0px

## 💡 Example Usage

### Simple Request
```
User: "Create a success alert"
```

### Specific Variant
```
User: "Soft info alert with title and close button"
```

### With Actions
```
User: "Error alert with retry button"
```

### All Variants
```
User: "Show me all alert types"
```

## 📦 Dependencies

Generated components require:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

Or with yarn:

```bash
yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## ✨ Features

- ✅ **10 Complete Variants** - Every alert style you need
- ✅ **Minimal UI Design** - Matches minimals.cc perfectly
- ✅ **Production Ready** - Copy-paste and use immediately
- ✅ **Soft Variant** - Signature Minimal UI style
- ✅ **Fully Accessible** - ARIA labels, keyboard navigation
- ✅ **Responsive** - Works on all screen sizes
- ✅ **Collapsible** - Smooth dismiss animations
- ✅ **Customizable** - Easy to modify colors, spacing
- ✅ **MUI v5** - Latest Material-UI components
- ✅ **Theme Integration** - Supports MUI theme system

## 🎯 Alert Variants

### 1. Standard Alert
```tsx
<Alert severity="success">
  This is a success alert!
</Alert>
```

### 2. Outlined Alert
```tsx
<Alert variant="outlined" severity="info">
  This is an outlined info alert!
</Alert>
```

### 3. Filled Alert
```tsx
<Alert variant="filled" severity="warning">
  This is a filled warning alert!
</Alert>
```

### 4. Soft Alert (Minimal UI Signature)
```tsx
<Alert
  severity="success"
  sx={{
    bgcolor: '#D3FCD2',
    color: '#0A5554',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    '& .MuiAlert-icon': {
      color: '#0A5554',
    },
  }}
>
  Soft success alert!
</Alert>
```

### 5. Alert with Title
```tsx
<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  An error occurred!
</Alert>
```

### 6. Collapsible Alert
```tsx
const [open, setOpen] = useState(true);

<Collapse in={open}>
  <Alert
    action={
      <IconButton
        aria-label="close"
        size="small"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    Dismissible alert!
  </Alert>
</Collapse>
```

### 7. Alert with Action
```tsx
<Alert
  severity="success"
  action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }
>
  File deleted!
</Alert>
```

### 8. Custom Icon Alert
```tsx
<Alert
  severity="info"
  icon={<NotificationsIcon fontSize="inherit" />}
>
  Custom icon alert!
</Alert>
```

### 9. No Icon Alert
```tsx
<Alert severity="warning" icon={false}>
  Alert without icon!
</Alert>
```

## 🔧 Customization

### Change Colors
```tsx
sx={{
  bgcolor: '#YOUR_COLOR',
  color: '#YOUR_TEXT_COLOR',
}}
```

### Change Border Radius
```tsx
sx={{
  borderRadius: '16px', // rounded
}}
```

### Add Shadow
```tsx
sx={{
  boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
}}
```

### Auto-Dismiss
```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    setOpen(false);
  }, 5000);
  return () => clearTimeout(timer);
}, []);
```

## 🎓 Learning Resources

- [Material-UI Alert Docs](https://mui.com/material-ui/react-alert/)
- [Minimal UI Demo](https://minimals.cc/components/mui/alert)
- [Alert API Reference](https://mui.com/material-ui/api/alert/)

## 🤝 How It Works

1. **User Invokes Skill** - User requests an alert component
2. **Claude Reads skill.md** - Main prompt is loaded
3. **Interpret Request** - Determine variant, severity, features
4. **Read References** - Load design specs and templates
5. **Generate Component** - Create complete React code
6. **Provide Instructions** - Usage and customization guide

## 📝 Severity Types

- `success` - Green (positive feedback)
- `info` - Blue (informational messages)
- `warning` - Orange (caution/attention needed)
- `error` - Red (errors/problems)
- `primary` - Theme primary color
- `secondary` - Theme secondary color
- `grey` - Neutral messages

## 🎨 Variant Types

- `standard` - Light background (default)
- `outlined` - Border only
- `filled` - Solid color
- `soft` - Minimal UI signature (custom)

## 🔑 Key Features

### Soft Variant (Signature)
The soft variant is Minimal UI's signature alert style:
- Uses `theme.palette.*.lighter` for background
- Uses `theme.palette.*.darker` for text
- Subtle shadow for depth
- Clean, modern appearance

### Theme Integration
Supports MUI theme system:
```tsx
const theme = useTheme();

sx={{
  bgcolor: theme.palette.success.lighter || '#D3FCD2',
  color: theme.palette.success.darker || '#0A5554',
}}
```

### Accessibility
All alerts include:
- `role="alert"` attribute
- `aria-live="polite"` for screen readers
- `aria-label` on close buttons
- Keyboard navigation support

## 🐛 Troubleshooting

### Skill Not Found
- Ensure skill is in `.claude/skills/alert/`
- Check that `skill.md` exists

### Generated Code Not Working
- Verify MUI v5 is installed
- Check all imports are present
- Ensure React is installed

### Colors Not Matching
- Verify you're using exact hex values from design-requirement.md
- Check if custom theme is conflicting
- Review the soft variant color mappings

### Theme Values Not Working
- Check if theme is extended with lighter/darker colors
- Use fallback values if theme not extended
- Import and use `useTheme()` hook

## 📚 Reference Files

### skill.md
Main executable prompt with:
- All supported variants
- Arguments and options
- Step-by-step instructions
- Design system values
- Example interactions

### design-requirement.md
Complete design specifications:
- Full color palette with hex values
- Typography rules
- Spacing and layout guidelines
- Shadow specifications
- Interactive states
- Responsive design rules

### prompting.md
Interpretation guidelines:
- Keyword detection rules
- Response structure
- Example interpretations
- Ambiguity handling
- Quality checklist

### alert-template.md
Full component templates:
- Complete code for all 10 variants
- With and without theme integration
- Multiple examples per variant
- Combined demo component
- Usage instructions

## 💻 MUI Components Used

- `Alert` - Main alert component
- `AlertTitle` - Bold title text
- `Stack` - Layout for multiple alerts
- `IconButton` - Close button
- `Button` - Action buttons
- `Collapse` - Dismissible animation
- `CloseIcon` - Close icon
- `CheckCircleIcon` - Success icon
- `InfoIcon` - Info icon
- `WarningIcon` - Warning icon
- `ErrorIcon` - Error icon

## 🌟 Best Practices

1. **Use Soft Variant** - For modern, professional look
2. **Include Titles** - For important messages
3. **Add Actions** - For actionable feedback
4. **Make Collapsible** - For dismissible alerts
5. **Use Stack** - For multiple alerts with spacing
6. **Include Accessibility** - Always add ARIA labels
7. **Theme Integration** - Use theme values when available

---

**Created for:** Claude Code
**Version:** 1.0.0
**Last Updated:** 2025-11-26
**Design System:** Minimal UI (minimals.cc)
