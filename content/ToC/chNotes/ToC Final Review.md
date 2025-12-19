---
class: TOC CS3823
Type:
  - class
---
# Actual qns to ask;
Answer for hw2, q4.1? (isnt it correct? Saying any number of even, and an optinal odd)
## Hw2: Q3.3:
## Hw2: Q3.4:

## Hw2: 2.2 

## Hw2: 2.3

# Homework qns:
## MCQ (done)
- $\{ \emptyset,\{ \emptyset \} \}$ set of all subsets of an empty set
- $A \times B$ vs $A \circ B$ 
	- $\times$ produces a set of pairs, eg. $\{ (A_{1}B_{1}), (A_{1}B_{2},\dots) \}$
	- $\circ$ Produces a set of strings eg. $\{ A_{1}B_{1},A_{1}B_{2} \}$ (note they aren't in a set tgt). 
- If A has $\Sigma$ then $\Sigma \in A^*$ 
- inventor of latex: Donald Knuth
- subset of regular langauge isn't guarentee to be regular (expand with all types of operations..)
- ambiguous def: CFG may be *ambiguous*  if its possible to get a different parse tree but same result string 

## Hw1 (Easy)
### Set theory: (done)
- $B\setminus A$, all elements in $B$ not in $A$
- $A \times B$ : multiply all elements tgt (skippable)
- $P(A)$ (Powerset): All subsets of $A$ including empty set. Always $2^k$, $k=$ $|A|$ 
### Build DFA
- L3 = {w | w starts with an 1 or ends with a 0}, Σ = {0, 1}.
- L2 = {w | w has at most two occurrences of the symbol b}, Σ = {a, b}.
### Proof via Induction (done)
- Base Case (minimum $i$ value)
- induction step $i+1$ step
- then if true for $i$ must be true for $i+1$ 

## Hw2 (hard)
### Pumping Lemma Hw2 q6 (DONE)
[[TOC ch1 slides notes toc#Pumping Lemma | pumping lemma]]  for other example

Esentially we want to prove that p +l > p and thus breaks our original properties. 

Assume regular language *A* , there must be some length *p* s/t
- *s* is any string in A of **at least** *p* length
- *s* can be divided into 3 pieces: xyz:
	- for i>0,$xy^iz,z \in A$ , i++
	- $|y| > 0$ 
	- $|xy| \leq p$ 

L1={w∈{0,1}∗∣ every prefix of w has at least as many zeroes as ones}

Towards contradiction, assume D regular. Consider sample string 
$$
0^p 1^p
$$
Which has length 2p, thus is in `s`. We know that $|xy|$ cannot be greater than `p`, and thus is confined to `0` like so:
$$
x=0^a, \ y=0^i , z=0^{p-a-b} 1^p
$$
Consider if we pumped i=0, we would see an uneven amount of 0's compared to ones which thus disproves the langauge can be regular. 
### NFA build
Let Σ = {0, 1}. Give state diagrams for NFAs that recognize the following languages.  

(i) L1 = {w | w contains two consecutive 1s or w contains no 0s}.  

(ii) L2 = {w | w = w1w2 . . . wn such that wn−3 = 0 and wn−2 = 1}.  

### PowerSet construction
Qns 2.2 and 2.3

### GNFA construction (DONE)
(q5 hw2). GNFAs are NFA's with regex symbols in them. We use them to take out states to eventually reach one symbol. 

1) make new start and end state
2) rip out intermediate states

### Regular Expressions (DONE)
Eg. some w | w as some binary number, accepts when divisible by 2

Either:
$$
\begin{gather}
\sum * 0
\\
(0 | 1)* 0
\end{gather}
$$
aka any number of chars  then a 0, or any number of 0's or 1's then a 0 

## Hw3
### PDAs (done)
Defined via 
$$
(Q, \Sigma, \Gamma, \delta, q_0, F)
$$
1. $Q$ set of states  
2. $\Sigma$ —  input alphabet  
3. $\Gamma$ — set of pushdown symbols (which can be pushed and popped from the stack) (isnt this just sigma with $ appended?)
4. $\delta$:  defined as (current\_state,input,popped\_symbol) $\rightarrow$ (end\_state,symbol\_pushed):
5. $q_0 \in Q$ — start state  
6. $F \subseteq Q$ — accept states


$\delta$ example:
$$
(q_0, 0, \varepsilon) \rightarrow \{(q_1, \$)\}
$$
![[Pasted image 20251211222601.png]]

### Give a context-free grammar that generates L(P_3) (DONE)
$$
\begin{gather*}
    S_1 \rightarrow 0 S_1 1 | \epsilon
    \\ 
    S_2 \rightarrow 1 S_2 0 | \epsilon
    \\ 
    \text{combining both:}
    \\ \boxed{S \rightarrow S_1 | S_2}
\end{gather*}
$$

### CFG to CNF? (DONE)
**CNF:** CFG that must follow the form:
$$
\begin{gather}
A \to BC
\\
A \to a
\end{gather}
$$

1) Add a new start state pointing to original start state
2) remove all $\lambda$ states (go upward one level to replace using `|`)
3) Tidy all leftover forms that don't match the given eg. $A \rightarrow 0X$ becomes $Z \rightarrow 0$ and $A \rightarrow ZX$ 
	 $$

