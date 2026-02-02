---
class: Applied Stats MATH-4753 FA25
Type: quiz
sch_sem: fa_25
---
# 1) As you know an outlier can be determined using the boxplot method. `b <- boxplot(x, range = ...)` Find all DDT outliers and submit the total number of them below!
```r
b1 <- boxplot(ddt$DDT, range = 3)
length(b1$out)
[1] 12
```

# 2) Find all possible DDT outliers. Submit the number of fish classified as possible outliers using boxplot()!
```r
b1 <- boxplot(ddt$DDT, range = 3)
length(b1$out)
[1] 12

b2 <- boxplot(ddt$DDT, range = 1.5)
setdiff(b2$out, b1$out)
[1] 28 31 33
#hence 3 elements so 3 outliers
```
# 3) How many fish would be classified as outliers with respect to LENGTH using the boxplot method
```r
> bL <- boxplot(ddt$LENGTH, range = 3)
> length(bL$out)
1
```

# 4) There are two basic methods we have learned to find outliers T/F? 
TRUE: z and boxplot()

