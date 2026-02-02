---
class: Applied Stats MATH-4753 FA25
Type:
  - class
sch_sem: fa_25
---

# Shapiro-Wilk test
Test just tells if data is likely distrubited normall
- $h_0$ = data normal distreubited
- $h_1$ =! normal distreubited
## NULL hypothesis $H_i$
- $H_0$ $p \leq 0.5$
	- Closely "false" (more evidence against) aka hypothesis is wrong
- $h_1$ $p  > 0.5$
	- Closely "true" when higher p-value (more for)
	- higher p value means error is liekly normally distrubited

> [!warning]
    > We never say that the null hypothesis is "True", only that we fail to reject the null
    > 
    > High p means we don’t have enough evidence to reject the null. Doesn’t mean the null is true, but it means support for Ha isn’t strong enough to reject Ho.
## p-value 
A high p value only tells you you had limited evidence against the null. However if you had a very large sample it might be reasonable to conclude the null is either true or the true value differs only a small amount from the null (any true effect is small).
## Residuals
Residuals = observed value − predicted value.

# Adjusted vs Multiple $R^2$
where $.lm$ is some linear model
- Adjusted $R^2$ how well data fits model
```r
summary(quad.lm)$r.squared
```
- w
```r
summary(spruce.lm)$r.squared
```

# Cooks Distance:

# Piecewise Regression

# lowess smoother?

# fitted values? Fitted()
# anova

# Proof
Prove using latex that $$y=\beta_0+\beta_1x+\beta_2\left(x-x_k\right)I(x>x_k)$$ where I() is 1 when $x>x_k$ and 0 else.

# Code
```r
normcheck(plot_1,plot_2)
# plots 2 graphs side by side, 

```

- What is H1, H2 in norm check? 
- Null hypothesis?
- What is P-value in normality check


```r
I(...)
# AS IS FORMULA, do not interperate a ^ 
```
## Predict the Height of spruce when the Diameter is 15, 18 and 20cm (use predict())

```r
predict(quad.lm, data.frame(BHDiameter = c(15, 18, 20)))
```

# adjusted R squared determine which is “better” (whatever with higher value)
summary(spruce.lm)$adj.r.squared

