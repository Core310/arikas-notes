---
title: "compSec Lecture10"
---

# compSec Lecture10

![[compSec CS5173/lecture slides/compSec Lecture10.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20Lecture10.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20Lecture10.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
The Length of Hash

OUTLINE LAST TIME
Hash functions:

1) Performance: Easy to compute H(m)
2) One-way property: Given H(m) but not m, it’s computationally
infeasible to find m
3) Weak collision resistance: Given H(m), it’s computationally
infeasible to find m’ such that H(m’) = H(m).
4) Strong collision resistance: computationally infeasible to find m1,
m2 such that H(m1) = H(m2)

2

EXERCISE I (SECRET DEAL)
• A and B have a financial agreement on something.

‒ They want to keep the agreement confidential, no third-party
should know the content of the agreement.
‒ But they also want to have a third-party to certify the agreement,
just in case…

3

EXERCISE II (A NEW HASH?)
• Bob designed a very fast hash function, which is to
XOR every 128 bits in a message.
1st 128bits

2nd 128bits

……

nst 128bits

Message

XOR all 128-bit blocks
128-bit hash

4
What is the flaw?

EXERCISE III (FILE MANAGEMENT)
• A file system contains millions of data files.
• Design a scheme to detect if a given file exists in the
system.
– i.e., find out if there already exists a file that has the
same content with the given file.

• Specify your design
– Cost in terms of storage and computation
– Efficiency in file finding and comparison
5

ESSENCE IN HASH-BASED SECURE DESIGN
• Make sure the input has a very large value space so it is
computationally difficult to do exhaust search.
‒ Use salt
‒ Use random padding if necessary
‒ ……

6

HASH FUNCTION WITH SHORT OUTPUT

Message m of
arbitrary length

Hash H(.)

2-bit H(m)

Does this hash function have the strong collision
resistance property? Why?

7

LENGTH OF HASH
Message m of
arbitrary length

No key here!
Hash H(.)

A fixed-length
short message H(m)

• Question

‒ Why do we have 128 bits,160 bits, 256 bits in the output of
a hash function?
‒ If it is too long
• Unnecessary overhead

‒ If it is too short

• Loss of strong collision free property

8

BIRTHDAY PARADOX: SIMPLE QUESTION
• Question:

‒ What is the probability that two persons have same birthday?
‒ (Equivalent question: what is the probability the hashes of two
different inputs are the same?)
• Assume 365 days a year, and all birthdays are equally likely

‒ Probability is 1 - 365 * (365-1)/(365*365).

9

BIRTHDAY PARADOX: GENERAL QUESTION
• Question:

‒ What is the probability that at least two persons among k persons
have the same birthday?
• Assume 365 days a year, and all birthdays are equally likely

‒ Probability is
1 – 365*(365-1)*(365-2)*…*(365-k+1)/365k
= 1 - 365!/(365-k)!/365k

10

BIRTHDAY PARADOX
• Question:

‒ What is the probability that at least two persons among k persons
have the same birthday?
• Assume 365 days a year, and all birthdays are equally likely
• Probability is 1 - 365!/(365-k)!/365k
• The larger k, the larger the probability.

• New Question: Find the values of k such that the probability
is greater than 0.5.

‒ Why 0.5? Just an example to show when the value of k could make
the collision probability non-negligible
• i.e., collision is really likely to happen.

‒ 1 - 365!/(365-k)!/365k >= 0.5  k >= 23.
11

BIRTHDAY PARADOX: GENERALIZATION
• Generalization of birthday paradox
‒Given

• random variable with uniform distribution between 1
and n
• n=365 in the birthday paradox

• a selection of k random variables
• k persons in birthday paradox

‒What is the least value of k such that

• There will be at least two variables with the same
value with probability P(n,k) > 0.5 ?

12

BIRTHDAY PARADOX: GENERALIZATION
• Generalization of birthday paradox

‒P(n,k) = 1-{n!/(n-k)!nk } ≈ 1 – e-k*(k-1)/2n
‒For large n and k, to have P(n,k) > 0.5 with
the smallest k, we have
k = 2(ln2)n = 1.18 n ≈ n

‒Example

• Find the values of k such that the probability
that two persons have the same birthday is
greater than 0.5. (n=365)
• 1.18*(365)1/2 = 22.54
13

BIRTHDAY PARADOX (CONT’D)
• Implication for hash function H of bit length m

• The hash value of an arbitrary input message is randomly
distributed between 1 and 2m, i.e., (n=2m)

