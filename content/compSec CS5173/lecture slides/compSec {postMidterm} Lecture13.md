---
title: "compSec {postMidterm} Lecture13"
---

# compSec {postMidterm} Lecture13

![[compSec CS5173/lecture slides/compSec {postMidterm} Lecture13.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture13.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture13.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Basic Number Theory II

OUTLINE LAST TIME
• GCD
• Relatively prime
• (Extended) Euclid’s Algorithm
• Modular Operations/Laws
• Multiplicative Inverse

2

PRIMES AND FACTORS
• a is prime if it has no non-trivial factors
‒ examples: 2, 3, 5, 7, 11, 13, 17, 19, 31,…

• Theorem: there are infinitely many primes
• (Factorization) Any integer a > 1 can be factored in a
unique way as p1a1 • p2a2 • … ptat

‒ where all p1>p2>…>pt are prime numbers and where each ai > 0
Examples:
91 = 131×71
11,011 = 131 ×112 ×71

3

GREATEST COMMON DIVISOR (GCD)
• gcd(a,b) = max{k | k|a and k|b}
Example: gcd(60,24) = 12,

gcd(a,0) = a

• Properties:

‒ if 0 ≤ n, then gcd(an, bn) = n*gcd(a,b)
‒ gcd(a,0) = a
‒ If gcd(a,b)=1, a and b are relatively prime.
‒ For all positive integers d, a, and b, if d | ab and gcd(a,d) = 1
• then d|b

‒ Example:

• 3 | 4*9, gcd(3, 4) = 1,  3 | 9
4

EUCLID’S ALGORITHM FOR GCD
•
•

Insight:
gcd(x, y) = gcd(y, x mod y)
Procedure euclid(x, y):
r[0] = x, r[1] = y, n = 1;
while (r[n] != 0) {
n = n+1;

}

r[n] = r[n-2] % r[n-1];

return r[n-1];
5

EXTENDED EUCLID’S ALGORITHM
• Let LC(x,y) = {ux+vy : x,y ∈ Z} be the set of linear
combinations of x and y
‒ u and v are intergers (can be negative).

• Theorem: if x and y are any integers > 0, then gcd(x,y) is the
smallest positive element of LC(x,y)
• Euclid’s algorithm can be extended to
compute u and v, as well as gcd(x,y)

6

MODULAR ARITHMETIC
• Modular addition

‒ [(a mod n) + (b mod n)] mod n = (a+b) mod n

Example: [16 mod 12 + 8 mod 12] mod 12 = (16 + 8) mod 12 = 0

• Modular subtraction

‒ [(a mod n) – (b mod n)] mod n = (a – b) mod n

Example: [22 mod 12 - 8 mod 12] mod 12 = (22 - 8) mod 12 = 2

• Modular multiplication

‒ [(a mod n) × (b mod n)] mod n = (a × b) mod n

Example: [22 mod 12 × 8 mod 12] mod 12 = (22 × 8) mod 12 = 8
7

MULTIPLICATIVE INVERSES
• Don’t always exist!

‒ Ex.: there is no z such that 6 × z = 1 mod 8 (m = 6 and n = 8)

z
6×z
6×z mod 8

0
0
0

1
6
6

2
12
4

3
18
2

4
24
0

5
30
6

6
36
4

7
42
2

• A positive integer m ∈Zn has a multiplicative inverse
m-1 mod n if and only if (iff) gcd(m, n) = 1, i.e., m and n
are relatively prime
⇒ If n is a prime number, then all positive elements in Zn
have multiplicative inverses

8

Modular Exponentiation (Power)

MODULAR POWERS
Example: show the powers of 3 mod 7
i
3i
3i mod 7

0
1
1

1
3
3

2
9
2

3
27
6

And the powers of 2 mod 7
Example: powers of 2 mod 7
i
0 1 2 3
2i
1 2 4 8
2i mod 7
1 2 4 1

4
81
4

4
16
2

5
243
5

5
32
4

6
64
1

6
729
1

7
2187
3

8
6561
2

7
128
2

8
256
4

9
512
1
10

FERMAT’S “LITTLE” THEOREM
• If p is prime
…and a is a positive integer not divisible by p,
…then ap-1 ≡ 1 (mod p)
Example: 11 is prime, 3 not divisible by 11,
so 311-1 = 59049 (=5368 * 11 + 1) ≡ 1 (mod 11)
Example: 37 is prime, 51 not divisible by 37,
so 5137-1 ≡ 1 (mod 37)

11

PROOF OF FERMAT’S THEOREM
• Observation:

‒ {a mod p, 2a mod p, …, (p-1)a mod p} = {1, 2, …, (p-1)}.

Example: a = 3, p = 7
a mod p = 3
2a mod p = 6
3a mod p = 2
4a mod p = 5
5a mod p = 1
6a mod p = 4
12

PROOF OF FERMAT’S (CONT’D)
• First,

[(a mod p) ×(2a mod p) ×… ×((p-1)a mod p)] mod p
= [a ×2a ×.. ×(p-1)a] mod p (modular multiplication)
= (p-1)! × ap-1 mod p

• From observation:

‒ {a mod p, 2a mod p, …, (p-1)a mod p} = {1, 2, …, (p-1)}.
Then, [(a mod p) ×(2a mod p) ×… ×((p-1)a mod p)] mod p =
[1 × 2 × 3 … × (p-1)] mod p = (p-1)! mod p

• Thus, ap-1 ≡1 mod p.

13

EXAMPLE
• Compute the following
‒ 36 mod 7
‒ 1310 mod 11

• p is prime
• a is a positive integer not divisible by p,
• Then: ap-1 mod p = 1

14

ZN VS ZN*
• Zn is the set {0, 1, 2, …, n-1}, the space induced by the
(mod n) operator.
• Zn* is the set with all positive integers less than n and
relatively prime to n.
‒ a subset of Zn

• Q: Zn*=? when n=5.

15

THE TOTIENT FUNCTION
•
•

φ(n) = |Zn*|: the number of elements in Zn*.

‒

Zn* is the set of integers less than n and relatively prime to n.

Examples

‒

‒

•
•
•
•
•
•
•
•

φ(4)=?

GCD(1, 4) = ?
GCD(2, 4) = ?
GCD(3, 4) = ?

φ(6)=?

GCD(1, 6) = ?
GCD(2, 6) = ?
GCD(3, 6) = ?
GCD(4, 6) = ?
GCD(5, 6) = ?

16

PROPERTIES OF TOTIENT FUNCTION
a) if n is prime, then φ(n) = n-1
Example: φ(7) = 6
b) if n = pα, where p is prime and α > 0, then
φ(n) = (p-1)*pα-1
Example: φ(25) = φ(52) = 4*51 = 20
c) if n=p∗q, and p, q are relatively prime, then
φ(n) = φ(p)*φ(q)
Example: φ(15) = φ(5*3) = φ(5) * φ(3) = 4 * 2 = 8

