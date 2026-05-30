---
title: "compSec {postMidterm} Lecture15"
---

# compSec {postMidterm} Lecture15

![[compSec CS5173/lecture slides/compSec {postMidterm} Lecture15.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture15.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture15.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Diffie-Hellman Key Exchange and
Digital Signature Standard (DSS)

• If we fix n, and change a in am mod n for m = 1, 2, 3, 4, …
• Example: n=19. Then, a=2 is called a primitive root

 order

PRIMITIVE ROOT

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
2

LOGARITHMS
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

3

DIFFICULTIES IN MODULAR ARITHMETIC
• Factoring large numbers
• Computing Totient function
‒ Need factoring first

• Obtaining primitive roots
• Discrete logarithm
• Public key cryptography design should leverage all
these difficulties!

4

REVIEW RSA

Encryption: c = me mod n, m < n
Decryption: m = cd mod n
Signing: s = md mod n, m < n

e – public key
d – private key

Verification: m = se mod n
5

5

SECURITY IN RSA
• Key generations: (e, d, n, p, q)

‒ Given e, why it is hard to get d?

• Encryption: c = me mod n
• Given C, why it is hard to get m?

• Signing: s = md mod n
• Given s, why it is hard to get d?

6

RSA
• Encryption:

‒ Encrypt with public key, decrypt with private key

• Authentication:

‒ Sign with private key, verify with public key

• Key Negotiation:

‒ Digital envelope
‒ RSA based negotiation
‒ Alice and Bob must know each other’s public key

7

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

8

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

9

OTHER SCENARIO
• What if Alice and Bob do not have their public/private
keys, but want to communicate secretly?

10

SOLUTION
• Alice and Bob

‒ generate a pair of public and private key individually
• Public key <e, n> in RSA
• Private key <d, n> in RSA

‒ Send their public keys <e, n> to each other

11

CS 4173/5173
COMPUTER SECURITY
Diffie-Hellman Key Exchange

DIFFIE-HELLMAN PROTOCOL
• For negotiating a shared secret key using only public
communication
• Does not provide authentication of communicating
parties
• What’s involved?
‒ p is a large prime number (at least 1024 bits)
‒ g is a primitive root of p, and g < p
‒ p and g are publicly known

13

D-H KEY EXCHANGE PROTOCOL
Alice

Bob

Publishes g and p

Reads g and p

Picks random number SA
(and keeps private)

Picks random number SB
(and keeps private)

Computes TA = gSA mod p

Computes TB = gSB mod p

Sends TA to Bob,

Sends TB to Alice,

Computes TBSA mod p

=

Computes TASB mod p
14

USING D-H FOR KEY NEGOTIATION
Alice

Bob

Public knowledge g, p
Generate random
number SA

No public/private
key

Compute
TBSA mod p =
gSASB mod p

Compute and send TA

Generate random
number SB

= gSA mod p

Compute and send TB = gSB mod p

No public/private
key

Compute TASB
mod p = gSASB
mod p
15

SECURITY ANALYSIS
Alice

Generate random
number SA

No public/private
key

Bob

Public knowledge g, p
secrets

Compute and send TA

Generate random
number SB

= gSA mod p

No public/private
key

Can an attacker get SA from TA, why??
SA is the discrete logarithm of gSA mod p

16

SECURITY ANALYSIS II
Alice

Generate random
number SA

No public/private
key

Bob

Public knowledge g, p

Compute
TBSA mod p =
gSASB mod p

Compute and send TA

Generate random
number SB

= gSA mod p

No public/private
key

Compute TASB
mod p = gSASB
mod p
Compute and send TB = gSB mod p

Can an attacker get gSASB mod p from TA and TB?

17

SUMMARY
Alice and Bob both compute the same secret gSASB mod p,
which can then be used as the shared secret key K
• Difficulties for the attacker:
• SA is the discrete logarithm of gSA mod p and
• SB is the discrete logarithm of gSB mod p
• Compute discrete logarithm is computationally difficult!

18

D-H EXAMPLE
• Let p = 353, g = 3
• Let random numbers be SA = 97, SB = 233
• Alice computes TA = gSA mod p = 397 mod 353 = 40
• Bob computes TB = gSB mod p = 3233 mod 353 = 248
• They exchange TA and TB
• Alice computes K = TBSA mod p = 24897 mod 353 = 160
• Bob computes K = TASB mod p = 40233 mod 353 = 160

19

D-H LIMITATIONS
• Expensive exponential operation is required
• Algorithm is useful for key negotiation only
‒ i.e., not for public key encryption/verification

• Not for user authentication

‒ In fact, you can negotiate a key with a complete stranger!

• Vulnerable to man-in-the-middle attack
20

MAN-IN-THE-MIDDLE ATTACK
• Trudy impersonates as Alice to Bob, and also
impersonates as Bob to Alice
Alice

K1 = (gSA) S”B”

Bob

Trudy

K2 = (gSB) S”A”
21

MAN-IN-THE-MIDDLE ATTACK (CONT’D)
• Now, Alice thinks K1 is the shared key, and Bob thinks K2 is
the shared key
• Trudy intercepts messages from Alice to Bob, and

‒ decrypts (using K1), substitutes her own message, and encrypts for
Bob (using K2)
‒ likewise, intercepts and substitutes messages from Bob to Alice

• Solution???

22

AUTHENTICATING D-H MESSAGES
• That is, you know who you’re negotiating with, and that the
messages haven’t been modified
• Requires that communicating parties already share
something
• Then use shared information to enable authentication
‒ public key information  RSA authentication
‒ some common secret K,  HMAC, CBC-MAC

23

USING D-H IN “PHONE BOOK” MODE
1. Alice and Bob each chooses a secret number, generate TA
and TB
2. Alice and Bob publish TA, TB, i.e., Alice can get Bob’s TB at
any time, Bob can get Alice’s TA at any time
3. Alice and Bob can then generate a shared key without
communicating
‒ but, they must be using the same p and g

24

D-H IN “PHONE BOOK” MODE
Alice

Public knowledge g, p

Bob

Generate random number
SA, and save TA = gSA mod p

broadcast TA

broadcast TB

25

ENCRYPTION USING D-H?
•
•
•

How to do key establishment + message encryption
in one step
Everyone computes and publishes their own
individual <pi, gi, Ti>, where Ti=giSi mod pi
For Alice to communicate with Bob…

1.
2.
3.
4.

Alice picks a random secret number SA
Alice computes gBSA mod pB
Alice uses KAB = TBSA mod pB to encrypt the message
Alice sends encrypted message along with (unencrypted)
gBSA mod pB
26

D-H WITH ENCRYPTION
Alice sends a secure message to Bob

Bob

Generate random number
SA, compute gBSA mod pB
Use KAB = TBSA to encrypt the
message M
<pa, ga, Ta>
Known to everyone

<pb, gb, Tb>
Known to everyone
Send KAB (M) along with gBSA mod pB
Compute the key KAB
KAB = (gBSA)SB mod pB
Then, decrypt the
message
27

EXAMPLE
•
•

Bob publishes <pB, gB, TB> = <401, 5, 51> and keeps
secret SB = 58
Steps

1. Alice picks a random secret SA = 17
2. Alice computes gBSA mod pB = 517 mod 401 = 173
3. Alice uses KAB = TBSA mod pB =
5117 mod 401 = 360 to encrypt message M
4. Alice sends encrypted message along with (unencrypted)
gBSA mod pB = 173
5. Bob computes KAB = (gBSA)SB mod pB =
17358 mod 401 = 360
6. Bob decrypts message M using KAB

28

PICKING G AND P
• Advisable to change g and p periodically

‒ the longer they are used, the more info available to an attacker

• Advisable not to use same g and p for everybody

29

POPULAR VERSION
• ECDHE

‒ Elliptic Curve Diffie-Hellman key Exchange
‒ Widely used on the Internet

30

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

Best Practice: use public key cryptography to
negotiate a symmetric session key
31

CS 4173/5173
COMPUTER SECURITY
Digital Signature Standard (DSS)

DIGITAL SIGNATURE STANDARD (DSS)
• Useful only for digital signing
‒ no encryption
‒ no key exchange

• Components

‒ SHA-1 to generate a hash value (some other hash functions also
allowed now)
• The practical cracking of SHA-1 was publicly announced in Feb 2017.

‒ Digital Signature Algorithm (DSA) to generate the digital signature
from this hash value

• Designed to be fast for the signer rather than verifier

33

DIGITAL SIGNATURE ALGORITHM (DSA)
1. Announce public parameters used for signing
‒ pick p (a prime with >= 1024 bits)
‒ pick q (a 160 bit prime) such that q|(p−1)
ex.: q = 17 (divides 102)

ex.: p = 103

‒ choose g ≡ h(p−1)/q mod p, where 1 < h < (p – 1),
such that g > 1 ex.: if h = 2, g = 26 mod 103 = 64
‒ note: g is of order q mod p
ex.: powers of 64 mod 103 =
64 79 9 61 93 81 34 13 8 100 14 72 76 23 30 66 1
17 values
34

DSA (CONT’D)
2. User Alice generates a long-term private key x
‒ random integer with 0 < x < q
ex.: x= 13

3. Alice generates a long-term public key y
‒ y = gx mod p

ex.: y = 6413 mod 103 = 76

35

DSA (CONT’D)
4. Alice randomly picks a per message secret number k
such that 0 < k < q, and generates k-1 mod q
5. Signing message M

ex.: k = 12, 12-1 mod 17 = 10

‒

r = (gk mod p) mod q

‒

s = [k−1*(H(M)+x*r)] mod q

ex.: H(M) = 75

ex.: r = (6412 mod 103) mod 17 = 4

‒

transmitted info = M, r, s
ex.: s = [10 * (75 + 13*4)] mod 17 = 12
ex.: M, 4, 12
36

VERIFYING A DSA SIGNATURE
•
•
1.
2.
3.
4.

ex.: p = 103, q = 17, g = 64, y = 76, H(M) = 75
Known : g, p, q, y
ex.: M, 4, 12
Received from signer: M, r, s
ex.: w = 12-1 mod 17 = 10
w = (s)−1 mod q
u1 = [H(M) *w] mod q
ex.: u1 = 75*10 mod 17 = 2
u2 = (r*w) mod q
ex.: u2 = 4*10 mod 17 = 6
v = [(gu1*yu2) mod p] mod q

ex.: v = [(642 * 766) mod 103] mod 17 = 4

5. If v = r, then the signature is verified

37

WHY DOES IT WORK?
• Correct? The signer computes
•
s = k-1 * (H(m) + x*r) mod q
• so k ≡ H(m)*s-1 + x*r*s-1
•
≡ H(m)*w + x*r*w mod q
• And :
•
gk ≡ gH(m)w * gxrw
u1 = [H(M) *w] mod q
u2 = (r*w) mod q
•
≡ gH(m)w * yrw
•
≡ gu1 * yu2 mod p, and
• r = (gk mod p) mod q = (gu1*yu2 mod p) mod q = v
38

ASSESSMENT OF DSA
• Slower to verify than RSA, but faster signing than RSA
• Key lengths of 2048 bits and greater are also allowed

39

PUBLIC KEY ALGORITHMS
• Public key algorithms covered in this class, and their
applications
System

Encryption /
Decryption?

Digital
Signatures?

Key
Exchange?

RSA

Yes

Yes

Yes

DiffieHellman
DSA

Yes
Yes
40

</details>
