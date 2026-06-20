---
sch_sem: sp_25
class: compSec
---
# Know: 
1) Intersection (w/ @param): $r_1(t)=r_2(s)$
2) Collision btwn 2 @params $r_1(t)=r_2(t)$
3) Intersection btwn @param w/ EQ $r(t)=<x(t),y(t)>$ 
4) Scalar vs vector projection!
- Be comfy with changing @param to @ EQ to @vector 
___
Making orthognal vect in 2D? 
- No cross product! (only >3 dimensions)
    - Use following formula $\vec{v}=<a,b>$ then $\vec{v}=<b,-a>$ resultant orthgonal vector
    - swap the X and Y components and negate the new Y component. So { x, y } becomes { y | -x }.

## Intersctions and collisions
eg1) $L_{1}(t)=<3t,4t+1>,L_{2}(t)=<2t,3t+1$ Do both of these points intersect or collide? 
- To intersect:
    - $L_{2}(t)=L_{1}(t)$ -> $<3s,4s+1> = <2t,3t+1>$ Sets up sys of eq -> solve for s&t -> ans!
- To collision: They must be at the same time 
- All collsions are intersections but !OPA

eg2) L_1(t) = <0,t>, L_2(t) = <0,t+1>, no collsions but intersetcts at all points b/c nvr meets (no solutions when solve for systems of EQ)

___
- Find intersctions/collsions of some $r_{1}=<2\sin t,2\cos t>,r_{2}=t<1,1>+<2,3>$ 
    - Where formula for intersection: $r_{1}(t) = r_{2}(s)$
    - Collsion: $r_{1}(t)=r_{2}(t)$ 
- Solving! (?)
    - Get sys of eq: 
    	- $2sint = t+2$
    	- $2cost = t+3$
    - Set 2sin(t) - 2cos(t) = -1, and sint-cost=-1/2


- **Shortcut!** 
- $r_{2}(t)=<t+2,t+3>,x^2+y^2=4$
- By defining intersection: (Same thing when have only 1 @param)
    - $r(t)=x(t)=t+2,y(t)=t+3$ (sys of eq)
    - Then $x(t)^2+y(t)^2=4$, then expanding must have: $t^2+4t+4+t^2+6t+9=4$