# Skill: Dashboard API Integration (Axios)

## PURPOSE

Provide **clean, predictable, and standardized API interaction patterns** using **Axios** for dashboard applications.

This skill defines **how API requests are executed and handled**, NOT how data is displayed or interpreted.

---

## ROLE

You are a **deterministic API integration engine**.

You generate **production-ready Axios-based API logic** that integrates cleanly with dashboard state management.

You do NOT:

- Render UI
- Apply business logic
- Decide when APIs are called
- Transform domain data

---

## USED FOR

This skill is used for:

- Page-level data fetching
- Form submissions
- Create / Update / Delete operations
- Refreshing table and list data

---

## OPERATIONS SUPPORTED (ONLY)

- GET
- POST
- PUT
- PATCH
- DELETE

No other operations are allowed.

---

## CORE PRINCIPLES (NON-NEGOTIABLE)

- UI-agnostic (no JSX)
- Axios-only (no fetch)
- No business rules
- Predictable request lifecycle
- Explicit success and error handling
- Easy composition with State Management Skill

---

## REQUEST LIFECYCLE (MANDATORY)

ALL API interactions MUST follow this lifecycle:

1. Start request
2. Set loading state
3. Clear previous error
4. Execute Axios request
5. Normalize response
6. Handle success
7. Handle error
8. End loading state

Skipping any step is NOT allowed.

---

## STANDARD API RESPONSE SHAPE (MANDATORY)

ALL API responses MUST be normalized into this structure:

```js
{
  success: boolean,
  data: any,
  error: string | null
}
```

No deviations are allowed.

---

## NORMALIZATION RULES

### Successful Response

- `success: true`
- `data`: Axios response data
- `error: null`

### Failed Response

- `success: false`
- `data: null`
- `error`: human-readable string

---

## FORBIDDEN RESPONSE DATA

- Raw Axios response objects
- HTTP status codes exposed to UI
- Headers
- Error stacks
- AxiosError objects

---

## AXIOS CLIENT RULES

- Use a single Axios instance
- Base URL must be configured once
- Interceptors MAY be used for headers
- Authentication logic is OUT OF SCOPE

---

## CANONICAL AXIOS CLIENT (MANDATORY)

```js
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

---

## CANONICAL AXIOS REQUEST FUNCTION (MANDATORY)

ALL API calls MUST go through this function:

```js
export async function apiRequest({ method, url, data, params }) {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
    });

    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error?.response?.data?.message || error?.message || 'Something went wrong',
    };
  }
}
```

Deviation is NOT allowed.

---

## API OPERATION PATTERNS

### 1. GET (Fetch Data)

- Used for lists, tables, page data
- Accepts query params
- No side effects

```js
apiRequest({
  method: 'GET',
  url: '/endpoint',
  params,
});
```

---

### 2. POST (Create)

- Used for form submissions
- Payload required

```js
apiRequest({
  method: 'POST',
  url: '/endpoint',
  data: payload,
});
```

---

### 3. PUT / PATCH (Update)

- Used for updating resources
- Resource identifier required

```js
apiRequest({
  method: 'PUT',
  url: `/endpoint/${id}`,
  data: payload,
});
```

---

### 4. DELETE (Remove)

- Used for deletions
- No payload

```js
apiRequest({
  method: 'DELETE',
  url: `/endpoint/${id}`,
});
```

---

## STATE MANAGEMENT INTEGRATION (MANDATORY)

This skill MUST integrate with the **Dashboard State Management Skill**.

### Required State Hooks

- `setLoading(boolean)`
- `setError(string | null)`
- `setEmpty(boolean)` (optional)

---

## CANONICAL API + STATE FLOW (MANDATORY)

```js
async function executeRequest(requestFn, state) {
  state.setLoading(true);
  state.setError(null);

  const response = await requestFn();

  if (!response.success) {
    state.setError(response.error);
  }

  state.setLoading(false);
  return response;
}
```

This function coordinates API calls with UI state.

---

## EMPTY STATE HANDLING

- Empty state MUST NOT be inferred inside this skill
- Caller decides when to call `setEmpty(true)`
- API layer does not interpret data meaning

---

## FORBIDDEN BEHAVIOR

- API calls inside UI components
- JSX or rendering logic
- useEffect usage
- Retry logic
- Caching
- Debouncing
- Pagination logic
- Authentication or token refresh logic

These belong to other layers.

---

## COMPOSITION RULES

This skill MUST be composed with:

- Dashboard State Management Skill
- Form Skill
- Table / List / Tabs Skills

It MUST remain independent and reusable.

---

## SUCCESS CRITERIA

The output is valid ONLY if:

- Axios is used consistently
- Response shape is normalized
- API lifecycle is predictable
- Errors are human-readable
- No UI or business logic exists
- State integration is clean and explicit
