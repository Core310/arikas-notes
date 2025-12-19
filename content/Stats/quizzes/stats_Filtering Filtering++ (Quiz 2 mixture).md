---
class: Applied Stats MATH-4753 FA25
Type:
  - class
  - quiz
tags: []
---


Where `ddt=readcsv("DDT.CSV")`

# 1) Find all the possible fish outliers with respect to LENGTH! Use "[]" and enter the number of fish below!!
```r
library(Intro2R)

ddtz = within(ddt, az <- abs(scale(ddt$LENGTH)))#outputs 2,
#scale:
#within: 

df = ddtz[ddtz$az >=2 & ddtz$az <= 3,]#we use 2 & 3 b/c of (what rule?) emperical!

df = subset(ddtz, az >=2 & az <= 3)
#
dim(df)
```

# 2) How many fish are either SMBUFFALO or LMBASS, use dplyr!
```r
library(dplyr)
ddt %>% filter(SPECIES == "SMBUFFALO" | SPECIES == "LMBASS")
```

# 3) How many fish have a WEIGHT larger than 1600? Use "[]"!

```r
d = ddt[ddt$WEIGHT > 1600,]
#if we wan dimension use dim(d) -> 14 6
#but its js 14 fish, 6 cols is xtra but we alrdy kno
```

# 4) How many fish have a WEIGHT strictly between 1000 and 1600 and are of the LMBASS SPECIES? Use dplyr!
```r
ddt %>% filter(WEIGHT > 1000 & WEIGHT < 1600 & SPECIES == "LMBASS")
```
