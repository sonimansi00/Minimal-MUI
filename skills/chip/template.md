# Chip Component Templates - Minimal UI Style

## 1. Basic Chip

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChip() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Default Chip" />
      <Chip label="Primary Chip" color="primary" />
      <Chip label="Success Chip" color="success" />
    </Stack>
  );
}
```

---

## 2. Color Variants

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ChipColors() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Chip Colors
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
        <Chip label="Default" color="default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Info" color="info" />
        <Chip label="Success" color="success" />
        <Chip label="Warning" color="warning" />
        <Chip label="Error" color="error" />
      </Stack>
    </Box>
  );
}
```

---

## 3. Variant Styles (Filled, Outlined, Soft)

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ChipVariants() {
  const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

  return (
    <Stack spacing={3}>
      {/* Filled Variant */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Filled
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Default" variant="filled" />
          {colors.map((color) => (
            <Chip key={color} label={color} color={color} variant="filled" />
          ))}
        </Stack>
      </Box>

      {/* Outlined Variant */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Outlined
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Default" variant="outlined" />
          {colors.map((color) => (
            <Chip key={color} label={color} color={color} variant="outlined" />
          ))}
        </Stack>
      </Box>

      {/* Soft Variant */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Soft
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Default" variant="soft" />
          {colors.map((color) => (
            <Chip key={color} label={color} color={color} variant="soft" />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 4. Sizes

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ChipSizes() {
  return (
    <Stack spacing={3}>
      {/* Small Size */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Small (Height: 24px)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip label="Small Filled" size="small" color="primary" variant="filled" />
          <Chip label="Small Outlined" size="small" color="primary" variant="outlined" />
          <Chip label="Small Soft" size="small" color="primary" variant="soft" />
        </Stack>
      </Box>

      {/* Medium Size */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Medium (Height: 32px)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip label="Medium Filled" size="medium" color="primary" variant="filled" />
          <Chip label="Medium Outlined" size="medium" color="primary" variant="outlined" />
          <Chip label="Medium Soft" size="medium" color="primary" variant="soft" />
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 5. With Avatar

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ChipWithAvatar() {
  return (
    <Stack spacing={3}>
      {/* Filled with Avatar */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Filled with Avatar
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="John Doe"
            color="primary"
            variant="filled"
          />
          <Chip
            avatar={<Avatar alt="Jane Smith" src="https://i.pravatar.cc/150?img=1" />}
            label="Jane Smith"
            color="secondary"
            variant="filled"
          />
          <Chip
            avatar={<Avatar>A</Avatar>}
            label="Alex Johnson"
            color="info"
            variant="filled"
          />
        </Stack>
      </Box>

      {/* Outlined with Avatar */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Outlined with Avatar
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="John Doe"
            color="primary"
            variant="outlined"
          />
          <Chip
            avatar={<Avatar alt="Jane Smith" src="https://i.pravatar.cc/150?img=2" />}
            label="Jane Smith"
            color="secondary"
            variant="outlined"
          />
        </Stack>
      </Box>

      {/* Soft with Avatar */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Soft with Avatar
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="John Doe"
            color="primary"
            variant="soft"
          />
          <Chip
            avatar={<Avatar alt="Jane Smith" src="https://i.pravatar.cc/150?img=3" />}
            label="Jane Smith"
            color="secondary"
            variant="soft"
          />
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 6. With Icon

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';

export default function ChipWithIcon() {
  return (
    <Stack spacing={3}>
      {/* Filled with Icon */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Filled with Icon
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip icon={<FaceIcon />} label="User" color="default" variant="filled" />
          <Chip icon={<CheckCircleIcon />} label="Success" color="success" variant="filled" />
          <Chip icon={<InfoIcon />} label="Info" color="info" variant="filled" />
          <Chip icon={<WarningIcon />} label="Warning" color="warning" variant="filled" />
          <Chip icon={<ErrorIcon />} label="Error" color="error" variant="filled" />
        </Stack>
      </Box>

      {/* Outlined with Icon */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Outlined with Icon
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip icon={<CheckCircleIcon />} label="Success" color="success" variant="outlined" />
          <Chip icon={<InfoIcon />} label="Info" color="info" variant="outlined" />
          <Chip icon={<WarningIcon />} label="Warning" color="warning" variant="outlined" />
        </Stack>
      </Box>

      {/* Soft with Icon */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Soft with Icon
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip icon={<StarIcon />} label="Featured" color="primary" variant="soft" />
          <Chip icon={<CheckCircleIcon />} label="Verified" color="success" variant="soft" />
          <Chip icon={<InfoIcon />} label="Information" color="info" variant="soft" />
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 7. Clickable

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ClickableChip() {
  const handleClick = (label) => {
    console.log(`Clicked: ${label}`);
    alert(`You clicked: ${label}`);
  };

  return (
    <Stack spacing={3}>
      {/* Clickable Filled */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Clickable Filled
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            label="Click Me"
            color="primary"
            variant="filled"
            clickable
            onClick={() => handleClick('Primary')}
          />
          <Chip
            label="Click Me"
            color="secondary"
            variant="filled"
            clickable
            onClick={() => handleClick('Secondary')}
          />
          <Chip
            label="Click Me"
            color="success"
            variant="filled"
            clickable
            onClick={() => handleClick('Success')}
          />
        </Stack>
      </Box>

      {/* Clickable Outlined */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Clickable Outlined
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            label="Click Me"
            color="primary"
            variant="outlined"
            clickable
            onClick={() => handleClick('Primary Outlined')}
          />
          <Chip
            label="Click Me"
            color="info"
            variant="outlined"
            clickable
            onClick={() => handleClick('Info Outlined')}
          />
        </Stack>
      </Box>

      {/* Clickable Soft */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Clickable Soft (Recommended)
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            label="Technology"
            color="primary"
            variant="soft"
            clickable
            onClick={() => handleClick('Technology')}
          />
          <Chip
            label="Design"
            color="secondary"
            variant="soft"
            clickable
            onClick={() => handleClick('Design')}
          />
          <Chip
            label="Business"
            color="info"
            variant="soft"
            clickable
            onClick={() => handleClick('Business')}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 8. Deletable

```tsx
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DeletableChip() {
  const [filledChips, setFilledChips] = useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'Vue' },
    { key: 2, label: 'Angular' },
  ]);

  const [outlinedChips, setOutlinedChips] = useState([
    { key: 0, label: 'JavaScript' },
    { key: 1, label: 'TypeScript' },
    { key: 2, label: 'Python' },
  ]);

  const [softChips, setSoftChips] = useState([
    { key: 0, label: 'Frontend' },
    { key: 1, label: 'Backend' },
    { key: 2, label: 'DevOps' },
  ]);

  const handleDeleteFilled = (chipToDelete) => () => {
    setFilledChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleDeleteOutlined = (chipToDelete) => () => {
    setOutlinedChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleDeleteSoft = (chipToDelete) => () => {
    setSoftChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Stack spacing={3}>
      {/* Deletable Filled */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Deletable Filled
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {filledChips.map((chip) => (
            <Chip
              key={chip.key}
              label={chip.label}
              color="primary"
              variant="filled"
              onDelete={handleDeleteFilled(chip)}
            />
          ))}
        </Stack>
      </Box>

      {/* Deletable Outlined */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Deletable Outlined
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {outlinedChips.map((chip) => (
            <Chip
              key={chip.key}
              label={chip.label}
              color="info"
              variant="outlined"
              onDelete={handleDeleteOutlined(chip)}
            />
          ))}
        </Stack>
      </Box>

      {/* Deletable Soft (Recommended for Tags) */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Deletable Soft (Recommended for Tags)
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {softChips.map((chip) => (
            <Chip
              key={chip.key}
              label={chip.label}
              color="success"
              variant="soft"
              onDelete={handleDeleteSoft(chip)}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 9. Deletable with Custom Delete Icon

```tsx
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';

export default function DeletableCustomIcon() {
  const [chips, setChips] = useState([
    { key: 0, label: 'Custom Icon 1' },
    { key: 1, label: 'Custom Icon 2' },
    { key: 2, label: 'Custom Icon 3' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom color="text.secondary">
        Custom Delete Icons
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
        {chips.map((chip) => (
          <Chip
            key={chip.key}
            label={chip.label}
            color="error"
            variant="soft"
            onDelete={handleDelete(chip)}
            deleteIcon={<CancelIcon />}
          />
        ))}
      </Stack>
    </Box>
  );
}
```

---

## 10. Clickable AND Deletable

```tsx
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function ClickableAndDeletable() {
  const [users, setUsers] = useState([
    { key: 0, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { key: 1, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    { key: 2, name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
  ]);

  const handleClick = (user) => {
    console.log(`Clicked: ${user.name}`);
    alert(`View profile: ${user.name}`);
  };

  const handleDelete = (userToDelete) => () => {
    setUsers((users) => users.filter((user) => user.key !== userToDelete.key));
  };

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom color="text.secondary">
        Clickable AND Deletable (User Tags)
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
        {users.map((user) => (
          <Chip
            key={user.key}
            avatar={<Avatar alt={user.name} src={user.avatar} />}
            label={user.name}
            color="primary"
            variant="soft"
            clickable
            onClick={() => handleClick(user)}
            onDelete={handleDelete(user)}
          />
        ))}
      </Stack>
    </Box>
  );
}
```

---

## 11. Disabled State

```tsx
import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function DisabledChip() {
  return (
    <Stack spacing={3}>
      {/* Disabled Filled */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Disabled Filled
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Disabled" disabled variant="filled" />
          <Chip label="Disabled" disabled color="primary" variant="filled" />
          <Chip
            label="Disabled"
            disabled
            color="success"
            variant="filled"
            onDelete={() => {}}
          />
        </Stack>
      </Box>

      {/* Disabled Outlined */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Disabled Outlined
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Disabled" disabled variant="outlined" />
          <Chip label="Disabled" disabled color="primary" variant="outlined" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Disabled"
            disabled
            variant="outlined"
          />
        </Stack>
      </Box>

      {/* Disabled Soft */}
      <Box>
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          Disabled Soft
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Disabled" disabled variant="soft" />
          <Chip label="Disabled" disabled color="primary" variant="soft" />
          <Chip
            label="Disabled"
            disabled
            color="info"
            variant="soft"
            onDelete={() => {}}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## 12. Complete Demo - All Variants

```tsx
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FaceIcon from '@mui/icons-material/Face';

export default function AllChipVariants() {
  const [deletableChips, setDeletableChips] = useState([
    { key: 0, label: 'Tag 1' },
    { key: 1, label: 'Tag 2' },
    { key: 2, label: 'Tag 3' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setDeletableChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClick = (label) => {
    console.log(`Clicked: ${label}`);
  };

  const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

  return (
    <Stack spacing={4} sx={{ p: 3 }}>
      <Typography variant="h4">MUI Chip Components - Minimal UI</Typography>

      <Divider />

      {/* 1. Basic */}
      <Box>
        <Typography variant="h6" gutterBottom>
          1. Basic Chips
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Default" />
          <Chip label="Primary" color="primary" />
          <Chip label="Success" color="success" />
        </Stack>
      </Box>

      <Divider />

      {/* 2. Colors */}
      <Box>
        <Typography variant="h6" gutterBottom>
          2. Color Variants
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Default" color="default" />
          {colors.map((color) => (
            <Chip key={color} label={color} color={color} />
          ))}
        </Stack>
      </Box>

      <Divider />

      {/* 3. Variants (Filled, Outlined, Soft) */}
      <Box>
        <Typography variant="h6" gutterBottom>
          3. Style Variants
        </Typography>
        <Stack spacing={2}>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Filled
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {colors.map((color) => (
                <Chip key={color} label={color} color={color} variant="filled" />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Outlined
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {colors.map((color) => (
                <Chip key={color} label={color} color={color} variant="outlined" />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Soft
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {colors.map((color) => (
                <Chip key={color} label={color} color={color} variant="soft" />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Divider />

      {/* 4. Sizes */}
      <Box>
        <Typography variant="h6" gutterBottom>
          4. Sizes
        </Typography>
        <Stack spacing={2}>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Small (24px)
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label="Small" size="small" color="primary" variant="filled" />
              <Chip label="Small" size="small" color="primary" variant="outlined" />
              <Chip label="Small" size="small" color="primary" variant="soft" />
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Medium (32px)
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label="Medium" size="medium" color="primary" variant="filled" />
              <Chip label="Medium" size="medium" color="primary" variant="outlined" />
              <Chip label="Medium" size="medium" color="primary" variant="soft" />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Divider />

      {/* 5. With Avatar */}
      <Box>
        <Typography variant="h6" gutterBottom>
          5. With Avatar
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="John Doe"
            color="primary"
            variant="filled"
          />
          <Chip
            avatar={<Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />}
            label="Jane Smith"
            color="secondary"
            variant="outlined"
          />
          <Chip
            avatar={<Avatar>A</Avatar>}
            label="Alex Johnson"
            color="info"
            variant="soft"
          />
        </Stack>
      </Box>

      <Divider />

      {/* 6. With Icon */}
      <Box>
        <Typography variant="h6" gutterBottom>
          6. With Icon
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip icon={<FaceIcon />} label="User" color="default" variant="filled" />
          <Chip
            icon={<CheckCircleIcon />}
            label="Verified"
            color="success"
            variant="outlined"
          />
          <Chip
            icon={<CheckCircleIcon />}
            label="Active"
            color="primary"
            variant="soft"
          />
        </Stack>
      </Box>

      <Divider />

      {/* 7. Clickable */}
      <Box>
        <Typography variant="h6" gutterBottom>
          7. Clickable
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip
            label="Click Me"
            color="primary"
            variant="filled"
            clickable
            onClick={() => handleClick('Filled')}
          />
          <Chip
            label="Click Me"
            color="secondary"
            variant="outlined"
            clickable
            onClick={() => handleClick('Outlined')}
          />
          <Chip
            label="Click Me"
            color="info"
            variant="soft"
            clickable
            onClick={() => handleClick('Soft')}
          />
        </Stack>
      </Box>

      <Divider />

      {/* 8. Deletable */}
      <Box>
        <Typography variant="h6" gutterBottom>
          8. Deletable (Try deleting these)
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {deletableChips.map((chip) => (
            <Chip
              key={chip.key}
              label={chip.label}
              color="primary"
              variant="soft"
              onDelete={handleDelete(chip)}
            />
          ))}
        </Stack>
      </Box>

      <Divider />

      {/* Disabled */}
      <Box>
        <Typography variant="h6" gutterBottom>
          9. Disabled State
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          <Chip label="Disabled" disabled variant="filled" />
          <Chip label="Disabled" disabled color="primary" variant="outlined" />
          <Chip label="Disabled" disabled color="success" variant="soft" />
          <Chip
            label="Disabled"
            disabled
            color="error"
            variant="soft"
            onDelete={() => {}}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
```

---

## Usage Examples

### 1. Status Tags
```tsx
<Chip label="Active" color="success" variant="soft" size="small" />
<Chip label="Pending" color="warning" variant="soft" size="small" />
<Chip label="Inactive" color="error" variant="soft" size="small" />
```

### 2. Category Filters (Deletable)
```tsx
const [filters, setFilters] = useState(['React', 'TypeScript', 'MUI']);

<Stack direction="row" spacing={1}>
  {filters.map((filter) => (
    <Chip
      key={filter}
      label={filter}
      variant="soft"
      color="primary"
      size="small"
      onDelete={() => setFilters(filters.filter(f => f !== filter))}
    />
  ))}
</Stack>
```

### 3. User Tags with Avatar
```tsx
<Chip
  avatar={<Avatar src="/user.jpg" />}
  label="John Doe"
  variant="outlined"
  color="primary"
  clickable
  onClick={() => navigateToProfile('john')}
  onDelete={() => removeUser('john')}
/>
```

### 4. Icon-based Status
```tsx
<Chip
  icon={<CheckCircleIcon />}
  label="Verified"
  color="success"
  variant="soft"
  size="small"
/>
```

---

## Styling Customization

### Custom Colors (Using sx prop)
```tsx
<Chip
  label="Custom"
  sx={{
    bgcolor: 'rgba(255, 193, 7, 0.16)',
    color: '#ff8f00',
    '&:hover': {
      bgcolor: 'rgba(255, 193, 7, 0.32)',
    },
  }}
/>
```

### Custom Size
```tsx
<Chip
  label="Extra Small"
  size="small"
  sx={{
    height: '20px',
    fontSize: '11px',
    '& .MuiChip-label': {
      px: 1,
    },
  }}
/>
```

---

## Accessibility

All chips include proper ARIA attributes:

```tsx
<Chip
  label="Accessible Chip"
  onClick={handleClick}
  aria-label="Click to filter by category"
  role="button"
  tabIndex={0}
/>
```

---

## Best Practices

1. **Use soft variant** for modern, clean look (recommended)
2. **Use filled variant** for high emphasis
3. **Use outlined variant** for minimal design
4. **Keep labels concise** (1-3 words max)
5. **Use colors semantically** (success = positive, error = negative)
6. **Size small** for dense layouts like tables
7. **Size medium** for standard UI components
8. **Provide feedback** on click/delete actions
9. **Group related chips** with Stack component
10. **Test touch targets** on mobile (minimum 24px)
