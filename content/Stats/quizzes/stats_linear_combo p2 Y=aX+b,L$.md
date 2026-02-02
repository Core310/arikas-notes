---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---
# $Y=aX+b,L$
$$
\begin{gather}
\\
Y = 3X +4
 \\ X \sim N (\mu =2, \sigma =5)
 \\
 L = 2H_{1} - 3H_{2} + 1H_{3}
 \\
 H_{i} \sim^{iid} N (\mu =2,\sigma^2 =3)
\end{gather}
$$

Finding E(#) plug mu in, V(#) if iid directly plug $\sigma^2$ into entire expr ^2 


# E(Y)
$$
3*2 + 4 = 10
$$

# E(L)
$$
\begin{gather}
(2 -3 +1)*2
\\ [1]\  0
\end{gather}
$$

| **Problem** | **Formula** (the first line)                        | **Information Used (mu)** | **Calculation**                  | **Answer** |
| ----------- | --------------------------------------------------- | ------------------------- | -------------------------------- | ---------- |
| **E(Y)**    | $E(3X + 4) = 3E(X) + 4$                             | $E(X) = 2$                | $3(2) + 4 = 6 + 4$               | **10**     |
| **E(L)**    | $E(2H_1 - 3H_2 + H_3) = 2E(H_1) - 3E(H_2) + E(H_3)$ | $E(H_i) = 2$              | $2(2) - 3(2) + 1(2) = 4 - 6 + 2$ | **0**      |

# V(y) 
$$
3^2*5^2 = 9 * 25 = 225
$$
# V(L)
$$
\begin{gather}
(4 + 9 + 1)*3
\\
[1]\ 42
\end{gather}
$$

| **Problem** | **Formula**                                                      | **Information Used (sigma)**                            | **Calculation**                    | **Answer** |
| ----------- | ---------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------- | ---------- |
| **V(Y)**    | $V(3X + 4) = 3^2 V(X)$                                           | $V(X) = 5^2 = 25$ (drop +b term)                        | $9 \cdot 25$                       | **225**    |
| **V(L)**    | $V(2H_1 - 3H_2 + H_3) = 2^2 V(H_1) + (-3)^2 V(H_2) + 1^2 V(H_3)$ | $V(H_i) = 3$ (and **independence** $\sim^{\text{iid}}$) | $4(3) + 9(3) + 1(3) = 12 + 27 + 3$ | **42**     |
|             |                                                                  |                                                         |                                    |            |
