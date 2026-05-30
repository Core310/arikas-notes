---
title: "ToC_chapter_3_slides"
---

# ToC_chapter_3_slides

![[ToC/slides/ToC_chapter_3_slides.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/ToC/slides/ToC_chapter_3_slides.pdf) | [Download Local](/ToC/slides/ToC_chapter_3_slides.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Theory of Computation
The Church-Turing Thesis
Dimitris Diochnos
School of Computer Science
University of Oklahoma

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

1 / 35

Outline

1

Turing Machines

2

Variants of Turing Machines

3

The Definition of Algorithm

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

2 / 35

Introduction

Introduction

Some very easy tasks cannot be done by DFAs or PDAs.
We need a different model for general purpose computers.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

3 / 35

Turing Machines

Table of Contents

1

Turing Machines

2

Variants of Turing Machines

3

The Definition of Algorithm

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

4 / 35

Turing Machines

Turing Machine

Similar to a finite automaton, but it uses an unlimited and unrestricted
tape as its memory.
It has accept and reject states
If it doesn’t enter an accepting or a rejecting state, it will go on forever,
never halting.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

5 / 35

Turing Machines

Differences with Finite Automata

Differences between finite automata and Turing machines:
1

A Turing machine can also write on the tape (apart from reading).

2

The read/write head can move both to the left and to the right.

3

The tape is infinite.

4

The special states “accept” and “reject” take effect immediately.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

6 / 35

Turing Machines

Example
A TM for testing membership
Design a TM for testing membership in the language
B = {w#w|w ∈ {0, 1}∗}.
e.g.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

7 / 35

Turing Machines

Formal Definition of Turing Machine

A Turing machine is a 7-tuple, (Q, Σ, Γ, δ, q0 , qaccept , qreject ), where Q, Σ, Γ
are all finite sets and
1

Q is the set of states,

2

Σ is the input alphabet not containing the blank symbol

3

Γ is the tape alphabet, where

4

δ : Q × Γ → Q × Γ × {L, R} is the transition function,

5

q0 ∈ Q is the start state,

6

qaccept ∈ Q is the accept state, and

7

qreject ∈ Q is the reject state (qreject ̸= qaccept ).

D. Diochnos (OU - CS)

∈ Γ and Σ ⊆ Γ,

Theory of Computation: Church-Turing Thesis

8 / 35

Turing Machines

Computation

Input w = w1 w2 · · · wn written on the leftmost n squares of the tape
(the rest of the tape is blank, i.e., filled with ’s).
Head starts on the leftmost square of the tape
(applying L on the head at the square leaves the head intact).
Computation proceeds according to what δ dictates.
Computation ends if either an accept or a reject state is reached.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

9 / 35

Turing Machines

Configuration of a Turing Machine
Configuration of a Turing Machine:
current state
current tape contents
current head location.
uqv: head is at leftmost symbol in v (u, v ∈ Γ∗ ).
E.g., 1011q7 01111 represents the configuration when the tape is 101101111,
the current state is q7 , and the head is currently on the second 0.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

10 / 35

Turing Machines

Configuration of a Turing Machine

Say that a configuration C1 yields configuration C2 if the Turing machine
M can legally go from C1 to C2 in a single step.
E.g., uaqi bv yields uqj acv if
δ(qi , b) = (qj , c, L).
Note: Similarly rightward moves. . .

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

11 / 35

Turing Machines

Configuration of a Turing Machine

Start configuration of M on input w: q0 w,
Accepting and rejecting configurations are halting configurations
and do not yield further configurations.
A Turing machine M accepts input w if a sequence of configurations
C1 , C2 , . . . , Ck exists, where
C1 is the start configuration of M on input w,
each Ci yields Ci+1 , and
Ck is an accepting configuration.

The collection of strings that a TM M accepts is the language of M, or
the language recognized by M, denoted L(M).

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

12 / 35

Turing Machines

Turing-recognizable and Turing-decidable languages

Definition 1
A language is called Turing-recognizable (or recursively enumerable)
if some Turing machine recognizes it.

Definition 2
A language is called Turing-decidable (or recursive) or simply
decidable if some Turing machine decides it.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

13 / 35

Turing Machines

Example

Example 3
n

Let A = {02 |n ≥ 0}, the language consisting of all strings of 0s whose
length is a power of 2.
Give a Turing machine M2 that decides this language.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

14 / 35

Turing Machines

Example (cont.)

Solution.
M2 = “On input string w:
1

Sweep left to right across the tape, crossing off every other 0.

2

If in stage 1 the tape contained a single 0, accept.

3

If in stage 1 the tape contained more than a single 0 and the number of
0s was odd, reject.

4

Return the head to the left-hand end of the tape.

5

Go to stage 1.”

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

15 / 35

Turing Machines

Example (cont.)

Now we give the formal description of M2 = (Q, Σ, Γ, δ, q1 , qaccept , qreject ):
Q = {q1 , q2 , q3 , q4 , q5 , qaccept , qreject },
Σ = {0}, and
Γ = {0, x,

}.

δ is given with a state diagram (see next slide).
The start, accept, and reject states are q1 , qaccept , and qreject ,
respectively.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

16 / 35

Turing Machines

Example (cont.)

• a → b, R: means that we read ‘a’, overwrite it with ‘b’ and move
(e.g., 0 → , R)
• a → L: means that we read ‘a’, overwrite it with ‘a’ and move
(i.e., the symbol did not change, so omit it; e.g., 0 → R)
D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

17 / 35

Turing Machines

Example

Example 4
Give a TM M3 that decides the language
C = ai bj c k |i × j = k and i, j, k ≥ 1.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

18 / 35

Turing Machines

Example (Solution)
Solution.
M3 = “On input string w:
1

Scan the input from left to right to determine whether it is of the form
a+ b+ c + and reject if it is not.

2

Return the head to the left-hand end of the tape. (Can be tricky! Can
you do it? How?)

3

Cross off an a and scan to the right until a b occurs.
Shuttle between the b’s and the c’s, crossing off one of each until all b’s
are gone. If all c’s have been crossed off and some b’s remain, reject.

4

Restore the crossed off b’s and repeat stage 3 if there is another a to
cross off.
If all a’s have been crossed off, determine whether all c’s also have
been crossed off.
• If yes, accept;
• otherwise, reject.”
D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

19 / 35

Variants of Turing Machines

Table of Contents

1

Turing Machines

2

Variants of Turing Machines

3

The Definition of Algorithm

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

20 / 35

Variants of Turing Machines

Introduction

Multiple tapes, or with nondeterminism, etc.
Robustness: invariance to the languages recognized by such
modifications
e.g., how to handle Turing machines that allow the head to stay put?
(simulate. . . )

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

21 / 35

Variants of Turing Machines

Multitape Turing machines

Input on tape 1
Other tapes initially blank
δ : Q × Γk → Q × Γk × {L, R, S}k , where k is the number of tapes.
Note: S corresponds to ‘stay’.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

22 / 35

Variants of Turing Machines

Multitape Turing machines
Theorem 5
Every multitape Turing machine has an equivalent single-tape Turing machine.
Proof.

The dots above symbols indicate where the heads are during the simulation.
[Initialize: #ẇ1 w2 . . . wn # ˙ # ˙ # . . . #]
D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

23 / 35

Variants of Turing Machines

Multitape Turing machines

Corollary 6
A language is Turing-recognizable if and only if some multitape Turing
machine recognizes it.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

24 / 35

Variants of Turing Machines

Nondeterministic Turing Machines

δ : Q × Γ → P(Q × Γ × {L, R}).
The TM accepts its input, if some branch of the computation leads to
an accept state.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

25 / 35

Variants of Turing Machines

Nondeterministic Turing Machines

Theorem 7
Every nondeterministic Turing machine has an equivalent deterministic Turing
machine.
Proof idea.
Perform a breadth-first search (BFS) on the configuration tree that is
produced when looking at all possible branches of computation.
(DFS is bad. . . )

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

26 / 35

Variants of Turing Machines

Nondeterministic Turing Machines
Proof.

Deterministic TM D simulating nondeterministic TM N
The sequence of numbers in the last tape indicates which choices we make
in every branch, so that we reach a particular configuration in the
computation.
The address may be invalid if, say, in some branches we have fewer than b
(=3 in the example) options.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

27 / 35

Variants of Turing Machines

Corollary 8
A language is Turing-recognizable if and only if some nondeterministic Turing
machine recognizes it.

Corollary 9
A language is decidable if and only if some nondeterministic Turing machine
decides it.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

28 / 35

Variants of Turing Machines

Enumerators

Enumerator = TM + Printer
The language enumerated by an enumerator E is the collection (set) of
all the strings that it eventually prints out.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

29 / 35

Variants of Turing Machines

Theorem 10
A language is Turing-recognizable if and only if some enumerator enumerates
it.
Proof.
(⇒)
Let s1 , s2 , s3 , . . . be a list of all strings in Σ∗ .
Then construct the enumerator as follows:
1

Ignore the input

2

For i = 1, 2, 3, . . . do:
Run M for i steps on each input s1 , s2 , . . . , si .
If any computations accept, print out the corresponding si ’s.

(⇐)
“On input w for a TM M, do:
1

Run E. Compare each output string of E with w.

2

If w ever appears in the output of E, accept.”
D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

30 / 35

Variants of Turing Machines

Equivalence of Turing Machines with other methods

Unlimited memory (contrasting finite automata and PDAs)
Limited computation in a single step
Similar to the case of programming languages; the same algorithm can
be written in all the languages
⇒ exactly the same class of algorithms can be implemented by the
various programming languages.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

31 / 35

The Definition of Algorithm

Table of Contents

1

Turing Machines

2

Variants of Turing Machines

3

The Definition of Algorithm

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

32 / 35

The Definition of Algorithm

The Definition of Algorithm
Algorithms are like recipes, as we know from other classes.
Hilbert’s Problems
23 mathematical problems that appeared to be important for the previous
century.
(Announced in 1900 at the International Congress of Mathematicians in
Paris)
Tenth Problem
“Is there a process (algorithm) according to which it can be determined
whether a polynomial has an integral root, by a finite number of
operations?”

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

33 / 35

The Definition of Algorithm

The Definition of Algorithm

We need a definition for the notion of an algorithm.
1936 papers: Alonzo Church (λ-calculus) and Alan Turing (Turing
machines)
1970: Yuri Matijasevic showed that no algorithm exists (building on the
work of Martin Davis, Hilary Putnam and Julia Robinson)
The Church–Turing thesis
Intuitive notion of algorithms equals Turing machine algorithms

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

34 / 35

The Definition of Algorithm

The Definition of Algorithm

Let D = {p|p is a polynomial with an integral root}.
Hilbert asks whether D is decidable.
The answer is NO.
BUT it is Turing-recognizable.
Note: p here is multi-variate. For uni-variate p the answer is “yes”.

D. Diochnos (OU - CS)

Theory of Computation: Church-Turing Thesis

35 / 35

</details>
