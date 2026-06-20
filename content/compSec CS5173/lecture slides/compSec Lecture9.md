---
title: "compSec Lecture9"
---

# compSec Lecture9

![[compSec CS5173/lecture slides/compSec Lecture9.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20Lecture9.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20Lecture9.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Hash Functions

OUTLINE LAST TIME
•

Message Authentication
‒

MAC-CBC

‒

Combination of encryption and authentication
•
•
•

Encrypt-then-authenticate
Encrypt-and-authenticate
Authenticate-then-encrypt

2

OUTLINE LAST TIME
• Achieving confidentiality does not necessarily mean achieving integrity.
‒ Fully encrypting a message does not mean data tampering (integrity violation)
can be detected.

• MAC is an effective way to protect integrity.
‒ CBC-MAC in symmetric cryptography works but is slow
‒ Integrity protection usually incurs overhead.

• Efficient design is needed to achieve both confidentiality and integrity
‒ Fast MAC design widely used today based on hash functions.
• Hash function based MAC is called HMAC

3

HASH FUNCTION
No key here!
Message m of
arbitrary length

Hash H(.)

A fixed-length
short message H(m)

• H(.) is also known as
‒ Message digest
‒ One-way transformation
‒ One-way function
‒ Hash
‒ Widely-used hash functions: MD5, SHA1, SHA256.

• Usually fixed lengths: 128, 160, 256 bits, …
• Note: Hash functions have a broader definition in
computer science. But in this class, we only consider
cryptographic hash functions.
4

DESIRABLE PROPERTY OF HASH FUNCTIONS: 1
• 1) Performance: Easy to compute H(m)

Message m of
arbitrary length

Hash H(.)

A fixed-length
short message H(m)

Very fast to compute H(m)!
5

DESIRABLE PROPERTY OF HASH FUNCTIONS: 2
• 2) One-way property: Given H(m) but not m, it’s
computationally infeasible to find m

Message m of
arbitrary length

Hash H(.)

A fixed-length
short message H(m)

computationally difficult to compute get
m from H(m)
6

DESIRABLE PROPERTY OF HASH FUNCTIONS: 3
• 3) Weak collision resistance: Given H(m), it’s
computationally infeasible to find m’ such that H(m’) =
H(m).
Message m of
arbitrary length

Hash H(.)

A fixed-length
short message
H(m’) = H(m).

computationally difficult to
find m’!
Another
message m’

Collision: two or more messages have the
same hash.
7

DESIRABLE PROPERTY OF HASH FUNCTIONS: 4
• 4) Strong collision resistance: computationally infeasible to
find m1, m2 such that H(m1) = H(m2)

message m1
Hash H(.)
message m2

A fixed-length
short message
H(m1) = H(m2)

computationally difficult to
compute m1, m2!
8

SUMMARY OF PROPERTIES
1) Performance: Easy to compute H(m)
2) One-way property: Given H(m) but not m, it’s
computationally infeasible to find m
3) Weak collision resistance: Given H(m), it’s computationally
infeasible to find m’ such that H(m’) = H(m).
4) Strong collision resistance: computationally infeasible to
find m1, m2 such that H(m1) = H(m2)

9

IS ENCRYPTION A GOOD HASH FUNCTION?
Message
M1

E

M2

E

M3

E

M4

E
64

Hash

•
•
•
•

Computationally efficient?
One way property?
Collision resistance?
Any arbitrary message length?
10

CS 4173/5173
COMPUTER SECURITY
Hash Function Applications

APPLICATION: FILE AUTHENTICATION
• Want to detect if a file has been changed by someone
after it was stored.
• Method
‒ Compute the hash H(F) of file F
‒ Store H(F) separately from F
‒ Can tell at any later time if F has been changed by computing
H(F’) and comparing to stored H(F)

12

