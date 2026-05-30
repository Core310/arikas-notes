---
title: "compSec Lecture8"
---

# compSec Lecture8

![[compSec CS5173/lecture slides/compSec Lecture8.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20Lecture8.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20Lecture8.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Message Authentication

OUTLINE LAST TIME
•
•

Mode of operations

‒

ECB, CBC, …

Triple DES

‒
‒

Meet-in-the-middle attack
Procedure of triple DES

2

MESSAGE MANIPULATION
• We can see that bits in a plaintext can be easily
manipulated, then how to detect such manipulation?
Confidentiality
DES, AES

what we learned

DoS
Attacks

Integrity

Availability
3

MESSAGE AUTHENTICATION/INTEGRITY
• Encryption easily provides confidentiality of messages

‒ only the party sharing the key (the “key partner”) can decrypt the
ciphertext

• How to use encryption to authenticate messages and verify
the integrity? That is,
‒ prove the message was created by the key partner
‒ prove the message wasn’t modified by someone other than the
key partner

4

APPROACH #1
• If the decrypted plaintext looks plausible, then conclude
ciphertext was produced by the key partner

‒ i.e., illegally modified ciphertext, or ciphertext encrypted with the
wrong key, will probably decrypt to random-looking data

• Question: is it easy to verify data is plausible-looking?

5

APPROACH #1 (CONT’D)
• Approach may work when the message is plaintext

01010101001010100011101010010101
00101010001010101011101010010101
01010100011101001001010101010101

Hello World !!!!!!!!!
key

DH*!osaud082182

data
modification
01010101001010101100001010010101
00101010001010101011101010010101
01010100011101001001010101010101

6

APPROACH #1 (CONT’D)
• But, what if the plaintext itself is random-looking?

01010101001010100011101010010101
00101010001010101011101010010101
01010100011101001001010101010101

00101010101110010101010010101000
0111010001110100100000011111111111
01010100100101010101010110000000

key
11010100010110000000100101010101
00010010010101010101100001010011
11010000100111000010101010010100

data
modification
01010101001010101100001010010101
00101010001010101011101010010101
01010100011101001001010101010101

7

APPROACH #2: PLAINTEXT+CIPHERTEXT
Sender
P

P
K
E

C

C

Receiver
E
K

C
Compare

Accept
/Reject

• Send plaintext and ciphertext

• receiver encrypts plaintext, and compares result with
received ciphertext

8

APPROACH #2: ANALYSIS
P

C

• Can the receiver detect the following?

• An attacker modifies the P part.
• An attacker modifies the C part.
• The attacker modifies both P and C parts.

• Disadvantages?

9

APPROACH #3: USE RESIDUE
• Encrypt plaintext using DES CBC mode, with IV set to zero
‒ the last (final) ciphertext output block is called the residue
M1
IV = 00…0
Key

M2

64

E
64

C1

M3

M4
64

64

E

E
64

C2

padding

E
64

C3

64

RESIDUE
10

APPROACH #3… (CONT’D)
Sender

Receiver
P

P
K
E

Residue
only

E
K

Residue
only
Compare

• Transmit the plaintext and this residue

• receiver computes same residue, compares to the
received residue
• forgeries / modifications highly likely to be detected

11

APPROACH #3: ANALYSIS
P

Residue

• Can the receiver detect the following?

• An attacker modifies the P part.
• An attacker modifies the C part.
• The attacker modifies both P and C parts.

• Disadvantages?

12

MESSAGE AUTHENTICATION CODE (MAC)
P

MAC

MAC is a short piece of information used to
authenticate a message, usually appended to
the end of the message

• The residue is a message authentication code (MAC)
or message integrity code (MIC)
• More specifically, called CBC-MAC. (recall that CBC is a
mode of operation to chain cipher blocks together).

• Many other ways to generate MAC.

13

CONFIDENTIALITY AND AUTHENTICITY
• So far we’ve got

‒ confidentiality (encryption),
or…
‒ Authenticity/integrity (CBC-MAC)

• Can we get both at the same time with one cryptographic
operation?

14

ATTEMPT #1
Sender
P

K

K
E

C
Residue
only

C

residue

D

P’

Receiver

E Residue
only
Compare

• Is it working?
– Confidentiality?
– Integrity?
15

ATTEMPT #1: ANALYSIS
C

Residue

• Confidentiality – Yes
• Integrity – No
– The attacker just needs to transmit the last block
twice.

16

ATTEMPT #2: ENCRYPT-ANDAUTHENTICATE
Sender

K2

P

E

K2
C

E

D
Residue
only

Receiver
P’

K1
E

Residue
only
Compare

K1

• Is it working?
– Confidentiality?
– Integrity?
17

ATTEMPT #3: ENCRYPT-THEN-AUTHENTICATE
Sender K2
P

E

K2
C

D
E

Residue
only

Receiver
P’

K1
E

Residue
only
Compare

K1

• Is it working?
– Confidentiality?
– Integrity?
18

ATTEMPT #4: AUTHENTICATE-THEN-ENCRYPT
Sender

K2

P

E
E

C

Residue only

K2 Receiver
D

P’

Compare

K1
E
Residue
only

K1

• Is it working?
– Confidentiality?
– Integrity?
19

ATTEMPTS #2-4: ANALYSIS
• Generally, secure combination of encryption and
authentication is hard.
• Encrypt-then-authenticate design is a secure combination,
generally better than
‒ encrypt-and-authenticate
‒ authenticate-then-encrypt

20

DISADVANTAGES
Sender K2
P

E

K2
C

D
E

Receiver
P’

Residue
only

K1
E

Residue
only
Compare

K1

• Encryption-based MAC can be slow
– e.g., CBC-MAC

• We need two keys K1 and K2.
21

WHAT WE KNOW
• Achieving confidentiality does not necessarily mean achieving integrity.
‒ Fully encrypting a message does not mean data tampering (integrity violation)
can be detected.

• MAC is an effective way to protect integrity.

‒ CBC-MAC in symmetric cryptography works but is slow
‒ Integrity protection usually incurs overhead.

• Efficient design is needed to achieve both confidentiality and integrity
‒ Fast MAC design widely used today based on hash functions.
• Hash function based MAC is called HMAC

22

</details>
