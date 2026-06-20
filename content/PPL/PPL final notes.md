---
sch_sem: sp_25
class: PPL
---
[tail-recursion](https://docs.racket-lang.org/guide/Lists__Iteration__and_Recursion.html#%28part._tail-recursion%29)
"_tail recursion_" means that the last statement in a function, is a recursive call to the same function. [SO link](https://stackoverflow.com/questions/33923/what-is-tail-recursion)

[lazy vs short circut eval](https://stackoverflow.com/questions/14908548/any-difference-between-lazy-evaluation-and-short-circuit-evaluation)
Lazy only eval when needed, vs short-circut stil lsees 

# Thursday quiz mats
define 
let
map 
start
lamda 
yield

___
In scheme, cannot use for loop, must b recurisve 2 prevent side effect. Example factorial program:
```
(define (fact n))
    (if(=n 0))
    	1
    	(* (fac (-n 1)) n)
    )
)
```
___
If using `or`, if first element is true we don't care about the rest of the statements! This is called lazy evaluation/short circut evaluation. Basically if first case true, we drop following expr 




# Quiz stuff
Use example to show y side effect will make program hard to understand? 

![[WhatsApp Image 2025-03-04 at 13.38.49_eaa20412.jpg|500]]