# Menu Component Templates

## 1. Basic Menu

```jsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: '#00A76F',
          '&:hover': {
            backgroundColor: '#007867',
          },
        }}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            mt: 1.5,
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          My Account
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenu;
```

## 2. Icon Menu

```jsx
import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const IconMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="icon-button"
        aria-controls={open ? 'icon-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          color: '#637381',
          '&:hover': {
            backgroundColor: 'rgba(145, 158, 171, 0.08)',
          },
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="icon-menu"
        MenuListProps={{
          'aria-labelledby': 'icon-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            mt: 1.5,
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Profile"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
            <HelpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Help"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#FF5630',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 86, 48, 0.08)',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#FF5630' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#FF5630',
            }}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default IconMenu;
```

## 3. Max Height Menu

```jsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const options = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
  'Option 9',
  'Option 10',
  'Option 11',
  'Option 12',
  'Option 13',
  'Option 14',
  'Option 15',
];

const ITEM_HEIGHT = 48;

const MaxHeightMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="max-height-button"
        aria-controls={open ? 'max-height-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: '#00A76F',
          '&:hover': {
            backgroundColor: '#007867',
          },
        }}
      >
        Open Menu
      </Button>
      <Menu
        id="max-height-menu"
        MenuListProps={{
          'aria-labelledby': 'max-height-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            maxHeight: ITEM_HEIGHT * 6,
            width: '20ch',
          },
          sx: {
            overflow: 'auto',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            mt: 1.5,
            borderRadius: '8px',
            minWidth: 180,
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#F4F6F8',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#C4CDD5',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#919EAB',
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={handleClose}
            sx={{
              fontSize: '14px',
              color: '#212B36',
              height: '48px',
              px: 2,
              '&:hover': {
                backgroundColor: '#F4F6F8',
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MaxHeightMenu;
```

## 4. Selected Menu

```jsx
import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const options = [
  'None',
  'Low Priority',
  'Medium Priority',
  'High Priority',
  'Urgent',
];

const SelectedMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="selected-button"
        aria-haspopup="listbox"
        aria-controls={open ? 'selected-menu' : undefined}
        aria-label="priority selection"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
        variant="outlined"
        sx={{
          color: '#212B36',
          borderColor: '#DFE3E8',
          '&:hover': {
            borderColor: '#C4CDD5',
            backgroundColor: '#F9FAFB',
          },
        }}
      >
        {options[selectedIndex]}
      </Button>
      <Menu
        id="selected-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'selected-button',
          role: 'listbox',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            mt: 1.5,
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{
              fontSize: '14px',
              color: index === selectedIndex ? '#00A76F' : '#212B36',
              height: '48px',
              px: 2,
              backgroundColor: index === selectedIndex ? 'rgba(0, 167, 111, 0.08)' : 'transparent',
              fontWeight: index === selectedIndex ? 600 : 400,
              '&:hover': {
                backgroundColor: index === selectedIndex ? 'rgba(0, 167, 111, 0.16)' : '#F4F6F8',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(0, 167, 111, 0.08)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 167, 111, 0.16)',
                },
              },
            }}
          >
            {index === selectedIndex && (
              <ListItemIcon sx={{ minWidth: 36, color: '#00A76F' }}>
                <CheckIcon fontSize="small" />
              </ListItemIcon>
            )}
            <ListItemText
              inset={index !== selectedIndex}
              primary={option}
              primaryTypographyProps={{
                fontSize: '14px',
                color: index === selectedIndex ? '#00A76F' : '#212B36',
                fontWeight: index === selectedIndex ? 600 : 400,
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SelectedMenu;
```

## 5. Positioned Menu

```jsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Stack } from '@mui/material';

const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [position, setPosition] = useState('bottom-start');
  const open = Boolean(anchorEl);

  const handleClick = (event, pos) => {
    setAnchorEl(event.currentTarget);
    setPosition(pos);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAnchorOrigin = () => {
    switch (position) {
      case 'top-start':
        return { vertical: 'top', horizontal: 'left' };
      case 'top-end':
        return { vertical: 'top', horizontal: 'right' };
      case 'bottom-start':
        return { vertical: 'bottom', horizontal: 'left' };
      case 'bottom-end':
        return { vertical: 'bottom', horizontal: 'right' };
      default:
        return { vertical: 'bottom', horizontal: 'left' };
    }
  };

  const getTransformOrigin = () => {
    switch (position) {
      case 'top-start':
        return { vertical: 'bottom', horizontal: 'left' };
      case 'top-end':
        return { vertical: 'bottom', horizontal: 'right' };
      case 'bottom-start':
        return { vertical: 'top', horizontal: 'left' };
      case 'bottom-end':
        return { vertical: 'top', horizontal: 'right' };
      default:
        return { vertical: 'top', horizontal: 'left' };
    }
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={(e) => handleClick(e, 'top-start')}
          variant="outlined"
          sx={{
            color: '#212B36',
            borderColor: '#DFE3E8',
            '&:hover': {
              borderColor: '#C4CDD5',
              backgroundColor: '#F9FAFB',
            },
          }}
        >
          Top Start
        </Button>
        <Button
          onClick={(e) => handleClick(e, 'top-end')}
          variant="outlined"
          sx={{
            color: '#212B36',
            borderColor: '#DFE3E8',
            '&:hover': {
              borderColor: '#C4CDD5',
              backgroundColor: '#F9FAFB',
            },
          }}
        >
          Top End
        </Button>
        <Button
          onClick={(e) => handleClick(e, 'bottom-start')}
          variant="outlined"
          sx={{
            color: '#212B36',
            borderColor: '#DFE3E8',
            '&:hover': {
              borderColor: '#C4CDD5',
              backgroundColor: '#F9FAFB',
            },
          }}
        >
          Bottom Start
        </Button>
        <Button
          onClick={(e) => handleClick(e, 'bottom-end')}
          variant="outlined"
          sx={{
            color: '#212B36',
            borderColor: '#DFE3E8',
            '&:hover': {
              borderColor: '#C4CDD5',
              backgroundColor: '#F9FAFB',
            },
          }}
        >
          Bottom End
        </Button>
      </Stack>
      <Menu
        id="positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={getAnchorOrigin()}
        transformOrigin={getTransformOrigin()}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            mt: position.startsWith('bottom') ? 1.5 : 0,
            mb: position.startsWith('top') ? 1.5 : 0,
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Option 1
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Option 2
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Option 3
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PositionedMenu;
```

## 6. Context Menu

```jsx
import React, { useState } from 'react';
import { Menu, MenuItem, Paper, Typography } from '@mui/material';

const ContextMenu = () => {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div>
      <Paper
        onContextMenu={handleContextMenu}
        sx={{
          cursor: 'context-menu',
          padding: 4,
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          border: '2px dashed #DFE3E8',
          borderRadius: '8px',
        }}
      >
        <Typography sx={{ color: '#637381', fontSize: '14px' }}>
          Right-click on this area to open context menu
        </Typography>
      </Paper>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Copy
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Cut
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Paste
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#FF5630',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 86, 48, 0.08)',
            },
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ContextMenu;
```

## 7. Nested Menu

```jsx
import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const NestedMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const subMenuOpen = Boolean(subMenuAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="nested-button"
        aria-controls={open ? 'nested-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: '#00A76F',
          '&:hover': {
            backgroundColor: '#007867',
          },
        }}
      >
        Open Menu
      </Button>
      <Menu
        id="nested-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'nested-button',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
            mt: 1.5,
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Copy"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
            <ContentCutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Cut"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#637381' }}>
            <ContentPasteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Paste"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
        </MenuItem>
        <MenuItem
          onMouseEnter={handleSubMenuOpen}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          <ListItemText
            primary="More Options"
            primaryTypographyProps={{
              fontSize: '14px',
              color: '#212B36',
            }}
          />
          <ArrowRightIcon fontSize="small" sx={{ ml: 2, color: '#637381' }} />
        </MenuItem>
      </Menu>
      {/* Sub Menu */}
      <Menu
        anchorEl={subMenuAnchorEl}
        open={subMenuOpen}
        onClose={handleSubMenuClose}
        MenuListProps={{
          onMouseLeave: handleSubMenuClose,
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.24)) drop-shadow(0px 16px 32px rgba(145, 158, 171, 0.16))',
            ml: 0.5,
            borderRadius: '8px',
            minWidth: 180,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Sub Option 1
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Sub Option 2
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: '14px',
            color: '#212B36',
            height: '48px',
            px: 2,
            '&:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        >
          Sub Option 3
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NestedMenu;
```

## Styling Constants

For consistent implementation across all variants, use these theme values:

```jsx
const menuStyles = {
  paper: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
      mt: 1.5,
      borderRadius: '8px',
      minWidth: 180,
    },
  },
  menuItem: {
    fontSize: '14px',
    color: '#212B36',
    height: '48px',
    px: 2,
    '&:hover': {
      backgroundColor: '#F4F6F8',
    },
  },
  selectedMenuItem: {
    fontSize: '14px',
    color: '#00A76F',
    height: '48px',
    px: 2,
    backgroundColor: 'rgba(0, 167, 111, 0.08)',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'rgba(0, 167, 111, 0.16)',
    },
  },
  listItemIcon: {
    minWidth: 36,
    color: '#637381',
  },
  divider: {
    my: 1,
  },
};
```

## Common Props

```jsx
// Standard anchor positioning
anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
transformOrigin={{ horizontal: 'right', vertical: 'top' }}

// Standard PaperProps with Minimal UI shadow
PaperProps={{
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2)) drop-shadow(0px 12px 24px rgba(145, 158, 171, 0.12))',
    mt: 1.5,
    borderRadius: '8px',
    minWidth: 180,
  },
}}

// Standard MenuItem styling
sx={{
  fontSize: '14px',
  color: '#212B36',
  height: '48px',
  px: 2,
  '&:hover': {
    backgroundColor: '#F4F6F8',
  },
}}
```
