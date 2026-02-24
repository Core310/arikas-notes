# Roadmap

## Phase 1: Math Syntax Standardization
- [ ] Task 1.1: Identify all malformed math blocks (using grep/regex).
- [ ] Task 1.2: Standardize `$$` block formatting (move to separate lines).
- [ ] Task 1.3: Fix specific typos like `$$=`.
- [ ] Task 1.4: Verify changes in a few key files (`TOC ch1 ...`, `TOC ch2 ...`).

## Phase 2: Excalidraw Link Resolution
- [ ] Task 2.1: Map all Excalidraw links to their corresponding files in `Excalidraw/`.
- [ ] Task 2.2: Test if adding the full relative path or the `.md` extension fixes rendering in Quartz.
- [ ] Task 2.3: If images still don't render, look for an alternative way to embed (e.g., placeholder or link to page).

## Phase 3: Global Validation
- [ ] Task 3.1: Run a final scan for any remaining broken links or math blocks.
- [ ] Task 3.2: Confirm with user that the most critical files are now rendering correctly.
