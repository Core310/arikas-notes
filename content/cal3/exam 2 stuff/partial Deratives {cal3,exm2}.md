# Partial deratives
- $f(x,y)=4-2x-2y$
- P= (1,2) 
- Create some r(t) by $r(t)=t<1,0>+<1,2>$
- So we take $\frac{d}{dt}f(r(t)),t_{0} \cdot \frac{1}{|r'(t_{0})|}$

We can do the shortcut! 
- Treat y like a const, and derive for the rest of the things. Then treat x as a const 
- 
___
# Deratives! (WOO) {Formally}
Derative of func $f(x,y)$ along some cruve r(t) @ pt P is:
$$
\frac{d}{dt}(f(r(t)))\cdot \frac{1}{|r'(t)|},r(t)=t_{0}
$$
Eg. Let P = (1,1), then let $r(t) = <t,t>$, hence $t_0=1$ 
- Derative of f along r @ P is: 
- Applying the formula we get: 
$$
\frac{d}{dt}(4-2t-2t)-\frac{1}{\sqrt{ 2 }}=-\frac{4}{\sqrt{ 2 }}
$$

In 1d calc, derative means slope of line, then in 2d, says as approach some pt along cruve, slope of that curve is such value (the derative)  

# Question 2! 
- Let $f(x,y) = 4-2x-2y$ 
	- $r(t) = <-t,-t>$
	- $P=(1,1)$
- a) What derative along r @ P? 
- b) Derative of f along $r_2$ @ (-3,4), $r_2=<t^2-3,t^2+4>$ 

Esentially this question asks us what happens when example above is in oop dir? 
- We find $r'(t)=<-1,-1>$ (given that mag of r(t) = $\\sqrt{ 2 }$, and we combined the derative of f(r(t)) @ $t_{0}=4$ 
	- This is from 
- Answer $\frac{4}{\sqrt{ 2 }}$
 
for 2) 
- $r'(t)=<2t,2t>$, $r(t_{0}=(0,0)$, but we can't do 1/0 for the EQ! 
___
# @ params
- @param surface? 
	- $r(s,t) = <x(s,t),y(s,t), ...>$ 
- @param plane? 
	- Cartesian: $r_1(s,t) = <s,t>$
	- Polar: $r_1(s,t) = <scos(t, s sin(t)>$
- Have your 3 planes: cartesian, xyplane, polar cords (should know all 3 of these, where s=0 or t=0)
- Learn how to integrate in a different cord system? (its js integrate in cartesian cords * some area strectch factor to convert)
- What it means 2 take derative along a curve (key idea) 

# Derative representations 
- $f'(x_0)$ rep slope going right
- r'(t) = tan vect as t inc 
- f(x,y) (partial derative {pd}): slope as x inc, y fixed (or OPA)
- r(s,t) (pd): Tan vect as s inc + t fixed 
	- f(x,y) 2D ? approximated by tan plane ? if tan plane given by differentiable plane as TTP: pd(r_s), pd(r_t) , $f(x_0,y_0)
	- Then normal vect 
## Question 1 (hint use sys of EQ 2 solve)
Let P = (2,2), f(x,y) = $2x^2y+y$
- Find some r(t) that passes thru P?
	- Just need any pt whr $t_{0}=P$
- Compute derative along r(t).
	- Setup SoE, solve then obtain P 
# Domains of multi var funcs 
- $f(x,y)=e^{x^2+1}-e^{-y}$
	- What is the domain?: All reals
	- let $r(t) = <t^2+1,t^2>$, what is shape? 
		- Let p = (2,1), then what time cords intersect @ this?, $t_{0}=\pm_{1}$
	- Derative @ $t=t_0$? Then $\frac{d}{dt}f(r(t))$ (Follow same formula frm [[partial Deratives {cal3,exm2}]])
		- = $\frac{d}{dt}(e^{(t^2+1)^2+1}-e^{-(t^2)})^{t_{0}} \cdot \frac{1}{r'(t)}$ .