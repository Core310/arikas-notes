---
sch_sem: fa_25
class: AI
---
# Hill Climbing!
- Returns a local max (for the algo below), but if we wan min js flip the signs
- Start at random state, look at neighbours, better value? Move to it!

> [!Warning] Details
    > Finds  the actual answer all  the time? No!
    > Optimal? No! Can get stuck at  local min/max :<
    > Space complexity O(1)! 
    > Time Complexity O(?) can be bad but can set timer m to timeout if too bad
    > Why? Usually quite fast, space efficent, and finds the best possible given the constraints

Soo how do we solve? We can just run n number of random restart points in order to find the best final answer. We just compare each of them and store the greatest (so its esentially a super greedy algo). 
## Code
```
//returns some local max
func HilLClimb(problem){
	current = problem.initial(random)
	while true:
		neighbor = highest_valued_successor
		if(value(neighbor)) \leq Value(current) return current
		current = neighbor
}
```

# Simulated Annealing
 