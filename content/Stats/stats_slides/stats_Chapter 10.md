---
title: "stats_Chapter 10"
---

# stats_Chapter 10

![[Stats/stats_slides/stats_Chapter 10.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/Stats/stats_slides/stats_Chapter%2010.pdf) | [Download Local](/Stats/stats_slides/stats_Chapter%2010.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CHAPTER 10
Wayne Stewart

LABS 3 AND 4 ARE CRITICAL!!

Pvalue song

# 10.72
v <- Intro2R::myreadxl()
helium <- v$HELIUM
names(helium)
ylm <- lm(PROPPASS ~ TEMP, helium)
library(ggplot2)
g <- ggplot(helium, aes( x = TEMP, y = PROPPASS)) + geom_point()
g <- g + geom_smooth(method = "lm", formula = y ~ x)
g
summary(ylm)

Summary information
> summary(ylm)
Call:
lm(formula = PROPPASS ~ TEMP, data = helium)
Residuals:
Min
1Q
-0.30732 -0.02940

Median
0.03045

3Q
0.05943

Max
0.17014

You must know how
to interpret ALL of
this output!!

Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept) -13.490347
2.073772 -6.505 0.000187 ***
TEMP
-0.052829
0.007728 (-6.836)^2 0.000133 ***
--Signif. codes:
0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

ෝ
𝝈

Residual standard error: 0.1333 on 8 degrees of freedom
Multiple R-squared: 0.8538, Adjusted R-squared: 0.8356
F-statistic: 46.73 on 1 and 8 DF, p-value: 0.0001329

?

𝜎2
𝛽መ1 ∼ 𝑁 𝛽1 ,
𝑆𝑆𝑋𝑋
𝜎2
∑𝑥𝑖2
𝑛
መ
𝛽0 ∼ 𝑁 𝛽0 ,
𝑆𝑆𝑋𝑋
𝑅𝑆𝑆
2
2
෢
𝜎 =𝑆 =
𝑛−2

F STATISTIC
LAST LINE OF SUMMARY

WHAT WE
NEED TO
COVER

SOME DEFINITIONS

THE MODEL

ASSUMPTIONS

ERROR DISTRIBUTIONS

RESIDUALS

NOTICE THE BOOK USES SSE NOT SSR

CAN YOU PROVE THESE?

THE FOLLOWING THEOREM IS PROVED IN
MATH 4773 WHERE LA IS USED EXTENSIVELY

𝑅𝑆𝑆
2
𝑆 =
𝑛−2

THEOREM 10.1

𝑆2

INTERPRETATION OF 𝑆

RAR MAN!!

CI FOR 𝛽1

TEDIOUS CALCULATIONS DONE BY R
THROUGH lm()

CORRELATION

LINEAR
ASSOCIATION

CORRELATION ≠ CAUSALITY

STORKS DELIVER BABIES?

• Pioneering statistician George Udny Yule, author of the
seminal 1911 textbook Introduction to the Theory of
Statistics, explained confounding factors with a
pleasing reference to reproduction. He noted that in
Alsatian villages numbers of human newborns are
correlated with numbers of storks nesting locally. It is
tempting to conclude that storks do actually deliver
babies, but the real explanation is far more mundane.
Larger villages have more houses with chimneys for
storks to build nests, and more babies are of course
delivered in larger villages. The confounding factor is
village size.

cor.test() in R

COEFFICIENT OF DETERMINATION OR
MULTIPLE 𝑅 2

SIZE

PRACTICAL INTERPRETATION

ADJUSTED 𝑅 2 = 𝑅 𝑎2 HERE 𝑘 = 1

cor.test() in R

ESTIMATION AND PREDICTION

PREDICTION INTERVAL

EXAMPLE 10.11

OUTSIDE THE RANGE – WATCH OUT!!

F-STAT

IN R, 𝐻0 : 𝛽1 = 0

How do we combine
levels???

We can order the
levels by using
“factor()”

BASSBUFF first – why?

OTHER
ISSUES

B E AWA R E O F T H E
I S S U E S R E L AT E D TO
THE CLASSICAL
PA R A D I G M ( P VA L U E S )

EASY TO UNDERSTAND WARNINGS

P-VALUE

MORE LESSONS (VERY USEFUL)

FIND A

Coefficients:
Estimate Std. Error t value Pr(>|t|)

(Intercept)

-0.6949

4.6645

##A##

####

x

8.2396

##B##

31.360

<2e-16 ***

---

FIND B

Coefficients:
Estimate Std. Error t value Pr(>|t|)

(Intercept)

-0.6949

4.6645

##A##

####

x

8.2396

##B##

31.360

<2e-16 ***

---

FIND C

Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept)

-0.6949

4.6645

-0.149

##C##

x

8.2396

0.2627

31.360

<2e-16 ***

--Signif. codes:

0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 12.46 on 28 degrees of freedom
Multiple R-squared:

0.9723,

Adjusted R-squared:

F-statistic: ##D## on 1 and ##E## DF,

p-value: ##F##

0.9713

FIND D

Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept)

-0.6949

4.6645

-0.149

##C##

x

8.2396

0.2627

31.360

<2e-16 ***

--Signif. codes:

0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 12.46 on 28 degrees of freedom
Multiple R-squared:

0.9723,

Adjusted R-squared:

F-statistic: ##D## on 1 and ##E## DF,

p-value: ##F##

0.9713

FIND E

Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept)

-0.6949

4.6645

-0.149

##C##

x

8.2396

0.2627

31.360

<2e-16 ***

--Signif. codes:

0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 12.46 on 28 degrees of freedom
Multiple R-squared:

0.9723,

Adjusted R-squared:

F-statistic: ##D## on 1 and ##E## DF,

p-value: ##F##

0.9713

FIND F

Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept)

-0.6949

4.6645

-0.149

##C##

x

8.2396

0.2627

31.360

<2e-16 ***

--Signif. codes:

0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 12.46 on 28 degrees of freedom
Multiple R-squared:

0.9723,

Adjusted R-squared:

F-statistic: ##D## on 1 and ##E## DF,

p-value: ##F##

0.9713

FIND THE SAMPLE PEARSON
CORRELATION COEFFICIENT
Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept)

-0.6949

4.6645

-0.149

##C##

x

8.2396

0.2627

31.360

<2e-16 ***

--Signif. codes:

0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 12.46 on 28 degrees of freedom
Multiple R-squared:

0.9723,

Adjusted R-squared:

F-statistic: ##D## on 1 and ##E## DF,

p-value: ##F##

0.9713

r

</details>
