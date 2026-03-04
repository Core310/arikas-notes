---
title: "compSec {postMidterm} Lecture14"
---

# compSec {postMidterm} Lecture14

![[compSec CS5173/lecture slides/compSec {postMidterm} Lecture14.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture14.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture14.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
RSA

REVIEW OF PUBLIC KEY
• Encryption:
plaintext

encryption

ciphertext

Public key

decryption

plaintext

Private key

• Authentication
Plaintext

Sign
Private Key

Plaintext with
digital signature

Verify

Valid /
Not Valid

Public Key
2

PUBLIC KEY VS. SYMMETRIC KEY
Symmetric key

Public key

Two parties MUST trust each
other

Two parties DO NOT need to trust each
other

Both share same key
(or one key is computable
from the other)

Two separate keys: a public and a
private key

Typically faster

Typically slower

Examples:

Examples:

DES, RC5, AES, …

RSA, DSA, ECC…

3

COMPANY A’S PROBLEM I
• Company A is a big web service company with over
10,000 employees.
• The president Bob wants to make sure that all
employees can verify the authenticity of the
announcement emails that he sends.
• Q: How to ensure authenticity of these emails.

4

COMPANY A’S PROBLEM II
• Company A is accepting vulnerability report of their web
system from the public.
• They need a design that someone can successfully send
the report of a potential vulnerability via email to them.
• Q: How to ensure the confidentiality of reports?

5

COMPANY A’S PROBLEM III
• Company A provides an on-line chat service for
vulnerability report.

‒ Requirement 1: confidentiality.
‒ Requirement 2: efficiency because there will be a number of
message exchanges.

• Q: How to satisfy both requirements?

6

GREATEST COMMON DIVISOR (GCD)
• gcd(a,b) = max{k | k|a and k|b}
Example: gcd(60,24) = 12,

gcd(a,0) = a

• Properties:

‒ if 0 ≤ n, then gcd(an, bn) = n*gcd(a,b)
‒ If gcd(a,b)=1, a and b are relatively prime.
‒ For all positive integers d, a, and b, if d | ab and gcd(a,d) = 1
• then d|b

‒ Example:

• 3 | 4*9, gcd(3, 4) = 1,  3 | 9

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

• A positive integer m ∈Zn has a multiplicative inverse m-1
mod n if and only if (iff) gcd(m, n) = 1, i.e., m and n are
relatively prime
⇒ If n is a prime number, then all positive elements in Zn have
multiplicative inverses

8

ALGORITHMS
• Euclid Algorithm
• Extended Euclid Algorithm

9

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

10

PROPERTIES OF TOTIENT FUNCTION
a) if n is prime, then φ(n) = n-1
Example: φ(7) = 6
b) if n = pα, where p is prime and α > 0, then
φ(n) = (p-1)*pα-1
Example: φ(25) = φ(52) = 4*51 = 20
c) if n=p∗q, and p, q are relatively prime, then
φ(n) = φ(p)*φ(q)
Example: φ(15) = φ(5*3) = φ(5) * φ(3) = 4 * 2 = 8

11

MODULAR EXPONENTIATION
• ax mod n = ax mod φ(n) mod n
‒ a and n are relatively prime

Example: 57 mod 6 = 57 mod φ(6) mod 6
= 57 mod 2 mod 6 = 5
Example: 2101 mod 33 = 2101 mod φ(33) mod 33
= 2101 mod 20 mod 33
= 2 mod 33
=2

12

DIFFICULTIES IN MODULAR ARITHMETIC
• Factoring large numbers
• Computing Totient function
‒ Need factoring first

• Obtaining primitive roots
• Discrete logarithm
• Public key cryptography design should leverage all
these difficulties!

13

RSA (RIVEST, SHAMIR, ADLEMAN)
• The most popular public key method

‒ provides both public key encryption and digital signatures

• Variable key length (1024 bits or greater)

‒ What are lengths for symmetric key schemes?

• Variable plaintext block size

‒ plaintext block size must be smaller than key size
‒ ciphertext block size is same as key size

14

GENERATING A PUBLIC/PRIVATE KEY PAIR
•
•
•
•

Find large primes p and q
Let n = p*q

•
•

do not disclose p and q!
φ(n) = ???

Choose an e that is relatively prime to φ(n)

•

public key = <e,n>

Find d = multiplicative inverse of e mod φ(n) (i.e., e*d = 1
mod φ(n)) (how?)

• private key = <d,n>
• Q: Why choose e relatively prime to φ(n)?

15

RSA OPERATIONS
• For plaintext message m (treated as large a number,
why? ) and ciphertext c
Encryption: c = me mod n, m < n
Decryption: m = cd mod n
Signing: s = md mod n, m < n

e – public key
d – private key

Verification: m = se mod n
16

DECRYPTION AND DESCRIPTION FIGURE
Private key d

Public key e
m

encryption
me mod n
m<n

c=me mod n

decryption
cd mod n

m’ = (me mod n)d mod n
= (med mod n) mod n
= (med mod φ(n) mod n) mod n
= (m1 mod n) mod n = m
17

PROOF (D(E(M)) = M)
• Given

‒ public key = <e, n> and private key = <d, n>
‒ n =p*q, φ(n) =(p-1)(q-1)
‒ e*d ≡ 1 mod φ(n)

• If encryption is c = me mod n, decryption…
= cd mod n
=(me)d mod n = med mod n
=m mod n
=m

(digital signature proof is similar)

18

