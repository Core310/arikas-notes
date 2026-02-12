---
sch_sem: sp_25
class: compSec
---
# Steps for a line $\int$  wrt. x or y on line segment
1) @ param some $f(x,y)=f(x(t))$
2) Find $r(t)$ like in previous step
3) Our Jacobian here is simply $x'$ or $y'$
4) 

___

# Steps for a line $\int$  wrt. arc length
[lamredu](https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtI.aspx)
1) Find r(t) denoted by a parametric EQ 
    1) In case of a line segment its form takes $r(t)=(1-t)<x_{0},y_{0}\dots>+t<x_{1},y_1,\dots>$ for $0\leq t\leq1$  
2) Find $||r'(t)||$ 
3) Transform the insides to match with whatever $x=..$ $y=..$ 
4) Plug into the general form 
$$
\int\limits_{C} f(x, y) \, ds = \int\limits_{a}^{b} f(h(t), g(t)) \, \| \vec{r}\,'(t) \| \, dt
$$


## Example Q for line \int!
- $f(x)=x^2y+x$, from $(1,-1),(-4,1)$-
- -m @param line, get $r(t)=<-5t+1,2t-1>$, then find $| r'(t)|||$
- Transform insides given  $x=-5t+1,y=2t-1$
- Solve where a=0,b=0 (by )
___
(todo, need to read over a little first..)
- DIvergence
- Graident
- Curl 


# Q1 Let R be filled triangle w/ verticies $(1,1),(-1,1),(0,0)$