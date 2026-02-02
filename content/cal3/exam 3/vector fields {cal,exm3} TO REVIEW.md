---
sch_sem: sp_25
class: compSec
---
# Why do we care about conserative vect fields? 
FUndamental therom of line $\int$
- Vect Line $\int$: $\int_C v \cdot ds$ = $\int^b_b v \cdot r'(t) dt$
	- How is r related to C? 
	- 

# Q: Find $\Phi$
$$
\nabla \Phi=V=<2xy+y,x^2+x-1>, \quad \Phi=?
$$
- Identity partials: (where C(i),D = constants)
	- $\Phi_{x}=< \frac{x^2}{2}+C(y)+D>$
	- $\Phi_{y}=< xy+B(x)+D>$
	- $\Phi=<xy+ \frac{x^2}{2}+D>$ 
		- $\nabla \Phi=<y+x,x>$ -> Not conservative! End early :) 
	- 


# Suppose have $V(x,y) = <S(x,y),T(x,y)>$ 
- VF conserative if 
	- $$V=\nabla \phi$$
	- In this sense we have$$\Phi(x,y)=x^2y+y \quad \nabla \Phi=<2xy,x^2+1>$$
		- Which is split apart dependent on what avrs they are split upon
		- Hence if we have$$$$


# Vector fields!! (THIS WILL BE ON THE EXAM!)
[lamr edu vector fields](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields.aspx) 
- Finding if func is conserative? lruc
- $V(x,y)=<2x,2y>$
	- Then find $S(x,y)=2x, T(x,y) =2y$
	- Then the partials of each is 0
- If $V(x,y)=\nabla af(x,y)$ what is f? 
- $f(x,y)=A(x,y)+B(x)+C(y)+D$, where D is some const
- $f_{x}=S=2x$ Hence $f(x,y)=\int 2x \, dx=x^2+(C(y)+D)$ 
- $f_{y}=2y$ then $f(x,y)=\int 2y \, dy=y^2+(B(x)+D)$
- $x^2+C(y)+D=y^2+B(x)+D$
	- Hence $\boxed{f(x,y)=x^2+y^2+D}$  