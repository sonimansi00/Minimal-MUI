# Radio Button Component Templates

Complete React code templates using Material-UI (MUI) v5 Radio components following Minimals design system standards.

## Imports Required

```javascript
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import { useState } from 'react';
```

---

## 1. Basic Radio Buttons

Simple radio button implementation with default styling.

```jsx
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';

function BasicRadioButtons() {
  const [value, setValue] = useState('option1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup value={value} onChange={handleChange}>
      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
    </RadioGroup>
  );
}

export default BasicRadioButtons;
```

---

## 2. Radio Button Sizes

Radio buttons in different sizes: small (18px), medium (20px), and large (24px).

```jsx
import { Radio, RadioGroup, FormControlLabel, Box, Typography } from '@mui/material';
import { useState } from 'react';

function RadioButtonSizes() {
  const [value, setValue] = useState('small');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Small Size */}
      <Box>
        <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'text.secondary' }}>
          Small (18px)
        </Typography>
        <RadioGroup value={value} onChange={handleChange} row>
          <FormControlLabel value="small" control={<Radio size="small" />} label="Small" />
          <FormControlLabel value="small2" control={<Radio size="small" />} label="Option 2" />
        </RadioGroup>
      </Box>

      {/* Medium Size (Default) */}
      <Box>
        <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'text.secondary' }}>
          Medium (20px) - Default
        </Typography>
        <RadioGroup value={value} onChange={handleChange} row>
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="medium2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      </Box>

      {/* Large Size */}
      <Box>
        <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'text.secondary' }}>
          Large (24px)
        </Typography>
        <RadioGroup value={value} onChange={handleChange} row>
          <FormControlLabel
            value="large"
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }} />}
            label="Large"
          />
          <FormControlLabel
            value="large2"
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }} />}
            label="Option 2"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default RadioButtonSizes;
```

---

## 3. Radio Button Colors

Radio buttons with different color schemes from the theme.

```jsx
import { Radio, RadioGroup, FormControlLabel, Box, Typography } from '@mui/material';
import { useState } from 'react';

function RadioButtonColors() {
  const [value, setValue] = useState('primary');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const colors = [
    { value: 'primary', label: 'Primary', color: 'primary' },
    { value: 'secondary', label: 'Secondary', color: 'secondary' },
    { value: 'error', label: 'Error', color: 'error' },
    { value: 'warning', label: 'Warning', color: 'warning' },
    { value: 'info', label: 'Info', color: 'info' },
    { value: 'success', label: 'Success', color: 'success' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {colors.map((colorOption) => (
        <RadioGroup key={colorOption.value} value={value} onChange={handleChange} row>
          <FormControlLabel
            value={colorOption.value}
            control={<Radio color={colorOption.color} />}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2">{colorOption.label}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  ({colorOption.color})
                </Typography>
              </Box>
            }
          />
          <FormControlLabel
            value={`${colorOption.value}2`}
            control={<Radio color={colorOption.color} />}
            label="Option 2"
          />
        </RadioGroup>
      ))}
    </Box>
  );
}

export default RadioButtonColors;
```

---

## 4. Row and Column Layout

Flexible layout options for radio button groups.

```jsx
import { Radio, RadioGroup, FormControlLabel, Box, Typography, Paper } from '@mui/material';
import { useState } from 'react';

function RadioButtonLayouts() {
  const [rowValue, setRowValue] = useState('row1');
  const [columnValue, setColumnValue] = useState('column1');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Row Layout */}
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Row Layout (Horizontal)
        </Typography>
        <RadioGroup
          row
          value={rowValue}
          onChange={(e) => setRowValue(e.target.value)}
          sx={{ gap: 2 }}
        >
          <FormControlLabel value="row1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="row2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="row3" control={<Radio />} label="Option 3" />
          <FormControlLabel value="row4" control={<Radio />} label="Option 4" />
        </RadioGroup>
      </Paper>

      {/* Column Layout */}
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Column Layout (Vertical)
        </Typography>
        <RadioGroup
          value={columnValue}
          onChange={(e) => setColumnValue(e.target.value)}
          sx={{ gap: 1 }}
        >
          <FormControlLabel value="column1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="column2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="column3" control={<Radio />} label="Option 3" />
          <FormControlLabel value="column4" control={<Radio />} label="Option 4" />
        </RadioGroup>
      </Paper>
    </Box>
  );
}

export default RadioButtonLayouts;
```

---

## 5. Label Position

Control where labels appear relative to radio buttons.

