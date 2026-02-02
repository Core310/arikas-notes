---
class: Applied Stats MATH-4753 FA25
Type: quiz
sch_sem: fa_25
---
[In class Quiz: Tables and Probability](https://canvas.ou.edu/courses/409964/assignments/3253743?display=full_width_with_nav)
# 1) $P(Private||Detect)$

|         | Below Limit | Detect | Sum |
| ------- | ----------- | ------ | --- |
| Private | 81          | 22     | 103 |
| Public  | 72          | 48     | 120 |
| **Sum** | 153         | 70     | 223 |

```r
#prob of prviate given direct?
tabb <- table(MTBE$WellClass,MTBE$MTBE.Detect) #create table w/ both vars
addmargins(tabb)#automatically creates the sum column
round(22/70,4)#we wan round 4 decimal place 
```
# 2) $P(Public \cup BelowLim)$ 
```r
round(72/223,4)
[1] 0.3229
```
Basically Probility of public&BelowLim / totalPoss
# 3) $P(Detect)$
```r
round(70/223, 4)
[1] 0.3139
```
Many of the wells do not have a Detect value (null)

# 4) $P(PUBLIC || Detect)$
```r
round((72 + 48 + 22)/223,4)
[1] 0.6368
```