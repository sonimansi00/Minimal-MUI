# DataGrid Component Templates

Complete React code templates for all DataGrid variants using MUI v5 DataGrid.

## Installation

```bash
npm install @mui/x-data-grid
```

## Sample Data Structure

```javascript
const sampleRows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer', status: true, createdAt: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer', status: true, createdAt: '2024-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager', status: false, createdAt: '2024-03-10' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer', status: true, createdAt: '2024-01-25' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer', status: true, createdAt: '2024-02-05' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 33, role: 'Designer', status: false, createdAt: '2024-03-15' },
  { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 45, role: 'Manager', status: true, createdAt: '2024-01-08' },
  { id: 8, name: 'Fiona Green', email: 'fiona@example.com', age: 27, role: 'Designer', status: true, createdAt: '2024-02-28' },
  { id: 9, name: 'George Lucas', email: 'george@example.com', age: 50, role: 'Manager', status: true, createdAt: '2024-01-12' },
  { id: 10, name: 'Helen Mirren', email: 'helen@example.com', age: 36, role: 'Developer', status: false, createdAt: '2024-03-22' },
];

const baseColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', width: 90, type: 'number' },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'status', headerName: 'Status', width: 100, type: 'boolean' },
  { field: 'createdAt', headerName: 'Created At', width: 130, type: 'date' },
];
```

---

## 1. Basic DataGrid

```jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const BasicDataGrid = () => {
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8',
          },
        }}
      />
    </Box>
  );
};

export default BasicDataGrid;
```

---

## 2. DataGrid with Sorting

```jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const SortingDataGrid = () => {
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  // Initial sort configuration
  const initialSortModel = [
    {
      field: 'name',
      sort: 'asc',
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: initialSortModel,
          },
        }}
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8',
          },
          '& .MuiDataGrid-sortIcon': {
            color: '#637381',
          },
          '& .MuiDataGrid-columnHeader--sorted .MuiDataGrid-sortIcon': {
            color: '#1976D2',
          },
        }}
      />
    </Box>
  );
};

export default SortingDataGrid;
```

---

## 3. DataGrid with Filtering

```jsx
import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const FilteringDataGrid = () => {
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 33, role: 'Designer' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 45, role: 'Manager' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8',
          },
          '& .MuiDataGrid-toolbarContainer': {
            padding: '16px',
            borderBottom: '1px solid #DFE3E8',
          },
        }}
      />
    </Box>
  );
};

export default FilteringDataGrid;
```

---

## 4. DataGrid with Pagination

```jsx
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const PaginationDataGrid = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 33, role: 'Designer' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 45, role: 'Manager' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', age: 27, role: 'Designer' },
    { id: 9, name: 'George Lucas', email: 'george@example.com', age: 50, role: 'Manager' },
    { id: 10, name: 'Helen Mirren', email: 'helen@example.com', age: 36, role: 'Developer' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: '1px solid #DFE3E8',
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    </Box>
  );
};

export default PaginationDataGrid;
```

---

## 5. DataGrid with Row Selection

```jsx
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const RowSelectionDataGrid = () => {
  const [selectionModel, setSelectionModel] = useState([]);

  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Selected rows: {selectionModel.length}
        </Typography>
      </Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
          sx={{
            border: '1px solid #DFE3E8',
            borderRadius: '8px',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#F4F6F8',
              borderBottom: '1px solid #DFE3E8',
              fontSize: '14px',
              fontWeight: 600,
              color: '#212B36',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #DFE3E8',
              fontSize: '14px',
              color: '#212B36',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#F4F6F8',
            },
            '& .MuiDataGrid-row.Mui-selected': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            },
            '& .MuiDataGrid-row.Mui-selected:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.12)',
            },
            '& .MuiCheckbox-root': {
              color: '#919EAB',
            },
            '& .MuiCheckbox-root.Mui-checked': {
              color: '#1976D2',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default RowSelectionDataGrid;
```

---

## 6. DataGrid with Column Visibility

```jsx
import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const ColumnVisibilityDataGrid = () => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: true,
    name: true,
    email: true,
    age: true,
    role: true,
    status: false, // Hidden by default
  });

  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer', status: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer', status: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager', status: false },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer', status: true },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer', status: true },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'status', headerName: 'Status', width: 120, type: 'boolean' },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) =>
          setColumnVisibilityModel(newModel)
        }
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8',
          },
          '& .MuiDataGrid-toolbarContainer': {
            padding: '16px',
            borderBottom: '1px solid #DFE3E8',
          },
        }}
      />
    </Box>
  );
};

export default ColumnVisibilityDataGrid;
```

