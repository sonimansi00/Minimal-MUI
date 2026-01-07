# List Component Templates

## 1. Basic List

```jsx
import React from 'react';
import { List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const BasicList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <ListItem sx={{ height: '56px' }}>
              <ListItemText primary={item} />
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default BasicList;
```

## 2. Dense List

```jsx
import React from 'react';
import { List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const DenseList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List dense>
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <ListItem sx={{ height: '40px', py: 0.5 }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ fontSize: '14px' }}
              />
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default DenseList;
```

## 3. List with Avatar

```jsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const AvatarList = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', avatar: '/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: '/avatar2.jpg' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', avatar: '/avatar3.jpg' },
  ];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {users.map((user, index) => (
          <React.Fragment key={user.id}>
            <ListItem sx={{ height: '56px' }}>
              <ListItemAvatar>
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ width: 40, height: 40 }}
                >
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={user.email}
                primaryTypographyProps={{
                  fontSize: '14px',
                  color: 'rgb(33, 43, 54)'
                }}
                secondaryTypographyProps={{
                  fontSize: '12px',
                  color: 'rgb(99, 115, 129)'
                }}
              />
            </ListItem>
            {index < users.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default AvatarList;
```

## 4. List with Icon

```jsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Paper } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const IconList = () => {
  const items = [
    { id: 1, text: 'Inbox', icon: <InboxIcon />, count: 5 },
    { id: 2, text: 'Drafts', icon: <DraftsIcon />, count: 2 },
    { id: 3, text: 'Sent', icon: <SendIcon />, count: 0 },
    { id: 4, text: 'Trash', icon: <DeleteIcon />, count: 3 },
  ];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem sx={{ height: '56px' }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                secondary={item.count > 0 ? `${item.count} items` : null}
                primaryTypographyProps={{ fontSize: '14px' }}
                secondaryTypographyProps={{ fontSize: '12px' }}
              />
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default IconList;
```

## 5. Nested List

```jsx
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Collapse,
  Divider,
  Paper
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const NestedList = () => {
  const [openItems, setOpenItems] = useState({});

  const handleClick = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        <ListItemButton onClick={() => handleClick('inbox')} sx={{ height: '56px' }}>
          <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary="Inbox"
            primaryTypographyProps={{ fontSize: '14px' }}
          />
          {openItems['inbox'] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openItems['inbox']} timeout={300} unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, height: '56px' }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primary="Starred"
                primaryTypographyProps={{ fontSize: '14px' }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, height: '56px' }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primary="Important"
                primaryTypographyProps={{ fontSize: '14px' }}
              />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => handleClick('drafts')} sx={{ height: '56px' }}>
          <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary="Drafts"
            primaryTypographyProps={{ fontSize: '14px' }}
          />
          {openItems['drafts'] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openItems['drafts']} timeout={300} unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, height: '56px' }}>
              <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                primary="All Drafts"
                primaryTypographyProps={{ fontSize: '14px' }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
};

export default NestedList;
```

## 6. Interactive List (Clickable)

```jsx
import React from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon, Divider, Paper } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

const InteractiveList = () => {
  const items = [
    { id: 1, name: 'Documents', icon: <FolderIcon /> },
    { id: 2, name: 'Photos', icon: <FolderIcon /> },
    { id: 3, name: 'Videos', icon: <FolderIcon /> },
    { id: 4, name: 'Music', icon: <FolderIcon /> },
  ];

  const handleClick = (item) => {
    console.log('Clicked:', item.name);
  };

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItemButton
              onClick={() => handleClick(item)}
              sx={{
                height: '56px',
                '&:hover': {
                  backgroundColor: 'rgba(145, 158, 171, 0.08)'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'rgb(99, 115, 129)' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: '14px',
                  color: 'rgb(33, 43, 54)'
                }}
              />
            </ListItemButton>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default InteractiveList;
```

## 7. Switch List

```jsx
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Switch,
  Divider,
  Paper
} from '@mui/material';

const SwitchList = () => {
  const [settings, setSettings] = useState({
    wifi: true,
    bluetooth: false,
    notifications: true,
    location: false,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const items = [
    { id: 'wifi', primary: 'Wi-Fi', secondary: 'Connect to wireless networks' },
    { id: 'bluetooth', primary: 'Bluetooth', secondary: 'Connect to devices' },
    { id: 'notifications', primary: 'Notifications', secondary: 'Show alerts and updates' },
    { id: 'location', primary: 'Location', secondary: 'Use GPS for location services' },
  ];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem
              sx={{ height: '72px' }}
              secondaryAction={
                <Switch
                  edge="end"
                  checked={settings[item.id]}
                  onChange={() => handleToggle(item.id)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: 'rgb(0, 184, 217)',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: 'rgba(0, 184, 217, 0.48)',
                    },
                  }}
                />
              }
            >
              <ListItemText
                primary={item.primary}
                secondary={item.secondary}
                primaryTypographyProps={{
                  fontSize: '14px',
                  color: 'rgb(33, 43, 54)'
                }}
                secondaryTypographyProps={{
                  fontSize: '12px',
                  color: 'rgb(99, 115, 129)'
                }}
              />
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default SwitchList;
```

## 8. Checkbox List

```jsx
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  Paper
} from '@mui/material';

const CheckboxList = () => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const items = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              disablePadding
              sx={{ height: '56px' }}
            >
              <ListItemButton
                role={undefined}
                onClick={() => handleToggle(index)}
                dense
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(145, 158, 171, 0.08)'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    sx={{
                      color: 'rgb(99, 115, 129)',
                      '&.Mui-checked': {
                        color: 'rgb(0, 184, 217)',
                      },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: '14px',
                    color: 'rgb(33, 43, 54)'
                  }}
                />
              </ListItemButton>
            </ListItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default CheckboxList;
```

## 9. Selected Item List

```jsx
import React, { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

const SelectedItemList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const items = [
    { id: 0, text: 'Inbox', icon: <InboxIcon /> },
    { id: 1, text: 'Drafts', icon: <DraftsIcon /> },
    { id: 2, text: 'Sent', icon: <SendIcon /> },
  ];

  return (
    <Paper sx={{ width: '100%', maxWidth: 360 }}>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItemButton
              selected={selectedIndex === item.id}
              onClick={() => handleListItemClick(item.id)}
              sx={{
                height: '56px',
                '&:hover': {
                  backgroundColor: 'rgba(145, 158, 171, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 184, 217, 0.08)',
                  borderLeft: '2px solid rgb(0, 184, 217)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 184, 217, 0.16)',
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: selectedIndex === item.id ? 'rgb(0, 184, 217)' : 'rgb(99, 115, 129)'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '14px',
                  color: selectedIndex === item.id ? 'rgb(0, 184, 217)' : 'rgb(33, 43, 54)'
                }}
              />
            </ListItemButton>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default SelectedItemList;
```

## Styling Constants

For consistent implementation across all variants, use these theme values:

```jsx
const theme = {
  colors: {
    text: {
      primary: 'rgb(33, 43, 54)',
      secondary: 'rgb(99, 115, 129)',
    },
    background: {
      hover: 'rgba(145, 158, 171, 0.08)',
      selected: 'rgba(0, 184, 217, 0.08)',
      active: 'rgba(0, 184, 217, 0.16)',
    },
    primary: 'rgb(0, 184, 217)',
    divider: 'rgba(145, 158, 171, 0.2)',
  },
  spacing: {
    standard: {
      height: '56px',
      padding: '8px 16px',
    },
    dense: {
      height: '40px',
      padding: '4px 16px',
    },
  },
  typography: {
    primary: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.57143,
    },
    secondary: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
```