```jsx
import { Radio, RadioGroup, FormControlLabel, Box, Typography, Paper } from '@mui/material';
import { useState } from 'react';

function RadioButtonLabelPositions() {
  const [value, setValue] = useState('end');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const positions = [
    { value: 'end', label: 'End (Default)', placement: 'end' },
    { value: 'start', label: 'Start', placement: 'start' },
    { value: 'top', label: 'Top', placement: 'top' },
    { value: 'bottom', label: 'Bottom', placement: 'bottom' },
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {positions.map((position) => (
        <Paper
          key={position.value}
          variant="outlined"
          sx={{ p: 3, minWidth: 200 }}
        >
          <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'text.secondary' }}>
            {position.label}
          </Typography>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              value={position.value}
              control={<Radio />}
              label="Option 1"
              labelPlacement={position.placement}
              sx={{ mb: 1 }}
            />
            <FormControlLabel
              value={`${position.value}2`}
              control={<Radio />}
              label="Option 2"
              labelPlacement={position.placement}
            />
          </RadioGroup>
        </Paper>
      ))}
    </Box>
  );
}

export default RadioButtonLabelPositions;
```

---

## 6. Controlled Radio Buttons

Radio buttons with React state management for controlled behavior.

```jsx
import { Radio, RadioGroup, FormControlLabel, Box, Typography, Chip } from '@mui/material';
import { useState } from 'react';

function ControlledRadioButtons() {
  const [value, setValue] = useState('react');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const options = [
    { value: 'react', label: 'React', description: 'A JavaScript library for building user interfaces' },
    { value: 'vue', label: 'Vue', description: 'The Progressive JavaScript Framework' },
    { value: 'angular', label: 'Angular', description: 'Platform for building mobile and desktop web applications' },
    { value: 'svelte', label: 'Svelte', description: 'Cybernetically enhanced web apps' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, p: 2, bgcolor: 'background.neutral', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Selected Value:
        </Typography>
        <Chip
          label={value.toUpperCase()}
          color="primary"
          size="small"
          sx={{ mt: 1 }}
        />
      </Box>

      <RadioGroup value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {option.label}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {option.description}
                </Typography>
              </Box>
            }
            sx={{
              mb: 2,
              alignItems: 'flex-start',
              '& .MuiRadio-root': { mt: -0.5 }
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

export default ControlledRadioButtons;
```

---

## 7. Disabled Radio Buttons

Radio buttons in disabled state for read-only scenarios.

```jsx
import { Radio, RadioGroup, FormControlLabel, Box, Typography, Paper } from '@mui/material';

function DisabledRadioButtons() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Disabled Individual Radios */}
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Disabled Individual Radios
        </Typography>
        <RadioGroup defaultValue="option1">
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Active Option"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Disabled Option"
            disabled
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Another Active Option"
          />
        </RadioGroup>
      </Paper>

      {/* Disabled Entire Group */}
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Disabled Radio Group
        </Typography>
        <RadioGroup defaultValue="option2">
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
            disabled
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2 (Selected)"
            disabled
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Option 3"
            disabled
          />
        </RadioGroup>
        <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
          This is a read-only selection that cannot be changed.
        </Typography>
      </Paper>

      {/* Disabled with Different Colors */}
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          Disabled with Colors
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <FormControlLabel
            control={<Radio color="primary" checked disabled />}
            label="Primary"
          />
          <FormControlLabel
            control={<Radio color="secondary" checked disabled />}
            label="Secondary"
          />
          <FormControlLabel
            control={<Radio color="error" checked disabled />}
            label="Error"
          />
          <FormControlLabel
            control={<Radio color="success" checked disabled />}
            label="Success"
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default DisabledRadioButtons;
```

---

## 8. Radio Button Form Group

Complete form integration with labels, helper text, and error handling.

```jsx
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Box,
  Button,
  Alert,
} from '@mui/material';
import { useState } from 'react';

function RadioButtonFormGroup() {
  const [plan, setPlan] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setPlan(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!plan) {
      setError(true);
      return;
    }
    setSubmitted(true);
    // Handle form submission
  };

  const handleReset = () => {
    setPlan('');
    setError(false);
    setSubmitted(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500 }}>
      {/* Form Group with Validation */}
      <FormControl error={error} component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend" required>
          Choose Your Plan
        </FormLabel>
        <RadioGroup value={plan} onChange={handleChange} sx={{ mt: 2 }}>
          <FormControlLabel
            value="free"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Free Plan
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  $0/month - Basic features for personal use
                </Typography>
              </Box>
            }
            sx={{ mb: 1.5, alignItems: 'flex-start' }}
          />
          <FormControlLabel
            value="pro"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Pro Plan
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  $29/month - Advanced features for professionals
                </Typography>
              </Box>
            }
            sx={{ mb: 1.5, alignItems: 'flex-start' }}
          />
          <FormControlLabel
            value="enterprise"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Enterprise Plan
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Custom pricing - Full features with dedicated support
                </Typography>
              </Box>
            }
            sx={{ alignItems: 'flex-start' }}
          />
        </RadioGroup>
        {error && (
          <FormHelperText>Please select a plan to continue</FormHelperText>
        )}
        {!error && !submitted && (
          <FormHelperText>Select the plan that best fits your needs</FormHelperText>
        )}
      </FormControl>

      {/* Success Message */}
      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          You have selected the <strong>{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</strong>
        </Alert>
      )}

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Continue
        </Button>
        <Button onClick={handleReset} variant="outlined">
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default RadioButtonFormGroup;
```

---

## Complete Example with All Features

