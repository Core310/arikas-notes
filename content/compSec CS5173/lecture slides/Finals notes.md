---
sch_sem: sp_25
---
#  symmetric/asymmetric
public easier 2 nego key, symm is decentralized
- symmetric: Dependent on one key to encrypt/decrypt (one time pad)
- asymmetric: Private/public key TLS handshake, slower
- DES (Data Encryption Standard) 
    - Can be brute forced 
- AES (Advanced Encryption Standard)
    - Longer key sizes + safer + faster than DES 
- Why do we need to use asymmetric crypto to negotiate a session key?
    - Asymmetric encryption is slow, so it's common to use asymmetric encryption to pass a symmetric encryption key to the other party and use something fast like AES to transfer data securely

|     |     |     |
| --- | --- | --- |

#  Number theory

## Modulo and Conguruent mod
  - $r$ is the remainder of $a$ divided by $n$,  written $r = a \bmod n$
Example: $12 = 2 \times 5 + 2 \quad \Rightarrow \quad 2 = 12 \bmod 5$
- $a$ and $b$ are congruent modulo $n$, written  
   $a \equiv b \bmod n$, if $a \bmod n = b \bmod n$

Example: $7 \bmod 5 = 12 \bmod 5 \quad \Rightarrow \quad 7 \equiv 12 \bmod 5$
- relative prime
    - 2 ints no common factors other than 1 aka gcd(a,b)=1

### Mod proterties
- **Commutative laws**  
  - $(w + x) \bmod n = (x + w) \bmod n$  
  - $(w \times x) \bmod n = (x \times w) \bmod n$
- **Associative laws**  
  - $[(w + x) + y] \bmod n = [w + (x + y)] \bmod n$  
  - $[(w \times x) \times y] \bmod n = [w \times (x \times y)] \bmod n$
- **Distributive law**  
  - $[w \times (x + y)] \bmod n = [(w \times x) + (w \times y)] \bmod n$

## Factoring 
Example: Factor 84

$84 \div 2 = 42 \Rightarrow 2$ is a factor  
$42 \div 2 = 21 \Rightarrow 2$ again  
$21 \div 3 = 7 \Rightarrow 3$ is a factor  
7 is a prime → done
So:  
$84 = 2^2 \times 3 \times 7$

## Euler’s totient
Counts the numbers lesser than a number say n that do not share any common positive factor other than 1 with n or in other words are co-prime with n.

Formula:
- Let $n = p_1^{a_1} p_2^{a_2} \cdots p_r^{a_r}$ be the prime factorization of $n$.
$$
\varphi(n) = n \left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right)
$$

#### Examples
- ex factor $n = 36$
    - Factor step
    	- $36 = 2^2 \times 3^2$
    - Apply formula  
    	- $\varphi(36) = 36 \left(1 - \frac{1}{2} \right) \left(1 - \frac{1}{3} \right)=12$ 
    - Hence 12 positive integers ≤ 36 that are coprime to 36.
- ex factor $n = 100$ 
    1) $100 = 2^2 \times 5^2$
    2) $\varphi(100) = 100 \left(1 - \frac{1}{2} \right) \left(1 - \frac{1}{5} \right)=40$
- multiplicative inverses: just means reciprocal or $x^{-1}$ 

## Extended Euclid’s algorithm
- GCD? 
- Euclid’s algorithm (normal)
Finds GCD of 2 ints 
```c
int  EuclidAlgo(int m, int n){
    if(n == 0) return m;
        return greatestCommonDivisor(n, m % n);
}
```

## Euler's Theorem
- For every $a$ and $n$ that are relatively prime
    - $a^{\phi(n)} \equiv 1 \pmod{n}$
 
> [!NOTE] Example
>  $a = 3$, $n = 10$ (which are relatively prime)  
$3^{\phi(10)} \equiv 1 \pmod{10}$

**Verification:**  
$\phi(10) = \phi(2 \times 5) = \phi(2) \times \phi(5) = 1 \times 4 = 4$  
$3^{\phi(10)} = 3^4 = 81 \equiv 1 \pmod{10}$

## Fermat's Little Theorem
- If $p$ is prime 
    - and $a$ is a positive integer not divisible by $p$,  
    - then $a^{p-1} \equiv 1 \pmod{p}$
> [!NOTE] Example
>   11 is prime, 3 not divisible by 11,  
  so $3^{11-1} = 59049$ $(=5368 \times 11 + 1) \equiv 1 \pmod{11}$

# public key crypto

## RSA (mod inverse thingy)