17

EXERCISE I
• φ(13)=?
• φ(19)=?

18

EXERCISE II
• φ(20)=?
• φ(21)=?

Tip:
if n=p∗q, and p, q are relatively
prime, then
φ(n) = φ(p)*φ(q)

19

EXERCISE III
• φ(500)=?

φ(500)
=φ(125) * φ(4)
= φ(53) * 2
=(5-1) * 52 * 2
=4 * 25 * 2
=200
20

COMPUTING TOTIENT FUNCTION
• If n is very large, It is generally hard to find the value of φ(n).
‒ Finding φ(n) requires factoring n first
‒ Suppose that n is some number on the order of 21024, it is
computationally difficult to factor n.
‒ There is no simple/efficient method!

Key: factoring a large number is
computationally hard!

21

EULER’S THEOREM
• For every a and n that are relatively prime,
aø(n) ≡ 1 mod n
Example: 3 φ(10) ≡ 1 mod 10 (a = 3, n = 10, which are
relatively prime)
Verify:

φ(10) = φ(2*5) = φ(2) * φ(5) = 1*4 = 4
3 φ(10) = 34 = 81 mod 10 =1

Example: 2 φ(11) ≡ 1 mod 11 (a = 2, n = 11, which are
relatively prime)
Verify:

φ(11) = 11-1 = 10
2 φ(11) = 210 = 1024 (93*11+1) mod 11 = 1

22

MORE EULER…
• Variant: for all n, all a in Zn*, and all non-negative k,
a kφ(n)+1 ≡ a mod n
Example: for n = 20, a = 7, φ(n) = 8, and k = 3:
7 3*8+1 ≡ 7 mod 20
• Generalized Euler’s Theorem: for n = pq (p and q distinct
primes) and for all a in Zn, and all non-negative k,
a kφ(n)+1 ≡ a mod n
Example: for n = 15, a = 6, φ(n) = 8, and k = 3:
6 3*8+1 ≡ 6 mod 15
23

EULER’S VS FERMAT LITTLE THEOREMS
• For every a and n that are relatively prime,
aø(n) ≡ 1 mod n
• If n is prime,
an-1 ≡ 1 mod n

Fermat Little Theorem is a special
case for Euler’s Theorem!
24

MODULAR EXPONENTIATION
• ax mod n = ax mod φ(n) mod n
‒ a and n are relatively prime

Example: 57 mod 6 = 57 mod φ(6) mod 6
= 57 mod 2 mod 6 = 5
Example: 2101 mod 33 = 2101 mod φ(33) mod 33
= 2101 mod 20 mod 33
= 2 mod 33
=2

25

EXERCISE
• 210000 mod 33 = ?

= 210000 mod φ(33) mod 33
= 210000 mod 20 mod 33 = 20 mod 33 = 1

Using: ax mod n = ax mod φ(n) mod n

26

THE POWERS OF AN INTEGER, MODULO N
• Given a, consider equation: am ≡ 1 mod n
‒ m can be 1, 2, 3, 4, …
‒ Is it possible to find a value of m to satisfy the equation?

