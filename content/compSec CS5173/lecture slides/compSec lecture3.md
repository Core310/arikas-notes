---
title: "compSec lecture3"
---

# compSec lecture3

![[compSec CS5173/lecture slides/compSec lecture3.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20lecture3.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20lecture3.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Some Early Ciphers

OUTLINE LAST TIME
• DoS/DDoS attack

‒ Attack and defense strategies

• Cryptography vs Steganography
• Plaintext, ciphertext, encryption, decryption, key, cipher
• Three types of attack
‒ Ciphertext only attacks
‒ Known plaintext attacks
‒ Chosen plaintext attacks

• Perfectly secure ciphers vs computationally secure ciphers
2

CAESAR CIPHER
• Replace each letter with the one 3 letters later in the
alphabet
plaintext
alphabet

A B C D E F G H I

J K …

ciphertext
alphabet

A B C D E F G H I

J K …

CAT

FDW

Trivial to break
3

A VARIANT OF CAESAR CIPHER
• Replace each letter by one that is δ positions later, where δ
is selectable (i.e., δ is the key)
• example: IBM  HAL (for δ=25)

• Also, trivial to break with modern computers (how many
possibilities?)
plaintext
alphabet

A B

C

D E

F

G H I

J

K

…

ciphertext
alphabet

A B

C

D E

F

G H I

J

K

…

… …

4

MONO-ALPHABETIC CIPHERS
• Generalized substitution cipher: randomly map one letter to
another (How many possibilities?)
• 26! (≈ 288)

• The key must specify which permutation; how many bits
does that take?
• log2(26!) (≈ 88 bits)
plaintext
alphabet

A B

C

D E

F

G H I

J

K

…

ciphertext
alphabet

A B

C

D E

F

G H I

J

K

…
5

ATTACKING MONO-ALPHABETIC CIPHERS
• Known plaintext attack
• Frequency of single letters in English language, taken from a
large corpus of text:

6

ATTACKING… (CONT’D)
• Suppose the attacker intercepts the following message
UXGPOGZCFJZJTFADADAJEJNDZMZHBBGZGGKQGVVGXCDIWGX
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
3 2 2 4 1 2 8 1 1 4 1 0 1 1 1 1 1 0 0 1 1 2 1 3 0 5

FREQUENCY
ANALYSIS IS
AMAZING
NOW WE NEED
BETTER CIPHER
7

LETTER FREQUENCIES

8

LETTER FREQUENCIES
LIVITCSWPIYVEWHEVSRIQMXLEYVEOIEWHRXEXIPFEMVEWHKVSTYLXZIXLIKIIXPIJVSZEYP
ERRGERIMWQLMGLMXQERIWGPSRIHMXQEREKIETXMJTPRGEVEKEITREWHEXXLEXXMZIT
WAWSQWXSWEXTVEPMRXRSJGSTVRIEYVIEXCVMUIMWERGMIWXMJMGCSMWXSJOMIQXL
IVIQIVIXQSVSTWHKPEGARCSXRWIEVSWIIBXVIZMXFSJXLIKEGAEWHEPSWYSWIWIEVXLISX
LIVXLIRGEPIRQIVIIBGIIHMWYPFLEVHEWHYPSRRFQMXLEPPXLIECCIEVEWGISJKTVWMRLI
HYSPHXLIQIMYLXSJXLIMWRIGXQEROIVFVIZEVAEKPIEWHXEAMWYEPPXLMWYRMWXSGS
WRMHIVEXMSWMGSTPHLEVHPFKPEZINTCMXIVJSVLMRSCMWMSWVIRCIGXMWYMX

I
is the most common single letter
XL is most common bigram
XLI is the most common trigram
I => e
X => t
L => h
E

E

e
is the most common single letter
th is most common bigram
the is the most common trigram

is the second common single letter

=> a
9

LETTER FREQUENCIES
heVeTCSWPeYVaWHaVSReQMthaYVaOeaWHRtatePFaMVaWHKVSTYhtZetheKeetPeJVSZaYPa
RRGaReMWQhMGhMtQaReWGPSReHMtQaRaKeaTtMJTPRGaVaKaeTRaWHatthattMZeTWAWS
QWtSWatTVaPMRtRSJGSTVReaYVeatCVMUeMWaRGMeWtMJMGCSMWtSJOMeQtheVeQeVetQ
SVSTWHKPaGARCStRWeaVSWeeBtVeZMtFSJtheKaGAaWHaPSWYSWeWeaVtheStheVtheRGa
PeRQeVeeBGeeHMWYPFhaVHaWHYPSRRFQMthaPPtheaCCeaVaWGeSJKTVWMRheHYSPHth
eQeMYhtSJtheMWReGtQaROeVFVeZaVAaKPeaWHtaAMWYaPPthMWYRMWtSGSWRMHeVatM
SWMGSTPHhaVHPFKPaZeNTCMteVJSVhMRSCMWMSWVeRCeGtMWYMt

V

=> r

R

=> s

M
Z

=> i
=> m

…

…

…

10

LETTER FREQUENCIES
hereuponlegrandarosewithagraveandstatelyairandbroughtmethebeetlefromaglasscaseinwhichitwase
ncloseditwasabeautifulscarabaeusandatthattimeunknowntonaturalistsofcourseagreatprizeinascientifi
cpointofviewthereweretworoundblackspotsnearoneextremityofthebackandalongoneneartheotherthes
caleswereexceedinglyhardandglossywithalltheappearanceofburnishedgoldtheweightoftheinsectwasv
eryremarkableandtakingallthingsintoconsiderationicouldhardlyblamejupiterforhisopinionrespectingit

Hereupon Legrand arose, with a grave and stately air, and brought me the beetle from a glass case
in which it was enclosed. It was a beautiful scarabaeus, and, at that time, unknown to naturalists—of
course a great prize in a scientific point of view. There were two round black spots near one
extremity of the back, and a long one near the other. The scales were exceedingly hard and glossy,
with all the appearance of burnished gold. The weight of the insect was very remarkable, and, taking
all things into consideration, I could hardly blame Jupiter for his opinion respecting it.

Frequency Analysis: https://en.wikipedia.org/wiki/Frequency_analysis

11

VIGENERE CIPHER
• A set of mono-alphabetic substitution rules (shift amounts)
is used
‒ the key determines what the sequence of rules is
‒ also called a poly-alphabetic cipher

• Ex.: key = (3 1 5)

‒ i.e., substitute first letter in plaintext by letter+3, second letter by
letter+1, third letter by letter+5
‒ then repeat this cycle for each 3 letters

12

VIGENERE… (CONT’D)
• Ex.: plaintext = “BANDBAD”
plaintext message
B

A

N

D

B

A

D

1

5

3

1

5

3

S

G

C

F

G

shift amount
3

ciphertext message
E

B

What are the possible attacks?

− Frequency analysis?
13

HISTORY
• First developed 1553
• easy to understand, but resisted all attempts to break it for
three centuries
• A general method to crack 1863

14

HILL CIPHERS
• Encrypts m letters of plaintext at each step
‒ i.e., plaintext is processed in blocks of size m

• Encryption of plaintext p to produce ciphertext c is
accomplished by: c = Kp
‒ the m×m matrix K is the key
‒ decryption is multiplication by inverse: p = K-1c
‒ remember: all arithmetic mod 26

15

HILL CIPHER EXAMPLE
• For m = 2, let K = 1

3

Plaintext p =

2 ,
5

K-1 = 21

2
25

A

B

X

Y

D

G

0

1

23

24

3

6

3

1 2  0 
=
c Kp
= 
 1 
3
5

 

(21*15+2*13) mod 26
(3*23+5*24) mod 26

=(1*0+2*1) mod 26

Ciphertext c =

2

5

19

7

15

13

C

F

T

H

P

N
16

PERMUTATION CIPHERS
• The previous codes are all based on substituting one symbol
in the alphabet for another symbol in the alphabet

• Permutation cipher: permute (rearrange, transpose) the
letters in the message

‒ the permutation can be fixed, or can change over the length of
the message

17

PERMUTATION… (CONT’D)
• Permutation cipher ex. #1:

‒ Permute each successive block of 5 letters in the message
according to position offset <+1,+3,-2,0,-2>
plaintext message
W H

Y

Y

O

W H

Y

C

A

N

T

I

F

L

Y

W W O H C

H

N

A

Y

F

T

Y

L

I

ciphertext message
18

PERMUTATION… (CONT’D)
•Permutation cipher ex. #2:
• arrange plaintext in blocks of n columns and m rows
• then permute columns in a block according to a key K
n=4
Key (perm. of columns)  4

1
5
9

Plaintext
symbol
positions

3
2
6
10

1
3
7
11

2
4
8
12

m=3

ciphertext sequence (by plaintext position) for one block
3

7

11

4

8

12

2

6

10

1

5

9
19

PERMUTATION… (CONT’D)
• A longer example: plaintext =
“ATTACK POSTPONED UNTIL TWO AM”
Key:
plaintext

4
A
O
D
W

3
T
S
U
O

1
T
T
N
A

2
A
P
T
M

5
C
O
I
X

7
K
N
L
Y

6
P
E
T
Z

ciphertext
TTNA APTM TSUO AODW COIX PETZ KNLY

PERFECTLY SECURE CIPHERS
1. Ciphertext does not reveal any information about which
plaintexts are more likely to have produced it
‒ e.g., the cipher is robust against ciphertext only attacks

and
2. Plaintext does not reveal any information about which
ciphertexts are more likely to be produced

‒ e.g, the cipher is robust against known/chosen plaintext attacks

21

ONE-TIME PAD (OTP)
• Idea

‒ generate a random bit string (the key) as long as the
plaintext, and share with the other communicating party
‒ encryption: XOR this key with plaintext to get ciphertext
‒ decrypt: XOR same key with ciphertext to get plaintext

plaintext

plaintext

ciphertext

⊕

⊕

Key

XOR
• For bits a, b

• a XOR b = (a + b) mod 2

• 0 XOR 0 = 0
• 1 XOR 0 = 1
• 0 XOR 1 = 1
• 1 XOR 1 = 0

OTP… (CONT’D)
plaintext

01011001 01000101 01010011

key (pad)

00010111 00001010 01110011

ciphertext

01001110 01001111 00100000

⊕

=

=

⊕

• Why can’t the key be reused?
• Is this secure?

OTP SECURITY
• OTP is proven to be perfectly secure!

‒ We will get it next lecture. Get ready for some probability stuff

• Try to explain in an intuitive way.
plaintext

01011001 01000101 01010011

key (pad)

00010111 00001010 01110011

ciphertext

01001110 01001111 00100000

⊕

=

=

⊕

CIPHER SUMMARY
• Easy thing:

‒ design a cipher that maps a plaintext into a random-looking
ciphertext.

• Hard things:

‒ hard to develop an attack.
‒ hard to prove the cipher is secure against all possible attacks

CS 4173/5173
COMPUTER SECURITY
Some “Key” Issues
Typical Ciphers Today

TYPES OF CRYPTOGRAPHY
• Number of keys

‒ Secret key cryptography: one key
‒ Public key cryptography: two keys
‒ Hash functions: no key

• The way in which the plaintext is processed

‒ Stream cipher: encrypt input message one symbol at a time
‒ Block cipher: divide input message into blocks of symbols, and
processes the blocks in sequence
• May require padding

SECRET KEY CRYPTOGRAPHY
plaintext

encryption
key

ciphertext
Same key

decryption

plaintext

key

• Same key is used for encryption and decryption
• Also known as
• Symmetric cryptography
• Conventional cryptography

PUBLIC KEY CRYPTOGRAPHY
plaintext

encryption

ciphertext

Public key

decryption
Private key

• Invented/published in 1975
• A public/private key pair is used

‒ Public key can be publicly known
‒ Private key is kept secret by the owner of the key

• Much slower than secret key cryptography
• Also known as
‒ Asymmetric cryptography

plaintext

HASH ALGORITHMS
Message of
arbitrary length

Hash H

A fixed-length
short message

• Also known as

• Message digests
• One-way transformations
• One-way functions
• Hash functions

• Length of H(m) much shorter than length of m
• Usually fixed lengths: 128, 160, 256, 512 bits

SUMMARY
• Early ciphers aren’t nearly strong enough
‒ Still need some efforts to crack.

• Key issues

‒ Secret key cryptography
‒ Public key cryptography
‒ Hash

WEAK LINK IN SECURITY
• Cryptography is a fundamental, and most carefully
studied, component of security

• Modern ciphers are based on computational difficulty.
• Not usually the “weak link”.
• Today, human beings are often considered the “weakest link”
in a security system

</details>
