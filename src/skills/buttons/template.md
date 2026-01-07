# Button Component Templates - Minimals UI

## Complete React Code for All Button Variants

### Basic Imports

```jsx
import { Button, IconButton, ButtonGroup, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
```

---

## 1. Contained Buttons

### All Colors - Small Size

```jsx
<Button variant="contained" color="primary" size="small">
  Primary
</Button>

<Button variant="contained" color="secondary" size="small">
  Secondary
</Button>

<Button variant="contained" color="info" size="small">
  Info
</Button>

<Button variant="contained" color="success" size="small">
  Success
</Button>

<Button variant="contained" color="warning" size="small">
  Warning
</Button>

<Button variant="contained" color="error" size="small">
  Error
</Button>
```

### All Colors - Medium Size (Default)

```jsx
<Button variant="contained" color="primary">
  Primary
</Button>

<Button variant="contained" color="secondary">
  Secondary
</Button>

<Button variant="contained" color="info">
  Info
</Button>

<Button variant="contained" color="success">
  Success
</Button>

<Button variant="contained" color="warning">
  Warning
</Button>

<Button variant="contained" color="error">
  Error
</Button>
```

### All Colors - Large Size

```jsx
<Button variant="contained" color="primary" size="large">
  Primary
</Button>

<Button variant="contained" color="secondary" size="large">
  Secondary
</Button>

<Button variant="contained" color="info" size="large">
  Info
</Button>

<Button variant="contained" color="success" size="large">
  Success
</Button>

<Button variant="contained" color="warning" size="large">
  Warning
</Button>

<Button variant="contained" color="error" size="large">
  Error
</Button>
```

---

## 2. Outlined Buttons

### All Colors - Small Size

```jsx
<Button variant="outlined" color="primary" size="small">
  Primary
</Button>

<Button variant="outlined" color="secondary" size="small">
  Secondary
</Button>

<Button variant="outlined" color="info" size="small">
  Info
</Button>

<Button variant="outlined" color="success" size="small">
  Success
</Button>

<Button variant="outlined" color="warning" size="small">
  Warning
</Button>

<Button variant="outlined" color="error" size="small">
  Error
</Button>
```

### All Colors - Medium Size

```jsx
<Button variant="outlined" color="primary">
  Primary
</Button>

<Button variant="outlined" color="secondary">
  Secondary
</Button>

<Button variant="outlined" color="info">
  Info
</Button>

<Button variant="outlined" color="success">
  Success
</Button>

<Button variant="outlined" color="warning">
  Warning
</Button>

<Button variant="outlined" color="error">
  Error
</Button>
```

### All Colors - Large Size

```jsx
<Button variant="outlined" color="primary" size="large">
  Primary
</Button>

<Button variant="outlined" color="secondary" size="large">
  Secondary
</Button>

<Button variant="outlined" color="info" size="large">
  Info
</Button>

<Button variant="outlined" color="success" size="large">
  Success
</Button>

<Button variant="outlined" color="warning" size="large">
  Warning
</Button>

<Button variant="outlined" color="error" size="large">
  Error
</Button>
```

---

## 3. Text Buttons

### All Colors - Small Size

```jsx
<Button variant="text" color="primary" size="small">
  Primary
</Button>

<Button variant="text" color="secondary" size="small">
  Secondary
</Button>

<Button variant="text" color="info" size="small">
  Info
</Button>

<Button variant="text" color="success" size="small">
  Success
</Button>

<Button variant="text" color="warning" size="small">
  Warning
</Button>

<Button variant="text" color="error" size="small">
  Error
</Button>
```

### All Colors - Medium Size

```jsx
<Button variant="text" color="primary">
  Primary
</Button>

<Button variant="text" color="secondary">
  Secondary
</Button>

<Button variant="text" color="info">
  Info
</Button>

<Button variant="text" color="success">
  Success
</Button>

<Button variant="text" color="warning">
  Warning
</Button>

<Button variant="text" color="error">
  Error
</Button>
```

### All Colors - Large Size

```jsx
<Button variant="text" color="primary" size="large">
  Primary
</Button>

<Button variant="text" color="secondary" size="large">
  Secondary
</Button>

<Button variant="text" color="info" size="large">
  Info
</Button>

<Button variant="text" color="success" size="large">
  Success
</Button>

<Button variant="text" color="warning" size="large">
  Warning
</Button>

<Button variant="text" color="error" size="large">
  Error
</Button>
```

