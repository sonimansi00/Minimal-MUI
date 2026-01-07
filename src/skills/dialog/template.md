# Dialog Component Templates

Complete React code templates for all Dialog variants using MUI v5.

## 1. Basic Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

export default function BasicDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
          }}
        >
          Dialog Title
        </DialogTitle>

        <DialogContent sx={{ padding: '0 24px 20px' }}>
          <Typography variant="body2" color="text.secondary">
            This is a basic dialog with title, content, and action buttons.
            It follows the Minimals UI design specifications.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ padding: '24px', gap: '8px' }}>
          <Button onClick={handleClose} variant="text">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

## 2. Alert Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    // Perform action
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={handleOpen}>
        Delete Item
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <WarningIcon color="error" />
            Confirm Delete
          </Box>
        </DialogTitle>

        <DialogContent sx={{ padding: '0 24px 20px' }}>
          <Typography variant="body2" color="text.secondary">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ padding: '24px', gap: '8px' }}>
          <Button onClick={handleClose} variant="text">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

## 3. Form Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from '@mui/material';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Form
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
          }}
        >
          Contact Form
        </DialogTitle>

        <DialogContent sx={{ padding: '0 24px 20px' }}>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ padding: '24px', gap: '8px' }}>
          <Button onClick={handleClose} variant="text">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

## 4. Full Screen Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Full Screen
      </Button>

      <Dialog
        fullScreen={isMobile}
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : '16px',
          },
        }}
      >
        <AppBar
          position="relative"
          elevation={0}
          sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flex: 1,
                fontSize: '18px',
                fontWeight: 700,
              }}
            >
              Full Screen Dialog
            </Typography>
            <IconButton edge="end" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <DialogContent sx={{ padding: '24px' }}>
          <Container maxWidth="md">
            <Box py={3}>
              <Typography variant="body2" color="text.secondary" paragraph>
                This dialog adapts to full screen on mobile devices and shows
                as a large dialog on desktop. It includes an app bar with a
                close button.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add your content here. This can include complex layouts, forms,
                or any other components.
              </Typography>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## 5. Scrollable Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

export default function ScrollableDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Sample long content
  const longContent = Array.from({ length: 50 }, (_, i) => (
    <Typography key={i} variant="body2" color="text.secondary" paragraph>
      Paragraph {i + 1}: This is a scrollable dialog with long content. The
      content area will scroll while the title and actions remain fixed. Dividers
      appear automatically when scrolling is possible.
    </Typography>
  ));

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Scrollable
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: '16px',
            maxHeight: '80vh',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
          }}
        >
          Scrollable Dialog
        </DialogTitle>

        <DialogContent dividers sx={{ padding: '24px' }}>
          {longContent}
        </DialogContent>

        <DialogActions sx={{ padding: '24px', gap: '8px' }}>
          <Button onClick={handleClose} variant="text">
            Decline
          </Button>
          <Button onClick={handleClose} variant="contained">
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

## 6. Draggable Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import Draggable from 'react-draggable';

// Draggable Paper Component
function DraggablePaper(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Draggable
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperComponent={DraggablePaper}
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
        hideBackdrop
        disableEnforceFocus
      >
        <DialogTitle
          id="draggable-dialog-title"
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
            cursor: 'move',
            userSelect: 'none',
          }}
        >
          Draggable Dialog
        </DialogTitle>

        <DialogContent sx={{ padding: '0 24px 20px' }}>
          <Typography variant="body2" color="text.secondary">
            You can drag this dialog by clicking and holding the title bar.
            The dialog can be repositioned anywhere on the screen.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ padding: '24px', gap: '8px' }}>
          <Button onClick={handleClose} variant="text">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

## 7. Dialog Sizes (All Variants)

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  Box,
} from '@mui/material';

export default function DialogSizes() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('md');

  const handleOpen = (selectedSize) => {
    setSize(selectedSize);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
        <Button variant="outlined" onClick={() => handleOpen('xs')}>
          XS (444px)
        </Button>
        <Button variant="outlined" onClick={() => handleOpen('sm')}>
          SM (600px)
        </Button>
        <Button variant="outlined" onClick={() => handleOpen('md')}>
          MD (900px)
        </Button>
        <Button variant="outlined" onClick={() => handleOpen('lg')}>
          LG (1200px)
        </Button>
        <Button variant="outlined" onClick={() => handleOpen('xl')}>
          XL (1536px)
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={size}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
          }}
        >
          Dialog Size: {size.toUpperCase()}
        </DialogTitle>

        <DialogContent sx={{ padding: '0 24px 20px' }}>
          <Typography variant="body2" color="text.secondary">
            This dialog is using the <strong>{size}</strong> size variant.
            MUI provides predefined maxWidth values for responsive layouts.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ padding: '24px', gap: '8px' }}>
          <Button onClick={handleClose} variant="text">
            Close
          </Button>
          <Button onClick={handleClose} variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
```

## 8. Custom Actions Dialog

```jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stack,
} from '@mui/material';

export default function CustomActionsDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    console.log('Save action');
    handleClose();
  };

  const handleSaveAndNew = () => {
    console.log('Save and create new');
    // Don't close, reset form
  };

  const handlePreview = () => {
    console.log('Preview action');
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Custom Actions
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            padding: '24px',
          }}
        >
          Custom Actions Dialog
        </DialogTitle>

        <DialogContent sx={{ padding: '0 24px 20px' }}>
          <Typography variant="body2" color="text.secondary">
            This dialog demonstrates custom action button configurations with
            multiple actions, different button variants, and flexible layouts.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ padding: '24px' }}>
          <Stack
            direction="row"
            spacing={1}
            width="100%"
            justifyContent="space-between"
          >
            {/* Left-aligned actions */}
            <Box display="flex" gap={1}>
              <Button onClick={handlePreview} variant="outlined">
                Preview
              </Button>
            </Box>

            {/* Right-aligned actions */}
            <Box display="flex" gap={1}>
              <Button onClick={handleClose} variant="text">
                Cancel
              </Button>
              <Button onClick={handleSaveAndNew} variant="outlined">
                Save & New
              </Button>
              <Button onClick={handleSave} variant="contained">
                Save
              </Button>
            </Box>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

## Installation Note

For the Draggable Dialog variant, install the required dependency:

```bash
npm install react-draggable
# or
yarn add react-draggable
```

## Usage Tips

1. **State Management**: All examples use local state. For global dialogs, consider using Context API or state management libraries.

2. **Form Validation**: Add validation libraries like `react-hook-form` or `formik` for complex forms.

3. **Accessibility**: The examples include basic accessibility. Enhance with proper ARIA labels and descriptions.

4. **Animations**: Customize transition with `TransitionComponent` prop and custom components.

5. **Theming**: All dialogs respect MUI theme. Customize via theme provider for consistent branding.

6. **Mobile Optimization**: Consider using `fullScreen` prop based on screen size using `useMediaQuery`.

7. **Performance**: For dialogs with heavy content, use lazy loading or code splitting.

8. **Testing**: Ensure dialogs are testable by using data-testid attributes and proper semantic HTML.
