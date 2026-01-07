# Tree View Component Template

```jsx
import React from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function TreeViewTemplate() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Parent">
        <TreeItem nodeId="2" label="Child 1" />
        <TreeItem nodeId="3" label="Child 2" />
      </TreeItem>
    </TreeView>
  );
}
```
