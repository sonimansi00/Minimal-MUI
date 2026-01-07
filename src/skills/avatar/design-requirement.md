# Avatar Design Requirements - Minimal UI Style

## Design Philosophy
Match the clean, professional, and modern aesthetic of Minimal UI (minimals.cc) with emphasis on clarity and consistency.

---

## Size System

### Predefined Sizes
- **XS:** `24px` × `24px`
- **Small:** `32px` × `32px`
- **Medium:** `40px` × `40px` (default)
- **Large:** `56px` × `56px`
- **XL:** `64px` × `64px`

### Font Sizes (for letters)
- **XS:** `10px`
- **Small:** `12px`
- **Medium:** `14px`
- **Large:** `20px`
- **XL:** `24px`

---

## Color System

### Background Colors (for letters/icons)
- **Primary:** `#00A76F`
- **Secondary:** `#8E33FF`
- **Info:** `#00B8D9`
- **Success:** `#22C55E`
- **Warning:** `#FFAB00`
- **Error:** `#FF5630`
- **Default:** `#919EAB`

### Text Color
- **On colored bg:** `#FFFFFF`
- **On light bg:** `#212B36`

### Border Color
- **White ring:** `#FFFFFF`
- **Social ring:** Match severity color

---

## Shape Variants

### Circular (Default)
```css
border-radius: 50%;
```

### Rounded
```css
border-radius: 8px;
```

### Square
```css
border-radius: 0;
```

---

## Spacing & Layout

### AvatarGroup
- **Spacing (negative overlap):** `-8px`
- **Max display:** `5` (show +X for extras)
- **Z-index:** Ascending order

### Badge Position
- **Vertical:** `14%` from top
- **Horizontal:** `14%` from right
- **Size:** `25%` of avatar size
- **Border:** `2px solid #FFFFFF`

---

## Border & Shadows

### Default Shadow
```css
box-shadow: 0 0 0 2px #FFFFFF;
```

### Social Style Border
```css
box-shadow: 0 0 0 3px [color];
border: 2px solid #FFFFFF;
```

### Badge Border
```css
border: 2px solid #FFFFFF;
```

---

## Content Types

### Image Avatar
```tsx
<Avatar src="url" alt="Name" />
```

### Letter Avatar
```tsx
<Avatar>JD</Avatar>
```

### Icon Avatar
```tsx
<Avatar>
  <PersonIcon />
</Avatar>
```

---

## Interactive States

### Hover (if clickable)
```css
cursor: pointer;
transform: scale(1.05);
transition: transform 200ms ease-in-out;
```

### Active
```css
opacity: 0.8;
```

---

## Badge Variants

### Status Colors
- **Online:** `#22C55E` (success)
- **Offline:** `#919EAB` (grey)
- **Busy:** `#FF5630` (error)
- **Away:** `#FFAB00` (warning)

### Badge Styling
```css
width: 10px;
height: 10px;
border-radius: 50%;
border: 2px solid #FFFFFF;
```

---

## AvatarGroup Styling

### Container
```css
display: flex;
flex-direction: row;
```

### Individual Avatar in Group
```css
margin-left: -8px;
border: 2px solid #FFFFFF;
```

### Extra Count (+X)
```css
background: #919EAB;
color: #FFFFFF;
font-size: 12px;
font-weight: 600;
```

---

## Accessibility

### Image Avatar
```tsx
<Avatar src="url" alt="User name" />
```

### Letter Avatar
```tsx
<Avatar aria-label="John Doe">JD</Avatar>
```

### Icon Avatar
```tsx
<Avatar aria-label="User profile">
  <PersonIcon />
</Avatar>
```

---

## Typography

### Font Family
```css
font-family: 'Public Sans', sans-serif;
```

### Letter Avatar
- **Font Weight:** `600` (semi-bold)
- **Text Transform:** `uppercase`
- **Letter Spacing:** `0.5px`

---

## Animation

### Hover Effect
```css
transition: transform 200ms ease-in-out;
&:hover {
  transform: scale(1.05);
}
```

### Badge Pulse (online status)
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
animation: pulse 2s ease-in-out infinite;
```

---

## Responsive

### Mobile
- Slightly reduce sizes if needed
- Maintain aspect ratio
- Keep touch-friendly (min 32px)

### Desktop
- Use standard sizes
- Enable hover effects
