# Pagination Component Templates

## Template 1: Basic Pagination

```jsx
import React, { useState } from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';

function BasicPagination() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    // Fetch data for the new page
    console.log('Page changed to:', value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Basic Pagination
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default BasicPagination;
```

## Template 2: Outlined Pagination

```jsx
import React, { useState } from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';

function OutlinedPagination() {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Outlined Pagination
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default OutlinedPagination;
```

## Template 3: Rounded Pagination

```jsx
import React, { useState } from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';

function RoundedPagination() {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Rounded Pagination
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default RoundedPagination;
```

## Template 4: All Sizes

```jsx
import React from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';

function PaginationSizes() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Pagination Sizes
      </Typography>
      <Stack spacing={3} alignItems="center">
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Small (32px)
          </Typography>
          <Pagination count={10} size="small" color="primary" />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Medium (40px) - Default
          </Typography>
          <Pagination count={10} size="medium" color="primary" />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Large (48px)
          </Typography>
          <Pagination count={10} size="large" color="primary" />
        </Box>
      </Stack>
    </Box>
  );
}

export default PaginationSizes;
```

## Template 5: All Colors

```jsx
import React from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';

function PaginationColors() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Pagination Colors
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Standard
          </Typography>
          <Pagination count={10} color="standard" />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Primary
          </Typography>
          <Pagination count={10} color="primary" />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Secondary
          </Typography>
          <Pagination count={10} color="secondary" />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Success
          </Typography>
          <Pagination
            count={10}
            sx={{
              '& .MuiPaginationItem-root': {
                '&.Mui-selected': {
                  backgroundColor: 'success.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'success.dark',
                  },
                },
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Error
          </Typography>
          <Pagination
            count={10}
            sx={{
              '& .MuiPaginationItem-root': {
                '&.Mui-selected': {
                  backgroundColor: 'error.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'error.dark',
                  },
                },
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Info
          </Typography>
          <Pagination
            count={10}
            sx={{
              '& .MuiPaginationItem-root': {
                '&.Mui-selected': {
                  backgroundColor: 'info.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'info.dark',
                  },
                },
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Warning
          </Typography>
          <Pagination
            count={10}
            sx={{
              '& .MuiPaginationItem-root': {
                '&.Mui-selected': {
                  backgroundColor: 'warning.main',
                  color: 'grey.800',
                  '&:hover': {
                    backgroundColor: 'warning.dark',
                  },
                },
              },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default PaginationColors;
```

## Template 6: Disabled Pagination

```jsx
import React from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';

function DisabledPagination() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Disabled Pagination
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Pagination count={10} disabled color="primary" />
      </Stack>
    </Box>
  );
}

export default DisabledPagination;
```

## Template 7: Controlled Pagination with Data

```jsx
import React, { useState, useEffect } from 'react';
import { Box, Pagination, Typography, Stack, Card, CardContent } from '@mui/material';

function ControlledPagination() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 5;

  // Sample data
  const allItems = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  useEffect(() => {
    // Simulate data fetching
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(allItems.slice(startIndex, endIndex));
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Controlled Pagination with Data
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        {data.map((item) => (
          <Card key={item.id} variant="outlined">
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        Page {page} of {totalPages} ({allItems.length} total items)
      </Typography>
    </Box>
  );
}

export default ControlledPagination;
```

## Template 8: Table Pagination

```jsx
import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Typography,
} from '@mui/material';

function TablePaginationComponent() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data
  const rows = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'User', 'Manager'][i % 3],
    status: ['Active', 'Inactive'][i % 2],
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate displayed rows
  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Table Pagination
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />
      </TableContainer>
    </Box>
  );
}

export default TablePaginationComponent;
```

## Template 9: Custom Icons Pagination

```jsx
import React, { useState } from 'react';
import { Box, Pagination, PaginationItem, Typography, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

function CustomIconsPagination() {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Custom Icons Pagination
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
                first: FirstPageIcon,
                last: LastPageIcon,
              }}
              {...item}
            />
          )}
          showFirstButton
          showLastButton
          color="primary"
        />
      </Stack>
    </Box>
  );
}

export default CustomIconsPagination;
```

## Template 10: All Variants Combined

```jsx
import React, { useState } from 'react';
import {
  Box,
  Pagination,
  Typography,
  Stack,
  Divider,
  Paper,
} from '@mui/material';

function AllPaginationVariants() {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Pagination Components
      </Typography>

      <Stack spacing={4} divider={<Divider />}>
        {/* Basic */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Basic
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={10}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </Paper>

        {/* Outlined */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Outlined
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={10}
              variant="outlined"
              color="primary"
            />
          </Stack>
        </Paper>

        {/* Rounded */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Rounded
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={10}
              shape="rounded"
              color="primary"
            />
          </Stack>
        </Paper>

        {/* Sizes */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Sizes
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination count={10} size="small" color="primary" />
            <Pagination count={10} size="medium" color="primary" />
            <Pagination count={10} size="large" color="primary" />
          </Stack>
        </Paper>

        {/* Colors */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Colors
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination count={10} color="standard" />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
          </Stack>
        </Paper>

        {/* Disabled */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Disabled
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination count={10} disabled color="primary" />
          </Stack>
        </Paper>

        {/* With First/Last Buttons */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            With First & Last Buttons
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={10}
              color="primary"
              showFirstButton
              showLastButton
            />
          </Stack>
        </Paper>

        {/* Boundary Count */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Custom Boundary Count
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={20}
              color="primary"
              boundaryCount={2}
              siblingCount={1}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export default AllPaginationVariants;
```

## Usage Notes

### Props Reference

**Pagination Component:**
- `count`: Total number of pages
- `page`: Current page (controlled)
- `defaultPage`: Initial page (uncontrolled)
- `onChange`: Callback when page changes
- `color`: 'primary' | 'secondary' | 'standard'
- `variant`: 'text' | 'outlined'
- `shape`: 'circular' | 'rounded'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: Boolean
- `showFirstButton`: Show first page button
- `showLastButton`: Show last page button
- `siblingCount`: Number of pages to show on each side
- `boundaryCount`: Number of pages at start/end

**TablePagination Component:**
- `count`: Total number of rows
- `page`: Current page (zero-based)
- `onPageChange`: Callback for page change
- `rowsPerPage`: Rows per page
- `onRowsPerPageChange`: Callback for rows per page change
- `rowsPerPageOptions`: Array of options [5, 10, 25]
- `component`: Component type (usually 'div')

### Styling with sx prop

```jsx
<Pagination
  sx={{
    '& .MuiPaginationItem-root': {
      borderRadius: '8px',
      '&.Mui-selected': {
        backgroundColor: 'primary.main',
        color: 'white',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      },
      '&:hover': {
        backgroundColor: 'action.hover',
      },
    },
  }}
/>
```

### Integration Tips

1. **With API calls**: Update data in onChange handler
2. **With routing**: Sync with URL query parameters
3. **With filters**: Reset page to 1 when filters change
4. **Loading states**: Show skeleton while fetching
5. **Error handling**: Handle invalid page numbers
6. **Persistence**: Save page state in localStorage/sessionStorage
