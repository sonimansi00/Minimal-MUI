# Tabs Component Template

```jsx
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

export default function TabsTemplate() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
    </Box>
  );
}
```
