---
sch_sem: sp_25
---
# Design Influence
We chose to build a platform similar to the [magic-wormhole protocal](https://magic-wormhole.readthedocs.io/en/latest/), a python tool which was built with the sole purpose to send a message from one computer to another in the most secure way possible over the internet. In this manner, we chose to use SPAKE2, in paticular a well supported python version of it, [python-spake2](https://github.com/warner/python-spake2) which was a library that implemented the password-authenticated key exchange (PAKE) algorithm that allowed two parties to share some weak password (generally through some verbal or physical means) to derive a strong shared secret key between them. 

# Design Requirements:
- With a key no less than 56 bits, what cipher you should use?
    - 
- DO NOT directly use the password as the key, how can you generate the same key between Alice and Bob to encrypt messages?
    - 
- What will be used for padding?
    - 
- Example of GUI and it running a simple message between both hosts
    - 
- How should Alice and Bob set up an initial connection and also maintain the connection with each other on the Internet? (You may refer to socket/network programming in a particular computer language)
    - 
- If Alice or Bob sends the same message multiple times (e.g., they may say “ok” many times), it is desirable to generate different ciphertext each time. How to implement this?
    - 
- Design a key management mechanism to periodically update the key used between Alice and Bob. Justify why the design can enhance security.
    - stub

## Extra Credit 
- Think about this scenario: if you can hide the detailed procedure of your encryption algorithm, how would you improve the security by designing a new algorithm? For example, you may do two encryptions using different standard ciphers, then XOR the two outputs together. Please give your new design and justify its security and efficiency. (5 pts)
    - 
- If Alice and Bob do not have a pre-shared password (or passphrase) and wish to establish a secure connection, they should use a protocol that allows them to authenticate each other and negotiate a shared secret over an insecure channel. Please explain your design and implement it in your project. Note, if you choose to complete this question, you do not need to assume that Alice and Bob share the same password. (5 pts)
    - 
___

# Assigned Project: Secure Instant Point-to-Point (P2P) Messaging

In this project, you need to design a secure instant messaging tool for Alice and Bob (like gtalk, skype or icq chat). The system supports the following functions:

- Alice and Bob can use the tool to send messages to each other.
- Alice and Bob share the same password (or passphrase), they must use the password to set up the tool to correctly encrypt and decrypt messages shared between each other.
- Each message during Internet transmission must be encrypted using a key with length no less than 56 bits.

You can use any computer language (Java, C++, Python, ...) and leverage any existing open-source software, tools, or commands (e.g., md5sum, sha1sum) to design the system.

Some design issues/requirements you need to consider:

- With a key no less than 56 bits, what cipher you should use?
- DO NOT directly use the password as the key, how can you generate the same key between Alice and Bob to encrypt messages?
- What will be used for padding?
- A graphical user interface (GUI) is strongly preferred. When send a message, display the sent ciphertext. When receive a message, display the received ciphertext and decrypted plaintext.
- How should Alice and Bob set up an initial connection and also maintain the connection with each other on the Internet? (You may refer to socket/network programming in a particular computer language)
- If Alice or Bob sends the same message multiple times (e.g., they may say “ok” many times), it is desirable to generate different ciphertext each time. How to implement this?
- Design a key management mechanism to periodically update the key used between Alice and Bob. Justify why the design can enhance security.
- Have a good plan to show your design in the report (e.g., you may take the screenshot of your functions and the results, and then explain how your functions achieves the results.)

Justify and show all your designs and major functions in the report.

Extra Credit (10 pts):

- Think about this scenario: if you can hide the detailed procedure of your encryption algorithm, how would you improve the security by designing a new algorithm? For example, you may do two encryptions using different standard ciphers, then XOR the two outputs together. Please give your new design and justify its security and efficiency. (5 pts)
- If Alice and Bob do not have a pre-shared password (or passphrase) and wish to establish a secure connection, they should use a protocol that allows them to authenticate each other and negotiate a shared secret over an insecure channel. Please explain your design and implement it in your project. Note, if you choose to complete this question, you do not need to assume that Alice and Bob share the same password. (5 pts)