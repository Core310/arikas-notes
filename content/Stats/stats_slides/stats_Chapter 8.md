---
title: "stats_Chapter 8"
---

# stats_Chapter 8

![[Stats/stats_slides/stats_Chapter 8.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/Stats/stats_slides/stats_Chapter%208.pdf) | [Download Local](/Stats/stats_slides/stats_Chapter%208.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Chapter 8
MATH 4753

By the end of this lesson you should know:
•What hypothesis testing is.
•What type 1 and 2 errors are.
•What power is.

0.20
0.15
0.10
0.05
0.00

Development
of Hypothesis
testing (R
script)

0

1

2

3

4

5

6

7

8

9

10

Test errors

•Type 1 error happens when you reject 𝑯𝒐 when it
is true.
–Probability of type 1 error =𝜶
•Type 2 error happens when you accept 𝑯𝒐 when it
is false.
–Probability of type 2 error=𝜷

The Courtroom

Power
•Probability of rejecting 𝑯𝟎 when it is false is 1 − 𝛽
•This is called the power of a test.
•Power is not the probability of an error!
•Power=P(Rejecting 𝑯𝒐 |𝑯𝒐 is False)=1-P(Accepting 𝑯𝒐 |𝑯𝒐 is False)

What is the importance of power?
•The higher the value of the power the more we can detect departures from 𝐻𝑜 .

Cut off and Acceptance, Rejection regions

Investigating POWER

10

12

10

16

18

H0

8

10

H1

12

14

x

x

xcut= 12

xcut= 14

H0

8

14

0.00 0.10 0.20 0.30

H1

H1

12
x

14

16

18

0.00 0.10 0.20 0.30

0.00 0.10 0.20 0.30

Density

8

Density

H0

xcut= 13

Density

0.00 0.10 0.20 0.30

Density

xcut= 11

𝐻0 : 𝜇 = 10
𝐻1 : 𝜇 = 15

H0

8

10

16

18

H1

12
x

14

16

18

Can you dig it?

•A) Yes
•B) No

Environmental Protection Agency

Test

• 𝐻0 : 𝜇 = 3
• 𝐻1 : 𝜇 > 3

Power calculation

Hypothesis Testing: Errors

Use R

Population of Wisconsin lakes has 𝜇 = 15

> qt(1-0.1/2, 25-1)
[1] 1.710882

Probability the test will detect a mean that
differs from 15 gm/m^3 if 𝜇𝑎 = 14

Taken from
Montgomery and
Runger App. Stat
pg 311 Fourth
edition

See BBD for Bayesian Example

𝑃 𝑥 =

𝑥

𝛼−1

1−𝑥
𝐵 𝛼, 𝛽

𝛽−1

</details>