message m1
message m2

…

…

Hash H(.)

Two hashes have
the same value

message mk
– What is the least value of k such that

• If we hash k messages, the probability that at least two of them
have the same hash (i.e., a collision) is larger than 0.5.

k ≈ n = 2m = 2m / 2
14
Design objective: make sure k is very large so an attacker sees the computational difficulty

BIRTHDAY PARADOX (CONT’D)
• Typical hash length: 128 (MD5), 160 bits (SHA-1), 256
(SHA-256), 512 (SHA-512)
m

k ≈ n = 2 =2

m/2

• 264 =18446744073709551616
• 280 =1208925819614629174706176

• It takes 38,334,786 years for a computer with 1 billion hashes per
second.

15

SUMMARY
• Design of Hash should balance the tradeoff between
overhead and security
‒ If it is too long

• Unnecessary overhead

‒ If it is too short

• Loss of strong collision free property
• Birthday paradox

• MD5: 128 bits – not secure any more
• SHA1: 160 bits – not (very) secure any more
• SHA256: 256 bits
• SHA384, SHA512, …
16

CS 4173/5173
COMPUTER SECURITY
The MD5 Hash Function

MD5: MESSAGE DIGEST VERSION 5
• MD5 at a glance
Message of
arbitrary length
MD5
(multiple
passes)

128-bit
message digest
18

PROCESSING OF A SINGLE BLOCK
512-bit message block
(sixteen 32-bit words)
128-bit input
message digest
(four 32-bit words)

MD5

128-bit output
message digest
(four 32-bit words)
the bytes of each 32-bit word
are stored in little-endian order
(LSB to MSB)

1 word = 4 bytes = 32 bits
19

MD5: A HIGH-LEVEL VIEW
Padding
(1 to 512 bits)

K bits
Message
512 bits

128 bits

Init Value

100…0

512 bits

Y0

…

Y1
128 bits

128 bits

MD5

MD5

stage 1

stage 2

Message Length
(64 bits)

…

512 bits

YL-1
128 bits

MD5

128-bit
digest

stage L
20

PADDING
• To original message M, add padding bits “10…0”

‒ enough 0’s so that resulting total length is 64 bits less
than a multiple of 512 bits

• Append L (the original length of M), represented in
64 bits, to the padded message

100…………..............................0 L in binary format
21

INITIAL VALUES
• The four 32-bit words of the output (the digest) are
referred to as d0, d1, d2, d3
‒ Initial values (in little-endian order)
‒ d0 = 0x67452301, d1 = 0xEFCDAB89
‒ d2 = 0x98BADCFE, d3 = 0x10325476
Y0
128 bits

Init Value

…

Y1
128 bits

128 bits

MD5

MD5

stage 1

stage 2

…

YL-1
128 bits

MD5

128-bit
digest

stage L
22

INSIDE AN MD5 BLOCK
• Bits operations: fully specified:
‒ AND, OR, XOR, bit shifting, …

Block of message (512 bits)
Previous hash
Or d0, d1, d2, d3
(128 bits)

MD5

New hash
(128 bits)

23

(IN)SECURITY OF MD5
• A few methods can find collisions in a few hours

‒ Birthday attack: need hash 264 messages to find a collision with
probability 0.5.

• Recall from birthday paradox, we need to compute 2m/2 hashes to find two
with the same value with probability 0.5.
• For MD5, m = 128 bits, so brute-force attack needs 2128/2 =264.

‒ A few collisions were published in 2004
‒ Can find many collisions for 1024-bit messages.

24

CS 4173/5173
COMPUTER SECURITY
The SHA-1 Hash Function

SECURE HASH ALGORITHM (SHA)
• Developed by NIST, specified in the Secure Hash
Standard, 1993
• SHA is specified as the hash algorithm in the Digital
Signature Standard (DSS)
• SHA-1: revised (1995) version of SHA

26

SHA-1 PARAMETERS
• Input message must be < 264 bits
• Input message is processed in 512-bit blocks, with the same
padding as MD5
• Message digest output is 160 bits long

‒ Referred to as five 32-bit words A, B, C, D, E
‒ IV: A = 0x67452301, B = 0xEFCDAB89, C = 0x98BADCFE, D = 0x10325476, E
= 0xC3D2E1F0 (big-endian order)

Y0

Y1

YL-1

160 bits

Init Value
A. B, C, D, E

160 bits

SHA1
stage 1

A. B, C,
D, E

160 bits

