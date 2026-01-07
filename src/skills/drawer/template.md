# Drawer Component Templates

Complete React implementation templates for all MUI Drawer variants following Minimals design system.

## 1. Temporary Drawer (All Anchors)

### Left Anchor (Most Common)

```jsx
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} color="inherit">
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.24)',
          },
        }}
        ModalProps={{
          slotProps: {
            backdrop: {
              sx: {
                bgcolor: 'rgba(22, 28, 36, 0.8)',
                backdropFilter: 'blur(6px)',
              },
            },
          },
        }}
      >
        <Box sx={{ width: 280 }} role="presentation">
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 3,
              borderBottom: 1,
              borderColor: 'rgba(145, 158, 171, 0.24)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ px: 2, py: 3 }}>
            <List sx={{ p: 0 }}>
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={toggleDrawer(false)}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 40,
                        color: 'text.secondary',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: 'text.secondary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
```

### Right Anchor (Filter/Settings Panel)

```jsx
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from '@mui/material';
import { FilterList as FilterIcon, Close as CloseIcon } from '@mui/icons-material';

export default function RightTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleReset = () => {
    setFilters({ option1: false, option2: false, option3: false });
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<FilterIcon />}
        onClick={toggleDrawer(true)}
      >
        Filters
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.24)',
          },
        }}
        ModalProps={{
          slotProps: {
            backdrop: {
              sx: {
                bgcolor: 'rgba(22, 28, 36, 0.8)',
                backdropFilter: 'blur(6px)',
              },
            },
          },
        }}
      >
        <Box sx={{ width: 320 }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 3,
              borderBottom: 1,
              borderColor: 'rgba(145, 158, 171, 0.24)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Filters
            </Typography>
            <IconButton onClick={toggleDrawer(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ px: 2, py: 3 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.option1}
                    onChange={handleFilterChange}
                    name="option1"
                  />
                }
                label="Option 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.option2}
                    onChange={handleFilterChange}
                    name="option2"
                  />
                }
                label="Option 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.option3}
                    onChange={handleFilterChange}
                    name="option3"
                  />
                }
                label="Option 3"
              />
            </FormGroup>
          </Box>

          <Divider />

          {/* Footer Actions */}
          <Box sx={{ px: 2, py: 2, display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={toggleDrawer(false)}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
```

### Bottom Anchor (Mobile Sheet)

```jsx
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

export default function BottomTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open Bottom Sheet</Button>

      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            bgcolor: 'background.paper',
            boxShadow: '0px -4px 16px 0px rgba(145, 158, 171, 0.24)',
          },
        }}
        ModalProps={{
          slotProps: {
            backdrop: {
              sx: {
                bgcolor: 'rgba(22, 28, 36, 0.8)',
                backdropFilter: 'blur(6px)',
              },
            },
          },
        }}
      >
        <Box sx={{ width: 'auto', px: 2, py: 3 }}>
          {/* Drag Handle */}
          <Box
            sx={{
              width: 32,
              height: 4,
              bgcolor: 'grey.300',
              borderRadius: 2,
              mx: 'auto',
              mb: 2,
            }}
          />

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, px: 2 }}>
            Quick Actions
          </Typography>

          <List sx={{ p: 0 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={toggleDrawer(false)}
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
```

## 2. Persistent Drawer

```jsx
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

export default function PersistentDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: (theme) =>
            theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: (theme) =>
              theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent Drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'rgba(145, 158, 171, 0.24)',
            transition: (theme) =>
              theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          },
        }}
      >
        <Toolbar /> {/* Spacer for app bar */}

        <Box sx={{ overflow: 'auto', px: 2, py: 3 }}>
          <List sx={{ p: 0 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                    '&.Mui-selected': {
                      bgcolor: (theme) =>
                        `${theme.palette.primary.main}14`,
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: (theme) =>
                          `${theme.palette.primary.main}1F`,
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: 0,
          ...(open && {
            transition: (theme) =>
              theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginLeft: 0,
          }),
        }}
      >
        <Toolbar /> {/* Spacer for app bar */}
        <Typography paragraph>
          Main content area that adjusts when drawer opens/closes.
        </Typography>
      </Box>
    </Box>
  );
}
```

## 3. Permanent Drawer

