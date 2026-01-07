# Stepper Component Template

```jsx
import React from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

export default function StepperTemplate() {
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
```
