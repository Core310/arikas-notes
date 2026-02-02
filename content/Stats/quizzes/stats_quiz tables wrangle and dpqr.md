---
class: Applied Stats MATH-4753 FA25
Type: quiz
sch_sem: fa_25
---
# 1) Wrangle the data frame to obtain all rows where pH > 6.930 and select the variables WellClass and Aquifier to use in a table.
[[stats_quiz tables wrangle and dpqr]]

Estimate P(Bedrock | Public) for wells that have a pH > 6.930
```r
 library(dplyr)
 df1 = mtbe %>% filter(pH > 6.930) %>% select(WellClass, Aquifier)
 tab1 = with(df1, table(WellClass, Aquifier))
 addmargins(tab1)

Aquifier
WellClass Bedrock Unconsoli Sum
  Private      78         0  78
  Public       80         9  89
  Sum         158         9 167
 round(80/89,4)
```

# 2) Filter the original mtbe data frame to obtain all rows where 47.244 < Depth < 121.920  and  and select variables WellClass and MTBE-Detect.
[[stats_quiz tables wrangle and dpqr]]

Estimate P(Public AND Below Limit) for wells that have a depth between 47.244 and 121.920
```r
> df2 <- mtbe %>% filter(Depth > 47.244 & Depth < 121.920) %>% select(WellClass, `MTBE-Detect`)
> tab2 <- with(df2, table(WellClass, `MTBE-Detect`))
> addmargins(tab2)
         MTBE-Detect
 
WellClass Below Limit Detect Sum
  Private          31     10  41
  Public           29     19  48
  Sum              60     29  89

 round(29/89,4)
 
[1] 0.3258
```

# 3) If X ~ Bin(n = 10, p = 0.6) find P(X = 7)
[[stats_ch3_notes probilitiy Bayes therom , tables#Probility Theroms]]
```r
> dbinom(7,10,0.6)
[1] 0.2149908
```

# 4)  If Y ~ Bin(n = 20, p=0.5) find P(Y < 9
[[stats_ch3_notes probilitiy Bayes therom , tables#Probility Theroms]]
```r
> pbinom(8,20,0.5)
[1] 0.2517223
```