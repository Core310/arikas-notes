---
class: Applied Stats MATH-4753 FA25
Type:
  - class
sch_sem: fa_25
---
See also [[stats_Midterm_review]] 
___
This is a key lab and one that must be mastered. Please understand the method of maximum likelihood. This will be carried out in three ways

- NR
- Grid
- Analytical
___

# Testing..
- [[Stats_Lab4_notes#NULL hypothesis $H_i$]] 
Overall idea: Generate values, generate a line w/ values in it and c if it's in fallen region

## How to construct a test?
one sample t.test? 
```r
set.seed(523)
x = rnorm(25,10,8)
alpha = .05
t = qt(1-alpha/2.25 -1)
(mean(x)-9) / (sd(x) / sqrt(25))

# out 1.751417

t
# out 2.06389

t,test(x,my=9)
# One sam test -> 

```

## 3 ways to test:
1) -m conf interval, check conf interval w/ null value. Null val in conf interval? 0? ! rejected
2) RAR, Tcalc 
3) p-value; comapre w/ $\alpha$ 

```r
y= rnorm(40,20,10)
t.test(y,mu=20)

qt(1-0.05 / 2, 40-1)

# is p value < .05 ? -> Reject null hyp! 
# 
```



# Power
P(reject null hypothesis), formally: $1-\beta$, $\beta=$ prob of type of iterator

## Example: 
