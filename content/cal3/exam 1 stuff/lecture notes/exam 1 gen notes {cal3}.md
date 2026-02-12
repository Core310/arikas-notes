---
sch_sem: sp_25
class: compSec
---
## Vocab
- perpendicular vs parallel
    - perpendicular: intersect at a 90-degree angle
    - parallel: same distance apart, and will never meet

### Vecotrs
- Unit vector
    - magnitude of 1
- 0 vector (all 0s)
- Standard basis vector
    - All vectors have at most 1, 1 element, and rest 0s eg. <0,1,0> or <1,0,0>

### Dot Product
- Magitude (length of vector)
    - $||\vec{v}||=\sqrt{ a^2_{1}+a^2_{2} +\dots+a^2_{n}}$
- scalar multiplication
    - $c\vec{a}$ -> $<ca_{1},ca_{2},ca_{n}>$
- orthogonal = perpendicular 
    - $\vec{a}\cdot\vec{b}=0$
    -  2 lines intersect at a right angle (dot product =0) 
- Vectors are parallel
    - $\vec{a} \cdot \vec{b} = \quad \|\vec{a}\| \|\vec{b}\| \, (\theta = 0^\circ) \quad \text{OR} \quad \vec{a} \cdot \vec{b} = -\|\vec{a}\| \|\vec{b}\| \, (\theta = 180^\circ)$
- Dot/Scalar Product 
    - $\vec{a}*\vec{b}=a_{1}b_{1}+a_{2}b_{2}+\dots+a_{n}b_{n}$
    - geoMetric interp: $\quad \|\vec{a}\| \|\vec{b}\|\cos \theta$
- Projections
    - Vector Projection: $\text{proj}_{\vec{a}} \vec{b} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{a}\|^2} \vec{a}$
    	- or dotProduct/mag(a) ^2 $*\vec{a}$
    	- Where project b unto a
    - Scalar Projection: $proj_{a}\vec{b}=\frac{\vec{a} \cdot \vec{b}}{||\vec{b}||}$
    	- project a unto b -> dot / mag(a)
- ONCS:
    - Steps:
    	- Normalize vector (div e/a component by magnitude)
    	- Find perpendicular
    		- For 2d, flip, negate if needed
    		- 3d, take cross product of any vector not parallel to $\vec{v}$
- Linear combo for certain $hat$ vector 
    - Add each vector's $hat$ +

### Formulas
- Distance btwn points in 3d cords system ?
    - $\sqrt{ (x_{2}-x_{1})^2-(y_{2}-y_{1})^2 -(z_{2}-z_{1})^2}$ adding as many planes as needed
- Find angle btwn 2 vectors 
    - $\cos(\theta) = \frac{u \cdot v}{|u| |v|}$
- Find values of x for angle between vector = 45deg
    - $\vec{v}\vec{\cdot}w=||v||\cdot||w||\cdot \cos(45)$
    - for v&w being some vector
- Find point to parametric line r(t) = t$\vec{a}$ and $\vec{a}$
    - $d=\frac{||\vec{v}\vec{\times}a||}{||\vec{a}||}$
    - distnace = mag(cross) / mag of a
- formula for the length of the a parametric curve cal
    - $\int ^b_{a}||r'(t)|| \, dx$
    - (integral of mag of derative)
- Area of triangle
    - $\frac{1}{2}|\vec{v} \times \vec{{w}}|$
    	- Normally magnitude of cross product of both vectors 
- magnitude of the cross product
    - area of the parallelogram formed by those two vectors

### Cross Pproduct
- [[Cross Product ch 11.4 {cal3}]]
- What does $\vec{a} \vec{\times}b=\vec{0}$ tell us about both vectors?
    - then both vectors are parallel vectors
- What does $\vec{a} \vec{\times}b \neq \vec{0}$ tell us abotu both vecotrs?
    - cross product is orthogonal to both vectors

# Determinent 