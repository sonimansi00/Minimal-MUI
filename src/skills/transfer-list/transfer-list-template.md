# Transfer List Component Template

```jsx
import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemText, Button } from '@mui/material';

export default function TransferListTemplate() {
  const [left, setLeft] = useState([0, 1, 2]);
  const [right, setRight] = useState([3, 4]);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <List>
          {left.map((value) => (
            <ListItem key={value}>
              <ListItemText primary={`Item ${value}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item>
        <Button>→</Button>
      </Grid>
      <Grid item>
        <List>
          {right.map((value) => (
            <ListItem key={value}>
              <ListItemText primary={`Item ${value}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
```
