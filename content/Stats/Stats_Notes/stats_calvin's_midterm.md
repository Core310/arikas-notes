---
class: Applied Stats MATH-4753 FA25
Type:
  - class
sch_sem: fa_25
---
# 1.) MTBE
$$
P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{98}{201} = \sim 0.48756
$$

# 2.) 
$$
P(A) = \frac{\text{Sum of A}}{\text{Sum of all}} = \frac{120}{223} = \sim .5381
$$

# 3.) Given:
$P(\text{positive} | \text{users}) = .95$
$P(\text{negative} | \text{non-users}) = .89$

---

# 8.) $P(Y \le 1.1)$
we know that $f(y) = \begin{cases} \frac{2}{3}y^2 & [0, 2] \\ 0 & \text{elsewhere} \end{cases}$

[Graph of f(y) from 0 to 2]

$F(1.1) = \frac{2}{9}(1.1)^3$

9.) $F(y) = \begin{cases} \frac{2}{9}y^3 & [0, 2] \end{cases}$
$\int \frac{2}{3}y^2 dy \rightarrow d=1$
$\frac{2}{9}y^3 \Big|_0^2$
$F(y) = \frac{2}{9}y^3 \quad [0, 2]$

$F(3) - F(1) = 0.875$

# 10.) $P(8 \le Y \le 13) = P(13) - P(8)$
$= \text{dnorm}(13, 12, 4) - \text{dnorm}(8, 12, 4)$
$= 0.0562$

# 11.) Guessed.

# 12.)  Birthday Problem
$P(A) = 1 - P(\bar{A})$
$P(\bar{A}) = \frac{365(365-1) \dots (365 - k + 1)}{365^k}$

$= 1 - \frac{\exp(\text{lchoose}(365, k) + 1 \text{factorial}(k))}{k \log(365)}$

Thus birthday(20) = .4114

---

# 4.) 
```r
epagas <- read.csv("EFMEHS.csv")
z_epagas <- (epagas$MPG - mean(epagas$MPG)) / sd(epagas$MPG)

outlier_epagas <- subset(epagas, abs(z_epagas) >= 2 & abs(z_epagas) <= 3)

min(outlier_epagas)
# [1] 300
```

# 5.) Given Standard Deviation is 3.
[Drawing of a normal distribution bell curve]
$\sim 99.9\%$
$99\%$

# 6.) 
$\text{mean} - \text{sd} \cdot 2 \text{, } \text{mean} + \text{sd} \cdot 2 \text{ : } 6$
[Drawing of L and U on a normal distribution]
To find U:
$U = \text{mean}(\text{epagas} \$ \text{MPG})$
$+ \text{sd}(\text{epagas} \$ \text{MPG})$
$= 39.4119$

# 7.)
$$
f(y) = \begin{cases} cy^2 & [0, 2] \\ 0 & \text{elsewhere} \end{cases}
$$
$$
\begin{gather*}
    f(y) = \frac{3}{8}y^2\\
= c \frac{y^3}{3} \Big|_0^2\
\\
\int_0^2 c y^2 dy = 1 \\
\therefore c = \frac{3}{8}\\
= c \frac{(2)^3}{3} - 0 = \\\frac{8}{3}c = 1
\end{gather*}
$$
