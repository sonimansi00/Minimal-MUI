# Progress Component Skill

Create MUI Progress components following the Minimals design system.

## Variants

### Circular Progress
- **Indeterminate**: Spinning animation without specific progress value
- **Determinate**: Shows specific progress percentage (0-100)
- **With Label**: Displays percentage text in center

### Linear Progress
- **Indeterminate**: Continuous animation without specific value
- **Determinate**: Shows specific progress percentage with filled bar
- **Buffer**: Shows buffering state with primary and secondary progress values

### Sizes
- **Extra Small**: 20px diameter (circular)
- **Small**: 30px diameter (circular)
- **Medium**: 40px diameter (circular) - default
- **Large**: 60px diameter (circular)
- **Extra Large**: 80px diameter (circular)

### Linear Heights
- **Thin**: 4px height
- **Regular**: 6px height - default
- **Thick**: 8px height

### Colors
- **Primary**: #00A76F (default)
- **Secondary**: #8E33FF
- **Error**: #FF5630
- **Warning**: #FFAB00
- **Info**: #00B8D9
- **Success**: #22C55E

## Usage Examples

### Basic Circular
```jsx
<CircularProgress />
```

### Circular with Value
```jsx
<CircularProgress variant="determinate" value={75} />
```

### Circular with Label
```jsx
<Box sx={{ position: 'relative', display: 'inline-flex' }}>
  <CircularProgress variant="determinate" value={75} />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="caption" component="div" color="text.secondary">
      75%
    </Typography>
  </Box>
</Box>
```

### Linear Progress
```jsx
<LinearProgress />
<LinearProgress variant="determinate" value={50} />
<LinearProgress variant="buffer" value={60} valueBuffer={80} />
```

## Features
- Smooth animations
- Responsive sizing
- Accessible (ARIA labels)
- Theme integration
- Custom colors and sizes
