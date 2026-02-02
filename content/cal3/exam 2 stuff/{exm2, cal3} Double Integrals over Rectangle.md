---
sch_sem: sp_25
class: compSec
---
https://tutorial.math.lamar.edu/Classes/CalcIII/IteratedIntegrals.aspx


# Fubini’s Theorem
If $f(x,y)$ is continuous on ($R = [a,b] \times [c,d]$ then, $$ \iint_R f(x,y) \, dA = \int_a^b \int_c^d f(x,y) \, dy \, dx = \int_c^d (\int_a^b f(x,y) \, dx) \, dy $$

- These integrals are called **iterated integrals**
- Where [0,1] is the x-bound, and [0,2] y-bound. 
- 2 ways 2 compute (x and y can be either first or last with matching bounds)
- Note how we first compute the inner integral first, then move onto the outer one.

## Steps to Solve
1) Compute the inner integral given the requested bounds, treating other var as a constant
2) Compute outer region with requested bounds 

## Shortening Fact
If $f(x,y) = g(x) h(y)$ and we are integrating over the rectangle $R = [a,b] \times [c,d]$  then,

$$
\iint_R f(x,y) \, dA = \iint_R g(x) h(y) \, dA = \left( \int_a^b g(x) \, dx \right) \left( \int_c^d h(y) \, dy \right)
$$
- Estmpsentially, if we have ... we can js integrate both separately  

___
# Regions between to curves: 
$$
f(x,y) = x^2+y
$$
We can have: 
- Opposite facing parabolas
	- Let $R=$ region between $$y=x^2+1, \qquad y=1-x-x^2$$
	- Then, draw R, and find the max/min/fixed x&y slices and intersections 
	- Drawing A we simply take the region between both curves
	- Part B: We setup a SoE: 
	$$ 
	x^2+1=1-\times-x^2 \qquad 2x^2+x=0 \qquad x(2x+1)=0 \qquad x=\{0,.5\} \qquad (x,y)=(0,1)
	$$
	Then when xy = .5, we get $-\frac{1}{2},  \frac{5}{4}$ as our POI (so the x,y point 0,1 and the given point here
	- To find the x max, see its at 0, the min is at $-\frac{1}{2}$ 
	- y max: $1exm1 exm$
- 2 parabolas 
- Triangles 

# Q1, Triangle double \int 
Then we want to graph, find bounds + xy min+max Then we integrate. We start given a set of points $(1,-1),(0,0),(0,-1)$

Bounds (called slices in this case)

![[WhatsApp Image 2025-03-06 at 11.35.44_6802a0a2.jpg]]