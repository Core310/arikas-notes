---
title: "stats_Chapter 4"
---

# stats_Chapter 4

![[Stats/stats_slides/stats_Chapter 4.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/Stats/stats_slides/stats_Chapter%204.pdf) | [Download Local](/Stats/stats_slides/stats_Chapter%204.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Chapter 4
Dr Wayne Stewart

Chapter 4

Skills
• You need to be able to categorize a problem into one of the 7
distributions.
• Once done you will need to be able to use R to calculate the
probability that the random variable takes a value or values.
• This requires that you can reparametrize the problem
• You must master the 4 functions
• d- stem
• p – stem
• q – stem
• r – stem

Example:
dbinom()
pbinom()
qbinom()
rbinom()

Assigning
probabilities
to random
variables

Go through all examples

In R, if 𝑌 ∼ 𝐵𝑒𝑟𝑛(𝑝)
then
𝑃 𝑌 = 𝑦 = 𝑑𝑏𝑖𝑛𝑜𝑚(𝑦, 𝑠𝑖𝑧𝑒 = 1, 𝑝𝑟𝑜𝑏 = 𝑝)

In R, if 𝑌 ∼ 𝐵𝑖𝑛 𝑛, 𝑝 then:
𝑃 𝑌 = 𝑦 = 𝑑𝑏𝑖𝑛𝑜𝑚(𝑦, 𝑠𝑖𝑧𝑒 = 𝑛, 𝑝𝑟𝑜𝑏 = 𝑝)

The quantile function for a discrete random
variable.
• Suppose X∼ 𝐵𝑖𝑛(𝑛 = 5, 𝑝 = 0.5)
• Then how do we explain the following R code?

Summary of q-stem for discrete distributions
• To find x when lower tail probability is given as lt – do the following
• Choose smallest x so that 𝐹 𝑥 ≥ 𝑙𝑡 where F is the cumulative
probability distribution function
• Predict what qbinom(0.1,5,0.5) will equal
> cp <- pbinom(0:5, 5, 0.5) # cumulative prob
> cp
[1] 0.03125 0.18750 0.50000 0.81250 0.96875 1.00000

Answer!

> qbinom(0.1,5,0.5)
[1] 1

Application of binomial to airline seat
overbooking
• On any given flight there could be passenger “no shows” – airline
companies will want to have “full flights”.
• One way to help fill a flight is to sell more tickets than the number of
seats on the plane.
• Unfortunately, depending on the nature of the flight, timing and
number of seats sold it is possible that on occasion more people with
tickets will show than there are seats on the flight. We don’t want this
to happen too many times.
• If N = 200 is the number of seats on the flight and n is the number of
seats sold and 𝛾= 0.02 is the probability of overbooking and p = 0.95
is the probability a passenger will show. Find an expression for “n”!

The equation
𝑁 = 𝑞𝑏𝑖𝑛𝑜𝑚 1 − 𝛾, 𝑛, 𝑝
𝟐𝟎𝟎 = 𝑞𝑏𝑖𝑛𝑜𝑚 1 − 0.02, 𝑛, 0.95 , 𝑛?
> qbinom(1-0.02,200:210, 0.95)
[1] 196 197 198 199 200 201 202 203 204 204 205

n = 204

In R, if 𝒀 ∼ 𝑀𝑢𝑙𝑡𝑖𝑛𝑜𝑚(𝑛, 𝒑) then 𝑃 𝒀 = 𝒚 =
𝑑𝑚𝑢𝑙𝑡𝑖𝑛𝑜𝑚(𝒚, 𝒑) (bold means vector)
• Example
• 𝑷 𝒚𝟏 = 𝟐, 𝒚𝟐 = 𝟒, 𝒚𝟑 = 𝟒 = 𝒅𝒎𝒖𝒍𝒕𝒊𝒏𝒐𝒎(𝒙 =
𝒄 𝟐, 𝟒, 𝟒 , 𝒑𝒓𝒐𝒃 = 𝒄 𝟎. 𝟑, 𝟎. 𝟒, 𝟎. 𝟑 )
• > dmultinom(x = c(2,4,4), prob = c(0.3,0.4,0.3))
• [1] 0.05878656

In R:
The geometric distribution with prob = p has density

p(x) = p (1-p)^x
for x = 0, 1, 2, …, 0 < p ≤ 1.
So y-1 = x
P(Y=3) = P(X=2)

Parameterization for R

The density in R is
Γ(x+n)/(Γ(n) x!) p^n (1-p)^x

Parameterization for R
y-r=x,
r=n

Parameterization for R

The density in R is
Γ(x+n)/(Γ(n) x!) p^n (1-p)^x
In R x is the number of fails
Size the number of successes
Y =number of trials = x + size

Parameterization for R
6-4=2=x,
4=n
𝑃 𝑌 = 6 = dnbinom(x=2, size = 4, prob = 0.8)
> dnbinom(x=2,size = 4,prob = 0.8)
[1] 0.16384

In R

• In R the probability function is:
p(x) = choose(m, x) choose(n, k-x) /
choose(m+n, k)
• m=r
• x=y
• n=N-r
• k-x=n-y
• m+n=N
• k=n

Let 𝑌 ∼ ℎ𝑦𝑝(𝑁 = 10, 𝑟 = 4, 𝑛 = 3)
Find
a) 𝑃 𝑌 = 0 = dhyper(x=0,m=4,n=6,k=3)
> dhyper(x=0,4,6,3)
[1] 0.1666667 (1/6)
b) 𝑃 𝑌 = 1 =dhyper(x = 1,m=4,n=6, k=3)
> dhyper(x = 1,m=4,n=6, k=3)
[1] 0.5 (1/2)

We will do b) and c) 𝜆 = 2.5 𝑐𝑟𝑎𝑐𝑘𝑠/
𝑠𝑝𝑒𝑐𝑖𝑚𝑒𝑛
• b) 𝑃 𝑌 = 5 = 𝑑𝑝𝑜𝑖𝑠(5,2.5)
> dpois(5,2.5)
[1] 0.06680094
• c) 𝑃 𝑌 ≥ 2 = 1 − 𝑃(𝑌 ≤ 1)
> 1-ppois(1,2.5)
[1] 0.7127025
> ppois(1,2.5, lower.tail = FALSE)  Don’t do it this way! P(Y>1)
[1] 0.7127025

Moment generating functions

Categorize the problem!!

The expected value is 𝜇

The expected number of slugs
to be collected in order to
observe 10 Milax Rusticus
slugs is 50

𝑃(𝑌 = 25)
Since we need a single probability we should use a dstem() function namely dnbinom()
The next problem to overcome is to reparamaterize.
In R we read:
The negative binomial distribution with size = n and prob = p has density

Γ(x+n)/(Γ(n) x!) p^n (1-p)^x
for x = 0, 1, 2, …, n > 0 and 0 < p ≤ 1.

n=r, x=y-r

This represents the number of failures which occur in a sequence of Bernoulli trials
before a target number of successes is reached.

The calculation in R
> dnbinom(x=25-10,size = 10,prob=0.2)
[1] 0.00471078

Using the book formula

</details>