APPLICATION: PASSWORD STORAGE
• The passwords in the system must be stored in a secure
way.
• Method
‒ Compute the hash H(P) of password P
‒ Store H(P) in a plain-text file (can be known to everyone)
‒ Then, how the system verify if the password is correctly
entered by a user?
‒ Why it is secure?

13

APPLICATION: PASSWORD STORAGE
• In Ubuntu, the password is stored at /etc/shadow

Example of the output of the shadow file

14

SAVING PASSWORD WITH SALT
• An enhanced way:
‒ Create a random number R,
‒ Get Hash H(R|P)
• i.e., hash the combination of random number R and the password P.

‒ Save H(R|P) and R in plaintext.
‒ R is called the salt.

• How to verify the password?
• Is it more secure?

15

APPLICATION: COMMITMENT PROTOCOLS
•

Ensure two parties commit before they communicate.

•

Ex.: A and B wish to play the game of “odd or even” over
the network
1. A picks a number X and B picks a number Y
2. A and B “simultaneously” exchange X and Y
3. A wins if X+Y is odd, otherwise B wins

16

COMMITMENT… (CONT’D)
•

If A gets Y before deciding X, A can easily cheat (and vice
versa for B)
‒ How to prevent this from happening?

A

B
Picks Y

Picks X

17

COMMITMENT… (CONT’D)
• Proposal: A must commit to X before B will send Y
• Protocol:

A

A picks X and
computes Z=H(X)

B
Picks Y

verifies that
H(X) = Z

18

QUESTION
• How should we choose the value space of X in this design?

A

A picks X and
computes Z=H(X)

B
Picks Y

verifies that
H(X) = Z
19

MESSAGE AUTHENTICATION
• For message authentication:
Sender

Receiver
P

P

H

Hash

H
Compare

Does this ensure integrity?
20

ENCRYPT-THEN-AUTHENTICATE
K2

Sender K2
P

E

C
D

E

Receiver
P’

K1
E

Residue
only
Compare

Residue
only

K1
K2

Sender K2
P

E

C
D

H

Hash
only

Receiver
P’

H

Hash
Compare
21

KEY OBSERVATION
• Sender and Receiver should share a common secret
K to achieve:
‒ Confidentiality
‒ Integrity

22

MESSAGE AUTHENTICATION
• We need to use the key, but how to add the key to
hash function?
Sender

Receiver
P

P
K
H

HMAC

H
K
Compare

Accept
/Reject

Something like: H(K|P)?
23

HMAC
• A simple combination H(K|P)
‒ Length extension attack
• Using an existing hash to calculate another hash of a message
appended by the attacker’s message
• Take advantage of certain hash function architectures
https://en.wikipedia.org/wiki/HMAC

• HMAC (https://en.wikipedia.org/wiki/HMAC)
‒ keyed-hash message authentication code
‒ Standard RFC2104
• Given key K, message M, hash function H( )
• HMAC(K, M) = H( (K’ ⊕ opad) | H(K’ ⊕ ipad | M) )
• K’ = H(K), with padding to K if necessary
• opad: outer padding, consisting of repeated bytes valued 0x5c
• ipad: inner padding, consisting of repeated bytes valued 0x36.
• |: concatenation
• ⊕: XOR
24

MESSAGE AUTHENTICATION
• We need to use the key, but how to add the key to
hash function?
Sender

Receiver
P

P

HMAC

K
HMAC
HMAC

H( (K’ ⊕ opad) | H(K’ ⊕ ipad | P) )

K
Compare

Accept
/Reject

Can an attacker manipulate both P and HMAC
to pass the authentication verification?
25

ENCRYPT-THEN-AUTHENTICATE
The way to do encryption and authentication
K

Sender K
P

E

Receiver

C

C

D
H

HMAC

P’

H
Compare

H( (K’ ⊕ opad) | H(K’ ⊕ ipad | P) )
26

SUMMARY
•

Hash functions
‒
‒

4 Important properties
Applications
•
•
•
•

Password Storage
File Authentication
Commitment Protocols
HMAC

27

</details>
