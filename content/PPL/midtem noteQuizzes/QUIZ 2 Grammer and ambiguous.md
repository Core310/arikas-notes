---
sch_sem: sp_25
class: PPL
---
![[Pasted image 20250226205949.png]]

- **Terminals**: Stuff on right hand side not in left hand side (eg. id num + % /...)
- **non-terminals**: All unique elements on left hand side (eg. Expr... Term Tail)

# Steps to draw a parse tree
- Id all terminals 
- Use non-terminals to build struct following rules based on expr (go step by step based on the rules)
- ANY non-terminals have no child. 
- The () operator should have 3 lines `( expr )` one for each

### Ambiguous? 
- Grammar produces at least 2 distinct parse tree/derivations-> ambiguous!
- same non-terminal appears twice on a right hand side of the production then it has the ambiguity problem

### Productions
Find out how many productions in the given grammer: 
- How many outputs are in a given grammer? eg. below: has 10 outputs = productions (how many expressions are outside the $\rightarrow$ divided by `\` which is a OR)
- In this case just 10 expr by this fact 
