# Badge Component Templates - Minimal UI Style

## 1. Basic Badge

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function BasicBadge() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={4} color="error">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={100} color="primary">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
```

## 2. Color Variants

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function ColorBadges() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={4} color="error">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={4} color="warning">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={4} color="info">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
```

## 3. Max Count Badge

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function MaxBadge() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={99} color="error">
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={100} color="error" max={99}>
        <MailIcon color="action" />
      </Badge>

      <Badge badgeContent={1000} color="error" max={999}>
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
```

## 4. Dot Badge

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function DotBadge() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge variant="dot" color="primary">
        <MailIcon color="action" />
      </Badge>

      <Badge variant="dot" color="secondary">
        <MailIcon color="action" />
      </Badge>

      <Badge variant="dot" color="error">
        <MailIcon color="action" />
      </Badge>

      <Badge variant="dot" color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
```

## 5. Position Variants

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PositionBadge() {
  return (
    <Stack direction="row" spacing={6}>
      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          Top Right
        </Typography>
        <Badge
          badgeContent={4}
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MailIcon color="action" />
        </Badge>
      </Box>

      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          Top Left
        </Typography>
        <Badge
          badgeContent={4}
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MailIcon color="action" />
        </Badge>
      </Box>

      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          Bottom Right
        </Typography>
        <Badge
          badgeContent={4}
          color="error"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <MailIcon color="action" />
        </Badge>
      </Box>

      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          Bottom Left
        </Typography>
        <Badge
          badgeContent={4}
          color="error"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MailIcon color="action" />
        </Badge>
      </Box>
    </Stack>
  );
}
```

## 6. Badge with Avatar

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function BadgeWithAvatar() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge
        badgeContent={4}
        color="error"
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />
      </Badge>

      <Badge
        variant="dot"
        color="success"
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiBadge-badge': {
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '2px solid #FFFFFF',
          },
        }}
      >
        <Avatar alt="User" src="https://i.pravatar.cc/150?img=2" />
      </Badge>

      <Badge
        badgeContent="NEW"
        color="primary"
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '9px',
            height: 18,
            minWidth: 18,
            padding: '0 4px',
          },
        }}
      >
        <Avatar alt="User" src="https://i.pravatar.cc/150?img=3" />
      </Badge>
    </Stack>
  );
}
```

## 7. Badge with Icon Button

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function BadgeWithIcon() {
  return (
    <Stack direction="row" spacing={4}>
      <IconButton aria-label="cart">
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <IconButton aria-label="notifications">
        <Badge badgeContent={12} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <IconButton aria-label="mail">
        <Badge badgeContent={100} color="info" max={99}>
          <MailIcon />
        </Badge>
      </IconButton>

      <IconButton aria-label="messages">
        <Badge variant="dot" color="success">
          <MailIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
}
```

## 8. Invisible/Visible Toggle Badge

```tsx
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

export default function ToggleBadge() {
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Stack spacing={3} alignItems="center">
      <Badge badgeContent={4} color="error" invisible={invisible}>
        <MailIcon color="action" />
      </Badge>

      <ButtonGroup size="small">
        <Button onClick={handleBadgeVisibility}>
          {invisible ? 'Show Badge' : 'Hide Badge'}
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
```

## 9. Custom Styled Badge (Minimal UI)

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// Primary Badge
const StyledBadgePrimary = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#00A76F',
    color: '#FFFFFF',
    borderRadius: '10px',
    fontSize: '10px',
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    padding: '0 6px',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

// Error Badge
const StyledBadgeError = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#FF5630',
    color: '#FFFFFF',
    borderRadius: '10px',
    fontSize: '10px',
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    padding: '0 6px',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

// Warning Badge
const StyledBadgeWarning = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#FFAB00',
    color: '#212B36',
    borderRadius: '10px',
    fontSize: '10px',
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    padding: '0 6px',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

// Success Dot Badge (Online Status)
const StyledBadgeOnline = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#22C55E',
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: '2px solid #FFFFFF',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

// Info Badge
const StyledBadgeInfo = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#00B8D9',
    color: '#FFFFFF',
    borderRadius: '10px',
    fontSize: '10px',
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    padding: '0 6px',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

export default function CustomStyledBadge() {
  return (
    <Stack direction="row" spacing={4}>
      <StyledBadgePrimary badgeContent={4}>
        <MailIcon color="action" />
      </StyledBadgePrimary>

      <StyledBadgeError badgeContent={99} max={99}>
        <MailIcon color="action" />
      </StyledBadgeError>

      <StyledBadgeWarning badgeContent={12}>
        <MailIcon color="action" />
      </StyledBadgeWarning>

      <StyledBadgeInfo badgeContent={7}>
        <MailIcon color="action" />
      </StyledBadgeInfo>

      <StyledBadgeOnline
        variant="dot"
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />
      </StyledBadgeOnline>
    </Stack>
  );
}
```

## 10. Show Zero Badge

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ShowZeroBadge() {
  return (
    <Stack direction="row" spacing={6}>
      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          showZero={false}
        </Typography>
        <Badge badgeContent={0} color="error" showZero={false}>
          <MailIcon color="action" />
        </Badge>
      </Box>

      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          showZero={true}
        </Typography>
        <Badge badgeContent={0} color="error" showZero>
          <MailIcon color="action" />
        </Badge>
      </Box>
    </Stack>
  );
}
```

## 11. Badge with Text Content

```tsx
import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function TextBadge() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge
        badgeContent="NEW"
        color="primary"
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '9px',
            height: 18,
            minWidth: 18,
            padding: '0 4px',
          },
        }}
      >
        <Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />
      </Badge>

      <Badge
        badgeContent="HOT"
        color="error"
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '9px',
            height: 18,
            minWidth: 18,
            padding: '0 4px',
          },
        }}
      >
        <Avatar alt="Product" src="https://i.pravatar.cc/150?img=2" />
      </Badge>

      <Badge
        badgeContent="SALE"
        color="warning"
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '8px',
            height: 18,
            minWidth: 18,
            padding: '0 4px',
          },
        }}
      >
        <Avatar alt="Item" src="https://i.pravatar.cc/150?img=3" />
      </Badge>
    </Stack>
  );
}
```

## Complete Demo

```tsx
import React, { useState } from 'react';
import {
  Badge,
  Avatar,
  IconButton,
  Button,
  Stack,
  Container,
  Typography,
  Divider,
  Box,
  Paper,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

// Custom Styled Badges
const StyledBadgePrimary = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#00A76F',
    color: '#FFFFFF',
    borderRadius: '10px',
    fontSize: '10px',
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    padding: '0 6px',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

const StyledBadgeError = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#FF5630',
    color: '#FFFFFF',
    borderRadius: '10px',
    fontSize: '10px',
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    padding: '0 6px',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

const StyledBadgeOnline = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#22C55E',
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: '2px solid #FFFFFF',
    boxShadow: '0 0 0 2px #FFFFFF',
  },
}));

