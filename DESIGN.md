# Design System

シンプルでモダンなUIのためのデザイントークンとコンポーネント指針。

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#ffffff` | Page background |
| `--color-bg-subtle` | `#f8f9fa` | Section backgrounds |
| `--color-bg-muted` | `#f1f3f5` | Disabled, hover states |
| `--color-border` | `#e9ecef` | Borders, dividers |
| `--color-text` | `#212529` | Primary text |
| `--color-text-muted` | `#6c757d` | Secondary text |
| `--color-primary` | `#495057` | Primary actions |
| `--color-primary-hover` | `#343a40` | Primary hover |
| `--color-accent` | `#228be6` | Links, focus |
| `--color-success` | `#40c057` | Success states |
| `--color-warning` | `#fab005` | Warning states |
| `--color-error` | `#fa5252` | Error states |

## Typography

| Token | Value |
|-------|-------|
| `--font-family` | `"Inter", system-ui, -apple-system, sans-serif` |
| `--font-size-xs` | `0.75rem` |
| `--font-size-sm` | `0.875rem` |
| `--font-size-base` | `1rem` |
| `--font-size-lg` | `1.125rem` |
| `--font-size-xl` | `1.25rem` |
| `--font-size-2xl` | `1.5rem` |
| `--font-size-3xl` | `2rem` |
| `--line-height` | `1.6` |
| `--font-weight-normal` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |

## Spacing

| Token | Value |
|-------|-------|
| `--space-xs` | `0.25rem` |
| `--space-sm` | `0.5rem` |
| `--space-md` | `1rem` |
| `--space-lg` | `1.5rem` |
| `--space-xl` | `2rem` |
| `--space-2xl` | `3rem` |
| `--space-3xl` | `4rem` |

## Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-full` | `9999px` |

## Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` |

## Components

### Header
- Fixed height: 64px
- White background, bottom border
- Logo left, nav links right

### Footer
- Subtle background
- Multi-column link layout
- Copyright line at bottom

### Buttons
- Primary: filled `--color-primary`
- Secondary: filled `--color-bg-muted`
- Outline: transparent with border
- Ghost: text only
- Sizes: sm, md (default), lg

### Cards
- White background, border, `--radius-md`
- Optional image on top
- Padding: `--space-lg`

### Accordion
- Border between items
- Chevron indicator
- Smooth expand/collapse

### Forms
- Input height: 40px
- Border on focus: `--color-accent`
- Label above field

### Alerts
- Colored left border or background tint
- Variants: info, success, warning, error

### Table
- Striped rows optional
- Header with subtle background

### Badge
- Small pill shape
- Muted background

### Tabs
- Underline active state
- Horizontal layout
