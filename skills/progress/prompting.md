# Progress Component Prompting Guide

## User Request Interpretation

### Common User Requests

#### "I need a loading spinner"
**Interpretation**: Create circular indeterminate progress
**Implementation**: `<CircularProgress />`

#### "Show upload/download progress"
**Interpretation**: Create circular or linear determinate progress with percentage label
**Implementation**: Progress with value and label display

#### "Add a progress bar"
**Interpretation**: Create linear determinate progress
**Implementation**: `<LinearProgress variant="determinate" value={value} />`

#### "Show loading indicator"
**Interpretation**: Create linear indeterminate progress
**Implementation**: `<LinearProgress />`

#### "Display video buffering"
**Interpretation**: Create linear buffer progress
**Implementation**: `<LinearProgress variant="buffer" value={} valueBuffer={} />`

#### "I need a progress circle with percentage"
**Interpretation**: Create circular determinate with centered label
**Implementation**: Circular progress wrapped in Box with overlaid Typography

### Keywords and Mapping

#### Type Keywords
- **"spinner", "loading", "waiting"** → Circular indeterminate
- **"bar", "horizontal"** → Linear progress
- **"percentage", "percent", "number"** → Include label
- **"buffering", "buffer"** → Buffer variant
- **"determinate", "specific value"** → Determinate variant

#### Size Keywords
- **"small", "tiny", "mini"** → Size: small (30px) or extra small (20px)
- **"large", "big"** → Size: large (60px)
- **"huge", "extra large"** → Size: extra large (80px)
- **"thin"** (linear) → Height: 4px
- **"thick"** (linear) → Height: 8px

#### Color Keywords
- **"green", "success"** → color="success" or primary (#00A76F)
- **"red", "error", "danger"** → color="error"
- **"yellow", "warning"** → color="warning"
- **"blue", "info"** → color="info"
- **"purple"** → color="secondary"

### Context Clues

#### Upload/Download Context
```
User: "Add progress indicator for file upload"
→ Linear determinate with label showing percentage
→ Include file size/name display
→ Success state at 100%
```

#### Video Context
```
User: "Show video loading progress"
→ Linear buffer variant
→ Show loaded vs buffered amounts
→ Indeterminate while initializing
```

#### Form Context
```
User: "Multi-step form progress"
→ Linear determinate
→ Step labels (1/4, 2/4, etc.)
→ Segment visualization
```

#### Data Loading Context
```
User: "Loading data from API"
→ Circular indeterminate
→ Center of container
→ Optional loading text below
```

### Component Combination Patterns

#### Progress with Text
```
User wants: "Show loading with message"
Provide:
- CircularProgress or LinearProgress
- Typography below with loading message
- Optional skeleton loaders
```

#### Progress with Icon
```
User wants: "Progress with success icon"
Provide:
- Progress that transitions to checkmark
- Conditional rendering based on completion
- Fade animation between states
```

#### Multiple Progress Indicators
```
User wants: "Show multiple file uploads"
Provide:
- Stack of LinearProgress components
- Labels for each file
- Individual progress values
```

#### Card with Progress
```
User wants: "Progress in card"
Provide:
- Card component container
- Progress at top or bottom
- Related content (title, description)
```

## Clarifying Questions

### When to Ask

Ask clarifying questions when:
1. **Ambiguous variant**: Not clear if circular or linear needed
2. **Missing value source**: How will progress value be determined?
3. **Multiple features**: Should it include label, icon, or other elements?
4. **Styling preferences**: Specific colors or sizes not mentioned

### Example Questions

**Type ambiguity:**
- "Would you like a circular spinner or a horizontal progress bar?"

**Value source:**
- "How will the progress value be calculated? From state, props, or API?"

**Features:**
- "Should the progress indicator include a percentage label?"
- "Do you want to show the progress inline or centered on the page?"

**Styling:**
- "What color should the progress indicator be? (Primary green, or another color?)"
- "What size works best for your use case? Small, medium, or large?"

## Default Assumptions

When information is missing, use these defaults:

### Type
- **Loading/waiting without value** → Circular indeterminate
- **With specific value/percentage** → Determinate variant
- **File operations** → Linear determinate with label

### Size
- **Circular** → Medium (40px)
- **Linear** → Regular height (6px), full width

### Color
- **Default** → Primary (#00A76F)

### Position
- **Circular** → Centered in container
- **Linear** → Full width at top or relevant position

### Label
- **Include label** → If percentage/value mentioned
- **No label** → If just "loading" or "spinner" requested

## Implementation Checklist

Before providing code, ensure:
- [ ] Variant type determined (circular/linear, indeterminate/determinate)
- [ ] Size specified or defaulted
- [ ] Color chosen or defaulted
- [ ] Label requirement clarified
- [ ] Container/positioning considered
- [ ] State management approach (if dynamic)
- [ ] Accessibility attributes included
- [ ] Animation behavior appropriate
