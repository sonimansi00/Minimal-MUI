# Avatar Component Templates - Minimal UI Style

## 1. Basic Avatar

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function BasicAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Image Avatar */}
      <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=1" />

      {/* Letter Avatar */}
      <Avatar sx={{ bgcolor: '#00A76F' }}>JD</Avatar>

      {/* Icon Avatar */}
      <Avatar sx={{ bgcolor: '#919EAB' }}>
        <PersonIcon />
      </Avatar>
    </Stack>
  );
}
```

## 2. Avatar Sizes

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* XS */}
      <Avatar
        alt="XS"
        src="https://i.pravatar.cc/150?img=1"
        sx={{ width: 24, height: 24, fontSize: '10px' }}
      />

      {/* Small */}
      <Avatar
        alt="Small"
        src="https://i.pravatar.cc/150?img=2"
        sx={{ width: 32, height: 32, fontSize: '12px' }}
      />

      {/* Medium (default) */}
      <Avatar alt="Medium" src="https://i.pravatar.cc/150?img=3" />

      {/* Large */}
      <Avatar
        alt="Large"
        src="https://i.pravatar.cc/150?img=4"
        sx={{ width: 56, height: 56, fontSize: '20px' }}
      />

      {/* XL */}
      <Avatar
        alt="XL"
        src="https://i.pravatar.cc/150?img=5"
        sx={{ width: 64, height: 64, fontSize: '24px' }}
      />
    </Stack>
  );
}
```

## 3. Avatar Shapes

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarShapes() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Circular (default) */}
      <Avatar alt="Circular" src="https://i.pravatar.cc/150?img=1" />

      {/* Rounded */}
      <Avatar
        alt="Rounded"
        src="https://i.pravatar.cc/150?img=2"
        sx={{ borderRadius: '8px' }}
      />

      {/* Square */}
      <Avatar
        alt="Square"
        src="https://i.pravatar.cc/150?img=3"
        sx={{ borderRadius: 0 }}
      />
    </Stack>
  );
}
```

## 4. AvatarGroup

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function AvatarGroupComponent() {
  return (
    <AvatarGroup
      max={4}
      sx={{
        '& .MuiAvatar-root': {
          width: 40,
          height: 40,
          fontSize: '14px',
          border: '2px solid #FFFFFF',
        },
      }}
    >
      <Avatar alt="User 1" src="https://i.pravatar.cc/150?img=1" />
      <Avatar alt="User 2" src="https://i.pravatar.cc/150?img=2" />
      <Avatar alt="User 3" src="https://i.pravatar.cc/150?img=3" />
      <Avatar alt="User 4" src="https://i.pravatar.cc/150?img=4" />
      <Avatar alt="User 5" src="https://i.pravatar.cc/150?img=5" />
    </AvatarGroup>
  );
}
```

## 5. Avatar with Badge

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#22C55E',
    color: '#22C55E',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function AvatarWithBadge() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Online */}
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Online" src="https://i.pravatar.cc/150?img=1" />
      </StyledBadge>

      {/* Offline */}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        sx={{
          '& .MuiBadge-badge': {
            backgroundColor: '#919EAB',
            boxShadow: '0 0 0 2px #FFFFFF',
          },
        }}
      >
        <Avatar alt="Offline" src="https://i.pravatar.cc/150?img=2" />
      </Badge>
    </Stack>
  );
}
```

## 6. Social Style Avatar

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SocialAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Primary Ring */}
      <Avatar
        alt="Primary"
        src="https://i.pravatar.cc/150?img=1"
        sx={{
          width: 48,
          height: 48,
          border: '3px solid #00A76F',
          boxShadow: '0 0 0 2px #FFFFFF',
        }}
      />

      {/* Success Ring */}
      <Avatar
        alt="Success"
        src="https://i.pravatar.cc/150?img=2"
        sx={{
          width: 48,
          height: 48,
          border: '3px solid #22C55E',
          boxShadow: '0 0 0 2px #FFFFFF',
        }}
      />

      {/* Info Ring */}
      <Avatar
        alt="Info"
        src="https://i.pravatar.cc/150?img=3"
        sx={{
          width: 48,
          height: 48,
          border: '3px solid #00B8D9',
          boxShadow: '0 0 0 2px #FFFFFF',
        }}
      />
    </Stack>
  );
}
```