---

## 4. Soft Buttons (Custom Styled)

### Styled Component Definition

```jsx
const SoftButton = styled(Button)(({ theme, color = 'primary' }) => {
  const colors = {
    primary: {
      background: 'rgba(0, 167, 111, 0.08)',
      color: '#007867',
      hover: 'rgba(0, 167, 111, 0.16)',
    },
    secondary: {
      background: 'rgba(142, 51, 255, 0.08)',
      color: '#5119B7',
      hover: 'rgba(142, 51, 255, 0.16)',
    },
    info: {
      background: 'rgba(0, 184, 217, 0.08)',
      color: '#006C9C',
      hover: 'rgba(0, 184, 217, 0.16)',
    },
    success: {
      background: 'rgba(34, 197, 94, 0.08)',
      color: '#118D57',
      hover: 'rgba(34, 197, 94, 0.16)',
    },
    warning: {
      background: 'rgba(255, 171, 0, 0.08)',
      color: '#B76E00',
      hover: 'rgba(255, 171, 0, 0.16)',
    },
    error: {
      background: 'rgba(255, 86, 48, 0.08)',
      color: '#B71D18',
      hover: 'rgba(255, 86, 48, 0.16)',
    },
  };

  const colorScheme = colors[color];

  return {
    backgroundColor: colorScheme.background,
    color: colorScheme.color,
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: colorScheme.hover,
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(145, 158, 171, 0.08)',
      color: 'rgba(145, 158, 171, 0.8)',
    },
  };
});
```

### All Colors - Small Size

```jsx
<SoftButton color="primary" size="small">
  Primary
</SoftButton>

<SoftButton color="secondary" size="small">
  Secondary
</SoftButton>

<SoftButton color="info" size="small">
  Info
</SoftButton>

<SoftButton color="success" size="small">
  Success
</SoftButton>

<SoftButton color="warning" size="small">
  Warning
</SoftButton>

<SoftButton color="error" size="small">
  Error
</SoftButton>
```

### All Colors - Medium Size

```jsx
<SoftButton color="primary">
  Primary
</SoftButton>

<SoftButton color="secondary">
  Secondary
</SoftButton>

<SoftButton color="info">
  Info
</SoftButton>

<SoftButton color="success">
  Success
</SoftButton>

<SoftButton color="warning">
  Warning
</SoftButton>

<SoftButton color="error">
  Error
</SoftButton>
```

### All Colors - Large Size

```jsx
<SoftButton color="primary" size="large">
  Primary
</SoftButton>

<SoftButton color="secondary" size="large">
  Secondary
</SoftButton>

<SoftButton color="info" size="large">
  Info
</SoftButton>

<SoftButton color="success" size="large">
  Success
</SoftButton>

<SoftButton color="warning" size="large">
  Warning
</SoftButton>

<SoftButton color="error" size="large">
  Error
</SoftButton>
```

---

## 5. Buttons With Icons

### Leading Icons (Start Icon)

```jsx
<Button variant="contained" startIcon={<AddIcon />} size="small">
  Add Item
</Button>

<Button variant="contained" startIcon={<SaveIcon />}>
  Save Changes
</Button>

<Button variant="contained" startIcon={<SendIcon />} size="large">
  Send Message
</Button>

<Button variant="outlined" startIcon={<DeleteOutlineIcon />} color="error">
  Delete
</Button>

<Button variant="text" startIcon={<AddIcon />} color="info">
  Learn More
</Button>
```

### Trailing Icons (End Icon)

```jsx
<Button variant="contained" endIcon={<SendIcon />} size="small">
  Send
</Button>

<Button variant="contained" endIcon={<SendIcon />}>
  Submit
</Button>

<Button variant="contained" endIcon={<SendIcon />} size="large">
  Continue
</Button>

<Button variant="outlined" endIcon={<SendIcon />}>
  Next
</Button>
```

---

## 6. Icon Buttons

### All Colors - Small Size

