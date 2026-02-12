---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---
```
ppois(8,3) - ppois(3,5)
```

# 1) Y ~ Bin(n = 10, p = 0.4). $P(Y \geq 8)$ 
```r
#P(Y>=8) = 1 - P(Y<=7)
1 - pbinom(7,10,0.4)
0.01229455  

# not recommended
pbinom(7,10,0.4,lower.tail = FALSE)
0.01229455
```

# 2) X ~ Pois(lambda = 5). $P (3 < x \leq 8)$
```r
ppois(8,5) - ppois(3,5)
0.6668804
```

# 3) H ~ Geom(p = 0.6). $P(H > 10)$
```r
1 - pgeom(10,0.6)
4.194304e-05
```

# 4) Suppose Z ~ Bin(n = 20, p = 0.5). Find z s/t $P(Z \leq z)$ = 0.2517223)
```r
qbinom(0.2517223, 20, 0.5)
8
```

# 5) A ~ Pois(lambda=2) bruh how
```r
round(dpois(2,2),4)
0.2707
```