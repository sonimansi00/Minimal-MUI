# DataGrid Prompting Guide

## User Request Interpretation

### Identifying DataGrid Requirements

When users request a table, grid, or data display component, analyze their requirements to determine:

1. **Data Structure**: What kind of data will be displayed?
2. **Interactivity**: What actions can users perform?
3. **Features**: Which DataGrid capabilities are needed?
4. **Styling**: Any specific visual requirements?

## Common User Requests

### "Create a table to display..."
**Interpretation**: Basic DataGrid
**Features**:
- Column definitions based on data fields
- Basic styling
- No advanced features unless specified

### "I need a sortable table..."
**Interpretation**: DataGrid with Sorting
**Features**:
- Basic DataGrid + sorting capability
- Sort indicators on headers
- Multi-column sorting if "multiple columns" mentioned

### "Show a table with search/filter..."
**Interpretation**: DataGrid with Filtering
**Features**:
- Basic DataGrid + filter toolbar
- Column-level filters
- Filter operators appropriate to data types

### "Add pagination to the table..."
**Interpretation**: DataGrid with Pagination
**Features**:
- Basic DataGrid + pagination controls
- Configurable page sizes
- Server-side pagination if data source is external

### "Users should be able to select rows..."
**Interpretation**: DataGrid with Row Selection
**Features**:
- Basic DataGrid + checkboxes
- Single or multiple selection based on context
- Selection state management

### "Make the table more compact..."
**Interpretation**: Dense DataGrid
**Features**:
- Reduced row height (36px)
- Compact density setting
- Optimized for displaying more data

### "Add alternating row colors..."
**Interpretation**: Striped Rows DataGrid
**Features**:
- Custom styling for even/odd rows
- Enhanced visual distinction
- Maintains other requested features

### "Users need to edit data inline..."
**Interpretation**: DataGrid with Cell Editing
**Features**:
- Editable columns configuration
- Edit mode handling
- Save/update callbacks

### "Hide/show columns dynamically..."
**Interpretation**: DataGrid with Column Visibility
**Features**:
- Column visibility controls
- Column toggle UI
- State persistence

## Keywords to Watch For

### Sorting Keywords
- "sort", "sortable", "order by", "arrange", "organize"
- Action: Enable sorting feature

### Filtering Keywords
- "filter", "search", "find", "narrow down", "refine"
- Action: Enable filtering feature

### Pagination Keywords
- "paginate", "pages", "page size", "show X rows", "next/previous"
- Action: Enable pagination

### Selection Keywords
- "select", "choose", "pick", "check", "highlight rows"
- Action: Enable row selection

### Editing Keywords
- "edit", "modify", "update", "change values", "inline editing"
- Action: Enable cell editing

### Density Keywords
- "compact", "dense", "tight", "more rows", "smaller"
- Action: Use dense variant

### Visibility Keywords
- "hide columns", "show/hide", "toggle columns", "column visibility"
- Action: Enable column visibility controls

## Combining Multiple Features

### Example 1: "Create a sortable, paginated table with row selection"
**Variant**: Combined (Sorting + Pagination + Row Selection)
**Implementation**:
```javascript
- sortingMode="client"
- paginationMode="client"
- checkboxSelection
- pageSize options
```

### Example 2: "I need a compact table where users can edit cells and filter data"
**Variant**: Combined (Dense + Cell Editing + Filtering)
**Implementation**:
```javascript
- density="compact"
- editable columns
- filterMode enabled
- filter toolbar
```

### Example 3: "Show a striped table with sortable columns and column visibility controls"
**Variant**: Combined (Striped + Sorting + Column Visibility)
**Implementation**:
```javascript
- Custom striped styling (sx prop)
- sortingMode enabled
- columnVisibilityModel
- Column menu with visibility toggles
```

## Data Type Detection

### Numeric Data
- **Features**: Right-aligned columns, numeric filters
- **Keywords**: "id", "count", "total", "amount", "price", "quantity", "age"

### Date/Time Data
- **Features**: Date filters, date formatting
- **Keywords**: "date", "time", "created", "updated", "timestamp"

### Text Data
- **Features**: Left-aligned columns, string filters
- **Keywords**: "name", "title", "description", "email", "address"

### Boolean Data
- **Features**: Checkbox or chip display, boolean filters
- **Keywords**: "active", "status", "enabled", "visible", "published"

### Actions
- **Features**: Render buttons or icons
- **Keywords**: "actions", "operations", "edit", "delete", "view"

## Clarifying Questions

### When User Request is Unclear

Ask about:
1. **Data source**: "What data will be displayed?" or "Can you provide sample data structure?"
2. **Required features**: "Do you need sorting, filtering, or pagination?"
3. **User interactions**: "Should users be able to select or edit rows?"
4. **Visual style**: "Do you prefer a compact or standard row height?"
5. **Performance**: "How many rows will typically be displayed?" (helps decide on pagination/virtualization)

### When to Use Which Variant

- **< 50 rows**: Basic or any variant, no pagination required
- **50-1000 rows**: Add pagination, consider filtering
- **> 1000 rows**: Pagination required, consider server-side operations
- **User needs to find specific data**: Add filtering
- **User needs to compare data**: Add sorting
- **User performs bulk actions**: Add row selection
- **Limited screen space**: Use dense variant
- **Many columns**: Add column visibility controls
- **Data updates frequently**: Consider cell editing

## Default Assumptions

Unless specified otherwise:
1. **Page size**: Default to 10 rows per page
2. **Sorting**: Client-side sorting
3. **Filtering**: Client-side filtering
4. **Selection**: Multiple selection if enabled
5. **Row height**: Standard (52px)
6. **Column widths**: Auto-calculated or flex-based
7. **Responsive**: Desktop-first, mobile-friendly

## Response Format

When generating a DataGrid component:
1. State which variant(s) are being used
2. List all features included
3. Provide complete implementation code
4. Include sample data if not provided by user
5. Add comments explaining key configurations
6. Mention any additional setup needed (imports, dependencies)