---

## 7. Dense DataGrid

```jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const DenseDataGrid = () => {
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 33, role: 'Designer' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 45, role: 'Manager' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', age: 27, role: 'Designer' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
            minHeight: '40px !important',
            maxHeight: '40px !important',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          '& .MuiDataGrid-row': {
            minHeight: '36px !important',
            maxHeight: '36px !important',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8',
          },
        }}
      />
    </Box>
  );
};

export default DenseDataGrid;
```

---

## 8. Striped Rows DataGrid

```jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const StripedRowsDataGrid = () => {
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 33, role: 'Designer' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 45, role: 'Manager' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Age', width: 100, type: 'number' },
    { field: 'role', headerName: 'Role', width: 150 },
  ];

  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          border: '1px solid #DFE3E8',
          borderRadius: '8px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F4F6F8',
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            fontWeight: 600,
            color: '#212B36',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #DFE3E8',
            fontSize: '14px',
            color: '#212B36',
          },
          // Striped rows styling
          '& .MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#FFFFFF',
          },
          '& .MuiDataGrid-row:nth-of-type(even)': {
            backgroundColor: '#F9FAFB',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#F4F6F8 !important',
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'
        }
      />
    </Box>
  );
};

export default StripedRowsDataGrid;
```

---

## 9. Cell Editing DataGrid

```jsx
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const CellEditingDataGrid = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer' },
  ]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, editable: false },
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'email', headerName: 'Email', width: 220, editable: true },
    { field: 'age', headerName: 'Age', width: 100, type: 'number', editable: true },
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Developer', 'Designer', 'Manager'],
    },
  ];

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleProcessRowUpdateError = (error) => {
    console.error('Error updating row:', error);
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Double-click on cells to edit (except ID column)
        </Typography>
      </Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={handleProcessRowUpdateError}
          sx={{
            border: '1px solid #DFE3E8',
            borderRadius: '8px',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#F4F6F8',
              borderBottom: '1px solid #DFE3E8',
              fontSize: '14px',
              fontWeight: 600,
              color: '#212B36',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #DFE3E8',
              fontSize: '14px',
              color: '#212B36',
            },
            '& .MuiDataGrid-cell--editing': {
              backgroundColor: '#FFFFFF',
              border: '2px solid #1976D2',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#F4F6F8',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CellEditingDataGrid;
```

---

## Combined Example: Advanced DataGrid

```jsx
import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const AdvancedDataGrid = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer', status: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, role: 'Designer', status: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 42, role: 'Manager', status: false },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 31, role: 'Developer', status: true },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 39, role: 'Developer', status: true },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', age: 33, role: 'Designer', status: false },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', age: 45, role: 'Manager', status: true },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', age: 27, role: 'Designer', status: true },
    { id: 9, name: 'George Lucas', email: 'george@example.com', age: 50, role: 'Manager', status: true },
    { id: 10, name: 'Helen Mirren', email: 'helen@example.com', age: 36, role: 'Developer', status: false },
  ]);

  const [selectionModel, setSelectionModel] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: true,
    name: true,
    email: true,
    age: true,
    role: true,
    status: false,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, editable: false },
    { field: 'name', headerName: 'Name', width: 160, editable: true },
    { field: 'email', headerName: 'Email', width: 200, editable: true },
    { field: 'age', headerName: 'Age', width: 90, type: 'number', editable: true },
    {
      field: 'role',
      headerName: 'Role',
      width: 130,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Developer', 'Designer', 'Manager'],
    },
    { field: 'status', headerName: 'Active', width: 100, type: 'boolean', editable: true },
  ];

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Advanced DataGrid
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Features: Sorting, Filtering, Pagination, Row Selection, Column Visibility, Cell Editing, Striped Rows
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Selected rows: {selectionModel.length}
        </Typography>
      </Box>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={setSelectionModel}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={setColumnVisibilityModel}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          initialState={{
            sorting: {
              sortModel: [{ field: 'name', sort: 'asc' }],
            },
          }}
          sx={{
            border: '1px solid #DFE3E8',
            borderRadius: '8px',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#F4F6F8',
              borderBottom: '1px solid #DFE3E8',
              fontSize: '14px',
              fontWeight: 600,
              color: '#212B36',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #DFE3E8',
              fontSize: '14px',
              color: '#212B36',
            },
            '& .MuiDataGrid-row:nth-of-type(odd)': {
              backgroundColor: '#FFFFFF',
            },
            '& .MuiDataGrid-row:nth-of-type(even)': {
              backgroundColor: '#F9FAFB',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#F4F6F8 !important',
            },
            '& .MuiDataGrid-row.Mui-selected': {
              backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
            },
            '& .MuiDataGrid-row.Mui-selected:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.12) !important',
            },
            '& .MuiDataGrid-cell--editing': {
              backgroundColor: '#FFFFFF',
              border: '2px solid #1976D2',
            },
            '& .MuiCheckbox-root': {
              color: '#919EAB',
            },
            '& .MuiCheckbox-root.Mui-checked': {
              color: '#1976D2',
            },
            '& .MuiDataGrid-sortIcon': {
              color: '#637381',
            },
            '& .MuiDataGrid-columnHeader--sorted .MuiDataGrid-sortIcon': {
              color: '#1976D2',
            },
            '& .MuiDataGrid-toolbarContainer': {
              padding: '16px',
              borderBottom: '1px solid #DFE3E8',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid #DFE3E8',
              backgroundColor: '#FFFFFF',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AdvancedDataGrid;
```

