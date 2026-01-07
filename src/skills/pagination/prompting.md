# Pagination Component Prompting Guide

## Understanding User Requests

### Direct Requests
When users explicitly ask for pagination:
- "Create a pagination component"
- "Add pagination to the table"
- "I need page navigation"
- "Add pagination controls"

### Implicit Requests
Pagination may be needed when users mention:
- "Show data across multiple pages"
- "Navigate through items"
- "Display 10 items per page"
- "Add table navigation"
- "Split the list into pages"

## Key Questions to Ask

### 1. Variant Selection
- "Which style do you prefer: basic, outlined, or rounded?"
- "Do you need a simple pagination or table pagination?"

### 2. Size Selection
- "What size pagination do you need: small, medium, or large?"
- Default to medium if not specified

### 3. Color Selection
- "What color scheme: primary, secondary, or standard?"
- Match existing theme/brand colors
- Default to primary for emphasis, standard for neutral

### 4. Functionality
- "Do you need a rows-per-page selector?" (for table pagination)
- "Should the pagination be controlled or uncontrolled?"
- "How many items per page?"

### 5. Custom Requirements
- "Do you need custom icons for navigation?"
- "Any specific styling requirements?"
- "Should it show page ranges or just numbers?"

## Context Clues

### When to Use Basic Pagination
- Simple content lists
- Blog posts navigation
- Image galleries
- Search results

### When to Use Table Pagination
- Data tables
- Admin dashboards
- Data grids
- Complex datasets with filtering

### When to Use Outlined Variant
- Light backgrounds
- Minimalist designs
- Need clear button boundaries

### When to Use Rounded Variant
- Modern UI designs
- Mobile-first interfaces
- Friendly, approachable aesthetics

## Default Assumptions

If user doesn't specify:
1. **Variant**: Basic (no outline, standard shape)
2. **Size**: Medium (40px)
3. **Color**: Primary
4. **Shape**: Standard (8px border-radius)
5. **Count**: 10 (total pages)
6. **Initial Page**: 1

## Example Interpretations

### User: "Add pagination to my user list"
**Interpretation**:
- Basic pagination
- Medium size
- Primary color
- Controlled state (for data fetching)
- Show page numbers with prev/next

### User: "Create a table with pagination"
**Interpretation**:
- TablePagination component
- Rows per page options: [5, 10, 25]
- Medium size
- Standard color
- Show page info and navigation

### User: "I need rounded pagination buttons"
**Interpretation**:
- Basic pagination with shape="rounded"
- Medium size
- Primary or specified color
- Standard pagination behavior

### User: "Add small pagination controls"
**Interpretation**:
- Basic pagination
- Size="small" (32px)
- Primary color
- Compact design for limited space

## Implementation Approach

1. **Clarify Requirements**: Ask questions if variant/size/color unclear
2. **Choose Component**: Pagination vs TablePagination
3. **Apply Styling**: Size, color, shape props
4. **Add State Management**: Controlled component with useState
5. **Integrate with Data**: Connect to data fetching/filtering logic
6. **Test Behavior**: Ensure page changes work correctly

## Common Patterns

### Pattern 1: Simple Blog Pagination
```
- Basic pagination
- Centered alignment
- Primary color
- Medium size
- Page numbers with ellipsis
```

### Pattern 2: Admin Table Pagination
```
- TablePagination
- Rows per page selector
- Standard color
- Right-aligned
- Dense spacing
```

### Pattern 3: Mobile-Friendly Pagination
```
- Small size
- Rounded variant
- Primary color
- Hide page numbers on mobile
- Show only prev/next buttons
```

### Pattern 4: Minimal Pagination
```
- Outlined variant
- Standard color
- Medium size
- Clean, subtle appearance
```

## Error Prevention

### Don't assume:
- Total number of pages without data context
- Items per page without user specification
- Whether pagination should be server-side or client-side

### Always consider:
- Current data structure
- Existing component patterns in the project
- Performance implications (large datasets)
- Mobile responsiveness