RSA EXAMPLE: ENCRYPTION AND SIGNING
• Choose p = 23, q = 11 (both primes)
‒ n = p*q = 253
‒ φ(n) = (p-1)(q-1) = 220

• Choose e = 39 (relatively prime to 220)
‒ public key = <39, 253>

• Find e-1 mod 220 = d = 79
(note: 39*79 ≡ 1 mod 220)
‒ private key = <79, 253>

19

EXAMPLE (CONT’D)
• Suppose plaintext m = 80
Encryption
c = 8039 mod 253 = 37

(c = me mod n)

Decryption
m = 3779 mod 253 = 80

(cd mod n)

(Efficient methods are available to compute modular exponentiation)
Signing (in this case, for entire message m)
s = 8079 mod 253 = 224
(s = md mod n)
Verification
m = 22439 mod 253 = 80

(se mod n)
20

DISCUSSIONS ON RSA: I
Step 1: Find very large primes p and q, and let n = p*q
Q: Primes are so rare, can we find enough prime numbers?
‒ 2, 3, 5, 7, 11, 13, 17, 19, 23, 31, …
‒ Yes. There are sufficiently many primes that make exhaust
search computationally infeasible.
‒ Recent advancement of twin primes:
• There are infinitely many primes with bounded gap!

21

DISCUSSIONS ON RSA: II
Step 1: Find very large primes p and q, and let n = p*q
Q: Is it computationally feasible to find such p and q?
‒ Yes.

• Primality test
• Random probable prime generation.

• Generate a prime with negligible error probability.

Q: Can we make a table so we can efficiently choose p
and q from the table?

22

DISCUSSIONS ON RSA: III
Step2: choose e relatively prime to φ(n), d is the
multiplicative inverse of e.
• <e,n> is public information
• <d,n> is private information
• e and d are multiplicative inverses mod φ(n)
Q: Why is it hard to get <d,n> from <e,n> ?
We need to get φ(n), generally we have to factor n first to get φ(n)
• Computationally difficult to factor a large number n!
23

USING RSA FOR KEY NEGOTIATION
Alice

Bob
Generate random
number R1

Public key: Ka,p
Private key: Ka,i

1) get R2
2) get symmetric key as
K = H(R1⊕R2),

Send R1 encrypted using Kb,p

Send R2 encrypted using Ka,p

Public key: Kb,p
Private key: Kb,i
1) Get R1,
2) Generate random
number R2,
3) get key as
K = H(R1⊕R2),

24

DIGITAL ENVELOPE
Alice

Bob
Generate a
session key Ks

Knows the public
key: Kp

Encrypt message M using Ks
Encrypted Ks using Kp

Send a response
using Ks
All remaining communication is
based on Ks

Public key: Kp
Private key: Ki
1. Use Ki to
decrypt Ks
2. Use Ks to
decrypt M

25

GET THE PRIVATE FROM THE PUBLIC
• public information

‒ Public key: <e,n>
‒ Ciphertext: c = me mod n

• private information

Hard things:
1. Factoring large numbers
2. Computing Totient function
Need factoring first
3. Obtaining primitive roots
4. Discrete logarithm

‒ Prime numbers: p, q
‒ Totient function: φ(n) =(p-1)(q-1)
‒ Private key: <d,n>
‒ Plaintext: m

26

IS RSA SECURE?
• <e,n> is public information
• If you could factor n into p*q, then
‒ could compute φ(n) =(p-1)(q-1)
‒ could compute d = e-1 mod φ(n)
‒ would know the private key <d,n>!

• But: factoring large integers is hard!

‒ classical problem worked on for centuries; no known reliable,
fast method

• Shor’s quantum algorithm 1994:

‒ Efficient factorization to break RSA if we have …
27

SECURITY (CONT’D)
•
•

At present, key sizes of 1024 bits (i.e., n=pq is on the
order of 21024) are considered to be marginally secure,
but 2048 bits or more is better
Tips for making n more difficult to factor

1. p and q lengths should be similar (ex.: ~500 bits each if key is
1024 bits)
2. both (p-1) and (q-1) should contain a “large” prime factor
3. gcd(p-1, q-1) should be “small”
4. d should be larger than n1/4

28

ATTACKS AGAINST RSA
•

•

Brute force: try all possible private keys

‒ can be defeated by using a large enough key space (e.g.,
1024 bit keys or larger)

Mathematical attacks

‒ factor n into the product of two primes
•

possible for special cases of n

• Shor's algorithm, 1994

‒ Breaking RSA and popular public key crypto
‒ Quantum algorithm
29

ATTACKS (CONT’D)
•

•
•

Probable-message attack (using <e,n>)

‒ encrypt all possible plaintext messages
‒ try to find a match between the ciphertext and one of the
encrypted messages
‒ only works for small plaintext message sizes

Solution: pad plaintext message with random text
before encryption (why random?)
PKCS #1 v1 (public key standards)

‒

specifies this padding format:

00

02

R1

R2

R3

R4

R5

R6

R7

R8

00

data…

each 8 bits long
30

RSA
• Encryption:

‒ Encrypt with public key, decrypt with private key

• Authentication:

‒ Sign with private key, verify with public key

• Key Negotiation:

‒ Digital envelope
‒ RSA based negotiation
‒ Alice and Bob must know each other’s public key

31

OTHER SCENARIO
• What if Alice and Bob do not have their public/private
keys, but want to communicate secretly?

32

SOLUTION
• Alice and Bob

‒ generate a pair of public and private key individually
• Public key <e, n> in RSA
• Private key <d, n> in RSA

‒ Send their public keys <e, n> to each other

33

</details>
