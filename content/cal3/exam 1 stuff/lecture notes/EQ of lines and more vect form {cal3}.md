---
sch_sem: sp_25
class: compSec
---
![[Pasted image 20250211233013.png]]

## Three main EQ:  
1) vector form of the equation of a line, gives position vector for the point
	1) $\vec{r} = \vec{r}_0 + t \vec{v} = \langle x_0, y_0, z_0 \rangle + t \langle a, b, c \rangle$
2) parametric form of the equation of a line. actual coordinates of the point
	1) $x=x_{0}+ta$
	2) $b=b_{0}+tb$
	3) $c=c_{0}+tc$
3) symmetric equations of the line
	1) $\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$
Where a,b,c is the second form of some point/vecotr, and x_0 is the first point (hence basically x_1)
# EQ of lines
- Consider vector func like r(t) = <t,1>,then if we extend it to 3d - $r=r_0+tv$ 
	- More formally, $r=<x_0,y_0,z_0> + t(a,b,c)$ where abc are another starting point
# Ex) 1 
Then, say converting somepoint (2,-1,3) and (1,4,-3), then: Vector form = $<x_1-x_{2},y_{1}-y_{2},z_{1}-z_{2}>$ => $\vec{v}=<1,-5,6>$ 
1) Then $\vec{r}=\vec{r_{0}}+t\vec{v}$ or $\vec{r}=<2,-1,3> + t<1,-5,6>$, simplified -> $\vec{r}=<2+t,-1-5t,3+6t>$
2) x=2+t, y=-1-5t, z=3+6t
3) x-2/1, y+1/4 ...

# Ex) 2 
Determine if the line that passes through the point $(0,−3,8)$ and is parallel to the line given by $x=10+3tx=10+3t,y=12ty=12t$ and $z=−3−tz=−3−t$ passes through the xzxz-plane. If it does give the coordinates of that point

Hence in this case we are given one vector, and one parametric EQ, asked to find if they both pass thru xz plane. To start, find vect of each, hence: 
1) $\vec{r_{0}}=<3,12,-1>$ from the t subVariable, and the other being <0,-3,8>. From here we solve given both $\vec{r_{0}}$ and $\vec{r_{1}}$ 

#  rcaQuiz review
Take some $\vec{v}=<1,-1,0>$, what are 2 vectors that are parallel to $\vec{v}$ that are not parallel to $\hat{k}$ 
1) Convert each xyz cord into their own vect ->
	1) $\hat{i}=<1,0,0>$ so on..
	2) $\vec{v}\vec{\times}b$ where $\vec{b}=<1,1,1>$ and $\vec{a}=<1,0,1>$
2) Take cross product of a $\vec{k}\vec{\cdot}\vec{w}=2$