![[Pasted image 20250506134636.png|500]]
Secure cos hard 2 factor large n
- Length 2048 (see table if this differs that's right)
- Encrypt w/ pub key, decrypt w/ private
- Auth: Sign w/ private, verify w/ public
- Algo:
1. Receiver chose 2 large prime num $p$ & $q$. Product, $n = pq$, = $\frac{1}{2}$ of public key
2. Receiver calc $\phi(pq) = (p - 1)(q - 1)$ & pick num $e$ relatively prime to $\phi(pq)$. $e$ usu lrg tho can be as small as 3 $e$ will be the other half of the public key.
3. Receiver calc mod inverse $d$ of $e$ mod $\phi(n)$. $de \equiv 1 \pmod{\phi(n)}$. $d$  = private key
4. Receiver distribute both parts of public key: $n$ and $e$. $d$ kept secret


![[Pasted image 20250503165352.png|400]]

## **Diffie-Hellman** key negotiation
- nego shared secret over pub comms but **DOES NOT provide auth**!
- Both combine their secret keys to create new key
    - A&B chose large prime $p$ & num $g$ s/t $1 < g < p$, can b public, A&B hv secret $n,m$
    - A sen B $g^n \pmod p$ and B OPA
    - A&B computes $g^{mn} \pmod p$
    - Ex
    	-  $p = 191$ and $g = 2$. 
    	- A pick 42 & B 33  
    	- A computes $2^{42} \equiv 20 \pmod{191}$ &B computes $2^{33} \equiv 103 \pmod{191}$. 
    	- Send results 2 e/o 
    	- A recv 10, computes $103^{42} \equiv 115 \pmod{191}$, & B computes $20^{33} \equiv 115 \pmod{191}$ done!

### Proof 
Esentially being asked to prove $(g^b \bmod{p})^a \bmod{p} = (g^a \bmod{p})^b  \bmod{p}$

where p is a prime number, g is a primitive root of p, and a and b are integers.

You can expand $(g^b \bmod p)$ as $g^b + pK$ by the definition of $\text{mod}$.

Then $(g^b + pK)^a = g^{ab} + \binom{a}{1}g^{(a-1)b}pK + \ldots + (pK)^a$

Since all but the first of the terms in the binomial expansion contain a factor of $p$, $(g^b \bmod p)^a \equiv g^{ab} \pmod p$
- discrete log problem
    - Computing exponent $n$ $\equiv$ "mod-$p$ base-$g$ logarithm" of $g^n$ but ! possible
    - There is no known algorithm for efficiently computing discrete logs

### Wat if w/ OTP? 
- Agree on rand key?
1. A gen random key $S$ w/ OTP key $A$ $E_A(S) = A \oplus S$  sen 2 B
3. B get $E_A(S)$ encrypt w/ OTP key $B$:  
   $E_B(E_A(S)) = B \oplus (A \oplus S) = A \oplus B \oplus S$  sen to A
4. A decrypt msg w/ own key $A$:  $D_A(E_B(E_A(S))) = (A \oplus B \oplus S) \oplus A = B \oplus S$ , sen 2 B
5. B do same
   $D_B(B \oplus S) = (B \oplus S) \oplus B = S$
rslt in same shared secrety key
---
Secure against open channel? No!

Open ca see all thre msg
- $X_1 = A \oplus S$
- $X_2 = A \oplus B \oplus S$
- $X_3 = B \oplus S$
Rslt can compute:
1. $X_1 \oplus X_3 = (A \oplus S) \oplus (B \oplus S) = A \oplus B$
2. $X_2 \oplus (A \oplus B) = (A \oplus B \oplus S) \oplus (A \oplus B) = S$



# authy protocals
- 2 methods
- m1
      1. A&B -m rand nonce $R_1$ encrypt w/ B pub key: $K_{Bob-P}(R_1)$ (2 rounds)
      2. Sesh key derived as $H(R_1 \oplus R_2)$, whr $H$ = hash func
      3.   atker need 2 find A&B 2 get $R_1$ & $R_2$, resilient vs single-pt fail.
- m2
  1. A&B perform DH key exchange rslt in shared secret
  2. A&B **sign the quantities they send** (e.g., $g^a$ and $g^b$) w/ private keys
  - Forward secrecy of DH w/ auth frm digital sigs, prot vs MITM 
- mutural authy, Both parties prove e/o, req sesh key estab
- reflect atk
    - prevent: make A&B hv diff challenge
    - initiator 1st 2 prove id
    - MUST distinguish between initiator and responder (directionality)
    - Old keys must not be used,  keys linked tgt 
- MITM 
    - attacker constructs patterns that propagate from both ends to the middle of the cipher, in some cases by partial key-guessing

![[Pasted image 20250506142254.png|500]]

#  KDC/PKI (no need full steps)
Literially just key infrastructure they dont rly do anything else, no decryption, no telling u what keys to use etc 
- Key Distribution Center (KDC)  
    - Representative solution: Kerberos  
    - Use Secret key cryptography   
    - Simplier but single point of fail
    -  all usrs must trust kdc
    - easily scale, centralized key management
- Public Key Infrastructure (PKI)  
    - Based on public key cryptography
    - contains: 
    	- digital cert aka pub key cert
    	- Private key tokens
    	- Registration authority,Certification authority
    	- Certification management system
    - disadvantages
    	- Speed, Private Key Compromise, expesive setup but cost effective long run.
    	- relies on relies on Certificate Authorities to issues/manage\

## Digital certs
- Certificates issued by PKI Digital certificates vs digital signature 
    -  certs issued by PKI CA validate pub key+id
    -  signatures auth+ prot usr msg. Small amnt of usrs can issue these certs, centralized 

## Needham Schroeder protocol 
- cryptographic protocol used for mutual authentication and establishing a shared secret key between two parties
- 2 methods
    - PGP
    	- (A identifies itself and sends a nonce, encrypted with B’s public key)
    	- B proves receipt of N_A and sends its own nonce back
    	- A confirms receipt of N_B, proving it’s alive
    - KDC
    	- requests session key to communicate 
    	- KDC replies with session key and ticket
    	- A forwards the ticket to B
    	- B challenges A with a nonce encrypted using session key
    	- A proves knowledge of session key by modifying and returning nonce

## Kerberos  
- Goals: User server mutual auth
- auth once to service multiple servers
- scale to large n of users/servers
- belong to KDC
- uses only secret key (3DES/AES)
- alice auth ot kdc, server 

## SSL/TLS 
how shit comms w/ e/o in web
- Secure Sockets Layer and Transport Layer Security protocol
    -  Handshake protocal
    	- PPG, shared secret btwn both usrs
    - Record protocal
    	- Use shared secret 2 estab tunnel 
    	- symmetric encryption (like AES) and MACs, does encryption aft handshake
- TLS = upgraded ver of SSL 
    - One round trip -> lower latency, encrypted handshake, modern ciphers
Autonav port numbers (implement later with websockeet)
- Port 80 = HTTPw/ TCP, Port 443 = HTTPS

# Other stuff

## Homomorphic Encryption 
- motivation and applications? 
    - arbitrary operations (such as addition or multip
    - lication) apply 2 encrypted data (note that **RSA** CANNOT do multiplication and hence not fully homomorphic)
    - need to perform computations on encrypted data without decrypting it
- basic operations 
- **Why do we need to add noise, and how to do the noise-deduction**
    - Noise results in GCD attack not working or any attack 
    - Noise is small term added into the ciphertext while encrypting.
    - decryption function does not work if the noise is greater than a certain maximum value
    - bootstrapping (noise-deduction) is applying the idea (due to Gentry) of homomorphically evaluating the decryption operation using an encryption of the secret key. 
    	- Fully resets noise, high cost 
    	- homomorphically decrypts a ciphertext and re-encrypts it—effectively resetting the noise

## **Tor**
- What information could be disclosed when you visit a website? 
    - identity,apps/browsers/device/location/activity/data
- What’s Tor? 
    - client proxy
    - NSA can track down and see people who use it
- what crypto Tor uses? 
    - SHA-1, SHA-256, and SHA3-256
- Why can Tor hide some information?
    - First node still knows ur IP! (guard node)
    - randomly selected nodes within the Tor network

# Block chain
- Proof of work? (central idea)
    - solution that is difficult to find but is easy to verify
![[Pasted image 20250502201730.png|500]]
- Basic architecture, centralized or distributed?
    - distributed system need to agree on following:
    	- initial sys state
    	- history of transactions
    	- current sys state
    - Blockchain gets the functionality of a CA, withoutneeding a CA
    - Blocks = recorded data, hashed chain = connectors
    - 2 parties solve same time? Node finds best solution to N makes them winner

# Sample Qs

## Section 1
- Which of the following is NOT computationally difficult? Verifying large primes
- What is false abt tor netowrk?
    - No tor node can know ur IP (first node knows)

## Section 2

#### 1. $2^{-1} \mod 3$
We want to find $x$ such that $2x \equiv 1 \pmod{3}$.

Try small values:
- $2 \cdot 1 = 2 \not\equiv 1$
- $2 \cdot 2 = 4 \equiv 1 \pmod{3} \quad \checkmark$

Answer: $2^{-1} \mod 3 = 2$

#### 2. $23^{81} \mod 55$

Factor: $55 = 5 \cdot 11$

Step 1: Mod 5  
$23 \equiv 3 \pmod{5}$  
$\phi(5) = 4 \Rightarrow 81 \equiv 1 \pmod{4} \Rightarrow 3^{81} \equiv 3 \pmod{5}$

Step 2: Mod 11  
$23 \equiv 1 \pmod{11} \Rightarrow 1^{81} = 1 \pmod{11}$

Step 3: Chinese Remainder Theorem  
Find $N$ such that:  
$N \equiv 3 \pmod{5}$ and $N \equiv 1 \pmod{11}$

Try $N = 1 + 11k$:  
- $k = 2 \Rightarrow N = 23 \equiv 3 \pmod{5} \quad \checkmark$

Answer: $23^{81} \mod 55 = 23$

#### 3. $\varphi(55)$

Since $55 = 5 \cdot 11$ (distinct primes):  
$\varphi(55) = \varphi(5) \cdot \varphi(11) = (5 - 1)(11 - 1) = 4 \cdot 10 = 40$

Answer: $\varphi(55) = 40$

#### 4. $\gcd(333, 121)$

Use the Euclidean Algorithm:  
$333 = 2 \cdot 121 + 91$  
$121 = 1 \cdot 91 + 30$  
$91 = 3 \cdot 30 + 1$  
$30 = 1 \cdot 30 + 0$

Answer: $\gcd(333, 121) = 1$