---
title: "ToC_chapter_5_slides"
---

# ToC_chapter_5_slides

![[ToC/slides/ToC_chapter_5_slides.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/ToC/slides/ToC_chapter_5_slides.pdf) | [Download Local](/ToC/slides/ToC_chapter_5_slides.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Theory of Computation
Reducibility
Dimitris Diochnos
School of Computer Science
University of Oklahoma

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

1 / 35

Outline

1

Introduction

2

Undecidable Problems

3

The Post Correspondence Problem

4

Mapping Reducibility

5

Turing Reducibility

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

2 / 35

Introduction

Table of Contents

1

Introduction

2

Undecidable Problems

3

The Post Correspondence Problem

4

Mapping Reducibility

5

Turing Reducibility

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

3 / 35

Introduction

Introduction

Oftentimes we reduce the solution of one problem to the solution of another
problem.
For example,
measure the area of a rectangle

reduces to

−→

measure the length and height of a rectangle

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

4 / 35

Introduction

Introduction
“Problem A is reducible to Problem B” implies:

A

B
hardness of finding a solution

A solution to B provides a solution to A in this case. So A can not be
harder than B.
Conversely: If problem A is “hard” and A is reducible to B, then B is
also “hard” (or “harder”. . . )

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

5 / 35

Undecidable Problems

Table of Contents

1

Introduction

2

Undecidable Problems

3

The Post Correspondence Problem

4

Mapping Reducibility

5

Turing Reducibility

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

6 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Theorem 1
HALTTM = {⟨M, w⟩ | M is a TM and M halts on input string w}
is undecidable.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

7 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Theorem 1
HALTTM = {⟨M, w⟩ | M is a TM and M halts on input string w}
is undecidable.
Proof.
Towards contradiction, assume HALTTM is decidable.
Then, there is a TM R that decides HALTTM .
We now reduce ATM to HALTTM :
Let S be a TM such that: “on input ⟨M, w⟩, where M is a TM and w is a
string, does the following:
1

Run R on input ⟨M, w⟩
If “no” (i.e., ⟨M, w⟩ rejected) ⇒ M loops forever on w ⇒ reject.

2

If “yes” from (1), then run M on w and return whatever M returns.”
(Impossible to have such an S because now we decide ATM )
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

7 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Theorem 2
ETM = {⟨M⟩ | M is a TM and M and L(M) = ∅}
is undecidable.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

8 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Theorem 2
ETM = {⟨M⟩ | M is a TM and M and L(M) = ∅}
is undecidable.
Proof (to be cont.)
Towards contradiction, assume ETM is decidable by some TM R.
We want to reduce ATM to ETM .
(Technically we will reduce ATM to ETM since M accepts if L(M) ̸= ∅.)
For the critical input ⟨M, w⟩ of ATM , construct another TM M1 :
M1 = “on input x:
1

If x ̸= w, reject.

2

If x = w, run M on input w and accept if M accepts.”
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

(cont’d →)
8 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Proof (cont.)
So, L(M1 ) is either ∅ or {w}.
Check with R which case is true.
Construct another TM S such that:
S = “on input ⟨M, w⟩, an encoding of a TM M and a string w:
1

Use the description of M and w to construct the TM M1 .

2

Run R on input ⟨M1 ⟩.

3

If R accepts, reject,
if R rejects, accept.”

In other words, S is now a decider for ATM .
This is impossible, so we reach a contradiction.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

9 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Theorem 3
EQTM = {⟨M1 , M2 ⟩ | M1 and M2 are TMs and L(M1 ) = L(M2 )}
is undecidable.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

10 / 35

Undecidable Problems

Undecidable Problems from Language Theory
Theorem 3
EQTM = {⟨M1 , M2 ⟩ | M1 and M2 are TMs and L(M1 ) = L(M2 )}
is undecidable.
Proof.
Towards contradiction, assume EQTM is decidable by some TM R.
Reduce ETM to EQTM . The idea is
to create a TM M1 that rejects all inputs, and
use R to decide ⟨M, M1 ⟩ for some arbitrary M, thus solving ETM (which
is impossible).
S = “on input ⟨M⟩, where M is a TM:
1

Run R on input ⟨M, M1 ⟩, where M1 is a TM that rejects all inputs.

2

If R accepts, accept. If R rejects, reject.”

⇒ So S decides ETM ⇒ contradiction.
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

10 / 35

The Post Correspondence Problem

Table of Contents

1

Introduction

2

Undecidable Problems

3

The Post Correspondence Problem

4

Mapping Reducibility

5

Turing Reducibility

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

11 / 35

The Post Correspondence Problem

The Post Correspondence Problem
We have dominoes that look like:


a
ab



A collection of dominoes looks like:
(      
)
b
a
ca
abc
,
,
,
ca
ab
a
c
The task is to make a list of these dominoes (repetitions permitted) so that
we get the same string at the top and the bottom.
Such a list is called a match. For example,

        
b
ca
a
abc
a
,
,
,
,
ab
ca
a
ab
c
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

12 / 35

The Post Correspondence Problem

The Post Correspondence Problem

Theorem 4
PCP = {⟨P⟩ | P is an instance of the Post correspondence problem with a match}
is undecidable.
Proof idea.
Reduction from ATM to PCP via accepting computation histories.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

13 / 35

The Post Correspondence Problem

Rice’s Theorem

Problem 5 (Rice’s Theorem)
Let P be a property about the language recognized by a Turing machine such
that:
(i) P is non-trivial. Some, but not all Turing machines recognize a language
that has this property,
(ii) whenever L(M1 ) = L(M2 ) for two Turing machines M1 and M2 , then both
L(M1 ) and L(M2 ) have the property P (or none of them has the property
P),
then the language
LP = {⟨M⟩ | M is a TM such that L(M) recognized by M has property P} is
undecidable.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

14 / 35

The Post Correspondence Problem

Rice’s Theorem
Proof idea (to be cont.)
Towards contradiction, suppose LP is decidable by some TM R.
By condition (i), since P is a non-trivial property for some language,
there are TM MP , M¬P such that:
(
L(MP )
has the property P
L(M¬P ) does not have the property P
We assume that we have access to such TMs.
We will now reduce ATM to LP .
Eventually our argument depends on whether or not the empty
language L∅ = ∅ has this property P or not.
We construct a TM S such that:
(
L∅ ,
if M does not accept w
n L(M ),
if M accepts w and L∅ doesn’t have property P
L(S) =
P
L(M¬P ), if M accepts w and L∅ does have the property P
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

15 / 35

The Post Correspondence Problem

Rice’s Theorem
Proof idea (cont.)
We feed the description of S, ⟨S⟩, into R
⇒ R tells us if L(S) has the property
⇒ Based on the relationship of L(S) with L∅ we can tell if M accepts w
⇒ Contradiction
Case where L∅ = ∅ does not have property P
S = “on input x:
1

2

For the moment ignore x and simulate M on input w, until M accepts so
that we can go to step 2.
(So, if M rejects, loop and try again, . . . forever . . . )
(Reached this point because M accepted w)
Simulate MP on x, if L∅ does not have the property P.
Otherwise,
Simulate M¬P on x (L∅ has the property P this time).
Accept x, if the simulation by MP (or M¬P ) accepted.”

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

16 / 35

The Post Correspondence Problem

Rice’s Theorem
Proof idea (cont.)
In other words:
M accepts w ⇒ L(S) = L(MP ) (or L(S) = L(M¬P ))
M does not accept w ⇒ L(S) = L∅
Feed ⟨S⟩ into R

accept











R(⟨S⟩) =
reject












D. Diochnos (OU - CS)

if L∅ has property P, then L(S) = L∅
⇒ M did not accept w
⇒ For the Problem ATM answer reject
on input ⟨M, w⟩
if L∅ does not have property P, then L(S) = L(MP )
⇒ M accepted w
⇒ For the Problem ATM answer accept
on input ⟨M, w⟩

Theory of Computation: Reducibility

17 / 35

Mapping Reducibility

Table of Contents

1

Introduction

2

Undecidable Problems

3

The Post Correspondence Problem

4

Mapping Reducibility

5

Turing Reducibility

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

18 / 35

Mapping Reducibility

Mapping Reducibility

Definition 6
A function f : Σ∗ → Σ∗ is a computable function if some Turing machine
M, on every input w, halts with just f (w) on its tape.
Example 7
All usual arithmetic operations on integers are computable functions.
For example, addition: Input ⟨m, n⟩, output ⟨m + n⟩.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

19 / 35

Mapping Reducibility

Mapping Reducibility
Definition 8
A language A is mapping reducible to language B, written A ≤m B, if there is
a computable function f : Σ∗ → Σ∗ , where for every w,
w ∈ A ⇔ f (w) ∈ B
The function f is called the reduction of A to B.

As usual, computational
problems are represented
as languages.

Function f reducing A to B
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

20 / 35

Mapping Reducibility

Mapping Reducibility
Theorem 9
If A ≤m B and B is decidable, then A is decidable.
Proof.
Let M be a decider for B. Let f be the reduction from A to B.
Construct a decider N for A as follows.
N = “On input w:
1

Compute f (w).

2

Run M on input f (w) and output whatever M outputs.”
w ∈ A ⇒ f (w) ∈ B ⇒ M accepts f (w) whenever w ∈ A
⇒ N works as expected.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

21 / 35

Mapping Reducibility

Mapping Reducibility

Corollary 10
If A ≤m B and A is undecidable, then B is undecidable.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

22 / 35

Mapping Reducibility

Mapping Reducibility
Example 11
In Theorem 1 we reduced ATM to HALTTM .
We need a function
f : ⟨M, w⟩ ∈ ATM −→ M′ , w ′ ∈ HALTTM
where ⟨M, w⟩ ∈ ATM if and only if ⟨M′ , w ′ ⟩ ∈ HALTTM .
F = “On input ⟨M, w⟩:
1

Construct the TM M′ :
M′ = “On input x:
1
2
3

2

Run M on x.
If M accepts, accept.
If M rejects, enter a loop.”

Output ⟨M′ , w⟩.”
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

23 / 35

Mapping Reducibility

Mapping Reducibility
Remark 1 (malformed inputs)
When we describe a TM that computes a reduction from A to B, improperly
formed inputs are assumed to map to strings outside of B.
Example 12
In Theorem 4 we reduced ETM to EQTM . There the reduction f maps ⟨M⟩ to
⟨M, M1 ⟩, where M1 is the machine that rejects all inputs.
Example 13
In Theorem 2 we reduced ATM to ETM , since M accepts w iff L(M1 ) is not
empty. So f is a mapping reduction from ATM to ETM .
In fact, no reduction from ATM to ETM exists.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

24 / 35

Mapping Reducibility

Mapping Reducibility

Theorem 14
If A ≤m B and B is Turing-recognizable, then A is Turing-recognizable.
Proof.
Same as in Theorem 9, except that M and N are recognizers instead of
deciders.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

25 / 35

Mapping Reducibility

Mapping Reducibility

Corollary 15
If A ≤m B and A is not Turing-recognizable, then B is not Turing-recognizable.
Typical application of Corollary 15:
A mapping reduction f : A ≤m B is also a mapping reduction
f : A ≤m B.
So, since we know that ATM is not Turing-recognizable,
we can show that a problem P is not Turing-recognizable by
designing a mapping reduction f : ATM ≤m P.
(This will also imply ATM ≤m P.)

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

26 / 35

Mapping Reducibility

Mapping Reducibility
Theorem 16
EQTM = {⟨M1 , M2 ⟩ | M1 and M2 are TMs and L(M1 ) = L(M2 )} is neither
Turing-recognizable nor co-Turing-recognizable.
Proof (to be cont.)
Part A: “EQTM is not Turing-recognizable”
ATM reduces to EQTM .
F = “On input ⟨M, w⟩, where M is a TM and w is a string:
1

Construct the following two machines, M1 and M2 :
M1 = “On any input, reject.”
M2 = “On any input:
Run M on w. If M accepts, accept.”

2

Output ⟨M1 , M2 ⟩.”
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

27 / 35

Mapping Reducibility

Mapping Reducibility

Proof (to be cont.)
Here, M1 accepts nothing.
{Σ∗ } = L(M2 ) ̸= L(M1 ) = ∅, if M accepts w.
L(M2 ) = L(M1 ) = ∅, if M does not accept w.
So, M1 and M2 are equivalent in the second case
⇒ F reduces ATM to EQTM , as desired.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

28 / 35

Mapping Reducibility

Mapping Reducibility

Proof (to be cont.)
Part B: “EQTM is not Turing-recognizable”
ATM reduces to EQTM .
G = “On input ⟨M, w⟩, where M is a TM and w is a string:
1

Construct the following two machines, M1 and M2 :
M1 = “On any input, accept.”
M2 = “On any input:
Run M on w. If M accepts, accept.”

2

Output ⟨M1 , M2 ⟩.”

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

29 / 35

Mapping Reducibility

Mapping Reducibility

Proof (cont.)
Here, M1 accepts everything.
This time:
M accepts w ⇒ L(M2 ) = L(M1 )
M does not accept w ⇒ L(M2 ) ̸= L(M1 )
So, M1 and M2 are equivalent in the first case (where M accepts w)
⇒ G reduces ATM to EQTM , as desired.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

30 / 35

Turing Reducibility

Table of Contents

1

Introduction

2

Undecidable Problems

3

The Post Correspondence Problem

4

Mapping Reducibility

5

Turing Reducibility

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

31 / 35

Turing Reducibility

Turing Reducibility

Definition 17
An oracle for a language B is an external device that is capable of reporting
whether any string w is a member of B.
An oracle Turing machine is a modified Turing machine that has the
additional capability of querying an oracle. We write MB to describe an
oracle Turing machine that has an oracle for language B.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

32 / 35

Turing Reducibility

Turing Reducibility
Example 18
An oracle Turing machine with an oracle for ATM can decide more languages
than an ordinary Turing machine can.
Apart from deciding ATM (obviously), we can also decide, eg., ETM , the
emptiness testing problem for TMs by using T ATM below.
T ATM = “On input ⟨M⟩, where M is a TM:
1

Construct the following TM N:
N = “On any input x:
1
2

Run M in parallel on all strings in Σ∗ .
If M accepts any of these strings, accept x.”

2

Query the oracle for ATM to determine whether ⟨N, 0⟩ ∈ ATM .

3

If the oracle answers NO, accept; otherwise, reject.”
D. Diochnos (OU - CS)

Theory of Computation: Reducibility

33 / 35

Turing Reducibility

Turing Reducibility

Example 18 (cont.)
So, if L(M) ̸= ∅ ⇒ L(N) = {w ∈ Σ∗ } ⇒ 0 ∈ L(N) ⇒ Oracle “Yes′′ ⇒
reject.
Conversely, if L(M) = ∅ ⇒ L(N) = ∅ ⇒ 0 ∈
/ L(N) ⇒ Oracle “No′′ ⇒
accept.
In other words, T ATM decides ETM .
We say that ETM is decidable relative to ATM .

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

34 / 35

Turing Reducibility

Turing Reducibility

Definition 19
Language A is Turing reducible to language B, written A ≤T B, if A is
decidable relative to B.
Theorem 20
If A ≤T B and B is decidable, then A is decidable.
Proof.
B is decidable ⇒ ∃ TM M that decides B ⇒ Use M instead of an oracle for B
in order to solve B and subsequently A.

D. Diochnos (OU - CS)

Theory of Computation: Reducibility

35 / 35

</details>
