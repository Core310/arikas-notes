---
sch_sem: sp_25
class: PPL
---
# Ch 3 
- When does binding happens dependent on langauge 
    - We can't know the type of a binding (saying let b) at runtime
- should know run/compile/link time 
- STATIC vs DYNAMIC? binding 
- Scope Rules!: Control bindings 
    - How u find the variable? If u use var 
- STATIC vs DYAMNIC scope? 
- Static scope esentially always goes out to the global variables 
- Dyamnic takes from the closest call from the most recent variable (say if was called in some function, then we would call from there )

# Finding which var is printed
- Create indentation of each scope (like in IDE)
- Create a call stack, going from what's called first, with what's declared to whats called last
- For dymanic scope you go up until a variable is declared. Static you just take the topmost declaration. 
![[Pasted image 20250210154143.png]]
See here https://www.youtube.com/watch?v=v06ZFEmoNas&ab_channel=JohnBowers