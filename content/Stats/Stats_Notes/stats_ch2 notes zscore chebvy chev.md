---
Type:
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---
[[stats_Chapter 2.pdf]]

## Variance 
```r
var(MTBE$col)
#where accepts some column, takes varience
```

Shows how far individual data points in a sample are spread out from the sample mean. 2 formulas:

$$
\begin{gather}
\frac{\sum^n_{i=1}(x_{i}-\mu)^2}{n-1}
\\ 
x_{i }\text{=data point @ i}
\\ \mu = \text{sample mean}
\\ n=\text{observations (data length)}
\\ x_{i}-\mu = \text{deviation pf each data point frm mean}
\\ \text{n-1: Bessel's correction -> makes variation unbaised}
\end{gather}
$$

### Bessel’s correction
When computing `sd()` or `var()` our denominator can be represented in 2 ways:
- if we have all our data: `n`
- subset: `n-1`

## z-score (standard score) aka z-transformation

### *Code*
```r
z=(mpg-mean(mpg))/sd(mpg)
#assuming mpg is some 1d array
```
To find possible and defined outliers, where z=s-score formula

#### Possible&Defined outliers
```r
mpg[abs(z)>=2 & abs(z)<=3]# Find the values of z that are possible woutliers
mpg[abs(z)>3] #then this must find defined outliers (as per !\geq)
```
Plotting these outliers we can:
```r
mycol = ifelse(abs(z)>3, "Red",
        ifelse(abs(z)>=2 &abs(z)<=3,"Blue", "Black"))  
dotplot(mpg,col=mycol)

```

## Standard Deviation Formula
Measures how many standard deviations above/below the mean a data point is in relation to the full dataset:
$$
z_{i}=\frac{x_{i}-\bar{x}}{s_{x}}
$$
- $x_i$=dataPoint (some list/group)
- $\bar{x}$=mean
- $s_x=$standard deviation

If we wanted in relation to subset we can do:
```r
sqrt(mean((x - mean(x))^2))
```
Impt notes abt z-scores
- z-score$^+$ = data point above average.
- z-score$^-$ = data point below average.
- z-score close to \[0\]  data point = average.
- Data point considered unusual if $-3 > z \space score  > 3$

### normal  distribution: 
- Symmetrical around the mean (center).
- Bell-shaped curve.
- Most values cluster around the average, with fewer values as you move farther away.

# Rules / therom

## empirical rule $3\sigma$ 
**Usage:**
- you’re plotting a normal distribution
- show the main shape of the curve, and where the density is nearly 0

Essentially we can split our curve into 3 areas, a **68% 95% 99.7%** chance of landing in that certain point/area. 68% fall within first sd, 95% within second sd...
- Requirement: distributed normally (symmetrical or mean, median, and mode of the data are all equal and located at the peak of the curve)
- 2 assumptions (68% and 95 OR 99% one)
- Start at the mean, take 3 standard deviations (usually told) -> split into 3 areas then approxa given what area it falls in [khan aca](https://www.khanacademy.org/math/ap-statistics/density-curves-normal-distribution-ap/stats-normal-distributions/v/ck12-org-normal-distribution-problems-empirical-rule)
- Provides exact distributions  

### Chebyshev's Theorem:
extension of emp rule, states that at least $1 - 1/k^2$ of the observations have to be within k standard deviations of the mean
- **within x standard deviations of the mean**
- Applies to all probability distributions
- No assumptions
- Provides approx
Formally: 
$$
1-\frac{1}{k^2}
$$
 of the data values lies within k standard deviations of the mean
    - eg. k=2 -> $1-\frac{1}{4}=.75$
    	- Hence 75% of values lie within 2 standard deviations
    - Hence $1-\frac{1}{k^2}$ = % of values that lie within k standard deviations

# Code
Filtering:
```r
length(ddt$WEIGHT[ddt$WEIGHT > 700  & ddt$LENGTH < 300  & ddt$SPECIES == "LMBASS"])
#or if we wanted to use dpylr
ddt %>% filter(ddt$SPECIES == "LIMBASS" & ddt$LENGTH < 300]

```

set difference between two collections:
```r
setdiff(x, y)
```

# Other stuff
See also [[Stat_ch10 Notes (lab3) MSS TSS RSS]]