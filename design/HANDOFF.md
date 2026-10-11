# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):  /, /contact, /posts

Components → React files:
PostCard → src/components/ui/Card.tsx
Button → src/components/ui/Button.tsx
Tag → src/components/ui/Tag.tsx

Button variants → prop:
variant = "Primary" | "Secondary"

PostCard layout:
direction column
gap 12px
padding 16px
radius 8px

Breakpoint change:
phone 1 column, desktop 3 columns; header becomes responsive and wraps navigation on smaller screens

Tokens (all ten):
color/primary = #1d4ed8
color/on-primary = #ffffff
color/surface = #ffffff
color/border = #d1d5db
color/text = #1f2937
color/text-muted = #9ca3af
space/2 = 8px
space/4 = 16px
space/6 = 24px
radius/md = 8px
Design fix:
color/text-muted: #9ca3af → #6b7280
Contrast ratio: 2.54:1 → 4.83:1
Reason: the original muted text color failed the WCAG 4.5:1 contrast requirement.