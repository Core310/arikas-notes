---
tags: []
class: Applied Stats MATH-4753 FA25
Type: quiz
sch_sem: fa_25
---
# 1) How many fish have a length bigger than 50 units?
```r
ddt %>% filter(ddt$LENGTH > 50)
```

# 2) How many fish are LMBASS and come from the TRM river and have a DDT bigger than 2 ?
```r
ddt[ddt$fish == "LMBASS" & ddt$river == "TRM" & ddt$DDT > 2, ]
#or with dplyr
ddt %>% filter(SPECIES == "LMBASS" & RIVER == "TRM" & DDT > 2)
```


# 3) How many fish are categorized as outliers based solely on their LENGTH?
```r
ddt %>% mutate(z = scale(LENGTH)[,1], outlier = ifelse(abs(z) > 3,"yes", "no")) %>% group_by(outlier) %>% summarize(n = n())
```
#todoStudy I should lookup more on this..

# 4) How many CCATFISH are outliers with respect to DDT?
```r
df <- ddt %>% filter(SPECIES == "CCATFISH") %>% mutate(z = scale(DDT)) 

sum(abs(df$z) > 3) #why 3? comes frm Empirical Rule
```
#todoStudy 
