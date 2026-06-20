---
sch_sem: sp_25
class: PPL
---
$$
\begin{align*}
\text{Program} &\rightarrow \text{Stmts } \$ \\
\text{Stmts} &\rightarrow \text{Stmts } \text{Stmts\_Tail} \\
\text{Stmt} &\rightarrow \text{until } ( \text{Stmts } ; \text{ id}) \mid \text{id} \\
\text{Stmts\_Tail} &\rightarrow , \text{ Stmt } \text{Stmts\_Tail} \mid \epsilon
\end{align*}

$$

# EPS FIRST FOLLOW PREDUCT
- epsilon, $\epsilon$  cant be in first, follow, or predict!
- EPS(a), if a = $\epsilon$ ? true || false (Boolean operation)
- First(a) all possible first outcomes for some a. Eg. First(stmt) = until | id
- Follow: 
    - What can come after $a$ on the right hand side of the expr? Eg. FOLLOW(a) = ; \$ 
    - If a is in possible child, put \$ or $\epsilon$
    - Set of non terminals
- Predict: (requires some $A \rightarrow a$)
    - if a can result in $\epsilon$  -> $First(a) \cup Follow(A)$
    	- Union means all unique elements in both sets (basically no elements shared but combine both)
    - if a = $\epsilon$ -> just take FIRST(A)
- 

p. 121 of textbook
$$
\begin{align*}
\text{EPS}(\alpha) &\equiv \text{if } \alpha \longrightarrow^* e \text{ then true else false} \\
\text{FIRST}(\alpha) &\equiv \{ c : \alpha \longrightarrow^* c \beta \} \\
\text{FOLLOW}(A) &\equiv \{ c : S \longrightarrow^+ \alpha A \; c \beta \} \\
\text{PREDICT}(A \longrightarrow \alpha) &\equiv \text{FIRST}(\alpha) \cup (\text{if EPS}(\alpha) \text{ then FOLLOW}(A) \text{ else } \emptyset)
\end{align*}
$$


# parse stack
What is the content of the parse stack, if we run the table-driven top down parser algorithm on

     `until (s1, s2, s3; cond)`
     
and "s1" appears for the first time in the top of the stack?

Using the parse tree at the top, start for the Program, replace program with Stmts, and keep expanding eg. 
$Program, \$ \rightarrow Stmts, Stmts\_Tail\$$, then one would expand Both Stmts and Stmts_tail until s_1 is reached. When until is reached use whatever inside until argument (basically each stack item is just some command to follow with the given grammer)