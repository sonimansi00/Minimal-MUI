# Date Picker Component Templates

## Setup & Dependencies

### Required Packages

```bash
npm install @mui/x-date-pickers
npm install date-fns
```

### Provider Setup (App Level)

```jsx
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* Your app components */}
    </LocalizationProvider>
  );
}
```

---

## 1. Basic Date Picker

### Single Date Selection

```jsx
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

export default function BasicDatePicker() {
  const [value, setValue] = useState(null);

  return (
    <DatePicker
      label="Select Date"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

### With Validation

```jsx
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

export default function ValidatedDatePicker() {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);

    // Validation logic
    if (!newValue) {
      setError('Date is required');
    } else if (newValue > new Date()) {
      setError('Date cannot be in the future');
    } else {
      setError(null);
    }
  };

  return (
    <DatePicker
      label="Date of Birth"
      value={value}
      onChange={handleChange}
      maxDate={new Date()}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
}
```

### With Min/Max Dates

```jsx
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { addDays } from 'date-fns';

export default function RestrictedDatePicker() {
  const [value, setValue] = useState(null);
  const today = new Date();
  const maxDate = addDays(today, 90); // 90 days from now

  return (
    <DatePicker
      label="Appointment Date"
      value={value}
      onChange={setValue}
      minDate={today}
      maxDate={maxDate}
      shouldDisableDate={(date) => {
        // Disable weekends
        const day = date.getDay();
        return day === 0 || day === 6;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          helperText="Weekdays only, up to 90 days ahead"
        />
      )}
    />
  );
}
```

---

## 2. Date Range Picker

### Basic Range Selection

```jsx
import { useState } from 'react';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField, Box } from '@mui/material';

export default function BasicDateRangePicker() {
  const [value, setValue] = useState([null, null]);

  return (
    <DateRangePicker
      startText="Start Date"
      endText="End Date"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(startProps, endProps) => (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField {...startProps} />
          <TextField {...endProps} />
        </Box>
      )}
    />
  );
}
```

### With Preset Ranges

```jsx
import { useState } from 'react';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField, Box, Stack, Button } from '@mui/material';
import { subDays, startOfMonth, endOfMonth } from 'date-fns';

export default function PresetDateRangePicker() {
  const [value, setValue] = useState([null, null]);
  const today = new Date();

  const presets = [
    { label: 'Today', getValue: () => [today, today] },
    { label: 'Last 7 Days', getValue: () => [subDays(today, 6), today] },
    { label: 'Last 30 Days', getValue: () => [subDays(today, 29), today] },
    { label: 'This Month', getValue: () => [startOfMonth(today), endOfMonth(today)] },
  ];

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        {presets.map((preset) => (
          <Button
            key={preset.label}
            size="small"
            variant="outlined"
            onClick={() => setValue(preset.getValue())}
          >
            {preset.label}
          </Button>
        ))}
      </Stack>
      <DateRangePicker
        startText="Start Date"
        endText="End Date"
        value={value}
        onChange={setValue}
        renderInput={(startProps, endProps) => (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </Box>
        )}
      />
    </Box>
  );
}
```

### Single Input Range Picker

```jsx
import { useState } from 'react';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField } from '@mui/material';

