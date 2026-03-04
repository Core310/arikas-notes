---
title: "stats_Chapter 3"
---

# stats_Chapter 3

![[Stats/stats_slides/stats_Chapter 3.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/Stats/stats_slides/stats_Chapter%203.pdf) | [Download Local](/Stats/stats_slides/stats_Chapter%203.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Chapter 3
Dr Wayne Stewart
MS sixth edition

LABs 3,4

LABs 1,2

LABs 5,6 etc

Theory

ASSIGNMENT
1: Hints

Function is not asked for but you are
free to make an algorithm and create a
function if you wish

Make sure you are reading the book

Check out these examples!!

Important!!

https://en.wikipedia.org/wiki/Bayes%27_theorem

Bayes’ rule – 2 usages
Invert
probability cond.
P(B|A) -> P(A|B)

2 Ways
A whole new way to
do statistics

This year
we will do
some
Bayesian
analysis

Bayesian Simple Linear Regression
data {
int<lower=0> N;
vector[N] x;

vector[N] y;
}
parameters {
real beta0;
real beta1;
real<lower=0> sigma;

}
model {
y ~ normal(beta0 + beta1 * x, sigma);
beta0 ~ normal(0,100);
beta1 ~ normal(0,100);
sigma ~ gamma(1,1);

}

Counting Rules

Birthday Problem (Use 𝑃 𝐴

𝑐
= 1 − 𝑃(𝐴 ))

• What is the probability that two or more people in a random sample
of size k people have a common birthday?
• Let A be the event 2 or more people of the k have the same birthday
• 𝐴𝑐 is the event all people of the k have different birthdays
> birthday <- function(k){
+ 1 - exp(lchoose(365,k) + lfactorial(k) - k*log(365))
+}
> birthday(20:24)
[1] 0.4114384 0.4436883 0.4756953 0.5072972 0.5383443

This Photo by Unknown Author is licensed under CC BY-SA

Studs

The connection between probability and
statistics

The connection
between
probability and
statistics

</details>
