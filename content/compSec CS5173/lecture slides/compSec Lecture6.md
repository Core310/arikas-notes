---
title: "compSec Lecture6"
---

# compSec Lecture6

![[compSec CS5173/lecture slides/compSec Lecture6.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/compSec%20CS5173/lecture%20slides/compSec%20Lecture6.pdf) | [Download Local](/compSec%20CS5173/lecture%20slides/compSec%20Lecture6.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS 4173/5173
COMPUTER SECURITY
Data Encryption Standard (DES)

OUTLINE LAST TIME
• Key size

– 56 bits used by DES were
adequate in the 80’s
– 128 bits are adequate for now
– 5 more key bits per decade to
stay “sufficiently” hard to break

Input block i
Li
f

• Feistel Cipher

‒ Decryption is the same as
encryption, only reversing the
order in which round keys are
applied.
‒ Function f can be anything

Ri
Ki

⊕
Li+1

Ri+1

Output block i+1
2

DES (DATA ENCRYPTION STANDARD)
• Standardized in 1976 by NBS (National Bureau of
Standards), now NIST (National Institute of Science and
Technologies)
‒ proposed by IBM,
‒ Feistel cipher

• Criteria (official)

‒ provide high level of security
‒ security must reside in key, not algorithm
‒ not patented
‒ efficient to implement in hardware (make slow in software).

3

DES BASICS
• Blocks: 64 bit plaintext input,
64 bit ciphertext output
• Rounds: 16
• Key: 64 bits

‒ every 8th bit is a parity bit, so really 56 bits long

64 bit
plaintext
block

DES Encryption

64 bit
ciphertext
block

56 bit key (+ 8 bits parity)
4

DES TOP LEVEL VIEW
64-bit Input

56-bit Key

Initial Permutation

Generate
round keys

Round 1
Round 2

…

Round 16

48-bit K1
48-bit K2
48-bit K16

Swap Halves
Final Permutation
64-bit Output

5

INITIAL AND FINAL PERMUTATIONS
• Initial permutation given below

‒ input bit #58output bit #1, input bit
#50 output bit #2, …

64-bit Input

56-bit Key

Initial Permutation

Generate
round keys
48-bit K1

Round 1
Round 2

58

50

42

34

26

18

10

2

60

52

44

36

28

20

12

4

62

54

46

38

30

22

14

6

64

56

48

40

32

24

16

8

57

49

41

33

25

17

9

1

59

51

43

35

27

19

11

3

61

53

45

37

29

21

13

5

63

55

47

39

31

23

15

7

…
... 16
Round

48-bit K2
48-bit K16

Swap Halves
Final Permutation
64-bit Output

6

INITIAL… (CONT’D)
• Final permutation is just inverse of initial
permutation, i.e.,
‒ input bit #1 output bit #58
‒ input bit #2 output bit #50
‒…

64-bit Input

56-bit Key

Initial Permutation

Generate
round keys
48-bit K1

Round 1
Round 2
…
... 16
Round

48-bit K2
48-bit K16

Swap Halves
Final Permutation
64-bit Output

7

INITIAL… (CONT’D)
• Note: Initial Permutation is fully specified
(independent of key)
‒ Does this improve security?
‒ why needed?

8

KEY GENERATION: FIRST PERMUTATION

8 rows

• First step: throw out 8 parity bits, then
permute resulting 56 bits
57
1
10
19
63
7
14
21

49
58
2
11
55
62
6
13

7 columns
41 33 25
50 42 34
59 51 43
3 60 52
47 39 31
54 46 38
61 53 45
5 28 20

64-bit Input

56-bit Key

Initial Permutation

Generate
round keys
48-bit K1

Round 1
Round 2

17
26
35
44
23
30
37
12

9
18
27
36
15
22
29
4

…
... 16
Round

48-bit K2
48-bit K16

Swap Halves
Final Permutation
64-bit Output

Parity bits left out:
8,16,24,…
The output: all bits from left
to right, top to bottom
9

KEYGEN: PROCESSING PER ROUND
C i-1 28 bits

D i-1 28 bits

Circular Left Shift

Circular Left Shift

Permutation
with Discard
48 bit
Ki
Ci

28 bits

Di

Rounds i =
1,2,9,16:
left circular
shift 1 bit
Other rounds:
left circular
shift 2 bits

28 bits
10

KEYGEN: PERMUTATION WITH DISCARD
• 28 bits  24 bits, each half of key
Left half of Ki = permutation of Ci

14
3
23
16

17
28
19
7

11
15
12
27

24
6
4
20

1
21
26
13

Bits discarded:
9,18,22,25

5
10
8
2

Right half of Ki = permutation of Di

Bits discarded:
35,38,43,54

41
30
44
46

52
40
49
42

31
51
39
50

37
45
56
36

47
33
34
29

55
48
53
32
11

ONE DES (FEISTEL) ROUND
Input block i
Li

64-bit Input

56-bit Key

Initial Permutation

Generate
round keys
48-bit K1

Round 1
Round 2
…
... 16
Round

Ri

48-bit K2
48-bit K16

Swap Halves
Final Permutation

f

Ki

64-bit Output

⊕
Li+1

Ri+1

Output block i+1
1212

DES ROUND: F (MANGLER) FUNCTION
function f = “Mangler”
32-bit half block

Input block i
Li
Ri
f

⊕
Li+1
Ri+1
Output block i+1

Expansion
Ki

48
bits

K
i

S-Box
(substitution)
Permutation
32-bit half block
13

F: EXPANSION FUNCTION
• 32 bits  48 bits
these bits are repeated
32

1

2

3

4

5

4

5

6

7

8

9

8

9

10

11

12

13

12

13

14

15

16

17

16

17

18

19

20

21

20

21

22

23

24

25

24

25

26

27

28

29

28

29

30

31

32

1

14

XOR THE KEY

32

1

2

3

4

5

14

17

11

24

1

5

4

5

6

7

8

9

3

28

15

6

21

10

8

9

10

11

12

13

23

19

12

4

26

8

12

13

14

15

16

17

16

7

27

20

13

2

16

17

18

19

20

21

41

52

31

37

47

55

20

21

22

23

24

25

30

40

51

45

33

48

24

25

26

27

28

29

44

49

39

56

34

53

28

29

30

31

32

1

46

42

50

36

29

32

From Expansion function in Mangler

XOR

From key generation process

15

THE RESULT AFTER XOR

The result is a table of bits with 6 columns and 8 rows
Each row (6 bits) will enter an S-Box Si
1

0

0

1

1

1

0

0

1

1

0

0

1

1

0

1

0

1

1

1

1

1

1

0

1

1

0

0

0

1

0

0

0

1

1

1

0

1

0

1

0

1

0

1

0

0

1

0
16

F: S1 (SUBSTITUTION)
A S-Box is a look-up table (non-linear part for confusion)
• each row and column contain different numbers
b2|b3|b4|b5  0
b1 | b6

1

2

3

4

5

6



0

E

4

D

1

2

F

B

1

0

F

7

4

E

2

D

2

4

1

E

88

D

6

2

3

F

C

8

2

4

9

1

…

Example: input= 100110, output= 1000
input = 101101, output =?

F

17

4 BIT OUTPUT FOR EACH ROW

48 bits to 32 bits
1101

1

0

0

1

1

1

0

0

1

1

0

0

0111

1

1

0

1

0

1

0001

1

1

1

1

1

0

1110

1

1

0

0

0

1

0

0

0

1

1

1

1001

0

1

0

1

0

1

0001

0

1

0

0

1

0

1000



1100

48 bits

S-Box
(substitution)
32 bits

18

F: PERMUTATION
• All bits from the S-Box will be again permuted
• 32bits  32bits
16
29

7
12

20
28

21
17

1

15

23

26

5

18

31

10

2

8

24

14

32

27

3

9

19

13

30

6

22

11

4

25

S-Box
(substitution)

Permutation

19

DES IMPLEMENTATION
• That’s it!
• Operations

‒ Permutation
‒ Swapping halves
‒ Substitution (S-box, table lookup)
‒ Bit discard
‒ Bit replication
‒ Circular shift
‒ XOR

• Hard to implement? HW: No, SW: Yes

20

DESIRABLE PROPERTY: AVALANCHE EFFECT
• a small change
f function:
• should achieve
avalanche effect
• output bits should
be uncorrelated

Round 1 ⊕
Round 2 ⊕

R0
f

Round n ⊕

K1
K2

f
…

Big change!
Any output bit should
be inverted (flipped)
with probability .5

K

L0

…

Number of rounds should
be large enough!

Plaintext

f

Ciphertext Dr. Peng Ning

Kn

21

DES AVALANCHE EFFECT: EXAMPLE
• 2 plaintexts with 1 bit difference:
0x0000000000000000 and
0x8000000000000000 (hex format)
encrypted using the same key:
0x016B24621C181C32 (hex format)
• Resulting ciphertexts differ in 34 bits
(out of 64)
• Similar results when keys differ by 1 bit

22

EXAMPLE (CONT’D)
• An experiment: number of rounds vs. number of bits
difference
Round #

0

1

2

3

4

5

6

7

8

Bits
changed

1

6

21

35

39

34

32

31

29

9

10

11

12

13

14

15

16

42 44 32

30

30

26

29

34

23

DES: KEYS TO AVOID USING
• “Weak keys”: These are keys which, after the first key
permutation, are:
‒ 28 0’s followed by 28 0’s
‒ 28 1’s followed by 28 1’s
‒ 28 0’s followed by 28 1’s
‒ 28 1’s followed by 28 0’s

• Property of weak keys

‒ Easy clue for brute force attacks.
‒ Sixteen identical subkeys.
‒ Encrypting twice produces the original plaintext.

24

DES KEY SIZE
• 56 bits is currently too small to resist brute force attacks
using readily-available hardware
• Ten years ago it took $250,000 to build a machine that could
crack DES in a few hours
• Do it in software?
‒ 256 = 72057594037927936
‒ 1 billion every second

72057594037927936
‒
= 2.3 years
109

26

TODAY’S CAPABILITY
• Massive Cracking Array

 One hundred trillion guesses per second



72057594037927936
= 721 seconds!!
1014

27

WHAT ABOUT 128 BIT KEY
2128
• 14 = 100 quadrillion years!!
10

‒ 1 quadriollion is 1,000 trillion, and 1,000,000 billion.

• Life of earth: 4.5 billion years
• Life of universe: 13.7 billion years

28

CRYPTANALYSIS OF DES
• Differential cryptanalysis exploits differences between
encryptions of two different plaintext blocks
ciphertext1

ciphertext2

ciphertext3

• Linear cryptanalysis requires known plaintext / ciphertext
pairs, analyzes relationships to discover key value
plaintext

Encryption

ciphertext

• No attacks on DES so far are significantly better than brute
force attacks, for comparable cost
29

ADVANCED ENCRYPTION STANDARD (AES)
• Selected from an open competition, organized by NSA

‒ winner: Rijndael algorithm, standardized as AES
‒ http://en.wikipedia.org/wiki/Advanced_Encryption_Standard

• Some similarities to DES (rounds, round keys, alternate
permutation and substitution)
‒ but not a Feistel cipher

• Block size = 128 bits
• Key sizes = 128, 192, or 256 (DES: 56 bits)

30

AES-128 OVERVIEW
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

128-bit K10

128-bit Output
31

AES ASSESSMENT
• No known successful attacks on full AES
‒ Best attacks work on 7−9 rounds

• For brute force attacks, AES-128 will need much more effort
than DES

32

ATTACKS ON AES
• Differential Cryptanalysis: based on how differences in
inputs correlate with differences in outputs
• Linear Cryptanalysis: based on correlations between input
and output
• Side Channel Attacks: Implementations of the cipher on
systems inadvertently leak data
‒ Timing Attacks: measure the time it takes to do operations

33

</details>
