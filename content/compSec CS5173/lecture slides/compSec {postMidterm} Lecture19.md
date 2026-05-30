---
title: "compSec {postMidterm} Lecture19"
---

# compSec {postMidterm} Lecture19

![[compSec CS5173/lecture slides/compSec {postMidterm} Lecture19.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture19.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture19.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Key Distribution Center (KDC)

OUTLINE LAST TIME
• Design a perfect authentication protocol requires non-trivial
efforts
‒ Can be based on symmetric or public key systems

• Some guidelines to check a protocol:

‒ The initiators should authenticate themselves first
‒ Need asymmetric challenge-response, be aware of reflection
attacks
• Make two parties do different things

‒ Provide mutual authentication
‒ Avoid message decryption

• Design based on public key:

‒ RSA key negotiation
‒ Diffie-Hellman with authentication
2

TRUSTED KEY SERVERS
• How do a large number of users authenticate each
other?

‒ inefficient / impractical for every pair of users to negotiate
a secret key or share passwords

• Alternative: everybody shares a key with (and
authenticates to) a single trusted third-party

3

TRUSTED INTERMEDIARIES
• Problem: authentication for large networks
• Solution #1
‒ Key Distribution Center (KDC)

• Representative solution: Kerberos

‒ Based on secret key cryptography

• Solution #2

‒ Public Key Infrastructure (PKI)
‒ Based on public key cryptography

4

KEY DISTRIBUTION CENTER
• Shared keys between the Key Distribution Center
(KDC) and users
KA-KDC

A

KB-KDC
B
C

KE-KDC

E

KDC
KC-KDC KD-KDC

D

Q: Can users establish the same key with KDC?
5

(SIMPLIFIED) EXAMPLE OF USE
•

Alice wishes to communicate securely with Bob;
Alice has previously shared KA-KDC with the KDC, Bob
has negotiated KB-KDC

1. Alice requests from the KDC a session key to use with Bob
2. KDC generates session key KS, sends to Alice, encrypted
with KA-KDC
3. KDC also sends KS to Bob, encrypted with
KB-KDC
•

Alice and Bob can then communicate using KS

6

A HIERARCHY OF KDCS
KA-K1

A

KB-K1
B
C

KDC-1

Domain 2

KC-K1

KE-K2 E
KDC-2

Domain 1

KD-K2

D

7

MEDIATED AUTHENTICATION (WITH KDC)
KDC operation (in principle)
Alice wants to talk to Bob

Alice

KAlice{KAB}

KDC

KBob{KAB}

Bob

Generate KAB

• Some concerns

‒ Trudy may claim to be Alice and talk to KDC
• Trudy cannot get anything useful

‒ Messages encrypted by Alice using KAB may arrive at Bob
before KDC’s message KBob{KAB} arrive
8

MEDIATED AUTHENTICATION (WITH KDC)
Alice

Alice wants to talk to Bob

Generate KAB

KAlice{KAB}, KBob{KAB}

KDC

Bob

I’m Alice, here is my ticket: KBob{KAB}

ticket

• Must be followed by a mutual authentication
exchange
‒ To confirm that Alice and Bob have the same key

9

NEEDHAM-SCHROEDER PROTOCOL
• Classic protocol for authentication with KDC

‒ Many others have been modeled after it (e.g., Kerberos)

Alice

N1, Alice wants to talk to Bob
KAlice{N1, “Bob”, KAB, ticket to Bob},
where ticket to Bob = KBob{KAB, Alice}

Generate KAB

KDC

Bob

ticket to Bob, KAB{N2}
KAB{N2−1, N3}
KAB{N3−1}

Q: Why N1, N2, N3?
10

NEEDHAM-SCHROEDER PROTOCOL (CONT’D)
• A vulnerability

‒ When Trudy gets a previous key used by Alice, Trudy may
reuse a previous ticket issued to Bob for Alice
• Example of relay attacks

‒ Essential reason

• The ticket to Bob stays valid even if Alice changes her key

11

EXPANDED NEEDHAM-SCHROEDER PROTOCOL
I want to talk to you
KBob{NB}

Alice

Generate KAB; extract NB
N1, Alice wants to talk to Bob, KBob{NB}
KAlice{N1, “Bob”, KAB, ticket to Bob},
where ticket to Bob = KBob{KAB, Alice, NB}

KDC

Bob

ticket to Bob, KAB{N2}
KAB{N2−1, N3}
KAB{N3−1}

12

AUTHENTICATION IN LARGE NETWORKS
• Problem: authentication for large networks
• Solution #1
‒ Key Distribution Center (KDC)
‒ Based on secret key cryptography
‒ Representative solution: Kerberos

• Solution #2

‒ Public Key Infrastructure (PKI)
‒ Based on public key cryptography
‒ Representative solution: SSL/TLS

13

CS 4173/5173
COMPUTER SECURITY
Kerberos

GOALS OF KERBEROS
1. User ↔ server mutual authentication
2. Users should only need to authenticate once to
obtain services from multiple servers
3. Should scale to large numbers of users and servers
‒ makes use of a Key Distribution Center so servers don’t
need to store information about users

15

SOME PROPERTIES
• Kerberos uses only secret key (symmetric) encryption
‒ originally, only DES, but now 3DES and AES as well

• A stateless protocol

‒ KDCs do not need to remember what messages have
previously been generated or exchanged
‒ the state of the protocol negotiation is contained in the
message contents

16

EXAMPLE SCENARIO
• Alice wants to make use
of services from X,
contacts the KDC to
authenticate, gets ticket
to present to X

Server X
Alice

• Bob wants to make use of
services from X and Y,
contacts the KDC, gets
tickets to present to X and
Y

KDC

Bob
Server Y17

THE KDC
•

•

Infrastructure needed (KDC components)

1. the database of user information (IDs, password hash, shared
secret key, etc.)
2. an authentication server (AS)
3. a ticket-granting server (TGS)

The KDC of course is critical and should be carefully
guarded

18

SECRETS MANAGED BY THE KDC
•
•

A personal key used for encrypting/decrypting the
database
A master shared key for each server

19

CS 4173/5173
COMPUTER SECURITY
Basics of the
Kerberos v4 Standard
(details not required in homework/exams）

PROTOCOL SKETCH (COMMON CASE)
#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT

Alice
#4 Request
service from V

TGT(ticket-granting ticket)
#5 Alice wants service from V

KDC

Alice’s #6 Here is key + ticket to use
Workstation
#7 Here is Alice’s ticket for
service + key to use
#8 Alice’s request for service is
granted, using key supplied

Server
V
21

MSG#1: ENTER PASSWORD
#1 AW: “Alice” | password
• Alice types in her user ID and password in unencrypted
form into her workstation
#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT

1 AW:
Alice“Alice” | password

#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied
22

MSG#2: REQUEST FOR AUTHENTICATION
#2. WKDC: IDA | TS2 | IDKDC
• Workstation sends a message to KDC with Alice’s ID (in unencrypted form)
• Many of these messages contain timestamps, for a) liveness, and b) anti-replay
(relay attacker: intercept some messages and reply them later)
Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied
23

MSG#3: AUTHENTICATION SUCCESS
#3. KDCW:

KA-KDC(IDA | TS3 | Lifetime3 | KA-S | IDKDC | TGT)

• KDC sends Alice’s workstation a session key and a TGT (ticket-granting ticket)
‒ encrypted with the master key shared between Alice and the KDC

• KA-KDC is derived from Alice’s password, used to decrypt session key KA-S

Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied
24

MSG#3: … (CONT’D)
TGT: KA-KDC(IDA | AddrA | KA-S | LifetimeTGT | TSTGT | IDKDC)

• The TGT is what allows the KDC to be stateless
‒ means simpler, more robust KDC design
‒ allows replicated KDCs (see later)

• The TGT contains

‒ the session key to be used henceforth
‒ the user ID (Alice)
‒ the valid lifetime for the TGT

25

MSG#4: ALICE REQUESTS SERVICE V
#4 AW: ReqServ(V)
• Alice enters a request in the workstation to access the service
provided by V
Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied
26

MSG#5: WORKSTATION REQUESTS SERVICE V
#5 WKDC: TGT | authenticator5 |TS5 | Lifetime5 | IDV
• Workstation sends to the KDC…

‒ the TGT previously granted, the server she wishes to request service from
‒ an authenticator for this message

Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied
27

MSG#5… (CONT’D)
KA-S (IDA | TSauth5)
• The authenticator is an encrypted timestamp
‒ Why?

• The KDC is able to verify

• Alice’s identify
• the time that Alice required the service
• Check the lifetime

‒ (reminder: timestamps requires user and KDC clocks to be
loosely synchronized)

28

MSG#6: KDC GENERATES TICKET
#6 KDCW:
•
•

KA-S (IDA | TS6 | Lifetime6 | KA-V | IDV | TGTV)

KDC decrypts the TGT and…
‒

checks that lifetime has not expired; gets the shared key KA-S

KDC sends back to workstation
‒

identity of the server; a shared key (KA-V) for Alice and the server; a ticket
(TGT) for Alice to present to V
Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied

29

MSG#6… (CONT’D)
TGTV: KV-KDC(IDA | AddrA| KA-V | LifetimeTKT | TSTKT |
IDV)

• The ticket is encrypted by the master key shared
between Sever V and the KDC KV-KDC
• The ticket contains

‒ ID of the initiating user (i.e. Alice)
‒ shared key KA-V
‒ lifetime of the ticket

30

MSG#7: WORKSTATION CONTACTS SERVER
#7 WV: IDV | TGTV | authenticator7
• Message contains
‒ ticket (from the KDC); authenticator

Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service is
V
granted, using key supplied
31

MSG#7… (CONT’D)
KA-V(IDA | Chksumauth7 | TSauth7)
• Authenticator is valid for 5 minutes
‒ loose synchronization required

32

MSG#8: SERVER AUTHENTICATES TO ALICE
#8 VW : KA-V(Chksumauth7 + 1)
• Reply to Alice’s workstation contains

‒ checksum sent by Alice, incremented by 1

Alice

#1 Login +
Password

#2 Alice wants to authenticate
#3 Here’s Alice’s TGT
#5 Alice wants service from V

#4 Request
service from Alice’s #6 Here is key + ticket to use
V
Workstation

KDC

#7 Here is Alice’s ticket for
service + key to use
Server
#8 Alice’s request for service
V
is granted, using key supplied
33

DONE!
1. Alice has authenticated to KDC (which is trusted by
server)
2. Server has authenticated to Alice
3. A session key has been negotiated, for encryption,
message authentication, or both.

34

</details>
