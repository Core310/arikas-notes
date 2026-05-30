---
title: "TM_Remarks_TOC"
---

# TM_Remarks_TOC

![[ToC/chNotes/TM_Remarks_TOC.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/ToC/chNotes/TM_Remarks_TOC.pdf) | [Download Local](/ToC/chNotes/TM_Remarks_TOC.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Remarks on Turing Machines, Languages, and Complexity
Dimitris Diochnos
Norman, November 21, 2019

1 Diﬀerent Levels of Description of a Turing Machine
When describing TMs we can have three diﬀerent levels of details that we provide for their execution.
Formal Description. We deﬁne the 7-tuple (Q, Σ, Γ, δ, q0 , qaccept , qreject ) that completely describes the
TM. So that the transition function δ can be deﬁned it is perhaps best if you draw a diagram and this way also
help people who are reading the description of the TM to understand in an easier way what is happening.
Implementation Description. This is a higher level description for a TM, compared to the formal description. This time we are using English prose to describe the way the TM moves its head and how data is stored
on its tape. We do not give details of the transition function.
High-Level Description. We give an algorithm ignoring the implementation details. We do not have to
explain how the machine manages its tape or head.

1.1

Example of a High-Level Description

Let B =



w#w | w ∈ {0, 1}∗ . Give a high-level description of a TM that decides the language B.

Solution
Let k ⩾ 1 be the position of the input where the unique # symbol is found. For each i ∈ {1, 2, . . . , k − 1},
we will be matching the symbols in positions i and k + i. If we can do that for every i ∈ {1, 2, . . . , k − 1} and
no more 0 or 1 symbols remain, then we accept.
In any other case, we reject.

1.2

Example of an Implementation Description


Let B = w#w | w ∈ {0, 1}∗ . Give an implementation description of a TM that decides the language B.
(This is an example from Sipser’s book [6].)
Solution
M1 = “On input string w:
1. Zig-zag across the tape to corresponding positions on either side of the # symbol to check whether these
positions contain the same symbol. If they do not, or if no # is found, reject. Cross oﬀ symbols as they
are checked to keep track of which symbols correspond.
2. When all symbols to the left of the # have been crossed oﬀ, check for any remaining symbols to the right
of the #. If any symbols remain, reject; otherwise, accept.”
Version: November 21, 2019 at 1:43am

1/13

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

1.3

Example of a Formal Description


Let B = w#w | w ∈ {0, 1}∗ . Give a formal description of a TM that decides the language B.
(This is Example 3.9 from Sipser’s book [6].)
Solution
• The set of states is Q = {q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , qa , qr }.
• The input alphabet is Σ = {0, 1, #} and the tape alphabet is Γ = {0, 1, #, }.
• The starting state is q1 . The accept state is qa . The reject state is qr .
• For the transition function δ we have the diagram shown in Figure 1.

0, 1 → R

q3

x→R
#→R

q5

1

→

→R

0

q6

x→R

→

x,

0

R
q2

#→R

#→L

q7

x→R

→

0, 1 → R

qa

0, 1 → L

L

q8

0, 1, x → L

x,

1
#→R

q1

L

x,

x,

R

→

x→R

q4

Figure 1: State diagram for a TM deciding language B.
First of all, note that we have grouped some symbols together. For example, in state q6 we have the rule
0, 1, x → L. This notation means that if we read a 0 we write a 0 and we move L, or if we read a 1 we write a 1
and we move L and if we read an x we write an x and we move L. In other words, it has combined the following
three rules: 0 → L, 1 → L and x → L. Similarly, for state q2 for the rule 0, 1 → R we have combined the rules
0 → R and 1 → R.
Also, note that the diagram in Figure 1 does not explicitly mention the reject state qr . This is a typical
simpliﬁcation where all the missing arrows from the diagram will be leading to the reject state. Such transitions
occur implicitly whenever a state lacks an outgoing transition for a particular symbol. For example, if we are
in state q4 and we read a 1, or a #, or a , then the TM will go to the state qr (which is not shown) and reject.
(It does not matter how the head moves in such transitions to the reject state; say that the head is moving to
the right.)
Based on the implementation description that we have from Section 1.2, we see that the branch with the
states q1 , q2 , q4 , q6 and q7 corresponds to reading a 0 to the left of #, crossing oﬀ the matching 0 to the right
of # and then rewinding the tape head all the way to the left until we ﬁnd the last x which is to the left of #.
2/13

Version: November 21, 2019 at 1:43am

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

Similarly, the branch with the states q1 , q3 , q5 , q6 and q7 corresponds to matching the appropriate 1’s
this time, crossing them oﬀ and rewinding the head of the tape at the appropriate position.
Finally, states q8 and qa correspond to stage 2 from the implementation description that was given in
Section 1.2.

2 A Hierarchy of Languages
With the tools that we have explored so far we have identiﬁed several inclusions among the diﬀerent classes
of languages that exist. In particular we know the following:
Finite Languages ( Regular Languages ( Context-Free Languages ( Turing-Decidable Languages .
In other words, if a certain language is ﬁnite; e.g.,
L1 = {0, 01, 001, 011}, then that language is also regular, it is also context-free, it is also Turing-decidable.
Similarly, if we are given a language L and the
information that it is, say, context-free, then we can
deduce that L is also decidable. However, we can not
deduce that L is regular unless we know something
more and we can prove this claim.
In fact the set inclusions above are all proper.
That is, for every class of languages that we have
identiﬁed, there is at least one language that we can
deﬁne that strictly belongs to that class and not to a
subset class of languages; examples follow.
• The language L4 = { 0n 1n 2n | n ⩾ 0 } is decidable but not context-free.
(We can construct a TM that decides L4 and it
is an easy exercise to use the pumping lemma
for context-free languages to show that the
language is not context-free.)

Finite Languages
⋆ L1 = {0, 01, 001, 011}
Regular Languages
⋆ L2 = 0∗ 1∗
Context-Free Languages
⋆ L3 = { 0n 1n | n ⩾ 0 }
Turing-Decidable Languages
⋆ L4 = { 0n 1n 2n | n ⩾ 0 }
Turing-Recognizable Languages
⋆ Hilbert’s 10th problem

⋆ AT M

Not Turing-Recognizable Languages
• The language L3 = { 0n 1n | n ⩾ 0 } is
context-free but it is not regular.
(We can give a grammar or construct a PDA
and show that this language is context-free and
then it is an easy exercise to use the pumping
lemma for regular languages in order to show
that the language is not regular.)

⋆ AT M
Figure 2: A view of diﬀerent languages

• The language L2 = 0∗ 1∗ is regular but clearly not ﬁnite, as is for example L1 = {0, 01, 001, 011} which
is composed of only four diﬀerent strings.
(We can construct a DFA and show that the language is regular. The fact that the language does not
have a ﬁnite number of strings is obvious by the Kleene star operators.)
All the above are shown schematically in Figure 2. Figure 2 has additional information that we have not
yet discussed but we will do so below.
Version: November 21, 2019 at 1:43am

3/13

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

2.1

Decidable vs Recognizable Languages

Recall the deﬁnitions that we have for decidable and recognizable languages.
Deﬁnition 1 (Decidable Languages). A language L is called Turing-decidable (or just decidable), if there
exists a deterministic TM M, such that L(M) = L and moreover M satisﬁes the following: on an arbitrary input
string w, if w ∈ L then M accepts, otherwise (w 6∈ L) M rejects.
Deﬁnition 2 (Recognizable Languages). A language L is called Turing-recognizable (or just recognizable),
if there exists a deterministic TM M, such that L(M) = L and moreover M satisﬁes the following: on an arbitrary
input string w, if w ∈ L then M accepts.
In other words, every decidable language is recognizable, but not the other way around. For a recognizable
but not decidable language L, if we are given a TM M that recognizes L and an input w 6∈ L, then feeding w
into M may result in M never halting and reaching the reject state.
- Is this discussion meaningful? Are there languages that are recognizable but not decidable?
The answer is yes! We will examine this below.

2.2

Integral Roots of Univariate Polynomials

Consider the following language.
Lpoly,1 = { hpi | p is a univariate polynomial in x with integer coeﬃcients that has an integral root } ,
where hpi is some suitable representation of the polynomial p; see Section 5 for a discussion.
2.2.1 Lpoly,1 is Recognizable
There is an easy algorithm for recognizing if a given polynomial p(x) has an integral root.
Algorithm 1: An algorithm that identiﬁes an integral root of a univariate polynomial p(x).
Input: a polynomial p(x) = ak xk + . . . + a1 x + a0 .
Output: Returns true if p(x) has an integral root.
1 for x ∈ {0, +1, −1, +2, −2, +3, −3, . . .} do
2
v ← p(x);
3
if v = 0 then
4
return true;

Note that Algorithm 1 will indeed recognize a polynomial p(x) that has an integral root, because sooner
or later it will ﬁnd that root.
However, if the polynomial does not have an integral root, the algorithm will progressively attempt integer
values for x that have larger and larger absolute value and will never halt.
In the case of univariate polynomials we can however improve our algorithm and make it stop and therefore
decide if a given univariate polynomial p(x) has an integral root or not.
4/13

Version: November 21, 2019 at 1:43am

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

2.2.2 Lpoly,1 is Decidable
Regarding roots of univariate polynomials the following bound is due to Cauchy.
Proposition 1 (Cauchy [5]). Let ρ ∈ C be a root of R[x] ∋ h(x) = αk xk + · · · + α1 x + α0 . Then,
|ρ| ⩽ 1 +

max{|α0 |, |α1 |, . . . , |αk−1 |}
.
|αk |

Algorithm 2 decides the language Lpoly,1 .
Algorithm 2: An algorithm that decides if a given univariate polynomial has an integral root.
Input: a polynomial p(x) = ak xk + . . . + a1 x + a0 .
Output: Returns
true if p(x) has
k an integral root, otherwise returns false.
j
max{|α0 |,|α1 |,...,|αk−1 |}
;
1 b←1+
|αk |
2 for x ∈ {−b, −b + 1, . . . , −1, 0, +1, . . . , b − 1, b} do

v ← p(x);
if v = 0 then
return true;

3
4
5

6 return false;

2.3

Hilbert’s Tenth Problem

Consider the following equation in the three variables x, y, and z. Does it have an integral solution?
x3 + y3 + z3 = 42

(1)

It turns out that the above equation has at least one integral solution. We know the following one:

 x = −80538738812075974
y = +80435758145817515

z = +12602123297335631

As you can see, the three integer numbers1 that are satisfying (1), have grown very-very large compared to
the coeﬃcients involved in (1).
Hilbert’s tenth problem asked to devise an algorithm that decides if an arbitrary multivariate polynomial
with integer coeﬃcients has an integral root – not just for the sum of the three cubes that we see in (1).
While Hilbert posed the problem formally in 1900, it was only in 1970 that Yuri Matijasevič showed that no
algorithm exists for testing whether a polynomial has integral roots [3, 4]. Matijasevič’s work built on results
by Martin Davis, Hilary Putnam, and Julia Robinson. Davis in [2] gives a complete account of the results that
were put together in order to prove that Hilbert’s tenth problem is unsolvable.
1

In fact, the above solution was found on September 6, 2019 by Andrew Sutherland of MIT and Andrew Booker of Bristol University;

http://news.mit.edu/2019/answer-life-universe-and-everything-sum-three-cubes-mathematics-0910.

Version: November 21, 2019 at 1:43am

5/13

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

3 The Church-Turing Thesis: Deﬁnition of Algorithm
The Church-Turing thesis connects what we intuitively believe is an algorithm to what is formally deﬁned as
an algorithm. Alonzo Church made this connection with what is known as λ-calculus2 . Alan Turing made this
connection with Turing machines. Both published their work in the same year (1936), the two deﬁnitions are
equivalent (from the point of view of computation), and thus tribute is given to both.
In particular, we have the situation shown in Figure 3.
Intuitive notion
of algorithms

Formal description
of a Turing machine

equals

Figure 3: The Church-Turing thesis.

4 Complexity Theory
Complexity theory studies decidable languages and attempts to further reﬁne their classiﬁcation in diﬀerent
complexity classes.
This way, we have problems that belong to the complexity class P, problems that belong to the complexity
class NP, problems that belong to the complexity class L, problems that belong to the complexity class NL,
problems that belong to complexity class PSPACE, problems that belong to the complexity class EXPT IME,
problems that belong to the complexity class EXPSPACE, and many-many others.3
In particular, regarding P, which contains all the problems (languages) that are decidable by a deterministic
TM in polynomial time, we are used to discussing about further reﬁnements. For example, a sorting algorithm
A1 that is running
in time O (n log(n)) is, in principle, preferable to a sorting algorithm A2 that is running

in time O n2 . In fact, there is a lower bound of Ω (n log(n)) for sorting algorithms that are based on
comparisons - we saw this in class in the beginning of the semester. Thus A1 is asymptotically optimal and in
fact the running time for A1 in this example would be Θ (n log(n)).

5 Encoding
We want to be able to encode diﬀerent objects and pass them as input to TMs. In this direction, for an object
O we will denote its encoding as hOi.
For example, we may want to encode the graph
G shown in Figure 4. Then, a reasonable encoding is
2
4
the following one:
hGi = ({1, 2, 3, 4} , {(1, 2), (2, 3), (2, 4), (3, 4)}) .
1
In other words, G is described as a pair (a 2-tuple),
where the ﬁrst element of that pair is the set of vertices of G and the second element of the pair is the
set of edges of G.
As another example, consider the multivariate polynomial

3
Figure 4: A graph.

p(x, y, z) = x3 + y3 + z3 − 42
2

See functional programming for the evolution of λ-calculus.
Complexity Zoo (https://complexityzoo.uwaterloo.ca/Complexity_Zoo) has 544 diﬀerent classes of languages at
the time of this writing.
3

6/13

Version: November 21, 2019 at 1:43am

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

which corresponds to (1). One reasonable encoding for p would be:
hpi = {(1, (3, 0, 0)), (1, (0, 3, 0)), (1, (0, 0, 3)), (−42, (0, 0, 0))} .
In other words we represent p as a set, where each element of that set is a monomial. We denote monomials
as pairs where the ﬁrst element denotes the coeﬃcient of the monomial and the second element is a triple
indicating the degrees in which the diﬀerent variables x, y, and z appear in the monomial.

5.1

Feeding Input into Turing Machines

Assume we want to design a TM for recognizing the language
Lpoly,3 = { hgi | g is a polynomial in 3 variables with integer coeﬃcients, that has an integral root} .
We can do so with the following high-level description of a TM M3 .
M3 = “On input hpi, the encoding of a polynomial p:
1. Set b ← 0.
2. Increase b by 1.
3. Consider iteratively all the triples (x, y, z) such that the absolute value of x, y, and z is at most b. (There
are (2b + 1)3 such triples.) For each triple generated test if it is a root of p.
• If some triple is a root, accept.
• Otherwise, go to step 2.”
In the above algorithm, where M3 receives the input hpi, M3 ﬁrst tries to determine if the input is some
proper encoding of a polynomial in three variables. If this is not the case, then M3 will reject. Such a test
can be made easily. First of all, the input has to be a set of monomials. So, M3 checks that indeed we have a
set and each member of a set is a pair. Once this is established, then with another pass of the head from left
to right we make sure that the ﬁrst coordinate is an integer and the second coordinate of each monomial is a
triple of non-negative integers. (Finally, a last pass may require that all the monomials are distinct with each
other, so that our job is easier and we do not have to merge diﬀerent monomials into one.) If the input passes
all these tests, then it is the encoding of some polynomial in three variables.
Then we can move on with stage 1 and the rest of the execution steps dictated by M3 .

5.2

Encoding Turing Machines

Once we have a description of a TM, as for example M3 above, then we can encode this description into hM3 i.
Of course the best way to think about such an encoding hMi of a TM M, is that we are really encoding the
7-tuple that corresponds to the formal description of the Turing machine M. However, as we have discussed,
we will hardly ever give such detailed information on paper and we will usually give either an implementation
description, or a high-level description of the Turing machine – realizing however that, if we want to, we can
indeed use such a description and obtain the most detailed description, the formal description.
Having such an encoding hMi of a Turing machine M is interesting, because we will be able to pass it as
part of the input to another Turing machine M ′ which will be able to simulate M in a manner similar to how
modern computers execute diﬀerent computer programs.
Version: November 21, 2019 at 1:43am

7/13

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

Exercises
Exercise 1. Let Σ = {0, 1}. Give a DFA M such that L(M) = L1 = {0, 01, 001, 011}.
Exercise 2. Let Σ = {0, 1}. Do the following.
(a) Give a DFA M such that L(M) = L2 = 0∗ 1∗ .
(b) Give a context-free grammar G that generates L2 .
(c) Give a high-level description of a Turing machine that decides L2 .
Exercise 3. Let Σ = {0, 1}. Do the following.
(a) Give a context-free grammar for the language L3 = { 0n 1n | n ⩾ 0 }.
(b) Use the pumping lemma for regular languages and show that L3 is not a regular language.
Exercise 4. Let Σ = {0, 1}. Do the following.
(a) Use the pumping lemma for context-free languages and show that L4 = { 0n 1n 2n | n ⩾ 0 } is not a
context-free language.
(b) Give an implmementation description of a Turing machine that decides L4 .
Exercise 5. Let h(x) = αk xk + · · · + α1 x + α0 be a polynomial that has a real root at x = x0 . Show that,
|x0 | < (k + 1) ·

max{|α0 |, |α1 |, . . . , |αk−1 |, |αk |}
.
|αk |

References
[1] Thomas H. Cormen, Cliﬀord Stein, Ronald L. Rivest, and Charles E. Leiserson. Introduction to Algorithms.
McGraw-Hill Higher Education, 2nd edition, 2001.
[2] Martin Davis. Hilbert’s tenth problem is unsolvable. The American Mathematical Monthly, 80(3):233–269,
1973.
[3] Yuri Matijasevič. Enumerable sets are diophantine (russian). In Dokl. Akad. Nauk SSSR, volume 191, pages
279–282. Improved English translation: Soviet Math. Doklady, 11 (1970) 354-357, 1970.
[4] Yuri Matijasevič. Diophantine representation of recursively enumerable predicates. In Studies in Logic and
the Foundations of Mathematics, volume 63, pages 171–177. Elsevier, 1971.
[5] Maurice Mignotte. Mathematics for computer algebra. Springer-Verlag, New York, 1991.
[6] Michael Sipser. Introduction to the Theory of Computation. Course Technology, Boston, MA, 3rd edition,
2013.

8/13

Version: November 21, 2019 at 1:43am

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

A A Quick Tour on Asymptotic Complexity
A.1

Preliminaries

Deﬁnitions drawn from [1, Section 3.1, pp. 41-50].

A.2

Θ (g(n)) = {f(n) | ∃c1 , c2 , n0 > 0 such that 0 ⩽ c1 g(n) ⩽ f(n) ⩽ c2 g(n) ∀n ⩾ n0 } .

(2)

O (g(n)) = {f(n) | ∃c, n0 > 0 such that 0 ⩽ f(n) ⩽ cg(n) ∀n ⩾ n0 } .

(3)

Ω (g(n)) = {f(n) | ∃c, n0 > 0 such that 0 ⩽ cg(n) ⩽ f(n) ∀n ⩾ n0 } .

(4)

Dropping Lower Order Terms of Polynomials

O Notation
P
i
Assume that f(n) = O (g(n)), where g(n) ∈ R[n] with g(n) = k
i=0 αi n , 1 ⩽ k, n ∈ N, αi ∈ R with
i ∈ {0, 1, . . . , k − 1}, and αk = 1. By (3) there exist c, n0 > 0 such that
0 ⩽ f(n) ⩽ c ·

k
X

αi ni

∀n ⩾ n0 .

(5)

i=0

We now want to show that f(n) ⩽ c ′ · nk , for some c ′ > 0 and ∀n ⩾ n1 . It is enough to satisfy
k
X

c ′ · nk ⩾ c ·

αi ni

∀n ⩾ n1 ⩾ n0 .

(6)

i=0

However, nk > 0, so dividing both sides of (6) we want to ﬁnd a c ′ such that
c′ ⩾ c ·

k
X
i=0

h
α0 i
αk−1 αk−2
.
+
+
·
·
·
+
αi ni−k = c · 1 +
n
n2
nk

On the other hand,
c·

k
X

i−k

αi n

=

c·

i=0

⩽ c·

⩽ c·

k
X

αi ni−k

i=0
k
X

|αi | ni−k

i=0
k
X

|αi |

i=0

It therefore follows that selecting
c′ = c ·

k
X

|αi |

i=0

and setting n1 = n0 it holds that f(n) ⩽ c ′ · nk for all n ⩾ n0 , and hence we can neglect all the lower
order terms that
 appeared in the original polynomial g(n). In other words, we can simply write down that
f(n) = O nk .
Version: November 21, 2019 at 1:43am

9/13

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

Ω Notation
Pk
i
Let f(n) = Ω (g(n)), where g(n) ∈ R[n] with g(n) =
i=0 αi n , 1 ⩽ k, n ∈ N, αi ∈ R with i ∈
{0, 1, . . . , k − 1}, and αk = c > 0. By (4) there exists n0 > 0 such that
0⩽

k
X

αi ni ⩽ f(n)

∀n ⩾ n0 .

(7)

i=0

We now want to show that f(n) ⩾ c ′ · nk , for some c ′ > 0 and ∀n ⩾ n1 . First, let n⋆ be as the bound in
Proposition 1, i.e.
max{|α0 |, |α1 |, . . . , |αk−1 |}
.
n⋆ = 1 +
c
Then, for the largest real root ρ⋆ of g(n) it holds ρ⋆ ⩽ n⋆ , after which point g(n) is strictly positive. We can
therefore rewrite (7) as
k
X
αi ni ⩽ f(n) ∀n ⩾ max{n0 , n⋆ + 1} .
(8)
0<
i=0

Now consider the polynomial h(n) = 2c nk , where c = αk in g(n) above. Therefore the diﬀerence
Pk−1
d(n) = g(n) − h(n) = c2 nk + i=0
αi ni is a polynomial of degree k, with coeﬃcient for the largest power
equal to half of the respective one in g(n) and the rest of the coeﬃcients agree with g(n). We now apply
Proposition 1 to d(n) and it follows that the largest root ρ⋆⋆ is at most
1+2·

max{|α0 |, |α1 |, . . . , |αk−1 |}
.
c

Setting n⋆⋆ = 2 + 2 · max{|α0 |,|αc1 |,...,|αk−1 |} = 2n⋆ , it follows that d(n) > 0 for all n ⩾ 2n⋆ . Moreover, for
every n ⩾ 2n⋆ both g(n) and h(n) are strictly positive, and since d(n) is also positive we have
0 < h(n) < g(n)

∀n ⩾ 2n⋆ .

As a consequence, we can rewrite (7) as
k

0<

X
c
· nk <
αi ni ⩽ f(n)
2

∀n ⩾ max{n0 , 2n⋆ } .

(9)

i=0

It therefore follows that we can neglect all the lower
 order terms that appeared in the original polynomial
g(n) and hence simply write down f(n) = Ω nk .

A.3

The Substitution Method

The substitution method for solving recurrences consists of two steps:
1. Guess the form of the solution.
2. Use mathematical induction to ﬁnd constants in the form and show that the solution works. The base
case of induction is called the boundary condition.
The method is used both for lower bounds as well as upper bounds.
10/13

Version: November 21, 2019 at 1:43am

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

A.3.1

A Detailed Example

Consider the recurrence relation
T (n) = 2 · T (⌊n/2⌋) + n
T (1) = 1

.

(10)

We want to show that T (n) = Θ (n lg n).
Upper Bound. Our induction hypothesis is T (n) is O (n lg n) or T (n) ⩽ cn lg n for some constant c,
independent of n. Assume the hypothesis holds for all m < n and substitute:
T (n) ⩽
⩽
=
=
⩽

2(c⌊n/2⌋ lg(⌊n/2⌋)) + n (Induction Hypothesis)
cn lg(n/2) + n
((∀n ∈ N) (⌊n/2⌋ ⩽ n/2))
cn lg n − cn lg 2 + n
cn lg n − (c − 1)n
cn lg n ,

where the last inequality was obtained by requiring −(c − 1)n ⩽ 0 ⇔ c ⩾ 1.
For the base case we would like to show
T (1) ⩽ c · 1 · lg 1 = c · 0 = 0 ,
which is impossible when T (1) > 0. However, we only want to show that T (n) ⩽ cn lg n for suﬃciently large
values of n; i.e. ∀n ⩾ n0 . Hence, we will try n0 > 1. First, by (10) we have T (2) = 4 and T (3) = 5. Hence,
we want to satisfy simultaneously4
4 = T (2) ⩽ c · 2 · lg 2
=⇒
5 = T (3) ⩽ c · 3 · lg 3

c ⩾ 2
=⇒ c ⩾ 2 .
5
c ⩾ 3 lg
3 ≈ 1.052

As a conclusion, we have proved that T (n) ⩽ 2n lg n for all n ⩾ 2.
Lower Bound. For the lower bound we will break the proof into two parts. First, we will give a lower
bound for all the values of n which are powers of 2, and we will also show that the function T (n) is a strictly
increasing sequence. In the end we will give a function g(n) for the lower bound such that g(n) will take
diﬀerent values when n is a power of 2, and remain constant to the latest value until the next power of 2.
Powers of 2. We want to show T (n) ⩾ cn lg n. Assume that n is a power of 2. We have:
T (n) ⩾
=
=
=
⩾

2(c⌊n/2⌋ lg(⌊n/2⌋)) + n (Induction Hypothesis)
cn lg(n/2) + n
(n is a power of 2)
cn lg n − cn lg 2 + n
cn lg n − (c − 1)n
cn lg n ,

where the last inequality was obtained by requiring −(c − 1)n ⩾ 0 ⇔ c ⩽ 1.
We also want to satisfy the boundary condition (T (2) = 4).
T (2) ⩾ c · 2 · lg 2 = 2 · c
In other words, it is enough if c ⩽ 2. By the requirement c ⩽ 1 for the induction step we choose c = 1.
4

We have to check both T (2) and T (3) simultaneously because of the ﬂoor function in the recursive equation.

Version: November 21, 2019 at 1:43am

11/13

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

T (n) Is Strictly Increasing. We will prove this claim again by induction. For the base case note that
T (1) = 1 < 4 = T (2). Assuming that for all k ⩽ n it holds T (k) > T (k − 1), we want to show that
T (n + 1) > T (n). We distinguish cases for n + 1.
(n + 1) is odd: Say n + 1 = 2m + 1. Then, it holds
T (2m + 1) =
=
=
>

2T (⌊(2m + 1)/2⌋) + 2m + 1 (Deﬁnition)
2T (m) + 2m + 1
T (2m) + 1
(Deﬁnition)
T (2m) .

(n + 1) is even: Say n + 1 = 2m. Then, it holds
T (2m) =
=
>
=
=
>

2T (⌊(2m)/2⌋) + 2m
(Deﬁnition)
2T (m) + 2m
2T (m − 1) + 2m
(Induction Hypothesis)
2T (⌊(2m − 1)/2⌋) + (2m − 1) + 1
T (2m − 1) + 1
(Deﬁnition)
T (2m − 1) .

Note that the induction hypothesis is used only when (n + 1) is even!
Putting Everything Together. Consider the binary expansion of n > 0; i.e. n =
the previous two paragraphs we deﬁne the function
g(n) =

P∞

i
i=0 bi 2 . Based on

n · lg n , n is a power of 2,
P
i
k · 2k
, otherwise and k is the maximum i for which it holds n = ∞
i=0 bi 2

.

(11)

In other words, g(n) has “jumps” on the values that it takes when n is a power of 2, and remains constant
until the next power of 2. From the previous analysis it now follows that T (n) = Ω (g(n)).
A Figure. Figure 5 presents graphically the sequence T (n), as well as the functions 2 · n · lg n and g(n)
which we deﬁned for the lower bound for n ∈ {1, 2, . . . , 65}. The ﬁgure also shows a looser lower bound
derived from g(n). Can you guess which function is this one ?
A.3.2

Wrong Approaches

Consider the recurrence

T (n) = T (⌊n/2⌋) + T (⌈n/2⌉) + 1
T (1) = 1

.

(12)

Our guess is O (n), so we try to show T (n) ⩽ cn.
T (n) ⩽ c⌊n/2⌋ + c⌈n/2⌉ + 1
= cn + 1
which does not imply that T (n) ⩽ cn, for any c.
Remark 1. Note that this is diﬀerent compared to dropping lower order terms from a polynomial as in Section
A.2. The reason is that here we try to determine the order of T (n) and hence we have to stick on the exact statement
that we want to prove. Once this step is over and we have actually determined the order of T (n), we can simplify
our answer based on Section A.2 by dropping lower order terms.
12/13

Version: November 21, 2019 at 1:43am

CS 3823 - Theory of Computation: Remarks on Turing Machines, Languages, and Complexity

500
T(n)
Upper Bound
Lower Bound 1
Lower Bound 2

400

300

200

100

0

10

20

30

40

50

60

n

Figure 5: With boxes we can see the actual sequence T (n), while with dashed lines we can see the lower and
upper bound functions we have derived. The solid line gives a looser lower bound. Can you guess which
function is this one ?
As another example, consider the recurrence given in (10). The following argument is wrong. We guess
that the recurrence has T (n) ⩽ cn and try to “prove” that it is indeed O (n).
T (n) ⩽ 2(c⌊n/2⌋) + n
⩽ cn + n
= O (n) ,
since c is a constant.
Remark 2. The error is at the last step, where again we have not proved the exact form that we wanted to;
i.e. T (n) ⩽ cn.

Version: November 21, 2019 at 1:43am

13/13

</details>
