---
class: TOC CS3823
Type: class
sch_sem: fa_25
---
# Example 1
$$
\sum^n_{i=1}i=\frac{{n(n+1)}}{2}
$$

1) Base case: n=1, solve -> 1=1, true!
2) Assume that the formula holds for n=k, so we now have:
$$
\sum^k_{i=1}i={\frac{k(k+1)}{2}}
$$


4) Induction step, if n=k holds true, then n=k+1 must hold true too, so lets now check for that:
$$
\frac{{(k+1)((k+{1}+1))}}{2}=
$$


# Strong vs simple proof by induction? 
- Esentially the same, however he will test on their differeences. 


# Example 2
$$
S=1+a+a^2+...+a^n, 0<a<1
$$
How would we solve this? 
1) We can take $aS=a+a^2+\dots+a^{n+1}$
2) So we have $(1-a)S=1,S=\frac{1}{1-a}$ 
3) Hence it must converge to some 1/0...