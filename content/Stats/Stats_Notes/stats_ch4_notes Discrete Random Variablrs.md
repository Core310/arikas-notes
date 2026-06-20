---
Type:
  - class
class: Applied Stats MATH-4753 FA25
tags: []
sch_sem: fa_25
---

- [[stats_Chapter 4.pdf]]

# Discrete Random Variablrs dpqr
[[Stats_Quiz dpqr2]]

todo when would I use each one?

| Distribution   | PMF/PDF (`d*`) | CDF (`p*`) | Quantile (`q*`) | Random (`r*`) |
| -------------- | -------------- | ---------- | --------------- | ------------- |
| Normal         | `dnorm`        | `pnorm`    | `qnorm`         | `rnorm`       |
| Binomial       | `dbinom`       | `pbinom`   | `qbinom`        | `rbinom`      |
| Geometric      | `dgeom`        | `pgeom`    | `qgeom`         | `rgeom`       |
| Hypergeometric | `dhyper`       | `phyper`   | `qhyper`        | `rhyper`      |
| Poisson        | `dpois`        | `ppois`    | `qpois`         | `rpois`       |

## Binom functions
Prob btwn 2 vars of a TRUE/FALSE outcome
- p=prob of susc
- k= # trials

### p&dbinom table
- k = goal
- n=$\mu$
- p=$\sigma$ 

| Probability you want      | R expression                        |
| ------------------------- | ----------------------------------- |
| $P(X \le k)$ (lower tail) | `pbinom(k, n, p)`                   |
| $P(X < k)$                | `pbinom(k-1, n, p)`                 |
| $P(X \ge k)$              | `1 - pbinom(k-1, n, p)`             |
| $P(X > k)$                | `1 - pbinom(k, n, p)`               |
| $P(X = k)$                | `dbinom(k, n, p)`                   |
| $P(k < X \leq m)$         | `pbinom(m, n, p) - pbinom(k, n, p)` |

### Q&Rbinom

| name                            | expr                                 | r               |
| ------------------------------- | ------------------------------------ | --------------- |
| Quantile function (inverse CDF) | no. fail k s/t $P(x \leq k ) \geq p$ | `qbinom(k,n,p)` |
| rbinom                          | random sample                        | `rbinom(k,n,p)` |

```r
qbinom(0.95, size=5, prob=0.5)#in 95% of simulations chance you’ll get 5 heads after x runs, in this case 11
dbinom(3, size=5, prob=0.5)   # P(3 tails before 5 heads)
rbinom(1, 10, 0.5)# in x=10 flips, how many heads?
```

#### qbinom: P(x failures b4 size-th success) {qbinom}
- Returns failures
- k% of experiments will require at most x{return} failures to reach n successes
- k: $xth$ percentile of trails (95% of trails will have following..)
- n: Size per trial- p: Probability success, eg. x% succeeds (coin flip =0.5)

### rbinom  
- n=  # draws per trial
- size = # of trials
- probability? (coin flip  = 0.5)

## Other Distribution types

### Hypergeometric Distribution
[still confused](https://chatgpt.com/s/t_68dd614d02788191aafb8af173243164) 
Draw from a finite population without replacement. Eg. Draw 5, total 10red 40 blue
```r
# {d,p,q,r}hyper(...)
dhyper(2, 3, 6, 4)#Probability of drawing 2 red when picking 4 marbles
```

### Normal Distribution
Data = norm distro, takes in mean and sd
```r
xnorm(mean,sd)#where sd = standard deviation
dnorm(x, mean, sd)   # PDF (density)
pnorm(q, mean, sd)   # P(X ≤ q)
```

### Multinomial Distribution
https://chatgpt.com/s/t_68dd61327b648191860af24c2e9eabc6
$$
\begin{gather}
P(y_{1}=2,y_{2}=4,y_{3}=4)
\\
\text{n trials}
\\ \text{k possible outcomes}
\\ 
\end{gather}
$$
```r
dmultinom(x = c(2,4,4), prob = c(0.3,0.4,0.3))
```

### Negative Binom
How many trials do I need to perform to get x sucesses? **Used to get confidence intervals!**
- We generally have to re@param these functions in order to fit into the r function (from qn -> this)
- 

### Poisson distribution
$$
\begin{gather}
P(Y=y)=\frac{{e^\gamma \gamma^y}}{y!}\\
P(y=2,\gamma=4)
\\ dplus(2,4)
\end{gather}
$$
To work it out we use:
- d/p/q/rpois
- WE DO NOT USE `lower.tail=FALSE`
    - Does not include the actual q range (middle valued range), in general it's NOT what you want
    - If you want a upper tail, use 1-... (see [[stats_ch4_notes Discrete Random Variablrs#Binom functions]] 




https://chatgpt.com/s/t_68dd6184d2fc8191ac3895ddaed74b21

Used in measuring half-life decay. Lets take some neuclus, 4 particles /s **on avg**, being released out of it.


## Defitions Random Vs Discrete Random Vs Continous Random
1) Discrete Variable
    1) Random variable from a finite set (Pick random number from list)
2) Continuous Variable
    1) Can take ANY value in defined range eg. \[0,1] but any float between that range
    2) Not contable! Infinite possb