```jsx
import React from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Folder as FolderIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

export default function PermanentDrawer() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const menuSections = [
    {
      title: 'GENERAL',
      items: [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Analytics', icon: <AnalyticsIcon /> },
      ],
    },
    {
      title: 'MANAGEMENT',
      items: [
        { text: 'Projects', icon: <FolderIcon /> },
        { text: 'Profile', icon: <PersonIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> },
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent Drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'rgba(145, 158, 171, 0.24)',
          },
        }}
      >
        {/* Header with User Info */}
        <Box
          sx={{
            px: 2,
            py: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderBottom: 1,
            borderColor: 'rgba(145, 158, 171, 0.24)',
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
            }}
          >
            U
          </Avatar>
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }} noWrap>
              User Name
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              noWrap
              sx={{ fontSize: 12 }}
            >
              user@example.com
            </Typography>
          </Box>
        </Box>

        {/* Navigation Sections */}
        <Box sx={{ overflow: 'auto', px: 2, py: 3 }}>
          {menuSections.map((section, sectionIndex) => (
            <Box key={sectionIndex} sx={{ mb: 4 }}>
              <Typography
                variant="caption"
                sx={{
                  px: 2,
                  mb: 1,
                  display: 'block',
                  color: 'text.disabled',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: 0.5,
                }}
              >
                {section.title}
              </Typography>
              <List sx={{ p: 0 }}>
                {section.items.map((item, itemIndex) => {
                  const globalIndex =
                    sectionIndex * menuSections[0].items.length + itemIndex;
                  return (
                    <ListItem key={itemIndex} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        selected={selectedIndex === globalIndex}
                        onClick={(event) =>
                          handleListItemClick(event, globalIndex)
                        }
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          '&:hover': {
                            bgcolor: 'action.hover',
                          },
                          '&.Mui-selected': {
                            bgcolor: (theme) =>
                              `${theme.palette.primary.main}14`,
                            color: 'primary.main',
                            fontWeight: 600,
                            '&:hover': {
                              bgcolor: (theme) =>
                                `${theme.palette.primary.main}1F`,
                            },
                            '& .MuiListItemIcon-root': {
                              color: 'primary.main',
                            },
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 40,
                            color: 'text.secondary',
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          ))}
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar /> {/* Spacer for app bar */}
        <Typography paragraph>
          Main content area with permanent drawer always visible.
        </Typography>
      </Box>
    </Box>
  );
}
```

## 4. Mini Variant Drawer

```jsx
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Folder as FolderIcon,
} from '@mui/icons-material';

const drawerWidth = 280;
const miniDrawerWidth = 56;

export default function MiniVariantDrawer() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Analytics', icon: <AnalyticsIcon /> },
    { text: 'Projects', icon: <FolderIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: (theme) =>
            theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini Variant Drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Mini Variant Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : miniDrawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : miniDrawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'rgba(145, 158, 171, 0.24)',
            overflowX: 'hidden',
            transition: (theme) =>
              theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          },
        }}
      >
        <Toolbar /> {/* Spacer for app bar */}

        <Box sx={{ overflow: 'auto', px: open ? 2 : 0.5, py: 3 }}>
          <List sx={{ p: 0 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                <Tooltip
                  title={!open ? item.text : ''}
                  placement="right"
                  arrow
                >
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: open ? 2 : 1.5,
                      py: 1,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                      '&.Mui-selected': {
                        bgcolor: (theme) =>
                          `${theme.palette.primary.main}14`,
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: (theme) =>
                            `${theme.palette.primary.main}1F`,
                        },
                        '& .MuiListItemIcon-root': {
                          color: 'primary.main',
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : 'auto',
                        justifyContent: 'center',
                        color: 'text.secondary',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                      sx={{
                        opacity: open ? 1 : 0,
                        display: open ? 'block' : 'none',
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar /> {/* Spacer for app bar */}
        <Typography paragraph>
          Main content area with mini variant drawer that expands on toggle.
        </Typography>
      </Box>
    </Box>
  );
}
```

## 5. Responsive Drawer (Temporary on Mobile, Permanent on Desktop)

```jsx
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

export default function ResponsiveDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  const drawerContent = (
    <Box>
      <Toolbar /> {/* Spacer for app bar */}

      <Box sx={{ overflow: 'auto', px: 2, py: 3 }}>
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={isMobile ? handleDrawerToggle : undefined}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive Drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (Temporary) */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: 'background.paper',
              boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.24)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Desktop Drawer (Permanent) */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: 'background.paper',
              borderRight: 1,
              borderColor: 'rgba(145, 158, 171, 0.24)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* Spacer for app bar */}
        <Typography paragraph>
          Responsive layout: temporary drawer on mobile, permanent on desktop.
        </Typography>
      </Box>
    </Box>
  );
}
```

## Implementation Notes

### Key Points for All Variants

1. **MUI v5 Syntax**: All examples use current MUI v5 API with `sx` prop for styling
2. **Theme Integration**: Styles reference theme values for consistency
3. **Accessibility**: Proper ARIA labels and keyboard navigation support
4. **Responsive**: Includes breakpoint-aware implementations
5. **State Management**: Uses React hooks (useState) for controlled components

### Customization Tips

1. **Width**: Adjust `drawerWidth` constant or inline width values
2. **Colors**: Modify bgcolor, color, and borderColor in sx props
3. **Icons**: Replace icon imports with your preferred icon library
4. **Content**: Swap List components with custom navigation structure
5. **Animations**: Adjust transition durations in theme.transitions

### Common Integration Patterns

1. **With React Router**: Add routing logic to ListItemButton onClick handlers
2. **With Redux**: Connect drawer open state to Redux store
3. **With Auth**: Conditionally render menu items based on user permissions
4. **With Dark Mode**: Theme automatically handles light/dark color schemes
5. **With Nested Items**: Add Collapse component for expandable menu sections

### Performance Optimization

1. Use `keepMounted: true` for temporary drawers on mobile for better performance
2. Memoize drawer content with `React.memo` if content is expensive to render
3. Use `useCallback` for event handlers passed to child components
4. Consider lazy loading drawer content for large navigation structures
