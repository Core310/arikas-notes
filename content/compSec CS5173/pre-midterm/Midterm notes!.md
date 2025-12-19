# Basic Concepts 
- Confidentiality 
	-  Protect information access, only being exposed to users who should have access.
- Integrity
	-  Assurance that information hasn't been modified, or if it has, an audit is kept with what is changed
- Availability:
	- Information can be reached at all times with the right keys. Eg. information queried is always available (no DDOS attacks preventing queries from reaching the server).

- Difference between cryptography/steganography
	- Cryptography conceals contents, Steganography concerns existence  
	- symmetric: Dependent on one key to encrypt/decrypt (one time pad)
	- asymmetric: Private/public key TLS handshake, slower

- DoS attacks? 
		- Rating/flow limiting Attack identification and elimination
# Symmetric Crypto
- Block ciphers 
- DES (Data Encryption Standard) 
	- 56 bit key, not fit for modern security (every 8th bit parity bit) 
	- Can be brute forced 
	- Double/Triple-DES: Apply DES multiple times  
- AES (Advanced Encryption Standard)
	- Longer key sizes + safer + faster than DES 

| Step                  | Description                                          |
| --------------------- | ---------------------------------------------------- |
| **Key Expansion**     | Derives round keys from the main key                 |
| **AddRoundKey**       | XORs state with round key                            |
| **SubBytes**          | Byte substitution using S-Box                        |
| **ShiftRows**         | Row shifting for diffusion                           |
| **MixColumns**        | Column transformation for mixing (except last round) |
| **Final AddRoundKey** | XORs with final round key                            |


# Modes of Operations? 
SALT: Random piece of data that's added to a password before it's hashed
## ECB (Electronic Code Book)
- **Rarely recommended**. Can be used for encrypting very short, random data where patterns don't matter (e.g., one-time authentication tokens).
- **Weakness** against replay and frequency analysis attacks. Use: Pattern (repeating patterns)/Dictionary (set of possible plaintext known?)
- Splits plaintext into fixed-size blocks and encrypts each block independently using the same key.
- No chaining between blocks.
## CBC (Cipher Block Chaining)
- Good for **encrypting large files and data transmissions** (e.g., disk encryption, databases). Avoid in real-time or performance-critical applications due to lack of parallelism.
- **Weakness** Bit Flip: attacker can flip specific bits in a ciphertext block to manipulate the decrypted plaintext
- Each plaintext block is XOR’d with the previous ciphertext block before encryption.
## CFB (Cipher Feedback)
- Used for encrypting **streaming data** (e.g., network traffic, real-time audio/video encryption).
- Uses a shift register and encrypts an IV first, then XORs it with the plaintext to generate ciphertext.
- **Weakness** Bit Flip again 
## CTR (Counter)
- Best for **high-speed applications** like VPNs, disk encryption, and performance-sensitive environments.
- Uses a counter value that is encrypted, then XOR’d with the plaintext to produce ciphertext.
- Counter is incremented for each block.
- **Weakness** Bit Flip again
# Hash Func? 
- Properties (See assignment 2)

| Algorithm   | Output Size | Security | Speed                    | Common Uses                         |
| ----------- | ----------- | -------- | ------------------------ | ----------------------------------- |
| **MD5**     | 128-bit     | ❌ Weak   | ⚡ Fast                   | Legacy checksums, non-security uses |
| **SHA-1**   | 160-bit     | ❌ Broken | 🔸 Moderate              | Legacy systems, Git hashing         |
| **SHA-256** | 256-bit     | ✅ Secure | 🐢 Slower than MD5/SHA-1 | Cryptography, digital signatures    |
- Password Storage 
- File Authentication 
- Commitment Protocols 
- HMAC


- Apps of hash func?
	- Message authentication: HMAC vs CBC-MAC
	- Message integrity check 
	- Password with salt (what is salt?) 
	- Commitment protocols


# Meet-in-the-middle attack?
- attacker constructs patterns that propagate from both ends to the middle of the cipher, in some cases by partial key-guessing

![[Pasted image 20250303064306.png]]

| Feature                  | DSA (Digital Signature Algorithm)                            | RSA (Rivest-Shamir-Adleman)                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Algorithm Type**       | Signature-only algorithm                                     | Supports both encryption & signatures                        |
| **Key Length**           | Typically 1024, 2048, or 3072 bits                           | Typically 2048 or 4096 bits                                  |
| **Security**             | Secure with strong hash functions                            | Secure but requires larger key sizes for same security level |
| **Speed (Signing)**      | Faster                                                       | Slower                                                       |
| **Speed (Verification)** | Slower                                                       | Faster                                                       |
| **Key Generation**       | Faster                                                       | Slower                                                       |
| **Mathematical Basis**   | Based on modular exponentiation & discrete logarithm problem | Based on integer factorization problem                       |
| **Usage**                | Digital signatures (not encryption)                          | Encryption, digital signatures, and key exchange             |
| **Common Applications**  | Government & FIPS-compliant digital signatures               | SSL/TLS, PGP, SSH, and digital certificates                  |
| **Standardization**      | FIPS 186-4 (NIST Standard)                                   | PKCS#1 (RFC 8017)                                            |


# P & NP
Basically time takes to break vs verify
- P: the set of questions that can be solved in polynomial time 
- NP: the set of questions for which an answer can be verified in polynomial time

 if P=NP we could efficiently find the key without knowing it beforehand (all encryption broken!)

