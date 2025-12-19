---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
---
# $P(Y > 15)$ 
```r
> 1-pnorm(15,20,10)
[1] 0.6914625
```

# $P(Y = 20)$ 
P(Y = a) = 0


# $P( 21 < Y <26)$ 
```r
> pnorm(26,20,10) - pnorm(21,20 ,10)
[1] 0.185919
```

# $P(Y < 11)$
```r
> pnorm(11,20,10)
[1] 0.1840601
```