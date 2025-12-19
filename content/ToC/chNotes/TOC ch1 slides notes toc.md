---
class: TOC CS3823
Type:
  - class
---
[[ToC_slides_ch1.pdf]]

# Pt.1
## Formally defining a FA (finite automaton)
- **Language of machine** M is the set of strings that M accepts.
	- Notation: L(M) = A

- ![[Pasted image 20250828205958.png|500]]
- two machines are equivalent if they recognize the same language
## Closed language (slide 17)
- **Do note that operations on sets DO matter**
	- We note that $B \times A \neq A\times B$ for $A=\{1,2\},B=\{3,4\}$
- Class of closed languages, if $A_1,A_2$ are regular, then $A_1 \cup A_2=M$ rsult must be regular
Hence, if we wanted to find what accepted states M is (formally defining FA)
- Create graph with all possible states on q&y, highlight accepted states on each
- 
![[Pasted image 20250904115353.png|990]]
# pt2. Nondet
## NFA Formal Defition
![[Pasted image 20250924212908.png]]
## DFA: Deterministic Finite Automaton vs NFA: Nondeterministic Finite Automaton
- In below NFA means if q1 accepts 1, it can either loop back to itself OR go to q2
	- In a 11 we cannot have duplicate states (eg. below cannot have 0,1 and would just be 0)
- may hv arrows exiting from each state per each node and edge

![[Pasted image 20250828210638.png|500]]

- Every NFA has a DFA (its just a lot longer/larger)
### Example!
![[Pasted image 20250828212435.png|700]]

Then we can formally describe this FA as:
### Converting NFA to DFA steps
![[Pasted image 20250909123540.png|250]]
![[Pasted image 20250909123614.png|450]]
1) We first take the powerset of all possible states in the DFA and draw them out
	1) We can denote this by $2^n=P(DFA)$, where n= all possible states 
	2) So if we have $\epsilon,1,2,3$, we have 8 total possible states, we start at the empty set (which loops all possible inputs into itself), 
2) When we cut about a slice of a DFA we are esentially making a slice in the tree. 

(left off on slide 41)
## Theroms regarding regular languages
How can we prove regular languages are closed under union operatiopn?
- Esentially because we can accept into either set, and both sets are regular, our restult must be regular
### Kleene star  
An infinite set which contains one set that has the powerset and all elements with their repitions 
- eg. $A=\{aa,b\}$
	- $A^*=\{a,b,aab,baa,aaaab,...\}$
- When proving this, we need to create a new state (empty state) to get into the actual NFA
### Proving under DFA
How would we prove this using a DFA? (Since they can always be represnrted as the same)
### Closure under Regular operations, proving
#### Proving Closure in Union Operation (slide 43)
> [!Therom 14]
    > The class of regular languages is closed under the union operation.

We can create 2 NFAs, and can realise that any input into either NFA will result in a closed language, thus combining the first input to be either NFA, we realise that the overall NFA combinging both is closed.
#### Proving Closure under Concat Operation (Slide 45)

> [!Therom 15]
    > The class of regular languages is closed under the Concat operation

Realise that all outputs of the regular langauge leading to the input of the next language must end (in any order) to a regular language. 

# pt.3 Regular Expressions
We know our symbols such as +, -, hence we can extend the same operations to our sets/languages. Esentially, we're creating basic operators on our sets

## Generating regex from words:
- 
## Converting regex to NFA
![[TOC_regex_ex21.excalidraw|10000]]


## Converting DFA to regex: (p75)
![[tTOC_ch1_ex25.excalidraw|500]]
> [!Warning] Steps for conversion
    > 1) Start by taking out the in node
    > 2) Take out rest of the nodes (in any order), save out node for last
    > 3) Use * to concat expressions, if more than 1 expr for IN, use $\cup$ to denote `,`
ch## For large example (p80)

## Generalized Nondeterministic Finite Automata (GNFA)
Why care? TODO!
> [!Info] GNFA Conditions:
    > A NFA w/ arrows may hv regex as label, has the following conditions:
    > - Start state transition arrows to every other state, but no arrows coming in from any other state
    > - only ONE accept state with arrows coming in from every state
    > - No arrows going out to other state
    > - accept state != start state
    > - Every other state (!start || Finish): 
    > 	- Out arrow to every other state
    > 	- In arrow to itself

> [!info] Formal Defition
    > 5 tuple : (just $\delta$ change)
    > - Q: finite set of states
    > - $\sum$ input alphabet
    > - $\delta$ transition function
    > - $q_{start}$: start, $q_{accept}$ accept

### Converting DFA to GNFA
1) New start state w/ $\epsilon\to$ old start state 
2) New accept state w/ $\epsilon <-$ all old accept states
3) 
### Converting GNFA down to only 2 states from k > 2 states 
Sho0uld note that the start state for every empty state always contains some $\epsilon $  

![[TOC_slide65_problem.excalidraw|1000]]

## DFA to CFG
1) Generate the DFA, 
2) 
## Regular Langauges TODO should ask for example on this 4 u 2 solve..
> [!abstract] Proof
    > Let M be some DFA for langauge A, create GNFA G starting frm M
    > We use procedure like so:
    > - let k = # of states of G
    > - k=2 ? G start&accept state + 1 arrow
    > - k>2? select any state, let G' be GNFA, then for any other state, we need to define transition function, start func should be 
    
#todoStudy I should ask about this and for an actual example.. I should also finish below.. 
> [!info] Proof: For any GNFA G, CONVERT(G) $\equiv$ G  (slide 72)
> **Base case**:
    > - Prove by induction, 
    > - base case: k=2, Regex seen onn label R describes all strings allow start->end
    > - Hence expr $\equiv$ G
    > 
    > **Induction step**
    > - 