```jsx
<IconButton color="primary" size="small" aria-label="add">
  <AddIcon fontSize="small" />
</IconButton>

<IconButton color="secondary" size="small" aria-label="delete">
  <DeleteOutlineIcon fontSize="small" />
</IconButton>

<IconButton color="info" size="small" aria-label="send">
  <SendIcon fontSize="small" />
</IconButton>

<IconButton color="success" size="small" aria-label="save">
  <SaveIcon fontSize="small" />
</IconButton>

<IconButton color="warning" size="small" aria-label="warning">
  <AddIcon fontSize="small" />
</IconButton>

<IconButton color="error" size="small" aria-label="error">
  <DeleteOutlineIcon fontSize="small" />
</IconButton>
```

### All Colors - Medium Size

```jsx
<IconButton color="primary" aria-label="add">
  <AddIcon />
</IconButton>

<IconButton color="secondary" aria-label="delete">
  <DeleteOutlineIcon />
</IconButton>

<IconButton color="info" aria-label="send">
  <SendIcon />
</IconButton>

<IconButton color="success" aria-label="save">
  <SaveIcon />
</IconButton>

<IconButton color="warning" aria-label="warning">
  <AddIcon />
</IconButton>

<IconButton color="error" aria-label="error">
  <DeleteOutlineIcon />
</IconButton>
```

### All Colors - Large Size

```jsx
<IconButton color="primary" size="large" aria-label="add">
  <AddIcon fontSize="large" />
</IconButton>

<IconButton color="secondary" size="large" aria-label="delete">
  <DeleteOutlineIcon fontSize="large" />
</IconButton>

<IconButton color="info" size="large" aria-label="send">
  <SendIcon fontSize="large" />
</IconButton>

<IconButton color="success" size="large" aria-label="save">
  <SaveIcon fontSize="large" />
</IconButton>

<IconButton color="warning" size="large" aria-label="warning">
  <AddIcon fontSize="large" />
</IconButton>

<IconButton color="error" size="large" aria-label="error">
  <DeleteOutlineIcon fontSize="large" />
</IconButton>
```

### Icon Buttons with Background (Contained Style)

```jsx
const ContainedIconButton = styled(IconButton)(({ theme, color = 'primary' }) => ({
  backgroundColor: theme.palette[color].main,
  color: theme.palette[color].contrastText,
  '&:hover': {
    backgroundColor: theme.palette[color].dark,
  },
}));

// Usage
<ContainedIconButton color="primary" aria-label="add">
  <AddIcon />
</ContainedIconButton>

<ContainedIconButton color="error" aria-label="delete">
  <DeleteOutlineIcon />
</ContainedIconButton>
```

---

## 7. Button Groups

### Horizontal Group - Contained

```jsx
<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<ButtonGroup variant="contained" color="secondary">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

### Horizontal Group - Outlined

```jsx
<ButtonGroup variant="outlined">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<ButtonGroup variant="outlined" color="primary">
  <Button>Day</Button>
  <Button>Week</Button>
  <Button>Month</Button>
  <Button>Year</Button>
</ButtonGroup>
```

### Horizontal Group - Text

```jsx
<ButtonGroup variant="text">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

### Vertical Group

```jsx
<ButtonGroup orientation="vertical" variant="outlined">
  <Button>Top</Button>
  <Button>Middle</Button>
  <Button>Bottom</Button>
</ButtonGroup>
```

### Button Group with Icons

```jsx
<ButtonGroup variant="outlined">
  <Button startIcon={<AddIcon />}>Add</Button>
  <Button startIcon={<SaveIcon />}>Save</Button>
  <Button startIcon={<DeleteOutlineIcon />} color="error">
    Delete
  </Button>
</ButtonGroup>
```

### Button Group Sizes

```jsx
<ButtonGroup variant="contained" size="small">
  <Button>Small</Button>
  <Button>Group</Button>
</ButtonGroup>

<ButtonGroup variant="contained" size="medium">
  <Button>Medium</Button>
  <Button>Group</Button>
</ButtonGroup>

<ButtonGroup variant="contained" size="large">
  <Button>Large</Button>
  <Button>Group</Button>
</ButtonGroup>
```

---

## 8. Loading States

### Basic Loading Button

```jsx
<Button
  variant="contained"
  disabled={loading}
  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
>
  {loading ? 'Saving...' : 'Save'}
</Button>
```

### Loading Button Component

```jsx
const LoadingButton = ({ loading, children, startIcon, ...props }) => {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled}
      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : startIcon}
    >
      {children}
    </Button>
  );
};

// Usage
<LoadingButton loading={isLoading} variant="contained" startIcon={<SaveIcon />}>
  Save Changes
</LoadingButton>
```

