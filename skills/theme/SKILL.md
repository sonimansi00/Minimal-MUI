# Skill: Minimals Theme Generator (Token-Efficient)

## Purpose

Create a **production-ready MUI theme** using the **design foundations from minimals.cc**:

- Colors
- Typography
- Shadows
- Grid

This skill converts **small, structured tokens** into a full MUI theme while staying **highly token-efficient**.

---

## Source of Truth

Design foundations are derived from:

- https://minimals.cc/components/foundation/colors
- https://minimals.cc/components/foundation/typography
- https://minimals.cc/components/foundation/shadows
- https://minimals.cc/components/foundation/grid

---

## Design Principles

- Token-first (JSON in → theme out)
- Zero redundancy
- Safe defaults (fallback to MUI when token missing)
- No opinionated components, **foundation only**
- Works with MUI v5+

---

## Skill Contract

### Input

A **minimal token object** containing any of:

- `colors`
- `typography`
- `shadows`
- `grid`

### Output

A complete `@mui/material` theme object.
