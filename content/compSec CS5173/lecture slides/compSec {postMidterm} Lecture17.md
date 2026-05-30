---
title: "compSec {postMidterm} Lecture17"
---

# compSec {postMidterm} Lecture17

![[compSec CS5173/lecture slides/compSec {postMidterm} Lecture17.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture17.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20{postMidterm}%20Lecture17.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Authentication Design

DIFFIE-HELLMAN: PROCESS
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
2

SECURITY ANALYSIS
Alice

Bob

Public knowledge g, p
Generate random
number SA

No public/private
key

secrets

Compute and send TA

Generate random
number SB

= gSA mod p

No public/private
key

Can an attacker get SA from TA, why??
SA is the discrete logarithm of gSA mod p
3

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

4

MAN-IN-THE-MIDDLE ATTACK
• Trudy impersonates as Alice to Bob, and also
impersonates as Bob to Alice
Alice

K1 = (gSA) S”B”

Bob

Trudy

K2 = (gSB) S”A”
5

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
2. [Carol’s public key is 676554]Ted & [Alice’s public key is 876234]carol

Knowing the CA’s public key, users can verify the
certificate and authenticate Alice’s public key

6

EXAMPLE
• CA – everyone knows CA’s public key.
‒ CA is trusted.

• Alice wants to communicate to the real Bob
‒ She sends a request to CA
‒ Obtains a digital certificate from CA:
Bob’s public key is
1902A12B2318871BF1
Expiration: 1/1/2020
[signed by CA]

Bob’s D-H g, p, and T are
129381,102A7182019284FF, 910A81213
Expiration: 1/1/2020
[signed by CA]

Q: digital certificate vs digital signature?
7

YAHOO’S CERTIFICATE

If the browser cannot verify the certificate:

8

AUTHENTICATION
• Authentication is the process of reliably verifying certain
information.
• Examples
‒ Message authentication

• Verify that a message has not been altered without proper authorization.

• We have already learned: CBC-MAC, HMAC, RSA, …
‒ User authentication

• Allow a user to prove his/her identity to another entity (e.g., a system, a
device).

9

AUTHENTICATION MECHANISMS
• Password-based authentication

‒Use a secret quantity (the password) that
the prover states to prove he/she knows it.
‒Threat: password guessing/dictionary attack
• a dictionary attack is to try a large number of
possibilities of passwords.

Alice

I’m Alice, the password is fiddlesticks

Computer
System
10

AUTHENTICATION MECHANISMS (CONT’D)
• Address-based authentication

‒ Assume the identity of the source can be inferred based on the
network address from which packets arrive.

‒Threat: Spoof of network address

• Not authentication of source addresses

11

AUTHENTICATION MECHANISMS (CONT’D)
• Cryptographic authentication protocols
‒Basic idea:

• A prover proves some information by performing a
cryptographic operation on a quantity that the verifier
supplies.

‒Usually reduced to the knowledge of a secret
value
• A symmetric key
• The private key of a public/private key pair

12

CS 4173/5173
COMPUTER SECURITY
Password Authentication

PASSWORD-BASED USER AUTHENTICATION
• User demonstrates knowledge of a secret value to
authenticate
‒ most common method of user authentication

challenge
response

14

SOME ISSUES FOR PASSWORD SYSTEMS
• A password should be easy to remember but hard to guess
‒ that’s difficult to achieve!

• Some questions

‒ what makes a good password?
‒ where is the password stored, and in what form?
‒ how is knowledge of the password verified?

15

PASSWORD STORAGE
•
•
•

Storing unencrypted passwords in a file is high risk

‒ compromising the file system compromises all the stored
passwords

Better idea: use the password to compute a one-way
function (e.g., a hash, an encryption), and store the
output of the one-way function
When a user inputs the requested password…

1. compute its one-way function
2. compare with the stored value

16

ATTACKS ON PASSWORDS
• Suppose passwords can be from 1 to 9 characters in
length
• Possible choices for passwords = 261 + 262 + ... + 269 =
5 * 1012
• At the rate of 1 password per millisecond, it will take
on the order of 150 years to test all passwords
‒ Play with https://www.grc.com/haystack.htm

• Unfortunately, not all passwords are equally likely to
be used

17

COMMON PASSWORD CHOICES
• Pet names
• Common names
• Common words
• Dates
• Variations of above (backwards, append a few digits, etc.)

18

DICTIONARY ATTACKS
• Attack 1 (online):

‒ Create a dictionary of common words and names and their simple
transformations
‒ Use these to guess the password

Eagle
Wine
Rose
…

Eagle

Yes!

Dictionary
19

DICTIONARY ATTACKS (CONT’D)
• Attack 2 (offline):

‒ Usually F is public and so is the password file
• Most of the time, F is known hash function

‒ Compute F(word) for each word in the dictionary
‒ A match gives the password

Eagle
Wine
Rose
…

Dictionary

F(Eagle)=XkPT

TdWx%
XkPT
KYEN
…

Password file
20

PASSWORD SALT
• To make the dictionary attack a bit more difficult
• Salt is a n-bit number between 0 and 2n
• Derived from, for example, the system clock and the
process identifier

PASSWORD SALT (CONT’D)
• Storing the passwords
Password + Salt

F is usually a hash function

F

F(Password + Salt)
Password file

Username, Salt, F(Password + Salt)

Ref: https://www.cyberciti.biz/faq/understanding-etcshadow-file/
22

PASSWORD GUIDELINES FOR USERS
1.Initial passwords are system-generated, have to be changed
by user on first login
2.User must change passwords periodically
3.Passwords vulnerable to a dictionary attack are rejected
4.User should not use same password on multiple sites

23

OTHER PASSWORD ATTACKS
• Technical

‒ eavesdropping on traffic that may contain unencrypted passwords
‒ “Trojan horse” password entry programs

• “Social”

‒ careless password handling or sharing
‒ phishing

24

CS 4173/5173
COMPUTER SECURITY
The S/Key Protocol

USING “DISPOSABLE” PASSWORDS
• Simple idea: generate a long list of passwords, use
each only one time
‒ attacker gains little/no advantage by eavesdropping on
password protocol, or cracking one password

• Disadvantages

‒ storage overhead
‒ users would have to memorize lots of passwords!

• Alternative: the S/Key protocol

‒ based on use of one-way (e.g. hash) function

26

S/KEY PASSWORD GENERATION
1. Alice selects a password x
2. Alice specifies n, the number of passwords to
generate
3. Alice’s computer then generates a sequence of
passwords
‒
‒
‒
‒

x1 = H(x)
x2 = H(x1)
…
xn = H(xn-1)

x
x (Password)
H

H

H

H

x1

x2

x3

x4
27

GENERATION… (CONT’D)
4. Alice communicates (securely) to a server the last
value in the sequence: xn
• Key feature: no one knowing xi can easily find an xi-1
such that H(xi-1) = xi
‒ only Alice possesses that information

28

AUTHENTICATION USING S/KEY
•

Assuming server is in possession of xi …
Server

Alice
i
xi-1

verifies
H(xi-1) = xi
Is dictionary attack still possible?
29

LIMITATIONS
•
•

Value of n limits number of passwords

‒ need to periodically regenerate a new chain of passwords

Does not authenticate server! Example attack:

1. real server sends i to fake server, which is pretending to be Alice
2. fake server sends i to Alice, who responds with xi-1
3. fake server then presents xi-1 to real server

30

BIOMETRICS
•
•

Relies upon physical characteristics of people to
authenticate them
Desired properties

1.
2.
3.
4.
5.
6.

uniquely identifying
very difficult to forge / mimic
highly accurate
easy to scan or collect
fast to measure / compare
inexpensive to implement

31

ASSESSMENT
• Convenient for users (e.g., you always have your
fingerprints, never have to remember them), but…
‒ potentially troubling sacrifice of private information
‒ no technique yet has all the desired properties

32

ASSESSMENT (CONT’D)

33

EXAMPLE BIOMETRIC TECHNOLOGIES
• Signature / penmanship
• Fingerprints
• DNA
• Palm geometry
• Retina scan
• Iris scan
• Face recognition
• Voice recognition

34

BEHAVIOR AUTHENTICATION
• Human behavior depends on a person’s habit,
education, living environment, family, ….
• Data from computers/sensors reflects human
behavior, and can be sometimes used to authenticate
the identity of a person.

In Mission Impossible 5

35

</details>
