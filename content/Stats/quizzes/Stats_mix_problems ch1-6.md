---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---
- args = $\mu,\sigma$? -> some `norm`, 
- = $n,p$? some `binom`



# Find $P(X > 15)$ where $X \sim \text{Bin}(n = 20, p = 0.6)$ 
```r
> 1 - pbinom(15,20,0.6) 
> [1] 0.05095195
```

# $P(Y < 14)$ where $Y \sim \text{N}(\text{mu} = 20, \text{sigma} = 10)$ 
```r
> pnorm(14,20,10) 
> [1] 0.2742531
```

# If $L = 2Y_1 + 2Y_2 - 3Y_3$ and $Y_i \stackrel{iid}{\sim} N(mu = 3, \sigma^2 = 2)$ find $V(L)$
```r
> V(L) (4 + 4 + 9)*2 
> [1] 34
```

# Suppose Y~Gamma($\alpha =2, \beta=3$) Then P(Y < -7) = 0 ?

**True**

Measuring btwn 2-3, so impossible to fall in -7