export default function SingleInputRangePicker() {
  const [value, setValue] = useState([null, null]);

  return (
    <DateRangePicker
      startText="Start"
      endText="End"
      value={value}
      onChange={setValue}
      renderInput={(startProps, endProps) => (
        <TextField
          {...startProps}
          label="Date Range"
          helperText={`${startProps.inputProps.placeholder} - ${endProps.inputProps.placeholder}`}
        />
      )}
    />
  );
}
```

---

## 3. Time Picker

### Basic Time Picker

```jsx
import { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';

export default function BasicTimePicker() {
  const [value, setValue] = useState(null);

  return (
    <TimePicker
      label="Select Time"
      value={value}
      onChange={setValue}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

### With Time Constraints

```jsx
import { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';

export default function BusinessHoursTimePicker() {
  const [value, setValue] = useState(null);

  return (
    <TimePicker
      label="Meeting Time"
      value={value}
      onChange={setValue}
      minTime={new Date(0, 0, 0, 9)} // 9 AM
      maxTime={new Date(0, 0, 0, 17)} // 5 PM
      minutesStep={15}
      renderInput={(params) => (
        <TextField
          {...params}
          helperText="Business hours: 9:00 AM - 5:00 PM"
        />
      )}
    />
  );
}
```

### 24-Hour Format

```jsx
import { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';

export default function Time24Picker() {
  const [value, setValue] = useState(null);

  return (
    <TimePicker
      label="Time (24h)"
      value={value}
      onChange={setValue}
      ampm={false}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

---

## 4. Date Time Picker

### Basic Date Time Picker

```jsx
import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';

export default function BasicDateTimePicker() {
  const [value, setValue] = useState(null);

  return (
    <DateTimePicker
      label="Date & Time"
      value={value}
      onChange={setValue}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

### With Future Dates Only

```jsx
import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';

export default function FutureDateTimePicker() {
  const [value, setValue] = useState(null);
  const now = new Date();

  return (
    <DateTimePicker
      label="Scheduled For"
      value={value}
      onChange={setValue}
      minDateTime={now}
      renderInput={(params) => (
        <TextField
          {...params}
          helperText="Select a future date and time"
        />
      )}
    />
  );
}
```

### With Custom Input Format

```jsx
import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';

export default function FormattedDateTimePicker() {
  const [value, setValue] = useState(null);

  return (
    <DateTimePicker
      label="Event Date & Time"
      value={value}
      onChange={setValue}
      inputFormat="dd/MM/yyyy HH:mm"
      ampm={false}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

---

## 5. Static Picker

### Static Date Picker (Always Visible)

```jsx
import { useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';

export default function StaticCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      value={value}
      onChange={setValue}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

### Static Date Picker with Events

```jsx
import { useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField, Badge } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

export default function StaticCalendarWithEvents() {
  const [value, setValue] = useState(new Date());

  // Sample event dates
  const eventDates = [5, 12, 18, 25].map(
    day => new Date(2024, 0, day).toDateString()
  );

  const renderDay = (date, selectedDates, pickersDayProps) => {
    const hasEvent = eventDates.includes(date.toDateString());

    return (
      <Badge
        key={date.toString()}
        overlap="circular"
        badgeContent={hasEvent ? '•' : undefined}
        color="primary"
      >
        <PickersDay {...pickersDayProps} />
      </Badge>
    );
  };

  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      value={value}
      onChange={setValue}
      renderDay={renderDay}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
```

---

## 6. Mobile Picker

### Mobile-Optimized Date Picker

```jsx
import { useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';

export default function MobileDateSelector() {
  const [value, setValue] = useState(null);

  return (
    <MobileDatePicker
      label="Select Date"
      value={value}
      onChange={setValue}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  );
}
```

### Responsive Date Picker

```jsx
import { useState } from 'react';
import { DatePicker, MobileDatePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField, useMediaQuery, useTheme } from '@mui/material';

export default function ResponsiveDatePicker() {
  const [value, setValue] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Picker = isMobile ? MobileDatePicker : DesktopDatePicker;

  return (
    <Picker
      label="Select Date"
      value={value}
      onChange={setValue}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  );
}
```

---

## Advanced Patterns

### Form Integration (React Hook Form)

```jsx
import { Controller, useForm } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button, Stack } from '@mui/material';

export default function DatePickerForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      startDate: null,
      endDate: null,
    },
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Controller
          name="startDate"
          control={control}
          rules={{ required: 'Start date is required' }}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Start Date"
              value={field.value}
              onChange={field.onChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          rules={{ required: 'End date is required' }}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="End Date"
              value={field.value}
              onChange={field.onChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          )}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
```

### Custom Styled Date Picker

```jsx
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function CustomStyledDatePicker() {
  const [value, setValue] = useState(null);

  return (
    <DatePicker
      label="Custom Styled"
      value={value}
      onChange={setValue}
      renderInput={(params) => <StyledTextField {...params} />}
    />
  );
}
```

### With Clear Button

```jsx
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function ClearableDatePicker() {
  const [value, setValue] = useState(null);

  return (
    <DatePicker
      label="Select Date"
      value={value}
      onChange={setValue}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {value && (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setValue(null)}
                      edge="end"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
```

### Localized Date Picker

```jsx
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr, de, es } from 'date-fns/locale';

export default function LocalizedDatePicker({ locale = 'en' }) {
  const [value, setValue] = useState(null);

  const localeMap = {
    en: undefined,
    fr: fr,
    de: de,
    es: es,
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={localeMap[locale]}
    >
      <DatePicker
        label="Select Date"
        value={value}
        onChange={setValue}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
```

---

## TypeScript Types

```typescript
import { Dispatch, SetStateAction } from 'react';

// Basic date value type
type DateValue = Date | null;

// Date range value type
type DateRangeValue = [DateValue, DateValue];

// Date picker props interface
interface DatePickerProps {
  label: string;
  value: DateValue;
  onChange: (value: DateValue) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  inputFormat?: string;
}

// Date range picker props interface
interface DateRangePickerProps {
  startText: string;
  endText: string;
  value: DateRangeValue;
  onChange: (value: DateRangeValue) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

// Time picker props interface
interface TimePickerProps {
  label: string;
  value: DateValue;
  onChange: (value: DateValue) => void;
  minTime?: Date;
  maxTime?: Date;
  minutesStep?: number;
  ampm?: boolean;
}

// Form values with dates
interface FormValues {
  startDate: DateValue;
  endDate: DateValue;
  appointmentTime: DateValue;
}
```

---

## Common Props Reference

### DatePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date \| null` | `null` | Selected date value |
| `onChange` | `(date: Date \| null) => void` | - | Callback fired on date change |
| `label` | `string` | - | Label for the input field |
| `disabled` | `boolean` | `false` | Disable the picker |
| `readOnly` | `boolean` | `false` | Make picker read-only |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `disableFuture` | `boolean` | `false` | Disable future dates |
| `disablePast` | `boolean` | `false` | Disable past dates |
| `shouldDisableDate` | `(date: Date) => boolean` | - | Disable specific dates |
| `inputFormat` | `string` | `'MM/dd/yyyy'` | Format for input display |
| `views` | `Array<'year' \| 'month' \| 'day'>` | `['year', 'month', 'day']` | Available views |
| `openTo` | `'year' \| 'month' \| 'day'` | `'day'` | View to show on open |

### Additional Customization

```jsx
// Custom day rendering
const renderDay = (day, selectedDates, pickersDayProps) => {
  return <PickersDay {...pickersDayProps} />;
};

// Custom toolbar
const CustomToolbar = (props) => {
  return (
    <div>
      {/* Custom toolbar content */}
    </div>
  );
};

// Usage
<DatePicker
  renderDay={renderDay}
  components={{
    Toolbar: CustomToolbar,
  }}
/>
```

---

## Best Practices

1. **Always wrap with LocalizationProvider** at app level
2. **Use controlled components** for form integration
3. **Add proper validation** with error states
4. **Provide helper text** for user guidance
5. **Set appropriate min/max dates** for context
6. **Consider timezone** handling for datetime pickers
7. **Test keyboard navigation** for accessibility
8. **Use responsive variants** for mobile optimization
9. **Format dates consistently** across your app
10. **Handle null/undefined** values gracefully

---

## Troubleshooting

### Common Issues

**Issue:** "AdapterDateFns not found"
**Solution:** Install `date-fns` package

**Issue:** "Date picker not opening"
**Solution:** Check if LocalizationProvider wraps the component

**Issue:** "Date format not working"
**Solution:** Use correct format string for date-fns

**Issue:** "Validation not working"
**Solution:** Ensure minDate/maxDate are Date objects, not strings

**Issue:** "Styling conflicts"
**Solution:** Use styled-components or sx prop for custom styles
