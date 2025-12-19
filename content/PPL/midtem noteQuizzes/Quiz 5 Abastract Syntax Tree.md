# CFG and the attribute grammar
- FT with end tail = end product parent
- Use the cheat sheet for fig 4,3 to parse thru the tree? 

![[Drawing 2025-02-25 05.46.55.excalidraw]]
# AST 
# Constructing:
We think of this like reading, the leftmost on same depth will be the most immediate operation. So taking some - => $^+_{-}$ will be + then -. 

NNN+10−(3∗2.3)−(2−OU)/2
- left right side of EQ is deepest in tree
- Rightmost creates the "root" 
- Order of ops really only matters for same depth
![[Drawing 2025-02-25 04.36.25.excalidraw]]
If we didn't have parentheses around (2-OU), then `\` instead of  `-` 

If we had $10−((3∗2.3)−(2−OU)/2)$ Instead, then `10` would be on depth 1, `-` on depth 0, `(...)` on depth 1 right side 
## Reading an AST: 
Say we have 
```
         (-)
        /   \
      (-)     (/)
     /   \   /   \
   (-)    2 OU   2
  /   \    
(+)     (*)
 / \    /   \
NNN 10  3   2.3

```
We read LEFT to RIGHT visiting each child before moving on. Start with NNN+10, then deal with -, which has unvisited child of \* which has children of 2.3 $\rightarrow$ NNN+10-(3\*2.3)
<br> Repeat process as many times as needed

# Fig 4.3 simplified (likely have on cheat sheet) 
- `.st` is with any func with `op`, and is the argument for func. .
- `val` is the output of the func/statement

1. E $\rightarrow$ T TT
2. TT $\rightarrow$ 
	1. op T TT
	2. $\epsilon$
3. T $\rightarrow$ F FT
4. FT $\rightarrow$ 
	1. op F FT
	2. $\epsilon$ `.st,.val=` parent `.val`
5. F $\rightarrow$ 
	1. op
	2. (E)
	3. const

left box holds the st attribute
![[Pasted image 20250225071450.png]]