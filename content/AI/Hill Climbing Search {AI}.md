---
sch_sem: fa_25
class: AI
---

[gfg](https://www.geeksforgeeks.org/artificial-intelligence/introduction-hill-climbing-artificial-intelligence/)

1) Initial State: Start with an arbitrary or random solution (initial state).
2) Neighboring States: Identify neighboring states of current solution by making small adjustments (mutations or tweaks).
3) Move to Neighbor: If one of the neighboring states offers a better solution (according to some evaluation function), move to this new state.
4) Termination: Repeat this process until no neighboring state is better than the current one. At this point, we have reached a local maximum or minimum.
```
# func HilLClimb(problem){  
#   current = problem.initial(random)  
#   while true:  
#      neighbor = highest_valued_successor  
#      if(value(neighbor)) \leq Value(current) return current  
#      current = neighbor  
# }
```