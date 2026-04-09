---
name: chi-component-schemas
description: Validate Chi component usage against schemas. Use when validating component modifiers, checking for conflicts, verifying accessibility attributes, or generating correct component markup. Contains allowed modifiers, conflicting modifier groups, required attributes, and accessibility requirements.
---

# Chi Component Validation Schemas

## How to Validate

When validating component usage:

1. **Identify** the base class (e.g., `chi-button` from `class="chi-button -primary -lg"`)
2. **Look up** the schema in [schemas.json](schemas.json) by base class key (e.g., `chi-button`)
3. **Check modifiers** against `allowedModifiers` -- flag any not in the list
4. **Check conflicts** in `conflictingModifiers` groups -- only one from each group is allowed
5. **Verify count** against `maxModifiers` limit
6. **Check attributes**: `requiredAttributes` must be present, `recommendedAttributes` should be suggested
7. **Check accessibility**: verify `accessibility.requiredRoles` and `accessibility.requiredAria` are present
8. **Suggest Web Component** if `webComponentTag` exists -- always recommend it

**Note**: If a schema is missing `conflictingModifiers`, `maxModifiers`, or `requiredAttributes`, treat them as empty/unlimited. Not all schemas have every field populated.

## Validation Rules

### Modifier Validation
- Only modifiers in `allowedModifiers` are valid. Unknown modifiers are errors.
- Within each `conflictingModifiers` group (e.g., `colors: ["-primary", "-secondary"]`), only ONE modifier can be used.
- Total modifier count must not exceed `maxModifiers`.

### Attribute Validation
- `requiredAttributes` must be present. Missing = error.
- `recommendedAttributes` should be suggested. Missing = warning.

### Accessibility Validation
- Check `accessibility.requiredRoles` are present
- Check `accessibility.requiredAria` attributes exist
- Report `accessibility.keyboardSupport` and `accessibility.focusManagement` info
- **Note**: Web Components handle most accessibility automatically. If suggesting a WC, note that ARIA attributes are built-in.

## Error Severity

| Issue | Severity |
|-------|----------|
| Unknown modifier | Error |
| Conflicting modifiers | Error |
| Exceeds maxModifiers | Warning |
| Missing required attribute | Error |
| Missing recommended attribute | Warning |
| Has Web Component equivalent | Info (suggest migration) |

## Workflow

When user asks to validate a component or you review Chi HTML:

1. Parse the HTML to identify base class and modifiers (split `class` attribute, base = `chi-*`, modifiers = `-*`)
2. Look up schema from [schemas.json](schemas.json)
3. Run all validation checks
4. Return errors, warnings, and Web Component suggestion

If no schema exists for the component, note that and still check for common anti-patterns (single-dash syntax, conflicting colors, etc.).

## Response Format

```
Component: chi-button
Valid: Yes/No
Errors: [list of errors with severity]
Warnings: [list of warnings]
Suggestion: Use <chi-button color="primary" size="lg"> instead (Web Component)
Accessibility: Enter/Space to activate, receives focus in tab order
```
