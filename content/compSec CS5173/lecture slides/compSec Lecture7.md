---
title: "compSec Lecture7"
---

# compSec Lecture7

![[compSec CS5173/lecture slides/compSec Lecture7.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20Lecture7.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20Lecture7.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Modes of Operation

OUTLINE LAST TIME: DES
64-bit Input

56-bit Key

Initial Permutation

Generate
round keys

Round 1
Round 2
Feistel
Cipher

…

Round 16
Swap Halves
Final Permutation
64-bit Output

48-bit K1
48-bit K2
48-bit K16

OUTLINE LAST TIME: AES
128-bit key

128-bit Input

⊕

128-bit K0

Generate
round keys

Round 1

…

⊕

128-bit K1

Round 10

⊕
128-bit Output

128-bit K10

3

A REMAINING ISSUE FOR BLOCK CIPHER
• How block cipher works
plaintext
key

block 0 block 1

block 2

…

Encryption (e.g., DES, AES, …)

ciphertext block 0 block 1

block 2

…

• Question: How to transmit the ciphertext blocks ?
4

PROCESSING WITH BLOCK CIPHERS
• Most ciphers work on blocks of fixed (small) size
• How to chain cipher text together?
• Modes of operation: describe how to repeatedly apply a
cipher's single-block operation to securely transform
amounts of data larger than a block
‒ ECB (Electronic Code Book)
‒ CBC (Cipher Block Chaining)
‒ CFB (Cipher Feedback)
‒ CTR (Counter)

5

ISSUES FOR BLOCK CHAINING MODE
• Information leakage

‒ Does it reveal info about the plaintext blocks?

• E.g., two cipher blocks have the same information?

• Ciphertext manipulation

‒ Can an attacker modify ciphertext block(s) in a way that will
produce a predictable/desired change in the decrypted plaintext
block(s)?
‒ Note: assume the structure of the plaintext is known, e.g., first
block is employee #1 salary, second block is employee #2 salary,
etc.

7

ISSUES… (CONT’D)
• Parallel/Sequential

‒ Can blocks of plaintext (ciphertext) be encrypted (decrypted) in
parallel?

• Error propagation

‒ If there is an error in a plaintext (ciphertext) block, will there be an
encryption (decryption) error in more than one ciphertext
(plaintext) block?

8

ELECTRONIC CODE BOOK (ECB)
Plaintext ⇒ M1

M2

64

Key

E

M3

E

64

64

Ciphertext ⇒ C1

C2

46 +
padding

64

64

E

M4

E
64

64

C3

• The easiest mode of operation; each block is
independently encrypted

C4

9

ECB DECRYPTION
M1

M2

64

Key

D

C1

D
64

C2

M4
46 +
padding

64

64

D
64

M3

D
64

64

C3

C4

• Each block is independently decrypted
10

ECB PROPERTIES
• Does information leak?
• Can ciphertext be manipulated?
• Parallel processing possible?
• Do ciphertext errors propagate?

Key

Yes
Yes
Yes
no

M1

M2

M3

64

64

64

D

D
64

C1

D

M4
46 +
padding

D

64

64

C2

C3

64

C4
11

CIPHER BLOCK CHAINING (CBC)
M1

M2

64

M3

M4
46 +
padding

64

64

Initialization
Vector (IV)

Key

E
64

C1

E

E
64

C2

E
64

64

C3

C4

• Chaining dependency: each ciphertext block depends on all
preceding plaintext blocks
12

INITIALIZATION VECTORS
• Initialization Vector (IV)

‒ Used along with the key; not secret
‒ For a given plaintext, changing either the key, or the IV, will
produce a different ciphertext
‒ Why is that useful?

• IV generation and sharing

‒ Random; may transmit with the ciphertext
‒ Incremental; predictable by receivers

13

CBC DECRYPTION
M1

M2

64

M3

M4
46 +
padding

64

64

Initialization
Vector
Key

D
64

C1

D

D
64

C2

D
64

64

C3

C4

• How many ciphertext blocks does each plaintext block
depend on?
14

CBC PROPERTIES
• Does information leak?

‒ Identical plaintext blocks will produce different ciphertext blocks

• Can ciphertext be manipulated?
‒ Yes, but no easy swap

• Parallel processing possible?

‒ no (encryption), yes (decryption)

• Do ciphertext errors propagate?

‒ Yes for encryption, no for decryption.

15

CIPHER FEEDBACK MODE (CFB)
IV
64

Key

64

M1

E

E

E

64

M3

64

C1

M4
64

64
64

C2

64

64

64

M2

E

46 + padding
64

64

C3

C4

• Ciphertext block Cj depends on all preceding plaintext blocks
16

CFB DECRYPTION
IV
64

Key

E

E

E
64

M2

M3

64

64

64

C1

64

64

64

M1
64

E

64

C2

M4
46 + padding
64

64

C3

C4

• No block decryption required!
17

CFB PROPERTIES
• Does information leak?

‒ Identical plaintext blocks produce different ciphertext blocks

• Can ciphertext be manipulated?
‒ Yes, but no easy swap

• Parallel processing possible?

‒ no (encryption), yes (decryption)

• Do ciphertext errors propagate?
‒ yes(encryption), no (decryption)

18

COUNTER MODE (CTR)
IV

IV++

IV++

64

Key

M1

E

E

E

M2
64

M3
64

64
64

C1

64

C2

64

C3
19

CTR MODE PROPERTIES
• Does information leak?

‒ Identical plaintext block produce different ciphertext blocks

• Can ciphertext be manipulated?
‒ Yes, but no easy swap

• Parallel processing possible
‒ Yes

• Do ciphertext errors propagate?
‒ No

20

CS 4173/5173
COMPUTER SECURITY
Triple DES

STRONGER DES
• Major limitation of DES
‒ Key length is too short

• Can we apply DES multiple times to increase the strength of
encryption?

22

DOUBLE ENCRYPTION WITH DES
•Does encrypting using the same key make things more
secure?
Encryption

P

E

X

K

Decryption

P

D

E

C

K

X

D

C

23

DOUBLE ENCRYPTION WITH DES
•Encrypt the plaintext twice, using two different DES keys
•Total key material increases to 112 bits
‒

is that the same as key strength of 112 bits?

Encryption

P

E

X

K1

Decryption

P

D

E

C

K2

X

D

C

Observation:
X=EK1{P}=DK2{C}
24

THE MEET-IN-THE-MIDDLE ATTACK
• Procedure: http://en.wikipedia.org/wiki/Meet-in-themiddle_attack
• An Attack Example
‒ Double DES with two different keys K1 and K2

• Total key size: 56 + 56 = 112 bits.
• The cost of exhaustive search? -> 100 quadrillion years
• What is the cost to crack DES (56 bits) ? -> 700 seconds

‒ The attacker knows a plaintext P and ciphertext C.
P

E

E

K1

K2

C

25

ATTACKER’S OBSERVATION

Some intermediate text I
K1(P)=I, K2(I)=C
P

E

E

K1

K2

C

26

ATTACK PROCEDURE
1. encrypt P using single-DES for all possible 256 values K1 to generate all
possible single-DES ciphertexts for P: X1,X2,…,X256 ; The table contains the
intermediate text I.

P

E

A look-up table with Xi

K1
2. decrypt C using single-DES for all possible 256 values K2 to generate all
possible single-DES plaintexts for C: Y1,Y2,…,Y256 ; The table also contains I.

A look-up table with Yi

D

C

K2
27

ATTACK PROCEDURE … (CONT’D)
• On Average: the expected number of pairs that result in
identical X and Y is 248.
‒ Each (X, Y) pair corresponds to different key pair (K1, K2).
‒ Then the attack just needs to try all the pairs.

• Total computational cost:

‒ 2× 256 + 2× 248 < 258(vs exhaustive search 2112)

• Also huge storage cost.

‒ 256 bytes = 65536 TB = 65.5 PB (quite possible for today)

• Internet materials: “In 2013, Randall Munroe compiled published assertions
about Google's data centers, and estimated that the company has about 10
exabytes (10,000 PB) stored on disk… The company has refused to
comment on Munroe's estimate.”
• Around $35,000 per PB. --- in 2019
28

CONCLUSION
• Double DES is not totally secure!
• Meet-in-the-Middle Attack is a generic attack against
double-encryption.

29

TRIPLE ENCRYPTION (TRIPLE DES-EDE)
Encryption

Decryption

P

P

E

D

E

K1

K2

K1

D

E

D

C

C

• Apply DES encryption/decryption three times

30

TRIPLE DES (CONT’D)
• Strength:

‒ equivalent strength to using a 112 bit key
‒ resilient to M-I-T-M attack
Encryption P

Decryption

P

E

D

K1

K2

D

E

X

E

C

K1

X

D

C

Observation:
X=DK2{EK1{P} }=DK1{C}

31

TRIPLE DES (CONT’D)
• However: inefficient / expensive to compute

‒ one third as fast as DES on the same platform, and DES is already
designed to be slow in software

• Next question: how is block chaining used with triple-DES?

32

3DES-EDE: OUTSIDE CHAINING MODE
M1

M2

M3

M4

E

E

E

E

D

D

D

D

E

E

E

E

C3

C4

IV
K1
K2
K1

64

C1
C2
• What basic chaining mode is this?

33

3DES-EDE: OCM DECRYPTION
M1

M2

M3

M4

D

D

D

D

E

E

E

E

D

D

D

D

C1

C2

C3

C4

IV
K1
K2
K1

64

34

3DES-EDE: INSIDE CHAINING MODE
M1

M2

M3

M4

E

E

E

E

IV
K1

64

K2

X1
D

X2
D

X3
D

X4
D

E

E

E

E

C1

C2

C3

C4

00…00
K1

35

35

3DES-EDE: ICM DECRYPTION
M1

M2

M3

M4

D

D

D

D

IV
K1

64

K2

X1
E

X2
E

X3
E

X4
E

D

D

D

D

C1

C2

C3

C4

00…00
K1

36

36

ICM PROPERTIES
• Does information leak?

‒ identical plaintext blocks produce different ciphertext blocks

• Can ciphertext be manipulated?
‒ hard

• Parallel processing possible?

‒ no (encryption), partly (decryption)

• Do ciphertext errors propagate?
‒ Yes

37

</details>
