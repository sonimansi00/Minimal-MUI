# Date Picker Prompting Guide

## Understanding User Requests

### Request Type Recognition

**Identify the variant needed:**

1. **"Date picker"** / **"Select a date"** / **"Birth date field"**
   → Single Date Picker

2. **"Date range"** / **"Start and end date"** / **"Period selector"**
   → Date Range Picker

3. **"Time picker"** / **"Select time"** / **"Hour and minute"**
   → Time Picker

4. **"Date and time"** / **"Datetime picker"** / **"Schedule selector"**
   → Date Time Picker

5. **"Calendar view"** / **"Always visible calendar"** / **"Embedded calendar"**
   → Static Picker

6. **"Mobile date picker"** / **"Touch-friendly"** / **"Modal calendar"**
   → Mobile Picker

### Common Scenarios

#### Scenario 1: Simple Date Selection
**User says:** "Add a date picker for the user's birthday"

**Interpret as:**
- Single Date Picker
- No time component
- Max date: today
- Validation: 18+ years old (if applicable)
- Label: "Date of Birth"

#### Scenario 2: Event Scheduling
**User says:** "I need to let users pick a date and time for an appointment"

**Interpret as:**
- Date Time Picker
- Min date: today
- Business hours constraint (9 AM - 5 PM)
- Label: "Appointment Date & Time"

#### Scenario 3: Report Filtering
**User says:** "Add filters for date range in the report"

**Interpret as:**
- Date Range Picker
- Preset ranges (Today, Last 7 days, Last 30 days, Custom)
- Label: "Date Range"
- Compact layout

#### Scenario 4: Dashboard Display
**User says:** "Show a calendar on the dashboard"

**Interpret as:**
- Static Picker
- No popup
- Event indicators on dates
- Clickable dates
- Integrated with dashboard layout

#### Scenario 5: Time-Only Selection
**User says:** "Let users set their preferred meeting time"

**Interpret as:**
- Time Picker only
- 12-hour format (with AM/PM) or 24-hour
- 15-minute intervals
- Label: "Preferred Time"

#### Scenario 6: Mobile Experience
**User says:** "Make it work well on mobile"

**Interpret as:**
- Mobile Picker variant
- Full-screen on small screens
- Touch-optimized
- Large tap targets

### Feature Detection

**Look for these keywords to add features:**

**Validation Keywords:**
- "Required" → Add required prop
- "Past dates only" → Set maxDate to today
- "Future dates only" → Set minDate to today
- "Between X and Y" → Set minDate and maxDate
- "Weekdays only" → Add shouldDisableDate function
- "Not weekends" → Disable Saturdays and Sundays

**Format Keywords:**
- "MM/DD/YYYY" → Set inputFormat
- "DD-MM-YYYY" → European format
- "12-hour" / "24-hour" → Time format
- "ISO format" → ISO 8601 string

**Behavior Keywords:**
- "Default to today" → Set defaultValue
- "Clear button" → Add clearable prop
- "Disabled" → Add disabled state
- "Read-only" → Add readOnly prop
- "Open on focus" → Add openTo prop

**Locale Keywords:**
- "French" / "Spanish" / etc. → Import locale from date-fns
- "Local time" → Use user's timezone
- "UTC" → Convert to UTC

### Ambiguity Resolution

**If user says "date picker" without specifics:**

Ask clarifying questions:
1. Do you need just date, or date and time?
2. Should users select a single date or a range?
3. Are there any date restrictions (past/future only)?
4. What label should the field have?
5. Is this field required?

**If unclear about validation:**

Default to sensible constraints:
- For birth dates: max = today, min = 100 years ago
- For appointments: min = today, max = 1 year ahead
- For reports: no constraints (allow any date)

**If unclear about format:**

Use project defaults:
- Check existing date pickers in codebase
- Fall back to locale-based format
- Document the choice

### Context-Aware Defaults

**Based on context, infer requirements:**

**Forms Context:**
- Add label and helper text
- Include validation
- Show error states
- Required indicator

**Filter Context:**
- Compact size
- Clear button
- Preset ranges (for range picker)
- Non-required

**Dashboard Context:**
- Static variant
- Visual emphasis
- Event indicators
- No validation needed

**Modal/Dialog Context:**
- Controlled state
- Confirmation buttons
- Cancel action
- Focus management

### State Management Inference

**Determine state approach:**

**Use useState:**
- Simple single component
- Local state only
- No form integration

**Use Form Libraries (react-hook-form, formik):**
- Part of larger form
- Validation needed
- Submit handling

**Use Context/Redux:**
- Shared across components
- Global filter state
- Persistent selection

### Error Message Interpretation

**Provide helpful error messages:**

- "Date is required" → Generic required
- "Please select a valid date" → Format error
- "Date must be in the future" → Min date validation
- "Date must be before [date]" → Max date validation
- "End date must be after start date" → Range validation
- "Please select a date within range" → Min/max violation

### Accessibility Considerations

**Always include:**
- Proper labels (not just placeholders)
- ARIA attributes
- Keyboard navigation support
- Error announcements
- Focus management

**When user mentions:**
- "Accessible" → Add extra ARIA labels
- "Screen reader" → Ensure date format is readable
- "Keyboard only" → Test tab navigation

### Performance Hints

**Optimize when:**
- "Multiple pickers" → Wrap in single LocalizationProvider
- "Large date range" → Implement lazy loading for years
- "Many instances" → Consider controlled vs uncontrolled
- "Slow rendering" → Check for unnecessary re-renders

### Integration Patterns

**Recognize integration needs:**

**With forms:**
```
User: "Add to the registration form"
→ Use form library integration
→ Add validation rules
→ Connect to form state
```

**With tables/grids:**
```
User: "Filter table by date"
→ Use controlled state
→ Trigger data fetch on change
→ Show clear button
```

**With APIs:**
```
User: "Save date to backend"
→ Format for API (usually ISO)
→ Handle timezone conversion
→ Show loading states
```

## Response Strategy

1. **Acknowledge** the request
2. **Clarify** any ambiguities
3. **Confirm** variant and features
4. **Implement** with complete code
5. **Explain** key decisions
6. **Provide** usage examples

Always prioritize user experience, accessibility, and maintainability.