---

## TypeScript Types

```typescript
import { GridColDef, GridRowsProp, GridRowSelectionModel } from '@mui/x-data-grid';

// Row interface example
interface Row {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
  status?: boolean;
  createdAt?: string;
}

// Column definitions with TypeScript
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'email', headerName: 'Email', width: 220, editable: true },
  { field: 'age', headerName: 'Age', width: 100, type: 'number', editable: true },
  { field: 'role', headerName: 'Role', width: 150 },
];

// Rows with TypeScript
const rows: GridRowsProp<Row> = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 35, role: 'Developer' },
  // ... more rows
];
```

---

## Custom Styling Examples

### Dark Theme

```jsx
sx={{
  backgroundColor: '#1A1A1A',
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#2D2D2D',
    borderBottom: '1px solid #404040',
    color: '#E0E0E0',
  },
  '& .MuiDataGrid-cell': {
    borderBottom: '1px solid #404040',
    color: '#E0E0E0',
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: '#2D2D2D',
  },
}}
```

### Custom Row Heights

```jsx
sx={{
  '& .MuiDataGrid-row': {
    minHeight: '60px !important',
    maxHeight: '60px !important',
  },
  '& .MuiDataGrid-cell': {
    padding: '16px',
  },
}}
```

### Custom Border Radius

```jsx
sx={{
  border: '1px solid #DFE3E8',
  borderRadius: '16px',
  overflow: 'hidden',
}}
```

---

## Performance Tips

1. **Virtualization**: DataGrid automatically virtualizes rows for large datasets
2. **Column Width**: Use `flex` instead of fixed `width` for responsive columns
3. **Pagination**: Use server-side pagination for datasets > 1000 rows
4. **Filtering**: Implement server-side filtering for large datasets
5. **Memoization**: Wrap columns definition in `useMemo` to prevent re-renders

```jsx
const columns = useMemo(
  () => [
    { field: 'id', headerName: 'ID', width: 70 },
    // ... more columns
  ],
  []
);
```

---

## Common Props Reference

- `rows`: Array of data objects (required)
- `columns`: Array of column definitions (required)
- `checkboxSelection`: Enable row selection checkboxes
- `density`: "compact" | "standard" | "comfortable"
- `pageSizeOptions`: Array of page size options
- `paginationModel`: Current pagination state
- `onPaginationModelChange`: Pagination change handler
- `rowSelectionModel`: Selected row IDs
- `onRowSelectionModelChange`: Selection change handler
- `columnVisibilityModel`: Column visibility state
- `onColumnVisibilityModelChange`: Visibility change handler
- `processRowUpdate`: Cell edit handler
- `initialState`: Initial sort, filter, pagination state
- `slots`: Custom components (toolbar, pagination, etc.)
- `sx`: Custom styling
