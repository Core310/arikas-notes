---
class: Applied Stats MATH-4753 FA25
Type:
  - class
sch_sem: fa_25
---
(See md for full stuff ltr)

# The Problem
$$
\begin{gather}
f(y) = \begin{cases}
\frac{c}{500} (25 - y^2) & \text{if } -5 < y < 5 \\
0 & \text{elsewhere}
\end{cases}
\end{gather}
$$

# Solution
Then its as simple as finding the $\int$ for this. We know that over $[-5,5]$, the AUC must be = 1, more formally we have the top part of f(y) equating to 1

Firstly we want to find the value of $\frac{c}{500}$ (which is a bit weird since we want to find C = c in our integral)
$$
\begin{gather}
a =\frac{c}{500} 
\\a \int_{-5}^5 25-y^2dy=1
\\a \left[ 25y-\frac{y^3}{3} \right]^5 _{{-5}}=1
\\  a \left( \frac{500}{3}+C \right)=1
\\  \frac{c}{500}\left( \frac{500}{3} \right)=1
\\ \frac{c}{3}=1,c=3
\end{gather}
$$
So we can now solve the actual integral up to any given point $i$ as such:
$$
\begin{gather}
\frac{3}{500} \int  ^i_{-5} 25-y^2dy=1
\\ \frac{3}{500}\left[ 25y-\frac{y^3}{3} \right]^i_{{-5}}
\\ 
 \frac{3}{500} \left( \left( 25i - \frac{i^3}{3} \right) - \left( 25(-5) - \frac{(-5)^3}{3} \right) \right) \\
  \frac{3}{500} \left( 25i - \frac{i^3}{3} - \left( -125 - \frac{-125}{3} \right) \right) 

\\ \boxed{\frac{3}{500}\left( 25i-\frac{i^3}{3}+\frac{250}{3} \right)}
\\ \text{we realise that simply simplfying the 3/500 into the rest will match our orignal "answer"}
\end{gather}
$$