• Yes. If a and n are relatively prime, there is at least
one integer m!
• Example: for a = 3 and n = 7, what is m?
m
3m mod 7

1
3

2
2

3
6

4
4

5
5

6
1

7
3

8
2

9
6

27

THE POWER (CONT’D)
• The smallest positive exponent m for which the
equation
am ≡ 1 mod n
holds is referred to as…
‒ the order of a (mod n), or
‒ the length of the period generated by a

m
3m mod 7

1
3

2
2

3
6

4
4

5
5

6
1

7
3

8
2

9
6

28

• If we fix n, and change a in am mod n for m = 1, 2, 3, 4, …
• Example: n=19

 order

UNDERSTANDING ORDER OF A (MOD N)

a

a2

a3

a4

a5

a6

a7

a8

a9

a10

a11

a12 a13 a14 a15 a16 a17 a18

1

1

1

1

1

1

1

1

1

1

1

1

1

1

1

1

1

1

1

2

4

8

16

13

7

14

9

18

17

15

11

3

6

12

5

10

1

18

4

16

7

9

17

11

6

5

1

4

16

7

9

17

11

6

5

1

9

7

11

1

7

11

1

7

11

1

7

11

1

7

11

1

7

11

1

3

8

7

18

11

12

1

8

7

18

11

12

1

8

7

18

11

12

1

6

9

5

7

6

16

11

4

17

1

9

5

7

6

16

11

4

17

1

9

18

1

18

1

18

1

18

1

18

1

18

1

18

1

18

1

18

1

2
29

OBSERVATIONS ON THE PREVIOUS TABLE
• n = 19, then φ(n) = 18
• Some of the sequences are of length 18

‒ e.g., the base a=2 generates (via powers) all members of
Zn*
‒ The base is called the primitive root (mod n)
‒ The base is also called the generator when n is prime
• a, a2, …, an-1 are all distinct numbers mod n in Zn*

• Key: No simple general formula to compute primitive
roots modulo n
‒  computational difficulty

30

SQUARE ROOTS
• x is a non-trivial square root of 1 mod n if it satisfies
the equation x2 ≡ 1 mod n, but x is neither 1 nor n-1.
‒ Why n-1 is always a square root of 1 mod n?

Ex: 6 is a square root of 1 mod 35 since 62 ≡ 1 mod 35
• Theorem: if there exists a non-trivial square root of 1
mod n, then n is not prime
‒ i.e., prime numbers will not have non-trivial square roots

31

ROOTS (CONT’D)
• If n = 2α0 p1α1 p2α2 … pkαk , where p1…pk are distinct primes
> 2, then the number of square roots (including trivial
square roots) are:
‒ 2k if α0 ≤ 1
Example: for n = 70 = 21 * 51 * 71 , α0 = 1, k = 2, and
the number of square roots = 22 = 4 (1,29,41,69)
‒ 2k+1 if α0 = 2
Example: for n = 60 = 22 * 31 * 51, k = 2,
the number of square roots = 23 = 8 (1,11,19,29,31,41,49,59)
‒ 2k+2 if α0 > 2
Example: for n = 24 = 23 * 31, k = 1,
the number of square roots = 23 = 8 (1,5,7,11,13,17,19,23)
32

DISCRETE LOGARITHMS
• For a primitive root a of a number p, where
ai ≡ b mod p, for some 0 ≤ i ≤ p-1

‒ the exponent i is referred to as the index of b for the base a
(mod p), denoted as inda,p(b)
• sometime also denoted as dloga,p(b)

‒ i is also referred to as the discrete logarithm of b to the base a,
mod p

33

LOGARITHMS (CONT’D)
• Example: a=2 is a primitive root of p=19.
it is straightforward to get b = ai mod p
i

b

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

2

4

8

16

13

7

14

9

18

17

15

11

3

6

12

5

10

• How to get the discrete logarithm i from b; e.g., ind2,19 (9)

34

COMPUTING DISCRETE LOGARITHMS
• However, given a, b, and p, computing i = inda,p(b) is
generally computationally difficult

35

COMPUTING (CONT’D)
• Some properties of discrete logarithms
‒ inda,p(1) = 0 because a0 mod p = 1
‒ inda,p(a) = 1 because a1 mod p = a

φ(p), not p!

‒ inda,p(yz) = (inda,p(y) + inda,p(z)) mod φ(p)
Example: ind2,19(5*3) = (ind2,19(5) + ind2,19(3)) mod 18 = 11
‒ inda,p(yr) = (r inda,p(y)) mod φ(p)
Example: ind2,19(33) = (3*ind2,19(3)) mod 18 = 3

36

DIFFICULTIES IN MODULAR ARITHMETIC
• Factoring large numbers
• Computing Totient function
‒ Need factoring first

• Obtaining primitive roots
• Discrete logarithm
• Public key cryptography design should leverage all
these difficulties!

38

</details>