### All Loading States

```jsx
// Small
<Button
  variant="contained"
  size="small"
  disabled
  startIcon={<CircularProgress size={16} color="inherit" />}
>
  Loading...
</Button>

// Medium
<Button
  variant="contained"
  disabled
  startIcon={<CircularProgress size={20} color="inherit" />}
>
  Loading...
</Button>

// Large
<Button
  variant="contained"
  size="large"
  disabled
  startIcon={<CircularProgress size={22} color="inherit" />}
>
  Loading...
</Button>

// Icon button loading
<IconButton disabled>
  <CircularProgress size={20} />
</IconButton>
```

---

## 9. Disabled States

### All Variants Disabled

```jsx
<Button variant="contained" disabled>
  Disabled
</Button>

<Button variant="outlined" disabled>
  Disabled
</Button>

<Button variant="text" disabled>
  Disabled
</Button>

<SoftButton disabled>
  Disabled
</SoftButton>

<IconButton disabled>
  <AddIcon />
</IconButton>
```

---

## 10. Full Width Buttons

```jsx
<Button variant="contained" fullWidth>
  Full Width Button
</Button>

<Button variant="outlined" fullWidth>
  Full Width Outlined
</Button>

<Button variant="text" fullWidth>
  Full Width Text
</Button>
```

---

