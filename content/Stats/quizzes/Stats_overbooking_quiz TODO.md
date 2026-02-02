---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---
- **N** is the number of tickets sold
	- False
- gamma is the pain factor or the probability of overbooking eg. $\gamma = P(s>N)$
	- True


Rearrange following: 
$$
f(n)=pbinom(N,n,p)-1+\gamma
$$
Find n when f(n)=0?

AKA: If N = 300, p = 0.97, gamma = 0.75 how many tickets should the airline sell?

```r
xx <- seq(300,320,by = 1)
indx <- which.min(f(xx))
xx[indx]

#-> 312
f <- function(x, N = 300, p = 0.97, g = 0.75){  
  obj <- pbinom(N, x,p) -1 +g  
  abs(obj)  
}
```