3) Random Variable.
    1) assigns a numerical value to each outcome of a random process
    2) Always has some range 




[mathStackEx](https://math.stackexchange.com/questions/1590763/discrete-vs-continuous-vs-random-variables)

## Theroms (required to know!!) {Go over These Later (ask what Abt Them U Shuld know)}
#todoStudy  

#### Expected Value: (4.1,2,3)
Know: Sum of probility MUST be 1, a sum of constant must still be some constant

**Rule 1**: 

For constant c

$$
\begin{align}
\boxed{E(c)=c} \\ \text{proof:  } \\
E(x)=\sum_{all \ x} x \ p(x)=E(c)=\dots
\end{align}
$$

**Rule 2**

$$
\begin{align}
\boxed{E(cx)=cE(x)} \\ 
\text{Proof:}\\
E(cx)=\sum_{all \ x } c \ x \ p(x)
\end{align}
$$

c is some constant wrt. x, hence can bring out infront of sum. But we already have a defition for this once we bring out the c, so its $cE(x)$ proved!

**Rule 3**

$$
\boxed{E[g_{0}(x)+\dots + g_{i}(x)] = \sum E(g_{i}(x))}
$$

#### Vairence
Defined by: 

$$
\begin{align}
\boxed{\sigma^2=E(x^2)-\mu^2} \\
\text{Proof: }\\
\text{By defition, $\sigma^2=E((x-\mu)^2)$ so expand+simplify: }\\
E(x^2-2x\mu+M^2)=\boxed{E(x^2)-2\mu E(x)+\mu^2}
\end{align}
$$

We can expand inside:

$$
\sigma^2=E(x^2)-2\mu^2+\mu^2= \boxed{E(x^2)-\mu^2}
$$

# Binomial Probaility Distro
Formula is like [[stats_ch3_notes probilitiy Bayes therom , tables#Combinations (Binomial Probability Distribution)]]
Formally, in `r` this is described as:
```r
dbinom(3, size = 10, prob = 0.5)
```
Probability of getting 3 h in 10 coin flips, whr e/a flip probability 0.5 heads

### Bernouli (binomial) Probability Distribution Coin Flip Example: (will be on midterm!!)
Consider coin flip, H/T, then |sample_space|=2 (H/T)

$$
\begin{gather}
x ~\sim~ Bern(p) \\
x=\{1,0\}
\end{gather}
$$

Then 

$$
\begin{align}
P(x=1)=P\\ P(x=0)=q=1-P
\end{align}
$$

Lets toss the coin n times, then count # of heads:

$$
x = \text{no. heads in n flips} 
$$

For example 

$$
P(x=3) \ n=10 \ p=0.4
$$

# Moment Generating Functions: {Math}
Defined as 

$$
\begin{gather}
x \sim Bern(p)\\
\text{MGF for above: } M_{x}(t)=q_{t} pe^t
\\ \text{Proof:}\\
\frac{dM}{dt}=\frac{d}{dt}(q+pe^t)=\\
\boxed{pe^t|_{0} =p}
\end{gather}
$$
Use MGF derative formula (below [[stats_ch4_notes Discrete Random Variablrs#MGF Therom]])

We have 3 main defitions, all focus on the following:

$$
\begin{align}
\mu'_{k}=E(Y^k) \\
k=1,2,\dots \\
\end{align}
$$

### MGF Therom: (ON EXAM!) See ex4.21/22 
(Makes easier, instead of using defition of expected value, we can prove like so instead)
$$
M_{k}'=\frac{d^k M_{x}(t)}{dA^k} |_{t=0}
$$

Lets have the MGF of $\sigma^2$ 
$$
\begin{gather}
o^2=E((x-\mu)^2)
\\
E(x^2)-\mu^2
\\
M'_{2}-(M_{1})^2
\\ \text{Lets derive both now:}
\\ E(x^2)=\mu_{2}'=\frac{d\mu^2}{dt}|_{t=0}
\\ 
\end{gather}
$$

#### Example: MGF (end of ch 4)
**q+p =1**

$$
\begin{gather}
x \sim Bin(n,p)
\\ M_{x}(t)=(q+pe^t)^n
\\
\text{Start by finding: } \frac{dM}{dt}
\\ =\frac{d}{dt}(u^n) = 
\\ \frac{du^n}{du} \cdot \frac{du}{dt} \text{<- chain rule}
\\ n u^{n-1} pe^t = \boxed{n(p+pe^t)^{n-1} pe^t |_{1}}
\end{gather}
$$


## Overbooking problem (project 1)
[[Stats_overbooking_quiz TODO]]

see [here](https://math.stackexchange.com/q/2949488/922005) 
- Flight, n seats, y tickets,  
- Find: # tickets should sell?
- $\gamma$ will always be a given var

Given some 
$$
\begin{gather}
f(n)=0
\\

\end{gather}
$$




$$
\begin{gather}
y=\{1,0 \}
\\ \text{for: 1=show + ticket, 0=ticket \& no show}
\\ \text{Where p=probility of showing up. We have set:}
\\ S=y_{1}+y_{2}+\dots+y_{i}
\\ \text{then for n=no. tickets sold:}\\ S \sim Bin(n,p)?
\end{gather}
$$
Lets start by figuring out
$$
P(S \leq n+1)=\gamma ?
$$
Which can be denoted by the following
```r
pbinom(N~p)
```
- N = no.seats (given)
- **a** (not given!!!)
- p=show probility (given)
- $\gamma$(given)

### Code example:
- Suppose N=200 (seats on flight)
- Prob showing up $p=0.95$ 
- $\gamma=0.8$
- Then: we can plot with our given function 
```r
#pbinom(N+1,x,p) - 1 + g =0

f <- function(x, N = 200, p = 0.95, g = 0.8){

  obj <- pbinom(N+1, x,p) -1 +g
  abs(obj)
}

xx <- seq(200,220,by = 1)#f(xx) -> outputs bunch of #s
#Then to solve the problem we just need to find the smallest value for this. We can just do 

f(xx)

plot(xx, f(xx),
     pch =21,
     bg = ifelse(xx != 215, "blue", "red"),
     xlab = "Number of Tickets sold",
     ylab = "Objective function",
     main = bquote(f(x) == pbinom(N+1,x,p) - 1 + gamma))

which(f(xx) == min(f(xx)))#OUT 16: what index works to give us our min? Then we find our min
xx[16]
#Hence, we should sell 215 tickets given all of the input data!
```
![[Pasted image 20251006133303.png|500]]

# Lab 5 content

## Generating a Random sample
Suppose that there is a bag of 20 marbles, 12 white (“1”) and 8 black “0”. Using the sample() function create a sample of size n=5 without replacement
```r
sample(c(rep(0,12), rep(1,8)),size=5, replace=FALSE)
#where c is some array, rep(int,repeat_x_many_times)
#size=n=#taken
#replace: should sampling be with replacement? (do I take out what I just took out of the sample space? True: False

# If we wanted to do a coin flip:
sample(c("H","T"),size=10,prob=c(1/2,1/2),replace=TRUE) 
sample(c(1,0),size=10,prob=c(1/2,1/2), replace=TRUE)
```

## Binomial Experiment
Simulate a binomial experiment n=10,p=0.7, and Y=number of successes.
```r
a <- c(100, 200, 500,1000,10000)#iteratiomns
for(i in a){
  print(  mybin(iter=i,n=18, p=0.3)  )#binomial expirment
}
```

## Formula to code

### Pois calculation
$$
P(Y > 4),Y\sim Pois(\lambda=2) 
$$
```r
1 - ppois(q = 3, lambda = 2)
```

### Advanced choose
$$
P(Y=10),Y\sim NegBin(p=0.4,r=3)
$$
```r
choose (10 - 1, 3-1) * 0.4 ^3 * 0.6 ^ (10-3)
```

### Advance pbinom
$$
P(Y \leq 8), Y \sim Bin(n=15,p=0.4)
$$
```r
pbinom(q = 8, size = 15, prob = 0.4)
```

# Stuff on midterm
- Bernouli 
- Testing problem??


