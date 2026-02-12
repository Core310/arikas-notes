---
class: Applied Stats MATH-4753 FA25
Type:
  - class
sch_sem: fa_25
---
[[stats_Chapter 6.pdf]]


- COMMA MEANS AND IN THIS CONTEXT

#### Joint probility distro p(x,y)
- 2 discrete rand vars [[stats_ch4_notes Discrete Random Variablrs#Discrete Random Variablrs dpqr#Defitions Random Vs Discrete Random Vs Continous Random]]
- gives p(x,y) for all combos of x & y, rem prob must equate to 1 (sum of all poss)


What I should be able to do given table below":
- AND OR GIVEN MARGINAL
- p(y=1,x=2?) = sum 

| $Y=y$ \ $X=x$ |  1  |  2  |  3  |  4  |
| :------------ | :-: | :-: | :-: | :-: |
| 0             |  0  | .10 | .20 | .10 |
| 1             | .03 | .07 | .10 | .05 |
| 2             | .05 | .10 | .05 |  0  |
| 3             |  0  | .10 | .05 |  0  |

## Joint Prob 

#### Joint Marginal prob aka $p_1(x)$ 
- slide 9/10

*Varience of $y_1$* can be denoted like so:

#### Joint density func example, An easy double integral;\
Suppose the joint density function for two continuous random variables, $X$ and $Y$, is given by
$$f(x, y) = \begin{cases} cx & \text{if } 0 \le x \le 1; 0 \le y \le 1 \\ 0 & \text{elsewhere} \end{cases}$$
Determine the value of the constant $c$.

##### Solution:
1) We note the inequalities btwn 0&1
2) Using our given function, we can generate a graph with it, where 
    1) only cx generates some output, and all other places generate a 0 (via area, so generate some triangle $f(x,y) = cx$ with 2 lines)
3) Now that we have the shape, we can integrate the triangle, where we know that the area must equal 1 (since it rep total prob space)
4) Hence, we can just integrate the double integral easily.. (recall triangles)

- Note we must generate the correct picture! 
![[WhatsApp Image 2025-10-20 at 13.35.57_ec0abb03.jpg|600]]
A graph of $f(x, y)$ traces a three-dimensional, wedge-shaped figure over the unit square ($0 \le x \le 1$ and $0 \le y \le 1$) in the ($x$, $y$)-plane, as shown in Figure 6.1. The value of $c$ is chosen so that $f(x, y)$ satisfies the property
$$\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) \,dx \,dy = 1$$
Performing this integration yields
$$
\begin{gather}
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) \,dx \,dy = \int_0^1 \int_0^1 cx \,dx \,dy \\
= c \int_0^1 \int_0^1 x \,dx \,dy = c \int_0^1 \left[ \frac{x^2}{2} \right]_0^1 \,dy \\
= c \int_0^1 \frac{1}{2} \,dy = \left( \frac{c}{2} \right) [y]_0^1 = \frac{c}{2}
\end{gather}
$$


### Covarience Defition (p30)


Cumlative distro func:

See ex 6.15 (in exam!)

___

$$
\begin{gather}
F_{w}(w)=..
\\
f_{w}(w)=\frac{dF_{w}(w)}{dw}=..
\\

\end{gather}

$$


Then we `plot` normally (p func) and density (d func). We denote this by using the 
```{r}
plot() 

```

