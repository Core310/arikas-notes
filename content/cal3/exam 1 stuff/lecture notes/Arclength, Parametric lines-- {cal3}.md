---
sch_sem: sp_25
class: compSec
---
How to paramaterize a cruve? 
- L(T) = <$x_{0}+xt,y_{0}+yt+\dots$>

(See photos notes)
___ 

# Arclength between 2 pts!! 
- Arclength btwn 2 time cords OR btwn 2 pts (2 ways 2 think abt it)
- Phyiscs: dst btwn obj travel btwn 2 time val, geo: dst btwn 2 pts on curve
1) Solve eq P=(0,0) -> r(a) = P -> $<asin(a),acos(a)>$,then $<0,0>$ or a=0
2) Then solve for Q = $(0,4\pi)$ -> r(b) = Q -> $<bsin(b),bcos(b)>$=$<0,4\pi>$ -> Sys of EQ, $bsinb=0,bcos(b)=4\pi$ 
    1) Solve for a&b to get LOI 
    2) Get b=4 for LOI, then plug into aLength formula 

Take shape: Apply formula -> get ans 

- arclength! 
    - $\int ^a_{b} |s(t)| \, dx$ (abs val)aap
    - eg. circumfrence of unit circ? 
    - v(t) = <cost,sint>, then s(t) = <-sint,cost> 
- Eg.2 arclength, 
    - What is arclength btwn P=(1,1), Q=(-1,1), then 
    - solve r(a) = P, so a=1, and r(b) = Q, so b = -1
    - therefore arclength = $\int _{-1}^1 \, \sqrt{1+4t^2 }dt$ 

### Q1) Create @param line 4 2D circle s/t clockwise + center on (3,2) + rad=5 + const speed = 3
- Take $<\sin t,\cos t>$ to center on (3,2) get: $<\sin t+3,\cos t+2>$ 
- Radius: $<5\sin t+3,5\cos t+2>=r(t)$ 
- To find speed: take r'(t) =$5\cos t,-5\sin t$ -> r'(t) =5, Obtain: $\frac{3}{5}=t$, then plug into original sin(t) for radius EQ 
    - Re@param 4 diff speed: 1) calc speed 2) undo original speed, multiply by new speed (hence how we get 3/5)

# Formulas! KNOW
- Slope of a @param $\frac{dy}{dx}=\frac{y'}{x'}$, and second derative if wanted would be = y''/x'
    - ex: $r(t)=<t^2,t^3>$
    - Take derative of both x&y, then take of y again putting ontop into y'' / x'