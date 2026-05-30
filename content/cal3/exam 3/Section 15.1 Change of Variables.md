---
sch_sem: sp_25
class: compSec
---
# Change of Variables

___

# Eval some $\int$  region bounded by some region   
$$
\int \int _{D} x(y-1)dA, \qquad y=1-x^2,\quad y=x^2-3 
$$

Essentially with this we aren't doing any transformations, just integrating as such. No need to worry about jacobinan, just integrate after finding the bounds as per normal:

1) Find bounds
    1) Set both eq equal to each other
    2) Outer $\int$ is whatever result of step 1
    3) Inner $\int$ is from $h_1, \quad h_2$ 
    4) If both h and g aren't some function of x, then find where its bounded by (basically draw a graph girl)
2) Integrate normally

Where $D = \{ (x, y) \mid a \leq x \leq b, \, g_1(x) \leq y \leq g_2(x) \}$, the integral is defined to be:
$$
\iint\limits_{D} f(x, y) \, dA = \int\limits_{a}^{b} \int\limits_{g_1(x)}^{g_2(x)} f(x, y) \, dy \, dx
$$
