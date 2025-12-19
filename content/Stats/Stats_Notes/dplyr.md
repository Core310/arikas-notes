---
Type:
  - class
class: Applied Stats MATH-4753 FA25
---


Based off of: [canvas page](https://canvas.ou.edu/courses/409964/pages/dplyr-verbs)

possible fish w/ outliers wrt LENGTH 
fish length > 1600x`
fish either SUM or LIM? 
# Manipulating Rows
Use pipe filters like so `%>% `: 
```r
ddt %>% filter(skin_color == "light", eye_color == "brown")
```
to get rows we can:
```r
ddt %>% slice(5:10)
ddt %>% slice_head(n = 3) 
# We can also use slice_tail in the similar manner to get first/last rows
ddt %>% filter(!is.na(height)) %>% slice_max(height, n = 3)#we can also do min, n=# to grab
```
Random rows:
```r
ddt %>% slice_sample(n = 5,replace = TRUE)#n=# chose, replace = can appear more than once
ddt %>% slice_sample(prop = 0.1,weight=5,)#prop=proportion, weight=sample weights
```
 
Now we want to find how many are outliers wrt. 
```r
#How many fish are categorized as outliers based solely on their LENGTH?
df = ddt %>% mutate(z=scale(ddt$LENGTH)[,])
sum(abs(df$z) > 3 )

#How many CCATFISH are outliers with respect to DDT?
df <- ddt %>% filter(SPECIES == "CCATFISH") %>% mutate(z = scale(DDT)) 
sum(abs(df$z) > 3)
```

See also:
- [[Sch/Stats/lectures/Hub|Hub]]