# Popover Component Templates

## Complete Implementation Examples

### 1. Basic Popover

```jsx
import React, { useState } from 'react';
import { Popover, Button, Typography, Box } from '@mui/material';

const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'basic-popover' : undefined;

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        aria-describedby={id}
      >
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
            minWidth: '200px',
          },
        }}
      >
        <Typography>This is a basic popover content</Typography>
      </Popover>
    </>
  );
};

export default BasicPopover;
```

### 2. Anchor Origin Popover

```jsx
import React, { useState } from 'react';
import { Popover, Button, Typography, Box, Stack } from '@mui/material';

const AnchorOriginPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorOrigin, setAnchorOrigin] = useState({
    vertical: 'bottom',
    horizontal: 'center',
  });

  const handleClick = (event, vertical, horizontal) => {
    setAnchorEl(event.currentTarget);
    setAnchorOrigin({ vertical, horizontal });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={(e) => handleClick(e, 'top', 'left')}>Top Left</Button>
        <Button onClick={(e) => handleClick(e, 'top', 'center')}>Top Center</Button>
        <Button onClick={(e) => handleClick(e, 'top', 'right')}>Top Right</Button>
        <Button onClick={(e) => handleClick(e, 'bottom', 'left')}>Bottom Left</Button>
        <Button onClick={(e) => handleClick(e, 'bottom', 'center')}>Bottom Center</Button>
        <Button onClick={(e) => handleClick(e, 'bottom', 'right')}>Bottom Right</Button>
      </Stack>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={{
          vertical: anchorOrigin.vertical === 'top' ? 'bottom' : 'top',
          horizontal: anchorOrigin.horizontal,
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
          },
        }}
      >
        <Typography>
          Anchor: {anchorOrigin.vertical}-{anchorOrigin.horizontal}
        </Typography>
      </Popover>
    </Box>
  );
};

export default AnchorOriginPopover;
```

### 3. Transform Origin Popover

```jsx
import React, { useState } from 'react';
import { Popover, Button, Typography, Stack } from '@mui/material';

const TransformOriginPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [transformOrigin, setTransformOrigin] = useState({
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick = (event, vertical, horizontal) => {
    setAnchorEl(event.currentTarget);
    setTransformOrigin({ vertical, horizontal });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={(e) => handleClick(e, 'top', 'left')}>Top Left</Button>
        <Button onClick={(e) => handleClick(e, 'top', 'center')}>Top Center</Button>
        <Button onClick={(e) => handleClick(e, 'bottom', 'right')}>Bottom Right</Button>
        <Button onClick={(e) => handleClick(e, 'center', 'center')}>Center</Button>
      </Stack>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={transformOrigin}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
          },
        }}
      >
        <Typography>
          Transform: {transformOrigin.vertical}-{transformOrigin.horizontal}
        </Typography>
      </Popover>
    </>
  );
};

export default TransformOriginPopover;
```

### 4. Hover Popover

```jsx
import React, { useState, useRef } from 'react';
import { Popover, Button, Typography, Box } from '@mui/material';

const HoverPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const enterTimerRef = useRef(null);
  const leaveTimerRef = useRef(null);

  const handleMouseEnter = (event) => {
    // Clear any existing leave timer
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }

    // Set enter timer
    enterTimerRef.current = setTimeout(() => {
      setAnchorEl(event.currentTarget);
    }, 300);
  };

  const handleMouseLeave = () => {
    // Clear enter timer
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }

    // Set leave timer
    leaveTimerRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const handlePopoverEnter = () => {
    // Clear leave timer when mouse enters popover
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handlePopoverLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Cleanup timers on unmount
  React.useEffect(() => {
    return () => {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Over Me
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverLeave}
        disableRestoreFocus
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          pointerEvents: 'none',
          '& .MuiPopover-paper': {
            pointerEvents: 'auto',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
          },
        }}
        slotProps={{
          paper: {
            onMouseEnter: handlePopoverEnter,
            onMouseLeave: handlePopoverLeave,
          },
        }}
      >
        <Typography>Hover popover content</Typography>
      </Popover>
    </>
  );
};

export default HoverPopover;
```

### 5. Menu Popover

```jsx
import React, { useState } from 'react';
import {
  Popover,
  Button,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import {
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

const MenuPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    console.log(`Action: ${action}`);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Open Menu
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
            minWidth: '200px',
          },
        }}
      >
        <Box sx={{ py: 1 }}>
          <MenuItem
            onClick={() => handleMenuItemClick('profile')}
            sx={{
              px: 2,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(145, 158, 171, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={() => handleMenuItemClick('edit')}
            sx={{
              px: 2,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(145, 158, 171, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>

          <MenuItem
            onClick={() => handleMenuItemClick('settings')}
            sx={{
              px: 2,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(145, 158, 171, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>

          <Divider sx={{ my: 1 }} />

          <MenuItem
            onClick={() => handleMenuItemClick('logout')}
            sx={{
              px: 2,
              py: 1,
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 86, 48, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="small" sx={{ color: 'error.main' }} />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Box>
      </Popover>
    </>
  );
};

export default MenuPopover;
```

### 6. Arrow Popover

