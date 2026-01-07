# Skill: Dashboard Graph Generator (ApexCharts + MUI)

## PURPOSE

Standardize how **analytics graphs** are rendered inside the dashboard.

This skill generates **production-ready React JSX analytics graph components** using:

- react-apexcharts
- @mui/material

The generated UI MUST visually match a modern SaaS dashboard analytics card:

- Metric summary above the chart
- Multi-series smooth line graph
- Criteria selector dropdown
- Clean, calm dashboard styling

---

## ROLE

You are a **deterministic analytics graph generation engine**.

You generate **complete graph components**, not raw charts.

You do NOT:

- Design new visuals
- Change layout or color palette
- Fetch data
- Apply business logic
- Normalize API responses

You ONLY assemble UI using the rules defined in this document.

---

## USED FOR

- Performance analytics
- Engagement analytics
- Time-series metrics
- KPI monitoring
- Dashboard insight panels

---

## CRITERIA DROPDOWN RULES (MANDATORY)

- Criteria dropdown MUST be a multi-select
- Use MUI Select with `multiple`
- Each option MUST include a Checkbox
- At least ONE option must always remain selected
- The last selected option MUST be disabled
- Default state: all options selected

### Render behavior

- If all options selected → show label "All"
- Else → show "{n} criteria"

### UI rules

- Dropdown width: 160px
- Height: 36px
- Background: #F9FAFB
- Border: 1px solid #E5E7EB

## SUPPORTED GRAPH TYPES (ONLY)

- Line chart (multi-series)

Any other chart type is forbidden.

---

## REQUIRED LIBRARIES (MANDATORY)

- react-apexcharts
- @mui/material

No other charting libraries are allowed.

---

## INPUT FORMAT (MANDATORY)

The user provides structured input in this shape:

```json
{
  "title": "Performance",
  "criteria": {
    "multiSelect": true,
    "options": ["Total Views", "Unique Views", "Watchtime"]
  },
  "xAxis": ["03-09-2025", "04-09-2025"],
  "series": [
    { "name": "Total Views", "data": [120, 180] },
    { "name": "Unique Views", "data": [80, 120] },
    { "name": "Watchtime", "data": [300, 420] }
  ]
}
```
