---
title: "ToC_chapter_6_slides"
---

# ToC_chapter_6_slides

![[ToC/slides/ToC_chapter_6_slides.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/ToC/slides/ToC_chapter_6_slides.pdf) | [Download Local](/ToC/slides/ToC_chapter_6_slides.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Theory of Computation
Time Complexity
Dimitris Diochnos
School of Computer Science
University of Oklahoma

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

1 / 60

Outline

1

Measuring Complexity

2

The Class P

3

The Class NP

4

NP-Completeness

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

2 / 60

Measuring Complexity

Table of Contents

1

Measuring Complexity

2

The Class P

3

The Class NP

4

NP-Completeness

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

3 / 60

Measuring Complexity

Measuring Complexity

Definition 1
Let M be a deterministic Turing machine that halts on all inputs.
The running time or time complexity of M is the function f : N → N,
where f (n) is the maximum number of steps that M uses on any input of
length n.
If f (n) is the running time of M, we say that M runs in time f (n) and that M
is an f (n) time Turing machine.
Customarily we use n to represent the length of the input.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

4 / 60

Measuring Complexity

Big-O and Small-O Notation

Definition 2
Let f and g be functions f , g : N → R+ .
Say that f (n) = O(g(n)) if positive integers c and n0 exist such that for
every integer n ≥ n0 ,
f (n) ≤ cg(n).
When f (n) = O(g(n)), we say that g(n) is an upper bound for f (n), or
more precisely, that g(n) is an asymptotic upper bound for f (n), to
emphasize that we are suppressing constant factors.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

5 / 60

Measuring Complexity

Big-O and Small-O Notation
Example 3
Let f1 (n) = 5n3 + 2n2 + 22n + 6.
Then, selecting the highest order term 5n3 and disregarding its coefficient 5
gives f1 (n) = O(n3 ).
We can verify this is indeed the case (i.e., we satisfy Definition 2) by
letting c = 6 and n0 = 10.
Then, 5n3 + 2n2 + 22n + 6 ≤ 6n3 , for every n ≥ 10.
In addition, f1 (n) = O(n4 ) because n4 is larger than n3 and so n4 is still
an asymptotic upper bound on f1 .
However, f1 (n) is not O(n2 ). Regardless of the values we assign to c and
n0 , Definition 2 can not be satisfied in this case.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

6 / 60

Measuring Complexity

Big-O and Small-O Notation

Remarks on Big-O:
For logarithms, we do not care about the base. f (n) = O(log n)
Recall: logb n = log2 n/ log2 b
f (n) = 2O(n) implies f (n) ≤ 2c·n for some constant c.
f (n) = 2O(log n) implies f (n) ≤ 2c·log n ,
or in other words f (n) ≤ nc for some constant c.
f (n) = nO(1) implies f (n) ≤ nc for some constant c.
So same bound as above; just written differently
Polynomial bounds: Bounds of the form nc for c > 0.
δ

Exponential bounds: Bounds of the form 2(n ) for some δ > 0.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

7 / 60

Measuring Complexity

Small-O

Definition 4
Let f and g be functions such that f , g : N → R+ . We say that
f (n) = o(g(n)) if
f (n)
lim
= 0.
n→∞ g(n)
In other words, f (n) = o(g(n)) means that, for any real number c > 0, a
number n0 exists, where f (n) < c · g(n) for all n ≥ n0 .

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

8 / 60

Measuring Complexity

Small-O

Example 5
It is easy to check the following:
√
1
n = o(n).
2

n = o(n log log n).

3

n log log n = o(n log n).

4

n log n = o(n2 ).

5

n2 = o(n3 ).

However, f (n) is never o(f (n)).

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

9 / 60

Measuring Complexity

Analyzing Algorithms
Definition 6
Let t : N → R+ be a function.
Define the time complexity class, TIME(t(n)), to be the collection of all
languages that are decidable by an O(t(n)) time Turing machine.
Example 7
Consider the language A = {0k 1k | k ≥ 0}.
One solution:
Scan repeatedly the input string and cross off a 1 (one) for every 0 (zero)
read. ⇒
we need n2 such scans (where n is the length of the input) and in each scan
we move the head above n cells of the tape.
So, roughly we need to move the tape O(n2 ) times ⇒ A ∈ TIME(n2 ).
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

10 / 60

Measuring Complexity

Analyzing Algorithms
Example 7 (cont.)
Another solution:
Scan repeatedly the input string and cross off half of the zeros and half of
the ones that are still “alive” ⇒
Each scan eliminates about half of the “alive” 0s and 1s from the previous
scan ⇒
we need roughly log2 n such scans to eliminate all the 0s and 1s, and each
scan takes time about n for moving the head from the leftmost cell to the
first blank (end of input) ⇒
So, roughly we need to move the tape O(n log n) times ⇒ A ∈ TIME(n log n).
Third solution:
Copy the 0s to a second tape and then move both heads (for 0s and 1s)
simultaneously so that we can decide the input string ⇒
Need only one pass on the input ⇒ A decided in O(n) time.
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

11 / 60

Measuring Complexity

Analyzing Algorithms

Interesting observation
Any language decided in o(n log n) time on a single-tape Turing machine,
is regular.
Complexity depends of model of computation.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

12 / 60

Measuring Complexity

Complexity Relationships Among Models
Theorem 8
Let t(n) be a function, where t(n) ≥ n.
Then every t(n) time multitape Turing machine has an equivalent O(t 2 (n))
time single-tape Turing machine.
Proof (to be cont.)
Let M be a k-tape TM that runs in t(n) time.
Simulation: Store all k tapes consecutively in a TM.
one pass determines the symbols for each head in M,
a second pass updates the contents and moves the simulated heads
(we may need to shift everything one cell to the right).

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

13 / 60

Measuring Complexity

Complexity Relationships Among Models
Proof (cont.)
The input length of each tape is at most t(n).
⇒ For k tapes ≤ k · t(n)
⇒ One pass in S may read up to O(t(n)) cells
⇒ Two passes + potentially up to k shifts of the contents one cell to the
right
⇒ O(t(n)) + O(t(n)) + O(t(n)) = O(t(n)).
So overall for S:
Initialization: O(t(n))
Simulation: Up to t(n) steps and need O(t(n)) time for each step
simulated
⇒ O(t 2 (n)) time.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

14 / 60

Measuring Complexity

Nondeterministic time

Definition 9
Let N be a nondeterministic Turing machine that is a decider.
The running time of N is the function f : N → N, where f (n) is the
maximum number of steps that N uses on any branch of its computation on
any input of length n.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

15 / 60

Measuring Complexity

Deterministic vs Nondeterministic

Measuring deterministic and nondeterministic time

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

16 / 60

Measuring Complexity

Deterministic vs Nondeterministic
Theorem 10
Let t(n) be a function, where t(n) ≥ n. Then every t(n) time nondeterministic
single-tape Turing machine has an equivalent 2O(t(n)) time deterministic
single-tape Turing machine.
Proof.
Construct a deterministic 3-tape TM D that simulates N (as in the proof of
Theorem 3.16).
On an input of length n, every branch of N’s nondeterministic computation
tree has length at most t(n).
Since every node can have at most b children ⇒≤ bt(n) leaves.
⇒ Total number of tree nodes ≤ 2· maximum number of leaves ≤ 2· bt(n) .
⇒ Traveling down from root to node: time ≤ O(t(n)).
⇒ Running time for D is O(t(n) · bt(n) ) which is O(2t(n) · 2log2 b·t(n) ).
(Also true for single-tape TM in the end. . . )
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

17 / 60

The Class P

Table of Contents

1

Measuring Complexity

2

The Class P

3

The Class NP

4

NP-Completeness

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

18 / 60

The Class P

The Class P
Definition 11
P is the class of languages that are decidable in polynomial time on a
deterministic single-tape Turing machine. In other words,
P = ∪k TIME(nk ).
P is important because:
1

All reasonable models of computation (models that try to approximate
the behavior of actual computers) are polynomially equivalent to a
deterministic single-tape TM. So P is invariant for all such models.

2

P roughly corresponds to problems that are realistically solvable on a
computer.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

19 / 60

The Class P

The Class P
Key Observations:
Composition of polynomials is a polynomial
(polynomially many stages of an algorithm, each of which can be done
in polynomial time)
Assume “reasonable” representations, e.g.,
numbers such as 9 are not written down in unary as 111111111, but in
some base ≥ 2, e.g., in binary 1001 (which takes exponentially less space)
graphs: adjacency matrix, or list of nodes and edges ⇒ ok to compute
running time in terms of number of nodes n, since number of edges are
at most O(n2 ).

In any case, for “reasonable” inputs of length n, when working in P we
want algorithms that decide the instances of the problem in time
O(nk ).

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

20 / 60

The Class P

Examples of Problems in P
Theorem 12
PATH = {⟨G, s, t⟩ | G is a directed graph that has a directed path from s to t}
PATH ∈ P

The PATH problem: Is there a path from s to t?
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

21 / 60

The Class P

Examples of Problems in P
Proof (to be cont.)
Note that enumerating all paths is inefficient
e.g., if G has m nodes, the paths of length m − 1 (w/o repeating nodes)
are: s × m
| − 1 × m −{z2 . . . × 2 × 1}
(m−1)! ways

m−1
Note that (m − 1)! = 1 · 2 · 3 · . . . · ⌊ m−1
2 ⌋ · ⌈ 2 ⌉ · . . . · (m − 1)
m−1
m−1
(⌊ 2 ⌋ and ⌈ 2 ⌉ are different when m is even), so:
m−1
(m−1)! ≥ (m−1)·(m−2)·. . .·(⌊ m−1
2 ⌋)·1 ≥ (m−1)·(m−2)·. . .·( 2 )
m−1
( 2 )
⇒ (m − 1)! ≥ ( m−1
, so exponential in m.
2 )
(On another note, for m ≥ 2: m! ≥ 2| · 2 · 2{z· . . . · 2} = 2m )
m times

Another approach: Propagate a “label” iteratively, indicating which
nodes can be reached from s. So, in particular do a BFS if you want.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

22 / 60

The Class P

Examples of Problems in P
Proof (cont.)
Another idea is:
M = “On input ⟨G, s, t⟩, where G is a directed graph with nodes s and
t:
1
2
3

4

Place a label on node s.
Repeat until no additional nodes are labeled:
Scan all the edges of G. If an edge (a, b) is found going from a labeled
node a to an unlabeled node b, label node b.
If t is labeled, accept. Otherwise, reject.”

Time Complexity: Stages 1 and 4 are executed only once.
Stage 3 runs at most m times since it introduces one node each time
(except the last one).
⇒ total number of stages is at most 1 + 1 + m = poly(⟨G, s, t⟩).
Each stage can also be implemented in polynomial time
⇒ Overall, PATH ∈ TIME(poly(⟨G, s, t⟩)).
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

23 / 60

The Class P

Examples of Problems in P
Theorem 13
RELPRIME = {⟨x, y⟩ | x and y are relatively prime} ∈ P.
Proof (to be cont.)
“Reasonable”(encoding of integers x and y (say, binary)
≈ log x bits to represent x
⇒ We need
≈ log y bits to represent y
The idea of checking each integer in the range {2, 3, . . . , min{2, 3}}
and see if it divides both x and y and stopping the first time it works,
in the worst case may need to check about y = min{x, y} numbers.
But this means we need to check exponentially many integers
compared to the size of the input (about log x bits)
⇒ We need a different approach.
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

24 / 60

The Class P

Examples of Problems in P
Proof (cont.)
Use the Euclidean algorithm.
E = “On input ⟨x, y⟩, where x and y are natural numbers in binary:
1
2
3
4

Repeat until y = 0:
Assign x ← x mod y.
Exchange x and y.
Output x.”

Solve the problem with the following algorithm:
R = “On input ⟨x, y⟩, where x, y ∈ N:
1
2

Run E on ⟨x, y⟩.
If the result is 1, accept. Otherwise, reject.”

Time complexity: Stages 2 and 3 in E are executed ≈ log2 x or log2 y
times (whichever is smaller).
⇒ That’s poly-proportional to the size of input ⇒ ∈ P
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

25 / 60

The Class P

Examples of Problems in P

Key observation:
y ≤ x2 ⇒
⇒ x mod y ∈ {0, 1, 2, . . . , y − 1}
⇒ x mod y < y ≤ x2
⇒ x ← x mod y
drops x by at least half
x
2 <y <x ⇒

⇒ x mod y = x − y
⇒ x mod y < x2
⇒ x ← x mod y
drops x by at least half

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

26 / 60

The Class NP

Table of Contents

1

Measuring Complexity

2

The Class P

3

The Class NP

4

NP-Completeness

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

27 / 60

The Class NP

Hamiltonian path
Hamiltonian path
A Hamiltonian path in a directed graph G is a directed path that goes
through each node exactly once.

HAMPATH = {⟨G, s, t⟩ | G is a directed graph with a Hamiltonian path
from s to t}.

A Hamiltonian path goes through every node exactly once
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

28 / 60

The Class NP

Hamiltonian path

easy for an exponential time solution
⇒ Use PATH algorithm with the additional constraint to check if the
path found is Hamiltonian.
No one knows whether HAMPATH is solvable in polynomial time.
However, HAMPATH has polynomial verifiability
(We can easily, i.e., in polynomial time, convince someone else when
HAMPATH has a solution, by simply providing such a solution.)
Some problems may not be polynomially verifiable; e.g., HAMPATH.
We do not know of a way to convince someone that a graph does not
have a Hamiltonian path, other than using the same exponential time
algorithm in the first place.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

29 / 60

The Class NP

Class NP

Definition 14
A verifier for a language A is an algorithm V , where
A = {w | V accepts ⟨w, c⟩ for some string c}.
We measure the time of a verifier only in terms of the length of w, so a
polynomial time verifier runs in polynomial time in the length of w.
A language A is polynomially verifiable if it has a polynomial time
verifier.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

30 / 60

The Class NP

Class NP

Definition 15
NP is the class of languages that have polynomial time verifiers.

NP stands for nondeterministic polynomial time and is derived from an
alternative characterization by using nondeterministic polynomial time
Turing machines.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

31 / 60

The Class NP

Example

Solve HAMPATH with an NTM
N1 = “On input ⟨G, s, t⟩, where G is a directed graph with nodes s and t:
1

Write a list of m numbers, p1 , . . . , pm , where m is the number of nodes
in G.
Each number is nondeterministically selected to be between 1 and m.

2

Check for repetitions in the list. If any are found, reject.

3

Check whether s = p1 and t = pm . If either fail, reject.

4

For each i between 1 and m − 1, check whether (pi , pi+1 ) is an edge of
G. If any are not, reject.
Otherwise, all tests have been passed, so accept.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

32 / 60

The Class NP

Class NP
Theorem 16
A language is in NP iff it is decided by some nondeterministic polynomial time
Turing machine.
Proof (to be cont’d).
(⇒)
A ∈ NP ⇒ A has a polynomial time verifier V ; a TM that runs in time nk .
N = “On input w of length n:
1

Nondeterministically select string c of length at most nk .

2

Run V on input ⟨w, c⟩.

3

If V accepts, accept; otherwise, reject.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

33 / 60

The Class NP

Class NP

Proof (cont.)
(⇐)
A decided by some NTM N. Then we can construct a polynomial time
verifier V :
V = “On input ⟨w, c⟩, where w and c are strings:
1

Simulate N on input w, treating each symbol of c as a description of
the nondeterministic choice to make at each step.

2

If this branch of N’s computation accepts, accept; otherwise, reject.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

34 / 60

The Class NP

Class NP

Definition 17
NTIME(t(n)) = {L|L is a language decided by an O(t(n)) time
nondeterministic Turing machine}.
Corollary 18
NP = ∪k NTIME(nk ).

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

35 / 60

The Class NP

Examples of problems in NP: CLIQUE

A clique in an undirected graph is a subgraph, wherein every two nodes are
connected by an edge.
A k-clique is a clique that contains k nodes.

A graph with a 5-clique

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

36 / 60

The Class NP

Examples of problems in NP: CLIQUE

Theorem 19
CLIQUE is in NP.
Proof.
Construct a verifier V for CLIQUE.
V = “On input ⟨⟨G, k⟩ , c⟩:
1

Test whether c is a set of k nodes in G.

2

Test whether G contains all edges connecting nodes in c.

3

If both pass, accept; otherwise, reject.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

37 / 60

The Class NP

Examples of problems in NP: CLIQUE

Theorem 20
CLIQUE is in NP.
Alternative proof.
Construct a NTM solving the problem.
N = “On input ⟨G, k⟩, where G is a graph:
1

Nondeterministically select a subset c of k nodes of G.

2

Test whether G contains all edges connecting nodes in c.

3

If yes, accept; otherwise, reject.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

38 / 60

The Class NP

Examples of problems in NP: SUBSET-SUM

Define:
SUBSET − SUM = {⟨S, t⟩ | S = {x1 , . . . , xk }, and for some
X
{y1 , . . . , yl } ⊆ {x1 , . . . , xk }, we have
yi = t}.
For example, ⟨{4, 11, 16, 21, 27}, 25⟩ ∈ SUBSET-SUM because 4 + 21 = 25.
Note that {x1 , . . . , xk } and {y1 , . . . , yl } are considered to be multisets and
so allow repetition of elements.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

39 / 60

The Class NP

Examples of problems in NP: SUBSET-SUM

Theorem 21
SUBSET-SUM is in NP.
Proof.
Here is a verifier:
V = “On input ⟨⟨S, t⟩ , c⟩:
1

Test whether c is a collection of numbers that sum to t.

2

Test whether S contains all the numbers in c.

3

If both pass, accept; otherwise, reject.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

40 / 60

The Class NP

Examples of problems in NP: SUBSET-SUM

Theorem 22
SUBSET-SUM is in NP.
Alternative proof.
We construct a NTM:
N = “On input ⟨S, t⟩:
1

Nondeterministically select a subset c of the numbers in S.

2

Test whether c is a collection of numbers that sum to t.

3

If the test passes, accept; otherwise, reject.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

41 / 60

The Class NP

The P versus NP Question

P = the class of languages for which membership can be decided quickly.
NP = the class of languages for which membership can be verified quickly.
“quickly”: in polynomial time

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

42 / 60

The Class NP

The P versus NP Question
It appears that polynomial time verifiability is more powerful compared to
polynomial time decidability.
However, we are unable to prove the existence of a single language in NP
that is not in P.

One of these two possibilities is correct
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

43 / 60

The Class NP

The P versus NP Question

The best method currently known for solving languages in NP
deterministically uses exponential time.
So we can prove that:
k

NP ⊆ EXPTIME = ∪k TIME(2n )
but we don’t know whether NP is contained in a smaller deterministic time
complexity class.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

44 / 60

NP-Completeness

Table of Contents

1

Measuring Complexity

2

The Class P

3

The Class NP

4

NP-Completeness

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

45 / 60

NP-Completeness

NP-completeness

1970s: Stephen Cook and Leonid Levin
Certain problems in NP whose individual complexity is related to that
of the entire class.
If a polynomial time algorithm exists for any of these problems, all
problems in NP would be polynomial time solvable.
These problems are called NP-complete.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

46 / 60

NP-Completeness

Importance of NP-completeness

Theory:
Want to prove P ̸= NP?
Show that an NP-complete problem requires more than polynomial
time.
Want to prove P = NP?
Show that an NP-complete problem has a polynomial time algorithm.
Practice:
Proving that a problem is NP-complete is strong evidence that the problem
should not be solvable (in the general case) in polynomial time.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

47 / 60

NP-Completeness

The Satisfiability problem

The Satisfiability problem:
SAT = {⟨ϕ⟩ | ϕ is a satisfiable Boolean formula}.
Theorem 23 (Cook-Levin Theoorem)
SAT ∈ P iff P = NP.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

48 / 60

NP-Completeness

Polynomial Time Reducibility
Definition 24
A function f : Σ∗ → Σ∗ is a polynomial time computable function if
some polynomial time Turing machine M exists that halts with just f (w) on
its tape, when started on any input w.
Definition 25
Language A is polynomial time mapping reducible, or simply
polynomial time reducible, to language B, written A ≤P B,
if a polynomial time computable function f : Σ∗ → Σ∗ exists, where for
every w,
w ∈ A ⇔ f (w) ∈ B.
The function f is called the polynomial time reduction of A to B.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

49 / 60

NP-Completeness

Polynomial Time Reducibility

Polynomial time function f reducing A to B
(Similar to mapping reductions, but now the conversion needs to be done
efficiently.)
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

50 / 60

NP-Completeness

Polynomial Time Reducibility
Theorem 26
If A ≤P B and B ∈ P, then A ∈ P.
Proof (to be cont.)
Let M be a polynomial time algorithm deciding B.
Let f be a polynomial time reduction from A to B.
Then, a polynomial time algorithm N deciding A is the following.
N = “On input w:
1

Compute f (w).

2

Run M on input f (w) and output whatever M outputs.”

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

51 / 60

NP-Completeness

Polynomial Time Reducibility

Proof (cont’d).
We have w ∈ A whenever f (w) ∈ B because f is a reduction from A to B.
Thus, M accepts f (w) whenever w ∈ A.
Moreover, N runs in polynomial time, since each stage runs in polynomial
time.
Note that stage 2 runs in polynomial time, because the composition of two
polynomials is a polynomial.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

52 / 60

NP-Completeness

Notation

A literal is a Boolean variable or a negated Boolean variable; e.g., x or
x.
A clause is several literals connected with ∨s, e.g., (x1 ∨ x2 ∨ x3 ∨ x4 ).
A Boolean formula is in conjunctive normal form, called a
cnf-formula, if it comprises several clauses connected with ∧s, as in
(x1 ∨ x2 ∨ x3 ∨ x4 ) ∧ (x3 ∨ x5 ∨ x6 ) ∧ (x3 ∨ x6 ).
It is a 3cnf-formula if all the clauses have 3 literals, as in
(x1 ∨ x2 ∨ x3 ) ∧ (x3 ∨ x5 ∨ x6 ) ∧ (x3 ∨ x6 ∨ x4 ) ∧ (x4 ∨ x5 ∨ x6 ).
(Repetition of literals is allowed in a clause.)
3SAT = {⟨ϕ⟩ | ϕ is a satisfiable 3cnf-formula}.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

53 / 60

NP-Completeness

3SAT

Theorem 27
3SAT is polynomial time reducible to CLIQUE.
Proof idea.
The polynomial time reduction f will convert formulas to graphs.
In the constructed graphs, cliques of a specified size correspond to
satisfying assignments of the formula.
Structures within the graph are designed to mimic the behavior of the
variables and clauses.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

54 / 60

NP-Completeness

3SAT
Theorem 28
3SAT is polynomial time reducible to CLIQUE.
Proof (to be cont.)
Let ϕ be a formula with k clauses such as:
ϕ = (a1 ∨ b1 ∨ c1 ) ∧ (a2 ∨ b2 ∨ c2 ) ∧ . . . ∧ (ak ∨ bk ∨ ck ).
The reduction f generates the string ⟨G, k⟩, where G is an undirected graph
defined as follows.
Organize the nodes in G into k groups of three nodes each, called
triples, t1 , . . . , tk . Each triple corresponds to a clause in ϕ.
Each node in a triple corresponds to a literal in the associated clause.
Label each node with its corresponding literal in ϕ.
The edges of G connect all but two types of pairs of nodes in G:
nodes in the same triple
nodes with contradictory labels (e.g., x2 and x2 )
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

55 / 60

NP-Completeness

3SAT

The graph that the reduction produces from
ϕ = (x1 ∨ x1 ∨ x2 ) ∧ (x1 ∨ x2 ∨ x2 ) ∧ (x1 ∨ x2 ∨ x2 )

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

56 / 60

NP-Completeness

Why the construction works?

Proof (to be cont.)
Let ϕ have a satisfying assignment, say σ = (σ1 , σ2 , . . . , σn ).
In each triple of G, we select one node corresponding to a true literal in
the satisfying assignment.
If more than one literal is true in a particular clause, we choose one of
them literal arbitrarily.
These nodes now form a k-clique.
We selected k nodes.
No pair of these nodes should not be joined by an edge.

⇒ G contains a k-clique.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

57 / 60

NP-Completeness

Why the construction works?
Proof (cont’).
Let G have a k-clique.
Then no two of the clique’s nodes occur in the same triple.
Therefore, each of the k triples contains exactly one of the k clique
nodes.
Now assign truth values to the variables of ϕ so that each literal
labeling a clique node is made true.
Doing so is always possible, because two nodes labeled in a
contradictory way are not connected by an edge (so both can not be
simultaneously in the clique).
⇒ This assignment satisfies ϕ because each triple contains a clique
node ⇒ ϕ is satisfiable.
In other words, due to Theorems 26 and 28, if CLIQUE is solvable in
polynomial time, so is 3SAT.
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

58 / 60

NP-Completeness

NP-completeness

Definition 29
A language B is NP-complete if it satisfies two conditions:
1

B is in NP, and

2

every A in NP is polynomial time reducible to B.

Theorem 30
If B is NP-complete and B ∈ P, then P = NP.
Proof.
Immediate from the definition of polynomial time reducibility.

D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

59 / 60

NP-Completeness

NP-completeness
Theorem 31
If B is NP-complete and B ≤P C for C in NP, then C is NP-complete.
Proof.
We know that C ∈ NP. So we need to show that every A ∈ NP is
polynomial time reducible to C.
Since B is NP-complete, every problem in NP is polynomial time reducible
to B. Now B is polynomial time reducible to C.
Polynomial time reductions compose ⇒ if A is polynomial time reducible to
B and B is polynomial time reducible to C, then A is polynomial time
reducible to C.
So every language in NP is polynomial time reducible to C.
Theorem 32 (Restate Theorem 23 by Cook and Levin)
SAT is NP-complete.
D. Diochnos (OU - CS)

Theory of Computation: Time Complexity

60 / 60

</details>
