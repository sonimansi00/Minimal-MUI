# Progress Component Templates

Complete React code templates using MUI v5 following Minimals design system.

## Basic Imports

```jsx
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
```

---

## Circular Progress Templates

### 1. Circular Indeterminate (Loading Spinner)

```jsx
import { CircularProgress } from '@mui/material';

function LoadingSpinner() {
  return <CircularProgress />;
}

export default LoadingSpinner;
```

### 2. Circular Determinate (With Value)

```jsx
import { CircularProgress } from '@mui/material';

function CircularProgressWithValue({ value = 0 }) {
  return (
    <CircularProgress
      variant="determinate"
      value={value}
      sx={{ color: '#00A76F' }}
    />
  );
}

export default CircularProgressWithValue;
```

### 3. Circular Progress with Label

```jsx
import { Box, CircularProgress, Typography } from '@mui/material';

function CircularProgressWithLabel({ value = 0, size = 40 }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        sx={{ color: '#00A76F' }}
      />
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
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontWeight: 600 }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
```

### 4. All Circular Sizes

```jsx
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

function CircularProgressSizes() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box textAlign="center">
        <CircularProgress size={20} sx={{ color: '#00A76F' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Extra Small
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress size={30} sx={{ color: '#00A76F' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Small
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress size={40} sx={{ color: '#00A76F' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Medium
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress size={60} sx={{ color: '#00A76F' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Large
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress size={80} sx={{ color: '#00A76F' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Extra Large
        </Typography>
      </Box>
    </Stack>
  );
}

export default CircularProgressSizes;
```

### 5. Circular Progress with Colors

```jsx
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

function CircularProgressColors() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box textAlign="center">
        <CircularProgress sx={{ color: '#00A76F' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Primary
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress sx={{ color: '#8E33FF' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Secondary
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress sx={{ color: '#00B8D9' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Info
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress sx={{ color: '#22C55E' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Success
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress sx={{ color: '#FFAB00' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Warning
        </Typography>
      </Box>

      <Box textAlign="center">
        <CircularProgress sx={{ color: '#FF5630' }} />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Error
        </Typography>
      </Box>
    </Stack>
  );
}

export default CircularProgressColors;
```

---

## Linear Progress Templates

### 6. Linear Indeterminate (Loading Bar)

```jsx
import { LinearProgress } from '@mui/material';

function LoadingBar() {
  return (
    <LinearProgress
      sx={{
        bgcolor: 'rgba(145, 158, 171, 0.16)',
        '& .MuiLinearProgress-bar': {
          bgcolor: '#00A76F'
        }
      }}
    />
  );
}

export default LoadingBar;
```

### 7. Linear Determinate (With Value)

```jsx
import { LinearProgress } from '@mui/material';

function LinearProgressWithValue({ value = 0 }) {
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 6,
        borderRadius: 1,
        bgcolor: 'rgba(145, 158, 171, 0.16)',
        '& .MuiLinearProgress-bar': {
          bgcolor: '#00A76F',
          borderRadius: 1
        }
      }}
    />
  );
}

export default LinearProgressWithValue;
```

### 8. Linear Progress with Label

```jsx
import { Box, LinearProgress, Typography } from '@mui/material';

function LinearProgressWithLabel({ value = 0 }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: 6,
              borderRadius: 1,
              bgcolor: 'rgba(145, 158, 171, 0.16)',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#00A76F',
                borderRadius: 1
              }
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
```

### 9. Linear Buffer Progress

```jsx
import { LinearProgress } from '@mui/material';

function LinearBufferProgress({ value = 0, valueBuffer = 10 }) {
  return (
    <LinearProgress
      variant="buffer"
      value={value}
      valueBuffer={valueBuffer}
      sx={{
        height: 6,
        borderRadius: 1,
        bgcolor: 'rgba(145, 158, 171, 0.16)',
        '& .MuiLinearProgress-bar1': {
          bgcolor: '#00A76F',
          borderRadius: 1
        },
        '& .MuiLinearProgress-bar2': {
          bgcolor: 'rgba(0, 167, 111, 0.3)',
        },
        '& .MuiLinearProgress-dashed': {
          backgroundImage: 'radial-gradient(rgba(145, 158, 171, 0.16) 0%, rgba(145, 158, 171, 0.16) 16%, transparent 42%)',
        }
      }}
    />
  );
}

export default LinearBufferProgress;
```

### 10. Linear Progress Heights

```jsx
import { Box, LinearProgress, Stack, Typography } from '@mui/material';

function LinearProgressHeights() {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Thin (4px)
        </Typography>
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{
            height: 4,
            borderRadius: 1,
            bgcolor: 'rgba(145, 158, 171, 0.16)',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#00A76F',
              borderRadius: 1
            }
          }}
        />
      </Box>

      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Regular (6px)
        </Typography>
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{
            height: 6,
            borderRadius: 1,
            bgcolor: 'rgba(145, 158, 171, 0.16)',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#00A76F',
              borderRadius: 1
            }
          }}
        />
      </Box>

      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Thick (8px)
        </Typography>
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{
            height: 8,
            borderRadius: 1,
            bgcolor: 'rgba(145, 158, 171, 0.16)',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#00A76F',
              borderRadius: 1
            }
          }}
        />
      </Box>
    </Stack>
  );
}

export default LinearProgressHeights;
```

