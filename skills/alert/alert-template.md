# Alert Component Templates - Minimal UI Style

Complete React component implementations for all alert variants matching minimals.cc design system.

---

## Table of Contents
1. [Standard Alerts](#1-standard-alerts)
2. [Outlined Alerts](#2-outlined-alerts)
3. [Filled Alerts](#3-filled-alerts)
4. [Soft Alerts (Minimal UI Signature)](#4-soft-alerts-minimal-ui-signature)
5. [Alerts with Title](#5-alerts-with-title)
6. [Collapsible Alerts](#6-collapsible-alerts)
7. [Alerts with Actions](#7-alerts-with-actions)
8. [Custom Icon Alerts](#8-custom-icon-alerts)
9. [No Icon Alerts](#9-no-icon-alerts)
10. [Complete Demo - All Variants](#10-complete-demo---all-variants)

---

## 1. Standard Alerts

Basic alerts with light background and colored icons.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function StandardAlerts() {
  return (
    <Stack spacing={2}>
      <Alert severity="success">
        This is a success alert — check it out!
      </Alert>

      <Alert severity="info">
        This is an info alert — check it out!
      </Alert>

      <Alert severity="warning">
        This is a warning alert — check it out!
      </Alert>

      <Alert severity="error">
        This is an error alert — check it out!
      </Alert>
    </Stack>
  );
}
```

---

## 2. Outlined Alerts

Alerts with colored border and transparent background.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function OutlinedAlerts() {
  return (
    <Stack spacing={2}>
      <Alert variant="outlined" severity="success">
        This is an outlined success alert — check it out!
      </Alert>

      <Alert variant="outlined" severity="info">
        This is an outlined info alert — check it out!
      </Alert>

      <Alert variant="outlined" severity="warning">
        This is an outlined warning alert — check it out!
      </Alert>

      <Alert variant="outlined" severity="error">
        This is an outlined error alert — check it out!
      </Alert>
    </Stack>
  );
}
```

---

## 3. Filled Alerts

Alerts with solid background color and white text.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FilledAlerts() {
  return (
    <Stack spacing={2}>
      <Alert variant="filled" severity="success">
        This is a filled success alert — check it out!
      </Alert>

      <Alert variant="filled" severity="info">
        This is a filled info alert — check it out!
      </Alert>

      <Alert variant="filled" severity="warning">
        This is a filled warning alert — check it out!
      </Alert>

      <Alert variant="filled" severity="error">
        This is a filled error alert — check it out!
      </Alert>
    </Stack>
  );
}
```

---

## 4. Soft Alerts (Minimal UI Signature)

Custom styled alerts with lighter backgrounds and darker text - the signature Minimal UI style.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SoftAlerts() {
  return (
    <Stack spacing={2}>
      {/* Success - Soft Variant */}
      <Alert
        severity="success"
        sx={{
          bgcolor: '#D3FCD2', // success.lighter
          color: '#0A5554', // success.darker
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#0A5554', // success.darker
          },
        }}
      >
        This is a soft success alert with lighter background and darker text!
      </Alert>

      {/* Info - Soft Variant */}
      <Alert
        severity="info"
        sx={{
          bgcolor: '#CAFDF5', // info.lighter
          color: '#003768', // info.darker
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#003768', // info.darker
          },
        }}
      >
        This is a soft info alert with lighter background and darker text!
      </Alert>

      {/* Warning - Soft Variant */}
      <Alert
        severity="warning"
        sx={{
          bgcolor: '#FFF5CC', // warning.lighter
          color: '#7A4100', // warning.darker
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#7A4100', // warning.darker
          },
        }}
      >
        This is a soft warning alert with lighter background and darker text!
      </Alert>

      {/* Error - Soft Variant */}
      <Alert
        severity="error"
        sx={{
          bgcolor: '#FFE9D5', // error.lighter
          color: '#7A0916', // error.darker
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#7A0916', // error.darker
          },
        }}
      >
        This is a soft error alert with lighter background and darker text!
      </Alert>
    </Stack>
  );
}
```

### With Theme Integration

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

export default function SoftAlertsWithTheme() {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      {/* Success - Using Theme */}
      <Alert
        severity="success"
        sx={{
          bgcolor: theme.palette.success.lighter || '#D3FCD2',
          color: theme.palette.success.darker || '#0A5554',
          borderRadius: theme.shape.borderRadius || '8px',
          boxShadow: theme.customShadows?.z8 || '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: theme.palette.success.darker || '#0A5554',
          },
        }}
      >
        This is a soft success alert using theme values!
      </Alert>

      {/* Info - Using Theme */}
      <Alert
        severity="info"
        sx={{
          bgcolor: theme.palette.info.lighter || '#CAFDF5',
          color: theme.palette.info.darker || '#003768',
          borderRadius: theme.shape.borderRadius || '8px',
          boxShadow: theme.customShadows?.z8 || '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: theme.palette.info.darker || '#003768',
          },
        }}
      >
        This is a soft info alert using theme values!
      </Alert>

      {/* Warning - Using Theme */}
      <Alert
        severity="warning"
        sx={{
          bgcolor: theme.palette.warning.lighter || '#FFF5CC',
          color: theme.palette.warning.darker || '#7A4100',
          borderRadius: theme.shape.borderRadius || '8px',
          boxShadow: theme.customShadows?.z8 || '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: theme.palette.warning.darker || '#7A4100',
          },
        }}
      >
        This is a soft warning alert using theme values!
      </Alert>

      {/* Error - Using Theme */}
      <Alert
        severity="error"
        sx={{
          bgcolor: theme.palette.error.lighter || '#FFE9D5',
          color: theme.palette.error.darker || '#7A0916',
          borderRadius: theme.shape.borderRadius || '8px',
          boxShadow: theme.customShadows?.z8 || '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: theme.palette.error.darker || '#7A0916',
          },
        }}
      >
        This is a soft error alert using theme values!
      </Alert>
    </Stack>
  );
}
```

---

## 5. Alerts with Title

Alerts that include AlertTitle for message hierarchy.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function AlertsWithTitle() {
  return (
    <Stack spacing={2}>
      {/* Success with Title */}
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Your changes have been saved successfully!
      </Alert>

      {/* Info with Title */}
      <Alert severity="info">
        <AlertTitle>Information</AlertTitle>
        This is some important information you should know about.
      </Alert>

      {/* Warning with Title */}
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Please review your settings before proceeding.
      </Alert>

      {/* Error with Title */}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        An error occurred while processing your request.
      </Alert>
    </Stack>
  );
}
```

### Soft Alerts with Title

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function SoftAlertsWithTitle() {
  return (
    <Stack spacing={2}>
      {/* Success - Soft with Title */}
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
        <AlertTitle sx={{ fontWeight: 600 }}>Success</AlertTitle>
        Your payment has been processed successfully!
      </Alert>

      {/* Info - Soft with Title */}
      <Alert
        severity="info"
        sx={{
          bgcolor: '#CAFDF5',
          color: '#003768',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#003768',
          },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>New Feature</AlertTitle>
        Check out our new dashboard features available now!
      </Alert>

      {/* Warning - Soft with Title */}
      <Alert
        severity="warning"
        sx={{
          bgcolor: '#FFF5CC',
          color: '#7A4100',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#7A4100',
          },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Action Required</AlertTitle>
        Please update your payment method before the end of the month.
      </Alert>

      {/* Error - Soft with Title */}
      <Alert
        severity="error"
        sx={{
          bgcolor: '#FFE9D5',
          color: '#7A0916',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#7A0916',
          },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Payment Failed</AlertTitle>
        There was an error processing your payment. Please try again.
      </Alert>
    </Stack>
  );
}
```

---

## 6. Collapsible Alerts

Alerts that can be dismissed with close button and smooth collapse animation.

```tsx
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

export default function CollapsibleAlerts() {
  const [openSuccess, setOpenSuccess] = useState(true);
  const [openInfo, setOpenInfo] = useState(true);
  const [openWarning, setOpenWarning] = useState(true);
  const [openError, setOpenError] = useState(true);

  return (
    <Stack spacing={2}>
      {/* Success - Collapsible */}
      <Collapse in={openSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpenSuccess(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Your changes have been saved — you can dismiss this alert!
        </Alert>
      </Collapse>

      {/* Info - Collapsible */}
      <Collapse in={openInfo}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpenInfo(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Information</AlertTitle>
          This alert can be dismissed by clicking the close button.
        </Alert>
      </Collapse>

      {/* Warning - Collapsible */}
      <Collapse in={openWarning}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpenWarning(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Warning</AlertTitle>
          Please review this warning before dismissing.
        </Alert>
      </Collapse>

      {/* Error - Collapsible */}
      <Collapse in={openError}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpenError(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          An error occurred. Click close to dismiss this alert.
        </Alert>
      </Collapse>
    </Stack>
  );
}
```

### Soft Collapsible Alert

```tsx
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function SoftCollapsibleAlert() {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="success"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={() => setOpen(false)}
            sx={{
              color: '#0A5554', // success.darker
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{
          bgcolor: '#D3FCD2', // success.lighter
          color: '#0A5554', // success.darker
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#0A5554',
          },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Success</AlertTitle>
        This is a soft collapsible alert with Minimal UI styling!
      </Alert>
    </Collapse>
  );
}
```

---

## 7. Alerts with Actions

Alerts with action buttons like Undo, Retry, or custom actions.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function AlertsWithActions() {
  const handleUndo = () => {
    console.log('Undo action clicked');
  };

  const handleRetry = () => {
    console.log('Retry action clicked');
  };

  const handleViewDetails = () => {
    console.log('View Details clicked');
  };

  return (
    <Stack spacing={2}>
      {/* Success with Undo Action */}
      <Alert
        severity="success"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={handleUndo}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            UNDO
          </Button>
        }
      >
        File deleted successfully!
      </Alert>

      {/* Error with Retry Action */}
      <Alert
        severity="error"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={handleRetry}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            RETRY
          </Button>
        }
      >
        Connection failed. Please try again.
      </Alert>

      {/* Info with View Details Action */}
      <Alert
        severity="info"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={handleViewDetails}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            VIEW
          </Button>
        }
      >
        New updates available for your application.
      </Alert>

      {/* Warning with Multiple Actions */}
      <Alert
        severity="warning"
        action={
          <Stack direction="row" spacing={1}>
            <Button
              color="inherit"
              size="small"
              onClick={() => console.log('Dismiss')}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              DISMISS
            </Button>
            <Button
              color="inherit"
              size="small"
              onClick={() => console.log('Learn More')}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              LEARN MORE
            </Button>
          </Stack>
        }
      >
        Your subscription expires in 3 days.
      </Alert>
    </Stack>
  );
}
```

### Soft Alert with Actions

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

export default function SoftAlertWithActions() {
  return (
    <Stack spacing={2}>
      {/* Soft Success with Undo */}
      <Alert
        severity="success"
        action={
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              size="small"
              onClick={() => console.log('Undo')}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                color: '#0A5554',
              }}
            >
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              size="small"
              sx={{ color: '#0A5554' }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        }
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
        <AlertTitle sx={{ fontWeight: 600 }}>Changes Saved</AlertTitle>
        Your document has been saved successfully!
      </Alert>

      {/* Soft Error with Retry */}
      <Alert
        severity="error"
        action={
          <Button
            size="small"
            onClick={() => console.log('Retry')}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              color: '#7A0916',
            }}
          >
            RETRY
          </Button>
        }
        sx={{
          bgcolor: '#FFE9D5',
          color: '#7A0916',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          '& .MuiAlert-icon': {
            color: '#7A0916',
          },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Upload Failed</AlertTitle>
        There was an error uploading your file. Please try again.
      </Alert>
    </Stack>
  );
}
```

---

## 8. Custom Icon Alerts

Alerts with custom icons instead of default severity icons.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function CustomIconAlerts() {
  return (
    <Stack spacing={2}>
      {/* Success with Custom Icon */}
      <Alert
        severity="success"
        icon={<CheckCircleOutlineIcon fontSize="inherit" />}
      >
        Success alert with custom outlined icon!
      </Alert>

      {/* Info with Custom Icon */}
      <Alert
        severity="info"
        icon={<InfoOutlinedIcon fontSize="inherit" />}
      >
        Info alert with custom outlined icon!
      </Alert>

      {/* Warning with Custom Icon */}
      <Alert
        severity="warning"
        icon={<WarningAmberIcon fontSize="inherit" />}
      >
        Warning alert with custom amber icon!
      </Alert>

      {/* Error with Custom Icon */}
      <Alert
        severity="error"
        icon={<ErrorOutlineIcon fontSize="inherit" />}
      >
        Error alert with custom outlined icon!
      </Alert>

      {/* Info with Notification Icon */}
      <Alert
        severity="info"
        icon={<NotificationsActiveIcon fontSize="inherit" />}
      >
        You have 3 new notifications!
      </Alert>

      {/* Warning with Lightbulb Icon */}
      <Alert
        severity="warning"
        icon={<LightbulbIcon fontSize="inherit" />}
      >
        Pro tip: Use keyboard shortcuts to work faster!
      </Alert>
    </Stack>
  );
}
```

---

## 9. No Icon Alerts

Alerts without any icon.

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function NoIconAlerts() {
  return (
    <Stack spacing={2}>
      {/* Success without Icon */}
      <Alert severity="success" icon={false}>
        This is a success alert without an icon!
      </Alert>

      {/* Info without Icon */}
      <Alert severity="info" icon={false}>
        This is an info alert without an icon!
      </Alert>

      {/* Warning without Icon */}
      <Alert severity="warning" icon={false}>
        This is a warning alert without an icon!
      </Alert>

      {/* Error without Icon */}
      <Alert severity="error" icon={false}>
        This is an error alert without an icon!
      </Alert>

      {/* With Title, No Icon */}
      <Alert severity="info" icon={false}>
        <AlertTitle>Important Notice</AlertTitle>
        This alert has a title but no icon for a cleaner look.
      </Alert>
    </Stack>
  );
}
```

### Soft Alerts without Icon

```tsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function SoftNoIconAlerts() {
  return (
    <Stack spacing={2}>
      {/* Soft Success without Icon */}
      <Alert
        severity="success"
        icon={false}
        sx={{
          bgcolor: '#D3FCD2',
          color: '#0A5554',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Success</AlertTitle>
        Soft success alert without icon for minimal appearance.
      </Alert>

      {/* Soft Info without Icon */}
      <Alert
        severity="info"
        icon={false}
        sx={{
          bgcolor: '#CAFDF5',
          color: '#003768',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <AlertTitle sx={{ fontWeight: 600 }}>Information</AlertTitle>
        Soft info alert without icon for clean design.
      </Alert>
    </Stack>
  );
}
```

---

## 10. Complete Demo - All Variants

Combined component showcasing all alert variants.

```tsx
import React, { useState } from 'react';
import {
  Alert,
  AlertTitle,
  Stack,
  Container,
  Typography,
  Divider,
  Button,
  IconButton,
  Collapse,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function AllAlertVariants() {
  const [collapsibleOpen, setCollapsibleOpen] = useState(true);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Section 1: Standard Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          1. Standard Alerts
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Basic alerts with light background and colored icons.
        </Typography>

        <Stack spacing={2}>
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
          <Alert severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="error">
            This is an error alert — check it out!
          </Alert>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 2: Outlined Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          2. Outlined Alerts
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alerts with colored border and transparent background.
        </Typography>

        <Stack spacing={2}>
          <Alert variant="outlined" severity="success">
            This is an outlined success alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an outlined info alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is an outlined warning alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="error">
            This is an outlined error alert — check it out!
          </Alert>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 3: Filled Alerts */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          3. Filled Alerts
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alerts with solid background color and white text.
        </Typography>

        <Stack spacing={2}>
          <Alert variant="filled" severity="success">
            This is a filled success alert — check it out!
          </Alert>
          <Alert variant="filled" severity="info">
            This is a filled info alert — check it out!
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a filled warning alert — check it out!
          </Alert>
          <Alert variant="filled" severity="error">
            This is a filled error alert — check it out!
          </Alert>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 4: Soft Alerts (Minimal UI Signature) */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          4. Soft Alerts (Minimal UI Signature Style)
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Custom styled with lighter backgrounds and darker text colors.
        </Typography>

        <Stack spacing={2}>
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
            This is a soft success alert with lighter background and darker text!
          </Alert>

          <Alert
            severity="info"
            sx={{
              bgcolor: '#CAFDF5',
              color: '#003768',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#003768',
              },
            }}
          >
            This is a soft info alert with lighter background and darker text!
          </Alert>

          <Alert
            severity="warning"
            sx={{
              bgcolor: '#FFF5CC',
              color: '#7A4100',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#7A4100',
              },
            }}
          >
            This is a soft warning alert with lighter background and darker text!
          </Alert>

          <Alert
            severity="error"
            sx={{
              bgcolor: '#FFE9D5',
              color: '#7A0916',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#7A0916',
              },
            }}
          >
            This is a soft error alert with lighter background and darker text!
          </Alert>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 5: Alerts with Title */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          5. Alerts with Title
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alerts with AlertTitle for better message hierarchy.
        </Typography>

        <Stack spacing={2}>
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
            <AlertTitle sx={{ fontWeight: 600 }}>Success</AlertTitle>
            Your payment has been processed successfully!
          </Alert>

          <Alert
            severity="info"
            sx={{
              bgcolor: '#CAFDF5',
              color: '#003768',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#003768',
              },
            }}
          >
            <AlertTitle sx={{ fontWeight: 600 }}>New Feature</AlertTitle>
            Check out our new dashboard features available now!
          </Alert>

          <Alert
            severity="warning"
            sx={{
              bgcolor: '#FFF5CC',
              color: '#7A4100',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#7A4100',
              },
            }}
          >
            <AlertTitle sx={{ fontWeight: 600 }}>Action Required</AlertTitle>
            Please update your payment method before the end of the month.
          </Alert>

          <Alert
            severity="error"
            sx={{
              bgcolor: '#FFE9D5',
              color: '#7A0916',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#7A0916',
              },
            }}
          >
            <AlertTitle sx={{ fontWeight: 600 }}>Payment Failed</AlertTitle>
            There was an error processing your payment. Please try again.
          </Alert>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 6: Collapsible Alert */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          6. Collapsible Alert
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alert that can be dismissed with close button and smooth animation.
        </Typography>

        <Collapse in={collapsibleOpen}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => setCollapsibleOpen(false)}
                sx={{ color: '#0A5554' }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
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
            <AlertTitle sx={{ fontWeight: 600 }}>Dismissible Alert</AlertTitle>
            Click the close button to dismiss this alert with a smooth collapse animation!
          </Alert>
        </Collapse>

        {!collapsibleOpen && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setCollapsibleOpen(true)}
            sx={{ mt: 2 }}
          >
            Show Alert Again
          </Button>
        )}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 7: Alerts with Actions */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          7. Alerts with Actions
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alerts with action buttons for user interaction.
        </Typography>

        <Stack spacing={2}>
          <Alert
            severity="success"
            action={
              <Button
                size="small"
                onClick={() => console.log('Undo')}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  color: '#0A5554',
                }}
              >
                UNDO
              </Button>
            }
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
            <AlertTitle sx={{ fontWeight: 600 }}>File Deleted</AlertTitle>
            The file has been moved to trash.
          </Alert>

          <Alert
            severity="error"
            action={
              <Button
                size="small"
                onClick={() => console.log('Retry')}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  color: '#7A0916',
                }}
              >
                RETRY
              </Button>
            }
            sx={{
              bgcolor: '#FFE9D5',
              color: '#7A0916',
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
              '& .MuiAlert-icon': {
                color: '#7A0916',
              },
            }}
          >
            <AlertTitle sx={{ fontWeight: 600 }}>Connection Error</AlertTitle>
            Failed to connect to the server. Please try again.
          </Alert>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 8: Custom Icon Alert */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          8. Custom Icon Alert
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alert with custom icon instead of default severity icon.
        </Typography>

        <Alert
          severity="success"
          icon={<CheckCircleOutlineIcon fontSize="inherit" />}
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
          Alert with custom outlined check circle icon!
        </Alert>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section 9: No Icon Alert */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          9. No Icon Alert
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Alert without any icon for minimal appearance.
        </Typography>

        <Alert
          severity="info"
          icon={false}
          sx={{
            bgcolor: '#CAFDF5',
            color: '#003768',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          <AlertTitle sx={{ fontWeight: 600 }}>Clean Design</AlertTitle>
          This alert has no icon for a cleaner, more minimal look.
        </Alert>
      </Box>
    </Container>
  );
}
```

---

## Usage Instructions

### Installation

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### Import and Use

```tsx
import StandardAlerts from './components/StandardAlerts';
import SoftAlerts from './components/SoftAlerts';
import AllAlertVariants from './components/AllAlertVariants';

function App() {
  return (
    <div>
      <StandardAlerts />
      {/* or */}
      <SoftAlerts />
      {/* or see all variants */}
      <AllAlertVariants />
    </div>
  );
}
```

### Customization

#### Change Colors (Soft Variant)
```tsx
sx={{
  bgcolor: '#YOUR_LIGHTER_COLOR',
  color: '#YOUR_DARKER_COLOR',
  '& .MuiAlert-icon': {
    color: '#YOUR_DARKER_COLOR',
  },
}}
```

#### Change Border Radius
```tsx
sx={{
  borderRadius: '16px', // rounded
  // or
  borderRadius: '0', // square
}}
```

#### Add Auto-Dismiss
```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    setOpen(false);
  }, 5000); // Dismiss after 5 seconds

  return () => clearTimeout(timer);
}, []);
```

---

## Notes

- All components use MUI v5 syntax
- Follows Minimal UI design system
- Fully accessible with ARIA attributes
- Keyboard navigation supported
- Responsive and mobile-friendly
- Production-ready code

## Related Components

- Snackbar
- Toast
- Dialog
- Banner