```jsx
import React, { useState } from 'react';
import { Popover, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ArrowStyle = styled('span')(({ theme, arrow }) => {
  const SIZE = 12;

  const POSITION = {
    top: {
      top: -SIZE,
      left: '50%',
      transform: 'translateX(-50%) rotate(135deg)',
    },
    bottom: {
      bottom: -SIZE / 2,
      left: '50%',
      transform: 'translateX(-50%) rotate(-45deg)',
    },
    left: {
      left: -SIZE / 2,
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
    },
    right: {
      right: -SIZE / 2,
      top: '50%',
      transform: 'translateY(-50%) rotate(-135deg)',
    },
  };

  return {
    width: SIZE,
    height: SIZE,
    position: 'absolute',
    background: '#FFFFFF',
    boxShadow: '-3px -3px 6px rgba(145, 158, 171, 0.12)',
    ...POSITION[arrow],
    '&::before': {
      content: '""',
      position: 'absolute',
      width: SIZE,
      height: SIZE,
      background: '#FFFFFF',
    },
  };
});

const ArrowPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [arrowPosition, setArrowPosition] = useState('top');

  const handleClick = (event, position) => {
    setAnchorEl(event.currentTarget);
    setArrowPosition(position);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const getOrigins = (position) => {
    const origins = {
      top: {
        anchor: { vertical: 'top', horizontal: 'center' },
        transform: { vertical: 'bottom', horizontal: 'center' },
      },
      bottom: {
        anchor: { vertical: 'bottom', horizontal: 'center' },
        transform: { vertical: 'top', horizontal: 'center' },
      },
      left: {
        anchor: { vertical: 'center', horizontal: 'left' },
        transform: { vertical: 'center', horizontal: 'right' },
      },
      right: {
        anchor: { vertical: 'center', horizontal: 'right' },
        transform: { vertical: 'center', horizontal: 'left' },
      },
    };
    return origins[position];
  };

  const origins = getOrigins(arrowPosition);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
        <Button onClick={(e) => handleClick(e, 'top')}>Arrow Top</Button>
        <Button onClick={(e) => handleClick(e, 'bottom')}>Arrow Bottom</Button>
        <Button onClick={(e) => handleClick(e, 'left')}>Arrow Left</Button>
        <Button onClick={(e) => handleClick(e, 'right')}>Arrow Right</Button>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={origins.anchor}
        transformOrigin={origins.transform}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
            minWidth: '200px',
            position: 'relative',
            overflow: 'visible',
            mt: arrowPosition === 'bottom' ? 1.5 : 0,
            mb: arrowPosition === 'top' ? 1.5 : 0,
            ml: arrowPosition === 'right' ? 1.5 : 0,
            mr: arrowPosition === 'left' ? 1.5 : 0,
          },
        }}
      >
        <ArrowStyle arrow={arrowPosition} />
        <Typography>
          Popover with arrow pointing {arrowPosition}
        </Typography>
      </Popover>
    </Box>
  );
};

export default ArrowPopover;
```

## Reusable Popover Component

```jsx
import React from 'react';
import { Popover as MuiPopover } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Arrow component
const ArrowStyle = styled('span')(({ arrow }) => {
  const SIZE = 12;

  const POSITION = {
    top: {
      top: -SIZE,
      left: '50%',
      transform: 'translateX(-50%) rotate(135deg)',
    },
    bottom: {
      bottom: -SIZE / 2,
      left: '50%',
      transform: 'translateX(-50%) rotate(-45deg)',
    },
    left: {
      left: -SIZE / 2,
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
    },
    right: {
      right: -SIZE / 2,
      top: '50%',
      transform: 'translateY(-50%) rotate(-135deg)',
    },
  };

  return {
    width: SIZE,
    height: SIZE,
    position: 'absolute',
    background: '#FFFFFF',
    boxShadow: '-3px -3px 6px rgba(145, 158, 171, 0.12)',
    zIndex: 1,
    ...POSITION[arrow],
  };
});

const Popover = ({
  open,
  anchorEl,
  onClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
  transformOrigin = { vertical: 'top', horizontal: 'center' },
  arrow = false,
  arrowPosition = 'top',
  children,
  sx,
  ...other
}) => {
  const getMargin = () => {
    if (!arrow) return {};

    const marginValue = 1.5;
    switch (arrowPosition) {
      case 'top':
        return { mb: marginValue };
      case 'bottom':
        return { mt: marginValue };
      case 'left':
        return { mr: marginValue };
      case 'right':
        return { ml: marginValue };
      default:
        return {};
    }
  };

  return (
    <MuiPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      sx={{
        '& .MuiPopover-paper': {
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
          overflow: arrow ? 'visible' : 'auto',
          position: 'relative',
          ...getMargin(),
          ...sx,
        },
      }}
      {...other}
    >
      {arrow && <ArrowStyle arrow={arrowPosition} />}
      {children}
    </MuiPopover>
  );
};

Popover.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  arrow: PropTypes.bool,
  arrowPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default Popover;
```

## Usage Examples

### Example 1: Quick Action Menu
```jsx
import Popover from './Popover';

function QuickActionsButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MoreVertIcon />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        arrow
        arrowPosition="top"
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Popover>
    </>
  );
}
```

### Example 2: User Profile Hover Card
```jsx
import Popover from './Popover';

function UserAvatar({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (e) => {
    timerRef.current = setTimeout(() => {
      setAnchorEl(e.currentTarget);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {user.initials}
      </Avatar>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
        arrow
        arrowPosition="bottom"
      >
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </Popover>
    </>
  );
}
```

## TypeScript Interface

```typescript
import { PopoverProps as MuiPopoverProps } from '@mui/material';

export interface PopoverProps extends Omit<MuiPopoverProps, 'open'> {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  arrow?: boolean;
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  sx?: object;
}
```
