# Accordion Skill - Quick Reference

## 🚀 Invoke the Skill

```
@accordion
```

## 📋 Common Requests

| What You Want | What to Say |
|---------------|-------------|
| Basic accordion | "Create a simple accordion" |
| Multiple open panels | "Generate a multi-panel accordion" |
| With action buttons | "Accordion with save and cancel buttons" |
| Premium styled | "Create a styled accordion with shadows" |
| Plus/minus icons | "Make an accordion with plus icons" |
| Programmatic control | "Generate a controlled accordion" |
| Show all types | "Show me all accordion variants" |

## 🎨 Variants Cheat Sheet

| Variant | Best For | Key Feature |
|---------|----------|-------------|
| **Simple** | Basic FAQs, simple lists | One panel open at a time |
| **Controlled** | Wizards, guided flows | External state control |
| **Multi** | Complex FAQs, filters | Multiple panels open |
| **Disabled** | Locked content, demos | Shows disabled state |
| **Plus-Icon** | Modern UIs, clean look | Plus/minus icons |
| **Styled** | Premium apps, dashboards | Shadows & refined design |
| **Actions** | Settings, forms | Action buttons included |

## 🎯 Quick Examples

### Simple Accordion
```jsx
// What you get:
- 3 panels by default
- Chevron icon
- Border style
- One open at a time
```

### Styled Accordion
```jsx
// What you get:
- Card appearance
- 12px border radius
- Elevation shadows
- Hover effects
```

### Multi-Panel
```jsx
// What you get:
- Independent panels
- All can be open
- 8px border radius
- Ideal for FAQs
```

## 🎨 Color Palette (Minimal UI)

```css
Primary:     #00A76F  /* Green */
Grey 800:    #212B36  /* Dark text */
Grey 600:    #637381  /* Secondary text */
Grey 300:    #DFE3E8  /* Borders */
Grey 100:    #F9FAFB  /* Hover bg */
```

## 📏 Spacing Rules

```jsx
Summary:  py: 2, px: 2.5   // 16px 20px
Details:  px: 2.5, pb: 2.5  // 0 20px 20px
Gap:      mb: 2             // 16px
```

## 🔤 Typography

```css
Title:    15px, weight 600
Content:  14px, weight 400
Font:     'Public Sans'
```

## ⚡ Quick Customizations

### Change Color
```jsx
sx={{ bgcolor: '#FF5630' }}
```

### More Padding
```jsx
sx={{ py: 3, px: 4 }}
```

### Rounder Corners
```jsx
sx={{ borderRadius: '20px' }}
```

## 📦 Installation

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## 🔍 File Structure

```
accordion/
├── skill.md                 ← Main entry point
├── design-requirement.md    ← Design specs
├── prompting.md            ← Prompt guidelines
├── accordion-template.md   ← All templates
├── README.md               ← Full documentation
└── QUICK_REFERENCE.md      ← This file
```

## 💬 Sample Conversations

### Conversation 1
```
You: "@accordion create a simple FAQ accordion"
Claude: [Reads templates, generates simple accordion with FAQ content]
```

### Conversation 2
```
You: "@accordion styled accordion with 5 panels for pricing"
Claude: [Generates styled accordion with 5 pricing panels]
```

### Conversation 3
```
You: "@accordion show me everything"
Claude: [Generates complete demo with all 7 variants]
```

## ⚙️ MUI Components Used

- `Accordion` - Main container
- `AccordionSummary` - Clickable header
- `AccordionDetails` - Content area
- `AccordionActions` - Action buttons
- `Typography` - Text styling
- `ExpandMoreIcon` - Default icon
- `AddIcon` / `RemoveIcon` - Plus variant

## ✅ Accessibility Built-in

- ✓ ARIA labels and controls
- ✓ Keyboard navigation (Tab, Enter, Space)
- ✓ Focus management
- ✓ Screen reader support

## 🎓 Pro Tips

1. **Use "styled" for dashboards** - Looks professional
2. **Use "multi" for complex FAQs** - Better UX
3. **Use "controlled" for wizards** - Better control
4. **Use "actions" for settings** - Convenient buttons
5. **Combine with state** - For dynamic content

## 🔗 Related MUI Components

Consider also using:
- **Tabs** - For top-level navigation
- **Drawer** - For side panels
- **Dialog** - For modals
- **Card** - For content cards

## 📐 Responsive Breakpoints

```jsx
xs: 0px    // Mobile
sm: 600px  // Small tablet
md: 900px  // Tablet
lg: 1200px // Desktop
xl: 1536px // Large desktop
```

## 🚦 Component States

| State | Appearance |
|-------|-----------|
| Default | White bg, grey border |
| Hover | Light grey bg |
| Expanded | Content visible |
| Disabled | Grey bg, opacity 0.6 |
| Focus | Primary color outline |

## 📱 Mobile Considerations

- Reduced padding on mobile
- Touch-friendly tap targets (48px minimum)
- Smooth scroll on expand
- Responsive typography

## 🎬 Animations

- **Expand/Collapse:** 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Icon Rotation:** 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Hover:** 200ms ease-in-out

## 🐛 Common Issues & Fixes

### Issue: No styling
**Fix:** Ensure MUI theme provider is wrapping your app

### Issue: Icons not showing
**Fix:** Import from `@mui/icons-material`

### Issue: TypeScript errors
**Fix:** Install `@types/react` and `@types/node`

---

**Need more details?** Check `README.md`
**Want templates?** Check `accordion-template.md`
**Need design specs?** Check `design-requirement.md`