SHA1
stage 2

…

A. B, C,
D, E

160 bits
A. B, C,
D, E

SHA1
stage L

160-bit
digest
27

PREPROCESSING OF A BLOCK
• Let 512-bit block be denoted as sixteen 32-bit words
W0..W15
• Preprocess W0..W15 to derive an additional sixty-four
32-bit words W16..W79, as follows:
Note: << is
for 16 ≤ t ≤ 79
“circular shift”
Wt = (Wt-16 ⊕ Wt-14 ⊕ Wt-8 ⊕ Wt-3) << 1
Y0

A, B, C, D, E

Y1

Y = W0..W15
SHA1

YL-1

Preprocess
inside
28

SHA1 BLOCK PROCESSING
• Consists of 80 steps! (vs. 64 for MD5)
• Inputs for each step 0 ≤ t ≤ 79:
‒ Wt
‒ Kt – a constant
‒ A,B,C,D,E: current values to this point

• Outputs for each step:
‒ A,B,C,D,E : new values

29

PROCESSING PER STEP
• Everything to right of “=” is input value to this step
(i.e., old values)
for t = 0 to 79

A = E + (A << 5) + Wt + Kt + f(t,B,C,D)

B = A

C = B << 30
D = C
end

E = D
Note: << is “circular shift”

30

FIGURE FOR ONE STEP

from wiki
http://en.wikipedia.org/wiki/SHA-1
31

CONSTANTS KT
• Only 4 values (represented in 32 bits), derived from 230 *
i1/2, for i = 2, 3, 5, 10
‒ for 0 ≤ t ≤ 19: Kt = 0x5A827999
‒ for 20 ≤ t ≤ 39: Kt = 0x6ED9EBA1
‒ for 40 ≤ t ≤ 59: Kt = 0x8F1BBCDC
‒ for 60 ≤ t ≤ 79: Kt = 0xCA62C1D6

32

FUNCTION F(T,B,C,D)
• 3 different functions are used in SHA-1 processing
Round

Function f(t,B,C,D)

0 ≤ t ≤ 19

(B∧C) ∨ (~B∧D)

20 ≤ t ≤ 39

B⊕C⊕D

40 ≤ t ≤ 59

(B∧C) ∨ (B∧D) ∨ (C∧D)

60 ≤ t ≤ 79

B⊕C⊕D

• ∧ - AND
• ∨ - OR
33

COMPARISON: SHA-1 VS. MD5
• SHA-1 is a stronger algorithm

‒ brute-force attacks require on the order of 280 operations vs. 264
for MD5

• SHA-1 is about twice as expensive to compute
• Both MD-5 and SHA-1 are much faster to compute than DES

34

SECURITY OF SHA-1
• SHA-1

‒ Still more secure than MD5

• SHA-1 has 160 bits, so 2160/2 =280 for brute-force attacks
• MD5 has 128 bits, so 2128/2 =264 for brute-force attacks, and much less for
other smart attacks.

35

FINDING SHA-1 COLLISION
• https://security.googleblog.com/2017/02/announcing-firstsha1-collision.html
• In 2013, Marc Stevens published a paper that outlined a
theoretical approach to create a SHA-1 collision.
• In 2017, first collision announced by Google:

‒ Nine quintillion (9,223,372,036,854,775,808/263) SHA1
computations in total
‒ 6,500 years of CPU computation to complete the attack first phase
‒ 110 years of GPU computation to complete the second phase

36

MODERN HASH FUNCTIONS

• MD6, SHA-256, SHA-384, SHA-512…
• https://shattered.io/

37

USING HASH FUNCTIONS IN LINUX
• MD5

‒ Command: md5sum [filename]

• Compute the MD5 hash of the content of a file

‒ Command: echo “[content]” | md5sum
• Compute the MD5 hash of [content]

• SHA1

‒ Command: sha1sum [filename]

• SHA256

‒ Command: sha256sum [filename]

38

SUMMARY OF HASH
• Four important properties
• Applications

‒ Detecting file change
‒ Storing password
‒ Message authentication, HMAC
‒ ...

• Hash Functions:

‒ MD5: 128 bits – not secure at all
‒ SHA1: 160 bits – not very secure
‒ SHA256, SHA384, SHA512 – secure for now
‒…

39

APPLICATION
• Alice wants to prove to Bob that she is indeed Alice

‒ Alice and Bob shares a common secret key
‒ But the communication between them is on a public channel.
‒ What Alice should do to prove to Bob that she is indeed Alice
without actually disclosing the key itself?

