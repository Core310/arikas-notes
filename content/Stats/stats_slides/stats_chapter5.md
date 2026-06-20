---
title: "stats_chapter5"
---

# stats_chapter5

![[Stats/stats_slides/stats_chapter5.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/Stats/stats_slides/stats_chapter5.pdf) | [Download Local](/Stats/stats_slides/stats_chapter5.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Chapter 5
Dr Wayne Stewart

Setting up tests for functions

usethis::use_testthat()

Click!!

Look what should be made
and returned

These go in
CANVAS
comments

Skills
• Plot densities
• Calculate
• densities
• probabilities
• quantiles
• Know the functions
• d-stem
• p-stem
• q-stem
• r-stem

This Photo by Unknown Author is licensed under CC BY-SA-NC

n=5, p=0.5

Cumulative distribution function
Very important

Make sure you can apply theory to this example

Solution

RAR man!!

Make your own pstem

Expected Value

The uniform

The Normal

About finding
probabilities
with the
Normal

The book is correct in its
calculations but the method is
now redundant.

Please use R to make
calculations without converting
to Z

There are 4 functions you must learn
dnorm() – density (height of the Normal).
pnorm() – probability = lower tail area of the Normal up to given y.
qnorm() – quantile (y value) = the value of y with lower tail given.
rnorm() – random sample from a normal distribution.
Inverses

To find probabilities
use
Say 𝑌 ∼ 𝑁(𝜇 = 10, 𝜎 = 5) find 𝑃(𝑌 >
12)
Solution:
> 1-pnorm(12,10,5)
[1] 0.3445783
>

To find quantiles use
Say 𝑌 ∼ 𝑁(𝜇 = 10, 𝜎 = 5) find 𝑦
such that 𝑃 𝑌 ≤ 𝑦 = 0.5890
Solution:
> qnorm(0.5890, 10, 5)
[1] 11.12487
>

Compare with the book
You should use R for these calculations

0.90

Solution
• > curve(dnorm(x,3,0.5), xlim = c(3-4*0.5, 3+ 4*0.5))
• > qnorm(0.90, 3,0.5)
• [1] 3.640776
• > abline(v=3.64, col = "Blue", lwd =2)

3.64

Assignment 2
Bayes’ rule.
Suppose, a particular test for whether someone has been using cannabis is
90% sensitive, meaning the true positive rate (TPR) = 0.90. Therefore, it leads
to 90% true positive results (correct identification of drug use) for cannabis
users.
The test is also 80% specific, meaning true negative rate (TNR) = 0.80.
Therefore, the test correctly identifies 80% of non-use for non-users, but also
generates 20% false positives, or false positive rate (FPR) = 0.20, for nonusers.
Assuming 0.05 prevalence, meaning 5% of people use cannabis, what is the
probability that a random person who tests positive is really a cannabis user?

Solution: What we want 𝑃 𝑈 + !
Notice the
preliminary
calcs

𝑃 𝑈 = 0.05, 𝑃 𝑈 𝑐 = 0.95
𝑃 + 𝑈 = 0.90, 𝑃 + 𝑈 𝑐 = 1 − 0.80 = 0.20

𝑃 +𝑈 𝑃 𝑈
0.90𝑋0.05
𝑃 𝑈+ =
=
𝑐
𝑐
𝑃 + 𝑈 𝑃 𝑈 +𝑃 + 𝑈 𝑃 𝑈
0.90𝑋0.05 + 0.20𝑋0.95
0.045
=
= 0.19
0.045 + 0.19

Assignment 2 Bayes

How to test for Normality

QQplot
Normal Q-Q Plot

15
10
5



 1.3

0

IQR

Sample Quantiles

20

25

Inter-quartile range to standard deviation

-3

-2

-1

0
Theoretical Quantiles

1

2

3

Proof
𝑋0.75 = 𝜇 + 𝑍0.75 𝜎
𝑋0.25 = 𝜇 + 𝑍0.25 𝜎
𝐼𝑄𝑅 = 𝑋0.75 − 𝑋0.25 = 𝜇 + 𝑍0.75 𝜎 − 𝜇 − 𝑍0.25 𝜎
𝐼𝑄𝑅 = 𝑍0.75 𝜎 − 𝑍0.25 𝜎 = 𝑍0.75 − 𝑍0.25 𝜎
𝐼𝑄𝑅
𝑍0.75 − 𝑍0.25 𝜎
=
= 𝑍0.75 − 𝑍0.25 = 𝑞𝑛𝑜𝑟𝑚 0.75 − 𝑞𝑛𝑜𝑟𝑚 0.25
𝜎
𝜎
> qnorm(0.75)-qnorm(0.25)
[1] 1.34898

Check parameterization with R
?dgamma

𝛼=𝑎
𝛽=𝑠

shape = a
scale = s

?dchisq
• The chi-squared distribution with df=
n ≥ 0 degrees of freedom has density

In R
x=y
n=Ʋ

• f_n(x) = 1 / (2^(n/2) Γ(n/2)) x^(n/2-1)
e^(-x/2)
• for x > 0, where f_0(x) := \lim_{n \to 0}
f_n(x) = δ_0(x), a point mass at zero, is
not a density function proper, but a “δ
distribution”.
• The mean and variance are n and 2n.

In R the density is:
f(x) = λ {e}^{- λ x}
1
𝛽=
𝜆

𝜆=

1
𝛽

If 𝑌 ∼ 𝐸𝑥𝑝(𝛽 = 3) Find 𝑃(𝑌 ≤ 4)
Answer:
First notice that 𝜆 = 1/3
So 𝑃 𝑌 ≤ 4

1
= 𝑝𝑒𝑥𝑝(4, )
3

> pexp(4,1/3)
[1] 0.7364029

To solve this we need to restate the problem.
With 𝛼 = 2, 𝛽 = 4 would 15 or more months till the first complaint be unlikely?
We can calculate this is R
mean = 2*4, sigma2 = 2*4^2, sigma = 5.7 (mean and variance of gamma)
> curve(dgamma(x,shape = 2, scale = 4), xlim = c(0, 8+3*5.7)) # – see plot next slide
> 1-pgamma(15, shape=2,scale =4)
[1] 0.1117093
𝑃 𝑌 ≥ 15 = 0.11
This is quite likely so

Time between customer complaints

Time between complaints

Compare with R documentation
?dweibull

𝛼=𝑎
𝛽 = 𝑏𝑎

Using R to find 𝑃(𝑌 < 8)
parameterization
for R

𝛼 = 𝑎, 2 = 𝑎,
𝛽 = 𝑏 𝑎 , 100 = 𝑏 2 , 𝑏 = 10

> pweibull(8, 2, 10)
[1] 0.4727076

𝑷 𝒀 > 𝟎. 𝟑𝟎 = 1-pbeta(0.30,2,2)
[1] 0.784

mean = 2/(2+2)=1/2
variance = 2*2/((2+2)^2(2+2+1)) = 4/(16*5)

Given without
proof: BUT we
don’t need it!
See example

We need 𝑷 𝒀 < 𝟎. 𝟐𝟎 = 𝒑𝒃𝒆𝒕𝒂 𝟎. 𝟐, 𝟐, 𝟒
> pbeta(0.2,2,4)
[1] 0.26272

Rock and Roll man!!

</details>
