---
title: "ToC_slides_ch1"
---

# ToC_slides_ch1

![[ToC/slides/ToC_slides_ch1.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/ToC/slides/ToC_slides_ch1.pdf) | [Download Local](/ToC/slides/ToC_slides_ch1.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Theory of Computation
Regular Languages
Dimitris Diochnos
School of Computer Science
University of Oklahoma

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

1 / 100

Outline

1

Finite Automata

2

Nondeterminism

3

Regular Expressions

4

Non-Regular Languages

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

2 / 100

Finite Automata

Table of Contents

1

Finite Automata

2

Nondeterminism

3

Regular Expressions

4

Non-Regular Languages

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

3 / 100

Finite Automata

Finite Automata

Simplest computational model:
Finite state machine or finite automaton
Good model for computers with extremely limited amount of memory
(e.g., automatic door).
Markov chains are probabilistic counterparts of finite automata.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

4 / 100

Finite Automata

Finite Automata – example
Example 1 (A simple finite automaton M1 )

M1 recognizes strings that:
have at least one 1,
end in a 1,
end in an even number of zeros, following the last 1 (i.e., there is at
least one 1)
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

5 / 100

Finite Automata

Formal definition of a finite automaton

Finite automaton
A finite automaton is a 5-tuple (Q, Σ, δ, q0 , F ), where:
Q is a finite set called the states,
Σ is a finite set called the (input) alphabet,
δ : Q × Σ → Q is the transition function (it includes the rules for
moving),
q0 ∈ Q is the start state, and
F ⊆ Q is the set of accept states (final states).

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

6 / 100

Finite Automata

Language

Language
A Language of machine M is the set of strings that M accepts.
Notation: L(M) = A
We say that M recognizes A or that M accepts A.
In the example 1, with M1 , above, L(M1 ) = A where A =
{w|w contains at least one 1 and an even number of zeros follow the last 1}.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

7 / 100

Finite Automata

Examples of finite automata (a)
Example 2 (Automaton M2 )

M2 = ({q1 , q2 }, {0, 1}, δ, q1 , {q2 })

δ 0 1
q1 q1 q2
q2 q1 q2
State diagram and formal description contain the same information.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

8 / 100

Finite Automata

Remark

A good way to understand a machine:
Try it on some sample input strings.
Example 3
String 1101 is accepted,
String 110 is rejected.
Then:
M2 accepts all strings that end with a 1.
Thus, L(M2 ) = {w|w ends in a 1}.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

9 / 100

Finite Automata

Examples of finite automata (b)

Example 4 (Automaton M3 )

L(M3 ) = {w|w is the empty string ε or ends in a 0}

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

10 / 100

Finite Automata

Examples of finite automata (c)
Example 5 (Automaton M4 )

L(M4 ) = {w|w starts and ends with the same symbol}
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

11 / 100

Finite Automata

Formal definition of computation
Computation
Let M = (Q, Σ, δ, q0 , F ) be a finite automaton and let w = w1 w2 · · · wn be a
string where each wi is a member of the alphabet Σ. Then M accepts w if a
sequence of states r0 , r1 , . . . , rn in Q exists with three conditions:
1

r0 = q0 ,

2

δ(ri , wi+1 ) = ri+1 , for i = 0, . . . , n − 1, and

3

rn ∈ F .

Condition 1 says that the machine starts in the start state.
Condition 2 says that the machine goes from state to state according to the
transition function.
Condition 3 says that the machine accepts its input if it ends up in an
accept state.
We say that M recognizes language A if A = {w|M accepts w}.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

12 / 100

Finite Automata

Definition of regular language

Regular language
A language is called a regular language if some finite automaton
recognizes it.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

13 / 100

Finite Automata

Designing Finite Automata
Example recognizing odd number of 1s:

Example recognizing 001 as a substring:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

14 / 100

Finite Automata

Regular Operations

Definition
Let A and B be languages. We define the regular operations union,
concatenation, and star as follows:
Union: A ∪ B = {x|x ∈ A or x ∈ B}.
Concatenation: A ◦ B = {xy|x ∈ A and y ∈ B}.
Star: A∗ = {x1 x2 . . . xk |k ≥ 0 and each xi ∈ A}.
Remark: The empty string ε is always a member of A∗ , no matter what A is.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

15 / 100

Finite Automata

Closeness under Operations
A collection of objects is closed under some operation if applying that
operation to members of the collection returns an object still in the
collection.
The collection of regular languages is closed under all three of the
regular operations.
Example 6 (Closeness)
Let the alphabet Σ be the standard 26 letters {a, b, . . . , z}.
If A = {good, bad} and B = {boy, girl}, then
A ∪ B = {good, bad, boy, girl},
A ◦ B = {goodboy, goodgirl, badboy, badgirl}, and
A∗ = {ε, good, bad, goodgood, goodbad, badgood, badbad,
goodgoodgood, goodgoodbad, goodbadgood, goodbadbad, . . . }.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

16 / 100

Finite Automata

Closeness under Union Operation

Theorem
The class of regular languages is closed under the union operation.
In other words, if A1 and A2 are regular languages, so is A1 ∪ A2 .
Proof Idea
Construct M from M1 (that recognizes A1 ) and M2 (that recognizes A2 ).
Simulate both M1 and M2 simultaneously, and accept if either of the
simulations accept.
Remark: We can not “rewind the input tape” to try the simulation on M2 .

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

17 / 100

Finite Automata

Closeness under Union Operation (cont.)
Proof
Let M1 recognize A1 , where M1 = (Q1 , Σ, δ1 , q1 , F1 ),
and M2 recognize A2 , where M2 = (Q2 , Σ, δ2 , q2 , F2 ).
Construct M to recognize A1 ∪ A2 , where M = (Q, Σ, δ, q0 , F ).
1

Q = {(r1 , r2 )|r1 ∈ Q1 and r2 ∈ Q2 }.
This set is the Cartesian product of sets Q1 and Q2 and is written
Q1 × Q2 .

2

Σ is the same as in M1 and M2 .

3

δ((r1 , r2 ), a) = (δ1 (r1 , a), δ2 (r2 , a)).

4

q0 = (q1 , q2 ).

5

F = {(r1 , r2 )|r1 ∈ F1 or r2 ∈ F2 }.

Correctness is straightforward.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

18 / 100

Finite Automata

Closeness under Union Operation (cont.)

Remarks on the proof:
The last expression, F = {(r1 , r2 )|r1 ∈ F1 or r2 ∈ F2 }, is the same as
F = (F1 × Q2 ) ∪ (Q1 × F2 ), which is not the same as F = F1 × F2
obviously.
F = F1 × F2 proves closure for intersection.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

19 / 100

Nondeterminism

Table of Contents

1

Finite Automata

2

Nondeterminism

3

Regular Expressions

4

Non-Regular Languages

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

20 / 100

Nondeterminism

Motivation for Nondeterminism

If we wanted to prove closure under the concatenation operator ◦ for two
regular languages A1 and A2 (i.e., A1 ◦ A2 ), then a main problem is that for a
given w ∈ A1 ◦ A2 we do not know where to break w in w1 , w2 words such
that w1 ∈ A1 , w2 ∈ A2 and w = w1 ◦ w2 .
To solve this problem, we introduce nondeterminism.
Thus we have:
DFA: Deterministic Finite Automaton
NFA: Nondeterministic Finite Automaton
Note: The plural for Automaton is Automata or Automatons.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

21 / 100

Nondeterminism

Difference between DFAs and NFAs
NFAs:
may have zero, one, or many arrows exiting from each state for each
alphabet symbol,
may have zero, one, or many arrows exiting from each state with the
label ε.
Example:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

22 / 100

Nondeterminism

How do NFAs compute?
We reach a state with multiple ways to proceed.
⇒ the machine (automaton) splits into multiple copies of itself and
follows all the possibilities in parallel (each copy takes one of the
possible ways to proceed).
We reach a state where no branch of the computation exiting from it
can compute the current symbol
⇒ the particular copy of the machine dies (along with the branch of
the computation associated with it.
If any of the copies of the machine is in an accept state at the end of
the input, the NFA accepts the input string.
States with an ε symbol on an exiting arrow is encountered
⇒ splits into multiple copies.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

23 / 100

Nondeterminism

Summing up
Nondeterminism may be seen:
– as a parallel computation with multiple (independent) “processes”
running in parallel,
– as a tree of possibilities.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

24 / 100

Nondeterminism

Example

Example 7 (Computation by automaton)
Input: 010110
is given to the following automaton.
What is the computation that takes place?

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

25 / 100

Nondeterminism

Example (cont.)

The computation of the automaton above on input 010110
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

26 / 100

Nondeterminism

Example
Example 8 (Automaton design)
Let A be the language consisting of all strings over {0, 1} containing a 1 in
the third position from the end (e.g., 000100 ∈ A but 0011 ∈
/ A).
Design an automaton that recognizes A and describe it.
The following NFA recognizes A.

Idea
It stays in q1 until it “guesses” that it is three places from the end. If the
input symbol is 1, it branches to q2 and uses q3 and q4 to “check” on
whether its guess was correct.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

27 / 100

Nondeterminism

Example (cont.)
Example 9 (Conversion of NFA to DFA)
Convert the above NFA into an equivalent DFA.

This is the smallest DFA for language A, containing 8 states.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

28 / 100

Nondeterminism

Nondeterministic Finite Automaton
Definition
A nondeterministic finite automaton is a 5-tuple (Q, Σ, δ, q0 , F ), where
1

Q is a finite set of states,

2

Σ is a finite alphabet,

3

δ : Q × Σε → P(Q) is the transition function,

4

q0 ∈ Q is the start state, and

5

F ⊆ Q is the set of accept states.

Note:
Σε = Σ ∪ {ε}
P(Q) = powerset of Q

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

29 / 100

Nondeterminism

Example

Example 10
Recall the NFA below that accepts all strings that contain either 101 or 11 as
a substring. Provide its formal description.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

30 / 100

Nondeterminism

Example (cont.)
The formal description of the above NFA is (Q, Σ, δ, q1 , F ), where
Q = {q1 , q2 , q3 , q4 },
Σ = {0, 1},
δ is given as
q1
q2
q3
q4

0
{q1 }
{q3 }
∅
{q4 }

1
{q1 , q2 }
∅
{q4 }
{q4 }

ε
∅
{q3 }
∅
∅

q1 is the start state,
F = {q4 }.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

31 / 100

Nondeterminism

NFA accepts w

We say that an NFA N accepts w if we can write w as w = y1 y2 · · · ym ,
where each yi is a member of Σε and a sequence of states r0 , r1 , . . . , rm
exists in Q with three conditions:
1

r0 = q0 ,

2

ri+1 ∈ δ(ri , yi+1 ), for i = 0, . . . , m − 1, and

3

rm ∈ F .

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

32 / 100

Nondeterminism

Equivalence of NFAs and DFAs

The equivalence between NFAs and DFAs is:
Surprising because NFAs appear to have more power than DFAs,
Useful because NFAs are usually much easier to describe than DFAs
for a given language.
We say that two machines are equivalent if they recognize the same
language.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

33 / 100

Nondeterminism

Equivalence of NFAs and DFAs

Theorem 11
Every nondeterministic finite automaton has an equivalent deterministic finite
automaton.
Proof idea
Construct a DFA M that simulates the NFA N that recognizes some
language A.
We need to keep track of the set of states that are active during the
computation performed by N.
⇒ If N has k states ⇒ the DFA will have 2k states (one for each subset of
the k states).

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

34 / 100

Nondeterminism

Equivalence of NFAs and DFAs
Proof
Let N = (Q, Σ, δ, q0 , F ) be the NFA recognizing some language A.
Construct DFA M = (Q ′ , Σ, δ ′ , q0′ , F ′ ) recognizing A.
(Assume for now that N has no ε arrows.)
1
2

Q ′ = P(Q).
For R ∈ Q ′ and a ∈ Σ, let
δ ′ (R, a) = {q ∈ Q|q ∈ δ(r, a) for some r ∈ R}.
Another way
S of writing it down:
′
δ (R, a) = r∈R δ(r, a).

3

q0′ = {q0 }.

4

F ′ = {R ∈ Q ′ |R contains an accept state of N}.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

35 / 100

Nondeterminism

Equivalence of NFAs and DFAs

Proof (cont.)
For R ⊆ Q let
Λ(R) = {q ∈ Q |
q can be reached from R by traveling along 0 or more ε arrows}.
Thus, δ ′ (R, a) = {q ∈ Q|q ∈ Λ(δ(r, a)) for some r ∈ R}.
Additionally, q0′ = Λ({q0 }) are all the possible states that can be reached
from the start state of N (i.e., q0 ) after following ε arrows (and not reading
yet the input).
The construction of M is correct and thus we can simulate the NFA N.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

36 / 100

Nondeterminism

Equivalence of NFAs and DFAs

Corollary 12
A language is regular if and only if some nondeterministic finite automaton
recognizes it.

(Discuss both directions of “if and only if” by recalling the definition and
the previous theorem.)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

37 / 100

Nondeterminism

Example

Example 13 (Converting an NFA to a DFA)
Convert the NFA below to a DFA:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

38 / 100

Nondeterminism

Example (cont.)
Solution:

The ∅ state performs the garbage collection.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

39 / 100

Nondeterminism

Example (cont.)

We can simplify the DFA by eliminating states {1} and {1, 2}:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

40 / 100

Nondeterminism

Closure under the Regular Operations: Union

Theorem 14
The class of regular languages is closed under the union operation.
Proof idea.
Create an NFA N from N1 and N2 that recognize the languages A1 and A2
respectively.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

41 / 100

Nondeterminism

Closure under the Regular Operations: Union (cont.)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

42 / 100

Nondeterminism

Closure under the Regular Operations: Union (cont.)
Proof.
Let N1 = (Q1 , Σ, δ1 , q1 , F1 ) recognize A1 ,
and N2 = (Q2 , Σ, δ2 , q2 , F2 ) recognize A2 .
Construct N = (Q, Σ, δ, q0 , F ) to recognize A1 ∪ A2 .
1

Q = {q0 } ∪ Q1 ∪ Q2 .

2

q0 is the start state of N.

3

F = F1 ∪ F2 .

4

Define δ so that for any q ∈ Q and any a ∈ Σε :


δ1 (q, a), q ∈ Q1



 δ (q, a), q ∈ Q
2
2
δ(q, a) =
 {q1 , q2 }, q = q0 and a = ε



 ∅,
q = q0 and a ̸= ε.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

43 / 100

Nondeterminism

Closure under the Regular Operations: Concatenation

Theorem 15
The class of regular languages is closed under concatenation.
Proof idea.
Nondeterministically guess where to make the split.
(In the figure below, the originally terminal states in N1 get connected to the
start state of N2 .)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

44 / 100

Nondeterminism

Closure under the Regular Operations: Concatenation

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

45 / 100

Nondeterminism

Closure under the Regular Operations: Concatenation
Proof.
Let N1 = (Q1 , Σ, δ1 , q1 , F1 ) recognize A1 ,
and N2 = (Q2 , Σ, δ2 , q2 , F2 ) recognize A2 .
Construct N = (Q, Σ, δ, q1 , F2 ) to recognize A1 ◦ A2 .
1

Q = Q1 ∪ Q2 .

2

q1 is the start state of N as well.

3

Accept states for N are those of N2 so F2 .

4

Define δ so that for any q ∈ Q and any a ∈ Σε :


δ1 (q, a),
q ∈ Q1 and q ∈
/ F1



 δ (q, a),
q ∈ F1 and a ̸= ε
1
δ(q, a) =
 δ1 (q, a) ∪ {q2 }, q ∈ F1 and a = ε



 δ (q, a),
q ∈ Q2 .
2
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

46 / 100

Nondeterminism

Closure under the Regular Operations: Star

Theorem 16
The class of regular languages is closed under the star operation.
Proof idea.
Construct an NFA N that accepts its input whenever it can be broken into
several pieces and N1 accepts each such piece.
Note: It is a bad idea to make accepting the original starting state of N1 .

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

47 / 100

Nondeterminism

Closure under the Regular Operations: Star

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

48 / 100

Nondeterminism

Closure under the Regular Operations: Star
Proof.
Let N1 = (Q1 , Σ, δ1 , q1 , F1 ) recognize A1 .
Construct N = (Q, Σ, δ, q0 , F ) to recognize A∗1 .
1

Q = q0 ∪ Q1 .

2

q0 is the new start state.

3

F = {q0 } ∪ F1 .

4

Define δ so that for any q ∈ Q and any a ∈ Σε :


δ1 (q, a),
q ∈ Q1 and q ∈
/ F1





q ∈ F1 and a ̸= ε
 δ1 (q, a),
δ(q, a) =
δ1 (q, a) ∪ {q1 }, q ∈ F1 and a = ε



{q1 },
q = q0 and a = ε




∅,
q = q0 and a ̸= ε.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

49 / 100

Regular Expressions

Table of Contents

1

Finite Automata

2

Nondeterminism

3

Regular Expressions

4

Non-Regular Languages

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

50 / 100

Regular Expressions

Introduction to Regular Expressions
In arithmetic, we can use the operations + and × to build up expressions
such as (5 + 3) × 4.
Similarly, we can use the regular operations to build up expressions
describing languages, which are called regular expressions.
An example is: (0 + 1)0∗ .
The value of this expression is the language.
(0 + 1) means ({0} ∪ {1}) which is {0, 1}
0∗ means {0}∗
(0 + 1)0∗ is shorthand for (0 + 1) ◦ 0∗ (i.e., usually drop/imply the
concatenation symbol)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

51 / 100

Regular Expressions

Examples of Regular Expressions

Example 17 (Simple Regular Expressions)
(0 + 1)∗ : all possible binary strings (i.e., strings of 0s and 1s).
Let Σ = {0, 1}. Then Σ is a shorthand for the regular expression
(0 + 1), i.e., Σ is all the possible strings of one character (length 1).
Σ∗ 1: all strings that end with a 1.
(0Σ∗ ) + (Σ∗ 1): strings that start with a 0 or end with a 1.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

52 / 100

Regular Expressions

Regular Expressions

Definition 18 (Regular expression)
We say that R is a regular expression if R is
1

a for some a ∈ Σ,

2

ε,

3

∅,

4

(R1 + R2 ), where R1 and R2 are regular expressions,

5

(R1 ◦ R2 ), where R1 and R2 are regular expressions, or

6

(R1∗ ), where R1 is a regular expression.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

53 / 100

Regular Expressions

Regular Expressions

Some remarks on the definition:
L(R) is the language of a regular expression R.
In (1) and (2), a and ε represent the languages {a} and {ε} respectively.
(2) is different from (3):
(2) is a language with one string: {ε}
(3) is the empty language: {}

When there are no parentheses, evaluate in the precedence order: star,
concatenation, union.
R+ = RR∗ . In other words, R+ + ε = R∗ .

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

54 / 100

Regular Expressions

Identities for Regular Expressions

R + ∅ = R.
R ◦ ε = R (attaching the empty string to any string, will not change the
string).
In principle
R + ε ̸= R.
For example, if R = 0, then L(R) = {0} but L(R + ε) = {ε, 0}.
R ◦ ∅ ̸= R.
For example, if R = 0, then L(R) = {0} but L(R ◦ ∅) = L(∅) = ∅.
(Concatenating the empty set to any set yields the empty set.)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

55 / 100

Regular Expressions

Equivalence with Finite Automata

Theorem 19
A language is regular if and only if some regular expression describes it.
Lemma 20 (‘⇐’ direction of Thm 19)
If a language is described by a regular expression, then it is regular.
Proof idea.
Show how to convert R into an NFA recognizing A.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

56 / 100

Regular Expressions

Equivalence with Finite Automata (cont.)
Proof.
Let R be a regular expression. Let’s convert R into an NFA N. We consider
the six cases in the formal definition of regular expressions.
1

R = a for some a ∈ Σ. Then L(R) = {a}, and the following NFA
recognizes L(R).

Formally, N = ({q1 , q2 }, Σ, δ, q1 , {q2 }), where δ(q1 , a) = {q2 } and
δ(r, b) = ∅ for r ̸= q1 or b ̸= a.
2

R = ε. Then L(R) = {ε}, and the following NFA recognizes L(R).

(δ(r, b) = ∅ for any r and b)
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

57 / 100

Regular Expressions

Equivalence with Finite Automata (cont.)
Proof (cont.)
3

R = ∅. Then L(R) = {∅}, and the following NFA recognizes L(R).

(δ(r, b) = ∅ for any r and b)
4

R = R1 + R2 .

5

R = R1 ◦ R2 .

6

R = R1∗ .

For the last three cases, we use the fact that regular languages are closed
under the regular operations (and we use the constructions given in the
corresponding proofs).
In other words, we construct the NFA for R from the NFAs for R1 and R2 .
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

58 / 100

Regular Expressions

Example
Example 21
Convert the regular expression (ab + a)∗ to an NFA in a sequence of stages.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

59 / 100

Regular Expressions

Example
Example 22
Convert the regular expression (a + b)∗ aba to an NFA.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

60 / 100

Regular Expressions

Generalized Nondeterministic Finite Automata
Definition
A Generalized Nondeterministic Finite Automaton (GNFA) is an NFA
wherein the transition arrows may have any regular expression as labels
(instead of only members of the alphabet or ε).
The GNFA reads blocks of symbols from the input, not necessarily just
one symbol at a time (as in an ordinary NFA).
The GNFA moves along a transition arrow connecting two states by
reading a block of symbols from the input; that string is a string that
corresponds to the regular expression on that arrow.
A GNFA, being nondeterministic, may have several different ways to
process the same input string.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

61 / 100

Regular Expressions

Example
Example 23 (A generalized nondeterministic finite automaton)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

62 / 100

Regular Expressions

Conditions for GNFAs

For convenience, we require that GNFAs always have a special form that
meets the following conditions:
(i) The start state has transition arrows going to every other state, but no
arrows coming in from any other state.
(ii) There is only a single accept state, and it has:
arrows coming in from every other state
no arrows going to any other state
qaccept ̸= qstart

(iii) Except for qstart and qaccept , for every state:
one arrow goes from it to every other state,
one arrow goes from it to itself.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

63 / 100

Regular Expressions

Conversion of a DFA into a GNFA

Add a new start state with an ε arrow to the old start state.
Add a new accept state with ε arrows coming in from every old accept
state.
Arrows with multiple labels are replaced each with a single arrow
whose label is the union of the previous labels.
Add arrows labeled ∅ between states that had no arrows.
Note: ∅ does not recognize any string; not even ε. ⇒ Such arrows can
never be used.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

64 / 100

Regular Expressions

Constructing an equivalent GNFA with one fewer state
starting with k > 2 states
Select a state, other than start or accept, rip it out of the machine, repair the
remainder so that the same language is still recognized. Call the removed
state qrip . (This state exists because k > 2.)
New labels on arrows should compensate for the absence of qrip by adding
back the lost computations.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

65 / 100

Regular Expressions

Constructing an equivalent GNFA with one fewer state
starting with k > 2 states (cont.)

So, ultimately, we can construct a GNFA with just two states: starting and
accept.
The label on the arrow connecting these two states is the regular expression
that the original GNFA was accepting.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

66 / 100

Regular Expressions

Generalized nondeterministic finite automaton (GNFA)

Definition
A generalized nondeterministic finite automaton (GNFA) is a 5-tuple,
(Q, Σ, δ, qstart , qaccept ), where:
1

Q is the finite set of states,

2

Σ is the input alphabet,

3

δ : (Q \ {qaccept }) × (Q \ {qstart }) → R is the transition function,
(R is the collection of all regular expressions over the alphabet Σ)

4

qstart is the start state, and

5

qaccept is the accept state.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

67 / 100

Regular Expressions

Computation of a GNFA

Definition
A GNFA accepts a string w in Σ∗ if w = w1 w2 · · · wk , where each wi is in Σ∗
and a sequence of states q0 , q1 , . . . , qk exists such that
1

q0 = qstart is the start state,

2

qk = qaccept is the accept state, and

3

for each i, we have wi ∈ L(Ri ), where Ri = δ(qi−1 , qi )
(in other words, Ri is the expression on the arrow from qi−1 to qi ).

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

68 / 100

Regular Expressions

Regular Languages

Now let’s turn to the other direction of the proof of Theorem 19.
Lemma 24
If a language is regular, then it is described by a regular expression.
Proof idea
Let A be a regular language. Because A is regular, a DFA accepts it.
We convert DFAs into equivalent regular expressions.
First we convert DFAs into GNFAs, and then GNFAs into regular expressions.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

69 / 100

Regular Expressions

Regular Languages

Proof.
Let M be the DFA for language A.
Create a GNFA G starting from M (as discussed earlier).
Use the procedure CONVERT(G), which
takes as input a GNFA G, and
outputs the equivalent regular expression.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

70 / 100

Regular Expressions

Regular Languages
Proof (cont.)
CONVERT(G):
1

Let k be the number of states of G.

2

If k = 2, then G has a start state and an accept state, and a single
arrow connecting them, labeled with a regular expression R.
Return the expression R.

3

If k > 2, select any state qrip ∈ Q \ {qstart , qaccept }.
Let G′ be the GNFA (Q ′ , Σ, δ ′ , qstart , qaccept ), where Q ′ = Q \ {qrip }, and
for any qi ∈ Q ′ \ {qaccept } and any qj ∈ Q ′ \ {qstart }, let
δ ′ (qi , qj ) = (R1 )(R2 )∗ (R3 ) + (R4 ), for
R1 = δ(qi , qrip ), R2 = δ(qrip , qrip ), R3 = δ(qrip , qj ), and R4 = δ(qi , qj ).

4

Return CONVERT(G′ ).

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

71 / 100

Regular Expressions

Regular Languages

Claim 72
For any GNFA G, CONVERT(G) is equivalent to G.
Proof
By induction on k, the number of states of the GNFA.
Basis (k = 2): G can only have a single arrow connecting the start state
with the accept state.
The regular expression label R on this arrow describes all strings that allow
G to get to the accept state.
Hence this expression is equivalent to G.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

72 / 100

Regular Expressions

Regular Languages
Proof (cont.)
Induction step: Assume that the claim is true for k − 1 states and use this
assumption to prove that the claim is true for k states.
First show that G (k states) and G′ (k − 1 states) recognize the same
language.
Suppose that G accepts an input w.
In an accepting computation, G enters the sequence of states:
σ = (qstart , q1 , q2 , q3 , . . . , qaccept ).
If qrip does not appear in σ, then G′ also accepts w.
The reason is that each of the new regular expressions labeling the
arrows of G′ contains the old regular expression as part of a union.
If qrip does appear in σ, removing each run of consecutive qrip states
forms an accepting computation for G′ . The states qi and qj bracketing
a run have a new regular expression on the arrow between them that
describes all strings taking qi to qj via qrip on G. So G′ accepts w.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

73 / 100

Regular Expressions

Regular Languages
Proof (cont.)
Conversely, suppose that G′ accepts an input w.
An arrow between any two states qi and qj in G′ describes the strings taking
qi to qj in G,
either directly
or via qrip .
So G must also accept the input w. ⇒ Thus G and G′ are equivalent.
The induction hypothesis states that when the algorithm calls itself
recursively on input G′ , the result is a regular expression that is equivalent
to G′ (since G′ has k − 1 states).
Hence this regular expression also is equivalent to G, and the algorithm is
proved correct.
This concludes the proof of Claim 72, Lemma 24, and Theorem 19.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

74 / 100

Regular Expressions

Example
Example 25
Convert the DFA below into a regular expression, using the preceding
algorithm.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

75 / 100

Regular Expressions

Example (cont.)
Add a new start state (s) and a new accept state (a):

We avoid drawing arrows with labels ∅, even though the arrows are there.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

76 / 100

Regular Expressions

Example (cont.)
Remove state 2:
Note that the label b(a + b)∗
from 1 to a is consistent with
CONVERT(G):
R1 = b
R2 = a + b
R3 = ε
R4 = ∅
so we get (b)(a + b)∗ (ε) =
b(a + b)∗

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

77 / 100

Regular Expressions

Example (cont.)
Remove state 1:

Follow the same procedure.
⇒ The label on this last arrow
joining them is the regular expression that is equivalent to
the original DFA.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

78 / 100

Regular Expressions

Example
Example 26
Convert the DFA below into a regular expression, using the preceding
algorithm.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

79 / 100

Regular Expressions

Example

Introduce states s and a:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

80 / 100

Regular Expressions

Example (cont.)
Remove state 1:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

81 / 100

Regular Expressions

Example (cont.)
Remove state 2:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

82 / 100

Regular Expressions

Example (cont.)

Remove state 3:

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

83 / 100

Non-Regular Languages

Table of Contents

1

Finite Automata

2

Nondeterminism

3

Regular Expressions

4

Non-Regular Languages

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

84 / 100

Non-Regular Languages

Non-Regular Languages

Certain languages cannot be recognized by any finite automaton.
Consider the language B = {0n 1n |n ≥ 0}.
Issue: The machine seems to need to remember how many 0s have been
seen so far as it reads the input.
⇒ Because the number of 0s isn’t limited
⇒ the machine will need to keep track of an unlimited number of
possibilities.
⇒ Not possible with a finite number of states.
(Not a valid argument in general; see below.)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

85 / 100

Non-Regular Languages

Non-Regular Languages

Consider
C = {w|w has an equal number of 0s and 1s},
and
D = {w|w has an equal number of occurrences of 01 and 10 as substrings}.
At first glance, a recognizing machine appears to need to count in each case,
and therefore neither language appears to be regular.
As expected, C is not regular, but surprisingly D is regular!
We need a formal technique to be able to prove non-regularity.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

86 / 100

Non-Regular Languages

Pumping Lemma for Regular Languages

All regular languages have a special property.
⇒ If a language does not have this property, then it is guaranteed that it is
not regular.
Property:
All strings in the language can be “pumped” if they are at least as long as a
certain special value, called the pumping length.
(That means each such string contains a section that can be repeated any
number of times with the resulting string remaining in the language.)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

87 / 100

Non-Regular Languages

Pumping Lemma
Theorem 27 (Pumping Lemma)
If A is a regular language, then there is a number p (the pumping length)
where, if s is any string in A of length at least p, then s may be divided into
three pieces,
s = xyz,
satisfying the following conditions:
1

for each i ≥ 0, xy i z ∈ A,

2

|y| > 0, and

3

|xy| ≤ p.

Recall:
|s|: the length of string s,
y i : i copies of y are concatenated together (hence y 0 = ε).
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

88 / 100

Non-Regular Languages

Pumping Lemma

Remarks on the Pumping Lemma:
Either x or z may be ε, but y ̸= ε (due to (2)).
Theorem trivially true without condition (2).
Condition (3) is an extra technical condition that might be useful when
proving certain languages to be nonregular.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

89 / 100

Non-Regular Languages

Pumping Lemma

Proof idea of the Pumping Lemma.
Let the pumping length p be the number of states of M.
Let n be the length of input s, such that n ≥ p.
This means that s has n symbols ⇒ dictates n transitions
⇒ If we write down the states visited by s, we will have a repetition. Here is
why (pigeonhole principle):

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

90 / 100

Non-Regular Languages

Pumping Lemma

It is s = xyz, so:
M also accepts xy i z, for any i > 0, as well as xy 0 z = xz,
|y| > 0, satisfying condition (2),
The first p + 1 states in the sequence must contain a repetition (by
pigeonhole principle). Therefore, |xy| ≤ p.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

91 / 100

Non-Regular Languages

Pumping Lemma
Proof.
Let M = (Q, Σ, δ, q1 , F ) be a DFA recognizing A
and p be the number of states of M.
Let s = s1 s2 · · · sn be a string in A of length n, where n ≥ p.
Let r1 , . . . , rn+1 be the sequence of states that M enters while processing s,
so
ri+1 = δ(ri , si ), for 1 ≤ i ≤ n.
This sequence has length n + 1 ≥ p + 1 ⇒ Among the first p + 1 states in
the sequence, at least two must be the same (by pigeonhole principle). Call
rj the first of these (j ̸= l) and rl the second (l ≤ p + 1).
Now let x = s1 · · · sj−1 , y = sj · · · sl−1 , and z = sl · · · sn .
Since x takes M from r1 to rj , y takes M from rj to rj , and z takes M from rj
to rn+1 , which is an accept state, M must accept xy i z for i ≥ 0.
We know that j ̸= l, so |y| > 0; and l ≤ p + 1, so |xy| ≤ p.
Thus we have satisfied all conditions of the pumping lemma.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

92 / 100

Non-Regular Languages

Use of Pumping Lemma (to show non-regularity)

Steps:
1

Assume a language A is regular, in order to obtain a contradiction, with
pumping length p such that all strings of length p or greater in A can
be pumped.

2

Find a string s ∈ A such that |s| ≥ p but s cannot be pumped, no
matter how we split s into xyz.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

93 / 100

Non-Regular Languages

Example
Example 28
Let B = {0n 1n |n ≥ 0}.
Use the pumping lemma to prove that B is not regular.
Proof.
Assume to the contrary that B is regular. Let p be the pumping length given
by the pumping lemma. Consider s = 0p 1p . (It is s = xyz, with |y| > 0.)
We consider 3 cases to show that this result is impossible.
If string y consists only of 0s, then xyyz has more 0s than 1s and thus
xyyz ∈
/ B, violating condition (1) of pumping lemma ⇒ contradiction.
If string y consists only of 1s ⇒ contradiction as above.
If string y consists of both 0s and 1s, then xyyz may have the same
number of 0s and 1s, but some 1s will appear before the 0s, so xyyz ∈
/B
again ⇒ contradiction.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

94 / 100

Non-Regular Languages

Example (cont.)

Note:
We could have avoided cases 2 and 3 by applying condition (3) of the
pumping lemma that requires that |xy| ≤ p, thus simplifying the above
argument.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

95 / 100

Non-Regular Languages

Example
Example 29
Let C = {w|w has an equal number of 0s and 1s}.
Use the pumping lemma to prove that C is not regular.
Proof.
The proof is by contradiction.
Consider s = 0p 1p . By condition (3) of the pumping lemma |xy| ≤ p ⇒
So y contains only 0s ⇒ So xyyz ∈
/ C ⇒ So s cannot be pumped.
The string selection is important. For example, s′ = (01)p can be pumped,
even taking condition (3) into account. Can you see how to pump it?
One way to do so is by setting: x = ε, y = 01, and z = (01)p−1 .
Then xy i z ∈ C for every i.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

96 / 100

Non-Regular Languages

Example (cont.)

Alternative proof.
Assume C is regular.
The language 0∗ 1∗ is also regular.
Then C ∩ 0∗ 1∗ also has to be regular (due to closure under intersection).
But C ∩ (0∗ 1∗ ) = B, and we know that B is nonregular from Example 28.

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

97 / 100

Non-Regular Languages

Example
Example 30
Let F = {ww|w ∈ {0, 1}∗ }.
Show that F is nonregular, using the pumping lemma.
Proof.
Assume to the contrary that F is regular.
Consider s = 0p 10p 1.
Because s ∈ F and |s| > p, the pumping lemma guarantees that s can be
split into three pieces, s = xyz, satisfying the three conditions of the lemma,
hence |xy| ≤ p. We show that this outcome is impossible.
With condition (3) the proof follows because y must consist only of 0s, and
then xyyz ∈ F .
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

98 / 100

Non-Regular Languages

Example
Example 31
2

Let D = {1n |n ≥ 0}. Use the pumping lemma to prove that D is not regular.
Proof.
The proof is by contradiction. Assume to the contrary that D is regular.
2
Let s be the string 1p .
Now consider the two strings xyz and xy 2 z.
The lengths of these strings differ by at most p (i.e., the length of y).
By condition (3) of the pumping lemma, |xy| ≤ p and thus |y| ≤ p.
We have |xyz| = p2 and so |xyyz| ≤ p2 + p < p2 + 2p + 1 = (p + 1)2 .
Moreover, condition (2) implies that |y| > 0 and so |xy 2 z| > p2 .
Therefore, the length of p2 < |xyyz| < (p + 1)2 .
So we arrive at the contradiction xyyz ∈
/ D and conclude that D is not
regular.
D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

99 / 100

Non-Regular Languages

Example

Example 32
Let E = {0i 1j |i > j}. Use the pumping lemma to prove that E is not regular.
Proof.
The proof is by contradiction. Assume that E is regular.
Let s = 0p+1 1p . We reach a contradiction by pumping down.
The pumping lemma states that xy i z ∈ E even when i = 0, so the string
xy 0 z = xz should also be in E.
But |xy| ≤ p so y only has 0s. Thus removing string y decreases the number
of 0s in s, and xz cannot have more 0s than 1s. (Recall that s has just one
more 0 than 1.)

D. Diochnos (OU - CS)

Theory of Computation: Regular Languages

100 / 100

</details>