## 7. Customized Styled (Minimal UI)

```tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function StyledAvatar() {
  return (
    <Stack spacing={3}>
      {/* Premium Avatar with Shadow */}
      <Avatar
        alt="Premium"
        src="https://i.pravatar.cc/150?img=1"
        sx={{
          width: 64,
          height: 64,
          border: '3px solid #FFFFFF',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
        }}
      />

      {/* Gradient Border Avatar */}
      <Box
        sx={{
          p: '3px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00A76F 0%, #00B8D9 100%)',
          display: 'inline-flex',
        }}
      >
        <Avatar
          alt="Gradient"
          src="https://i.pravatar.cc/150?img=2"
          sx={{
            width: 56,
            height: 56,
            border: '2px solid #FFFFFF',
          }}
        />
      </Box>

      {/* Styled Avatar Group */}
      <AvatarGroup
        max={3}
        sx={{
          '& .MuiAvatar-root': {
            width: 48,
            height: 48,
            fontSize: '16px',
            fontWeight: 600,
            border: '3px solid #FFFFFF',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        <Avatar alt="User 1" src="https://i.pravatar.cc/150?img=1" />
        <Avatar alt="User 2" src="https://i.pravatar.cc/150?img=2" />
        <Avatar alt="User 3" src="https://i.pravatar.cc/150?img=3" />
        <Avatar alt="User 4" src="https://i.pravatar.cc/150?img=4" />
      </AvatarGroup>
    </Stack>
  );
}
```

## Complete Demo

```tsx
import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Stack,
  Container,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function AllAvatarVariants() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Avatar Variants
      </Typography>

      <Stack spacing={4}>
        {/* Basic */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            1. Basic
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Image" src="https://i.pravatar.cc/150?img=1" />
            <Avatar sx={{ bgcolor: '#00A76F' }}>JD</Avatar>
            <Avatar sx={{ bgcolor: '#919EAB' }}>
              <PersonIcon />
            </Avatar>
          </Stack>
        </Box>

        <Divider />

        {/* Sizes */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            2. Sizes
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src="https://i.pravatar.cc/150?img=1" sx={{ width: 24, height: 24 }} />
            <Avatar src="https://i.pravatar.cc/150?img=2" sx={{ width: 32, height: 32 }} />
            <Avatar src="https://i.pravatar.cc/150?img=3" />
            <Avatar src="https://i.pravatar.cc/150?img=4" sx={{ width: 56, height: 56 }} />
            <Avatar src="https://i.pravatar.cc/150?img=5" sx={{ width: 64, height: 64 }} />
          </Stack>
        </Box>

        <Divider />

        {/* Shapes */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            3. Shapes
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar src="https://i.pravatar.cc/150?img=1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" sx={{ borderRadius: '8px' }} />
            <Avatar src="https://i.pravatar.cc/150?img=3" sx={{ borderRadius: 0 }} />
          </Stack>
        </Box>

        <Divider />

        {/* Group */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            4. AvatarGroup
          </Typography>
          <AvatarGroup max={4}>
            <Avatar src="https://i.pravatar.cc/150?img=1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" />
            <Avatar src="https://i.pravatar.cc/150?img=4" />
            <Avatar src="https://i.pravatar.cc/150?img=5" />
          </AvatarGroup>
        </Box>

        <Divider />

        {/* With Badge */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            5. With Badge
          </Typography>
          <Stack direction="row" spacing={2}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#22C55E',
                  boxShadow: '0 0 0 2px #FFFFFF',
                },
              }}
            >
              <Avatar src="https://i.pravatar.cc/150?img=1" />
            </Badge>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#919EAB',
                  boxShadow: '0 0 0 2px #FFFFFF',
                },
              }}
            >
              <Avatar src="https://i.pravatar.cc/150?img=2" />
            </Badge>
          </Stack>
        </Box>

        <Divider />

        {/* Social Style */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            6. Social Style
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              sx={{
                width: 48,
                height: 48,
                border: '3px solid #00A76F',
                boxShadow: '0 0 0 2px #FFFFFF',
              }}
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=2"
              sx={{
                width: 48,
                height: 48,
                border: '3px solid #22C55E',
                boxShadow: '0 0 0 2px #FFFFFF',
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
```