export default function AllBadgeVariants() {
  const [invisible, setInvisible] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Badge Variants
      </Typography>

      <Stack spacing={5}>
        {/* Basic Badge */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            1. Basic Badge
          </Typography>
          <Stack direction="row" spacing={4}>
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={100} color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={12} color="success">
              <MailIcon color="action" />
            </Badge>
          </Stack>
        </Paper>

        <Divider />

        {/* Color Variants */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            2. Color Variants
          </Typography>
          <Stack direction="row" spacing={4}>
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="warning">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="info">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="success">
              <MailIcon color="action" />
            </Badge>
          </Stack>
        </Paper>

        <Divider />

        {/* Max Count */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            3. Max Count
          </Typography>
          <Stack direction="row" spacing={4}>
            <Badge badgeContent={99} color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={100} color="error" max={99}>
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={1000} color="error" max={999}>
              <MailIcon color="action" />
            </Badge>
          </Stack>
        </Paper>

        <Divider />

        {/* Dot Badge */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            4. Dot Badge
          </Typography>
          <Stack direction="row" spacing={4}>
            <Badge variant="dot" color="primary">
              <MailIcon color="action" />
            </Badge>
            <Badge variant="dot" color="secondary">
              <MailIcon color="action" />
            </Badge>
            <Badge variant="dot" color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge variant="dot" color="success">
              <MailIcon color="action" />
            </Badge>
          </Stack>
        </Paper>

        <Divider />

        {/* Position Variants */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            5. Position Variants
          </Typography>
          <Stack direction="row" spacing={6}>
            <Box>
              <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                Top Right
              </Typography>
              <Badge
                badgeContent={4}
                color="error"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MailIcon color="action" />
              </Badge>
            </Box>
            <Box>
              <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                Top Left
              </Typography>
              <Badge
                badgeContent={4}
                color="error"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MailIcon color="action" />
              </Badge>
            </Box>
            <Box>
              <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                Bottom Right
              </Typography>
              <Badge
                badgeContent={4}
                color="error"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <MailIcon color="action" />
              </Badge>
            </Box>
            <Box>
              <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                Bottom Left
              </Typography>
              <Badge
                badgeContent={4}
                color="error"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <MailIcon color="action" />
              </Badge>
            </Box>
          </Stack>
        </Paper>

        <Divider />

        {/* Badge with Avatar */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            6. Badge with Avatar
          </Typography>
          <Stack direction="row" spacing={4}>
            <Badge
              badgeContent={4}
              color="error"
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />
            </Badge>
            <StyledBadgeOnline
              variant="dot"
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar alt="User" src="https://i.pravatar.cc/150?img=2" />
            </StyledBadgeOnline>
            <Badge
              badgeContent="NEW"
              color="primary"
              overlap="circular"
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '9px',
                  height: 18,
                  minWidth: 18,
                  padding: '0 4px',
                },
              }}
            >
              <Avatar alt="User" src="https://i.pravatar.cc/150?img=3" />
            </Badge>
          </Stack>
        </Paper>

        <Divider />

        {/* Badge with Icon Button */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            7. Badge with Icon Button
          </Typography>
          <Stack direction="row" spacing={4}>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="notifications">
              <Badge badgeContent={12} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="mail">
              <Badge badgeContent={100} color="info" max={99}>
                <MailIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Paper>

        <Divider />

        {/* Invisible/Visible Toggle */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            8. Invisible/Visible Toggle
          </Typography>
          <Stack spacing={3} alignItems="flex-start">
            <Badge badgeContent={4} color="error" invisible={invisible}>
              <MailIcon color="action" />
            </Badge>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setInvisible(!invisible)}
            >
              {invisible ? 'Show Badge' : 'Hide Badge'}
            </Button>
          </Stack>
        </Paper>

        <Divider />

        {/* Custom Styled (Minimal UI) */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            9. Custom Styled (Minimal UI)
          </Typography>
          <Stack direction="row" spacing={4}>
            <StyledBadgePrimary badgeContent={4}>
              <MailIcon color="action" />
            </StyledBadgePrimary>
            <StyledBadgeError badgeContent={99} max={99}>
              <MailIcon color="action" />
            </StyledBadgeError>
            <StyledBadgeOnline
              variant="dot"
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />
            </StyledBadgeOnline>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
```
