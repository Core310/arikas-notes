---
Type:
  - quiz
  - class
class: Applied Stats MATH-4753 FA25
---
There were 2 quizzes for this section but they js had differernt values for them, but one should suffice..


# Part 1 
```r
x <-c(15, 6.52, 17.31, 24.35, 17.97, 18.86, 7.78, 18.15, 10.36, 22.61, 11.75, 1.63, 7.69, 13.85, 0.27, 12.47, 5.84, 6.46, 5.21, 20.36)
y <-c(16, 2.47, 13.31, -2.33, 2.75, 6.99, 2.9, 16.94, 1.72, 8.33, 2.57, 7.79, -2.17, -3, 5.38, 8.42, 17.46, -3.74, 13.89, 8.86, 15.34, 17.63, 14.57, -0.89, -2.73, -6.03, 7.74, 6.82, 11.11, 5.16)
```
## q1: Submit the point estimate for the variance of the first population from which x was taken.
```r
var(x)
```

## q2: Find the 95% interval estimate (L,U)  for  and submit L to 4 decimal places
```r
t.test(y)
# outputs the following below
One Sample t-test

data:  y
t = 4.9823, df = 29, p-value = 2.665e-05
alternative hypothesis: true mean is not equal to 0
95 percent confidence interval:
 3.797563 9.086437 <----- we chose the left part of this!
sample estimates:
mean of x 
    6.442

Then we chose 3.7976

```

## q3: Find the 95% confidence interval (L,U) for $\mu_{x}-\mu_{y}$ and submit L to 4 decimal places assuming equal variances in the populations
```r
t.test(x,y, var.equal = TRUE)
#if in doubt f1 t.test, 

#output below
Two Sample t-test

data:  x and y
t = 2.8442, df = 48, p-value = 0.006525
alternative hypothesis: true difference in means is not equal to 0
95 percent confidence interval:
 1.693926 9.866074 <--------- again we chose leftmost value here/\..
sample estimates:
mean of x mean of y 
   12.222     6.442
```


## q4: Find the 95% confidence interval (L,U) for $\mu_{y}-\mu_{x}$ assuming **non** equal population variances and submit L to 4 decimal places
```r
t.test(y,x)
	Welch Two Sample t-test
# Output below
data:  y and x
t = -2.853, df = 41.307, p-value = 0.006738
alternative hypothesis: true difference in means is not equal to 0
95 percent confidence interval:
 -9.87054 -1.68946 <------------------- leftmost
sample estimates:
mean of x mean of y 
    6.442    12.222
```