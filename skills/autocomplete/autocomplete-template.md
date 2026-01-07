# Autocomplete Component Templates - Minimal UI Style

## 1. Basic Autocomplete

```tsx
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Forrest Gump', year: 1994 },
];

export default function BasicAutocomplete() {
  return (
    <Stack spacing={3}>
      <Autocomplete
        options={top100Films}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        }}
      />
    </Stack>
  );
}
```

## 2. Grouped Autocomplete

```tsx
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = [
  { title: 'The Shawshank Redemption', category: 'Drama' },
  { title: 'The Godfather', category: 'Crime' },
  { title: 'The Dark Knight', category: 'Action' },
  { title: 'Pulp Fiction', category: 'Crime' },
  { title: 'Forrest Gump', category: 'Drama' },
];

export default function GroupedAutocomplete() {
  return (
    <Autocomplete
      options={options.sort((a, b) => -b.category.localeCompare(a.category))}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <TextField {...params} label="Movies by Genre" />}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
        '& .MuiAutocomplete-groupLabel': {
          fontSize: '12px',
          fontWeight: 600,
          color: 'grey.500',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          py: 1,
          px: 2,
        },
      }}
    />
  );
}
```

## 3. Free Solo Autocomplete

```tsx
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function FreeSoloAutocomplete() {
  return (
    <Autocomplete
      freeSolo
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Free solo" helperText="You can enter custom values" />
      )}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
      }}
    />
  );
}
```

## 4. Multiple Selection with Chips

```tsx
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Forrest Gump',
];

export default function MultipleAutocomplete() {
  return (
    <Autocomplete
      multiple
      options={top100Films}
      defaultValue={[top100Films[0]]}
      renderInput={(params) => <TextField {...params} label="Multiple Movies" />}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            sx={{
              bgcolor: 'rgba(145, 158, 171, 0.16)',
              color: 'grey.800',
              borderRadius: '6px',
              height: '24px',
              fontSize: '13px',
              '& .MuiChip-deleteIcon': {
                color: 'grey.600',
                fontSize: '18px',
                '&:hover': {
                  color: 'grey.800',
                },
              },
            }}
          />
        ))
      }
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
      }}
    />
  );
}
```

## 5. With Avatar Icons

```tsx
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const users = [
  { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?img=3' },
];

export default function AvatarAutocomplete() {
  return (
    <Autocomplete
      options={users}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Avatar src={option.avatar} sx={{ width: 32, height: 32, mr: 1.5 }} />
          {option.name}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Select User" />}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
      }}
    />
  );
}
```

## 6. Async Autocomplete

```tsx
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function AsyncAutocomplete() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setOptions(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
        setLoading(false);
      }, 1000);
    }
  }, [open]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Async Load"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
      }}
    />
  );
}
```

## 7. Customized Styled (Minimal UI)

```tsx
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function StyledAutocomplete() {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label="Styled Autocomplete" />}
      PaperComponent={(props) => (
        <Paper
          {...props}
          sx={{
            borderRadius: '8px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
            mt: 1,
            '& .MuiAutocomplete-listbox': {
              padding: '8px 0',
              '& .MuiAutocomplete-option': {
                padding: '8px 16px',
                fontSize: '14px',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
                '&[aria-selected="true"]': {
                  bgcolor: 'rgba(0, 167, 111, 0.08)',
                  fontWeight: 600,
                },
              },
            },
          }}
        />
      )}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          '& fieldset': {
            borderColor: 'grey.300',
          },
          '&:hover fieldset': {
            borderColor: 'grey.800',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
            borderWidth: '2px',
          },
        },
      }}
    />
  );
}
```

## Complete Demo

```tsx
import React, { useState, useEffect } from 'react';
import {
  Autocomplete,
  TextField,
  Chip,
  Avatar,
  CircularProgress,
  Paper,
  Stack,
  Container,
  Typography,
  Divider,
  Box,
} from '@mui/material';

export default function AllAutocompleteVariants() {
  const [asyncOpen, setAsyncOpen] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const films = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight'];
  const groupedOptions = [
    { title: 'The Shawshank Redemption', category: 'Drama' },
    { title: 'The Godfather', category: 'Crime' },
  ];
  const users = [
    { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
  ];

  useEffect(() => {
    if (asyncOpen) {
      setLoading(true);
      setTimeout(() => {
        setAsyncOptions(['Option 1', 'Option 2', 'Option 3']);
        setLoading(false);
      }, 1000);
    }
  }, [asyncOpen]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Autocomplete Variants
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            1. Basic
          </Typography>
          <Autocomplete
            options={films}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            2. Grouped
          </Typography>
          <Autocomplete
            options={groupedOptions.sort((a, b) => -b.category.localeCompare(a.category))}
            groupBy={(option) => option.category}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Movies by Genre" />}
          />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            3. Free Solo
          </Typography>
          <Autocomplete
            freeSolo
            options={films}
            renderInput={(params) => <TextField {...params} label="Free solo" />}
          />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            4. Multiple
          </Typography>
          <Autocomplete
            multiple
            options={films}
            defaultValue={[films[0]]}
            renderInput={(params) => <TextField {...params} label="Multiple" />}
          />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            5. With Avatar
          </Typography>
          <Autocomplete
            options={users}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <Avatar src={option.avatar} sx={{ width: 32, height: 32, mr: 1.5 }} />
                {option.name}
              </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Select User" />}
          />
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            6. Async
          </Typography>
          <Autocomplete
            open={asyncOpen}
            onOpen={() => setAsyncOpen(true)}
            onClose={() => setAsyncOpen(false)}
            options={asyncOptions}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Async Load"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </Box>
      </Stack>
    </Container>
  );
}
```
