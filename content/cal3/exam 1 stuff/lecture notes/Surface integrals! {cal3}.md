## Visuals
- height map
- heat map
- PLOT EVERYTHING YOU WORK W/
## Limit of a function along a curve
- f(x,y) = x+y
- r(t) = <3t,t> 

___
## Surfaces (review) 
- EQ: $3x+2y+z=4$,
	- $x^2+y^2+\left( \frac{z}{2} \right)^2=1$
- Func: $f(x,y) = 4-3x-2y$, 
	- $z=4-3x+2y$
- Param: $r(s,t)=<x(s,t),y(s,t),z(s,t)>$

# Limits of func in 2d
- In 1d 2 dir, limit from the left and right
- 2d? Lim of @param curve along r(t) @ P 
### Eg) Limit of func along a curve @ a pt? 
Given: 
- $f(x,y)=1+x+2y$)
- $P = (1,1)$, $r(t) =t(1,1)+(1,1)$
- Where r(t) some @param cruve, only restrict is need 2 pass 1,1-
	- What is limit of f along r @ P? 
1) What t cord is (1,1), $t_{0}=0$ 
2) $\lim_{ t \to 0 }f(r(t))=f(t+1,t+1)$
	1) Or $\lim_{ t \to 0 }(1+(t+1)+2(t+1))=\lim_{ t \to 0 }(4+3t)=4$

### eg.2
- $f(x,y) = \frac{{xy}}{x^2+y^2}$
- P=(0,0)

So: 
- r(t) = t<2,0> = <2t,0> 
	- Hence $t_0=0$ 
- Get $\lim_{ t \to 0 }f(r(t))$, using the r(t) values of $\hat{i},\hat{j}$
- say rebind: $r(t)=t<3,4>$ or $<3t,4t>$, again apply $\lim_{ t \to 0 }f(r(t))=\frac{12}{25}$
- This tells us how we approach some cliff from a certain direction (where each direciton can have a different limit)

[[limit laws{cal3}]]

### Example:
- $f(x) = e^x,g(x,y)=\frac{{2x^2+y}}{x+y}$
- Then $f(g(x,y))$? Simplfy plug in $e^{g(x,y)}$ 
- What about $g(f(x),y)$? Then js plug in $e^x$ for x and keep y

# Conic secitons!
- Spheres 
- Ellipces 
- hypeberla 
- parabolas 
- 