---
title: "compSec {postMidterm} Lecture16"
---

# compSec {postMidterm} Lecture16

![[compSec CS5173/lecture slides/compSec {postMidterm} Lecture16.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture16.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture16.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Digital Certificate and PKI

HAVE YOU EVER SEEN THIS?
In Chrome

In Firefox

2

HOW TODAY’S NETWORK WORKS
A
D
C
B

E

Q: How to make sure that the
communication between you
and Yahoo is secure!
3

SOLUTION 0

C
B

E

1. User and Yahoo use the same shared key
(e.g. AES 128)
Security and Efficiency?
4

SOLUTION 1

C
B

E

1. User and Yahoo use Diffie-Hellman to
negotiate a key?
• Security and Efficiency?
5

SOLUTION 2

C
B

E

2. Yahoo generates public and private keys and
share the public key to the public?
• Security and Efficiency?
6

SOLUTION 3

C
B

E

3. User generates public and private keys and
share the public key to the public?
• Security and Efficiency?
7

RECALL: AUTHENTICATION IN PUBLIC KEY
CRYPTO
Message integrity with digital signatures
• Alice computes hash, signs with her private key (no one else
can do this without her key)
• Bob verifies hash on receipt using Alice’s public key using the
verification equation

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
8

RECALL: AUTHENTICATION (CONT’D)
• Authentication in public key crypto:

‒ Hash function to hash the message into a digest
‒ The action of sign the digest with (private key)
‒ The action of verify the digest with (public key)

9

TRUSTED KEY SERVERS
• How do a large number of users authenticate each other?

‒ inefficient / impractical for every pair of users to negotiate a secret
key or share passwords

• Alternative: everybody shares a key with (and authenticates
to) a single trusted third-party

10

TRUSTED INTERMEDIARIES
• Problem: authentication for large networks
• Solution #1
‒ Public Key Infrastructure (PKI)
‒ Based on public key cryptography

• Solution #2

‒ Key Distribution Center (KDC)

• Representative solution: Kerberos

‒ Based on secret key cryptography

11

WHAT IS PKI
• Informally, the infrastructure supporting the use of public
key cryptography.
• A PKI consists of
‒ Certificate Authority (CA)
‒ Certificates
‒ A repository for retrieving certificates
‒ A method of revoking/updating certificates

12

CERTIFICATION AUTHORITIES (CA)
• A CA is a trusted node that maintains the public keys
for all nodes (Each node maintains its own private key)
1
2

5

CA

3

6
4

If a new node is inserted in the network, only that new node and
the CA need to be configured with the public key for that node
13

CERTIFICATES
•
•
•

•

A CA is involved in authenticating users’ public keys by
generating certificates
A certificate is a signed message vouching that a particular
name goes with a particular public key
Example:

1. [Alice’s public key is 876234]carol
2. [Ted’s public key is 676554]Alice & [Alice’s public key is 876234]carol

Knowing the CA’s public key, users can verify the
certificate and authenticate Alice’s public key

14

CERTIFICATES
• Certificates can hold expiration date and time
• Alice keeps the same certificate as long as she has the same
public key and the certificate does not expire
• Alice can append the certificate to her messages so that
others know for sure her public key

15

EXAMPLE
• CA – everyone knows CA’s public key.
‒ CA is trusted.

• Alice wants to communicate to the real Bob
‒ She sends a request to CA
‒ Obtains a digital certificate from CA:
Bob’s public key is
1902A12B2318871BF1
Expiration: 1/1/2023
[signed by CA]

Bob’s D-H g, p, and T are
129381,102A7182019284FF, 910A81213
Expiration: 1/1/2023
[signed by CA]

Q: digital certificate vs digital signature?
16

CA ADVANTAGES
1. The CA does not need to be online. [Why?]
2. If a CA crashes, then nodes that already have their certificates can
still operate.
3. Certificates are not security sensitive (in terms of confidentiality).

 Can a compromised CA decrypt a conversation between two parties?
 Can a compromised CA fool Alice into accepting an incorrect public key
for Bob, and then impersonate Bob to Alice?

17

CA PROBLEMS
• What if Alice is given a certificate with an expiration time
and then is revoked (fired) from the system?

‒ Alice can still use her certificate till the expiration time expires.
‒ What kind of harm can this do?
‒ Alice can still exchange messages with Bob using her un-expired
certificate.
Bob’s public key is 1902A12B2318871BF1
Expiration: 1/1/2020
[signed by CA]

• Solution:

‒ Maintain a Certificate Revocation List (CRL) at the CA. A Certificate
is valid if (1) it has a valid CA signature, (2) has not expired, and (3)
is not listed in the CA’s CRL list.

18

TERMINOLOGY
• A CA signing a certificate for Alice’s public key
‒ CA → issuer

Alice → subject

 Alice wants to find the Bob’s public key
 Bob → target

 Anyone with a public key is a principal
 Alice is verifying a certificate (or a chain of certificates)
 Alice → verifier

 Trust anchor → A CA with a trusted public key

19

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

20

MONOPOLY MODEL
• One CA universally trusted by everyone
• Everyone must get certificates from this CA
• The public key to this organization is the only PKI trust
anchor and is embedded in all software and hardware

21

PROBLEMS
1.
2.
3.
4.
5.

There is NO universally trusted organization
Monopoly control. CA could charge any fees.
Once deployed, it is hard to switch to a different CA
Entire world’s security relies on this CA
Inconvenient.

22

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

23

MONOPOLY + REGISTRATION AUTHORITIES (RA)
• RAs are affiliated with the single CA and are trusted by this
CA.
• RAs check identities and provide the CA with relevant
information (identity and public key information) to
generate certificates.
• More convenient
• Still a monopoly. All the monopoly problems still hold.

24

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

25

DELEGATED CAS
• The trust anchor (known CA) issues certificates to other CAs
(delegated CAs) vouching for their trustworthiness as CAs.
• Users can obtain their certificates from delegated CAs
instead of the trust anchor CA.
• Example:

‒ [Carol’s public key is 676554]Ted & [Alice’s public key is 876234]carol
‒ Ted: trust anchor CA & Carol: delegated CA

26

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

27

OLIGARCHY MODEL
• A few trusted CAs and a certificate issued by any one of
them is accepted
• Competition between CAs is good
• Problems: Not as secure as the monopoly case

‒ Need to protect more CAs (instead of only one)
‒ Might be easier to trick a naïve user by inserting a bogus trust
anchor in the list of trusted CAs
• How do you trust a give list of trusted CAs?

‒ It is hard to examine the set of trust anchors and determine
whether some has modified the set

28

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

29

ANARCHY MODEL (WEB OF TRUST)
• Fully distributed approach. No CA or list of CA provided to
the users. Anyone can sign certificates for anyone else.
• Each user is responsible for configuring some trust anchors .
• A database maintains these certificates.
• Unworkable on a large scale.

30

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

31

NAME CONSTRAINTS
• A CA is responsible for certifying users in his domain only
‒ OU CA certifies OU students/faculty/staff

• Provides complete autonomy
• CAs need to be able to identify each other.
‒ How?

32

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

33

TOP-DOWN WITH NAME CONSTRAINTS
• Everyone agrees on a root organization and the root CA
delegates to other CA. (A centralized trust anchor (CA) +
delegated CAs).
• To get a certificate, contact the root.
• You will be redirected to an appropriate delegated CA.
• Delegated CAs can only issue certificates for users in their
domain.

34

PKI MODELS
1.
2.
3.
4.
5.
6.
7.
8.

Monopoly model
Monopoly + RA
Delegated CAs
Oligarchy model
Anarchy model
Name constraints
Top-down with name constraints
Bottom-up with name constraints

35

BOTTOM-UP WITH NAME CONSTRAINTS
• Each organization maintains its own CA, and CAs link to
others.

‒ A parent certifies its children and the children certify their parent

• The hierarchy is traversed in a bottom-up fashion.

‒ In addition to up and down links, cross links are allowed

36

BOTTOM-UP WITH NAME CONSTRAINTS
A
A/B
A/B/X

B/Y/Z
B/Y/Z/A

A/C
A/B/K

A/C/Y

B/Y/Z/C

B/Y/Z/A/C

How can A/C/Y verify the certificate of B/Y/Z/C?
How can B/Y/Z/C verify the certificate of A/C/Y?
Solution: Follow up-links until you encounter an
ancestor of the target, then follow at most one crosslink, and then follow down-links from there
37

YAHOO’S CERTIFICATE

If the browser cannot verify the certificate:

38

</details>
