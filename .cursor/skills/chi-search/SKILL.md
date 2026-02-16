---
name: chi-search
description: Search across Chi Design System elements using natural language or keywords. Use when the user asks to find Chi elements, search for components by use case, or discover related utilities/tokens/components. Supports synonym expansion for better discoverability.
---

# Chi Semantic Search

## How to Search

When user searches for Chi elements, use these strategies in order:

### 1. Direct Match
Search for exact class names, component names, or token names:
- Tokens: Check chi-tokens reference data or read `src/chi/_global-variables.scss`
- Utilities: Check chi-utilities reference data
- Components: Check chi-components reference data
- Schemas: Check chi-component-schemas/schemas.json

### 2. Synonym Expansion
Expand search terms using the synonym dictionary in [reference.md](reference.md).
Example: "center" also matches "middle", "centered", "align-center".

### 3. Use Case Matching
Match natural language queries to common use cases in [reference.md](reference.md).
Example: "center content" → `-mx--auto`, `-d--flex`, `-justify-content--center`, `-align-items--center`

### 4. Fuzzy Matching
If no exact match, try partial matches: "btn" → `chi-button`, "mod" → `chi-modal`

## Ranking Criteria

Results are ranked by relevance:
1. **Exact name match** (highest) -- query matches element name exactly
2. **Prefix match** -- query is a prefix of the element name
3. **Use case match** -- query matches a documented use case
4. **Synonym match** -- query matches via synonym expansion
5. **Partial match** (lowest) -- query appears somewhere in name or description

## Search Scope

Search covers:
- Component names, modifiers, and subcomponents
- Utility class names and their CSS properties
- Token names and values
- Use case descriptions and synonyms

## Workflow

1. Parse the user's query into keywords
2. Try direct match first (fastest)
3. Expand keywords with synonyms from reference.md
4. Match against use cases for natural language queries
5. Return ranked results grouped by type

## Response Format

Return results grouped by type:
- **Components**: Name, description, Web Component tag, key modifiers
- **Utilities**: Class name, CSS properties, category, example
- **Tokens**: Token name, value, description
- **Use Cases**: Matching pattern with all related elements and code example
