# Skill: Dashboard State Management

## PURPOSE

Standardize how **UI state** is handled across all dashboard components.

This skill defines **what state exists and how it is updated**, NOT how it is rendered or where data comes from.

---

## ROLE

You are a **deterministic UI state management engine**.

You generate **clean, predictable, production-ready state logic** that can be reused across the dashboard.

You do NOT:

- Render UI
- Call APIs
- Perform business logic
- Transform or compute domain data

---

## USED FOR

This skill is used by:

- Tables
- Forms
- Tabs
- Lists
- Cards
- Modals
- Drawers

---

## STATE TYPES HANDLED (ONLY)

This skill MUST handle **only** the following UI state types:

1. Loading state
2. Error state
3. Empty state
4. Selected items state
5. Pagination state
6. Filter state

No additional state types are allowed.

---

## CORE PRINCIPLES (NON-NEGOTIABLE)

- UI-agnostic (no JSX)
- No API calls
- No business rules
- No derived or inferred state
- Flat and predictable state shape
- Explicit state updates only
- Easy to compose with API Integration Skill

---

## DEFAULT STATE SHAPE (MANDATORY)

ALL generated state MUST follow this exact structure:

```js
const initialState = {
  loading: false,
  error: null,
  empty: false,

  selected: [],

  pagination: {
    page: 0,
    pageSize: 10,
    total: 0,
  },

  filters: {},
};
```

Deviation is NOT allowed.

---

## STATE DEFINITIONS

### 1. Loading State

- Type: boolean
- Represents UI loading condition only

```js
loading: false;
```

---

### 2. Error State

- Type: string | null
- UI-level error messages only
- No error objects or stack traces

```js
error: null;
```

---

### 3. Empty State

- Type: boolean
- Indicates there is nothing to render
- MUST be set explicitly (never inferred)

```js
empty: false;
```

---

### 4. Selected Items State

- Type: array
- Used for row selection, multi-select, cards, lists
- Stores identifiers only, never objects

```js
selected: [];
```

---

### 5. Pagination State

- Stored as a single object
- Page index is zero-based

```js
pagination: {
  page: 0,
  pageSize: 10,
  total: 0,
}
```

---

### 6. Filter State

- Type: object
- Keys are dynamic
- Values MUST be primitives only

```js
filters: {
}
```

---

## STATE UPDATE RULES

### ALLOWED

- Toggle loading
- Set or clear error
- Set empty state
- Update selected items
- Update pagination values
- Update filters

### FORBIDDEN

- Mutating state directly
- Coupling state changes to API calls
- Auto-deriving empty state
- Resetting unrelated state

---

## CANONICAL STATE ACTIONS (MANDATORY)

Generated logic MUST expose ONLY these actions:

```js
setLoading(boolean);
setError(string | null);
setEmpty(boolean);

setSelected(array);
clearSelected();

setPage(number);
setPageSize(number);
setTotal(number);

setFilters(object);
updateFilter(key, value);
clearFilters();
```

No additional actions are allowed.

---

## IMPLEMENTATION STYLE

- Use `useState` for simple components
- Use `useReducer` for complex components
- Reducer actions MUST be explicit and flat
- No nested reducers
- No middleware

---

## CANONICAL REDUCER IMPLEMENTATION

```js
function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'SET_EMPTY':
      return { ...state, empty: action.payload };

    case 'SET_SELECTED':
      return { ...state, selected: action.payload };

    case 'CLEAR_SELECTED':
      return { ...state, selected: [] };

    case 'SET_PAGE':
      return {
        ...state,
        pagination: { ...state.pagination, page: action.payload },
      };

    case 'SET_PAGE_SIZE':
      return {
        ...state,
        pagination: { ...state.pagination, pageSize: action.payload },
      };

    case 'SET_TOTAL':
      return {
        ...state,
        pagination: { ...state.pagination, total: action.payload },
      };

    case 'SET_FILTERS':
      return { ...state, filters: action.payload };

    case 'UPDATE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.key]: action.value,
        },
      };

    case 'CLEAR_FILTERS':
      return { ...state, filters: {} };

    default:
      return state;
  }
}
```

---

## INTEGRATION RULES

- This skill MUST be composed with:
  - API Integration Skill
  - Form Skill
  - Table / Tabs / List Skills
- This skill MUST NOT render UI
- UI components only **consume** state

---

## ABSOLUTE FORBIDDEN BEHAVIOR

- API calls
- useEffect with side effects
- Validation logic
- Business logic
- UI rendering
- Styling logic
- Data transformation

---

## SUCCESS CRITERIA

The output is valid ONLY if:

- State shape matches exactly
- Logic is UI-agnostic
- No API or business logic exists
- State is reusable across components
- Updates are explicit and predictable
