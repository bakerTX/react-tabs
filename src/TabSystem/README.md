## Reusable Tabs Component
---

#### Usage

1) import `TabSystem`.

2) give `TabSystem` a `tabNames` prop. this is an array of strings that will map tab buttons to their corresponding content blocks.

3) optionally give `TabSystem` an `initialChosenTab`. this is a number aligning with the index of the content block (starting at 0) that will display initially - defaulting to 0.

4) import `Content`.

5) wrap `Content` components around your custom content block. the order of `Content` blocks will match to the order of tabs initialized in `tabNames`, and their inner contents will render conditionally based on the `TabSystem` internal state.
