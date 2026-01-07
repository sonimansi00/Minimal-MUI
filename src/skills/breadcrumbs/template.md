# Breadcrumbs Component Templates - Minimal UI Style

## 1. Basic Breadcrumbs

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function BasicBreadcrumbs() {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'grey.500',
          mx: 1,
        },
      }}
    >
      <Link
        underline="hover"
        color="grey.600"
        href="/"
        sx={{
          '&:hover': {
            color: 'grey.800',
          },
        }}
      >
        Home
      </Link>
      <Link
        underline="hover"
        color="grey.600"
        href="/components"
        sx={{
          '&:hover': {
            color: 'grey.800',
          },
        }}
      >
        Components
      </Link>
      <Typography color="grey.800" fontWeight={600}>
        Breadcrumbs
      </Typography>
    </Breadcrumbs>
  );
}
```

## 2. Custom Separator

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparatorBreadcrumbs() {
  return (
    <>
      {/* With Icon Separator */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          mb: 3,
          '& .MuiBreadcrumbs-separator': {
            color: 'grey.500',
          },
        }}
      >
        <Link underline="hover" color="grey.600" href="/">
          Home
        </Link>
        <Link underline="hover" color="grey.600" href="/components">
          Components
        </Link>
        <Typography color="grey.800" fontWeight={600}>
          Breadcrumbs
        </Typography>
      </Breadcrumbs>

      {/* With > Separator */}
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          mb: 3,
          '& .MuiBreadcrumbs-separator': {
            color: 'grey.500',
            fontSize: '18px',
          },
        }}
      >
        <Link underline="hover" color="grey.600" href="/">
          Home
        </Link>
        <Link underline="hover" color="grey.600" href="/components">
          Components
        </Link>
        <Typography color="grey.800" fontWeight={600}>
          Breadcrumbs
        </Typography>
      </Breadcrumbs>

      {/* With • Separator */}
      <Breadcrumbs
        separator="•"
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'grey.500',
          },
        }}
      >
        <Link underline="hover" color="grey.600" href="/">
          Home
        </Link>
        <Link underline="hover" color="grey.600" href="/components">
          Components
        </Link>
        <Typography color="grey.800" fontWeight={600}>
          Breadcrumbs
        </Typography>
      </Breadcrumbs>
    </>
  );
}
```

## 3. Max Items

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function MaxItemsBreadcrumbs() {
  return (
    <Breadcrumbs
      maxItems={4}
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'grey.500',
        },
        '& .MuiBreadcrumbs-li button': {
          color: 'grey.600',
          fontSize: '14px',
          '&:hover': {
            color: 'grey.800',
            backgroundColor: 'rgba(145, 158, 171, 0.08)',
          },
        },
      }}
    >
      <Link underline="hover" color="grey.600" href="/">
        Home
      </Link>
      <Link underline="hover" color="grey.600" href="/catalog">
        Catalog
      </Link>
      <Link underline="hover" color="grey.600" href="/category">
        Category
      </Link>
      <Link underline="hover" color="grey.600" href="/subcategory">
        Subcategory
      </Link>
      <Link underline="hover" color="grey.600" href="/product">
        Product
      </Link>
      <Typography color="grey.800" fontWeight={600}>
        Detail
      </Typography>
    </Breadcrumbs>
  );
}
```

## 4. With Icons

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

export default function IconBreadcrumbs() {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'grey.500',
        },
      }}
    >
      <Link
        underline="hover"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'grey.600',
          '&:hover': {
            color: 'grey.800',
          },
        }}
        href="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
      <Link
        underline="hover"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'grey.600',
          '&:hover': {
            color: 'grey.800',
          },
        }}
        href="/category"
      >
        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Category
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'grey.800',
          fontWeight: 600,
        }}
      >
        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Breadcrumb
      </Box>
    </Breadcrumbs>
  );
}
```

## 5. With Links (React Router)

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