### Convert DFA into regex 
   ![[Pasted image 20250916130941.png]] 
	1) Add new start and accept state (so now we have 4 nodes)
	2) Take out one of the original states (can -rm 1 || 2)
		1) Rip 2 out, draw arrow from 1 to new end state, arrow has 
		   $b(a\cup b)*\epsilon$ to end state
	3) Remove the remaining original state to now have just new start & end state
		1) Result in start -> $a*b(a\cup b)*\cup \varnothing$   
# Non Regular Languages

# Pumping Lemma
![[Pasted image 20251211164340.png]]
For some regular language *A* , there must be some length *p* s/t
- *s* is any string in A of at least *p* length
- *s* can be divided into 3 pieces: xyz:
	- for i>0,$xy^iz,z \in A$ , i++
	- $|y| > 0$ 
	- $|xy| \leq p$

https://math.stackexchange.com/a/113949
## Steps
1) Replace n with p in given equastion eg.
$$
0 ^n 1 ^n \rightarrow 0^p 1^p
$$
2) We generate our sample string s:
$$
0..0,0..0,0..01..1
$$
-  Where each comma delimits xyz, and are assumed to have the following properties (since they are normal):
	- $|xy| \leq p$
	- |y| > 0 
	- $xy^iz \in L$

So we can generate 
$$
\begin{gather}
xyyz=

s'=0^k 0^l 0^l 0^m 1^m
\\
k+l+m+l=p+l
\end{gather}
$$
Which shows that there are more 0's than 1's, (denoted by p+l for length of 0s, m for length of 1s which is $\in p$) and hecne is inval

## Example1:
[little more](https://www3.cs.stonybrook.edu/~cse350/slides/pumping.pdf) 
Show following is noyt regular:
$$
B=\{0^n 1^n |n >0\}
$$
1) Proof using contradiction, assuming B is regular
2) Because it is regular, we then create some string *s* of length *p*
3) We create some valid language string: `s=0011`, where the size of `s`  *p*
	1) Note `s=0101` isn't valid
	2) So for p times we have $0^p,1^p=s_{2}$
4) We can split $s_2$ into the three parts (for some n length), and assume we add y's length to be $y+1$, is the language still regular? Nope, we can realise
$$
S=x\{00\dots0 \},y=\{00..00 \},z=\{0..01..1\}
$$
Esentially, the goal is to create some string S that is outside the language (so coming up with xyz is up 2 u). Obv its a lot of redunent cases

## Example 2:
C= {w | w has equal amnt of 0's and 1's}

Show not regular!,

1) Assuming C is regular, create our random pair string $s$ length $p$=++
$$
S=x=\{0001111\},y=\{00..111\},z=\{001..\}
$$=
- Esentially just need to come up with some S that doesn't make the language regular, then because for that length, we realise that the language must not be regular. 

## Ex3 
Towards contreadiction, assume D regular. W/ pumping len p. Consider
$$
s=0^p 1 0^p 1
$$
Sicne D and |s| are 2p +2 $\geq$ p then we can apply pumping lema to `s` (need to prove that the length is greather than the original)
- We then need to prove the other 2 points, which aren't too bad. 
- Finally, we create ourt sample string and make some diffrernt $y^i$ that makes the language not regular 
By inflatinbg our y^i, the langauge does not fit the conditions to ensure the language is regular. From these 2, S' is not ww for some w, QED 

## Ex4!
We have following rules [[TOC ch1 slides notes toc#Pumping Lemma Defition]]

Prove  $D={{1^n}^2 | n \geq 0}$ is not regular. We take the first case of n, and the rest so we have:
$$
D=\{ \epsilon,1,1,1,\dots \}
$$


$$
\begin{gather}
S={1^p}^2
\\
\text{and } |s|=p^2 \geq p
\end{gather}
$$

So lets make our xyz from our original S string, and that we know the following conditials form the defition to create the partitions, where | x + y|$\leq$ p. We know $p^2 + k \leq p^2+p$ which is not of ^2 length

## Ex 5!
$$
\begin{gather}
E=\{0^i ,1^j |i>j\}
\end{gather}
$$
- Show that E is not regular
- Proof: Towards contradiction assume $E$ is regular, then:
	- Consider $s=xyz,xyz \in \forall E$ 
Where we must show that there are always more 0's than 1's
$$
\begin{gather}
S=00\dots0,00\dots_{0}0,01^p
\\
\text{Look @} s' = xy^2z
\\ \text{Where we see: } 0\dots0,0^k {0}^k,0\dots01^p
\\ \text{Which is valid!, but lets try i=0, because we have less 0's than 0's:}
\\ S'= 0\dots 0,,0\dots 01^p
\\ \text{Because k $\geq 1$, we show }i=j \neq E
 \\s''= p+1-|y|=p+1-k \leq p +1 -1 =p
 \\ \text{we know k must be atleast 1 and hecne shows contradiction}
\end{gather}
$$
tldr. we took out several 0's that weren't supposed to be thr. We ended up with an atleast equal amount of 0's and 1's which isnt allowed (it could be more but doesn't matter as long as one of the cases hold true).

# $\epsilon$ vs $\varnothing$ 
Empty set vs null set
- $\epsilon$ can be used as a transition state in edges. For example we can go to q_1 -> q_2 with no action ($\epsilon$) 
- $\varnothing$ Literially means no action can be made for this space, usually reserved when generating $\delta$ table to say that from this node, 1 will go nowhere (no edges denoting it)
#  Extra reosurces
- [showing languages aren't regular](https://www.cs.unc.edu/~plaisted/comp455/slides/nonreg2.4.pdf)
