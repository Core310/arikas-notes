---
title: "ToC_chapter_2_slides"
---

# ToC_chapter_2_slides

![[ToC/slides/ToC_chapter_2_slides.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/ToC/slides/ToC_chapter_2_slides.pdf) | [Download Local](/ToC/slides/ToC_chapter_2_slides.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Theory of Computation
Context-Free Languages
Dimitris Diochnos
School of Computer Science
University of Oklahoma

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

1 / 83

Outline

1

Introduction

2

Context-Free Grammars

3

Pushdown Automata

4

Non-Context-Free Languages

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

2 / 83

Introduction

Table of Contents

1

Introduction

2

Context-Free Grammars

3

Pushdown Automata

4

Non-Context-Free Languages

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

3 / 83

Introduction

Introduction

With finite automata and regular expressions we can describe many
languages, but some other simple languages such as {0n 1n |n ≥ 0} we
cannot.
Context-free grammars give us more power for such cases.
Applications: Used for the specification and compilation of
programming languages.
Parsers extract the meaning of a program
In some cases parsers can be created automatically given the grammar.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

4 / 83

Introduction

Context-free Languages

Languages of context-free grammars (CFGs) are called context-free
languages.
(include regular languages and more)
Pushdown automata (PDAs) recognize context-free languages (CFLs).

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

5 / 83

Context-Free Grammars

Table of Contents

1

Introduction

2

Context-Free Grammars

3

Pushdown Automata

4

Non-Context-Free Languages

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

6 / 83

Context-Free Grammars

Context-Free Grammars
Grammar
A collection of substitution rules, also called productions.
Example of a grammar (call it G1 ):
A → 0A1
A → B
B → #
A is the start variable. B is a variable. 0, 1 and # are called terminals.
Derivations (How to generate strings):
1

Write down the start variable.

2

Find a variable that is written down and a rule that starts with that
variable. Replace the written down variable with the RHS of that rule.

3

Repeat step 2 until no variables remain.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

7 / 83

Context-Free Grammars

Example
For example, grammar G1 generates the string 000#111:
A ⇒ 0A1 ⇒ 00A11 ⇒ 000A111 ⇒ 000B111 ⇒ 000#111.
Parse tree:

So: L(G1 ) = {0n #1n |n ≥ 0}.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

8 / 83

Context-Free Grammars

Convention: Abbreviate several rules with the same left-hand variable into
a single line, using the symbol “|” as an “or”.
Abbreviation
The set of rules



A → 0A1
A → B

is written down as
A → 0A1|B.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

9 / 83

Context-Free Grammars

Formal Definition of Context-Free Grammar

Definition 1 (Context-free grammar)
A context-free grammar (CFG) is a 4-tuple (V , Σ, R, S), where
1

V is a finite set called the variables,

2

Σ is a finite set, disjoint from V , called the terminals,

3

R is a finite set of rules, with each rule being a variable and a string of
variables and terminals, and

4

S ∈ V is the start variable.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

10 / 83

Context-Free Grammars

Formal Definition of Context-Free Grammar

If u, v, and w are strings of variables and terminals, and A → w is a rule of
the grammar,
We say that uAv yields uwv, written uAv ⇒ uwv.
∗

We say that u derives v, written u ⇒ v,
if u = v, or
if a sequence u1 , u2 , . . . , uk exists for k ≥ 0 and
u ⇒ u1 ⇒ u2 ⇒ . . . ⇒ uk ⇒ v.
∗

The language of the grammar is {w ∈ Σ∗ |S ⇒ w}.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

11 / 83

Context-Free Grammars

Example

Example 2
Consider grammar G3 = ({S}, {a, b}, R, S).
The set of rules, R, is
S → aSb | SS | λ
This grammar generates strings such as abab, aaabbb, and aababb, i.e.,
strings that belong to the language of all properly nested a’s and b’s (in the
sense of properly nested parentheses).

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

12 / 83

Context-Free Grammars

Designing Context-Free Grammars

Trickier than designing finite automata
If we can break a CFL into simpler pieces, do so! (Usually it is much
simpler this way!)
Then create grammars for the simpler parts and combine them (their
rules) by adding a new rule
S → S1 |S2 | · · · |Sk
where the variables Si are the start variables for the individual
grammars.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

13 / 83

Context-Free Grammars

Example

Example 3
Design a grammar for the language {0n 1n |n ≥ 0} ∪ {1n 0n |n ≥ 0}.
Grammar 1: S1 → 0S1 1 | λ (for language {0n 1n |n ≥ 0})
Grammar 2: S2 → 1S2 0 | λ (for language {1n 0n |n ≥ 0})
So the requested grammar is:
S → S1 |S2
S1 → 0S1 1|λ
S2 → 1S2 0|λ

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

14 / 83

Context-Free Grammars

Conversion of a DFA to a CFG
Easy to construct a CFG when the language is regular (and we can
construct a DFA for that language).
Conversion of a DFA into an equivalent CFG:
1

Make a variable Ri for each state qi of the DFA.

2

Add the rule
Ri → aRj
to the CFG if δ(qi , a) = qj is a valid transition in the DFA.

3

Add the rule
Ri → λ
if qi is an accept state of the DFA.

4

Make R0 the start variable of the grammar (corresponding to q0 which
is the start state of the machine).
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

15 / 83

Context-Free Grammars

Conversion of a DFA to a CFG

Certain CFLs contain strings that themselves contain substrings that
are somehow “linked”.
For example, the language {0n 1n |n ≥ 0}. Then we can create a rule of
the form
R → uRv
so that we can keep track of the u’s and the v’s simultaneously.
Finally, we can have more complex languages, in which the strings may
contain certain structures that appear recursively as part of other (or
the same) structures.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

16 / 83

Context-Free Grammars

Ambiguity
Definition 4 (Ambiguous grammar)
A string w is derived ambiguously in context-free grammar G if it has two
or more different leftmost derivations.
Grammar G is ambiguous if it generates some string ambiguously.
A derivation of a string w in a grammar G is a leftmost derivation if at
every step the leftmost remaining variable is the one replaced.
Remarks:
Some ambiguous grammars can be replaced by unambiguous
grammars that generate the same language.
Some CFLs, however, can be described only by ambiguous grammars.
Such languages are called inherently ambiguous.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

17 / 83

Context-Free Grammars

Chomsky Normal Form
Definition 5 (Chomsky normal form)
A context-free grammar is in Chomsky normal form if every rule is of the
form
A → BC
A → a
where a is any terminal and A, B, C are any variables—except that B and C
may not be the start variable.
In addition, we permit the rule
S→λ
where S is the start variable.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

18 / 83

Context-Free Grammars

Chomsky Normal Form
Theorem 6
Any CFL is generated by a CFG in Chomsky normal form.
Proof idea.
Rules that violate the conditions are replaced with equivalent ones that are
satisfactory.
1

Add a new start variable.

2

Eliminate all λ-rules of the form A → λ.

3

Eliminate all unit rules of the form A → B.

4

Patch up the grammar to be sure that it still generates the same
language.

5

Convert the remaining rules into the proper form.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

19 / 83

Context-Free Grammars

Chomsky Normal Form
Proof.
1 Add a new start variable S and the rule S → S, where S was the
0
0
original start variable ⇒
Guarantee no S0 on the RHS (right-hand side) of a rule.
2

Remove an λ-rule A → λ (where A is not a start variable).
For each rule where A occurs on the RHS of a rule, add a new rule with
that occurrence deleted.

Example

 R → uvAw
A →
λ
R → uAvw
Deleting 1st rule from:
we get:
R → uAvAw

R → uvw
Remark: When eliminating A → λ for a rule R → A, we substitute it with
R → λ (unless we had previously removed R → λ).


D. Diochnos (OU - CS)

Theory of Computation: CF Languages

20 / 83

Context-Free Grammars

Chomsky Normal Form
Proof (cont).
3

Handle all unit rules.
Remove a unit rule A → B and for each B → u rule (u: string of
variables and terminals), add the rule A → u (unless this was a unit
rule previously removed).
Repeat until we eliminate all unit rules.

4

Convert all remaining rules into the proper form.
For each rule A → u1 u2 · · · uk , where k ≥ 3 and each ui is a variable or
terminal symbol, write instead (i.e., replace it with):

A
→ u1 A1



 A1 → u2 A2
..

.



Ak−2 → uk−1 uk
The Ai ’s are all new variables. If k = 2 we replace any terminal ui in the
preceding rule(s) with the new variable Ui and add the rule Ui → ui .
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

21 / 83

Context-Free Grammars

Example

Example 7 (Conversion of CFG to Chomsky normal form)
Given
S → ASA | aB
A → B|S
B → b|λ
convert it to Chomsky normal form by using the conversion procedure just
given.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

22 / 83

Context-Free Grammars

Example (cont.)

Solution
Step 1: Make a new start variable
S0
S
A
B

D. Diochnos (OU - CS)

→
→
→
→

S
ASA | aB
B|S
b|λ

Theory of Computation: CF Languages

23 / 83

Context-Free Grammars

Example (cont.)
Solution (cont.)
Step 2: Eliminate λ-rules
(remove B → λ)
S0
S
A
B

→
→
→
→

S
ASA | aB | a (introduced a)
B | S | λ (introduced λ)
b

(remove A → λ)
S0
S
A
B

→
→
→
→

D. Diochnos (OU - CS)

S
ASA | aB | a | SA | AS | S
B|S
b

(introduced SA, AS, S)

Theory of Computation: CF Languages

24 / 83

Context-Free Grammars

Example (cont.)
Solution (cont.)
Step 3: Remove unit rules
(remove S → S)
S0
S
A
B

→
→
→
→

S
ASA | aB | a | SA | AS
B|S
b

→
→
→
→

ASA | aB | a | SA | AS (removed S)
ASA | aB | a | SA | AS
B|S
b

(removed S)

(remove S0 → S)
S0
S
A
B
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

25 / 83

Context-Free Grammars

Example (cont.)
Solution (cont.)
Step 3: Remove unit rules (cont.)
(remove A → B)
S0
S
A
B

→
→
→
→

ASA | aB | a | SA | AS
ASA | aB | a | SA | AS
b | S (removed B)
b

S0
S
A
B

→
→
→
→

ASA | aB | a | SA | AS
ASA | aB | a | SA | AS
b | ASA | aB | a | SA | AS
b

(remove A → S)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

26 / 83

Context-Free Grammars

Example (cont.)

Solution (cont.)
Step 4: Final Simplifications
S0
S
A
B
A1
U

→
→
→
→
→
→

AA1 | UB | a | SA | AS
AA1 | UB | a | SA | AS
b | AA1 | UB | a | SA | AS
b
SA (introduced)
a (introduced)

Remark: Technically we should have had instead of a single U, several Ui s
leading to a. All these are now combined and the grammar is simpler.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

27 / 83

Context-Free Grammars

Regular Grammars
Definition 8
A grammar G = (V , T , S, P) is said to be right-linear if all productions are
of the form
A → xB
,
or A → x
where A, B ∈ V and x ∈ T ∗ . A grammar is said to be left-linear if all
productions are of the form
A → Bx
,
or A → x
Definition 9 (Regular Grammar)
A regular grammar is a grammar that is either right-linear or left-linear.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

28 / 83

Context-Free Grammars

Linear Grammars
Definition 10 (Linear Grammar)
A linear grammar is a grammar in which at most one variable can occur
on the right side of any production, without restriction on the position of
the variable.
A regular grammar is always linear, but not all linear grammars are regular.
Example 11 (Linear but not regular)

 S → A
A → aB | λ
G

B → Ab
Remark 1
Every regular language has a regular grammar (we saw a construction with a
right-linear grammar). The equivalence also holds for left-linear grammars.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

29 / 83

Pushdown Automata

Table of Contents

1

Introduction

2

Context-Free Grammars

3

Pushdown Automata

4

Non-Context-Free Languages

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

30 / 83

Pushdown Automata

Pushdown Automata (PDAs)

PDAs: Similar to NFAs but also have a stack (which serves as memory)
Will be able to recognize some nonregular languages
Equivalent in power to context-free Grammars
Proving that a language is context-free:
Either give a context-free grammar generating the language, or
give a push-down automaton (PDA) recognizing it
(use whichever is easier!)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

31 / 83

Pushdown Automata

Finite Automaton vs PDA Representation

finite automaton

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

PDA

32 / 83

Pushdown Automata

Pushdown Automata

Push/pop operations for interacting with the stack.
(Of course, interaction only takes place with top of stack, as we can
only read the symbol at the top of the stack.)
Discuss a simple algorithm to recognize the language {0n 1n |n ≥ 0}, by
using a stack.
Nondeterministic PDAs can recognize certain languages that no
deterministic PDA can recognize!
Only the Nondeterministic PDAs are equivalent in power to CFGs.
(So we focus on Nondeterministic PDAs.)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

33 / 83

Pushdown Automata

Formal Definition of a PDA
We have both an input alphabet Σ and a stack alphabet Γ.
Transition function δ: Q × Σλ × Γλ → P(Q × Γλ ).
Definition 12 (Pushdown automaton)
A pushdown automaton is a 6-tuple (Q, Σ, Γ, δ, q0 , F ), where Q, Σ, Γ, and F
are all finite sets, and
1

Q is the set of states,

2

Σ is the input alphabet,

3

Γ is the stack alphabet,

4

δ : Q × Σλ × Γλ → P(Q × Γλ ) is the transition function,

5

q0 ∈ Q is the start state, and

6

F ⊆ Q is the set of accept states.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

34 / 83

Pushdown Automata

How a PDA computes
Let M = (Q, Σ, Γ, δ, q0 , F ) be a PDA.
M accepts input w if w can be written as w = w1 w2 · · · wm , where each
wi ∈ Σλ and a sequence of states r0 , r1 , . . . , rm ∈ Q and strings
s0 , s1 , . . . , sm ∈ Γ∗ exist that satisfy the following three conditions.
1

r0 = q0 and s0 = λ.
(This condition signifies that M starts out properly, in the start state q0
and with an empty stack.)

2

For i = 0, . . . , m − 1, we have (ri+1 , b) ∈ δ(ri , wi+1 , a), where si = at
and si+1 = bt for some a, b ∈ Γλ and t ∈ Γ∗ .
(This condition states that M moves properly according to the state,
stack, and next input symbol.)

3

rm ∈ F .
(This condition states that an accept state occurs at the input end.)
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

35 / 83

Pushdown Automata

Examples of Pushdown Automata

Example 13 (PDA construction)
Describe formally the PDA that recognizes the language {0n 1n |n ≥ 0}.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

36 / 83

Pushdown Automata

Examples of Pushdown Automata
Solution
Define M1 = (Q, Σ, Γ, δ, q1 , F ), where
Q = {q1 , q2 , q3 , q4 },
Σ = {0, 1},
Γ = {0, $},
F = {q1 , q4 }, and
δ is given by the following table, wherein blank entries signify ∅.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

37 / 83

Pushdown Automata

Example (cont.)

Solution (cont.)
State diagram for the PDA M1 that recognizes {0n 1n |n ≥ 0}.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

38 / 83

Pushdown Automata

Example (cont.)
Solution (cont.)
Labels:
“a, b → c” to signify that when the machine is reading an a from the
input, it may replace the symbol b on the top of the stack with a c.
Any of a, b, and c may be λ.
If a = λ, the machine may make this transition without reading any
symbol from the input.
If b = λ, the machine may make this transition without reading and
popping any symbol from the stack.
If c = λ, the machine does not write any symbol on the stack when
going along this transition.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

39 / 83

Pushdown Automata

Example

Example 14 (PDA construction)
Design a PDA that recognizes the language
{ai bj c k |i, j, k ≥ 0 and (i = j or i = k)}.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

40 / 83

Pushdown Automata

Example (cont.)

Solution

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

41 / 83

Pushdown Automata

Example

Example 15 (PDA construction)
Design a PDA recognizing the language {ww R |w ∈ {0, 1}∗ }.
Recall that w R is w written backwards.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

42 / 83

Pushdown Automata

Example (cont.)

Solution
Idea: Nondeterministically guess the midpoint.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

43 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

Theorem 16
A language is context free if and only if some PDA recognizes it.
We will prove both directions separately.
Lemma 17
If a language is context free, then some PDA recognizes it.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

44 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof idea.
The PDA P tries to ‘guess’ a derivation from the grammar G that gives the
input w.
So that we can use the stack in this direction, we match terminals as they
are generated or read from the top of the stack, and only store part of the
intermediate string.

P representing the intermediate string 01A1A0
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

45 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

Informal description of P:
1
2

Place the marker symbol $ and the start variable on the stack.
Repeat the following steps forever.
a. If the top of stack is a variable A, nondeterministically select one of the
rules for A and substitute A with the RHS of that rule.
b. If the top of stack is a terminal symbol a, read the next symbol from
the input and compare it to a.
If they match, repeat.
Otherwise, reject this branch of nondeterminism.
c. If the top of stack is the symbol $, enter the accept state.
(Doing so accepts the input if it has all been read.)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

46 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof.
We will allow the transition function to write an entire string on the stack.
We can simulate such an action with intermediate states. Say the PDA goes
from q to r reading symbol a at the input, popping s from the stack:

We will denote this as (r, xyz) ∈ δ(q, a, s).

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

47 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof (cont.)
States of P are Q = {qstart , qloop , qaccept } ∪ E, where E is the set of
states we need for implementing the shorthand just described.
The start state is qstart . The only accept state is qaccept .
Specifying the transition function:
Step (1):
δ(qstart , λ, λ) = {(qloop , S$)}
Step (2):
(a)

δ(qloop , λ, A) = {(qloop , w)| where A → w is a rule in R}.

D. Diochnos (OU - CS)

(b)

δ(qloop , a, a) = {(qloop , λ)}.

(c)

δ(qloop , λ, $) = {(qaccept , λ)}.
Theory of Computation: CF Languages

48 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

State diagram of P

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

49 / 83

Pushdown Automata

Example

Example 18 (PDA construction)
Construct a PDA from the following context-free grammar G.
S
T

D. Diochnos (OU - CS)

→ aTb | b
→ Ta | λ

Theory of Computation: CF Languages

50 / 83

Pushdown Automata

Example (cont.)
Solution

State diagram of the PDA
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

51 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Now we prove the reverse direction of the Theorem.
Lemma 19
If a PDA recognizes some language, then it is context free.
Proof idea.
(It is trickier because ‘programming’ a grammar is not as easy as
‘programming’ an automaton.)
For each pair of states p and q in P, the grammar will have a variable
Apq . This variable generates all the strings that can take P from p with
an empty stack to q with an empty stack. (I.e., leave the stack intact
during this transition.)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

52 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof idea (cont.)
Modify P slightly, to give it the following three features:
1
2
3

It has a single accept state, qaccept .
It empties its stack before accepting.
Each transition either pushes a symbol onto the stack (a ‘push’ move) or
pops one off the stack (a ‘pop’ move), but it does not do both at the same
time.

Remark:
Giving P features (1) and (2) is easy.
For (3) a simultaneous pop-push goes through an intermediate state.
Similarly, for (3) a transition that neither pops nor pushes can be simulated
with an arbitrary push-pop (in 2 steps).
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

53 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
PDA’s P computation on string x:
Either the symbol popped at the end is the symbol that was pushed at
the beginning:

PDA computation corresponding to the rule Apq → aArs b
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

54 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
or not:

PDA computation corresponding to the rule Apq → Apr Arq

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

55 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof.
Say that P = (Q, Σ, Γ, δ, q0 , {qaccept }) and construct G.
The variables of G are {Apq |p, q ∈ Q}.
The start variable is Aq0 , qaccept .
The grammar G has the following rules:
For each p, q, r, s ∈ Q, t ∈ Γ, and a, b ∈ Σλ ,
if δ(p, a, λ) contains (r, t) and δ(s, b, t) contains (q, λ),
put the rule Apq → aArs b in G.
For each p, q, r ∈ Q,
put the rule Apq → Apr Arq in G.
Finally, for each p ∈ Q,
put the rule App → λ in G.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

56 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Claim
If Apq generates x, then x can bring P from p with empty stack, to q with
empty stack.
We prove this claim by induction on the number of steps in the derivation of
x from Apq .
Proof.
Basis: The derivation has 1 step.
Then the RHS of the rule contains no variables.
⇒ The only possibility is App → λ.
⇒ input λ takes P from p with empty stack to p with empty stack, so the
basis is proved.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

57 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof (cont.)
Induction Hypothesis: Assume the claim is true for derivations of length
at most k, where k ≥ 1 (and prove true for derivations of length k + 1).
∗

Induction Step: Suppose that Apq ⇒ x in (k + 1) steps.
The first step in this derivation is either Apq ⇒ aArs b or Apq ⇒ Apr Arq .
We handle these two cases separately.
• The first step is Apq ⇒ aArs b.
Consider the portion y of x generated by Ars , so that x = ayb.
∗
Because Ars ⇒ y in k steps, the induction hypothesis tells us that P can go
from r with empty stack to s with empty stack.
Because Apq → aArs b is a rule of G, δ(p, a, λ) contains (r, t) and δ(s, b, t)
contains (q, λ), for some stack symbol t.
So P can go from p with empty stack to q with empty stack.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

58 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

Proof (cont.)
• The first step is Apq ⇒ Apr Arq .
∗
∗
Now x is written as x = yz where Apr ⇒ y and Arq ⇒ z in at most k steps
each one of them.
So, by the induction hypothesis it follows that P can go from p with empty
stack to r with empty stack, and from r with empty stack to s with empty
stack.
Either way, we have proved the claim.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

59 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

Claim
If x can bring P from p with empty stack to q with empty stack, then Apq
generates x.
(Proof by induction on the number of steps in the computation.)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

60 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof.
Basis: The computation has 0 steps.
If a computation has 0 steps, it starts and ends at the same state — say, p.
∗
So we must show that App ⇒ x.
In 0 steps, P only has time to read the empty string, so x = λ.
By construction, G has the rule App → λ, so the basis is proved.
Induction hypothesis: Assume that for computations of length at most k,
where k ≥ 0, it holds that if x can bring P from p with empty stack to q
with empty stack, then Apq generates x.
Induction step: Look at computations of length k + 1.
Either the stack is empty only at the beginning and end of this
computation, or it becomes empty elsewhere, too.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

61 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars
Proof (cont.)
• If the stack is empty only at the beginning and end of this computation,
the symbol, say t, that was pushed at the first move, is the one popped at
the last move.
Let a be the symbol read in the first move, b the symbol read in the last
move, r the state after the first move, and s the state before the last move.
Then (r, t) ∈ δ(p, a, λ) and (q, λ) ∈ δ(s, b, t).
So the rule Apq → aArs b is in G.
Let x = ayb. Computing y has (k + 1) − 2 = k − 1 steps.
∗
∗
Thus, by the induction hypothesis, Ars ⇒ y. Hence Apq ⇒ x.
• If the stack is empty in between, say in state r,
Then the portions of the computation from p to r and from r to q each
contain at most k steps.
∗
∗
By the induction hypothesis, Apr ⇒ y and Arq ⇒ z. Because rule
∗
Apq → Apr Arq is in G, Apq ⇒ x, and the proof is complete.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

62 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

Corollary 20
Every regular language is context-free.
Proof.
Every regular language is recognized by a finite automaton.
Every finite automaton is automatically a pushdown automaton that simply
ignores its stack.
Pushdown automata recognize the class of context-free languages.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

63 / 83

Pushdown Automata

Equivalence of PDAs with Context-Free Grammars

Therefore:

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

64 / 83

Non-Context-Free Languages

Table of Contents

1

Introduction

2

Context-Free Grammars

3

Pushdown Automata

4

Non-Context-Free Languages

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

65 / 83

Non-Context-Free Languages

Non-Context-Free Languages
A more involved pumping lemma follows.
Theorem 21 (Pumping lemma for context-free languages)
If A is a context-free language, then there is a number p (the pumping length)
where, if s is any string in A of length at least p, then s may be divided into five
pieces
s = uvxyz
satisfying the conditions:
1

for each i ≥ 0, uv i xy i z ∈ A,

2

|vy| > 0, and

3

|vxy| ≤ p.

Condition (2) means that either v or y is ̸= λ. Otherwise the theorem would
be trivially true.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

66 / 83

Non-Context-Free Languages

Non-Context-Free Languages

Proof idea.
Let s ∈ A, so that s is ‘sufficiently long’. Since s ∈ A, s has a parse tree
because it is derivable from G.
The idea is that the parse tree is tall because s is very long.
So the parse tree must contain some long path from the root to some
terminal symbol (some leaf).
On this long path, some variable symbol R must be repeating (by
pigeonhole principle).

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

67 / 83

Non-Context-Free Languages

Non-Context-Free Languages

Proof idea (cont.)
As the following figure shows, we can replace the subtree under the second
occurrence of R with the subtree under the first occurrence of R and still get
a legal parse tree.
Therefore, we may cut s into five pieces uvxyz as the figure indicates, and we
may repeat the 2nd and 4th pieces and obtain a string still in the language.
In other words, uv i xy i z ∈ A for any i ≥ 0.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

68 / 83

Non-Context-Free Languages

Non-Context-Free Languages
Proof idea (cont.)

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

69 / 83

Non-Context-Free Languages

Non-Context-Free Languages

Proof.
Let G be a CFG for CFL A. Let b be the maximum number of symbols
(variables or terminals) in the RHS of a rule (assume b ≥ 2).
In any parse tree using G, a node has ≤ b children.
So, at most b leaves are 1 step from the start variable;
at most b2 leaves are within 2 steps of the start variable; etc.
In other words, if a generated string is at least l long, then the parse tree
must be at least ⌈logb (l)⌉ tall.
Note: bh−1 + 1 ≤ |w| ≤ bh ⇒ bh−1 ≤ |w| ≤ bh ⇒ h − 1 < logb (|w|) ≤ h

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

70 / 83

Non-Context-Free Languages

Non-Context-Free Languages
Proof (cont.)
• Set the pumping length p to be
p = b|V |+1
where |V | is the number of variables in G.
• If s has several parse trees, pick the parse tree that has the smallest
number of nodes.
If s is a string such that |s| ≥ p, then the parse tree for s be at least |V | + 1
high, so there is a path of length at least |V | + 1.
That path has at least |V | + 2 nodes (one at a terminal, the others at
variables).
Hence that path has ≥ |V | + 1 variables.
Due to pigeonhole principle, some variable R appears more than once. For
convenience later, pick R among the lowest |V | + 1 variables on this path.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

71 / 83

Non-Context-Free Languages

Non-Context-Free Languages
Proof (cont.)
• Divide s into uvxyz according to Figure above.
The upper occurrence of R has a larger subtree and generates vxy,
whereas the lower occurrence generates just x with a smaller subtree.
Both of these subtrees are generated by the same variable (R), so we may
substitute one for the other and still obtain a valid parse tree.
Replacing the smaller by the larger repeatedly gives parse trees for the
strings uv i xy i z at each i > 1. (Condition 1)
• v and y can not be simultaneously λ. (We selected the parse tree that has
the fewest number of nodes generating s.) (Condition 2)
• Condition 3 (|vxy| ≤ p) is justified since we looked at the last |V | + 1
variables on the path.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

72 / 83

Non-Context-Free Languages

Examples

Example 22
Show that the language B = {an bn c n |n ≥ 0} is not context-free, using the
pumping lemma.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

73 / 83

Non-Context-Free Languages

Examples

Solution
Towards contradiction, assume that B is a context-free language.
Let p be the pumping length for B (that is guaranteed to exist by the
pumping lemma). Select the string
s = ap b p c p
to show that one of the conditions will be violated, no matter how we split s
into uvxyz.
By Condition 2, either v or y is nonempty.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

74 / 83

Non-Context-Free Languages

Examples
Solution (cont.)
Case I: Both v and y contain only one type of alphabet symbol.
Then, in the string
uv 2 xy 2 z
we are increasing the occurrences of at least one symbol, but certainly not
all three simultaneously.
So, uv 2 xy 2 z ∈
/ B.
Case II: One of v or y contains at least two types of symbols.
Then, in the string
uv 2 xy 2 z
some symbols are out of order.
So, again, uv 2 xy 2 z ∈
/ B.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

75 / 83

Non-Context-Free Languages

Examples

Example 23
Let C = {ai bj c k |0 ≤ i ≤ j ≤ k}.
Use the pumping lemma to show that C is not a CFL.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

76 / 83

Non-Context-Free Languages

Examples
Solution
Towards contradiction, assume that C is context-free.
Let p be the pumping length given by the pumping lemma.
Again use the string
s = ap b p c p .
We split s again into uvxyz and distinguish two cases.
Case I: Both v and y contain only one type of alphabet symbol. Then some
symbol among a, b, c is missing from both. [Note that the reasoning used in
example 22, case 1, does not apply immediately.]
We further subdivide this case into three subcases according to which
symbol does not appear.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

77 / 83

Non-Context-Free Languages

Examples
Solution (cont.)
• a’s do not appear. Then we try pumping down to obtain the string
uv 0 xy 0 z = uxz.
That contains the same number of as as s does, but fewer b’s or c’s (or both).
Therefore, uxz ∈
/ C, and a contradiction occurs.
• b’s do not appear. Then either a’s or c’s must appear in v or y because
both can not be λ.
If a’s appear, the string uv2xy2z ∈
/ C since it contains more a’s than b’s.
If c’s appear, the string uv0xy0z ∈
/ C since it contains more b’s than c’s.
So, either way contradiction.
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

78 / 83

Non-Context-Free Languages

Examples

Solution (cont.)
• c’s do not appear. Then uv 2 xy 2 z ∈
/ C since it contains more a’s or more b’s
than c’s, and a contradiction occurs.
Case II: When either v or y contains more than one type of symbol, then
uv 2 xy 2 z ∈
/ C since it will not contain the symbols in the correct order, and a
contradiction occurs.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

79 / 83

Non-Context-Free Languages

Examples

Example 24
Let D = {ww|w ∈ {0, 1}∗ }.
Use the pumping lemma to show that D is not a CFL.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

80 / 83

Non-Context-Free Languages

Examples

Solution
Towards contradiction, assume that D is a CFL. Let p be the pumping length
given by the pumping lemma.
This time choosing string s is less obvious.
Candidate 1: 0p 10p 1.
This string can be pumped with the decomposition shown below, so it is not
adequate for our purposes.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

81 / 83

Non-Context-Free Languages

Examples
Solution (cont.)
Candidate 2: 0p 1p 0p 1p .
Divide s into uvxyz, where |vxy| ≤ p.
If vxy is to the left of the midpoint of s, then
uv 2 xy 2 z
results in having at least one 1 to the right of the midpoint. But then
uv 2 xy 2 z ∈
/ D (starts with 0 and after midpoint starts with 1).
If vxy is to the right of the midpoint of s, then
uv 2 xy 2 z
moves a 0 into the last position of the first half and so again
uv 2 xy 2 z ∈
/D
D. Diochnos (OU - CS)

Theory of Computation: CF Languages

82 / 83

Non-Context-Free Languages

Examples

Solution (cont.)
If vxy contains the midpoint of s, pumping down to
uxz
we have the form 0p 1i 0j 1p , where i and j cannot both be p.
So again a contradiction, since uxz ∈
/ D.

D. Diochnos (OU - CS)

Theory of Computation: CF Languages

83 / 83

</details>