40

APPLICATION: USER AUTHENTICATION
• Alice wants to authenticate herself to Bob
‒ assuming they already share a secret key K

• Protocol:

Alice

Bob
picks random
number R

computes
Y=H(R|K)
time 

verifies that
Y=H(R|K)

What should be the range of random number R?

41

CS 4173/5173
COMPUTER SECURITY
High Level Introduction to
Public Key Cryptography

COMPANY A’S PROBLEM I
• Company A is a big web service company with over 10,000
employees.
• The president Bob wants to make sure that all employees
can verify the authenticity of the announcement emails that
he sends.
• Q: How to ensure authenticity of these emails.

43

COMPANY A’S PROBLEM II
• Company A is accepting vulnerability report of their web
system from the public.
• They need a design that someone can successfully send the
report of a potential vulnerability via email to them.
• Q: How to ensure the confidentiality of reports?

44

HOW TO SECURELY SURF INTERNET

A
D
C
B

E

Share the same key before access?

45

PUBLIC KEY CRYPTOGRAPHY
plaintext

encryption
Public key

ciphertext

different!

decryption

plaintext

Private key

• Invented and published in 1975
• A public / private key pair is used
• Also known as asymmetric cryptography
• Much slower to compute than secret key cryptography
46

PUBLIC/PRIVATE KEY
• Public key – encrypt
• Private key – decrypt

• How does the secret communication look like?

Alice

Bob

wants to send a message

47

PUBLIC/PRIVATE KEY
• Alice has her own public and private key pair
• Bob also has his own public and private key pair
• Public key

‒ Can be released to the public

• Private Key

‒ Must be kept secret.

48

AUTHENTICATION IN PUBLIC KEY CRYPTO
• Message integrity with digital signatures
• Alice computes hash, signs with her private key (no one else
can do this without her key)
• Bob verifies hash on receipt using Alice’s public key using
the verification equation

Plaintext

Alice
Signs

Plaintext with
digital signature

Alice’s Private Key

Bob
Verifies
Signature

Valid /
Not Valid

Alice’s Public Key
49

AUTHENTICATION (CONT’D)
• Authentication in public key crypto:

‒ Hash function to hash the message into a digest
‒ The action of sign the digest with (private key)
‒ The action of verify the digest with (public key)

50

PUBLIC-KEY REQUIREMENTS
• It must be computationally

‒ easy to generate a public / private key pair
‒ hard to determine the private key, given the public key

• It must be computationally

‒ easy to encrypt using the public key
‒ easy to decrypt using the private key
‒ hard to recover the plaintext message from just the ciphertext and
the public key

51

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

52

SOLVING COMPANY A’S PROBLEM I
• Company A is a big web service company with over 10,000
employees.
• The president Bob wants to make sure that all employees
can verify the authenticity of the announcement emails that
he sends.
• Answer:

‒ Everyone knows Bob’s public key.
‒ Bob signs the email using his private key.
‒ Everyone can verify the signed email using Bob’s public key

53

SOLVING COMPANY A’S PROBLEM II
• Company A is accepting vulnerability report of their web
system from the public.
• They need a design that someone can successfully send the
report of a potential vulnerability via email to them.
• Answer:

‒ Company A generates a key pair, then releases the public key to
the public for vulnerability report.
‒ Everyone uses the public key to encrypt the report.

54

PUBLIC KEY VS. SYMMETRIC KEY
Symmetric key

Public key

Two parties MUST trust each
other

Two parties DO NOT need to trust each
other

Both share same key

Two separate keys: a public and a
private key

Typically faster

Typically slower

Examples:

Examples:

DES, RC5, AES, …

RSA, DSA, ECC…

55

COMPANY A’S PROBLEM III
• Company A provides an on-line chat service for vulnerability
report.
‒ Requirement 1: confidentiality.
‒ Requirement 2: efficiency because there will be a number of
message exchanges.

• Q: How to satisfy both requirements?

56

DIGITAL ENVELOPE: SYMMETRIC+ASYMMETRIC
1. Generate a secret key (called a session key) at random.
2. Encrypt the message using the session key and symmetric
algorithm.
3. Encrypt the session key with the recipient’s public key.
This becomes the “digital envelope”.
4. Send the encrypted message and the digital envelope to
the recipient.

57

DIGITAL ENVELOPE (CONT’D)
Alice (finds a vulnerability)

Bob (company representative)

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

58

</details>
