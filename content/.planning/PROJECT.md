# Project: Quartz 4 Site Fixes (Math & Excalidraw)

## Context
Fixing rendering issues in a Quartz 4 based notes site. The primary issues are related to Math (KaTeX/LaTeX) syntax and Excalidraw image embeds.

## Objectives
1. **Math Rendering Fix:** Update all Markdown files to use Quartz-compatible math blocks (ensuring `$$` are on separate lines and correctly formatted).
2. **Excalidraw Embed Fix:** Resolve issues with `.excalidraw.md` files being linked but not rendering as images. (Goal: Image Embeds).
3. **Global Cleanup:** Apply these fixes across the entire `content/` directory.

## Current Issues
- `
$$
` blocks followed by `=` or other characters (e.g., `
$$
=`).
- `\begin{gather}` blocks inside `$$` but with formatting that Quartz might not like (e.g., on the same line).
- Excalidraw links like `![[TOC_regex_ex21.excalidraw]]` pointing to `.excalidraw.md` files but not rendering.

## Tech Stack
- Quartz 4 (Static Site Generator)
- Markdown (Obsidian flavored)
- KaTeX (Math rendering)
- Excalidraw (Plugin-based drawings)