$$


### Regualr Grammer from Language L (DONE)
 $\Sigma = \{0, 1\}$. Find a regular grammar $G$ that generates the language $L$:
$$
L = \{w \mid w \in \Sigma^* \text{ such that } w \text{ has at most two } 0\text{'s}\}
$$
1) Generate DFA from L 
2) Replace all nodes with $R_i \rightarrow 1\{ \text{node} \} | \dots$ 
	1) eg. $R_{0} \rightarrow 1 R_0 \ | \  0 R_1$ 
	2) Then continue for ONLY accepting states
![[Pasted image 20251211174232.png]]
## Hw4
### PDA construction

## Hw5

### Decidability
hw5 q2
### Closure in P (DONE)
For all but $A \times B$, we generate 2 TM's which run in polynomial time. With an input m, split non-deterministically into a,b. Then feed a,b into both tape TA TB. 
- $A \setminus B$ -> A ^ ! B -> (A=T,B=F) -> T ^ ! F -> T ^ T -> T
- $A \cap B$ -> A ^ B
- $A \cup B$ -> A v B

If $A \times B$ -> A ^ B, then we have 2 inputs, a,b. We cannot split unlike above non-det and instead only take the inputs
### Decidable languages

### Config & description of TM
[[TOC ch3_church_turing_slides notes toc#Implementation Description | implementation ex (more)]]

(I still don't understand concat vs union proofs..)

3 ways 2 describe TM: Formally, implementation, high lvl. 

Formal: Implement entire diagram + states of TM, implmentation, talkj about algo in mmore detail

High-level description of TM $M$, decides language $L$, concatenation of the decidable languages $A$ and $B$: s/t $L = A \circ B = \{xy \mid x \in A, y \in B\}$

We take the same approach we did with [[ToC Final Review#Closure | closure properites]], creating 2 TMs, TA, TB. Take string `w` run thru all possible combos of splitting it into `x,y`. Feed x, y respectively into TA, TB. If both accept, accept, else reject if no combos accept.

- On input $w$, take all possible combos of $w$ into xy. $|w|=n$ ? have $(n+1)$ ways to split into two parts.
- Feed each one of the two parts to the respective TMs for $A$ and $B$.
    - If both $A$ and $B$ accept, accept
    - Otherwise try another split.
- If all $(n+1)$ splits have been considered and in none of them both $M_A$ and $M_B$ accepted, then reject.E
# From announcement
## Post Correspondence Problem(Done)
$$\text{PCP} = \{ \langle P \rangle \mid P \text{ is an instance of the Post correspondence problem with a match} \}$$
is **undecidable**. We're given a set of fractions, want to find where the string of the concatanated numerators is the same as concat denom.
## asymptotic complexity: Big-Oh, little-Oh, Big-Omega, little-Omega, Theta.  (Done)
- $O(g(n))$ Worst case complexity, slower/= to  g(n)
	- $o(g(n))$ must be slower than g(n)
- $\Omega(g(n))$ Best case complexity ($\geq$ g(n))
	- $\omega(g(n))$ must be faster than g(n)
- $\Theta(g(n))$ exact complexity (in all cases)

- $2n = O(n)$. **TRUE** (drop constants)
- $\sqrt{n} = o(n)$ **TRUE** but f(n) != o(f(n))
- $3^n = 2^{O(n)}$. **TRUE** (both are ^n)
- $n = o(2n)$. **FALSE** (take limit for n/2n -> 1/2 $\neq$ 0)
- $2^n = o(3^n)$. **TRUE** (lim again -> 2^n / 3^n -> 0)
- The formula $\phi = (x \vee y) \wedge (x \vee \overline{y}) \wedge (\overline{x} \vee y) \wedge (\overline{x} \vee \overline{y})$ is satisfiable. **FALSE** (truth table or skill issue..)
## classes P and NP are? (Done)
- P: polynomial time O(n^k) (solvable problems)
- NP non-deterministic P (unsolavable)
- P vs NP means if problem takes P on a non-deterministic TM, then one can build a deterministic TM which would solve the same problem also in polynomial time. 
## Turing Machines (Done)
Decider if will ! infinite loop for finite string. 
#### Formal Defition (DONE)
7 tuple, augmented FA:
- Q: set of states
- $\sum$: inp alphabet
- $\Gamma$: Tape alphabet, as many symbols can read frm inp + a few more (inc blank symbol) where $\sum \in \Gamma$
- $\delta$ Reads some state +  inp symbol, will produce new state as result
- $q_{0}$ start
- $q_{\text{accept}}$ accept 
- $q_{\text{reject}}$ Reject, can never be same as accept

#### Proving undecidable problems

# In cheat sheet
- PL
- Set theory 
- MCQ from midterms

# Small items (Done)
-  A Hamiltonian path goes through every node exactly once
	- No one knows whether HAMPATH is solvable in polynomial time.
- 