## 11. Custom Styled Buttons (Minimals Theme)

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const minimalsTheme = createTheme({
  palette: {
    primary: {
      main: '#00A76F',
      light: 'rgba(0, 167, 111, 0.08)',
      dark: '#007867',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8E33FF',
      light: 'rgba(142, 51, 255, 0.08)',
      dark: '#5119B7',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#00B8D9',
      light: 'rgba(0, 184, 217, 0.08)',
      dark: '#006C9C',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#22C55E',
      light: 'rgba(34, 197, 94, 0.08)',
      dark: '#118D57',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFAB00',
      light: 'rgba(255, 171, 0, 0.08)',
      dark: '#B76E00',
      contrastText: '#212B36',
    },
    error: {
      main: '#FF5630',
      light: 'rgba(255, 86, 48, 0.08)',
      dark: '#B71D18',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        sizeLarge: {
          height: '48px',
          padding: '8px 22px',
          fontSize: '15px',
        },
        sizeMedium: {
          height: '36px',
          padding: '6px 12px',
          fontSize: '14px',
        },
        sizeSmall: {
          height: '32px',
          padding: '4px 10px',
          fontSize: '13px',
        },
        contained: {
          boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.24)',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
        },
        sizeLarge: {
          width: '48px',
          height: '48px',
        },
        sizeMedium: {
          width: '40px',
          height: '40px',
        },
        sizeSmall: {
          width: '32px',
          height: '32px',
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

// Wrap your app
<ThemeProvider theme={minimalsTheme}>
  <Button variant="contained">Themed Button</Button>
</ThemeProvider>
```

---

## 12. Complete Example Component

```jsx
import React, { useState } from 'react';
import {
  Button,
  IconButton,
  ButtonGroup,
  CircularProgress,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

// Soft Button Component
const SoftButton = styled(Button)(({ theme, color = 'primary' }) => {
  const colors = {
    primary: { bg: 'rgba(0, 167, 111, 0.08)', color: '#007867', hover: 'rgba(0, 167, 111, 0.16)' },
    secondary: { bg: 'rgba(142, 51, 255, 0.08)', color: '#5119B7', hover: 'rgba(142, 51, 255, 0.16)' },
    info: { bg: 'rgba(0, 184, 217, 0.08)', color: '#006C9C', hover: 'rgba(0, 184, 217, 0.16)' },
    success: { bg: 'rgba(34, 197, 94, 0.08)', color: '#118D57', hover: 'rgba(34, 197, 94, 0.16)' },
    warning: { bg: 'rgba(255, 171, 0, 0.08)', color: '#B76E00', hover: 'rgba(255, 171, 0, 0.16)' },
    error: { bg: 'rgba(255, 86, 48, 0.08)', color: '#B71D18', hover: 'rgba(255, 86, 48, 0.16)' },
  };
  return {
    backgroundColor: colors[color].bg,
    color: colors[color].color,
    borderRadius: '8px',
    fontWeight: 600,
    textTransform: 'none',
    '&:hover': { backgroundColor: colors[color].hover },
    '&:active': { transform: 'scale(0.98)' },
  };
});

// Loading Button Component
const LoadingButton = ({ loading, children, startIcon, ...props }) => (
  <Button
    {...props}
    disabled={loading || props.disabled}
    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : startIcon}
  >
    {children}
  </Button>
);

const ButtonShowcase = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Button Components - Minimals UI
      </Typography>

      {/* Contained Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Contained Buttons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="error">Error</Button>
      </Stack>

      {/* Outlined Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Outlined Buttons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="error">Error</Button>
      </Stack>

      {/* Text Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Text Buttons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="info">Info</Button>
        <Button variant="text" color="success">Success</Button>
        <Button variant="text" color="warning">Warning</Button>
        <Button variant="text" color="error">Error</Button>
      </Stack>

      {/* Soft Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Soft Buttons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <SoftButton color="primary">Primary</SoftButton>
        <SoftButton color="secondary">Secondary</SoftButton>
        <SoftButton color="info">Info</SoftButton>
        <SoftButton color="success">Success</SoftButton>
        <SoftButton color="warning">Warning</SoftButton>
        <SoftButton color="error">Error</SoftButton>
      </Stack>

      {/* Sizes */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Button Sizes
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      {/* With Icons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Buttons With Icons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="contained" startIcon={<AddIcon />}>Add</Button>
        <Button variant="contained" startIcon={<SaveIcon />}>Save</Button>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        <Button variant="outlined" startIcon={<DeleteOutlineIcon />} color="error">
          Delete
        </Button>
      </Stack>

      {/* Icon Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Icon Buttons
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <IconButton color="primary" aria-label="add">
          <AddIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="save">
          <SaveIcon />
        </IconButton>
        <IconButton color="error" aria-label="delete">
          <DeleteOutlineIcon />
        </IconButton>
        <IconButton color="info" aria-label="send">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Button Groups */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Button Groups
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Day</Button>
          <Button>Week</Button>
          <Button>Month</Button>
        </ButtonGroup>
      </Stack>

      {/* Loading States */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Loading States
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <LoadingButton
          loading={loading}
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleLoadingClick}
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </LoadingButton>
        <Button
          variant="outlined"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
        >
          {loading ? 'Loading...' : 'Load Data'}
        </Button>
      </Stack>

      {/* Disabled States */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Disabled States
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="contained" disabled>Contained</Button>
        <Button variant="outlined" disabled>Outlined</Button>
        <Button variant="text" disabled>Text</Button>
        <IconButton disabled><AddIcon /></IconButton>
      </Stack>
    </Box>
  );
};

export default ButtonShowcase;
```

---

## Usage Notes

1. **Import Required Components**: Always import from '@mui/material'
2. **Use Semantic Colors**: Match button color to action intent
3. **Add aria-label**: Required for all IconButtons
4. **Loading States**: Disable button during async operations
5. **Responsive**: Use size prop for different screen sizes
6. **Theme Integration**: Wrap app with ThemeProvider for consistent styling
7. **Accessibility**: Ensure min 44px touch targets, proper contrast ratios
8. **Performance**: Styled components are memoized by MUI

---

## Common Patterns

### Form Submit Button
```jsx
<LoadingButton
  type="submit"
  variant="contained"
  size="large"
  loading={isSubmitting}
  fullWidth
>
  Submit Form
</LoadingButton>
```

### Delete Confirmation Button
```jsx
<Button
  variant="contained"
  color="error"
  startIcon={<DeleteOutlineIcon />}
  onClick={handleDelete}
>
  Delete Item
</Button>
```

### Navigation Buttons
```jsx
<Stack direction="row" spacing={2} justifyContent="space-between">
  <Button variant="outlined" startIcon={<ArrowBackIcon />}>
    Back
  </Button>
  <Button variant="contained" endIcon={<ArrowForwardIcon />}>
    Continue
  </Button>
</Stack>
```

### Filter Toggle Buttons
```jsx
<ButtonGroup variant="outlined">
  <Button onClick={() => setFilter('all')}>All</Button>
  <Button onClick={() => setFilter('active')}>Active</Button>
  <Button onClick={() => setFilter('archived')}>Archived</Button>
</ButtonGroup>
```