// Static breadcrumb configuration
const breadcrumbNameMap = {
  '/dashboard': 'Dashboard',
  '/products': 'Products',
  '/products/list': 'Product List',
  '/products/new': 'New Product',
  '/settings': 'Settings',
  '/settings/account': 'Account',
  '/settings/profile': 'Profile',
};

export default function RouterBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'grey.500',
        },
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        underline="hover"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'grey.600',
          '&:hover': {
            color: 'grey.800',
          },
        }}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = breadcrumbNameMap[to] || value;

        return last ? (
          <Typography
            key={to}
            color="grey.800"
            fontWeight={600}
            sx={{ textTransform: 'capitalize' }}
          >
            {label}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            to={to}
            underline="hover"
            sx={{
              color: 'grey.600',
              textTransform: 'capitalize',
              '&:hover': {
                color: 'grey.800',
              },
            }}
          >
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
```

## 6. Collapsed

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.grey[100];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.grey[600],
    fontWeight: 400,
    fontSize: '14px',
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
      color: theme.palette.grey[800],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function CollapsedBreadcrumbs() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'grey.500',
        },
      }}
    >
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
      <StyledBreadcrumb
        label="Accessories"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        onDelete={handleClick}
      />
      <StyledBreadcrumb component="a" href="#" label="Shoes" onClick={handleClick} />
      <StyledBreadcrumb label="Sneakers" />
    </Breadcrumbs>
  );
}
```

## 7. Customized Styled (Minimal UI)

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function StyledBreadcrumbs() {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.100',
        borderRadius: '8px',
        padding: '12px 16px',
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'grey.500',
            margin: '0 4px',
          },
          '& .MuiBreadcrumbs-ol': {
            alignItems: 'center',
          },
        }}
      >
        <Link
          underline="none"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'grey.600',
            fontSize: '14px',
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'all 200ms ease-in-out',
            '&:hover': {
              color: 'grey.800',
              backgroundColor: 'rgba(145, 158, 171, 0.08)',
            },
          }}
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5, fontSize: '20px' }} />
          Home
        </Link>
        <Link
          underline="none"
          sx={{
            color: 'grey.600',
            fontSize: '14px',
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'all 200ms ease-in-out',
            '&:hover': {
              color: 'grey.800',
              backgroundColor: 'rgba(145, 158, 171, 0.08)',
            },
          }}
          href="/components"
        >
          Components
        </Link>
        <Link
          underline="none"
          sx={{
            color: 'grey.600',
            fontSize: '14px',
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'all 200ms ease-in-out',
            '&:hover': {
              color: 'grey.800',
              backgroundColor: 'rgba(145, 158, 171, 0.08)',
            },
          }}
          href="/components/navigation"
        >
          Navigation
        </Link>
        <Typography
          color="grey.800"
          fontWeight={600}
          fontSize="14px"
          sx={{
            padding: '4px 8px',
          }}
        >
          Breadcrumbs
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
```

## Complete Demo

```tsx
import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
  Box,
  Container,
  Stack,
  Divider,
  Chip,
} from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.grey[100];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.grey[600],
    fontWeight: 400,
    fontSize: '14px',
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
      color: theme.palette.grey[800],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function AllBreadcrumbsVariants() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Breadcrumbs Variants
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            1. Basic Breadcrumbs
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey.600" href="/">
              Home
            </Link>
            <Link underline="hover" color="grey.600" href="/components">
              Components
            </Link>
            <Typography color="grey.800" fontWeight={600}>
              Breadcrumbs
            </Typography>
          </Breadcrumbs>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            2. Custom Separator
          </Typography>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link underline="hover" color="grey.600" href="/">
                Home
              </Link>
              <Link underline="hover" color="grey.600" href="/components">
                Components
              </Link>
              <Typography color="grey.800" fontWeight={600}>
                Breadcrumbs
              </Typography>
            </Breadcrumbs>

            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="grey.600" href="/">
                Home
              </Link>
              <Link underline="hover" color="grey.600" href="/components">
                Components
              </Link>
              <Typography color="grey.800" fontWeight={600}>
                Breadcrumbs
              </Typography>
            </Breadcrumbs>

            <Breadcrumbs separator="•" aria-label="breadcrumb">
              <Link underline="hover" color="grey.600" href="/">
                Home
              </Link>
              <Link underline="hover" color="grey.600" href="/components">
                Components
              </Link>
              <Typography color="grey.800" fontWeight={600}>
                Breadcrumbs
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            3. Max Items (Collapsed)
          </Typography>
          <Breadcrumbs maxItems={4} aria-label="breadcrumb">
            <Link underline="hover" color="grey.600" href="/">
              Home
            </Link>
            <Link underline="hover" color="grey.600" href="/catalog">
              Catalog
            </Link>
            <Link underline="hover" color="grey.600" href="/category">
              Category
            </Link>
            <Link underline="hover" color="grey.600" href="/subcategory">
              Subcategory
            </Link>
            <Link underline="hover" color="grey.600" href="/product">
              Product
            </Link>
            <Typography color="grey.800" fontWeight={600}>
              Detail
            </Typography>
          </Breadcrumbs>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            4. With Icons
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center', color: 'grey.600' }}
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center', color: 'grey.600' }}
              href="/category"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Category
            </Link>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'grey.800',
                fontWeight: 600,
              }}
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Breadcrumb
            </Box>
          </Breadcrumbs>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            5. Collapsed (Chip Style)
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
              onClick={handleClick}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Catalog"
              onClick={handleClick}
            />
            <StyledBreadcrumb
              label="Accessories"
              deleteIcon={<ExpandMoreIcon />}
              onClick={handleClick}
              onDelete={handleClick}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Shoes"
              onClick={handleClick}
            />
            <StyledBreadcrumb label="Sneakers" />
          </Breadcrumbs>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            6. Customized Styled (Minimal UI)
          </Typography>
          <Box
            sx={{
              backgroundColor: 'grey.100',
              borderRadius: '8px',
              padding: '12px 16px',
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{
                '& .MuiBreadcrumbs-separator': {
                  color: 'grey.500',
                  margin: '0 4px',
                },
              }}
            >
              <Link
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey.600',
                  fontSize: '14px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  transition: 'all 200ms ease-in-out',
                  '&:hover': {
                    color: 'grey.800',
                    backgroundColor: 'rgba(145, 158, 171, 0.08)',
                  },
                }}
                href="/"
              >
                <HomeIcon sx={{ mr: 0.5, fontSize: '20px' }} />
                Home
              </Link>
              <Link
                underline="none"
                sx={{
                  color: 'grey.600',
                  fontSize: '14px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  transition: 'all 200ms ease-in-out',
                  '&:hover': {
                    color: 'grey.800',
                    backgroundColor: 'rgba(145, 158, 171, 0.08)',
                  },
                }}
                href="/components"
              >
                Components
              </Link>
              <Link
                underline="none"
                sx={{
                  color: 'grey.600',
                  fontSize: '14px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  transition: 'all 200ms ease-in-out',
                  '&:hover': {
                    color: 'grey.800',
                    backgroundColor: 'rgba(145, 158, 171, 0.08)',
                  },
                }}
                href="/components/navigation"
              >
                Navigation
              </Link>
              <Typography
                color="grey.800"
                fontWeight={600}
                fontSize="14px"
                sx={{ padding: '4px 8px' }}
              >
                Breadcrumbs
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
```

## Next.js Integration

```tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

export default function NextBreadcrumbs() {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: 'grey.500',
        },
      }}
    >
      <Link
        component={NextLink}
        href="/"
        underline="hover"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'grey.600',
          '&:hover': {
            color: 'grey.800',
          },
        }}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography
            key={to}
            color="grey.800"
            fontWeight={600}
            sx={{ textTransform: 'capitalize' }}
          >
            {value}
          </Typography>
        ) : (
          <Link
            key={to}
            component={NextLink}
            href={to}
            underline="hover"
            sx={{
              color: 'grey.600',
              textTransform: 'capitalize',
              '&:hover': {
                color: 'grey.800',
              },
            }}
          >
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
```
