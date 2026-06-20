---
Type:
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---

[[stats_chapter5.pdf]]

# Overview:
- Density plot
- Density functions
- Probility

#### Contionous random variable Y: 3 properties:
- |Y| = $\infty$
- cont
- $P(Y)=x ? 0$ (prob of y = certain value =0)

Defition of variaence of Y? (p.24)
$$
\begin{gather}
\sigma^2=v(y)=E((y-\mu)^2)
\\

\end{gather}
$$

#### Density Function
Knowing Y, and cumlative distribution func as F(y) then can define it as the derative of Y, formally:

$$
\begin{gather}
F(y_{0})=P(Y \leq y_{0}),-\infty < y_{0} < \infty\\ \text{then: }
f(y)=\frac{dF(y)}{dy}
\\
f(y) \geq 0
\\
F(\infty)=0
\\P(a < Y < b)=F(b)-F(a)
\end{gather}
$$

##### Plotting Density func (review later mayb -rm)
```r
curve(
dbinom(x,
      mean=10
      sd=5
      ),
      xlim=c(10-3n*5,10+3m*5)
)
```
$$
\begin{gather}
P (2 \leq x \leq 12)\dots
\\

\end{gather}

$$

## Takeaaways:
$$
\begin{gather}
Y=aX+b
\\ V(Y)=a^2(V(x))
\\

\end{gather}
$$
**Using integrate function does not (show your work) sohuld be done by hand**

#### Example Problem (slide 15)

## Uniform distributions (dpqr-norm)
- dnorm: Height of normal
- lower tail area of the Normal up to given y
- 

# Central Limit Therom

# New keywords
```r
polygon #

```


# Ways to determine normality:
- Histogram/stem&leaf
- .
- qqplot


# Gamma probailitiy distro
- $\gamma$ = density, gamma density
- $\Gamma$ = gamma function = makes AUC ($\int$) = 1

## Weibull
- Dont need to know proof, just how code works..

# Stuff you need to do:
- Given distro + params -> find prob?
- Find dpqr!
- plot density
- calculate probility {wait isnt this dpqr? Check..} (**it must use a p function!**)

# Exam
- Ch 1-6
- Work out `z`
- `boxplot` for outliers general `plots` 
- `wrangle`
    - Have the `[]` and `dylyr`
- `tables`
    - `and/or/given/marginal`
- `outliers`
- Random variables `dpqr` eg. $P(x,y,z$ )
    - Will have paragraph problem, 
- `barplots` out of `table` know options + how 2 play around w/ it.. 
- YOU MAY NOT USE PACKAGE IN EXAM
- exam designed to be busy, will be time constraint! !time looking for things 
- Review: Assignment/slides/quizzes