Comprehensive example combining multiple variants and features.

```jsx
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Box,
  Paper,
  Typography,
  Divider,
  Button,
  Stack,
} from '@mui/material';
import { useState } from 'react';

function CompleteRadioButtonExample() {
  // State for different sections
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState('all');
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!theme) newErrors.theme = 'Please select a theme';
    if (!language) newErrors.language = 'Please select a language';
    if (!notifications) newErrors.notifications = 'Please select notification preference';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('Settings saved:', { theme, language, notifications });
      // Handle save logic
    }
  };

  const handleReset = () => {
    setTheme('light');
    setLanguage('en');
    setNotifications('all');
    setErrors({});
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Application Settings
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
        Customize your application preferences
      </Typography>

      <Stack spacing={3}>
        {/* Theme Selection */}
        <Paper variant="outlined" sx={{ p: 3 }}>
          <FormControl error={!!errors.theme} component="fieldset" fullWidth>
            <FormLabel component="legend" required>
              Theme Preference
            </FormLabel>
            <RadioGroup
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
                setErrors({ ...errors, theme: '' });
              }}
              sx={{ mt: 2 }}
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light Mode"
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Dark Mode"
              />
              <FormControlLabel
                value="auto"
                control={<Radio />}
                label="Auto (System Default)"
              />
            </RadioGroup>
            {errors.theme && (
              <FormHelperText>{errors.theme}</FormHelperText>
            )}
          </FormControl>
        </Paper>

        {/* Language Selection */}
        <Paper variant="outlined" sx={{ p: 3 }}>
          <FormControl error={!!errors.language} component="fieldset" fullWidth>
            <FormLabel component="legend" required>
              Language
            </FormLabel>
            <RadioGroup
              row
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setErrors({ ...errors, language: '' });
              }}
              sx={{ mt: 2, gap: 2 }}
            >
              <FormControlLabel
                value="en"
                control={<Radio color="primary" />}
                label="English"
              />
              <FormControlLabel
                value="es"
                control={<Radio color="primary" />}
                label="Español"
              />
              <FormControlLabel
                value="fr"
                control={<Radio color="primary" />}
                label="Français"
              />
              <FormControlLabel
                value="de"
                control={<Radio color="primary" />}
                label="Deutsch"
              />
            </RadioGroup>
            {errors.language && (
              <FormHelperText>{errors.language}</FormHelperText>
            )}
          </FormControl>
        </Paper>

        {/* Notifications */}
        <Paper variant="outlined" sx={{ p: 3 }}>
          <FormControl error={!!errors.notifications} component="fieldset" fullWidth>
            <FormLabel component="legend" required>
              Notification Settings
            </FormLabel>
            <RadioGroup
              value={notifications}
              onChange={(e) => {
                setNotifications(e.target.value);
                setErrors({ ...errors, notifications: '' });
              }}
              sx={{ mt: 2 }}
            >
              <FormControlLabel
                value="all"
                control={<Radio color="success" />}
                label={
                  <Box>
                    <Typography variant="body2">All Notifications</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Receive all updates and alerts
                    </Typography>
                  </Box>
                }
                sx={{ mb: 1, alignItems: 'flex-start' }}
              />
              <FormControlLabel
                value="important"
                control={<Radio color="warning" />}
                label={
                  <Box>
                    <Typography variant="body2">Important Only</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Only critical updates and alerts
                    </Typography>
                  </Box>
                }
                sx={{ mb: 1, alignItems: 'flex-start' }}
              />
              <FormControlLabel
                value="none"
                control={<Radio color="error" />}
                label={
                  <Box>
                    <Typography variant="body2">None</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Disable all notifications
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: 'flex-start' }}
              />
            </RadioGroup>
            {errors.notifications ? (
              <FormHelperText>{errors.notifications}</FormHelperText>
            ) : (
              <FormHelperText>Choose how you want to be notified</FormHelperText>
            )}
          </FormControl>
        </Paper>

        <Divider />

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button onClick={handleReset} variant="outlined">
            Reset to Defaults
          </Button>
          <Button onClick={handleSave} variant="contained">
            Save Settings
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default CompleteRadioButtonExample;
```

---

## Usage Notes

1. **Always import necessary components** from `@mui/material`
2. **Use controlled components** with `useState` for proper state management
3. **Provide unique values** for each radio button option
4. **Include FormControl** wrapper for proper form structure
5. **Add FormLabel** for group titles and context
6. **Use FormHelperText** for descriptions and error messages
7. **Set proper color props** to match theme (primary #00A76F for Minimals)
8. **Consider accessibility** with proper labels and ARIA attributes
9. **Handle validation** appropriately with error states
10. **Add Typography component** import if using custom labels

## Customization Tips

- Use `sx` prop for custom styling
- Leverage MUI theme for consistent colors
- Add icons to labels for better visual hierarchy
- Use Box component for complex label layouts
- Consider responsive design with breakpoints
- Add transitions for smooth interactions
- Use Chip or Badge for additional context
- Combine with other form elements for complete forms
