# DataGrid Component Skill

Generate Material-UI DataGrid components based on user requirements.

## Available Variants

### 1. Basic DataGrid
- Simple table with columns and rows
- Default row height: 52px
- Basic column definitions
- No additional features

### 2. Sorting
- Click column headers to sort
- Multi-column sorting support
- Ascending/descending indicators
- Default sort configuration

### 3. Filtering
- Column-level filters
- Multiple filter operators
- Filter panel UI
- Filter model state management

### 4. Pagination
- Page size controls (5, 10, 25, 50, 100 rows)
- Page navigation
- Total row count display
- Server-side or client-side pagination

### 5. Row Selection
- Single or multiple row selection
- Checkbox column
- Selection state management
- onRowSelectionModelChange callback

### 6. Column Visibility
- Show/hide columns dynamically
- Column visibility panel
- Persist column visibility state
- Toggle individual columns

### 7. Dense
- Compact row height: 36px
- Reduced padding
- More rows visible in viewport
- density prop set to "compact"

### 8. Striped Rows
- Alternating row background colors
- Enhanced visual distinction
- Custom styling with sx prop
- Even/odd row differentiation

### 9. Cell Editing
- Inline cell editing
- Edit mode triggers (click, double-click)
- onCellEditCommit callback
- Editable column configuration

## Implementation Requirements

- Use @mui/x-data-grid package
- Include proper TypeScript types
- Handle loading and error states
- Implement responsive design
- Add proper accessibility attributes

## Usage

When a user requests a DataGrid component:
1. Identify which variant(s) they need
2. Generate appropriate column definitions
3. Create sample data if not provided
4. Include necessary MUI imports
5. Add proper state management
6. Include styling customizations
