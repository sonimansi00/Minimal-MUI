# MUI Accordion Component Generator Skill

A comprehensive Claude skill for generating production-ready Material-UI v5 Accordion components with Minimal UI design system styling.

## 🚀 Quick Start

### Using the Skill

To use this skill in Claude Code, invoke it with:

```
@accordion
```

Or use the Skill tool in your conversation.

### What You Can Generate

This skill can generate 7 different accordion variants:

1. **Simple Accordion** - Basic single-panel expansion
2. **Controlled Accordion** - Programmatic control with external state
3. **Multi-Panel Accordion** - Multiple panels can be open simultaneously
4. **Disabled Accordion** - Shows disabled state for non-interactive panels
5. **Plus Icon Accordion** - Uses plus/minus icons instead of chevron
6. **Styled Accordion** - Premium Minimal UI styling with shadows and refined design
7. **Accordion with Actions** - Includes action buttons (Save, Cancel, etc.)

## 📁 Skill Structure

```
accordion/
├── skill.md                    # Main skill entry point (executable prompt)
├── design-requirement.md       # Complete Minimal UI design specifications
├── prompting.md               # User prompt interpretation guidelines
├── accordion-template.md      # Full React component templates
└── README.md                  # This file
```

## 🎨 Design System

This skill implements the Minimal UI design system from minimals.cc:

### Colors
- **Primary:** `#00A76F` (green)
- **Grey 800:** `#212B36` (primary text)
- **Grey 600:** `#637381` (secondary text)
- **Grey 300:** `#DFE3E8` (borders)
- **Grey 100:** `#F9FAFB` (hover background)

### Typography
- **Font Family:** 'Public Sans', sans-serif
- **Title:** 15px, weight 600
- **Content:** 14px, weight 400
- **Line Height:** 1.75

### Spacing
- **Summary Padding:** 16px 20px
- **Details Padding:** 0 20px 20px 20px
- **Panel Gap:** 16px

### Shadows (Styled Variant)
- **Default:** `0px 0px 2px 0px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)`
- **Hover:** `0px 0px 2px 0px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.16)`

## 💡 Example Usage

### Simple Request
```
User: "Create a simple accordion with 4 panels"
```

### Specific Variant
```
User: "Generate a styled accordion for my FAQ section with 5 questions"
```

### With Customization
```
User: "I need a multi-panel accordion with plus/minus icons for my settings page"
```

### All Variants Demo
```
User: "Show me all accordion variants"
```

## 📦 Dependencies

The generated components require:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

Or with yarn:

```bash
yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## ✨ Features

- ✅ **7 Complete Variants** - Every accordion type you need
- ✅ **Minimal UI Design** - Matches minimals.cc styling perfectly
- ✅ **Production Ready** - Copy-paste and use immediately
- ✅ **Fully Accessible** - ARIA labels, keyboard navigation
- ✅ **Responsive** - Works on all screen sizes
- ✅ **Type Safe** - TypeScript compatible
- ✅ **Customizable** - Easy to modify colors, spacing, shadows
- ✅ **MUI v5** - Latest Material-UI components
- ✅ **State Management** - Includes all necessary hooks
- ✅ **Best Practices** - Clean, maintainable code

## 📚 Reference Files

### skill.md
Main executable file that Claude runs when the skill is invoked. Contains:
- Task instructions for Claude
- Step-by-step generation process
- Design system key values
- Output format guidelines

### design-requirement.md
Complete design specifications including:
- Color palette with hex values
- Typography rules (sizes, weights, line heights)
- Spacing & layout guidelines
- Shadow & elevation system
- Interactive states (hover, focus, expanded, disabled)
- Responsive breakpoints
- Animation specifications

### prompting.md
Guidelines for interpreting user requests:
- Variant detection keywords
- Count and content detection
- Ambiguity handling
- Context awareness
- Error prevention
- Quality checklist

### accordion-template.md
Full React component implementations:
- Complete code for all 7 variants
- Combined demo showing all variants
- Installation instructions
- Customization guide
- Usage examples

## 🎯 How It Works

1. **User Invokes Skill** - User asks for an accordion component
2. **Claude Reads skill.md** - Main prompt is loaded
3. **Understand Requirements** - Claude asks clarifying questions if needed
4. **Read References** - Loads design specs and templates
5. **Generate Component** - Creates complete React component
6. **Provide Instructions** - Usage, customization, and installation guide

## 🔧 Customization Examples

### Change Primary Color
```jsx
sx={{
  bgcolor: '#FF5630',  // Change from #00A76F
  color: '#FFFFFF'
}}
```

### Adjust Spacing
```jsx
sx={{
  py: 3,    // Increase vertical padding
  px: 4     // Increase horizontal padding
}}
```

### Modify Border Radius
```jsx
sx={{
  borderRadius: '16px'  // More rounded corners
}}
```

### Custom Shadow
```jsx
sx={{
  boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.15)'
}}
```

## 🎓 Learning Resources

- [Material-UI Documentation](https://mui.com/material-ui/)
- [Minimal UI Demo](https://minimals.cc/components/mui/accordion)
- [Accordion API Reference](https://mui.com/material-ui/api/accordion/)
- [React Hooks Guide](https://react.dev/reference/react)

## 🤝 Contributing

To improve this skill:

1. Update design specs in `design-requirement.md`
2. Add new templates to `accordion-template.md`
3. Improve prompt interpretation in `prompting.md`
4. Enhance the main prompt in `skill.md`

## 📝 License

This skill generates code components. The generated code is yours to use freely in your projects.

## 🐛 Troubleshooting

### Skill Not Found
- Ensure the skill is in `.claude/skills/accordion/`
- Check that `skill.md` exists

### Generated Code Not Working
- Verify MUI v5 is installed: `npm list @mui/material`
- Check all imports are present
- Ensure React 18+ is installed

### Styling Issues
- Verify your theme supports the MUI sx prop
- Check if custom theme overrides are conflicting
- Review the design-requirement.md for exact values

---

**Created for:** Claude Code
**Version:** 1.0.0
**Last Updated:** 2025-11-26
