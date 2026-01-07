# Checkbox Component Templates

Complete React code templates for all MUI v5 Checkbox variants following Minimals design system.

---

## 1. Basic Checkbox

```jsx
import { Checkbox } from '@mui/material';

export default function BasicCheckbox() {
  return (
    <div>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  );
}
```

---

## 2. Sizes

```jsx
import { Checkbox, Stack } from '@mui/material';

export default function CheckboxSizes() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Checkbox size="small" defaultChecked />
      <Checkbox size="medium" defaultChecked />
      <Checkbox size="large" defaultChecked />
    </Stack>
  );
}
```

---

## 3. Colors

```jsx
import { Checkbox, Stack } from '@mui/material';

export default function CheckboxColors() {
  return (
    <Stack direction="row" spacing={1}>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked color="error" />
      <Checkbox defaultChecked color="warning" />
      <Checkbox defaultChecked color="info" />
      <Checkbox defaultChecked color="success" />
      <Checkbox
        defaultChecked
        sx={{
          color: 'rgba(145, 158, 171, 0.32)',
          '&.Mui-checked': {
            color: '#212B36',
          },
        }}
      />
    </Stack>
  );
}
```

---

## 4. Indeterminate

```jsx
import { useState } from 'react';
import { Checkbox, FormControlLabel, Box } from '@mui/material';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
```

---

## 5. With Label

```jsx
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function CheckboxWithLabel() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Label"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Required"
        required
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Disabled"
        disabled
      />
    </FormGroup>
  );
}
```

---

## 6. Controlled

```jsx
import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

export default function ControlledCheckbox() {
  const [checked, setChecked] = useState({
    option1: true,
    option2: false,
    option3: false,
  });

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option1}
              onChange={handleChange}
              name="option1"
            />
          }
          label="Option 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option2}
              onChange={handleChange}
              name="option2"
            />
          }
          label="Option 2"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.option3}
              onChange={handleChange}
              name="option3"
            />
          }
          label="Option 3"
        />
      </FormGroup>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Selected: {Object.keys(checked).filter(key => checked[key]).join(', ') || 'None'}
      </Typography>
    </div>
  );
}
```

---

## 7. Disabled

```jsx
import { Checkbox, FormControlLabel, Stack } from '@mui/material';

export default function DisabledCheckbox() {
  return (
    <Stack spacing={1}>
      <FormControlLabel
        control={<Checkbox disabled />}
        label="Disabled unchecked"
        disabled
      />
      <FormControlLabel
        control={<Checkbox disabled checked />}
        label="Disabled checked"
        disabled
      />
      <FormControlLabel
        control={<Checkbox disabled indeterminate />}
        label="Disabled indeterminate"
        disabled
      />
    </Stack>
  );
}
```

---

## 8. Custom Icon

```jsx
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckBoxOutlineBlankRounded,
  CheckBoxRounded,
  IndeterminateCheckBoxRounded,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';

export default function CustomIconCheckbox() {
  return (
    <div>
      <Checkbox
        defaultChecked
        icon={<CheckBoxOutlineBlankRounded />}
        checkedIcon={<CheckBoxRounded />}
        indeterminateIcon={<IndeterminateCheckBoxRounded />}
      />

      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        sx={{
          color: 'rgba(145, 158, 171, 0.32)',
          '&.Mui-checked': {
            color: '#FF5630',
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankRounded />}
            checkedIcon={<CheckBoxRounded />}
            sx={{
              color: '#00A76F',
              '&.Mui-checked': {
                color: '#00A76F',
              },
            }}
          />
        }
        label="Custom Icon with Label"
      />
    </div>
  );
}
```

---

## 9. Form Group

```jsx
import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
} from '@mui/material';

export default function CheckboxFormGroup() {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length < 2;

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      {/* Vertical Group */}
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You must select at least two</FormHelperText>
      </FormControl>

      {/* Horizontal Group */}
      <FormControl component="fieldset" variant="standard" error={error}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>
          {error ? 'You must select at least two' : 'You can display an error'}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
```

---

## Theme Configuration (Optional)

Add this to your MUI theme for Minimals styling:

```js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A76F',
      dark: '#007B55',
      light: '#5BE49B',
    },
    secondary: {
      main: '#8E33FF',
      dark: '#5119A7',
      light: '#C684FF',
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 9,
          borderRadius: 4,
          '&.Mui-disabled': {
            opacity: 0.48,
          },
          '& .MuiSvgIcon-root': {
            borderRadius: 4,
          },
        },
      },
    },
  },
});
```

---

## Usage Examples

### Example 1: Terms and Conditions

```jsx
import { useState } from 'react';
import { Checkbox, FormControlLabel, Button, Box } from '@mui/material';

export default function TermsCheckbox() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            color="primary"
          />
        }
        label="I agree to the Terms and Conditions"
      />
      <Button
        variant="contained"
        disabled={!accepted}
        sx={{ mt: 2, display: 'block' }}
      >
        Continue
      </Button>
    </Box>
  );
}
```

### Example 2: Table Select All

```jsx
import { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from '@mui/material';

export default function TableSelectAll() {
  const rows = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const [selected, setSelected] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              size="small"
              indeterminate={selected.length > 0 && selected.length < rows.length}
              checked={selected.length === rows.length}
              onChange={handleSelectAll}
            />
          </TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell padding="checkbox">
              <Checkbox
                size="small"
                checked={selected.includes(row.id)}
                onChange={() => handleSelect(row.id)}
              />
            </TableCell>
            <TableCell>{row.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Example 3: Filter Panel

```jsx
import { useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from '@mui/material';

export default function FilterPanel() {
  const [filters, setFilters] = useState({
    inStock: false,
    onSale: false,
    freeShipping: false,
    new: false,
  });

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ p: 2, border: '1px solid rgba(145, 158, 171, 0.24)', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.inStock}
              onChange={handleChange}
              name="inStock"
              color="primary"
            />
          }
          label="In Stock"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.onSale}
              onChange={handleChange}
              name="onSale"
              color="primary"
            />
          }
          label="On Sale"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.freeShipping}
              onChange={handleChange}
              name="freeShipping"
              color="primary"
            />
          }
          label="Free Shipping"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.new}
              onChange={handleChange}
              name="new"
              color="primary"
            />
          }
          label="New Arrivals"
        />
      </FormGroup>
    </Box>
  );
}
```
