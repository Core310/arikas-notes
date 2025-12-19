---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
---
# P(Y > 8)
0.5 since the mean is 8 (1/2 on either side of the mean)

# $P(2 \leq Y \leq 7)$
```r
> #Y ~ N(8,2)
> pnorm(7,8,2) - pnorm(2,8,2)
[1] 0.3071876
```
# $P(Y < 6)$
```r
> pnorm(6,8,2)
[1] 0.1586553
```

# $P(Y = 10)$ 
P(Y = a)  = 0 since no area above a point