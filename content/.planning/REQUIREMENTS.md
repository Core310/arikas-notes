# Requirements

## Math Rendering
- All block math MUST start and end with `$$` on their own lines.
- Example:
  ```markdown
  $$
  \begin{gather}
  ...
  \end{gather}
  $$
  ```
- Remove any trailing characters from math blocks (e.g., `
$$
=` should be `
$$
`).
- Ensure no leading `>` (for callouts) is immediately followed by `$$` without a space or newline if it breaks the block. (Standard Obsidian/Quartz callout math should be handled carefully).

## Excalidraw Linking
- Investigate if Quartz can render `.excalidraw.md` files or if they need to be pointed to SVGs.
- Since no SVGs were found, verify if the links need to include the full path or if Quartz's link resolution is failing.
- Target: `![[Filename.excalidraw]]` -> `![[Excalidraw/Filename.excalidraw.md]]` or similar if required for resolution.
- If the goal is "Image Embeds", and no images exist, identify why they are missing or if Quartz is supposed to generate them.

## Scope
- Recursive scan of the `content/` directory.
- Fix all instances in `ToC/`, `Stats/`, `PPL/`, etc.