### 11. Linear Progress with Colors

```jsx
import { Box, LinearProgress, Stack, Typography } from '@mui/material';

function LinearProgressColors() {
  const colors = [
    { name: 'Primary', color: '#00A76F' },
    { name: 'Secondary', color: '#8E33FF' },
    { name: 'Info', color: '#00B8D9' },
    { name: 'Success', color: '#22C55E' },
    { name: 'Warning', color: '#FFAB00' },
    { name: 'Error', color: '#FF5630' },
  ];

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {colors.map((item) => (
        <Box key={item.name}>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            {item.name}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={75}
            sx={{
              height: 6,
              borderRadius: 1,
              bgcolor: 'rgba(145, 158, 171, 0.16)',
              '& .MuiLinearProgress-bar': {
                bgcolor: item.color,
                borderRadius: 1
              }
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}

export default LinearProgressColors;
```

---

## Complete Demo Component

### 12. All Progress Variants Showcase

```jsx
import { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
  Stack,
  Paper,
  Grid
} from '@mui/material';

function ProgressShowcase() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Circular Indeterminate */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Circular Indeterminate
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress sx={{ color: '#00A76F' }} />
            </Box>
          </Paper>
        </Grid>

        {/* Circular Determinate */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Circular Determinate
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress
                variant="determinate"
                value={progress}
                sx={{ color: '#00A76F' }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Circular with Label */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Circular with Label
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={60}
                  sx={{ color: '#00A76F' }}
                />
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
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    sx={{ fontWeight: 600, fontSize: 14 }}
                  >
                    {`${Math.round(progress)}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Sizes */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Sizes
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <CircularProgress size={20} sx={{ color: '#00A76F' }} />
              <CircularProgress size={30} sx={{ color: '#00A76F' }} />
              <CircularProgress size={40} sx={{ color: '#00A76F' }} />
              <CircularProgress size={60} sx={{ color: '#00A76F' }} />
            </Stack>
          </Paper>
        </Grid>

        {/* Linear Indeterminate */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Linear Indeterminate
            </Typography>
            <LinearProgress
              sx={{
                mt: 2,
                height: 6,
                borderRadius: 1,
                bgcolor: 'rgba(145, 158, 171, 0.16)',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#00A76F',
                  borderRadius: 1
                }
              }}
            />
          </Paper>
        </Grid>

        {/* Linear Determinate */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Linear Determinate
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                mt: 2,
                height: 6,
                borderRadius: 1,
                bgcolor: 'rgba(145, 158, 171, 0.16)',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#00A76F',
                  borderRadius: 1
                }
              }}
            />
          </Paper>
        </Grid>

        {/* Linear with Label */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Linear with Label
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 6,
                    borderRadius: 1,
                    bgcolor: 'rgba(145, 158, 171, 0.16)',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#00A76F',
                      borderRadius: 1
                    }
                  }}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  {`${Math.round(progress)}%`}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Buffer */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Buffer
            </Typography>
            <LinearProgress
              variant="buffer"
              value={progress}
              valueBuffer={progress + 10}
              sx={{
                mt: 2,
                height: 6,
                borderRadius: 1,
                bgcolor: 'rgba(145, 158, 171, 0.16)',
                '& .MuiLinearProgress-bar1': {
                  bgcolor: '#00A76F',
                  borderRadius: 1
                },
                '& .MuiLinearProgress-bar2': {
                  bgcolor: 'rgba(0, 167, 111, 0.3)',
                },
                '& .MuiLinearProgress-dashed': {
                  backgroundImage: 'radial-gradient(rgba(145, 158, 171, 0.16) 0%, rgba(145, 158, 171, 0.16) 16%, transparent 42%)',
                }
              }}
            />
          </Paper>
        </Grid>

        {/* Colors */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Colors
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <CircularProgress sx={{ color: '#00A76F' }} />
              <CircularProgress sx={{ color: '#8E33FF' }} />
              <CircularProgress sx={{ color: '#00B8D9' }} />
              <CircularProgress sx={{ color: '#22C55E' }} />
              <CircularProgress sx={{ color: '#FFAB00' }} />
              <CircularProgress sx={{ color: '#FF5630' }} />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProgressShowcase;
```

---

## Usage Notes

1. **Import MUI Components**: Always import from `@mui/material`
2. **Primary Color**: Use `#00A76F` for Minimals brand color
3. **Background Color**: Use `rgba(145, 158, 171, 0.16)` for progress background
4. **Border Radius**: Apply `borderRadius: 1` (4px) for rounded corners
5. **Height**: Default linear progress height is 6px
6. **Label Typography**: Use `variant="caption"` with `fontWeight: 600` for labels
7. **Accessibility**: Include proper aria attributes for screen readers
8. **Animation**: All progress components include smooth transitions by default
